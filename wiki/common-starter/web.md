---
sidebar_position: 1
title: web增强
---

该功能主要针对spring boot web进行的增强性扩展，主要包含的功能如下：

## 一 基础功能

### 1.1 spring上下文工具

该工具主要是获取spring的上下文，并根据spring的上下文进行简单的封装

```java
        // 获取spring的上下文
        final ApplicationContext context = SpringContext.getContext();
        // 获取被spring 管理的User对象实例
        final User user = SpringContext.getBean(User.class);

```

### 1.2 通用线程池

生成一个全局线程池。

- IO密集型=2Ncpu（可以测试后自己控制大小，2Ncpu一般没问题） （常出现于线程中：数据库数据交互、文件上传下载、网络数据传输等等）
- 计算密集型=Ncpu（常出现于线程中：复杂算法）

在此工具中，默认的Ncpu=Runtime.getRuntime().availableProcessors()

```java
@Autowired
private ThreadPool threadPool;

@Test
void contextLoads() {

    ThreadPoolExecutor executor = threadPool.executor();
    // do something 
}
```

## 二 请求追踪

默认情况下，在引入了增强组件后，请求追踪自动开启，如需关闭此功能可以在项目中加入以下配置

```properties
yishuifengxiao.web.tracked=false
```

### 2.1 全局请求追踪

在开启此功能后，项目中所有的请求均会被赋予一个唯一的追踪标识，该请求追踪标识可以在项目中通过以下获取（注意在多线程或子线程中不能使用）

方法一

```java
String ssid= TraceContext.get();
```

也可以通过以下方式获取

```java
@Autowired
private WebEnhanceProperties webEnhanceProperties;

@Test
void contextLoads() {

    HttpServletRequest httpServerHttpRequest =...
    Object ssid = httpServerHttpRequest.getAttribute(webEnhanceProperties.getTracked());
}
```

当请求的响应输出为com.yishuifengxiao.common.tool.entity.Response 实例时，组件会自动将此请求的追踪标识古语给Response 对象的requtest-id属性，方便进行请求追踪。

```json
{
	"code": 0,//请求的响应码,这里借用HttpStatus作为状态标识
	"data": {},//响应数据，在基本基本信息无法满足时会出现此信息,一般情况下无此信息
	"msg": "", //响应提示信息,一般与响应码的状态对应,对响应结果进行简单地描述
	"requtest-id": "",//请求ID,用于请求追踪 .无论调用接口成功与否,都会返回请求 ID,该序列号全局唯一且随机
	"response-time": "" //响应时间
}
```

### 2.2 动态日志修改

此功能主要时支持动态修改logback日志级别。默认情况下此功能时开启状态，如要关闭此功能，可以在项目中加入以下设置：

```properties
yishuifengxiao.web.dynamic-log-level=false
```

在默认情况下，组件为`yishuifengxiao.web.dynamic-log-level`设置的默认值为dynamicLogLevel，若此值配置的值被设置为false或空时，表示关闭动态日志修改功能。

在功能开启时，在任何请求下，组件会自动从请求头或请求参数中获取日志修改配置信息。当获取到的信息的格式符合 {loggerName}:{loggerLevel}的形式时，会自动调整对应logger的日志级别

例如在请求的请求头上加上以下的参数：

```bash
dynamicLogLevel com.demo.User:DEBUG
```

或者在请求参数上加上

```bash
.....&dynamicLogLevel=com.demo.User:DEBUG
```



## 三 全局异常捕获

默认情况下，在引入了增强组件后，全局异常捕获功能自动开启，如需关闭此功能可以在项目中加入以下配置

```properties
yishuifengxiao.web.enable=false
```

### 3.1 基础使用

开启全局异常捕获功能后，项目中所有的异常都会被组件捕获。根据捕获的异常的类型不同不同，处理策略如下：

- 当捕获到`com.yishuifengxiao.common.tool.exception.CustomException`或`com.yishuifengxiao.common.tool.exception.UncheckedException`时，会自动提取此类异常中的输出信息，然后返回统一格式响应
- 当捕获到其他类型的异常时，会提取此异常中的全部堆栈信息，进行统一格式响应输出

通用响应的格式如下

```json
{
	"code": 0,//请求的响应码,这里借用HttpStatus作为状态标识
	"data": {},//响应数据，在基本基本信息无法满足时会出现此信息,一般情况下无此信息
	"msg": "", //响应提示信息,一般与响应码的状态对应,对响应结果进行简单地描述
	"requtest-id": "",//请求ID,用于请求追踪 .无论调用接口成功与否,都会返回请求 ID,该序列号全局唯一且随机
	"response-time": "" //响应时间
}
```

