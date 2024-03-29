---
sidebar_position: 1
title: oauth2简介

---

## OAuth 2.1 和 OAuth 2.0 区别

OAuth 2.1正在整合自OAuth 2发布以来八年来所学到的最佳实践。原始OAuth 2.0规范于2012年10月发布为RFC 6749和RFC 6750。它取代了2010年4月发布的OAuth 1.0。在随后的几年中，对OAuth 2进行了许多扩展和修改。

目前正在讨论中已经提出了一个新的OAuth规范。此规范最近于2020年7月30日更新。如果获得批准，OAuth 2.1将淘汰OAuth 2.0的某些部分，并强制执行安全最佳实践。OAuth 2.0规范的其余部分将被保留。这一点很重复，它不会添加任何新内容。这是OAuth 2.1的明确设计目标。

OAuth 2.1 是 OAuth 2.0 的下一个版本, OAuth 2.1 根据最佳安全实践(BCP), 目前是第18个版本，对 OAuth 2.0 协议进行整合和精简, 移除不安全的授权流程, 并发布了 OAuth 2.1 规范草案, 下面列出了和 OAuth 2.0 相比的主要区别。

相关概念如下:

- A是用户正在交互的一段代码；浏览器、本机应用程序或单页应用程序都是客户端
- OAuth服务器实现了OAuth规范。它具有或可以获得关于哪些资源可供客户端使用的信息。在RFC中，此应用程序称为授权服务器。这也称为身份提供者。大多数用户称之为“我登录的地方”。
- 没有任何身份验证功能，而是将登录请求委托给OAuth服务器。它有一个允许OAuth服务器识别它的id

### 推荐使用 Authorization Code + PKCE

