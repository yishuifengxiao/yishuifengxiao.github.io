---
sidebar_position: 3
title: zooeeper
---
## 加入依赖
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
## 基础配置

开启 QQ 登录首先需要在 [QQ 互联 ](https://connect.qq.com/index.html) 申请账号和密码

接下来，在项目的配置文件里增加以下配置

```yaml
server:
  port: 8080

logging:
  level:
    root: INFO
    org.springframework.web: INFO
    org.springframework.security: DEBUG
    org.springframework.boot.autoconfigure: DEBUG

spring:
  security:
    oauth2:
      client:
        registration:
          github:
            client-id: {custom}
            client-secret: {custom}
            redirect-uri: "{baseUrl}/oauth2/authorization/{registrationId}"
          qq:
            client-id: {custom appId}
            client-secret: {custom appKey}
            provider: qq
            client-name: QQ登录
            authorization-grant-type: authorization_code
            client-authentication-method: post
            scope: get_user_info,list_album,upload_pic,do_like
            redirect-uri: "{baseUrl}/oauth2/authorization/{registrationId}"
        provider:
          qq:
            authorization-uri: https://graph.qq.com/oauth2.0/authorize
            token-uri: https://graph.qq.com/oauth2.0/token
            # 配置为QQ获取OpenId的Url
            user-info-uri: https://graph.qq.com/oauth2.0/me
            user-name-attribute: "nickname"
```

> `redirect-uri-template`是 `redirect-uri` 的别名(它们是相同的变量)。

上面的配置同时支持了Github和QQ登录。

login.html则是我们自定义的登录页面：

大概页面如下:

```xml
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Spring Security - OAuth 2.0 Login</title>
        <meta charset="utf-8"/>
    </head>
    <body>
        <h1>自定义OAuth2登录页</h1>
        <div>
            <a href="/oauth2/authorization/github">Github登录</a>
            <a href="/oauth2/authorization/qq">QQ登录</a>
        </div>
    </body>
</html>
```

此时访问 http://localhost:8080/oauth2/authorization/qq 的效果也是一样

## 基础使用

**定义Controller映射**

```java
@Controller
public class MainController {

    @Autowired
    private OAuth2AuthorizedClientService authorizedClientService;

    @GetMapping("/")
    public String index(Model model, OAuth2AuthenticationToken authentication) {
        OAuth2AuthorizedClient authorizedClient = this.getAuthorizedClient(authentication);
        model.addAttribute("userName", authentication.getName());
        model.addAttribute("clientName", authorizedClient.getClientRegistration().getClientName());
        return "index";
    }

    @GetMapping("/login/oauth2")
    public String login() {
        return "login";
    }

    private OAuth2AuthorizedClient getAuthorizedClient(OAuth2AuthenticationToken authentication) {
        return this.authorizedClientService.loadAuthorizedClient(
                authentication.getAuthorizedClientRegistrationId(), authentication.getName());
    }
}
```

在登录界面 点击Github登录或者QQ登录按钮，按照提示进行登录操作，登录成功后会跳转到主页，进行后续流程。
