---
sidebar_position: 1
title: 对象工具
description: 对象工具
keywords:
- 对象工具
tags:
- 通用工具
authors:
  - name: Joel Marcey

---

------



## 对象转换工具

该工具的作用是实现java对象的转换与解析

> 该工具是一个线程安全类的工具



具备的功能如下:

- 将源对象里属性值复制给目标对象(当前方法是一个线程安全类的方法)
- 将Java对象序列化为二进制数据
- 将序列化化后的二进制数据反序列化为对象
- 将Map转成指定的JavaBean对象
- 将java对象转换为Map

使用示例

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







<br/><br/><br/>

------



## class 工具



