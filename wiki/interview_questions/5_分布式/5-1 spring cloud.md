---
sidebar_position: 1
title: spring cloud
---
使用 spring social 功能首先需要按照 [安全管理](security.html)  中的步骤开启 spring security 的相关功能。

## 1 加入依赖

1 在项目的 pom 里增加 相关的依赖

```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-oauth2-client</artifactId>
        </dependency>
        <dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-oauth2-jose</artifactId>
</dependency>
```

## 2 自定义QQUserInfo实现OAuth2User接口

QQ用户信息无法使用默认的DefaultOAuth2User表示，需要提供一个自定义的QQUserInfo类并实现OAuth2User接口：

public class QQUserInfo implements OAuth2User {

```java
package com.yishuifengxiao.common.social.qq;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QQUserInfo implements OAuth2User {

    /**
     * 统一赋予USER角色
     */
    private List<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList("ROLE_USER");

    private Map<String, Object> attributes;

    private String nickname;

    @JsonProperty("figureurl")
    private String figureUrl30;

    @JsonProperty("figureurl_1")
    private String figureUrl50;

    @JsonProperty("figureurl_2")
    private String figureUrl100;

    @JsonProperty("figureurl_qq_1")
    private String qqFigureUrl40;

    @JsonProperty("figureurl_qq_2")
    private String qqFigureUrl100;

    private String gender;
    /**
     * 携带openId备用
     */
    private String openId;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public Map<String, Object> getAttributes() {
        if (this.attributes == null) {
            this.attributes = new HashMap<>();
            this.attributes.put("nickname", this.getNickname());
            this.attributes.put("figureUrl30", this.getFigureUrl30());
            this.attributes.put("figureUrl50", this.getFigureUrl50());
            this.attributes.put("figureUrl100", this.getFigureUrl100());
            this.attributes.put("qqFigureUrl40", this.getQqFigureUrl40());
            this.attributes.put("qqFigureUrl100", this.getQqFigureUrl100());
            this.attributes.put("gender", this.getGender());
            this.attributes.put("openId", this.getOpenId());
        }
        return attributes;
    }

    @Override
    public String getName() {
        return this.nickname;
    }


}
```
## 3 添加RestTamplate解析模板

```java
package com.yishuifengxiao.common.social.util;

import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

import java.util.ArrayList;
import java.util.List;

public class JacksonFromTextHtmlHttpMessageConverter extends MappingJackson2HttpMessageConverter {

    // 添加对text/html的支持
    public JacksonFromTextHtmlHttpMessageConverter() {
        List<MediaType> mediaTypes = new ArrayList<>();
        mediaTypes.add(MediaType.TEXT_HTML);
        setSupportedMediaTypes(mediaTypes);
    }

}
```



由于与QQ接口的交互上，响应类型都为text/html的形式，且RestTemplate没有默认支持该解析模型，所以应当自行添加。

主要是两类，一类text/html转普通文本，一类则是text/html转JSON对象。


```java
package com.yishuifengxiao.common.social.util;

import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.AbstractHttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.nio.charset.Charset;

/**
 * 由于与QQ接口的交互上，响应类型都为text/html的形式，且RestTemplate没有默认支持该解析模型，所以应当自行添加。
 * 主要是两类，一类text/html转普通文本，一类则是text/html转JSON对象。
 */
@SuppressWarnings("rawtypes")
public class TextHtmlHttpMessageConverter extends AbstractHttpMessageConverter {


    public TextHtmlHttpMessageConverter() {
        super(Charset.forName("UTF-8"), new MediaType[]{MediaType.TEXT_HTML});
    }

    @Override
    protected boolean supports(Class clazz) {
        return String.class == clazz;
    }

    @Override
    protected Object readInternal(Class aClass, HttpInputMessage httpInputMessage)
        
        throws IOException, HttpMessageNotReadableException {
        Charset charset = this.getContentTypeCharset(httpInputMessage.getHeaders().getContentType());
        return StreamUtils.copyToString(httpInputMessage.getBody(), charset);
    }

    @Override
    protected void writeInternal(Object o, HttpOutputMessage httpOutputMessage)
        
        throws IOException, HttpMessageNotWritableException {
    }

    private Charset getContentTypeCharset(MediaType contentType) {
        return contentType != null && contentType.getCharset() != null ?
            
            contentType.getCharset() : this.getDefaultCharset();
    }

}
```

## 4 实现OAuth2AccessTokenResponseClient

OAuth2AccessTokenResponseClient负责使用code交换access_token的具体逻辑。默认提供的实现类NimbusAuthorizationCodeTokenResponseClient用于处理标准的OAuth2交换access_token逻辑，但QQ提供的方式并不标准，所以需要自定义实现OAuth2AccessTokenResponseClient接口：

```java
package com.yishuifengxiao.common.social.qq;

import com.yishuifengxiao.common.social.util.TextHtmlHttpMessageConverter;
import org.springframework.security.oauth2.client.endpoint.OAuth2AccessTokenResponseClient;
import org.springframework.security.oauth2.client.endpoint.OAuth2AuthorizationCodeGrantRequest;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.endpoint.OAuth2AccessTokenResponse;
import org.springframework.security.oauth2.core.endpoint.OAuth2AuthorizationExchange;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

/**
 * OAuth2AccessTokenResponseClient负责使用code交换access_token的具体逻辑。
 * 默认提供的实现类NimbusAuthorizationCodeTokenResponseClient用于处理标准的OAuth2交换access_token逻辑，
 * 但QQ提供的方式并不标准，所以需要自定义实现OAuth2AccessTokenResponseClient接口：
 * <p>
 * 主要是使用RestTemplate请求获取access_token，并对返回的结果执行自定义解析，最后构建成OAuth2AccessTokenResponse对象返回即可。
 */
public class QQOAuth2AccessTokenResponseClient implements 
    
    OAuth2AccessTokenResponseClient<OAuth2AuthorizationCodeGrantRequest> {

    private RestTemplate restTemplate;

    private RestTemplate getRestTemplate() {
        if (restTemplate == null) {
            restTemplate = new RestTemplate();
            restTemplate.getMessageConverters().add(new TextHtmlHttpMessageConverter());
        }

        return restTemplate;
    }

    @Override
    public OAuth2AccessTokenResponse getTokenResponse(OAuth2AuthorizationCodeGrantRequest authorizationGrantRequest)
            throws OAuth2AuthenticationException {
        ClientRegistration clientRegistration = authorizationGrantRequest.getClientRegistration();
        OAuth2AuthorizationExchange oAuth2AuthorizationExchange = authorizationGrantRequest.getAuthorizationExchange();

        // 根据API文档获取请求access_token参数
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>(5);
        params.set("client_id", clientRegistration.getClientId());
        params.set("client_secret", clientRegistration.getClientSecret());
        params.set("code", oAuth2AuthorizationExchange.getAuthorizationResponse().getCode());
        params.set("redirect_uri", oAuth2AuthorizationExchange.getAuthorizationRequest().getRedirectUri());
        params.set("grant_type", "authorization_code");
        String tmpTokenResponse = getRestTemplate().postForObject(
          clientRegistration.getProviderDetails().getTokenUri(), params, String.class);

        // 从API文档中可以轻易获知解析accessToken的方式
        String[] items = tmpTokenResponse.split("&");
        //http://wiki.connect.qq.com/使用authorization_code获取access_token
        //access_token=FE04************************CCE2&expires_in=7776000&refresh_token=88E4************************BE14
        String accessToken = items[0].substring(items[0].lastIndexOf("=") + 1);
        Long expiresIn = Long.parseLong(items[1].substring(items[1].lastIndexOf("=") + 1));

        Set<String> scopes = new LinkedHashSet<>(oAuth2AuthorizationExchange.getAuthorizationRequest().getScopes());
        Map<String, Object> additionalParameters = new LinkedHashMap<>();
        OAuth2AccessToken.TokenType accessTokenType = OAuth2AccessToken.TokenType.BEARER;

        return OAuth2AccessTokenResponse.withToken(accessToken)
                .tokenType(accessTokenType)
                .expiresIn(expiresIn)
                .scopes(scopes)
                .additionalParameters(additionalParameters)
                .build();
    }
}
```
主要是使用RestTemplate请求获取access_token，并对返回的结果执行自定义解析，最后构建成OAuth2AccessTokenResponse对象返回即可。

## 5 实现OAuth2UserService接口

OAuth2UserService负责请求用户信息（OAuth2User），标准的OAuth2协议可以直接携带access_token请求用户信息，但QQ还需要获取到OpenId才能使用：

```java
package com.yishuifengxiao.common.social.qq;

import com.yishuifengxiao.common.social.util.JacksonFromTextHtmlHttpMessageConverter;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.client.RestTemplate;

/**
 * OAuth2UserService负责请求用户信息（OAuth2User），
 * 标准的OAuth2协议可以直接携带access_token请求用户信息，
 * 但QQ还需要获取到OpenId才能使用：
 * 首先获取OpenId，再通过OpenId等参数获取用户信息，
 * 最终组装成QQUserInfo对象。
 */
public class QQOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {
    // 获取用户信息的API
    private static final String QQ_URL_GET_USER_INFO = 
        "https://graph.qq.com/user/get_user_info?
        oauth_consumer_key={appId}
        &openid={openId}&access_token={access_token}";

    private RestTemplate restTemplate;

    private RestTemplate getRestTemplate() {
        if (restTemplate == null) {
            restTemplate = new RestTemplate();
            //通过Jackson JSON processing library直接将返回值绑定到对象
            restTemplate.getMessageConverters().add(new JacksonFromTextHtmlHttpMessageConverter());
        }

        return restTemplate;
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        // 第一步：获取openId接口响应
        String accessToken = userRequest.getAccessToken().getTokenValue();
        String openIdUrl = userRequest.getClientRegistration().getProviderDetails()
            .getUserInfoEndpoint().getUri() + "?access_token={accessToken}";
        String result = getRestTemplate().getForObject(openIdUrl, String.class, accessToken);
        // 提取openId
        String openId = result.substring(result.lastIndexOf(":\"") + 2, result.indexOf("\"}"));

        // 第二步：获取用户信息
        String appId = userRequest.getClientRegistration().getClientId();
        QQUserInfo qqUserInfo = getRestTemplate().getForObject(QQ_URL_GET_USER_INFO,
                                                               QQUserInfo.class, appId, openId, accessToken);
        // 为用户信息类补充openId
        if (qqUserInfo != null) {
            qqUserInfo.setOpenId(openId);
        }
        return qqUserInfo;
    }
}

```
首先获取OpenId，再通过OpenId等参数获取用户信息，最终组装成QQUserInfo对象。



## 6 多个OAuth2服务提供商并存

实现一个SocialProvider实例，完成上述装配，并将此实例注入到spring 上下文中。

```java
/**
 * QQ 登录流程配置.
 * 相对于标准的OAuth2授权码模式，QQ提供的API在交互上较为混乱，
 * 其响应类型为text/html，响应内容则同时存在普通文本、JSONP、JSON字符串等多种类型。
 * 另外，QQ提供的API还需要先获取OpenId，
 * 再使用OpenId结合appId与access_token的方式来获取用户信息，
 * 而不是直接使用access_token，这些都是我们需要自定义实现的重点内容。
 *
 * @author yishui
 * @version 1.0.0
 * @since 1.0.0
 */
@Component
public class QQSocialProvider implements SocialProvider {
    private final static String clientRegistrationId = "qq";

    @Override
    public OAuth2AccessTokenResponseClient<OAuth2AuthorizationCodeGrantRequest> accessTokenResponseClient() {
        return new QQOAuth2AccessTokenResponseClient();
    }

    @Override
    public OAuth2UserService<OAuth2UserRequest, OAuth2User> userService() {
        return new QQOAuth2UserService();
    }

    @Override
    public String clientRegistrationId() {
        return clientRegistrationId;
    }

    @Override
    public Class<? extends OAuth2User> customUserType() {
        return QQUserInfo.class;
    }
}

```

## 7 高级配置

### 7.1 OAuth 2.0 Login Page

默认情况下，OAuth 2.0登录页面由DefaultLoginPageGeneratingFilter自动生成。默认登录页面显示每个已配置的OAuth客户端及其ClientRegistration.clientName作为链接，该链接能够启动授权请求（或OAuth 2.0登录）。

