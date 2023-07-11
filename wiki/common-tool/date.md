---
sidebar_position: 5
title: 日期时间工具
description: 日期时间工具
keywords:
- 日期时间工具
tags:
- 通用工具
authors:
  - name: Joel Marcey

---

## 一 Date日期时间偏移工具

该工具的主要目的是计算距离当前日期、时间指定偏移量的时间点，该工具是一个线程安全类的工具，主要功能如下：

1. 获取今天的开始时间点(00:00:00)
2. 获取昨天的开始时间点(00:00:00)和结束时间点(23:59:59)
3. 获取前天的开始时间点(00:00:00)
4. 获取7天前的那个时间的开始时间点(00:00:00)
5. 获取14天前的那个时间的开始时间点(00:00:00)
6. 获取本周一的那个时间的开始时间点(00:00:00)
7. 获取上周一的那个时间的开始时间点(00:00:00)
8. 获取过去指定时间的那个时间的开始时间点(00:00:00)
9. 获取本月1号的那个时间的开始时间点(00:00:00)
10. 获取过去指定月份的那个月份的1号的开始时间点(00:00:00)
11. 获取过去指定年份的那个时间的1月1号的那个时间的开始时间点(00:00:00)

>  该工具是一个线程安全类的工具

| 限定符和类型  | 方法和说明                                                   |
| :------------ | :----------------------------------------------------------- |
| `static Date` | `dayEnd(long offsetDays)`获取过去指定天数的23时59分59秒 例如当前时间为2020-10-10 12:12:12 , offsetDays 为1 , 则返回时间为 2020-10-09 23:59:59 |
| `static Date` | `dayStart(long offsetDays)`获取过去指定天数的0时0分0秒 例如当前时间为2020-10-10 12:12:12 , offsetDays 为1 , 则返回时间为 2020-10-09 00:00:00 |
| `static Date` | `getDayEnd(Date dateTime)`获取一个输入日期的23:59:59 例如输入时间为2020-10-10 12:12:12 则返回时间为 2020-10-10 23:59:59 |
| `static Date` | `getDayStart(Date dateTime)`获取一个输入日期的0时0分0秒 例如输入时间为2020-10-10 12:12:12 则返回时间为 2020-10-10 00:00:00 |
| `static Date` | `getMonday(Date date)`获取给定时间所在那一周的周一 例如给定的时间为 2020-11-18 12:12:12 (周三)，则返回时间的时间为 2020-11-16 12:12:12(周一) |
| `static Date` | `getMondayStart(Date date)`获取给定时间所在那一周的周一的开始时间 例如给定的时间为 2020-11-18 12:12:12 (周三)，则返回时间的时间为 2020-11-16 00:00:00(周一) |
| `static Date` | `getMonthStart(Date dateTime)`获取一个输入日期的当月1号0时0分0秒 例如输入时间为2020-10-10 12:12:12 则返回时间为 2020-10-1 00:00:00 |
| `static Date` | `getYearStart(Date dateTime)`获取一个输入日期的当年1月1号0时0分0秒 例如输入时间为2020-10-10 12:12:12 则返回时间为 2020-1-1 00:00:00 |
| `static Date` | `last14DayStart()`获取14天前那一天0时0分0秒这个时间 例如当前时间为2020-10-15 12:12:12 则返回时间为 2020-10-01 00:00:00 |
| `static Date` | `last2DayStart()`获取前天0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-10-09 00:00:00 |
| `static Date` | `last2MondayStart()`获取上上周的周一的开始时间 例如给定的时间为 2020-11-18 12:12:12 (周三)，则返回时间的时间为 2020-11-02 00:00:00(周一) |
| `static Date` | `last2MonthStart()`获取上上个月前那一天0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-08-01 00:00:00 |
| `static Date` | `last7DayStart()`获取7天前那一天0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-10-03 00:00:00 |
| `static Date` | `lastMondayStart()`获取上周的周一的开始时间 例如给定的时间为 2020-11-18 12:12:12 (周三)，则返回时间的时间为 2020-11-09 00:00:00(周一) |
| `static Date` | `lastMonthStart()`获取上个月1号0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-09-01 00:00:00 |
| `static Date` | `mondayStart()`获取本周一周一的开始时间 例如当前时间为 2020-11-18 12:12:12 (周三)，则返回时间的时间为 2020-11-16 00:00:00(周一) |
| `static Date` | `mondayStart(int offsetWeeks)`获取上几周的周一的开始时间 例如给定的时间为 2020-11-18 12:12:12 (周三)，offsetWeeks 为1 ，则返回时间的时间为 2020-11-09 00:00:00(周一) |
| `static Date` | `monthStart()`获取本月1号0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 , 则返回时间为 2020-10-01 00:00:00 |
| `static Date` | `monthStart(long offset)`获取某个月之前的1号0时0分0秒这个时间 * 例如当前时间为2020-10-10 12:12:12 , offset 为1 , 则返回时间为 2020-09-01 00:00:00 |
| `static Date` | `todayStart()`获取今天0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-10-10 00:00:00 |
| `static Date` | `yesterdayEnd()`获取昨天23时59分59秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-10-09 23:59:59 |
| `static Date` | `yesterdayStart()`获取昨天0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-10-09 00:00:00 |

