---
sidebar_position: 2
title: 动态权限
---

## 权限注解

Spring Security中定义了四个支持使用表达式的注解，分别是@PreAuthorize、@PostAuthorize、@PreFilter和@PostFilter。其中前两者可以用来在方法调用前或者调用后进行权限检查；后两者可以用来对集合类型的参数或者返回值进行过滤,Spring Security将移除使对应表达式的结果为false的元素。

- @PreAuthorize :在方法调用之前，基于表达式的计算结果来限制对方法的访问
- @PostAuthorize 允许方法调用，但是如果表达式计算结果为false，将抛出一个安全性异常
- @PostFilter 允许方法调用，但必须按照表达式来过滤方法的结果
- @PreFilter 允许方法调用，但必须在进入方法之前过滤输入值

这些注解的参数都可接受一个SPEL 表达式,表达式可以是任意合法的SPEL表达式.

如果表达式的计算结果为true，那么安全规则通过，否则就会失败。安全规则通过或失败的结果会因为所使用注解的差异而有所不同。

除了上述几个注解外，通常还可以采用@Secured 和@RolesAllowed 来对方法进行权限控制。

需要注意的是@EnableGlobalMethodSecurity需要几个参数，如下所示： 

- prePostEnabled : 确定 Spring Security 前置注释 [@PreAuthorize,@PostAuthorize,..] 是否应该启用； 	
- secureEnabled :   确定 Spring Security 安全注释 [@Secured] 是否应该启用； 	
- jsr250Enabled :   确定 [JSR-250注释](https://en.wikipedia.org/wiki/JSR_250) [@RolesAllowed..] 是否应该启用； 	

​		可以在同一应用程序启动一个以上的类型的注释，但只有一种类型用于接口或类的行为(在类的行为没有明确定义时)。如果找到两个注解适用于特定的方法，那么只有其中的一个被应用。

### @PreAuthorize

如果想要`@PreAuthorize`生效，还需要设置开启`prePostEnable=true`。配置代码如下:

```
@EnableGlobalMethodSecurity(prePostEnabled=true)
```

通常在项目里面会实现`UserDetails`写`user`类，关键在于`getAuthoritie()`方法里面生成的role有没有前缀`ROLE_`。
使用`@PreAuthorize`是可以随意设置的

```java
   // 都可以，只要和实现的getAuthoritie里面的role对上就可以
@PreAuthorize("hasAuthority('ADMIN')")

@PreAuthorize("hasAuthority('ROLE_ADMIN')")  
    
@PreAuthorize("hasRole('ROLE_ADMIN')")

@PreAuthorize("hasAnyRole('normal','admin')")
 
// 实现的getAuthoritie里面的role都必须要有ROLE_前缀
@Secured({"ADMIN"})
@Secured({"ROLE_ADMIN"}) 
```

简单的使用方法如下:

```
public interface UserService {

	@PreAuthorize("hasRole('ADMIN')")
	void updateUser(User user);
	
	@PreAuthorize("hasRole('ADMIN') AND hasRole('DBA')")
	void deleteUser(int id);
	
}
```

由于@PreAuthorize可以使用Spring表达式语言，任何条件可以很容易地使用EL来表示。只有拥有角色`ADMIN`的用户才能访问`updateUser`方法，`deleteUser` 方法只能被同时拥有`ADMIN`和`DBA`角色的用户调用。

使用表达式时我们还可以在表达式中使用方法参数。

```
public class UserServiceImpl implements UserService {
	/**
    * 限制只能查询Id小于10的用户
   */
	@PreAuthorize("#id<10")
	public User find(int id) {
		System.out.println("find user by id........." + id);
		return null;
	}
	/**
    * 限制只能查询自己的信息
    */
	@PreAuthorize("principal.username.equals(#username)")
	public User find(String username) {
		System.out.println("find user by username......" + username);
		return null;
	}
	/**
    * 限制只能新增用户名称为abc的用户
    */
	@PreAuthorize("#user.name.equals('abc')")
	public void add(User user) {
		System.out.println("addUser............" + user);
	}
	
	/**
    * 必须是拥有 ROLE_USER 的用户,并且密码长度大于8,或者拥有 ROLE_ADMIN 权限的.
    */
	@PreAuthorize("hasRole('ROLE_USER') and #userEntity.password>8 or hasRole('ROLE_ADMIN')")
    public String addUser(UserEntity userEntity){
        return "addUser ok";
    }
}
```

在上面代码中我们定义了调用`find(int id)`方法时，只允许参数id小于10的调用；调用`find(String username)`时只允许`username`为当前用户的用户名；定义了调用`add()`方法时只有当参数`user`的`name`为`abc`时才可以调用。

表达式中 `#userEntity` 直接使用了方法中的同名参数,这使得Spring Security 能够检查传入方法的参数.并将这些参数用于认证决策的指定.

### @PostAuthorize

 有时候可能你会想在方法调用完之后进行权限检查，这种情况比较少，但是如果你有的话，Spring Security也为我们提供了支持，通过@PostAuthorize可以达到这一效果。使用@PostAuthorize时我们可以使用内置的表达式`returnObject`表示方法的返回值。

当`@EnableGlobalMethodSecurity(prePostEnabled=true)`的时候，@PostAuthorize可以使用：

使用示例如下

```
@GetMapping("/helloUser")
@PostAuthorize(" returnObject!=null &&  returnObject.username == authentication.name")
public User helloUser() {
	Object pricipal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	User user;
	if("anonymousUser".equals(pricipal)) {
		user = null;
	} else {
		user = (User) pricipal;
	}
	return user;
}

```

另一个使用示例如下:

```
@PostAuthorize("returnObject.id%2==0")
public User find(int id) {
	User user = new User();
	user.setId(id);
	return user;
}
```

上面这一段代码表示将在方法`find()`调用完成后进行权限检查，如果返回值的`id`是偶数则表示校验通过，否则表示校验失败，将抛出`AccessDeniedException`。需要注意的是@PostAuthorize是在方法调用完成后进行权限检查，它不能控制方法是否能被调用，只能在方法调用完成后检查权限决定是否要抛出`AccessDeniedException`。

第二个示例

```
 	@RequestMapping("getAll")
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostFilter("filterObject.enabled == true")
    public List<UserEntity> getAllUser(){

        ArrayList<UserEntity> list = new ArrayList<>();
        list.add(new UserEntity("test1","123456",true));
        list.add(new UserEntity("test1","123456",false));

        return list;
    }
```

我们使用了 `@PreAuthorize("hasRole('ROLE_USER')")` 和 `@PostFilter("filterObject.enabled == true")` 这两个注解,表明我们希望,用户必须拥有 `ROLE_USER` 权限,并且返回用户属性 `enabled`为true的所有用户.表达式中的 `filterObject `引用的是方法返回值`List`中的某一个元素,在这里是 `UserEntity`,并且过滤出 `enabled`为`true`的`UserEntity`

### @PreFilter

当@PreFilter标注的方法拥有多个集合类型的参数时，需要通过@PreFilter的`filterTarget`属性指定当前@PreFilter是针对哪个参数进行过滤的。

如下面代码就通过`filterTarget`指定了当前@PreFilter是用来过滤参数`ids`的。`filterObject`是使用@PreFilter和@PostFilter时的一个内置表达式，表示集合中的当前对象。

```
@PreFilter(filterTarget="ids", value="filterObject%2==0")
public void delete(List<Integer> ids, List<String> usernames) {
	// ...
}
```

### @PostFilter

使用@PreFilter和@PostFilter可以对集合类型的参数或返回值进行过滤。使用@PreFilter和@PostFilter时，Spring Security将移除使对应表达式的结果为false的元素。

```
@PostFilter("filterObject.id%2==0"）
public List<User> findAll() {
	List<User> userList = new ArrayList<User>();
	User user;
	for (int i=0; i<10; i++) {
		user = new User();
		user.setId(i);
		userList.add(user);
	}
	return userList;
}
```

上述代码表示将对返回结果中id不为偶数的user进行移除。`filterObject`是使用@PreFilter和@PostFilter时的一个内置表达式，表示集合中的当前对象。

### @Secured

@Secured是从之前Spring版本中引入进来的。它有一个缺点(限制)就是不支持Spring EL表达式

使用`@Secured`注解，先要配置`@EnableGlobalMethodSecurity(securedEnabled = true)`

使用示例如下

```java
public interface BankService {

@Secured("IS_AUTHENTICATED_ANONYMOUSLY")
public Account readAccount(Long id);

@Secured("IS_AUTHENTICATED_ANONYMOUSLY")
public Account[] findAccounts();

@Secured("ROLE_TELLER")
public Account post(Account account, double amount);
    
@Secured("ROLE_ADMIN")
void updateUser(User user);
    
@Secured({ "ROLE_DBA", "ROLE_ADMIN" })
void deleteUser();
    
}

```

`@Secured`和`@PreAuthorize`用法基本一样，但是里面有个大坑,`@Secured`对应的角色必须要有`ROLE_`前缀。

在上面的例子中，`updateUser`方法可以由具有 `ADMIN`角色的人调用，而`deleteUser`可以由`DBA`**或**`ADMIN`角色的人被调用。如果不拥有所需的角色而试图调用一个方法，那么将一个访问拒绝并将引发异常。 

​		如果你想要指定`AND`条件,即想调用`deleteUser`方法同时拥有`ADMIN`**和**`DBA`角色的用户。这是不可能绕过 @Secured 注释的。 

​		这可以使用 Spring 新的 @PreAuthorize/@PostAuthorize 注解来支持 Spring EL 。

### @RolesAllowed

@RolesAllowed注解和@Secured注解在各个方面基本上都是一致的。唯一显著的区别在于@RolesAllowed是JSR-250定义的Java标准注解.

在使用`@RolesAllowed `之前，需要配置：`@EnableGlobalMethodSecurity(jsr250Enabled=true)`
JSR250注解还有 `@DenyAll` 和 `@PermitAll `。

```
@RequestMapping("/test1")
@RolesAllowed("ROLE_ADMIN")
public String test1(){
	return "test1";
}
```

尽管我们这里只是启用了`jsr250Enabled`，但需要说明的一点是这与`securedEnabled`并不冲突。这两种注解风格可以同时启用.

这两个注解都有一个不足之处,它们只能根据用户有没有授予特定的权限来限制方法的调用,在判断方式是否执行方面,无法使用其他的因素.

## 权限注解中的问题

若采用`@EnableGlobalMethodSecurity(securedEnabled = true)`注解，对函数访问进行控制，那么，就会有一些问题(不加`ROLE`_)，因为，这个时候`AccessDecissionManager`会选择`RoleVoter`进行`vote`，但是`RoleVoter`默认的`rolePrefix`是  ROLE_  。

对于下面的示例

```
@Secured({"ROLE_ROOT"})
@RequestMapping(value = "/setting", method = RequestMethod.POST)
@ResponseBody
public Map<String, String> userName(User user, @RequestParam(value = "username") String username){
	Map<String, String> modelMap = new HashMap<String, String>();
	System.out.println(username);
	user.setUsername(username);
	userService.update(user);
	modelMap.put("status", "ok");
	return modelMap;
}
```

而`RoleVoter`选举时，会检测是否支持。

```
public Boolean supports(ConfigAttribute attribute) {
	if ((attribute.getAttribute() != null) && attribute.getAttribute().startsWith(getRolePrefix())) {
		return true;
	} else {
		return false;
	}
}
```

上面的函数会返回`true`，因为传递进去的`attribute`是来自于`@Secured（{"ROLE_ROOT"}）`注解。不幸的时，当进入`RoleVoter`的`vote`函数时，就失败了：

```
public int vote(Authentication authentication, Object object, Collection<ConfigAttribute> attributes) {
	int result = ACCESS_ABSTAIN;
	Collection<? extends GrantedAuthority> authorities = extractAuthorities(authentication);
	for (ConfigAttribute attribute : attributes) {
		if (this.supports(attribute)) {
			result = ACCESS_DENIED;
			// Attempt to find a matching granted authority
			for (GrantedAuthority authority : authorities) {
				if (attribute.getAttribute().equals(authority.getAuthority())) {
					return ACCESS_GRANTED;
				}
			}
		}
	}
	return result;
}
```

原因在于，`authority.getAuthority()`返回的将是`ROOT`,而并不是`ROLE_ROOT`。然而，即使将`@Secured({"ROLE_ROOT"})`改为`@Secured({"ROOT"})`也没有用， 所以，即使当前用户是`ROOT`权限用户，也没有办法操作，会放回403 Access Denied Exception.

解决的办法：有两个。

第一个： 就是将前面提到的`UserDetails`的接口函数`getAuthorities()`的实现中，添加前缀，如上面提到的"ROLE_"+role.name()`

第二个： 就是不用`@Secured（）`注解，采用`@PreAuthorize()`

```

@EnableGlobalMethodSecurity(prePostEnabled = true) //替换掉SecuredEnabled = true
@Configuration
public class MethodSecurityConfig extends GlobalMethodSecurityConfiguration {

}
```

上面的修改，将会实现`AccessDecissionManager`列表中`AccessDecisionVoter`，多出一个`voter`，即`PreInvocationAuthorizationAdviceVoter`

并且修改函数上的注解：

```
@PreAuthorize("hasRole('ROOT')") //或则@PreAuthorize("hasAuthority('ROOT')")
@RostMapping(value = "/setting/username")
@ResponseBody
public Map<String, String> userName(User user, @RequestParam(value = "username") String username){
	Map<String, String> modelMap = new HashMap<String, String>();
	System.out.println(username);
	user.setUsername(username);
	userService.update(user);
	modelMap.put("status", "ok");
	return modelMap;
}
```

这样的话，就可以正常实现函数级别的权限控制了。

## 动态权限表达式

Spring Security 3.0引入了使用Spring EL表达式作为授权机制的能力，此外还简单地使用了之前已经看到的配置属性和访问决定投票者。 基于表达式的访问控制基于相同的体系结构，但允许将复杂的布尔逻辑封装在单个表达式中。

Spring Security使用Spring EL来支持表达，如果您想更深入地理解该主题，则应该查看它的工作方式。 使用“根对象”评估表达式作为评估上下文的一部分。 Spring Security使用特定的类将Web和方法安全性用作根对象，以提供内置表达式和对诸如当前主体的值的访问。

### 常见的内置表达式

表达式根对象的基类是`SecurityExpressionRoot`。 这提供了一些在Web和方法安全性中都可用的通用表达式。

| Expression                                                   | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `hasRole(String role)`                                       | 如果当前主体具有指定角色，则返回true。例如`hasRole('admin')`<br/> 默认情况下，如果提供的角色不是以“ ROLE_”开头，则会添加该角色。 可以通过修改DefaultWebSecurityExpressionHandler上的defaultRolePrefix进行自定义。 |
| `hasAnyRole(String… roles)`                                  | 如果当前主体具有提供的任何角色（以逗号分隔的字符串列表形式），则返回true。例如`hasAnyRole('admin', 'user')`<br/>默认情况下，如果提供的角色不是以“ ROLE_”开头，则会添加该角色。 可以通过修改DefaultWebSecurityExpressionHandler上的defaultRolePrefix进行自定义。 |
| `hasAuthority(String authority)`                             | 如果当前主体具有指定的权限，则返回true。例如, `hasAuthority('read')` |
| `hasAnyAuthority(String… authorities)`                       | 如果当前委托人具有任何提供的授权（以逗号分隔的字符串列表形式），则返回true,例如 `hasAnyAuthority('read', 'write')` |
| `principal`                                                  | 允许直接访问代表当前用户的主体对象                           |
| `authentication`                                             | 允许直接访问从SecurityContext获得的当前Authentication对象    |
| `permitAll`                                                  | Always evaluates to `true`                                   |
| `denyAll`                                                    | Always evaluates to `false`                                  |
| `isAnonymous()`                                              | 如果当前主体是匿名用户，则返回true                           |
| `isRememberMe()`                                             | 如果当前主体是“记住我”用户，则返回true                       |
| `isAuthenticated()`                                          | 如果用户不是匿名的，则返回true                               |
| `isFullyAuthenticated()`                                     | 如果用户不是匿名用户或“记住我”用户，则返回true               |
| `hasPermission(Object target, Object permission)`            | 如果用户可以访问给定权限的给定目标，则返回true, 例如`hasPermission(domainObject, 'read')` |
| `hasPermission(Object targetId, String targetType, Object permission)` | 如果用户可以访问给定权限的给定目标，则返回true,例如 `hasPermission(1, 'com.example.domain.Message', 'read')` |

### 在Web安全表达式中引用Bean

如果您希望扩展可用的表达式，则可以轻松地引用您公开的任何Spring Bean。 例如，假设您有一个名称为webSecurity的Bean，其中包含以下方法签名：

```
public class WebSecurity {
        public boolean check(Authentication authentication, HttpServletRequest request) {
                ...
        }
}
```

在Java里配置

```
http
    .authorizeRequests(authorize -> authorize
        .antMatchers("/user/**").access("@webSecurity.check(authentication,request)")
        ...
    )
```

### Web安全表达式中的路径变量

有时能够引用URL中的路径变量是很好的。 例如，考虑一个RESTful应用程序，该应用程序通过URL路径`/ id / {userId}`的ID通过ID查找用户。

您可以通过将路径变量放在模式中来轻松引用它。 例如，如果您有一个名称为`webSecurity`的Bean，其中包含以下方法签名：

```
public class WebSecurity {
        public boolean checkUserId(Authentication authentication, int id) {
                ...
        }
}
```

需要在Java里配置

```
http
    .authorizeRequests(authorize -> authorize.antMatchers("/user/{userId}/**")
    .access("@webSecurity.checkUserId(authentication,#userId)")
        ...
    );
```

在这两种配置中，匹配的URL会将路径变量传递（并将其转换）为`checkUserId`方法。 例如，如果URL是`/ user / 123 / resource`，则传入的ID为123。

### 内置表达式

有一些特定于方法安全性的内置表达式，我们已经在上面使用过。 `filterTarget`和`returnValue`值很简单，但是使用`hasPermission（）`表达式需要仔细观察。

####  PermissionEvaluator 接口

`hasPermission（）`表达式委托给`PermissionEvaluator`的实例。 它旨在在表达式系统和Spring Security的ACL系统之间架起桥梁，使您可以基于抽象权限在域对象上指定授权约束。 它对ACL模块没有明确的依赖关系，因此如果需要，您可以将其换成其他实现。 该接口有两种方法：

```java
boolean hasPermission(Authentication authentication, Object targetDomainObject,
                            Object permission);

boolean hasPermission(Authentication authentication, Serializable targetId,
                            String targetType, Object permission);
```

它直接映射到表达式的可用版本，但不提供第一个参数（`Authentication`对象）。 第一种方法用于已经控制访问的域对象已经加载的情况。 如果当前用户对该对象具有给定的权限，则`expression`将返回true。 第二种版本用于未加载对象但已知其标识符的情况。 还需要域对象的抽象“类型”说明符，以允许加载正确的ACL权限。 传统上，它是对象的Java类，但是不必与对象的权限加载方式一致。

要使用`hasPermission（）`表达式，必须在应用程序上下文中显式配置`PermissionEvaluator`。 看起来像这样：

```xml


<security:global-method-security pre-post-annotations="enabled">
<security:expression-handler ref="expressionHandler"/>
</security:global-method-security>

<bean id="expressionHandler" class=
"org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler">
    <property name="permissionEvaluator" ref="myPermissionEvaluator"/>
</bean>


```

其中`myPermissionEvaluator`是实现`PermissionEvaluator`的bean。 通常，这将是来自ACL模块（称为`AclPermissionEvaluator`）的实现。 

#### 方法安全性元注释

您可以使用元注释来确保方法的安全性，以使代码更具可读性。 如果发现在整个代码库中重复相同的复杂表达式，这将特别方便。 例如，

```

@PreAuthorize("#contact.name == authentication.name")

```

除了在所有地方重复此操作之外，我们还可以创建一个可以使用的元注释。

```
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("#contact.name == authentication.name")
public @interface ContactPermission {}
```

元注释可以用于任何Spring Security方法安全注释。 为了保持符合规范，JSR-250注释不支持元注释。