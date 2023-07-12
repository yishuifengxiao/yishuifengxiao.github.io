---
title: go命令
sidebar_position: 2
keywords:
- GO 
- go命令
tags:
- GO
---

## 一 go get 命令


Go 1.16 中包含着大量的 Modules 相关的更新，详细内容可直接查看其 Release Note[2]。整体而言，包含以下要点：

`GO111MODULE` 默认为` on` ，如果要恢复到之前的行为，则需要将 `GO111MODULE` 设置为` auto` ，这样差不多意味着 GOPATH 模式要逐步淡出人们的视野了；

`go install` 命令可以接受一个版本后缀了，（例如，`go install sigs.k8s.io/kind@v0.9.0`），并且它是在模块感知的模式下运行，可忽略当前目录或上层目录的 go.mod 文件。这对于在不影响主模块依赖的情况下，安装二进制很方便；

在将来，`go install `被设计为“用于构建和安装二进制文件”， `go get `则被设计为 “用于编辑 go.mod 变更依赖”，并且使用时，应该与 `-d `参数共用，在将来版本中 `-d` 可能会默认启用；

`go build` 和 `go test` 默认情况下不再修改` go.mod` 和 `go.sum`。可通过 `go mod tidy `，`go get `或者手动完成；
总结而言，关于 `go install` 和 `go get` 必须要注意的是：

基本上 `go install <package>@<version> `是用于命令的全局安装：

例如：`go install sigs.k8s.io/kind@v0.9.0`;

`go get `安装二进制的功能，后续版本将会删除；`go get` 主要被设计为修改 `go.mod `追加依赖之类的，但还存在类似 `go mod tidy `之类的命令，所以使用频率可能不会很高；

`go get` 支持自定义域名的功能。

参数介绍：

- `-d`     只下载不安装
- `-f`     只有在你包含了 `-u` 参数的时候才有效，不让 `-u` 去验证 `import` 中的每一个都已经获取了，这对于本地 fork 的包特别有用
- `-fix`  在获取源码之后先运行 `fix`，然后再去做其他的事情
- `-t`     同时也下载需要为运行测试所需要的包
- `-u`      强制使用网络去更新包和它的依赖包、下载丢失的包，但不会更新已经存在的包
- `-v`      显示执行的命令、显示操作流程的日志及信息，方便检查错误
- `-insecure`      允许使用不安全的 HTTP 方式进行下载操作

------

### 1.1.1 使用临时源

您可以使用 `go get` 命令的 `-u` 和 `-v` 标志来使用临时源。例如，以下命令将从 `github.com` 上获取最新版本的 `example` 库并打印详细信息

```bash
go get -u -v github.com/username/example
```

您可以将 `github.com` 替换为其他源，例如 `gitee.com` 或 `gitlab.com`，以使用不同的临时源。请注意，使用临时源可能会导致安全问题，因此请谨慎使用

## 二 GOMODULE常用命令

- `go mod init`  # 初始化go.mod
- `go mod tidy`  # 直接从源代码中获取依赖关系，更新依赖文件。可删掉go.mod中无用的依赖。
- `go mod download`  # 下载依赖文件
- `go mod vendor`  # 将依赖转移至本地的vendor文件
- `go mod edit`  # 手动修改依赖文件
- `go mod graph`  # 打印依赖图
- `go mod verify ` # 校验依赖

在项目源码中使用 `import` 语句，导入新的依赖模块前，可用` go get `命令，先下载新模块。

```bash
go instsll 应该在module外部使用 https://github.com/golang/go/issues/40276
弃用go get命令安装可执行文件 https://go.dev/doc/go-get-install-deprecation
Go 1.16 中关于 go get 和 go install https://cloud.tencent.com/developer/article/1766820

```

## 三 私有依赖

要安装私有依赖项，您需要将依赖项的代码存储在本地或者私有代码仓库中，并使用以下命令之一来安装依赖项：

1. 使用本地路径安装

如果您已经将依赖项的代码存储在本地，可以使用以下命令来安装该依赖项：

```bash
go install /path/to/dependency
```

其中 `/path/to/dependency` 是依赖项的本地路径

​			2 使用版本控制系统安装

如果您的依赖项存储在私有代码仓库中，您可以使用以下命令来安装该依赖项：

```bash
go get -u gitlab.com/username/repo
```

其中 `gitlab.com/username/repo` 是您的私有代码仓库地址。请注意，您需要在安装之前设置正确的身份验证凭据以访问私有代码仓库。

使用这些方法之一，您可以安装私有依赖项并在您的项目中使用它们



