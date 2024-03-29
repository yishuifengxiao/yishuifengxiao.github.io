---
sidebar_position: 2
title: 快速入门
---

 

协议官方定义文档

OAuth 2.0 Authorization Server Metadata https://www.rfc-editor.org/rfc/rfc8414#section-3

The OAuth 2.1 Authorization Framework https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-07#section-1.1

## 一 加入依赖

>  该功能基于`spring-security-oauth2-autoconfigure`扩展而来，在当前版本中，所有此依赖功能的代码被标注为`@Deprecated`,新版功能可参见 https://github.com/spring-projects/spring-security/wiki/OAuth-2.0-Migration-Guide ，但是新版需要较高版本的spring ，与较低版本的springboot不能兼容，故此增强扩展的目的是在低版本的springboot下能够允许

在开启此功能时需要按照【spring security 扩展】章节完成后spring securi相关配置，然后在项目中加入以下依赖：

```properties
<oauth2.version>2.3.12.RELEASE</oauth2.version>
```

```xml
<dependency>
    <groupId>org.springframework.security.oauth.boot</groupId>
    <artifactId>spring-security-oauth2-autoconfigure</artifactId>
    <version>${oauth2.version}</version>
</dependency>
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

然后在项目中加入以下代码

```java
@Configuration
public static class Oauth2Config extends AbstractOauth2Config {
}
```

## 二 代码配置

完整的开启代码如下:

```java
@Configuration
@EnableWebSecurity
@EnableResourceServer
@EnableAuthorizationServer
public class SecurityCoreConfig extends AbstractSecurityConfig {

    @Configuration
    public static class Oauth2Config extends AbstractOauth2Config {
    }
}
```

**注意一定要加上`@EnableResourceServer`和`@EnableAuthorizationServer`注解，否则上述代码会报错**

## 三 配置认证账号

完成上述配置后，即可开启oauth2相关功能，在默认情况下组件进行一个缺省认证账号验证实现。在缺省实现的情况下，用户能使用任意用户名配合密码(12345678)进行登录。

此时可以根据项目时间配置一个自定义账号认证处理，在spring上下文中注入一个名为 `customClientDetailsService` 的`ClientDetailsService`的实例即可。

实例代码如下：

```java
@Component("customClientDetailsService")
public class ClientDetailsServiceImpl implements ClientDetailsService {
	/**
	 * 默认的允许的认证类型
	 */
	private final static String DEFAULT_GRANT_TYPE = "password,authorization_code,refresh_token,implicit,client_credentials";
	/**
	 * 默认的token有效时间,60分钟
	 */
	private final static int TOKEN_VALID_TIME = 60 * 60;
	/**
	 * 默认的刷新token有效时间,默认为12小时
	 */
	private final static int TOKEN_REDRESH_TIME = 60 * 60 * 12;
	/**
	 * 默认的scope
	 */
	private final static String DEFAULT_SCOPE = "read,write,trust";
	/**
	 * 默认同意的自动授权域
	 */
	private final static String DEFAULT_APPROVE_SCOPE = "true";
	/**
	 * 默认的授权机构
	 */
	// private final static String DEFAULT_AUTHORITY =
	// "ROLE_CLIENT,ROLE_TRUSTED_CLIENT";

	private final static String DEFAULT_URL = "http://localhost:8080/";

	private PasswordEncoder passwordEncoder;

