---
sidebar_position: 1
title: 快速入门
---

## oauth2Login、oauth2Client 区别


这两者都是在SpringSecurity中整合OAuth2的入口方法(例http.oauth2Login())，对应OAuth2LoginConfigurer、OAuth2ClientConfigurer，只是引入Filter有所异同。

- oauth2Login会在授权请求时进行认证（即设置安全上下文SecurityContext），背后会连续访问acc_token&user-info-url 将获取的用户信息构造填充 Authentication。
- 而oauth2Client也会对授权请求进行处理，但只是获取到access_token后用repository存起来（要怎么使用自行处理），不会认证，这也意味着需要自行实现认证逻辑。

从 OAuth2 请求的维度概览看:

- 对 授权码code 的请求：由OAuth2AuthorizationRequestRedirectFilter响应"授权请求"向客户端返回重定向响应，定向到实际 “authorization-uri”
- 对 access_token 和 user-info-uri 实际请求：OAuth2LoginAuthenticationFilter会对回调地址(携带了code和state)进行处理，调用AuthemticationManager进行认证。背后OAuth2LoginAuthenticationProvider会进行连续 token-uri、user-info-uri 请求，最后返回完全填充的OAuth2LoginAuthenticationToken。

