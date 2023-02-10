---
sidebar_position: 4
title: 验证码
---

该功能主要是验证码支持功能，不依赖与springboot其他组件，可以在任何项目spring boot项目中使用，主要支持图形验证码、邮件验证码和短信验证码。

在默认情况下，验证码功能默认关闭，可以通过以下配置进行开启

```properties
yishuifengxiao.code.enable=true
```

## 一 通用配置

使用验证码功能时，可以在项目中注入以下代码

```java
@Autowired
private CodeProcessor codeProcessor;
```

CodeProcessor接口的定义如下：

```java
/**
 * 创建校验码
 * 
 * @param request  用户请求
 * @param codeType 验证码的类型
 * @return 创建并发送的验证码
 * @throws CustomException  创建或发送验证码时出现问题
 */
ValidateCode create(ServletWebRequest request, CodeType codeType) throws CustomException ;

/**
 * <p>
 * 创建校验码
 * </p>
 * 
 * 生成验证码存储时的key的含义如下:
 * <ul>
 * <li>对于短信验证码,key为手机号</li>
 * <li>对于邮件验证码，key为邮箱</li>
 * <li>对于图像验证码，key为sessionid或指定的值</li>
 * </ul>
 * 
 * @param request  用户请求
 * @param key      验证码的发送目标
 * @param codeType 验证码的类型
 * @return 创建并发送的验证码
 * @throws CustomException  创建或发送验证码时出现问题
 */
ValidateCode create(ServletWebRequest request, String key, CodeType codeType) throws CustomException ;
/**
 * 创建校验码并发送验证码
 * 
 * @param request  用户请求
 * @param codeType 验证码的类型
 * @return 创建并发送的验证码
 * @throws CustomException  创建或发送验证码时出现问题
 */
ValidateCode createAndSend(ServletWebRequest request, CodeType codeType) throws CustomException ;

/**
 * <p>
 * 创建校验码并发送验证码
 * </p>
 * 
 * 生成验证码存储时的key的含义如下:
 * <ul>
 * <li>对于短信验证码,key为手机号</li>
 * <li>对于邮件验证码，key为邮箱</li>
 * <li>对于图像验证码，key为sessionid或指定的值</li>
 * </ul>
 * 
 * @param request  用户请求
 * @param key      验证码的发送目标
 * @param codeType 验证码的类型
 * @return 创建并发送的验证码
 * @throws CustomException  创建或发送验证码时出现问题
 */
ValidateCode createAndSend(ServletWebRequest request, String key, CodeType codeType) throws CustomException ;

/**
 * <p>
 * 校验用户请求中携带的验证码是否正确
 * </p>
 * 在验证码不匹配时会抛出异常，主要异常场景有:
 * <ul>
 * <li>验证码不存在</li>
 * <li>存储的验证码已过期</li>
 * <li>存储的验证码与给定的验证码不匹配</li>
 * </ul>
 * 
 * @param request  用户请求
 * @param codeType 验证码类型
 * @throws CustomException  验证码不匹配或已过期等未通过验证时
 */
void validate(ServletWebRequest request, CodeType codeType) throws CustomException ;

/**
 * <p>
 * 根据验证码的唯一标识符判断给定的验证码是否正确
 * </p>
 * 在验证码不匹配时会抛出异常，主要异常场景有:
 * <ul>
 * <li>验证码不存在</li>
 * <li>存储的验证码已过期</li>
 * <li>存储的验证码与给定的验证码不匹配</li>
 * </ul>
 * 
 * @param key           验证码的唯一标识符
 * @param codeInRequest 给定的验证码
 * @throws CustomException  验证码不匹配或已过期等未通过验证时
 */
void validate(String key, String codeInRequest) throws CustomException ;
```

通用配置如下:

```properties
# 将验证码存储到Redis时的key的前缀，默认值为 validate_code_
yishuifengxiao.code.prefix=validate_code_store_redis
# 是否在验证成功后删除验证过的验证码,true表示删除，false不删除
yishuifengxiao.code.delete-on-success=true
```

## 二 图形验证码

### 2.1 基础使用

**发送验证码**