	@Override
	public ClientDetails loadClientByClientId(String clientId) throws ClientRegistrationException {
		// 查询出客户端
		BaseClientDetails clientDetails = new BaseClientDetails();

		// @formatter:off

		// 用于唯一标识每一个客户端(client); 在注册时必须填写(也可由服务端自动生成).
		// 对于不同的grant_type,该字段都是必须的. 在实际应用中的另一个名称叫appKey,与client_id是同一个概念.
		clientDetails.setClientId(clientId);

		// 用于指定客户端(client)的访问密匙; 在注册时必须填写(也可由服务端自动生成).
		// 对于不同的grant_type,该字段都是必须的. 在实际应用中的另一个名称叫appSecret,与client_secret是同一个概念.
		// 这里是加密后的密码
		clientDetails.setClientSecret(passwordEncoder.encode("12345678"));

		// 指定客户端支持的grant_type,可选值包括authorization_code,password,refresh_token,implicit,client_credentials,
		// 若支持多个grant_type用逗号(,)分隔,如: "authorization_code,password".
		// 在实际应用中,当注册时,该字段是一般由服务器端指定的,而不是由申请者去选择的,最常用的grant_type组合有:
		// "authorization_code,refresh_token"(针对通过浏览器访问的客户端);
		// "password,refresh_token"(针对移动设备的客户端).
		// implicit与client_credentials在实际中很少使用.
		clientDetails.setAuthorizedGrantTypes(
				new HashSet<String>(Arrays.asList(StringUtils.splitByWholeSeparatorPreserveAllTokens(DEFAULT_GRANT_TYPE,
						","))));

		// 客户端的重定向URI,可为空, 当grant_type为authorization_code或implicit时,
		// 在Oauth的流程中会使用并检查与注册时填写的redirect_uri是否一致
		String[] urls = { DEFAULT_URL };
		
		
		clientDetails.setRegisteredRedirectUri(new HashSet<String>(Arrays.asList(urls)));

		// 指定客户端所拥有的Spring Security的权限值,可选, 若有多个权限值,用逗号(,)分隔, 如: "ROLE_UNITY,ROLE_USER".
		// 对于是否要设置该字段的值,要根据不同的grant_type来判断,
		// 若客户端在Oauth流程中需要用户的用户名(username)与密码(password)的(authorization_code,password),
		// 则该字段可以不需要设置值,因为服务端将根据用户在服务端所拥有的权限来判断是否有权限访问对应的API.
		// 但如果客户端在Oauth流程中不需要用户信息的(implicit,client_credentials),
		// 则该字段必须要设置对应的权限值, 因为服务端将根据该字段值的权限来判断是否有权限访问对应的API.
		//clientDetails.setAuthorities(AuthorityUtils.createAuthorityList(
		//		StringUtils.isBlank(client.getAuthorities()) ? DEFAULT_AUTHORITY : client.getAuthorities()));
		clientDetails.setAuthorities(AuthorityUtils.createAuthorityList("ROLE_USER"));

		// 指定客户端申请的权限范围,可选值包括read,write,trust;若有多个权限范围用逗号(,)分隔,如: "read,write".
		// scope的值与security.xml中配置的‹intercept-url的access属性有关系. 如‹intercept-url的配置为
		// ‹intercept-url pattern="/m/**" access="ROLE_MOBILE,SCOPE_READ"/>
		// 则说明访问该URL时的客户端必须有read权限范围. write的配置值为SCOPE_WRITE, trust的配置值为SCOPE_TRUST.
		// 在实际应该中, 该值一般由服务端指定, 常用的值为read,write.
		clientDetails.setScope(Arrays.asList(StringUtils.splitByWholeSeparatorPreserveAllTokens(DEFAULT_SCOPE,",")));

		// 设置用户是否自动Approval操作, 默认值为 'false', 可选值包括 'true','false', 'read','write'.
		// 该字段只适用于grant_type="authorization_code"的情况,当用户登录成功后,若该值为'true'或支持的scope值,则会跳过用户Approve的页面,
		// 直接授权.
		// 该字段与 trusted 有类似的功能, 是 spring-security-oauth2 的 2.0 版本后添加的新属性.
		clientDetails.setAutoApproveScopes(new HashSet<String>(Arrays.asList(DEFAULT_APPROVE_SCOPE)));

		// 设定客户端的refresh_token的有效时间值(单位:秒),可选, 若不设定值则使用默认的有效时间值(60 * 60 * 24 * 30, 30天).
		// 若客户端的grant_type不包括refresh_token,则不用关心该字段 在项目中,
		// 可具体参考DefaultTokenServices.java中属性refreshTokenValiditySeconds.

		// 在实际应用中, 该值一般是由服务端处理的, 不需要客户端自定义.
		clientDetails.setRefreshTokenValiditySeconds(TOKEN_VALID_TIME);

		// 设定客户端的access_token的有效时间值(单位:秒),可选, 若不设定值则使用默认的有效时间值(60 * 60 * 12, 12小时).
		// 在服务端获取的access_token JSON数据中的expires_in字段的值即为当前access_token的有效时间值.
		// 在项目中, 可具体参考DefaultTokenServices.java中属性accessTokenValiditySeconds
		clientDetails.setAccessTokenValiditySeconds(TOKEN_REDRESH_TIME);

		// @formatter:on
		return clientDetails;
	}

	public PasswordEncoder getPasswordEncoder() {
		return passwordEncoder;
	}

	public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public String toString() {
		return "ClientDetailsServiceImpl [passwordEncoder=" + passwordEncoder + "]";
	}

}
```

