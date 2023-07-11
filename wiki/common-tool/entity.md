---
sidebar_position: 7
title: 通用实体
description: 通用实体
keywords:
- 通用实体
tags:
- 通用工具
authors:
  - name: Joel Marcey

---

## 一 基础分页查询参数 BaseQuery

 | 限定符和类型        | 字段和说明                         |
  | :------------------ | :--------------------------------- |
  | `static int`        | `DEFAULT_PAGE_NUM`默认的当前页页码1 |
  | `static int`        | `DEFAULT_PAGE_SIZE`默认的分页大小10  |
  | `protected Integer` | `pageNum`当前页页码                |
  | `protected Integer` | `pageSize`分页大小                 |



 构造器概要

  | 构造器和说明                                               |
  | :--------------------------------------------------------- |
  | `BaseQuery()`无参构造函数                                  |
  | `BaseQuery(Integer pageSize, Integer pageNum)`全参构造函数 |

方法概要

  | 限定符和类型 | 方法和说明                                  |
  | :----------- | :------------------------------------------ |
  | `boolean`    | `equals(Object obj)`                        |
  | `Integer`    | `getPageNum()`获取当前页页码                |
  | `Integer`    | `getPageSize()`获取分页大小                 |
  | `int`        | `hashCode()`                                |
  | `int`        | `pageNum()`获取当前页页码(从1开始计数)      |
  | `int`        | `pageSize()`获取分页分大小                  |
  | `void`       | `setPageNum(Integer pageNum)`设置当前页页码 |
  | `void`       | `setPageSize(Integer pageSize)`设置分页发小 |
  | `String`     | `toString()`                                |

## 二 键值对数据 KeyPair

构造器概要

  | 构造器和说明                        |
  | :---------------------------------- |
  | `KeyPair()`无参构造函数             |
  | `KeyPair(K key, V val)`全参构造函数 |

方法概要

  | 限定符和类型   | 方法和说明                               |
  | :------------- | :--------------------------------------- |
  | `K`            | `getKey()`获取键值对数据的key            |
  | `V`            | `getVal()`获取键值对数据的值             |
  | `boolean`      | `isNull()`判断该实例的键和值是否均为null |
  | `boolean`      | `notNull()`判断该实例的键和值均不为null  |
  | `boolean`      | `nullKey()`判断该实例的键是否为null      |
  | `boolean`      | `nullVal()`判断该实例的值是否为null      |
  | `KeyPair<K,V>` | `setKey(K key)`设置键值对数据的key       |
  | `KeyPair<K,V>` | `setVal(V val)`设置键值对数据的值        |



## 三 通用分页对象 Page

 | 限定符和类型        | 字段和说明                            |
  | :------------------ | :------------------------------------ |
  | `protected List<S>` | `data`当前分页里的数据                |
  | `static int`        | `DEFAULT_PAGE_NUM`默认的当前页的页码  |
  | `static int`        | `DEFAULT_PAGE_SIZE`默认的最小页的页码 |
  | `protected Integer` | `pageNum`当前页页码(从1开始)          |
  | `protected Long`    | `pages`总的分页数                     |
  | `protected Integer` | `pageSize`分页大小                    |
  | `protected Long`    | `total`总的记录数                     |

 构造器概要

  | 构造器和说明                                                 |
  | :----------------------------------------------------------- |
  | `Page()`无参构造函数                                         |
  | `Page(List<S> data, long total, long pages, int pageSize, int pageNum)`全参构造函数 |

 方法概要

  | 限定符和类型           | 方法和说明                                                   |
  | :--------------------- | :----------------------------------------------------------- |
  | `List<S>`              | `getData()`获取当前页里包含的数据                            |
  | `Integer`              | `getPageNum()`获取当前页页码                                 |
  | `Long`                 | `getPages()`获取分页的数量                                   |
  | `Integer`              | `getPageSize()`获取分页大小                                  |
  | `Long`                 | `getTotal()`获取总的记录的数量                               |
  | `<T> Page<T>`          | `map(Page.PageConverter<S,T> converter)`将一种类型数据的分页对象转换成另一种数据类型的分页对象 |
  | `static <S> Page<S>`   | `of(List<S> data, long total, int pageSize, int pageNum)`生成分页对象 |
  | `static <S,U> Page<S>` | `of(Page<U> source, List<S> data)`根据分页信息来源对象生成分页对象 |
  | `static <S> Page<S>`   | `ofEmpty()`构造一个空的分页对象 该分页对象的属性为: 分页大小:0 当前页页码:1 总的分页数:0 记录总数:0 |
  | `static <S> Page<S>`   | `ofEmpty(int pageSize)`构造一个空的分页对象 该分页对象的属性为: 分页大小:输入的pageSize的值 当前页页码:1 总的分页数:0 记录总数:0 |
  | `static Number`        | `page(Number total, Number size)`计算分页大小                |
  | `Page<S>`              | `setData(List<S> data)`设置当前页里包含的数据                |
  | `Page<S>`              | `setPageNum(int pageNum)`设置当前页页码                      |
  | `Page<S>`              | `setPages(long pages)`设置分页的数量                         |
  | `Page<S>`              | `setPageSize(int pageSize)`设置分页大小                      |
  | `Page<S>`              | `setTotal(long total)`设置总的总的记录的数量                 |
  | `static <S> Page<S>`   | `toPage(List<S> data)`根据数据构造当前页为1，分页大小为数据大小的分页对象 该分页对象的属性为: 分页大小:data.size() 当前页页码:1 总的分页数:1 记录总数:data.size() |
  | `static <S> Page<S>`   | `toPage(List<S> list, int pageSize, int pageNum)`从总的数据中根据分页参数获取一个分页对象 |
  | `String`               | `toString()`                                                 |

