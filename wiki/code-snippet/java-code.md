---
title: javad代码片段
sidebar_position: 5
keywords:
- JAVA
- JVM
tags:
- JAVA
---

java代码片段

## java调用maven

加入依赖

```xml
        <dependency>
            <groupId>org.apache.maven.shared</groupId>
            <artifactId>maven-invoker</artifactId>
            <version>2.2</version>
        </dependency>
```

代码如下

```java
public class MvnDemo {
    public static void main(String[] args) throws Exception {
        System.setProperty("maven.home", "D:\\apache-maven-3.8.4");
        InvocationRequest request = new DefaultInvocationRequest();
        request.setPomFile(new File("D:\\code\\open\\demo-spider\\pom.xml"));
        request.setGoals(Arrays.asList("clean", "install"));
        request.setShowErrors(false);
        System.out.println("--------------------11111111");
        Invoker invoker = new DefaultInvoker();
        System.out.println("--------------------2222222");
        final InvocationResult result = invoker.execute(request);

        System.out.println("--------------------3333333");
    }
}
```

## java调用js

加入依赖

```xml
<dependency>
    <groupId>org.graalvm.js</groupId>
    <artifactId>js</artifactId>
    <version>${scriptengine.version}</version>

</dependency>
<dependency>
    <groupId>org.graalvm.js</groupId>
    <artifactId>js-scriptengine</artifactId>
    <version>${scriptengine.version}</version>
</dependency>
```

代码如下

```java
package com.yishuifengxiao.app.file_browser.util;

import com.oracle.truffle.js.runtime.JSContextOptions;
import com.oracle.truffle.js.scriptengine.GraalJSScriptEngine;
import com.yishuifengxiao.common.tool.io.IoUtil;
import lombok.extern.slf4j.Slf4j;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Engine;
import org.graalvm.polyglot.HostAccess;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptException;
import java.io.IOException;

/**
 * 脚本工具
 *
 * @author yishui
 * @version 1.0.0
 * @since 1.0.0
 */
@Slf4j
public class ScriptUtil {

    private static ScriptEngine engine = null;


    static {
//        https://www.cnblogs.com/rongfengliang/p/13589056.html
//        https://www.graalvm.org/22.1/reference-manual/js/Modules/
        // @formatter:off
        ScriptUtil.engine = GraalJSScriptEngine.create(
                Engine
                        .newBuilder()
                        .option("engine.WarnInterpreterOnly", "false")
                        .option("js.load-from-url","true")
                        .allowExperimentalOptions(true)
                        .build(),
                Context.newBuilder("js","import (\"src/main/resources/templates/jquery-3.6.4.min.js\")")
                        .allowHostAccess(HostAccess.ALL)
                        .allowAllAccess(true)
                        .allowHostClassLoading(true)
                        .allowIO(true)
                        .allowNativeAccess(true)
                        .allowHostClassLookup(s -> true)
                        .option(JSContextOptions.ECMASCRIPT_VERSION_NAME, "2022")
//                        .option("js.commonjs-global-properties", "https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js")
                        .option("js.esm-eval-returns-exports", "true")
                        .option("js.commonjs-require-cwd", "D:\\desktop\\vue_demo\\vue3_demo\\node_modules")
                        .option("js.commonjs-require", "true")
                // (optional) Node.js built-in replacements as a comma separated list.
//                        .option("js.commonjs-core-modules-replacements", "buffer:buffer/,path:node-fetch")
        );
        // @formatter:on
    }

    /**
     * 执行js脚本
     *
     * @param script       js脚本
     * @param functionName 函数名称
     * @param args         输入的参数
     * @return 响应结果
     */
    public static synchronized String execute(String script, String functionName, String... args) {
        try {
            engine.eval(script);
            Invocable invocable = (Invocable) engine;
            Object result = invocable.invokeFunction(functionName, args);
            return null != result ? result.toString() : null;
        } catch (Throwable e) {
            log.info("使用函数名{} 执行脚本 【{}】时出现问题 {}", functionName, script, e);
        }
        return null;


    }

    /**
     * 执行脚本
     *
     * @param script 待执行的脚本
     * @return 执行结果
     */
    public static synchronized Object execute(String script) {
        Object eval = null;
        try {
            eval = engine.eval(script);
        } catch (Throwable e) {
            log.info("执行脚本 【{}】时出现问题 {}", script, e);
        }
        return eval;
    }

    public static void main(String[] args) throws ScriptException, IOException {
        final String string = IoUtil.inputStream2String(ScriptUtil.class.getResourceAsStream("/templates/demo.js"));
        final Object execute = execute(string);
        System.out.println(execute);
    }


}
```
