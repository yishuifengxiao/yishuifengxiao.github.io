---
sidebar_position: 2
title: 基础配置

---

## 一 核心配置

```properties
#是否显示加载日志，默认为false
yishuifengxiao.security.show-detail=false
#需要删除的cookie的名字 JSESSIONI
yishuifengxiao.security.cookie-name=JSESSIONI
#是否开启httpBasic访问，默认为true
yishuifengxiao.security.http-basic=true
#the HTTP Basic realm to use ,default value is yishui
yishuifengxiao.security.realm-name=yishui
#表单登陆时form表单请求的地址，默认为/web/login
yishuifengxiao.security.form-action-url=/web/login
#表单提交时默认的用户名参数，默认值为 username
yishuifengxiao.security.username-parameter=username
#表单提交时默认的密码名参数，默认值为 password
yishuifengxiao.security.password-parameter=password
#系统登陆页面的地址 ,默认为 /toLogin
yishuifengxiao.security.login-page=/toLogin
#默认的处理登录成功后跳转的URL的路径 ，默认为/index
yishuifengxiao.security.login-success-url=/index
#默认的处理登录失败后跳转的URL的路径 ，默认为/toLogin
yishuifengxiao.security.login-fail-url=/toLogin
#默认的处理登出请求的URL的路径【即请求此URL即为退出操作】，默认为/logout
yishuifengxiao.security.login-out-url=/logout
#权限拦截时默认的跳转地址，默认为 /toLogin
yishuifengxiao.security.redirect-url=/toLogin
#关闭csrf功能,默认为true
yishuifengxiao.security.close-csrf=true
# 是否关闭cors保护，默认为false
yishuifengxiao.security.close-cors=false
#是否开启token合法行校验,默认为开启
yishuifengxiao.security.open-token-filter=true
# 是否关闭前置参数验证,默认为false
yishuifengxiao.security.close-pre-auth=false
#加解密中需要使用的密钥
yishuifengxiao.security.secret-key=aa
###
###
###
#记住我产生的token，默认为 yishuifengxiao
yishuifengxiao.security.remeber-me.key=yishuifengxiao
#登陆时开启记住我的参数,默认为 rememberMe
yishuifengxiao.security.remeber-me.remember-me-parameter=rememberMe
#默认过期时间为60分钟,单位为秒
yishuifengxiao.security.remeber-me.remember-me-seconds=3600
#是否使用安全cookie
yishuifengxiao.security.remeber-me.use-secure-cookie=true
```

## 二 资源管理

### 2.1 忽视资源

允许添加SpringSecurity应忽略的RequestMatcher实例。Spring Security提供的Web安全（包括SecurityContext）在匹配的HttpServletRequest上不可用。通常，注册的请求应该是静态资源的请求。对于动态请求，请考虑将请求映射为允许所有用户。

```properties
#所有需要忽视的目录,可以配置多个，采用 ant 风格，多个资源之间采用半角逗号分割
yishuifengxiao.security.resource.ignore.urls[0]=/aaa,/bb
yishuifengxiao.security.resource.ignore.urls[1]=/ccc,/dd
#是否包含actuator相关的路径,默认为true
yishuifengxiao.security.resource.ignore.contain-actuator=true
#是否包含所有的资源,默认为false
yishuifengxiao.security.resource.ignore.contain-all=false
# 是否包含错误页面相关的路径，默认为包含
yishuifengxiao.security.resource.ignore.contain-error-page=true
#是否默认包含静态资源 ,默认为true
yishuifengxiao.security.resource.ignore.contain-static-resource=true
#是否包含swagger-ui的资源 ,默认为true
yishuifengxiao.security.resource.ignore.contain-swagger-ui-resource=true
#是否包含webJars资源,默认为true
yishuifengxiao.security.resource.ignore.contain-webjars=true
```

### 2.2 匿名资源

指定匿名用户允许URL。

```properties
#所有的指定匿名用户允许URL,可以配置多个，采用 ant 风格，多个资源之间采用半角逗号分割
yishuifengxiao.security.resource.anonymous[0]=/aaa,/bb
yishuifengxiao.security.resource.anonymous[1]=/ccc,/dd
```

### 2.3 permitAll资源

指定任何人都允许URL。

```properties
#所有的指定任何人都允许URL。,可以配置多个，采用 ant 风格，多个资源之间采用半角逗号分割
yishuifengxiao.security.resource.permits[0]=/aaa,/bb
yishuifengxiao.security.resource.permits[1]=/ccc,/dd
```

