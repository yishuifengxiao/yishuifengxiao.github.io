---
sidebar_position: 5
title: spring data jdbc
---

## 快速启动

例如操作数据库时再也不需要编写简单的CURD的操作代码，只需要在项目中加入以下代码即可操作数据库了：

```java
    @Autowired
    private JdbcHelper jdbcHelper;
```

也可以使用静态工具类`JdbcUtil `对数据进行操作，`JdbcUtil `与`JdbcHelper`的接口完全一致，核心API如下

```java
/**
 * 根据主键从指定表查询一条数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param primaryKey 主键
 * @return 查询到的数据
 */
<T> T findByPrimaryKey(Class<T> clazz, Object primaryKey);

/**
 * 查询符合条件的记录的数量
 * 
 * @param <T> POJO类
 * @param t   查询条件
 * @return 符合条件的记录的数量
 */
<T> Long countAll(T t);

/**
 * 查询符合条件的记录的数量
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param conditions 筛选条件
 * @return 符合条件的记录的数量
 */
<T> Long countAll(Class<T> clazz, Condition... conditions);

/**
 * 查询符合条件的记录的数量
 * 
 * @param <T>     POJO类
 * @param clazz   POJO类
 * @param example 筛选条件
 * @return 符合条件的记录的数量
 */
<T> Long countAll(Class<T> clazz, Example example);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T> POJO类
 * @param t   查询条件
 * @return 符合条件的数据
 */
<T> T findOne(T t);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param conditions 筛选条件
 * @return 符合条件的数据
 */
<T> T findOne(Class<T> clazz, Condition... conditions);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T>     POJO类
 * @param clazz   POJO类
 * @param example 筛选条件
 * @return 符合条件的数据
 */
<T> T findOne(Class<T> clazz, Example example);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param conditions 筛选条件
 * @return 符合条件的数据
 */
<T> T findOne(Class<T> clazz, List<Condition> conditions);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T> POJO类
 * @param t   查询条件
 * @return 符合条件的数据
 */
<T> List<T> findAll(T t);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T>   POJO类
 * @param t     查询条件
 * @param order 排序条件
 * @return 符合条件的数据
 */
<T> List<T> findAll(T t, Order order);

/**
 * 查询所有符合条件的数据（默认升序）
 * 
 * @param <T>       POJO类
 * @param t         查询条件
 * @param orderName 排序字段，必须为对应的POJO属性的名字
 * @return 符合条件的数据
 */
<T> List<T> findAll(T t, String orderName);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T>       POJO类
 * @param t         查询条件
 * @param orderName 排序字段，必须为对应的POJO属性的名字
 * @param direction 排序方向
 * @return 符合条件的数据
 */
<T> List<T> findAll(T t, String orderName, Order.Direction direction);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param conditions 筛选条件
 * @return 符合条件的数据
 */
<T> List<T> findAll(Class<T> clazz, Condition... conditions);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T>     POJO类
 * @param clazz   POJO类
 * @param example 筛选条件
 * @return 符合条件的数据
 */
<T> List<T> findAll(Class<T> clazz, Example example);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param conditions 筛选条件
 * @return 符合条件的数据
 */
<T> List<T> findAll(Class<T> clazz, List<Condition> conditions);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param order      排序条件
 * @param conditions 筛选条件
 * 
 * @return 符合条件的数据
 */
<T> List<T> findAll(Class<T> clazz, Order order, Condition... conditions);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T>     POJO类
 * @param clazz   POJO类
 * @param order   排序条件
 * @param example 筛选条件
 * 
 * @return 符合条件的数据
 */
<T> List<T> findAll(Class<T> clazz, Order order, Example example);

/**
 * 查询所有符合条件的数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param order      排序条件
 * @param conditions 筛选条件
 * 
 * @return 符合条件的数据
 */
<T> List<T> findAll(Class<T> clazz, Order order, List<Condition> conditions);

/**
 * 分页查询所有符合条件的数据
 * 
 * @param <T>      POJO类
 * @param t        查询条件
 * @param pageSize 分页大小
 * @param pageNum  当前页页码
 * @return 符合条件的数据
 */
<T> Page<T> findPage(T t, Integer pageSize, Integer pageNum);

/**
 * 分页查询所有符合条件的数据
 * 
 * @param <T>      POJO类
 * @param t        查询条件
 * @param pageSize 分页大小
 * @param pageNum  当前页页码
 * @param order    排序条件
 * @return 符合条件的数据
 */
<T> Page<T> findPage(T t, Integer pageSize, Integer pageNum, Order order);

/**
 * 分页查询所有符合条件的数据
 * 
 * @param <T>       POJO类
 * @param t         查询条件
 * @param pageSize  分页大小
 * @param pageNum   当前页页码
 * @param orderName 排序字段，必须为对应的POJO属性的名字
 * @return 符合条件的数据
 */
<T> Page<T> findPage(T t, Integer pageSize, Integer pageNum, String orderName);

/**
 * 分页查询所有符合条件的数据
 * 
 * @param <T>       POJO类
 * @param t         查询条件
 * @param pageSize  分页大小
 * @param pageNum   当前页页码
 * @param orderName 排序字段，必须为对应的POJO属性的名字
 * @param direction 排序方向
 * @return 符合条件的数据
 */
<T> Page<T> findPage(T t, Integer pageSize, Integer pageNum, String orderName, Order.Direction direction);

/**
 * 分页查询所有符合条件的数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param pageSize   分页大小
 * @param pageNum    当前页页码
 * @param conditions 筛选条件
 * @return 符合条件的数据
 */
<T> Page<T> findPage(Class<T> clazz, Integer pageSize, Integer pageNum, Condition... conditions);

/**
 * 分页查询所有符合条件的数据
 * 
 * @param <T>      POJO类
 * @param clazz    POJO类
 * @param pageSize 分页大小
 * @param pageNum  当前页页码
 * @param example  筛选条件
 * @return 符合条件的数据
 */
<T> Page<T> findPage(Class<T> clazz, Integer pageSize, Integer pageNum, Example example);

/**
 * 分页查询所有符合条件的数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param pageSize   分页大小
 * @param pageNum    当前页页码
 * @param conditions 筛选条件
 * @return 符合条件的数据
 */
<T> Page<T> findPage(Class<T> clazz, Integer pageSize, Integer pageNum, List<Condition> conditions);

/**
 * 分页查询所有符合条件的数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param pageSize   分页大小
 * @param pageNum    当前页页码
 * @param order      排序条件
 * @param conditions 筛选条件
 * @return 符合条件的数据
 */
<T> Page<T> findPage(Class<T> clazz, Integer pageSize, Integer pageNum, Order order, Condition... conditions);

/**
 * 分页查询所有符合条件的数据
 * 
 * @param <T>      POJO类
 * @param clazz    POJO类
 * @param pageSize 分页大小
 * @param pageNum  当前页页码
 * @param order    排序条件
 * @param example  筛选条件
 * @return 符合条件的数据
 */
<T> Page<T> findPage(Class<T> clazz, Integer pageSize, Integer pageNum, Order order, Example example);

/**
 * 分页查询所有符合条件的数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param pageSize   分页大小
 * @param pageNum    当前页页码
 * @param order      排序条件
 * @param conditions 筛选条件
 * @return 符合条件的数据
 */
<T> Page<T> findPage(Class<T> clazz, Integer pageSize, Integer pageNum, Order order, List<Condition> conditions);

/**
 * 根据主键全属性更新方式更新一条数据
 * 
 * @param <T> POJO类
 * @param t   待更新的数据
 * @return 受影响的记录的数量
 */
<T> int updateByPrimaryKey(T t);

/**
 * 根据主键可选属性更新方式更新一条数据
 * 
 * @param <T> POJO类
 * @param t   待更新的数据
 * @return 受影响的记录的数量
 */
<T> int updateByPrimaryKeySelective(T t);

/**
 * 根据条件全属性更新方式批量更新数据
 * 
 * @param <T>        POJO类
 * @param t          待更新的数据
 * @param conditions 筛选条件
 * @return 受影响的记录的数量
 */
<T> int update(T t, Condition... conditions);

/**
 * 根据条件全属性更新方式批量更新数据
 * 
 * @param <T>     POJO类
 * @param t       待更新的数据
 * @param example 筛选条件
 * @return 受影响的记录的数量
 */
<T> int update(T t, Example example);

/**
 * 根据条件全属性更新方式批量更新数据
 * 
 * @param <T>        POJO类
 * @param t          待更新的数据
 * @param conditions 筛选条件
 * @return 受影响的记录的数量
 */
<T> int update(T t, List<Condition> conditions);

/**
 * 根据条件全属性更新方式批量更新数据
 * 
 * @param <T>       POJO类
 * @param t         待更新的数据
 * @param condition 更新条件
 * @return 受影响的记录的数量
 */
<T> int update(T t, T condition);

/**
 * 根据条件可选属性更新方式批量更新数据
 * 
 * @param <T>       POJO类
 * @param t         待更新的数据
 * @param condition 更新条件
 * @return 受影响的记录的数量
 */
<T> int updateSelective(T t, T condition);

/**
 * 根据条件可选属性更新方式批量更新数据
 * 
 * @param <T>        POJO类
 * @param t          待更新的数据
 * @param conditions 筛选条件
 * @return 受影响的记录的数量
 */
<T> int updateSelective(T t, Condition... conditions);

/**
 * 根据条件可选属性更新方式批量更新数据
 * 
 * @param <T>     POJO类
 * @param t       待更新的数据
 * @param example 筛选条件
 * @return 受影响的记录的数量
 */
<T> int updateSelective(T t, Example example);

/**
 * 根据条件可选属性更新方式批量更新数据
 * 
 * @param <T>        POJO类
 * @param t          待更新的数据
 * @param conditions 筛选条件
 * @return 受影响的记录的数量
 */
<T> int updateSelective(T t, List<Condition> conditions);

/**
 * 根据主键删除一条数据
 * 
 * @param <T>        POJO类
 * @param clazz      操作的对象
 * @param primaryKey 主键值
 * @return 受影响的记录的数量
 */
<T> int deleteByPrimaryKey(Class<T> clazz, Object primaryKey);

/**
 * 根据条件批量删除数据
 * 
 * @param <T> POJO类
 * @param t   删除条件
 * @return 受影响的记录的数量
 */
<T> int delete(T t);

/**
 * 根据条件批量删除数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param conditions 筛选条件
 * @return 受影响的记录的数量
 */
<T> int delete(Class<T> clazz, Condition... conditions);

/**
 * 根据条件批量删除数据
 * 
 * @param <T>     POJO类
 * @param clazz   POJO类
 * @param example 筛选条件
 * @return 受影响的记录的数量
 */
<T> int delete(Class<T> clazz, Example example);

/**
 * 根据条件批量删除数据
 * 
 * @param <T>        POJO类
 * @param clazz      POJO类
 * @param conditions 筛选条件
 * @return 受影响的记录的数量
 */
<T> int delete(Class<T> clazz, List<Condition> conditions);

/**
 * 以全属性方式新增一条数据
 * 
 * @param <T> POJO类
 * @param t   待新增的数据
 * @return 受影响的记录的数量
 */
<T> int insert(T t);

/**
 * 以可选属性方式新增一条数据
 * 
 * @param <T> POJO类
 * @param t   待新增的数据
 * @return 受影响的记录的数量
 */
<T> int insertSelective(T t);
```

下面是一个简单的使用示例

```java
//插入一条数据
JdbcUtil.jdbc().updateByPrimaryKey(complainRecord);
//根据主键查找一条数据
JdbcUtil.jdbc().findByPrimaryKey(ComplainRecord.class, primaryKey);
```

## 显示详细日志

在有些时候，需要显示详细的日志信息，此时可以在配置文件里加入以下配置即可查看具体的sql语句和结果

```
logging.level.com.yishuifengxiao.common.jdbc=trace
```