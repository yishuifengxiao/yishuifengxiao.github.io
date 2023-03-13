---
title: go csv处理
sidebar_position: 3
keywords:
- GO 
- 工具
tags:
- GO
---



大家在开发中一定遇到过将数据导出成csv格式文件的需求。go标准库中的csv包是只能写入**字符串类型的切片**。而在go中一般都是以结构体为操作对象，若使用标准的csv包，就需要将结构体先转换成对应的字符串类型，再写入文件。

那可不可以将结构体对象直接输出成csv格式内容呢？

今天给大家推荐的就是一个能将结构体和csv内容进行快速互转的工具包：**gocsv**

| **gocsv 小档案** |                                                     |         |          |
| :--------------- | --------------------------------------------------- | ------- | -------- |
| star             | 1.5 k                                               | used by | 1.6k     |
| contributors     | 80                                                  | 作者    | gocarina |
| 功能简介         | 提供一个简单、高效地将csv内容和结构体进行互转的功能 |         |          |
| 项目地址         | https://github.com/gocarina/gocsv                   |         |          |
| 相关知识         | reflect、结构体tag                                  |         |          |

## gocsv的基本功能

gocsv包的最基本的作用就是能够方便的将csv内容转换到对应的结构体上，或者将结构体的内容快速的转换成csv格式（包括写入文件）。