### 2.4 自定义授权资源

```properties
#所有的自定义权限的资源。,可以配置多个，采用 ant 风格，多个资源之间采用半角逗号分割
yishuifengxiao.security.resource.customs[0]=/aaa,/bb
yishuifengxiao.security.resource.customs[1]=/ccc,/dd
```

在进行自定义授权资源，需要在项目中配置一个名为`customResourceProvider`的com.yishuifengxiao.common.security.httpsecurity.authorize.custom.CustomResourceProvider实例，示例代码如下

```java
@Component("customResourceProvider")
public class SimpleCustomResourceProvider implements CustomResourceProvider {
   @Override
   public boolean hasPermission(HttpServletRequest request, Authentication auth) {
      log.debug("【自定义授权】自定义授权的路径为 {}，认证信息为 {}  ", request.getRequestURI(), auth);

      return true;
   }

}
```

## 三 基础配置

###   2.1 简单使用

#### 2.1.1 生成token

在默认情况下，组件会根据请求判断是否请求的类型，当请求为json类型的请求时直接输出对应的信息，否则会重定向到配置的路径。其中重定向的路径的配置如下:

```properties
#系统登陆页面的地址 ,默认为 /toLogin
yishuifengxiao.security.login-page=/toLogin
#默认的处理登录成功后跳转的URL的路径 ，默认为/index
yishuifengxiao.security.login-success-url=/index
#默认的处理登录失败后跳转的URL的路径 ，默认为/toLogin
yishuifengxiao.security.login-fail-url=/toLogin
#默认的处理登出请求的URL的路径【即请求此URL即为退出操作】，默认为/logout
yishuifengxiao.security.login-out-url=/logout
#权限拦截时默认的跳转地址，默认为 /toLogin
yishuifengxiao.security.redirect-url=/toLogin
```

> 请求为get,且请求头Accept和contentType均不包含json关键字时判断为非json类型请求，其他情况下均为json类型请求。

认证请求

```bash
curl --location --request POST 'http://localhost:8080/web/login' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: JSESSIONID=01A5676011D341C3BF8BC2E78A0E402A' \
--data-urlencode 'username=zhangsan' \
--data-urlencode 'password=12345678'
```

在默认情况下认证成功后，输出的用户信息为：

```json
{
    "code": 200,
    "msg": "认证成功",
    "requtest-id": "14b1d5e7ad2a4641b5a195691e07f28c",
    "data": {
        "authorities": [],
        "details": null,
        "authenticated": true,
        "value": "60C45471AF39D9C3726150DEF5513E69184205C922B4670E4EB79EB3748E6F585F06ADCA94688AE406DFE549FF29E182A831DDC995A98489",
        "username": "zhangsan",
        "sessionId": "01A5676011D341C3BF8BC2E78A0E402A",
        "validSeconds": 86400,
        "time": "2023-02-10 16:51:45",
        "expireAt": "2023-02-11 16:51:45",
        "name": null,
        "active": true,
        "expired": false,
        "principal": "60C45471AF39D9C3726150DEF5513E69184205C922B4670E4EB79EB3748E6F585F06ADCA94688AE406DFE549FF29E182A831DDC995A98489",
        "credentials": "60C45471AF39D9C3726150DEF5513E69184205C922B4670E4EB79EB3748E6F585F06ADCA94688AE406DFE549FF29E182A831DDC995A98489"
    },
    "response-time": "2023-02-10 16:51:45"
}
```

其中的value即为所需的token。

#### 2.1.2 使用token

在得到所需的token信息后，当用户访问所有需要鉴权的资源时，可以在请求头或者请求参数中携带上此token值即可。携带token值得请求头的名字和携带token值得请求参数的名字可以通配置进行改变，默认配置如下：

```properties
#从请求头里取出认证信息时的参数名，默认为 xtoken
yishuifengxiao.security.token.header-parameter=xtoken
#从请求参数里取出认证信息时的参数名，默认为 xtoken 
yishuifengxiao.security.token.request-parameter=xtoken
```

注意：在若在请求头和请求参数中均为获取到token信息时，组件还会默认从session中尝试获取token值，从session中获取数据的key的配置可以修改

```properties
#用户唯一标识符参数，默认为user_unique_identitier
yishuifengxiao.security.token.user-unique-identitier=user_unique_identitier
```

