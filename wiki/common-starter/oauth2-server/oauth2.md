---
sidebar_position: 1
title: oauth2简介
---

四种授权方式

## 密码模式

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

## 客户端模式

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

## 授权码模式

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

## 简化模式

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

## 刷新 token

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

## access_token 使用

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