```java
   /**
     * 生成且发送验证码
     *
     * @param request
     * @param response
     * @throws CustomException
     */
    @GetMapping("/code/image")
    @ResponseBody
    public void image(HttpServletRequest request, HttpServletResponse response) throws CustomException {

        codeProcessor.createAndSend(new ServletWebRequest(request, response), CodeType.IMAGE);
    }
```

在以上代码后，用户即可通过

> http://{ip}:{port}/code/image?image=唯一的随机值

获取图形验证码了。

在上述请求中，用户应该将image参数存储起来，因为在校验验证码时需要用到。

在特殊情况下，当用户请求中没有携带`image`参数时，组件会自动从请求的cookie中获取名为`SESSION`的cookie的值作为验证码的唯一标识符。

**校验验证码**

```java
 @GetMapping("/image/validate")
    @ResponseBody
    public Response<String> validate(HttpServletRequest request, HttpServletResponse response){
        try {
          codeProcessor.validate(new ServletWebRequest(request, response),CodeType.IMAGE);
        } catch (ValidateException e) {
            return Response.error(e.getMessage());
        }
        return Response.suc();
    }
```

用户在验证图形验证码时，即可用过

> http://ip:port/image/validate?image=唯一的随机值&image_code=验证码内容

来判断验证码是否正确。

【注意】上述请求中image参数的值应该与请求中图形验证码的url中的image参数的值保持一致。

> 特殊提示：对于前后端部署在一起的单体应用，上述两个请求中的image参数都可以省略掉。

### 配置参数
除此之外，图形验证码相关的配置有



```
#从请求中获取图形验证码的标识符的参数，默认值为 image
yishuifengxiao.code.image.code-key=image
#请求中获取邮件验证码对应的值的参数，默认值为image_code
yishuifengxiao.code.image.code-value=image_code
#验证码是否包含字母,默认包含
yishuifengxiao.code.image.contain-letter=true
#验证码是否包含数字,默认包含
yishuifengxiao.code.image.contain-number=true
#验证码的失效时间，单位秒，默认为300s
yishuifengxiao.code.image.expire-in=300
#是否生成干扰条纹背景，默认为false
yishuifengxiao.code.image.fringe=false
#验证码的高度,默认为 28
yishuifengxiao.code.image.height=28
#验证码的长度,默认为4
yishuifengxiao.code.image.length=4
#验证码的宽度,默认为70
yishuifengxiao.code.image.width=70
```

<b>注意：</b>

在生成验证码和验证验证码的请求中，请求参数中的`image`参数由`yishuifengxiao.code.image.code-key`属性,`image_code`参数由`yishuifengxiao.code.image.code-value`属性决定。在某些极端情况下，可以通过这两个配置修改请求参数。



### 自定义验证码



针对于图形验证码，组件对图形验证码的生成做一个默认实现，如果生成的图形验证码的内容不满足用户需要，用户可以自定义一个名为 `imageCodeGenerator` 的实例注入到spring中即可。

示例如下

```java
@Component("imageCodeGenerator")
public class ImageCodeGenerator implements CodeGenerator{
    
    @Override
	public ImageCode generate(ServletWebRequest servletWebRequest){
	  //实现自己的图形验证码的生成逻辑  
	}
}
```

## 三 邮件验证码

在使用邮箱验证码时，需要先进行下述配置：

1. 在项目中导入邮件发送相关的依赖


```xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-mail</artifactId>
		</dependency>
```

2. 在项目的配置文件中加入邮件发送相关的配置属性


```
spring.mail.default-encoding=UTF-8
spring.mail.host=邮箱服务器
spring.mail.username=完整的邮箱地址
spring.mail.password=密码
spring.mail.port=465
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.connectiontimeout=5000
spring.mail.properties.mail.smtp.timeout=3000
spring.mail.properties.mail.smtp.writetimeout=5000
spring.mail.properties.mail.smtp.socketFactory.class=javax.net.ssl.SSLSocketFactory
spring.mail.properties.mail.smtp.socketFactory.fallback=false
spring.mail.properties.mail.smtp.socketFactory.port=465
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.starttls.required=true
```

如果不加入以上配置，在使用邮件验证码时会提示 【验证码处理器不存在】，且不能正确发送邮件验证码。