>  注意点：提取token值依次从请求头、请求参数和session中获取，只要在前一种方式中获取到就不会尝试下一种（此时不会校验token值得正确性）



使用token的请求示例如下：

```bash
curl --location --request GET 'http://localhost:8080/user/find?xtoken=60C45471AF39D9C3726150DEF5513E69184205C922B4670E4EB79EB3748E6F585F06ADCA94688AE406DFE549FF29E182A831DDC995A98489'
```

或者

```bash
curl --location --request GET 'http://localhost:8080/user/find' \
--header 'xtoken: 60C45471AF39D9C3726150DEF5513E69184205C922B4670E4EB79EB3748E6F585F06ADCA94688AE406DFE549FF29E182A831DDC995A98489'
```



### 2.2 进阶使用

#### 2.2.1 基础进阶

在一般情况下，组件的默认配置往往不能满足多变的业务需求，此时可以在系统中注入一个SecurityHandler的实例来根据业务需求进行定制，简单的示例如下：

```java
@Component
public class SimpleSecurityHandler extends BaseSecurityHandler {
    @Override
    public void whenAuthenticationSuccess(PropertyResource propertyResource, HttpServletRequest request, HttpServletResponse response, Authentication authentication, SecurityToken token) throws IOException {
        super.whenAuthenticationSuccess(propertyResource, request, response, authentication, token);
    }

    @Override
    public void whenAuthenticationFailure(PropertyResource propertyResource, HttpServletRequest request, HttpServletResponse response, Exception exception) throws IOException {
        super.whenAuthenticationFailure(propertyResource, request, response, exception);
    }

    @Override
    public void whenLogoutSuccess(PropertyResource propertyResource, HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        super.whenLogoutSuccess(propertyResource, request, response, authentication);
    }

    @Override
    public void whenAccessDenied(PropertyResource propertyResource, HttpServletRequest request, HttpServletResponse response, AccessDeniedException exception) throws IOException {
        super.whenAccessDenied(propertyResource, request, response, exception);
    }

    @Override
    public void onException(PropertyResource propertyResource, HttpServletRequest request, HttpServletResponse response, Exception exception) throws IOException {
        super.onException(propertyResource, request, response, exception);
    }

    @Override
    public void preAuth(PropertyResource propertyResource, HttpServletRequest request, HttpServletResponse response, Response<CustomException> data) throws IOException {
        super.preAuth(propertyResource, request, response, data);
    }
}
```

#### 2.2.2 短信验证码登录

验证码的使用参见前述章节

```properties
#短信登陆参数,默认为 mobile 
yishuifengxiao.security.code.sms-login-param=mobile
#短信验证码登录地址
yishuifengxiao.security.code.sms-login-url=/web/sms_login
```

完成上述配置后，即可开启短信验证码登录功能。

#### 2.2.3 验证码使用

按照前述章节配置好验证码之后。即可将spring security与验证码功能结合起来。在项目里加上配置

```properties
#key：验证码类型的名字（可选值：SMS，IMAGE，EMAIL）, value: 需要过滤的路径，多个路径采用半角的逗号分隔
yishuifengxiao.security.code.filter.image=/aaa,/bb
```

### 2.3 高级使用

#### 2.3.1 自定义过滤器

在spring security 过滤器链中插入一个过滤器。

在spring 上下文中注入一个`com.yishuifengxiao.common.security.httpsecurity.SecurityRequestFilter`的实例即可，配置完成后在`public void configure(HttpSecurity http) throws Exception`中配置好过滤器生效位置即可。

示例代码如下：

