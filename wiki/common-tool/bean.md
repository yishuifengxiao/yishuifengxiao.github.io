---
sidebar_position: 2
title: 对象工具
description: 对象工具
keywords:
- 对象工具
tags:
- 通用工具
authors:
  - name: Joel Marcey

---





## 对象转换工具

该工具的作用是实现java对象的转换与解析

> 该工具是一个线程安全类的工具



具备的功能如下:

- 将源对象里属性值复制给目标对象(当前方法是一个线程安全类的方法)
- 将Java对象序列化为二进制数据
- 将序列化化后的二进制数据反序列化为对象
- 将Map转成指定的JavaBean对象
- 将java对象转换为Map

**使用示例**

通用对象

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public static class User implements Serializable {

    private String name;

    private Integer age;
}
```

### 1 对象复制

```java
    @Test
    public void copyTest() {
        User user = new User("aaa", 13);

        User copy = BeanUtil.copy(user, new User());

        System.out.println(copy);
    }
```

输出结果如下：

```bash
BeanUtilTest.User(name=aaa, age=13)
```

------

### 2 对象序列化

```java
   @Test
    public void objectToByteTest() {
        User user = new User("aaa", 13);
        final byte[] bytes = BeanUtil.objectToByte(user);
        System.out.println(bytes);
    }
```

------

### 3 对象反序列化

```java
        User user = new User("aaa", 13);
        final byte[] bytes = BeanUtil.objectToByte(user);
        System.out.println(BeanUtil.byteToObject(bytes,User.class));
```

------

### 4  对象转map

```
    User user = new User("aaa", 13);
        final Map map = BeanUtil.beanToMap(user);
        System.out.println(map);
        
        // 输出为 {name=aaa, age=13}
```

### 5 map转对象

```
       User user = new User("aaa", 13);
        final Map map = BeanUtil.beanToMap(user);
        System.out.println(BeanUtil.mapToBean(map,User.class));
```





<br/><br/><br/>

------



## class 工具

该工具的主要目的是使用反射获取java对象和class中的信息

>  该工具是一个线程安全类的工具

主要功能如下:

- 获取class中所有的字段和属性
- 根据属性名字获取对象里对应属性的值
- 遍历对象所有的属性和值

示例如下

### 1 获取class中所有的字段和属性



```java
//提取出一个类里所有的属性字段(包括父类里的属性字段)
final List<Field> fields = ClassUtil.fields(BeanUtilTest.User.class);
System.out.println(fields);
//提取出一个类里所有的属性字段(包括父类里的属性字段,但是不包含被特殊修饰的字段
final List<Field> fields1 = ClassUtil.fields(BeanUtilTest.User.class, true);
System.out.println(fields1);
```

输出结果：

```bash
[private java.lang.String com.yishuifengxiao.common.tool.bean.BeanUtilTest$User.name, 

private java.lang.Integer com.yishuifengxiao.common.tool.bean.BeanUtilTest$User.age]
```

### 2 根据属性名字获取对象里对应属性的值

```java
        BeanUtilTest.User user = new BeanUtilTest.User("aaa", 13);

        Object name = ClassUtil.extractValue(user, "name");
        Object age = ClassUtil.extractValue(user, "age");

        System.out.println("name = " + name + " age = " + age);
```

输出如下：

```bash
name = aaa age = 13
```

### 3 遍历对象所有的属性和值

```java
        BeanUtilTest.User user = new BeanUtilTest.User("aaa", 13);

        ClassUtil.forEach(user, (k, v) -> {
            System.out.println("属性 = " + k + " 属性值 =" + v);
        });
```

输出结果为:

```bash
属性 = private java.lang.String com.yishuifengxiao.common.tool.bean.BeanUtilTest$User.name 属性值 =aaa
属性 = private java.lang.Integer com.yishuifengxiao.common.tool.bean.BeanUtilTest$User.age 属性值 =13
```