> 【注意】在阿里云ECS服务器上，25端口默认是关闭的，因此最好配置465端口

### 快速启动

邮件验证码的发送代码与图形验证码的发送方法基本一致，只需要将`CodeType.IMAGE`改成`CodeType.EMAIL`即可。

```java
    @GetMapping("/code/email")
    @ResponseBody
    public Response<String> email(HttpServletRequest request, HttpServletResponse response){
        try {
          codeProcessor.create(new ServletWebRequest(request, response),CodeType.EMAIL);
        } catch (ValidateException e) {
            return Response.error(e.getMessage());
        }
        return Response.suc();
    }
```

加入上述配置以后，即可通过

> http://ip:port/code/email?email=目标邮箱地址

发送邮箱验证码了。

### 校验验证码

示例代码如下：

```java
    @GetMapping("/email/validate")
    @ResponseBody
    public Response<String> validate(HttpServletRequest request, HttpServletResponse response){
        try {
        codeProcessor.validate(new ServletWebRequest(request, response),CodeType.EMAIL);
        } catch (ValidateException e) {
            return Response.error(e.getMessage());
        }
        return Response.suc();
    }
```
加入上述配置以后，即可通过

> http://ip:port/email/validate?email=目标邮箱地址&email_code=验证码

来验证了。

### 配置参数

除此之外，组件还提供了一些额外的配置


```
#从请求中获取邮件验证码的邮箱的参数，默认值为 email
yishuifengxiao.code.email.code-key=email
#请求中获取邮件验证码对应的值的参数，默认值为 email_code
yishuifengxiao.code.email.code-value=email_code
#验证码是否包含字母,默认包含
yishuifengxiao.code.email.contain-letter=true
#验证码是否包含数字,默认包含
yishuifengxiao.code.email.contain-number=true
#验证码邮箱的内容模板，默认值为 您的验证码的内容为{0} ,验证码的有效时间为 {1} 秒
yishuifengxiao.code.email.content-template=您的验证码的内容为{0} ,验证码的有效时间为 {1} 秒
#验证码的失效时间，单位秒，默认为300s
yishuifengxiao.code.email.expire-in=300
#验证码的长度,默认为4
yishuifengxiao.code.email.length=4
#验证码邮箱的标题，默认值为 帐号保护验证
yishuifengxiao.code.email.title=帐号保护验证
```

类似地，从请求参数中获取需要发送的目标邮箱`email`的参数由`yishuifengxiao.code.email.code-key`属性,验证码内容`email_code`由`yishuifengxiao.code.email.code-value`属性决定。

### 发送邮件

在邮件验证码功能中，组件对邮箱验证码做了一个缺省性实现，在用户对邮件验证码的格式有自定义需求时，可以通过在spring中注入一个名为`emailCodeSender`的实例来实现自己的模板内容。


示例代码如下

```java
@Component("emailCodeSender")
public class EmailCodeSender implements CodeSender  {
    
    @Override
	public <T extends ValidateCode> void send(ServletWebRequest request, String target, T code){
        //实现自己的发送逻辑
        //此处的target值为目标邮箱地址
    }
}
```
### 自定义验证码



针对于图形验证码，组件对图形验证码的生成做一个默认实现，如果生成的图形验证码的内容不满足用户需要，用户可以自定义一个名为 `emailCodeGenerator`的实例注入到spring中即可。

示例如下

```java
@Component("emailCodeGenerator")
public class EmailCodeGenerator implements CodeGenerator{
    
    @Override
	public ValidateCode generate(ServletWebRequest servletWebRequest){
	  //实现自己的邮件验证码的生成逻辑  
	}
}
```


## 四 短信验证码

由于短信验证码的特殊性，不同的短信提供商有不同的发送接口，因此在使用短信验证码功能之前，需要完成自己的名为 `smsCodeSender`短信发送器,并将其注入到spring上下文之中。

示例代码如下
```java
@Component("smsCodeSender")
public class SmsCodeSender implements CodeSender {
    
    @Override
	public <T extends ValidateCode> void send(ServletWebRequest request, String target, T code){
        //实现自己的发送逻辑
        //target 为目标手机号码
    }
}
```