![图片](https://mmbiz.qpic.cn/mmbiz_png/l6hSQtEH259aKQRxvWG9JdvKZrVECLrYUq4cwv8Wae9gVxchAqjtuDhMbqDsLsMyQhNxTtI403CfsPbVvf4HNQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)image.png

## gocsv.UnmarshalFile函数：csv内容转成结构体

假设文件中的内容如下：

```bash
client_id,client_name,client_age
1,Jose,42
2,Daniel,26
3,Vincent,32
```

然后从文件中读取出内容，并直接转换到结构体Client上，如下：

```go
package main

import (
 "fmt"
 "os"

 "github.com/gocarina/gocsv"
)

type NotUsed struct {
 Name string
}

type Client struct { // Our example struct, you can use "-" to ignore a field
 Id            string `csv:"client_id"`
 Name          string `csv:"client_name"`
 Age           string `csv:"client_age"`
 NotUsedString string `csv:"-"`
 NotUsedStruct NotUsed `csv:"-"` 
}

func main() {
 clientsFile, err := os.OpenFile("clients.csv", os.O_RDWR|os.O_CREATE, os.ModePerm)
 if err != nil {
  panic(err)
 }
 defer clientsFile.Close()

 clients := []*Client{}

 if err := gocsv.UnmarshalFile(clientsFile, &clients); err != nil { // Load clients from file
  panic(err)
 }
 for _, client := range clients {
  fmt.Println("Hello", client.Name)
 }
}
```

## gocsv.MarshalFile函数：结构体转成csv文件

```go
package main

import (
 "fmt"
 "os"

 "github.com/gocarina/gocsv"
)

type NotUsed struct {
 Name string
}

type Client struct { // Our example struct, you can use "-" to ignore a field
 Id            string `csv:"client_id"`
 Name          string `csv:"client_name"`
 Age           string `csv:"client_age"`
 NotUsedString string `csv:"-"`
 NotUsedStruct NotUsed `csv:"-"` 
}

func main() {
 clientsFile, err := os.OpenFile("clients.csv", os.O_RDWR|os.O_CREATE, os.ModePerm)
 if err != nil {
  panic(err)
 }
 defer clientsFile.Close()

 clients := []*Client{}

 clients = append(clients, &Client{Id: "12", Name: "John", Age: "21"}) // Add clients
 clients = append(clients, &Client{Id: "13", Name: "Fred"})
 clients = append(clients, &Client{Id: "14", Name: "James", Age: "32"})
 clients = append(clients, &Client{Id: "15", Name: "Danny"})
 
 err = gocsv.MarshalFile(&clients, clientsFile) // Use this to save the CSV back to the file
 if err != nil {
  panic(err)
 }

}
```

## 自定义类型转换器

gocsv包还可以给自定义的结构体类型定义csv和结构体的互转函数。只要自定义的类型实现如下接口即可：

```go
type TypeMarshaller interface {
 MarshalCSV() (string, error)
}

// TypeUnmarshaller is implemented by any value that has an UnmarshalCSV method
// This converter is used to convert a string to your value representation of that string
type TypeUnmarshaller interface {
 UnmarshalCSV(string) error
}
```



或者将结构体转换成csv字符串时，需要实现如下接口：

```go
// MarshalText encodes the receiver into UTF-8-encoded text and returns the result.
type TextMarshaler interface {
 MarshalText() (text []byte, err error)
}

type TextUnmarshaler interface {
 UnmarshalText(text []byte) error
}
```

例如，我们定义了一个结构体DateTime，里面有一个time.Time类型的属性。并且DateTime类型实现了TypeMarshaller接口的MarshalCSV函数和TypeUnmarshaller接口的UnmarshalCSV函数。如下：

```go
type DateTime struct {
 time.Time
}

// Convert the internal date as CSV string
func (date *DateTime) MarshalCSV() (string, error) {
 return date.Time.Format("20060201"), nil
}

// You could also use the standard Stringer interface 
func (date *DateTime) String() (string) {
 return date.String() // Redundant, just for example
}

// Convert the CSV string as internal date
func (date *DateTime) UnmarshalCSV(csv string) (err error) {
 date.Time, err = time.Parse("20060201", csv)
 return err
}

type Client struct { // Our example struct with a custom type (DateTime)
 Id       string   `csv:"id"`
 Name     string   `csv:"name"`
 Employed DateTime `csv:"employed"`
}

func main() {

 client := []Client{
  {
   Id: "001",
   Name: "Go学堂",
   Employed: DateTime{time.Now()},
  },
 }

 csvContent, _ := gocsv.MarshalString(client)
 fmt.Println("csv:", csvContent) //输出内容是 001,Go学堂,20231003
}
```

当我们运行上述代码，最终的输出内容是：

```bash
001,Go学堂,20231003
```

最后的日期就是按DateTime的MarshalCSV函数格式输出的。

## 自定义CSV的Reader/Writer

在开头处我们提到，csv文件中的分隔符默认是逗号。但也可以是其他字符。这就要求我们在读取或写入之前指定好内容的分隔号。那么就可以通过自定义的Reader/Writer来覆盖默认的Reader/Writer的选项。如下：

- 指定读取内容的分割符是 "|"

```go
gocsv.SetCSVReader(func(in io.Reader) gocsv.CSVReader {
    r := csv.NewReader(in)
 r.Comma = '|'
    return r // Allows use pipe as delimiter
})
```

- 指定写入的内容是用 分割符 "|" 进行分割的

```go
gocsv.SetCSVWriter(func(out io.Writer) *gocsv.SafeCSVWriter {
 writer := csv.NewWriter(out)
    writer.Comma = '|'
    return gocsv.NewSafeCSVWriter(writer)
})
```

## gocsv包的特点总结

1、**结构体切片和csv内容互转**。能够将结构体切片（或数组）直接输出成csv内容或输出到文件。反之亦然。

2、**csv标签**。其转换过程是通过结构体上的“csv”标签进行关联的。

3、**csv标签对应csv内容表头**。当结构体和csv格式互转时，结构体中的csv标签对应的就是csv表格的表头，结构体中的字段顺序对应的就是csv文件列的顺序。

4、**底层依然是使用标准库中的csv**。在写入csv文件时，底层实际上用的还是go标准库中的encoding/csv/Writer结构体的Write(row []string)方法。

5、**自动将结构体字段的类型转换成字符串**：大家看到标准csv包中的Write方法的入参是string类型的切片，而在要转换的结构体上的字段可以是各种类型。这里就是gocsv包中的一个特点：可以将字段中的非string类型转换成string类型，最终写入到csv文件中。

6、**可自定义类型转换器**。可以通过实现TypeMarshaller接口或TypeUnMarshaller接口对自定义类型的内容按对应的格式输出成csv内容。

7、**可自定义CSV的Reader/Writer来覆盖默认参数**。比如csv格式的内容默认使用逗号分隔内容。通过该功能我们可以指定使用其他分隔符的csv内容。比如使用"|"或";"等。

这里需要注意的是 将csv文件的内容一定是解析到结构体类型的**切片**或**数组**中。同样，也只有是结构体类型的**切片**或**数组**才能直接写入到csv文件中。

以上，就是今天我们要分享的工具包。如需了解更多内容，请关注「Go学堂」。
