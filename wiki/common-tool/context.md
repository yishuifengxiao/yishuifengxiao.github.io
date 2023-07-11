---
sidebar_position: 4
title: 上下文工具
description: 上下文工具
keywords:
- 上下文工具
tags:
- 通用工具
authors:
  - name: Joel Marcey

---

## 一 全局缓存工具

该工具主要是一个基于内存的KV键值对存储工具。

> 该工具是一个线程安全类的工具

| 限定符和类型         | 方法和说明                                                   |
| :------------------- | :----------------------------------------------------------- |
| `static void`        | `clear()`清空所有存储的数据                                  |
| `static <T> T`       | `get(Class<T> clazz)`根据数据的key获取数据 此方式下默认key为`clazz.getName()` |
| `static Object`      | `get(String key)`根据数据的key获取数据                       |
| `static <T> T`       | `get(String key, Class<T> clazz)`根据数据的key获取数据       |
| `static <T> T`       | `get(String key, Supplier<T> supplier)`                      |
| `static <T> T`       | `getAndRemove(Class<T> clazz)`根据数据的key获取数据，若成功获取到此数据则从缓存中删除此数据 此方式下默认key为`clazz.getName()` |
| `static Object`      | `getAndRemove(String key)`根据数据的key获取数据，若成功获取到此数据则从缓存中删除此数据 |
| `static <T> T`       | `getAndRemove(String key, Class<T> clazz)`根据数据的key获取数据，若成功获取到此数据则从缓存中删除此数据 |
| `static Set<String>` | `keys()`获取所有存储的数据的key                              |
| `static boolean`     | `keys(String key)`所有存储的数据的key中是否包含指定的key     |
| `static void`        | `put(Object value)`存储一个数据 存储的时的key值默认为`value.getClass().getName()` |
| `static void`        | `put(String key, Object value)`存储一个数据                  |
| `static <T> void`    | `remove(Class<T> clazz)`移除存储的数据 此方式下默认key为`clazz.getName()` |
| `static void`        | `remove(String key)`移除存储的数据                           |
