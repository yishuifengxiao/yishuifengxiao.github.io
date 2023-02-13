---
sidebar_position: 3
title: 新版本变化
---

前述配置均为在spring security低版本下增强扩展而来，在高版本情况下有了众多新的变化。

## 一、WebSecurityConfigurerAdapter 类已经过时

Spring 在标注一个类是过时类的时候，同时也给出了新的建议配置方式，如图所示：

使用
org.springframework.security.web.SecurityFilterChain Bean来配置HttpSecurity，或者使用WebSecurityCustomizer Bean来配置WebSecurity。



这种方式显然更加清晰了，不需要再依赖于一个抽象类提供的通用功能。

## 二 配置 HttpSecurity

HttpSecurity是用来构建包含了一系列过滤器链的过滤器SecurityFilterChain，平常我们的配置就是围绕构建SecurityFilterChain进行。构建好的还要交给FilterChainProxy来代理。

下面是一个使用
WebSecurityConfigurerAdapter的配置示例，它使用HTTP Basic保护所有端点。

```java
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

 @Override
 protected void configure(HttpSecurity http) throws Exception {
 http
 .authorizeHttpRequests((authz) -> authz
 .anyRequest().authenticated()
 )
 .httpBasic(withDefaults());
 }
}
```

接下来，推荐的方法是注入一个SecurityFilterChain bean对象：

```java
@Configuration
public class SecurityConfiguration {

 @Bean
 public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
 http
 .authorizeHttpRequests((authz) -> authz
 .anyRequest().authenticated()
 )
 .httpBasic(withDefaults());
 return http.build();
 }
}
```

Spring Security 的底层实际上就是一堆过滤器，所以我们之前在 configure(HttpSecurity) 方法中的配置，实际上就是配置过滤器链。现在过滤器链的配置，我们通过提供一个 SecurityFilterChain Bean 来配置过滤器链。

SecurityFilterChain 是一个接口，这个接口只有一个实现类
DefaultSecurityFilterChain。

## 三 配置 WebSecurity

WebSecurityCustomizer是一个可用于自定义WebSecurity的函数接口。它的作用是来定义哪些请求忽略安全控制，哪些请求必须安全控制。

下面是一个使用
WebSecurityConfigurerAdapter 类的配置示例，用来忽略匹配/ignore1和/ignore2 的请求。

```java
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

 @Override
 public void configure(WebSecurity web) {
 web.ignoring().antMatchers("/ignore1", "/ignore2");
 }
}
```

推荐的方法是注入一个WebSecurityCustomizer bean对象：

```java
@Configuration
public class SecurityConfiguration {

 @Bean
 public WebSecurityCustomizer webSecurityCustomizer() {
 return (web) -> web.ignoring().antMatchers("/ignore1", "/ignore2");
 }
}
```