### 快递启动
示例代码如下

```java
    @GetMapping("/code/sms")
    @ResponseBody
    public Response<String> sms(HttpServletRequest request, HttpServletResponse response){
        try {
            codeProcessor.create(new ServletWebRequest(request, response),CodeType.SMS);
        } catch (ValidateException e) {
            return Response.error(e.getMessage());
        }
        return Response.suc();
    }
```

加入上述配置以后，即可通过

> http://ip:port/code/sms?phone=目标手机号

发送邮箱验证码了。


### 校验验证码


示例代码如下：

```java
    @GetMapping("/sms/validate")
    @ResponseBody
    public Response<String> validate(HttpServletRequest request, HttpServletResponse response){
        try {
       codeProcessor.validate(new ServletWebRequest(request, response),CodeType.SMS);
        } catch (ValidateException e) {
            return Response.error(e.getMessage());
        }
        return Response.suc();
    }
```
加入上述配置以后，即可通过

> http://ip:port/sms/validate?phone=目标手机号&phone_code=验证码

来验证了。

### 参数配置


```
#从请求中获取短信验证码的发送目标(手机号)的参数，默认值为 phone
yishuifengxiao.code.sms.code-key=phone
#请求中获取短信验证码对应的短信内容的参数，默认值为 phone_code
yishuifengxiao.code.sms.code-value=phone_code
#验证码是否包含字母,默认包含
yishuifengxiao.code.sms.contain-letter=true
#验证码是否包含数字,默认包含
yishuifengxiao.code.sms.contain-number=true
#验证码的失效时间，单位秒，默认为300s
yishuifengxiao.code.sms.expire-in=300
#验证码的长度,默认为4
yishuifengxiao.code.sms.length=4
```

类似地，从请求参数中获取短信发送目标的手机号`phone`参数由`yishuifengxiao.code.sms.code-key`属性,`phone_code`参数由`yishuifengxiao.code.sms.code-value`属性决定。

### 自定义验证码



针对于图形验证码，组件对图形验证码的生成做一个默认实现，如果生成的图形验证码的内容不满足用户需要，用户可以自定义一个名为 `smsCodeGenerator`的实例注入到spring中即可。

示例如下

```java
@Component("smsCodeGenerator")
public class SmsCodeGenerator implements CodeGenerator{
    
    @Override
	public SmsCode generate(ServletWebRequest servletWebRequest){
	  //实现自己的短信验证码的生成逻辑  
	}
}
```



## 五 进阶使用

### 存储验证码到Redis

> 当系统中配置有Redis时，组件默认是会将验证码存储到Redis中

在默认情况下，验证码是存储在内存中的，由`DefaultCodeRepository`完成的一个默认的实现。但是在集群或分布式情况下，此方式显然是不合适的，因此可以加入redis，将验证码存储在redis之中。

具体实现的步骤如下：


1 在项目中加入redis相关的依赖

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

2 在配置文件中加入redis相关的配置


```
spring.redis.host=redis数据库
spring.redis.password=redis数据库密码
spring.redis.port=redis数据库端口
```

在完成上述配置后，组件会默认使用 `RedisCodeRepository`来管理验证码的存取。

总的来说，组件会自动判断系统中有无redis相关的实例加载信息，如果系统中存在redis，会默认使用redis进行验证码管理。

在使用 `RedisCodeRepository`进行验证码管理后，redis数据库会在有验证码生成时产生一个key的前缀为  `validate_code_`的记录，此记录信息会被自动清理，请勿手动删除该记录，否则会影响验证码组件的功能。

开启验证码功能后，组件会将验证码对象以前缀`validate_code_`+唯一标识符为键存储到Redis中。其键的形式为:

```
validate_code_store_redis:{唯一标识符}
```

- 对于图形验证码，其唯一标识符由`yishuifengxiao.code.image.code-key`的值从请求中获取而来

- 对于邮件验证码，其唯一标识符由`yishuifengxiao.code.email.code-key`的值从请求中获取而来，一般为发送目标邮箱

- 对于短信验证码，其唯一标识符由`yishuifengxiao.code.sms.code-key`的值从请求中获取而来,一般为目标手机号