[根据 OAuth 2.0 安全最佳实践(Security Best Current Practices) 2.1.1 章节](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-18#section-2.1.1)

授权码 (Authorization Code) 模式大家都很熟悉了,也是最安全的授权流程, 那 PKCE 又是什么呢? PKCE 全称是 Proof Key for Code Exchange, 在 2015 年发布为 RFC 7636, 我们知道, 授权码模式虽好, 但是它不能给公开的客户端用, 因为公开的客户端没有能力保存好秘钥(client_secret), 所以在此之前, 对于公开的客户端, 只能使用隐式模式和密码模式, PKCE 就是为了解决这个问题而出现的, 另外它也可以防范授权码拦截攻击, 实际上它的原理是客户端提供一个自创建的证明给授权服务器， 授权服务器通过它来验证客户端，把访问令牌(access_token) 颁发给真实的客户端而不是伪造的。

代码交换证明密钥（PKCE）RFC于2015年发布，它扩展了授权代码授权，以防止在非TLS连接上发生部分授权流时受到攻击。例如，如果本地应用程序的组件之间存在通信，就会发生这种情况。

如果TLS存在漏洞，或者用户的路由器固件受到破坏，并且正在欺骗DNS或将TLS降级为HTTP，也可能发生此攻击。PKCE需要生成额外的一次性代码并将其发送到OAuth服务器。此代码验证请求是否未被拦截或修改。

OAuth 2.1规范草案要求在每次授权代码授予时都使用PKCE挑战，以防止授权代码被攻击者劫持并用于获取令牌。

### 隐式授权（ Implicit Grant）已弃用

[根据 OAuth 2.0 安全最佳实践(Security Best Current Practices) 2.1.2 章节](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-18#section-2.1.2)

在 OAuth 2.1 规范草案中, 授权模式中已经找不到隐式授权(Implicit Grant), 我们知道, 隐式授权是 OAuth 2.0 中的授权模式, 是授权码模式的简化版本, 用户同意授权后, 直接就能返回访问令牌 access_token, 同时这种也是不安全的。

> 根据OAuth 2.0安全最佳当前实践第2.1.2节，本规范中省略了隐式授权（“response_type=token”）

隐式授权在单页应用程序（SPA）中使用时固有地不安全。如果您使用此授权，您的访问令牌将暴露给浏览器中与SPA一起运行的任何JavaScript。如果不小心，您将获得URL片段中的访问令牌，该令牌存储在本地存储中，或者放在非HttpOnly cookie中。在所有情况下，获得访问令牌的攻击者都可以像原始用户一样访问资源。这不是一个好情况。

访问令牌不一定是一次性使用的，并且可以使用几分钟到几天，具体取决于OAuth服务器的配置方式。如果它们被盗，它们保护的资源将不再安全。你可能会想“嗯，我的网站上没有恶意JavaScript。”你确定吗？您是否审核了所有代码及其依赖项、依赖项和依赖项？您是否自动审核代码？广泛的依赖关系树可能会导致意外的安全问题：有人接管了一个开源节点库，并添加了下载了数百万次的恶意代码。

使用SPA隐式授权最不安全的方法的,在这种情况下，访问令牌作为HttpOnly cookie提供给SPA。最后，它基本上重新创建了授权代码授权，说明了隐式授权是如何变得安全的。

OAuth 2.1规范草案省略了隐式授权。这意味着任何实现OAuth 2.1的软件都不必实现该授权。如果您在应用程序中使用此授权，那么如果您希望符合OAuth 2.1，则必须将其替换为其他授权。

### 密码授权 （Resource Owner Password Credentials Grant）已弃用

[根据 OAuth 2.0 安全最佳实践(Security Best Current Practices) 2.4 章节](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-18#section-2.4)

在 OAuth 2.1 规范草案中, 密码授权也被移除, 实际上这种授权模式在 OAuth 2.0中都是不推荐使用的, 密码授权的流程是, 用户把账号密码告诉客户端, 然后客户端再去申请访问令牌, 这种模式只在用户和客户端高度信任的情况下才使用。

试想一下, 在你手机上有一个网易云音乐的APP, 现在要使用qq账号登录, 这时网易云音乐说, 你把qq账号密码告诉我就行了, 我拿着你的账号密码去QQ那边登录, 这就很离谱了!

正确的做法是, 用户在网易云音乐要使用qq登录, 如果用户也安装了qq 的客户端, 应该唤起qq应用, 在qq页面完成授权操作, 然后返回到网易云音乐。如果用户没有安装qq客户端应用, 唤起浏览器, 引导用户去qq的授权页面, 用户授权完成后, 返回到网易云音乐。

请注意, OAuth 是专门为委托授权而设计的，为了让第三方应用使用授权, 它不是为身份验证而设计的, 而 OpenID Connect（建立在 OAuth 之上）是专为身份验证而设计, 所以, 在使用 OAuth 授权协议时, 你需要知道你使用的客户端是第三方应用程序还是第一方应用，这很重要！因为 OAuth 2.1 已经不支持第一方应用授权！

现在您可以考虑使用 Authorization Code + PKCE 替换之前的密码授权模式。

### 使用 access_token 时, 不应该通过 URL 传递 token

[根据 OAuth 2.0 安全最佳实践(Security Best Current Practices) 4.3.2 章节](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-18#section-4.3.2)

在使用 access_token 时, 您不应该把token放到URL中, 第一, 浏览器地址栏本来就是暴露的, 第二, 可以查看浏览记录，找到 access_token。

正确的做法是, 把 access_token 放到 Http header 或者是 POST body 中。

###  刷新令牌 (Refresh Token) 应该是一次性的

[根据 OAuth 2.0 安全最佳实践(Security Best Current Practices) 4.13.2 章节](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-18#section-4.13.2)

access_token 访问令牌, refresh_token 刷新令牌, 刷新令牌可以在一段时间内获取访问令牌, 平衡了用户体验和安全性, 在 OAuth 2.1 中, refresh_token 应该是一次性的, 用过后失效, 使用 refresh_token 获取access_token时, 还可以返回一个新的 refresh_token。

###  回调地址（Redirect URI）应该精确匹配

[根据 OAuth 2.0 安全最佳实践(Security Best Current Practices) 4.1.3 章节](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-18#section-4.1.3)

在 OAuth 2.0 的授权码流程中, 需要设置一个回调地址 redirect_uri, 如下

```bash
https://www.authorization-server.com/oauth2/authorize?
response_type=code
&client_id=s6BhdRkqt3
&scope=user
&state=8b815ab1d177f5c8e 
&redirect_uri=https://www.client.com/callback
```

假如有三个不同的客户端

- a.client.com
- b.client.com
- c.client.com

这时可能会使用一个通配符的 redirect_uri, 比如 *.client.com, 这样会有什么风险呢? 实际上, 恶意程序有机会篡改 redirect_uri, 假设恶意程序的域名是 [https://attacker.com](https://attacker.com/), 然后把 redirect_uri 改成 https://attacker.com/.client.com, 这样授权码就发送给了恶意程序。

### 参考文档

https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-04

[OAuth 2.0 Security Best Current Practice draft-ietf-oauth-security-topics-18](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-18)

[https://fusionauth.io/learn/expert-advice/oauth/differences-between-oauth-2-oauth-2-1](https://fusionauth.io/learn/expert-advice/oauth/differences-between-oauth-2-oauth-2-1/)

OAuth 2.0 Authorization Server Metadata https://www.rfc-editor.org/rfc/rfc8414#section-3

The OAuth 2.1 Authorization Framework https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-07#section-1.1

##  OAuth 2.0  四种授权方式

### 密码模式

```
POST /oauth/token HTTP/1.1
     Host: oauth2.yishuifengxiao.com
     Authorization: Basic fdsfdsfdsfds
     Content-Type: application/x-www-form-urlencoded

     grant_type=password&username=johndoe&password=A3ddj3w
```

在请求中，各参数的含义如下

- grant_type：表示授权类型，此处的值固定为"password"，必选项。
- username：表示用户名，必选项。
- password：表示用户的密码，必选项。
- scope：表示权限范围，可选项。
- Authorization: 请求头参数 ，值是 clientId:clientSecret 经过 base64 编码后的值

下面是一个响应的例子

```
{
    "access_token": "BDF867DE69F05143C709",
    "token_type": "bearer",
    "refresh_token": "d7cda8fb15714209a9f9f3b039a0034f",
    "expires_in": 43199,
    "scope": "read write trust",
    "client_id": "yishui"
}
```

### 客户端模式

```
POST /oauth/token HTTP/1.1
     Host: oauth2.yishuifengxiao.com
     Authorization: Basic fdsfdsfdsfds
     Content-Type: application/x-www-form-urlencoded

     grant_type=client_credentials
```

在本请求中，各参数的含义如下

- grant_type：表示授权类型，此处的值固定为"client_credentials"，必选项。
- Authorization: 请求头参数 ，值是 clientId:clientSecret 经过 base64 编码后的值

下面是一个响应的例子

```
{
    "access_token": "BDF867DE69F05143D3BF",
    "token_type": "bearer",
    "expires_in": 43199,
    "scope": "read write trust",
    "client_id": "yishui"
}
```

> 同密码模式相比，客户端模式的响应中缺少了 `refresh_token` 参数

### 授权码模式

授权码模式首先需要保证 spring security 的登陆功能正常可用。只有开启 spring security 的登陆功能可用，才能开启授权码功能。

先访问一下请求

```
GET /oauth/authorize?response_type=code&client_id=yishui&state=xyz
&redirect_uri=http://demo.yishuifengxiao.com/demo HTTP/1.1
Host: oauth2.yishuifengxiao.com
```

在本请求中，各参数的含义如下：

- code：表示授权码，必选项。该码的有效期应该很短，通常设为 10 分钟，客户端只能使用该码一次，否则会被授权服务器拒绝。该码与客户端 ID 和重定向 URI，是一一对应关系。
- state：如果客户端的请求中包含这个参数，认证服务器的回应也必须一模一样包含这个参数。
- client_id： 用户的 client_id

在进行此请求时，假如用户没有登录，spring security 会进行拦截，因此需要用户先进行登录。

在正常情况下，访问以上请求会被重定向到

http://demo.yishuifengxiao.com/demo?code=fsfsdf
&state=xyz

服务器回应客户端的 URI，包含以下参数：

- code：表示授权码，必选项。该码的有效期应该很短，通常设为 10 分钟，客户端只能使用该码一次，否则会被授权服务器拒绝。该码与客户端 ID 和重定向 URI，是一一对应关系。
- state：如果客户端的请求中包含这个参数，认证服务器的回应也必须一模一样包含这个参数。

通过上面的请求得到了`code`以后，用户需要使用下面请求获取到授权码

```
POST /oauth/token HTTP/1.1
Host: oauth2.yishuifengxiao.com
Authorization: Basic fdsfdsfdsfds
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&code=fsfsdf
&redirect_uri=demo.yishuifengxiao.com/demo
```

在本请求中，各参数的含义如下：

- grant_type：表示使用的授权模式，必选项，此处的值固定为"authorization_code"。
- code：表示上一步获得的授权码，必选项。
- redirect_uri：表示重定向 URI，必选项，且必须与 A 步骤中的该参数值保持一致。
- client_id：表示客户端 ID，必选项。

### 简化模式

```
GET /oauth/authorize?response_type=token&client_id=yishui&state=xyz
        &redirect_uri=http://demo.com/demo    HTTP/1.1
    Host: server.example.com
```

在本请求中，各参数的含义如下：

1. response_type：表示授权类型，此处的值固定为"token"，必选项。
1. client_id：表示客户端的 ID，必选项。
1. redirect_uri：表示重定向的 URI，可选项。
1. scope：表示权限范围，可选项。
1. state：表示客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值。

### 刷新 token

```
POST /oauth/token HTTP/1.1
     Host: oauth2.yishuifengxiao.com
     Authorization: Basic fdsfdsfdsfds
     Content-Type: application/x-www-form-urlencoded

     grant_type=refresh_token&refresh_token=sdff
```

请求中个参数的含义:

- granttype：表示使用的授权模式，此处的值固定为"refresh_token"，必选项。
- refresh_token：表示早前收到的更新令牌，必选项。
- scope：表示申请的授权范围，不可以超出上一次申请的范围，如果省略该参数，则表示与上一次一致。

<br/>

------

<br/>

### access_token 使用

通过 前面的方法获取到 access_token 之后，一般有两种使用方法

- 将 access_token 做为请求参数携带在 url 参数上

> http://demo.yishuifengxiao.com/user/123?access_token=获得到的access_token

- 将 access_token 做为请求参数放在请求头中

> 在所有需要授权的请求的请求头里都携带上参数
> Authorization=Bearer 获得到的 access_token

在通用组件中，由于对`access_token`进行了深度处理，因此用户可以`access_token`通过易水工具包里的 DES 工具饭解析出 token 里携带的信息。

在解密时需要使用的密钥由【安全管理】中设置的`yishuifengxiao.security.secret-key`属性值决定。

下面是一个 `access_token` 的解密信息示例

```
{
    "username": "yishui",
    "clientId": "admin",
    "roles": [
        "ROLE_USER",
        "admin"
    ],
    "grantType": "password"
}
```

解密信息的各参数的解释：

- username： 用户登录时使用到的用户名(在客户端模式下该值为空)
- clientId： 用户登录时使用的 clientId(在简化模式下该值为空)
- roles： 此登录用户拥有的角色(即此用户的 authorities)
- grantType：access_token 对应的授权类型

> 由`access_token`反解析出用户信息仅限于本组件，原生的 oauth2 的`access_token`不支持此功能

**在本组件中，每次访问后都会重置令牌的自动过期时间**

