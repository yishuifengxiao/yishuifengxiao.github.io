---
sidebar_position: 7
title: 自定义异常
description: 自定义异常
keywords:
- 自定义异常
tags:
- 通用工具
authors:
  - name: Joel Marcey

---

## 一  自定义异常 CustomException

所有程序中自定义异常的基类

### 字段概要

  | 限定符和类型       | 字段和说明              |
  | :----------------- | :---------------------- |
  | `protected int`    | `code`错误码            |
  | `protected Object` | `context`携带的副驾信息 |



  ### 构造器概要

  | 构造器和说明                                                 |
  | :----------------------------------------------------------- |
  | `CustomException()`Constructs a new runtime exception with `null` as its detail message. |
  | `CustomException(int code, String message)`Constructs a new runtime exception with the specified detail message. |
  | `CustomException(String message)`Constructs a new runtime exception with the specified detail message. |
  | `CustomException(String message, Throwable cause)`Constructs a new runtime exception with the specified detail message and cause. |
  | `CustomException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace)`Constructs a new runtime exception with the specified detail message, cause, suppression enabled or disabled, and writable stack trace enabled or disabled. |
  | `CustomException(Throwable cause)`Constructs a new runtime exception with the specified cause and a detail message of {@code (cause==null ? |



  ### 方法概要

  | 限定符和类型             | 方法和说明                                                   |
  | :----------------------- | :----------------------------------------------------------- |
  | `int`                    | `getCode()`获取错误码                                        |
  | `Object`                 | `getContext()`获取携带的附加信息                             |
  | `static CustomException` | `of(String msg)`构建一个CustomException实例对象              |
  | `static CustomException` | `of(String msg, Object context)`构建一个CustomException实例对象 |
  | `CustomException`        | `setCode(int code)`设置错误码                                |
  | `CustomException`        | `setContext(Object context)`设置携带的附加信息               |

## 二 运行时异常 UncheckedException

### 字段概要

  | 限定符和类型       | 字段和说明              |
  | :----------------- | :---------------------- |
  | `protected int`    | `code`错误码            |
  | `protected Object` | `context`携带的副驾信息 |



  ### 构造器概要

  | 构造器和说明                                                 |
  | :----------------------------------------------------------- |
  | `UncheckedException()`Constructs a new runtime exception with `null` as its detail message. |
  | `UncheckedException(int code, String message)`Constructs a new runtime exception with the specified detail message. |
  | `UncheckedException(String message)`Constructs a new runtime exception with the specified detail message. |
  | `UncheckedException(String message, Throwable cause)`Constructs a new runtime exception with the specified detail message and cause. |
  | `UncheckedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace)`Constructs a new runtime exception with the specified detail message, cause, suppression enabled or disabled, and writable stack trace enabled or disabled. |
  | `UncheckedException(Throwable cause)`Constructs a new runtime exception with the specified cause and a detail message of {@code (cause==null ? |



  ### 方法概要

  | 限定符和类型                | 方法和说明                                                   |
  | :-------------------------- | :----------------------------------------------------------- |
  | `int`                       | `getCode()`获取错误码                                        |
  | `Object`                    | `getContext()`获取携带的附加信息                             |
  | `static UncheckedException` | `of(String msg)`构建一个UncheckedException实例对象           |
  | `static UncheckedException` | `of(String msg, Object context)`构建一个CustomException实例对象 |
  | `UncheckedException`        | `setCode(int code)`设置错误码                                |
  | `UncheckedException`        | `setContext(Object context)`设置携带的附加信息               |