在发生异常捕获时，上述响应中code的值为500，msg则为从异常中提取出来的信息

在默认情况下，常见的异常与提示信息的对应关系如下

- HttpMessageNotReadableException ： 参数解析失败
- IllegalArgumentException ：参数不符合要求
- MissingServletRequestParameterException : 请求参数有误
- MethodArgumentTypeMismatchException : 请求参数有误
- ValidationException ： 非法参数
- HttpRequestMethodNotSupportedException ： 不支持当前请求方法
- HttpMediaTypeNotSupportedException ： 不支持当前媒体类型
- NullPointerException ： 请求处理失败
- IOException ：请求处理失败

### 3.2 进阶使用

> 这里的配置针对`com.yishuifengxiao.common.tool.exception.CustomException`和`com.yishuifengxiao.common.tool.exception.UncheckedException` 及其子类异常不适用。
>
> 在进行异常匹配时，不区分大小写

在某些情况下，上述默认的异常处理策略不符合业务要求时，用户可以对其他类型的异常进行自定义提示信息信息解析。可以在项目中加入以下配置：

```properties
# 这里的 DuplicateKeyException 是要被转换的异常的名字
yishuifengxiao.web.error.map.DuplicateKeyException="已经存在相同名称的数据"

# 这里的 com.demo.DemoException 是要被转换的异常的全路径名称
yishuifengxiao.web.error.map.com.demo.DemoException="发生未知异常"
```

上述示例表示当捕获到名为 DuplicateKeyException 的异常时，全局异常输出的异常提示信息为 "已经存在相同名称的数据" ，当捕获到的异常为 com.demo.DemoException 时，全局异常输出的异常提示信息为 "发生未知异常"。注意，组件会优先根据全路径进行匹配。

当上述配置仍然不能此时只要在spring的上下文中注入一个 `com.yishuifengxiao.common.web.error.ErrorHelper`的实例即可。示例代码如下：

```java
@Component
public class ErrorHelperImpl implements ErrorHelper {
    @Override
    public Object extract(Throwable e) {
        ///// 异常信息处理 
        return null;
    }
}
```

### 3.3 高级使用

在某些更极端的情况下，当用户需要完全自动自定义捕获时，可以先关闭此增强功能

```properties
yishuifengxiao.web.enable=false
```

然后在项目中加入以下代码：

```java
@ControllerAdvice
@ResponseBody
@Priority(1)
public class WebExceptionAutoConfiguration {

    // 也可以先捕获其他异常

    /**
     * 500 - Internal Server Error
     *
     * @param request HttpServletRequest
     * @param e       希望捕获的异常
     * @return 发生异常捕获之后的响应
     */
    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler({RuntimeException.class, Exception.class, Throwable.class})
    public Object catchThrowable(HttpServletRequest request, Throwable e) {
         /// 异常处理
        return response;
    }

}
```

## 四 全局跨域支持

在默认情况下，组件开启了跨域支持功能，允许所有的操作资源进行跨域。若要关闭此功，可以进行如下配置：

```properties
yishuifengxiao.web.cors.enable=false
```

## 五 全局参数校验

在默认情况下，组件开启了全局参数校验，若要关闭此功能，可以配置：

```properties
yishuifengxiao.web.aop=false
```

注意此功能是在springboot原生参数校验功能的基础上扩展而来，不是特有功能。当项目里包含了spring boot的依赖

```xml
<!--参数校验-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

时即可开启此功能。在功能开启状态下，组件会自动拦截带有`@ResponseBody`注解的请求，校验参数属性，当参数不符合要求时，会直接返回通用响应

示例如下：

```java
@Controller
@Valid
@Validated
@Slf4j
public class IndexController {

	@PostMapping("/search")
	@ResponseBody
	public Response<SearchVo> search(HttpServletRequest request, @Validated(Create.class) @RequestBody SearchDto param,
			BindingResult errors) {
		// do something 
	}
}
```

在上述示例中，用户只需要专注处理参数通过校验的逻辑流程即可，当参数不符合要求时，由组件自动处理`BindingResult `中的异常信息，并按照通用响应进行输出。

例如响应

```json
{
  "code": 400,
  "msg": "搜索关键词不能为空",
  "requtest-id": "645a4664fb2d4259849ad96e0164c511",
  "data": null,
  "response-time": "2023-02-10 13:56:05"
}
```

