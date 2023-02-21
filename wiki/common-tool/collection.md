---
sidebar_position: 3
title: 集合工具
description: 集合工具
keywords:
- 集合工具
tags:
- 通用工具
authors:
  - name: Joel Marcey

---

## 一 数组工具

主要功能如下：

- 获取两个集合之间的交集
- 获取两个集合之间的并集
- 获取两个集合之间的差集

> 该工具是一个线程安全类的工具

| 限定符和类型               | 方法和说明                                                   |
| :------------------------- | :----------------------------------------------------------- |
| `static <T> Collection<T>` | `difference(Collection<T> src, Collection<T> target, BiPredicate<? super T,? super T> predicate)`获取两个集合的差集 |
| `static <T> Collection<T>` | `difference(T[] src, T[] target, BiPredicate<? super T,? super T> predicate)`获取两个集合的差集 |
| `static <T> Collection<T>` | `intersection(Collection<T> src, Collection<T> target, BiPredicate<? super T,? super T> predicate)`获取两个集合的交集 |
| `static <T> Collection<T>` | `intersection(T[] src, T[] target, BiPredicate<? super T,? super T> predicate)`获取两个集合的交集 |
| `static <T> Collection<T>` | `union(Collection<T> src, Collection<T> target, BiPredicate<? super T,? super T> predicate)`获取两个集合的并集 |
| `static <T> Collection<T>` | `union(T[] src, T[] target, BiPredicate<? super T,? super T> predicate)`获取两个集合的并集 |

## 二 数据工具

该工具的主要目标是在不发生NPE的前提下对集合以及集合里的元素进行操作，其具备以下的几项功能

1. 将集合转换成java8中的串行流或并行流
2. 将数组转换成List或Set，而从避免Arrays.asList()转换后存在的问题
3. 安全地获取集合里的第一个元素

> 该工具是一个线程安全类的工具

| 限定符和类型           | 方法和说明                                                   |
| :--------------------- | :----------------------------------------------------------- |
| `static <T> List<T>`   | `asList(T... a)`将指定的数据转换成list                       |
| `static <T> Set<T>`    | `asSet(T... a)`将指定的数据转换成Set                         |
| `static <T> T`         | `first(Collection<T> data)`取出集合里的第一个元素，若集合为空则返回为null |
| `static <T> T`         | `first(Collection<T> data, String errorMsg)`取出集合的第一个元素，若集合为空则抛出异常 |
| `static <T> T`         | `first(Collection<T> data, T defaultValue)`取出集合的第一个元素, 若集合为空则返回给定的缺省值 |
| `static <T> T`         | `first(Stream<T> data)`取出Stream中的第一个非空元素,如果Stream为空则返回null |
| `static <T> T`         | `first(Stream<T> data, T defaultValue)`取出Stream中的第一个非空元素,如果Stream为空则返回 缺省值 |
| `static <T> T`         | `first(T[] data)`取出数组的第一个元素, 若数组为空则返回null  |
| `static <T> T`         | `first(T[] data, String errorMsg)`取出数组的第一个元素，若数组为空则抛出异常 |
| `static <T> T`         | `first(T[] data, T defaultValue)`取出数组的第一个元素, 若数组为空则返回给定的缺省值 |
| `static <T> T`         | `get(List<T> data, int index)`获取链表里的第index个元素      |
| `static <T> T`         | `get(T[] data, int index)`获取数组里的第index个元素          |
| `static List<Integer>` | `intList(int end)`生成一个从0开始到指定数值的链表            |
| `static List<Integer>` | `intList(int start, int end)`生成一个从开始数值到结束数值的链表 |
| `static <T> T`         | `last(List<T> data)`取出List中的最后一个非空元素,如果Stream为空则返回null |
| `static <T> T`         | `last(Stream<T> data)`取出Stream中的最后一个非空元素,如果Stream为空则返回null |
| `static <T> List<T>`   | `merge(List<T>... list)`将多个链表合并成一个链表             |
| `static <T> Set<T>`    | `merge(Set<T>... sets)`将多个Set合并成一个Set                |
| `static <T> Stream<T>` | `parallelStream(Collection<T> data)`将数据安全地转换成并行流Stream |
| `static <T> Stream<T>` | `parallelStream(Collection<T> data, String msg)`将数据安全地转换成并行流Stream,并检查输入的数据，若输入的数据源为空就抛出异常 |
| `static <T> Stream<T>` | `parallelStream(T[] data)`将数据安全地转换成并行流Stream     |
| `static <T> Stream<T>` | `parallelStream(T[] data, String msg)`将数据安全地转换成并行流Stream,并检查输入的数据，若输入的数据源为空就抛出异常 |
| `static <T> Stream<T>` | `stream(Collection<T> data)`将数据安全地转换成串行流Stream   |
| `static <T> Stream<T>` | `stream(Collection<T> data, String msg)`将数据安全地转换成串行流Stream,并检查输入的数据，若输入的数据源为空就抛出异常 |
| `static <T> Stream<T>` | `stream(T[] data)`将数据安全地转换成串行流Stream             |
| `static <T> Stream<T>` | `stream(T[] data, String msg)`将数据安全地转换成串行流Stream,并检查输入的数据，若输入的数据源为空就抛出异常 |
| `static <T> List<T>`   | `toList(T[] objs)`将数组转换成List                           |
| `static <T> Set<T>`    | `toSet(T[] objs)`将数组转换成Set                             |

