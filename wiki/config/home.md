---
slug: /
sidebar_position: 1
title: 快速启动
---


## axel 安装



#### [Ubuntu](https://so.csdn.net/so/search?q=Ubuntu&spm=1001.2101.3001.7020) 环境

```shell
sudo apt update
sudo apt install axel
```

#### Centos 环境

```shell
yum install axel
```

## 使用

axel -n [线程数] [网络文件的地址]
如：

```shell
# 开启10个线程下载
axel -n 10 https://github.com/axel-download-accelerator/axel/archive/refs/heads/master.zip
```


