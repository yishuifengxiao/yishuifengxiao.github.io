---
sidebar_position: 2
title: swagger增强
---

此功能主要是针对swagger原生功能进行增强扩展，用户仍然需要按照swagger的标准进行编码，只是在开启此功能后，组件会在swagger原生功能的基础上额外提供一套UI界面。

此功能在 swagger-bootstrap-ui 1.9.4 基础上扩展而来，更多信息可以参看刀哥的 [Knife4j (swagger-bootstrap-ui新版名为Knife4j)](https://doc.xiaominfo.com/docs/quick-start) 。

## 一 基础使用

当需要开启此功能时，可以在项目中加入一下配置：

```properties
yishuifengxiao.swagger.base-package=com.demo.controller
```

在上述配置中，`com.demo.controller`为项目中controller所在的路径

完成上述配置后即可通过`http://{ip}:{port}/doc.html`查看swagger-ui增强文档

一个简单的示例如下：

```java
@Api(value = "demo应用描述", tags = { "demo应用" })
@Controller
@Valid
@Validated
@Slf4j
public class IndexController {


	@ApiOperation(value = "demo搜索", notes = "demo搜索功能描述")
	@PostMapping("/search")
	@ResponseBody
	public Response<SearchVo> search(HttpServletRequest request, @Validated(Create.class) @RequestBody SearchDto param,
			BindingResult errors) {
	
	}

	@ApiImplicitParams({ @ApiImplicitParam(name = "id", value = "数据唯一标识符") })
	@ApiOperation(value = "查询记录", notes = "根据数据唯一标识符查询记录")
	@GetMapping("/findById")
	@ResponseBody
	public Response<LibraryDetailVo> findById(HttpServletRequest request, String id) {
		
	}
	
		@ApiImplicitParams({ @ApiImplicitParam(name = "id", value = "数据唯一标识符", required = true),
			//
			@ApiImplicitParam(name = "file", value = "文件流对象,接收数组格式", required = true, dataType = "MultipartFile",
					allowMultiple = true) })
	@ApiOperation(value = "单文件上传", notes = "单文件上传")
	@PostMapping("/import")
	@ResponseBody
	public Response<Object> importFiles(HttpServletRequest request, @RequestParam("id") String id,
			@RequestParam(value = "file", required = true) MultipartFile file) {
	
	}
    
    	@ApiImplicitParams({ @ApiImplicitParam(name = "file[]", value = "文件流对象,接收数组格式", required = true,
			dataType = "MultipartFile", allowMultiple = true) })
	@ApiOperation(value = "多文件上传", notes = "使用多文件方式上传")
	@PostMapping("/import/files")
	@ResponseBody
	public Response<List<UploadVo>> importFiles(HttpServletRequest request,
			@RequestParam(value = "file[]", required = true) MultipartFile[] files) {

	}

}
```

其中实体的示例如下:

```java
@ApiModel(value = "示例")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
@Validated
@Valid
public class Example implements Serializable {

	/**
	 * 问题
	 */
	@ApiModelProperty("示例问题，不能为空")
	@NotBlank(message = "示例问题不能为空", groups = { Create.class, Update.class })
	private String question;

	/**
	 * 答案
	 */
	@ApiModelProperty("示例答案，不能为空")
	@NotBlank(message = "示例答案不能为空", groups = { Create.class, Update.class })
	private String answer;

}
```

## 二 进阶配置

![image-20230210142053696](https://zhiyubujian.oss-cn-hangzhou.aliyuncs.com/blog/image-20230210142053696.png)

在默认情况下swagger相关资源在不需要鉴权的情况下即可访问，但是在某些情况下需要经过鉴权才能访问，此时可以加入以下配置:

```properties
yishuifengxiao.swagger.base-package=com.demo.controller
# 访问swagger页面时需要输入的用户名，默认值为admin，如果该用户名为空表示则不开启认证功能。只有username和password参数均不为空时才会开启认证功能
yishuifengxiao.swagger.username=admin
# 访问swagger页面时需要输入的密码，如果该密码为空表示则不开启认证功能。只有username和password参数均不为空时才会开启认证功能
yishuifengxiao.swagger.password=123456s
```

