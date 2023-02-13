---
sidebar_position: 1
title: 快速入门
---

该功能主要针对spring boot security的基础上进行的增强性扩展，首先在项目中加入spring security相关的依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

包含了上述依赖后，组件中spring security增强功能会默认开启，若要关闭此功能，可以进行如下设置：

```properties
yishuifengxiao.security.enable=false
```

## 快速启动

在项目中加入相关依赖后，再在项目中加入以下代码：

```java
@Configuration
@EnableWebSecurity
public class SecurityCoreConfig extends AbstractSecurityConfig {

}
```

即可开启增强功能，此时项目使用默认配置，所有密码为 12345678 的账号都能通过鉴权 ，如需设置自定义账号密码，可以在项目中加入以下代码

```java
@Slf4j
@Component
public class CustomeUserDetailsServiceImpl implements UserDetailsService {

    @Autowired
   private PasswordEncoder passwordEncoder;

   @Override
   public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
      // 不应该在这里加密，数据库里就应该存的是的加密后的密文
      String encodePassword = passwordEncoder.encode("12345678");
      log.trace("自定义UserDetailsService实现类中获取到的用户名为 {} ", username);

      // 这里不比较密码的正确性，在返回后由spring security比较密码正确性
      return new User(username, encodePassword, true, true, true, true,
            AuthorityUtils.commaSeparatedStringToAuthorityList("admin,ROLE_USER"));
   }


}
```

在默认情况下，组件使用的`DES`进行加密操作，如需要实现自定义加密，可以进行以下配置：

```java
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
```

## 过滤器链表

以下是Spring Security过滤器顺序的完整列表：

- ChannelProcessingFilter
- ConcurrentSessionFilter
- WebAsyncManagerIntegrationFilter
- SecurityContextPersistenceFilter
- HeaderWriterFilter
- CorsFilter
- CsrfFilter
- LogoutFilter
- OAuth2AuthorizationRequestRedirectFilter
- Saml2WebSsoAuthenticationRequestFilter
- X509AuthenticationFilter
- AbstractPreAuthenticatedProcessingFilter
- CasAuthenticationFilter
- OAuth2LoginAuthenticationFilter
- Saml2WebSsoAuthenticationFilter
- [`UsernamePasswordAuthenticationFilter`(opens new window)](https://docs.spring.io/spring-security/site/docs/5.3.5.RELEASE/reference/html5/#servlet-authentication-usernamepasswordauthenticationfilter)
- ConcurrentSessionFilter
- OpenIDAuthenticationFilter
- DefaultLoginPageGeneratingFilter
- DefaultLogoutPageGeneratingFilter
- [`DigestAuthenticationFilter`(opens new window)](https://docs.spring.io/spring-security/site/docs/5.3.5.RELEASE/reference/html5/#servlet-authentication-digest)
- BearerTokenAuthenticationFilter
- [`BasicAuthenticationFilter`(opens new window)](https://docs.spring.io/spring-security/site/docs/5.3.5.RELEASE/reference/html5/#servlet-authentication-basic)
- RequestCacheAwareFilter
- SecurityContextHolderAwareRequestFilter
- JaasApiIntegrationFilter
- RememberMeAuthenticationFilter
- AnonymousAuthenticationFilter
- OAuth2AuthorizationCodeGrantFilter
- SessionManagementFilter
- [`ExceptionTranslationFilter`(opens new window)](https://docs.spring.io/spring-security/site/docs/5.3.5.RELEASE/reference/html5/#servlet-exceptiontranslationfilter)
- [`FilterSecurityInterceptor`(opens new window)](https://docs.spring.io/spring-security/site/docs/5.3.5.RELEASE/reference/html5/#servlet-authorization-filtersecurityinterceptor)
- SwitchUserFilter