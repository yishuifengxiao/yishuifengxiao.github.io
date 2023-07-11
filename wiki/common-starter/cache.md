---
sidebar_position: 3
title: 通用增强
---

该功能主要针对spring boot web进行的增强性扩展，主要包含的功能如下：

## 一 spring cache增强

默认情况下，当项目中包含spring cache相关依赖时组件会生成一个名为 simpleKeyGenerator 的缓存key生成器 `org.springframework.cache.interceptor.KeyGenerator`

使用示例如下：

```java
@Service
@Transactional(rollbackOn = {Exception.class})
@CacheConfig(cacheNames = "cache_Application")
public class ApplicationServiceImpl extends BaseAware implements ApplicationService {
    @Autowired
    private ToolFeignClient toolFeignClient;

    @Override
    @Cacheable(unless = "#result==null")
    public Page<ApplicationVo> findPgae(Application app, Integer pageSize, Integer pageNum) {

    }

    @Override
    @CacheEvict(allEntries = true)
    public Boolean update(Application app) {
        
    }

}
```

## 二 spring redis 增强

默认情况下，当项目中包含spring redis相关依赖时组件会自动开启spring redis增强功能，若要关闭可以在项目中加入

```java
yishuifengxiao.redis.enable=false
```

在功能开启时缓存的默认TTL为30分钟，可以通过以下配置修改

```java
yishuifengxiao.redis.ttl=100m
```

## 三 guava增强

默认情况下，当项目中包含guava相关依赖时组件会自动开启guava增强功能

### 3.1 异步消息总线

```java
  @Component
   public class DemoEventBus {
   	@Resource
   	private EventBus asyncEventBus;
  
   	@PostConstruct
   	public void init() {
   		asyncEventBus.register(this);
      }
   }
```

发送消息

```java
   asyncEventBus.post("需要发送的数据");
```

接收消息

```java
   @Subscribe
   public void recieve(Object data) {
   	// 注意guava是根据入参的数据类型进行接收的
   	// 发送的数据可以被多个接收者同时接收
   }
```

### 3.2 事件发布者

```java
 	@Resource
   	private EventPublisher globalEventPublisher;
```