## 二 LocalDateTime日期时间偏移工具

基于LocalDateTime数据类型的日期时间偏移工具

该工具的主要目的是计算距离当前日期、时间指定偏移量的时间点，该工具是一个线程安全类的工具，主要功能如下：

1. 获取今天的开始时间点(00:00:00)
2. 获取昨天的开始时间点(00:00:00)和结束时间点(23:59:59)
3. 获取前天的开始时间点(00:00:00)
4. 获取7天前的那个时间的开始时间点(00:00:00)
5. 获取14天前的那个时间的开始时间点(00:00:00)
6. 获取本周一的那个时间的开始时间点(00:00:00)
7. 获取上周一的那个时间的开始时间点(00:00:00)
8. 获取过去指定时间的那个时间的开始时间点(00:00:00)
9. 获取本月1号的那个时间的开始时间点(00:00:00)
10. 获取过去指定月份的那个月份的1号的开始时间点(00:00:00)
11. 获取过去指定年份的那个时间的1月1号的那个时间的开始时间点(00:00:00)

>  该工具是一个线程安全类的工具

| 限定符和类型           | 方法和说明                                                   |
| :--------------------- | :----------------------------------------------------------- |
| `static LocalDateTime` | `dayEnd(long offsetDays)`获取过去指定天数的23时59分59秒 例如当前时间为2020-10-10 12:12:12 , offsetDays 为1 , 则返回时间为 2020-10-09 23:59:59 |
| `static LocalDateTime` | `dayStart(long offsetDays)`获取过去指定天数的0时0分0秒 例如当前时间为2020-10-10 12:12:12 , offsetDays 为1 , 则返回时间为 2020-10-09 00:00:00 |
| `static LocalDateTime` | `getDayEnd(LocalDateTime dateTime)`获取一个输入日期的23:59:59 例如输入时间为2020-10-10 12:12:12 则返回时间为 2020-10-10 23:59:59 |
| `static LocalDateTime` | `getDayStart(LocalDateTime dateTime)`获取一个输入日期的0时0分0秒 例如输入时间为2020-10-10 12:12:12 则返回时间为 2020-10-10 00:00:00 |
| `static LocalDateTime` | `getMonday(Date date)`获取给定时间所在那一周的周一 例如给定的时间为 2020-11-18 12:12:12 (周三)，则返回时间的时间为 2020-11-16 12:12:12(周一) |
| `static LocalDateTime` | `getMondayStart(Date date)`获取给定时间所在那一周的周一的开始时间 例如给定的时间为 2020-11-18 12:12:12 (周三)，则返回时间的时间为 2020-11-16 00:00:00(周一) |
| `static LocalDateTime` | `getMonthStart(LocalDateTime dateTime)`获取一个输入日期的当月1号0时0分0秒 例如输入时间为2020-10-10 12:12:12 则返回时间为 2020-10-1 00:00:00 |
| `static LocalDateTime` | `getYearStart(LocalDateTime dateTime)`获取一个输入日期的当年1月1号0时0分0秒 例如输入时间为2020-10-10 12:12:12 则返回时间为 2020-1-1 00:00:00 |
| `static LocalDateTime` | `last14DayStart()`获取14天前那一天0时0分0秒这个时间 例如当前时间为2020-10-15 12:12:12 则返回时间为 2020-10-01 00:00:00 |
| `static LocalDateTime` | `last2DayStart()`获取前天0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-10-09 00:00:00 |
| `static LocalDateTime` | `last2MondayStart()`获取上上周的周一的开始时间 例如给定的时间为 2020-11-18 12:12:12 (周三)，则返回时间的时间为 2020-11-02 00:00:00(周一) |
| `static LocalDateTime` | `last2MonthStart()`获取上上个月前那一天0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-08-01 00:00:00 |
| `static LocalDateTime` | `last7DayStart()`获取7天前那一天0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-10-03 00:00:00 |
| `static LocalDateTime` | `lastMondayStart()`获取上周的周一的开始时间 例如给定的时间为 2020-11-18 12:12:12 (周三)，则返回时间的时间为 2020-11-09 00:00:00(周一) |
| `static LocalDateTime` | `lastMonthStart()`获取上个月1号0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-09-01 00:00:00 |
| `static LocalDateTime` | `mondayStart()`获取本周一周一的开始时间 例如当前时间为 2020-11-18 12:12:12 (周三)，则返回时间的时间为 2020-11-16 00:00:00(周一) |
| `static LocalDateTime` | `mondayStart(int offsetWeeks)`获取上几周的周一的开始时间 例如给定的时间为 2020-11-18 12:12:12 (周三)，offsetWeeks 为1 ，则返回时间的时间为 2020-11-09 00:00:00(周一) |
| `static LocalDateTime` | `monthStart()`获取本月1号0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 , 则返回时间为 2020-10-01 00:00:00 |
| `static LocalDateTime` | `monthStart(long offset)`获取某个月之前的1号0时0分0秒这个时间 * 例如当前时间为2020-10-10 12:12:12 , offset 为1 , 则返回时间为 2020-09-01 00:00:00 |
| `static LocalDateTime` | `todayStart()`获取今天0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-10-10 00:00:00 |
| `static LocalDateTime` | `yesterdayEnd()`获取昨天23时59分59秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-10-09 23:59:59 |
| `static LocalDateTime` | `yesterdayStart()`获取昨天0时0分0秒这个时间 例如当前时间为2020-10-10 12:12:12 则返回时间为 2020-10-09 00:00:00 |

