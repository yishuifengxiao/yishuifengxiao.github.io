---
title: go文件处理
sidebar_position: 2
keywords:
- GO 
- 文件
tags:
- GO
---

## 获取当前文件路径

```go
func currentAbPathByCaller() string {
	var abPath string
	_, filename, _, ok := runtime.Caller(0)
	if ok {
		abPath = path.Dir(filename)
	}
	return abPath
}
```