## 三 json转换提取工具

注意这里内部使用的fastjson,故进行数据转换时需要按照fastjson的规范进行标记

> 该工具是一个线程安全类的工具

JSONPath语法元素和对应XPath元素的对比语法如下：

| **XPath** | **JSONPath**     | **Description**                                              |
| --------- | ---------------- | ------------------------------------------------------------ |
| /         | $                | 表示根元素                                                   |
| .         | @                | 当前元素                                                     |
| /         | . or []          | 子元素                                                       |
| ..        | n/a              | 父元素                                                       |
| //        | ..               | 递归下降，JSONPath是从E4X借鉴的。                            |
| *         | *                | 通配符，表示所有的元素                                       |
| @         | n/a              | 属性访问字符                                                 |
| []        | []               | 子元素操作符                                                 |
| \|        | [,]              | 连接操作符在XPath 结果合并其它结点集合。JSONP允许name或者数组索引。 |
| n/a       | [start:end:step] | 数组分割操作从ES4借鉴。                                      |
| []        | ?()              | 应用过滤表示式                                               |
| n/a       | ()               | 脚本表达式，使用在脚本引擎下面。                             |
| ()        | n/a              | Xpath分组                                                    |

注意点如下：

- []在xpath表达式总是从前面的路径来操作数组，索引是从1开始。
- 使用JOSNPath的[]操作符操作一个对象或者数组，索引是从0开始。

语法示例如下

| **XPath**              | **JSONPath**                | **结果**                               |
| ---------------------- | --------------------------- | -------------------------------------- |
| `/store/book/author`   | `$.store.book[*].author`    | 所有书的作者                           |
| `//author`             | `$..author`                 | 所有的作者                             |
| `/store/*`             | `$.store.*`                 | store的所有元素。所有的bookst和bicycle |
| `/store//price`        | `$.store..price`            | store里面所有东西的price               |
| `//book[3]`            | `$..book[2]`                | 第三个书                               |
| `//book[last()]`       | `$..book[(@.length-1)]`     | 最后一本书                             |
| `//book[position()<3]` | `$..book[0,1]``$..book[:2]` | 前面的两本书。                         |
| `//book[isbn]`         | `$..book[?(@.isbn)]`        | 过滤出所有的包含isbn的书。             |
| `//book[price<10]`     | `$..book[?(@.price<10)]`    | 过滤出价格低于10的书。                 |
| `//*`                  | `$..*`                      | 所有元素。                             |



| `static <T> T`                           | `extract(String json, String jsonPath)`根据json提取表达式从字符串里提取出内容 |
| ---------------------------------------- | ------------------------------------------------------------ |
| `static <T> T`                           | `extract(String json, String jsonPath, Class<T> clazz)`根据json提取表达式从字符串里提取出内容,并将提取的内容转换为JAVA对象 |
| `static com.alibaba.fastjson.JSONObject` | `extractJSON(String json, String jsonPath)`根据json提取表达式从字符串里提取出内容,并将提取的内容转换为JSONObject对象 |
| `static <T> List<T>`                     | `extractList(String json, String jsonPath, Class<T> clazz)`根据json提取表达式从字符串里提取出内容,并将提取的内容转换为JAVA对象集合 |
| `static boolean`                         | `isJSONArray(String text)`判断字符串是否为json数组格式       |
| `static boolean`                         | `isJSONObject(String text)`判断字符串是否为json对象格式      |
| `static Map<String,Object>`              | `json2Map(String text)`将json格式的字符串转换为map对象       |
| `static <T> T`                           | `str2Bean(String json, Class<T> clazz)`将json格式的字符串转为JAVA对象 |
| `static com.alibaba.fastjson.JSONArray`  | `str2JSONArray(String jsonStr)`将json格式的字符串转换为json数组 |
| `static com.alibaba.fastjson.JSONObject` | `str2JSONObject(String jsonStr)`将json格式的字符串转换为json对象 |
| `static <T> List<T>`                     | `str2List(String json, Class<T> clazz)`将json格式的字符串转换为对象集合 |
| `static com.alibaba.fastjson.JSONObject` | `toJSON(Object data)`将java对象转换成json对象                |

## 四 map生成工具

该工具的主要目的是采用链式接口快速生成一个map对象

> 该工具是一个线程安全类的工具

