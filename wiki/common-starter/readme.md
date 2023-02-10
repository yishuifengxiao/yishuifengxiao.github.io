---
sidebar_position: 1
title: 快速入门
---

在日常开发过程中，时常发现有一些简单的功能会被经常使用到，又没有一个比较好用的功能集合，因此在开发项目是需要反复配置，造成了大量不必要的重复性简单劳动，所以在过往经验的基础上对日常使用到功能进行了一个通用封装，形成了【 增强组件】 ，方便后期项目开发。 本着"一次开发,开箱即用"的原则，组件在开发时遵守以下几点：

- 开箱即用，可以选择性开启仅仅使用到的功能
- 基本配置, 在开启本组件功能后，无须二次配置即能使用组件的基本工功能。
- 个性配置，组件提供大量的配置属性，能通过预留的配置属性自定义组件功能。
- 高级配置，在系统默认配置和个性配置不能满足开发需要时，能通过自定义组件中的某些元件实现高级配置。

【 增强组件】已经发布到maven中央仓库，使用方法如下：

```xml
<dependency>
    <groupId>com.yishuifengxiao.common</groupId>
    <artifactId>common-spring-boot-starter</artifactId>
    <version>5.8.0</version>
</dependency>
```

最新版本参见 https://central.sonatype.com/artifact/com.yishuifengxiao.common/common-spring-boot-starter/5.8.0/versions

**特别注意:**

- [ ] 此工具5.x.x 版本基于spring-boot 2.3.12.RELEASE版本封装而来，主要是在低版本的springboot项目中使用

- [ ] 此工具的6.x.x版本基于spring-boot  3 版本封装而来，主要用于新特性体验


【 增强组件】是基于springboot的高度封装的通用型组件，**在不影响任何原生功能的基础上根据日常使用习惯对springboot web进行了增强式功能扩展**，统一了请求的响应格式，方便请求追踪调试，支持跨域设置和全局异常捕获功能，允许自定义异常信息提示

组件还包含swagger接口文档功能，支持一键导出离线接口使用文档。同时组件提供了各种常见的验证码支持功能（如图形验证码、短信验证码和邮件验证码）

除了对spring security和spring security oauth2高度可定制化的功能封装外，还支持第三方登录和sso单点登录功能，使用户能够快速开启QQ登录和微信登录能力，搭建属于自己的认证中心。

最后，组件提供了大量丰富的配置属性，支持通过属性配置完成各项功能设置，真正实现零侵入、防止暴力破解的无缝接入功能。