## 四 通用响应对象Response

该工具主要是用于对系统的的响应进行一个形式上的统一， 以便各个接口返回的响应的形式保持一致。在初步设计时主要是借助HttpStatus作为状态标识 （HttpStatus具体的响应值的信息可以参见 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status） 。

简单地说，当code的值为200时表示系统成功处理了用户的请求，当code的值为401时表示用户无权访问请求的资源， 当code的值为500时表示系统成功接收到了用户的请求，但是未能按照用户的意图进行业务处理。。。。。

在某些情况下，如果系统内置的响应码不符合已进行的业务的需求但是又需要统一响应格式时可以自定义响应码等信息

### 字段概要

  | 限定符和类型       | 字段和说明                                                   |
  | :----------------- | :----------------------------------------------------------- |
  | `protected int`    | `code`请求的响应吗,这里借用HttpStatus作为状态标识 具体的响应值的信息可以参见 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status |
  | `protected T`      | `data`响应数据，在基本基本信息无法满足时会出现此信息,一般情况下无此信息 |
  | `protected Date`   | `date`响应时间                                               |
  | `protected String` | `id`请求ID,用于请求追踪 .无论调用接口成功与否,都会返回请求 ID,该序列号全局唯一且随机 |
  | `protected String` | `msg`响应提示信息,一般与响应码的状态对应,对响应结果进行简单地描述 |

###  构造器概要

  | 构造器和说明                                                 |
  | :----------------------------------------------------------- |
  | `Response()`默认的构造函数                                   |
  | `Response(int code, String msg)`构造函数                     |
  | `Response(int code, String msg, T data)`构造函数             |
  | `Response(String id, int code, String msg, T data, Date date)`全参构造函数 |

###  方法概要

  | 限定符和类型              | 方法和说明                                                   |
  | :------------------------ | :----------------------------------------------------------- |
  | `static Response<Object>` | `badParam()`生成一个默认的表示参数有误的响应对象(响应码400)  |
  | `static Response<Object>` | `badParam(String msg)`根据响应提示信息生成一个表示参数有误的响应对象(响应码400) |
  | `static <T> Response<T>`  | `badParam(String msg, T data)`根据响应提示信息和响应数据生成一个表示参数有误的响应对象(响应码400) |
  | `Response<T>`             | `data(T data)`设置响应数据                                   |
  | `boolean`                 | `equals(Object obj)`                                         |
  | `static Response<Object>` | `error()`生成一个默认表示请求业务未完成的响应对象(500响应码) |
  | `static Response<Object>` | `error(String msg)`根据响应提示信息生成一个表示服务器内部异常500时的返回信息 |
  | `static <T> Response<T>`  | `error(String msg, T data)`根据响应提示信息和响应数据生成表示服务器内部异常500时的返回信息 |
  | `static <T> Response<T>`  | `error(T data)`根据响应数据生成表示服务器内部异常500时的返回信息 |
  | `static <T> Response<T>`  | `errorData(T data)`生成一个默认表示请求业务未完成的响应对象(500响应码) |
  | `int`                     | `getCode()`获取响应码                                        |
  | `T`                       | `getData()`获取响应数据                                      |
  | `Date`                    | `getDate()`获取响应的时间                                    |
  | `String`                  | `getId()`获取请求ID                                          |
  | `String`                  | `getMsg()`获取响应提示信息                                   |
  | `int`                     | `hashCode()`                                                 |
  | `Response<T>`             | `msg(String msg)`设置响应提示信息                            |
  | `static Response<Object>` | `notAllow()`生成一个默认的表示资源不可用的响应对象(403响应码) |
  | `static Response<Object>` | `notAllow(String msg)`根据响应提示信息生成表示资源不可用的响应对象(403响应码) |
  | `static Response<Object>` | `notFoundt()`生成一个默认的表示资源不存在的响应对象(404响应码) |
  | `static <T> Response<T>`  | `of(int code, String msg, T data)`构建一个通用的响应对象     |
  | `Response<T>`             | `setCode(int code)`设置响应码                                |
  | `Response<T>`             | `setData(T data)`设置响应数据                                |
  | `Response<T>`             | `setDate(Date date)`设置响应的时间                           |
  | `Response<T>`             | `setId(String id)`设置请求ID                                 |
  | `Response<T>`             | `setMsg(String msg)`设置响应提示信息                         |
  | `static Response<Object>` | `suc()`生成一个默认的一个表示成功的响应对象                  |
  | `static Response<Object>` | `suc(String msg)`根据响应提示信息生成一个表示成功的响应对象  |
  | `static <T> Response<T>`  | `suc(String msg, T data)`根据响应提示信息和响应数据生成一个表示成功的响应对象 |
  | `static <T> Response<T>`  | `suc(T data)`根据响应数据生成一个表示成功的响应对象          |
  | `static <T> Response<T>`  | `sucData(T data)`根据响应提示信息生成一个表示成功的响应对象  |
  | `String`                  | `toString()`                                                 |
  | `static Response<Object>` | `unAuth()`生成一个默认的表示资源未授权的响应对象(401响应码)  |
  | `static Response<Object>` | `unAuth(String msg)`根据响应提示信息生成一个表示资源未授权的响应对象(401响应码) |
  | `static <T> Response<T>`  | `unAuth(String msg, T data)`根据响应提示信息和响应数据生成一个表示资源未授权的响应对象(401响应码) |