```java
@Component
public class UsernamePasswordPreAuthFilter extends SecurityRequestFilter {

    private AntPathRequestMatcher pathMatcher = null;

    private SecurityHandler securityHandler;

    private UserDetailsService userDetailsService;

    private PasswordEncoder passwordEncoder;

    private PropertyResource propertyResource;

    /**
     * 信息提取器
     */
    private SecurityValueExtractor securityValueExtractor;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // 是否关闭前置参数校验功能
        Boolean closePreAuth = propertyResource.security().getClosePreAuth();
        if (BooleanUtils.isNotTrue(closePreAuth)) {
            AntPathRequestMatcher pathMatcher = this.antPathMatcher();
            if (pathMatcher.matches(request)) {

                String username = securityValueExtractor.extractUsername(request, response);
                String password = securityValueExtractor.extractPassword(request, response);

                if (username == null) {
                    username = "";
                }
                if (password == null) {
                    password = "";
                }

                username = username.trim();

                try {
                    // 获取认证信息
                    try {
                        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                        if (null == userDetails) {
                            throw new CustomException(ErrorCode.USERNAME_NO_EXTIS,
                                    propertyResource.security().getMsg().getAccountNoExtis());
                        }
                        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
                            throw new CustomException(ErrorCode.PASSWORD_ERROR,
                                    propertyResource.security().getMsg().getPasswordIsError());
                        }
                    } catch (UsernameNotFoundException ex) {
                        throw new CustomException(ErrorCode.USERNAME_NO_EXTIS,
                                propertyResource.security().getMsg().getAccountNoExtis());
                    }
                } catch (Exception exception) {
                    securityHandler.whenAuthenticationFailure(propertyResource, request, response, exception);
                    return;
                }

            }
        }

        filterChain.doFilter(request, response);
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.addFilterBefore(this, UsernamePasswordAuthenticationFilter.class);

    }

    /**
     * 获取到路径匹配器
     *
     * @return 路径匹配器
     */
    private AntPathRequestMatcher antPathMatcher() {
        if (null == this.pathMatcher) {
            this.pathMatcher = new AntPathRequestMatcher(this.propertyResource.security().getFormActionUrl());
        }
        return this.pathMatcher;
    }

    // @formatter:off
    public UsernamePasswordPreAuthFilter(SecurityHandler securityHandler,
                                         UserDetailsService userDetailsService,
                                         PasswordEncoder passwordEncoder,
                                         PropertyResource propertyResource,
                                         SecurityValueExtractor securityValueExtractor) {
        this.securityHandler = securityHandler;
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
        this.propertyResource = propertyResource;
        this.securityValueExtractor = securityValueExtractor;
    }
    // @formatter:on
}
```

#### 2.3.2 自定义授权配置

主要用于在`HttpSecurity http`上进行各项授权配置。只需要在spring 上下文中注入`AuthorizeProvider`实例即可。`AuthorizeProvider`的定义如下：

```java
public interface AuthorizeProvider {

    /**
     * 授权配置
     *
     * @param propertyResource               授权资源
     * @param  securityHandler 用于在各种 Handler 中根据情况相应地跳转到指定的页面或者输出json格式的数据
     * @param http HttpSecurity
     * @throws Exception 配置时出现问题
     */
    void apply(PropertyResource propertyResource, SecurityHandler securityHandler, HttpSecurity http) throws Exception;

    /**
     * 授权提供器的顺序，数字越小越是提前使用，默认值为100
     *
     * @return 授权提供器的顺序
     */
    default int order() {
        return 100;
    }
}
```

一个简单的示例代码如下:

```java
public class ExceptionAuthorizeProvider implements AuthorizeProvider {


    @Override
    public void apply(PropertyResource propertyResource, SecurityHandler securityHandler, HttpSecurity http) throws Exception {
        //@formatter:off
        http.exceptionHandling()
      // 定义的不存在access_token时候响应
      .authenticationEntryPoint(securityHandler).accessDeniedHandler(securityHandler)
      //自定义权限拒绝处理器
      ;
      //@formatter:on  
    }

    @Override
    public int order() {
        return 1000;
    }
}
```



#### 2.3.3 token生成工具

API列表如下:

| **限定符和类型**       | **方法和说明**                                               |
| ---------------------- | ------------------------------------------------------------ |
| static SecurityToken | create(javax.servlet.http.HttpServletRequest request, String username, String password)生成一个令牌 |
| static SecurityToken | create(String username, String password)生成一个令牌       |
| static SecurityToken | create(String username, String password, String sessionId)生成一个令牌 |
| static SecurityToken | createUnsafe(javax.servlet.http.HttpServletRequest request, String username)生成一个令牌 |
| static SecurityToken | createUnsafe(javax.servlet.http.HttpServletRequest request, String username, int validSeconds)生成一个令牌 |
| static SecurityToken |createUnsafe(String username)生成一个令牌                  |
| static SecurityToken | createUnsafe(String username, int validSeconds)生成一个令牌 |
| static SecurityToken | createUnsafe(String username, String sessionId)生成一个令牌 |
|static SecurityToken | createUnsafe(String username, String sessionId, int validSeconds)生成一个令牌 |
