---
sidebar_position: 4
title: 过滤器链
---

## 一 原始过滤器链

依赖

```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
```



1. org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@2e1ddc90,
2. org.springframework.security.web.context.SecurityContextPersistenceFilter@6fa13e6,
3. org.springframework.security.web.header.HeaderWriterFilter@737d100a,
4. org.springframework.security.web.csrf.CsrfFilter@480ad82c, 
5. org.springframework.security.web.authentication.logout.LogoutFilter@507d64aa,
6. org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter@2d4608a6,
7. org.springframework.security.web.authentication.ui.DefaultLoginPageGeneratingFilter@4375b013,
8. org.springframework.security.web.authentication.ui.DefaultLogoutPageGeneratingFilter@5b7c8930,
9. org.springframework.security.web.authentication.www.BasicAuthenticationFilter@22ebccb9, 
10. org.springframework.security.web.savedrequest.RequestCacheAwareFilter@77049094, 
11. org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@4012d5bc,
12. org.springframework.security.web.authentication.AnonymousAuthenticationFilter@58867cd5,
13. org.springframework.security.web.session.SessionManagementFilter@6535117e, 
14. org.springframework.security.web.access.ExceptionTranslationFilter@5ad5be4a, 
15. org.springframework.security.web.access.intercept.FilterSecurityInterceptor@235d29d6

## 二 基础的过滤器链

```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
                <dependency>
            <groupId>com.yishuifengxiao.common</groupId>
            <artifactId>common-spring-boot-starter</artifactId>
            <version>${common-sarter.version}</version>
        </dependency>
```



1. org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@568750b7,
2. org.springframework.security.web.context.SecurityContextPersistenceFilter@7980cf2c, 
3. org.springframework.security.web.header.HeaderWriterFilter@16ac5d35, 
4. com.yishuifengxiao.common.security.httpsecurity.filter.TokenValidateFilter@1d9bd4da,
5. org.springframework.security.web.authentication.logout.LogoutFilter@53c99b09,
6. com.yishuifengxiao.common.security.httpsecurity.filter.UsernamePasswordPreAuthFilter@75d982d3,
7. org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter@2539cd1c,
8. org.springframework.security.web.session.ConcurrentSessionFilter@2b6a0ea9, 
9. org.springframework.security.web.authentication.www.BasicAuthenticationFilter@7af52ec7, 
10. org.springframework.security.web.savedrequest.RequestCacheAwareFilter@759de304, 
11. org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@405b6d75,
12. org.springframework.security.web.authentication.rememberme.RememberMeAuthenticationFilter@7ae0cc89, 
13. org.springframework.security.web.authentication.AnonymousAuthenticationFilter@3e28fee1, 
14. org.springframework.security.web.session.SessionManagementFilter@3c0e00a8,
15. org.springframework.security.web.access.ExceptionTranslationFilter@1c067c0d,
16. org.springframework.security.web.access.intercept.FilterSecurityInterceptor@59939293



## 三 认证服务器过滤器链

包含的依赖

```xml
      <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>        
<dependency>
            <groupId>com.yishuifengxiao.common</groupId>
            <artifactId>common-spring-boot-starter</artifactId>
            <version>${common-sarter.version}</version>
        </dependency>     
<dependency>
            <groupId>org.springframework.security.oauth.boot</groupId>
            <artifactId>spring-security-oauth2-autoconfigure</artifactId>
            <version>${oauth2.version}</version>
        </dependency>
```

1. org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@6ee88e21,
2. org.springframework.security.web.context.SecurityContextPersistenceFilter@27960b1e,
3. org.springframework.security.web.header.HeaderWriterFilter@528c8c1,
4. com.yishuifengxiao.common.security.httpsecurity.filter.TokenValidateFilter@4b0b64cc,
5. org.springframework.security.web.authentication.logout.LogoutFilter@153cb763,
6. com.yishuifengxiao.common.security.httpsecurity.filter.UsernamePasswordPreAuthFilter@4288d98e, 
7. org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter@2c3158e0, o
8. rg.springframework.security.web.session.ConcurrentSessionFilter@1c046c92,
9. org.springframework.security.web.authentication.www.BasicAuthenticationFilter@6f731759,
10. org.springframework.security.web.savedrequest.RequestCacheAwareFilter@643ba1ed, 
11. org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@3d3a1903, 
12. org.springframework.security.web.authentication.rememberme.RememberMeAuthenticationFilter@412ebe64, 
13. org.springframework.security.web.authentication.AnonymousAuthenticationFilter@78d23d6a, 
14. org.springframework.security.web.session.SessionManagementFilter@1f78d415, 
15. org.springframework.security.web.access.ExceptionTranslationFilter@587c5c1,
16. org.springframework.security.web.access.intercept.FilterSecurityInterceptor@110b7837

## 四 oauth2-clien滤器链

  包含的依赖

```xml
          <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>    
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-oauth2-client</artifactId>
        </dependency>
```

1. org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@15efda6c, 
2. org.springframework.security.web.context.SecurityContextPersistenceFilter@1491344a, 
3. org.springframework.security.web.header.HeaderWriterFilter@6add8e3f, 
4. org.springframework.security.web.csrf.CsrfFilter@423c5404,
5. org.springframework.security.web.authentication.logout.LogoutFilter@459b6c53, 
6. org.springframework.security.oauth2.client.web.OAuth2AuthorizationRequestRedirectFilter@2f860823, 
7. org.springframework.security.oauth2.client.web.OAuth2AuthorizationRequestRedirectFilter@52b06bef, 
8. org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter@4d68b571,
9. org.springframework.security.web.authentication.ui.DefaultLoginPageGeneratingFilter@61ecbee9,
10. org.springframework.security.web.authentication.ui.DefaultLogoutPageGeneratingFilter@6056232d,
11. org.springframework.security.web.savedrequest.RequestCacheAwareFilter@1386313f, 
12. org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@47406941,
13. org.springframework.security.web.authentication.AnonymousAuthenticationFilter@33f2df51, 
14. org.springframework.security.oauth2.client.web.OAuth2AuthorizationCodeGrantFilter@330c1f61,
15. org.springframework.security.web.session.SessionManagementFilter@48904d5a, 
16. org.springframework.security.web.access.ExceptionTranslationFilter@67cefd84, 
17. org.springframework.security.web.access.intercept.FilterSecurityInterceptor@39909d1a