## 三 日期时间解析工具

该工具的主要作用是将LocalDateTime和Date形式的时间互相转换以及将字符串格式的时间和日期时间互相转换。该工具是一个线程安全类的工具，其主要的功能如下：

1. 将LocalDateTime和Date形式的时间互相转换
2. 将指定格式的字符串按解析为日期时间
3. 将日期时间按照指定的格式转换成字符串

> 该工具是一个线程安全类的工具

内置的全局常量字段如下

| 限定符和类型    | 字段和说明                                                   |
| :-------------- | :----------------------------------------------------------- |
| `static String` | `DEFAULT_DATE_FORMAT`默认的日期字符串形式 yyyy-MM-dd         |
| `static String` | `DEFAULT_DATETIME_FORMAT`默认的日期时间的字符串形式 yyyy-MM-dd HH:mm:ss形式 |
| `static String` | `DEFAULT_ZONE`默认的时区,上海                                |
| `static String` | `SIMPLE_DATETIME_FORMAT`默认的日期时间的字符串形式 yyyy-MM-dd HH:mm |

包含的方法如下

| 限定符和类型           | 方法和说明                                                   |
| :--------------------- | :----------------------------------------------------------- |
| `static LocalDateTime` | `date2LocalDateTime(Date date)`将Date转换为 LocalDateTime    |
| `static String`        | `format(Date date)`将Date形式的时间格式化为yyyy-MM-dd HH:mm:ss格式的字符串 |
| `static String`        | `format(Date date, String pattern)`将Date形式的时间格式化为 格式化为指定形式的字符串 |
| `static String`        | `format(LocalDateTime localDateTime)`将LocalDateTime形式的时间格式化为yyyy-MM-dd HH:mm:ss格式的字符串 |
| `static String`        | `format(LocalDateTime localDateTime, String pattern)`将LocalDateTime形式的时间格式化为 格式化为指定形式的字符串 |
| `static String`        | `format(long currentTimeMillis, String pattern)`将Date形式的时间格式化为 格式化为指定形式的字符串 |
| `static String`        | `formatDate(Date date)`将Date形式的时间格式化为yyyy-MM-dd格式的字符串 |
| `static String`        | `formatDate(LocalDateTime localDateTime)`将Date形式的时间格式化为yyyy-MM-dd格式的字符串 |
| `static String`        | `formatDate(long currentTimeMillis)`将时间戳形式的时间格式化为yyyy-MM-dd HH:mm:ss格式的字符串 |
| `static LocalDateTime` | `getLocalDateTime(long milliseconds)`使用从1970-01-01T00：00：00Z的时代开始的毫秒 数获得一个LocalDateTime的实例。 |
| `static Long`          | `getTime(Date date)`返回自1970年1月1日以来，由此 Date对象表示的00:00:00 GMT的毫秒 数 。 |
| `static Long`          | `getTime(LocalDateTime localDateTime)`返回自1970年1月1日以来，由此LocalDateTime对应的 Date对象表示的00:00:00 GMT的毫秒 数 。 |
| `static Date`          | `localDateTime2Date(LocalDateTime localDateTime)`将LocalDateTime转换为 Date |
| `static LocalDateTime` | `parse(String timeStr)`将字符串解析为LocalDateTime 形式的时间 默认采用yyyy-MM-dd HH:mm:ss 或 yyyy-MM-dd HH:mm 或 yyyy-MM-dd 形式解析 |
| `static LocalDateTime` | `parse(String timeStr, String... patterns)`将字符串解析为LocalDateTime 形式的时间 |
| `static ZoneId`        | `zoneIdOfChina()`获取北京时间的ZoneId                        |