 In order for `DefaultLoginPageGeneratingFilter` to show links for configured OAuth Clients, the registered `ClientRegistrationRepository` needs to also implement `Iterable<ClientRegistration>`. See `InMemoryClientRegistrationRepository` for reference.

 The default redirect URI template is `{baseUrl}/login/oauth2/code/{registrationId}`. The ***registrationId\*** is a unique identifier for the [ClientRegistration](https://docs.spring.io/spring-security/site/docs/5.5.8/reference/html5/#oauth2Client-client-registration).

每个OAuth客户端的链接目标默认如下：

默认的配置值为`  /oauth2/authorization/{registrationId}`

```bash
OAuth2AuthorizationRequestRedirectFilter.DEFAULT_AUTHORIZATION_REQUEST_BASE_URI + "/{registrationId}"
```

以下行显示了一个示例：

```bash
<a href="/oauth2/authorization/google">Google</a>
```

要覆盖默认登录页面，请配置

```java
oauth2Login().loginPage() and (optionally) oauth2Login().authorizationEndpoint().baseUri().
```

下面的列表显示了一个示例：

```java
@EnableWebSecurity
public class OAuth2LoginSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .oauth2Login(oauth2 -> oauth2
                ...
                .authorizationEndpoint(authorization -> authorization
                    .baseUri("/login/oauth2/authorization")
                    ...
                )
            );
    }
}
```

这里的`authorizationEndpoint().baseUri()`的配置值与接入配置中的`spring.security.oauth2.client.registration.qq.redirect-uri={baseUrl}/oauth2/authorization/{registrationId}` 的值相关

如前所述，配置`oauth2Login().authorizationEndpoint().baseUri()`是可选的。但是，如果您选择自定义它，请确保指向每个OAuth客户端的链接与`authorizationEndpoint().baseUri()`相匹配

以下行显示了一个示例：

```bash
<a href="/login/oauth2/authorization/google">Google</a>
```

### 7.2 Redirection Endpoint

授权服务器使用重定向端点通过资源所有者用户代理向客户端返回授权响应（包含授权凭据）。

>  OAuth 2.0登录利用授权代码授予。因此，授权凭证就是授权代码。

The default Authorization Response `baseUri` (redirection endpoint) is `/login/oauth2/code/`, which is defined in `OAuth2LoginAuthenticationFilter.DEFAULT_FILTER_PROCESSES_URI`.

如果要自定义授权响应baseUri，请按以下示例所示进行配置：

```java
@EnableWebSecurity
public class OAuth2LoginSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .oauth2Login(oauth2 -> oauth2
                .redirectionEndpoint(redirection -> redirection
                    .baseUri("/login/oauth2/callback/*")
                    ...
                )
            );
    }
}
```

 You also need to ensure the `ClientRegistration.redirectUri` matches the custom Authorization Response `baseUri`.The following listing shows an example:

```java
return CommonOAuth2Provider.GOOGLE.getBuilder("google")
    .clientId("google-client-id")
    .clientSecret("google-client-secret")
    .redirectUri("{baseUrl}/login/oauth2/callback/{registrationId}")
    .build();
```

## 8 配置属性

| Spring Boot 2.x                                              | ClientRegistration                                      |
| :----------------------------------------------------------- | :------------------------------------------------------ |
| `spring.security.oauth2.client.registration.*[registrationId]*` | `registrationId`                                        |
| `spring.security.oauth2.client.registration.*[registrationId]*.client-id` | `clientId`                                              |
| `spring.security.oauth2.client.registration.*[registrationId]*.client-secret` | `clientSecret`                                          |
| `spring.security.oauth2.client.registration.*[registrationId]*.client-authentication-method` | `clientAuthenticationMethod`                            |
| `spring.security.oauth2.client.registration.*[registrationId]*.authorization-grant-type` | `authorizationGrantType`                                |
| `spring.security.oauth2.client.registration.*[registrationId]*.redirect-uri` | `redirectUri`                                           |
| `spring.security.oauth2.client.registration.*[registrationId]*.scope` | `scopes`                                                |
| `spring.security.oauth2.client.registration.*[registrationId]*.client-name` | `clientName`                                            |
| `spring.security.oauth2.client.provider.*[providerId]*.authorization-uri` | `providerDetails.authorizationUri`                      |
| `spring.security.oauth2.client.provider.*[providerId]*.token-uri` | `providerDetails.tokenUri`                              |
| `spring.security.oauth2.client.provider.*[providerId]*.jwk-set-uri` | `providerDetails.jwkSetUri`                             |
| `spring.security.oauth2.client.provider.*[providerId]*.issuer-uri` | `providerDetails.issuerUri`                             |
| `spring.security.oauth2.client.provider.*[providerId]*.user-info-uri` | `providerDetails.userInfoEndpoint.uri`                  |
| `spring.security.oauth2.client.provider.*[providerId]*.user-info-authentication-method` | `providerDetails.userInfoEndpoint.authenticationMethod` |
| `spring.security.oauth2.client.provider.*[providerId]*.user-name-attribute` | providerDetails.userInfoEndpoint.userNameAttributeName  |

通过指定`spring.security.oauth2.client.Provider.[providerId].pissuer-uri`属性，可以使用OpenID连接提供程序的配置端点或授权服务器的元数据端点的发现来初始配置ClientRegistration。

更多问题 参见 https://docs.spring.io/spring-security/site/docs/5.5.8/reference/html5/#oauth2login

## 9 自定义第三方认证登录示例

```yaml
spring:
  security:
    oauth2:
      client:
        provider:
          demo:
            authorization-uri: https://192.168.171.134:8000/oauth2.0/authorize
            token-uri: https://192.168.171.134:8000/oauth2.0/token
            user-info-uri: https://192.168.171.134:8000/oauth2.0/me
            user-name-attribute: nickname
        registration:
          demo:
            authorization-grant-type: authorization_code
            client-authentication-method: post
            client-id: custom appId
            client-name: QQ??
            client-secret: custom appKey
            provider: demo
            redirect-uri: '{baseUrl}/oauth2/authorization/{registrationId}'
            scope: get_user_info,list_album,upload_pic,do_like

```

然后访问 http://localhost:8080/oauth2/authorization/demo
