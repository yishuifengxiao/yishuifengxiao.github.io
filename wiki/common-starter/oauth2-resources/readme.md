---
sidebar_position: 1
title: 快速入门
---

## 一  基础配置

首先按照【spring security】章节按照说明完成好spring security相关的配置。

然后再在项目里加入以下依赖

```xml
<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-oauth2-jose</artifactId>
		</dependency>
```

接着在项目里加入以下配置：

```properties
yishuifengxiao.security.resourceserver.token-check-url=http://192.168.0.172:8000/oauth/check_token
```

这里的token-check-url指向的是认证服务器的/oauth/check_token的地址。

## 二 测试代码

在此项目的代码里加入以下代码

```java
@SpringBootApplication
@RestController
public class DemoApplication {

    @GetMapping("/me")
    public Authentication user(Authentication authentication) {

        return authentication;

    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);

    }

}
```

完成上述配置以后，先从认证服务器中获取到`access_token`,然后再利用`access_token`访问资源服务器中的资源了。

例如当我们想要访问 `/me`时，即可通过 `http://localhost:8080/me?access_token=认证服务器里获得token`获取到资源信息了。