| `<K1 extends K,V1 extends V>Map` | `build()`输出最终需要的map数据                               |
| -------------------------------- | ------------------------------------------------------------ |
| `static MapUtil`                 | `map()`获取一个map工具类实例                                 |
| `MapUtil<K,V>`                   | `put(K key, V value)`增加一个键值对数据 如果增加的键值对的键为空，则不会增加该条记录 |
| `MapUtil<K,V>`                   | `putAll(Map<K,V> map)`批量添加一组键值对                     |

使用实例如下:

```java
        Map map = MapUtil.map()
                .put("key1", "value1")
                .put("key2", "value2")
                .put("key3", "value3")
                .build();
        System.out.println(map);
```

## 五 元素长度判断工具

该工具的主要目标是快速地判断集合是否为空，其具备以下的几项功能

1. 判断集合是否为空或者空元素的集合
2. 判断集合是否仅有一个元素

| 限定符和类型         | 方法和说明                                                   |
| :------------------- | :----------------------------------------------------------- |
| `static <T> boolean` | `gteOneElement(Collection<T> data)`判断集合里的元素的数量是否大于或等于一个 |
| `static <T> boolean` | `gtOneElement(Collection<T> data)`判断集合里元素数量是否大于一个 |
| `static boolean`     | `isAllEmpty(Collection... collections)`是否全部为空集合或null |
| `static boolean`     | `isAnyEmpty(Collection... collections)`是否有一个集合为空或null |
| `static <T> boolean` | `isEmpty(Collection<T> data)`判断集合是否为空                |
| `static <T> boolean` | `isEmpty(Page<T> page)`判断分页对象是否为空                  |
| `static <T> boolean` | `isEmpty(org.springframework.data.domain.Page<T> page)`判断分页对象是否为空 |
| `static <T> boolean` | `isEmpty(T[] data)`判断数组是否为空                          |
| `static boolean`     | `isNoneEmpty(Collection... collections)`是否所有的集合均不为空或者null |
| `static <T> boolean` | `isNotEmpty(Collection<T> data)`判断集合是否不为空           |
| `static <T> boolean` | `isNotEmpty(Page<T> page)`判断分页对象是否不为空             |
| `static <T> boolean` | `isNotEmpty(org.springframework.data.domain.Page<T> page)`判断分页对象是否不为空 |
| `static <T> boolean` | `isNotEmpty(T[] data)`判断数组是否不为空                     |
| `static <T> boolean` | `isOnlyOneElement(Collection<T> data)`判断 集合是否只有一个元素 |
| `static <T> boolean` | `lteOneElement(Collection<T> data)`判断集合里元素数量是否小于或等于一个 **注意：若集合为null则依旧返回为true** |
| `static <T> boolean` | `ltOneElement(Collection<T> data)`判断集合里元素数量是否小于一个 **注意：若集合为null则依旧返回为true** |
| `static <T> long`    | `size(Collection<T> data)`获取集合里的元素的数量             |
| `static <T> long`    | `size(T[] data)`获取数组里的元素的数量                       |

## 六 数据流工具

该工具的主功能如下：

-  根据条件从集合里提取出任意一个元素
- 根据条件从集合里移除指定的元素
- 根据条件从集合里替换指定的元素

> 该工具是一个线程安全类的工具

| 限定符和类型         | 方法和说明                                                   |
| :------------------- | :----------------------------------------------------------- |
| `static <T> List<T>` | `addIfNoPresent(List<T> list, T t, Predicate<? super T> predicate)`先判断集合中是否存在此元素，若不存在则添加，存在该元素则跳过 |
| `static <T> boolean` | `contain(List<T> list, Predicate<? super T> predicate)`判断集合中是否存在符合指定条件的元素 |
| `static <T> boolean` | `contain(Set<T> set, Predicate<? super T> predicate)`判断集合中是否存在符合指定条件的元素 |
| `static <T> T`       | `findAny(List<T> list, Predicate<? super T> predicate)`从List获取一个符合条件的非空数据 **注意：会排除掉null数据** |
| `static <T> T`       | `findAny(Set<T> set, Predicate<? super T> predicate)`从Set获取一个符合条件的非空数据 **注意：会排除掉null数据** |
| `static <T> T`       | `findAny(Stream<T> stream, Predicate<? super T> predicate)`从数据流获取一个符合条件的非空数据 **注意：会排除掉null数据** |
| `static <T> List<T>` | `remove(List<T> list, Predicate<? super T> predicate)`在集合中根据条件删除一个元素 **注意：会排除掉null数据** |
| `static <T> Set<T>`  | `remove(Set<T> set, Predicate<? super T> predicate)`在集合中根据条件删除一个元素 **注意：会排除掉null数据** |
| `static <T> List<T>` | `replace(List<T> list, T t, Predicate<? super T> predicate)`在集合中替换并添加一个元素 |
| `static <T> Set<T>`  | `replace(Set<T> set, T t, Predicate<? super T> predicate)`在集合中替换并添加一个元素 |

