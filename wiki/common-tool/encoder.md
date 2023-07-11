---
sidebar_position: 6
title: 加解密工具
description: 加解密工具
keywords:
- 加解密工具
tags:
- 通用工具
authors:
  - name: Joel Marcey

---



## 一 MD5工具

基于MD5算法实现的加密工具

> 该工具是一个线程安全类的工具

### 1.1 字符串的MD5值(32位小写)

文本值的32位小写md5值

```java
final String md5 = Md5.md5("1234567890");
System.out.println("长度 " + md5.length());
System.out.println(md5);
```

得到结果如下:

```bash
长度 32
e807f1fcf82d132f9bb018ca6738a19f
```

### 1.2 字符串的MD5值(16位小写)

文本值的16位小写md5值

```java
    final String md5 = Md5.md5Short("yishuifengxiao");
        System.out.println("长度 " + md5.length());
        System.out.println(md5);
```

运行结果为

```bash
长度 16
96b41ec367d9bd30
```

### 1.3 文件的md5值(32位小写)

计算文件的32位小写md5值

```java
     final String md5 = Md5.md5(new File("D:\\desktop\\无标题.png"));
        System.out.println("长度 " + md5.length());
        System.out.println(md5);
```

得到的结果如下：

```bash
长度 32
1478fdceedd1bc328c3d94f8c1ce4230
```

## 二 DES工具

> 该工具为线程安全类工具

### 2.1 DES加密

```java
        String text = "yishuifengxiao";
        // 使用默认密钥加密
        final String encrypt = DES.encrypt(text);
        // 使用密钥 key 进行加密
        final String encrypt1 = DES.encrypt("key", text);
        System.out.println(" encrypt = " + encrypt);
        System.out.println(" encrypt1 = " + encrypt1);
```

运行结果如下：

```bash
 encrypt = 176C1465A2999ED9165D3D94171F94AC
 encrypt1 = EE8B51AC31CA048C7037B80BBA7A1C87
```

### 2.2 DES解密

```java
     // 使用默认密钥解密
        final String decrypt = DES.decrypt("176C1465A2999ED9165D3D94171F94AC");
        // 使用密钥 key 进行解密
        final String decrypt1 = DES.decrypt("key", "EE8B51AC31CA048C7037B80BBA7A1C87");
        System.out.println(" decrypt = " + decrypt);
        System.out.println(" decrypt1 = " + decrypt1);
```

运行结果如下:

```bash
 decrypt = yishuifengxiao
 decrypt1 = yishuifengxiao
```

## 三 AES工具

### 3.1 AES加密

> 该工具为线程安全类工具

```java
        String text = "yishuifengxiao";
        // 使用默认密钥加密
        final String encrypt = AES.encrypt(text);
        // 使用密钥 key 进行加密
        final String encrypt1 = AES.encrypt("key", text);
        System.out.println(" encrypt = " + encrypt);
        System.out.println(" encrypt1 = " + encrypt1);
```

运行结果为：

```bash
 encrypt = LXN2NGjP742x9EimlEY2PQ==
 encrypt1 = gulkjb6n30L8m4CMEiNWWQ==
```

### 3.2 AES解密

```java
        // 使用默认密钥解密
        final String decrypt = AES.decrypt("LXN2NGjP742x9EimlEY2PQ==");
        // 使用密钥 key 进行解密
        final String decrypt1 = AES.decrypt("key", "gulkjb6n30L8m4CMEiNWWQ==");
        System.out.println(" decrypt = " + decrypt);
        System.out.println(" decrypt1 = " + decrypt1);
```

运行结果为:

```bash
 decrypt = yishuifengxiao
 decrypt1 = yishuifengxiao
```