## 五 枚举替换对象 BoolStat

布尔类型替代枚举

用于替换`Boolean`的使用，方便在灵活业务场景下进行功能扩展

在简明意义上的对应关系如下

- 数字1 ======= 布尔true
- 数字0 ======= 布尔false
- 数字-1 ======= 布尔null

### 枚举常量概要

  | 枚举常量和说明                           |
  | :--------------------------------------- |
  | `False`类似Boolean中的false值，对应编码0 |
  | `Null`类似Boolean中的null值，对应编码-1  |
  | `True`类似Boolean中的true值，对应编码1   |

  ### 方法概要

  | 限定符和类型        | 方法和说明                                                   |
  | :------------------ | :----------------------------------------------------------- |
  | `static Number`     | `bool2Int(BoolStat bool, Number trueVal, Number falseVal)`将状态值转换成数字 |
  | `int`               | `code()`获取枚举值对应的编码                                 |
  | `boolean`           | `isFalse()`枚举状态值是否对应的布尔值false                   |
  | `static boolean`    | `isFalse(BoolStat stat)`是否为false值                        |
  | `static boolean`    | `isFalse(Integer code)`是否为false值对应的编码               |
  | `boolean`           | `isNotFalse()`枚举状态值是否不对应的布尔值false              |
  | `static boolean`    | `isNotFalse(BoolStat stat)`是否为false值                     |
  | `boolean`           | `isNotTrue()`枚举状态值是否不对应的布尔值true                |
  | `static boolean`    | `isNotTrue(BoolStat stat)`是否不为true值                     |
  | `boolean`           | `isTrue()`枚举状态值是否对应的布尔值true                     |
  | `static boolean`    | `isTrue(BoolStat stat)`是否为true值                          |
  | `static boolean`    | `isTrue(Integer code)`是否为true值对应的编码                 |
  | `static BoolStat`   | `of(Boolean bool)`将布尔值值转换为枚举值 转换规则如下 bool为false时转换为枚举值False bool为true时转换为枚举值True bool为其他值时转换为枚举值Null |
  | `static BoolStat`   | `of(Number number)`将数字转换为布尔值 转换规则如下： 数据大于0时返回为True 数据小于或等于0时返回为False 其他值时返回为null |
  | `static BoolStat`   | `parse(Object value)`将数据转换为布尔类型替代枚举 转换规则如下 当内容为文本 true(忽略大小写和空格)时返回为枚举值True 当内容为文本 false(忽略大小写和空格)时返回为枚举值False 文本可以转换为数字，且数字大于0时返回为枚举值True 文本可以转换为数字，且数字小于0或等于时返回为枚举值False 其他情况下返回为枚举值NUll |
  | `static BoolStat`   | `tristate(Number number)`将数字转换为布尔值 转换规则如下： 数据大于0时返回为True 数据等于0时返回为False 其他值时返回为False |
  | `static BoolStat`   | `twoState(Number number)`将数字转换为布尔值 转换规则如下： 数据大于0时返回为True 其他值时返回为False |
  | `static BoolStat`   | `valueOf(String name)`返回带有指定名称的该类型的枚举常量。   |
  | `static BoolStat[]` | `values()`按照声明该枚举类型的常量的顺序, 返回 包含这些常量的数组。 |
