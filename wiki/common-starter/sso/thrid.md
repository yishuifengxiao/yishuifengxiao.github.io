---
sidebar_position: 2
title: 第三方登录
---
使用 spring social 功能首先需要按照 [安全管理](security.html)  中的步骤开启 spring security 的相关功能。

## 快速启动

1 在项目的 pom 里增加 spring social 相关的依赖

```
        <dependency>
			<groupId>org.springframework.social</groupId>
			<artifactId>spring-social-core</artifactId>
			<version>${spring-social.version}</version>
		</dependency>

		<dependency>
			<groupId>org.springframework.social</groupId>
			<artifactId>spring-social-config</artifactId>
			<version>${spring-social.version}</version>
		</dependency>

		<dependency>
			<groupId>org.springframework.social</groupId>
			<artifactId>spring-social-security</artifactId>
			<version>${spring-social.version}</version>
		</dependency>

		<dependency>
			<groupId>org.springframework.social</groupId>
			<artifactId>spring-social-web</artifactId>
			<version>${spring-social.version}</version>
		</dependency>
```

2 在项目的任意一个 `@Configuration`下增加 `@EnableSocial` 注解

3 将`SpringSocialConfigurer`的实例对象注入到 spring security 之中。

4 在属性配置文件增加相关的配置

一个完整的配置文件的示例如下：

```
@Configuration
@EnableWebSecurity
@EnableSocial
public class SecurityConfig extends AbstractSecurityConfig {

	@Autowired
	private  SpringSocialConfigurer socialSecurityConfig;
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// 调用父类中的默认配置
	    super.configure(http);

		http.apply(socialSecurityConfig);
	}

}
```

## QQ 登录

开启 QQ 登录首先需要在 [QQ 互联 ](https://connect.qq.com/index.html) 申请账号和密码

接下来，在项目的配置文件里增加以下配置

```
# spring social拦截器拦截的标志,默认为 /auth
yishuifengxiao.security.social.filter-processes-url=/callback
# QQ登录的appId
yishuifengxiao.security.social.qq.app-id=QQ互联上申请的appId
# QQ登录的appSecret
yishuifengxiao.security.social.qq.app-secret=QQ互联上申请的appId对应的appSecret
# QQ登录的成功后的跳转路径
yishuifengxiao.security.social.qq.register-url=/registerUrl
# QQ登录的服务提供商标志，默认为qq
yishuifengxiao.security.social.qq.provider-id=qq
```

在完成上述配置 ，访问

> http：//ip:port/callback/qq

即可进行 QQ 登录流程了

**注意：**
访问的的 url 中的`/callback/qq` 由 `yishuifengxiao.social.filter-processes-url` 和 `yishuifengxiao.social.qq.provider-id` 两部分共同组成。

## 微信登录

配置微信登录只需要在上述基础上进行一下配置即可

```
# 微信登录的appId
yishuifengxiao.security.social.weixin.app-id=微信开发平台上申请的appId
# 微信登录的appSecret
yishuifengxiao.security.social.weixin.app-secret=微信开发平台申请的appId对应的appSecret
# 微信登录的成功后的跳转路径
yishuifengxiao.security.social.weixin.register-url=/registerUrl
# 微信登录的服务提供商标志，默认为weixin
yishuifengxiao.security.social.weixin.provider-id=weixin
```

在完成上述配置 ，访问

> http：//ip:port/callback/weixin

即可进行微信登录流程了

## 账号绑定

在完成 QQ 登录或者微信登录后，就可将微信(QQ)用户与本系统的用户绑定了。

绑定的关键代码如下:

1. 注入 ProviderSignInUtils 工具

```
    @Autowired
   private  ProviderSignInUtils providerSignInUtils
```

2 开始绑定

```
providerSignInUtils.doPostSignUp("本系统用户ID"，new  ServletWebRequest(request));
```
