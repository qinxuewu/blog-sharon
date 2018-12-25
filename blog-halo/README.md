<h1 align="center"><a href="https://halo-doc.ryanc.cc" target="_blank">Halo</a></h1>

> Halo 可能是最好的 Java 博客系统。

<p align="center">
<a href="https://ryanc.cc"><img alt="Author" src="https://img.shields.io/badge/author-ruibaby-red.svg?style=flat-square"/></a>
<a href="#"><img alt="JDK" src="https://img.shields.io/badge/JDK-1.8-yellow.svg?style=flat-square"/></a>
<a href="https://github.com/ruibaby/halo/releases"><img alt="GitHub release" src="https://img.shields.io/github/release/ruibaby/halo.svg?style=flat-square"/></a>
<a href="https://travis-ci.org/ruibaby/halo"><img alt="Travis CI" src="https://img.shields.io/travis/ruibaby/halo.svg?style=flat-square"/></a>
<a href="https://hub.docker.com/r/ruibaby/halo/"><img alt="Docker Build Status" src="https://img.shields.io/docker/build/ruibaby/halo.svg?style=flat-square"/></a>
</p>

------------------------------


## 简介

**Halo** [ˈheɪloʊ]，意为光环。当然，你也可以当成拼音读(哈喽)。

轻快，简洁，功能强大，使用 Java 开发的博客系统。



## 快速开始

源码部署：
```bash
进入pom目录  cd halo # 

#打包 mvn clean package -Pprod  

#上传文件到服务器   target/dist/halo/halo-latest.jar

#运行  cd /target/dist/halo
nohup java -Xms256m -Xmx256m -jar halo-latest.jar  &
```



> 注意：如使用 Idea，Eclipse 等IDE运行的话，需要安装Lombok插件，另外暂不支持JDK10，主题管理和主题上传会有问题。
> 更多请参考[ Halo 使用文档 ](https://halo-doc.ryanc.cc/installation/)或者[ Wiki](https://github.com/ruibaby/halo/wiki)。



## 主题

除了内置的 [Anatole](https://github.com/hi-caicai/farbox-theme-Anatole) 和 [Material](https://github.com/viosey/hexo-theme-material) ，还有下列主题没有集成在项目里，如有需要，请自行下载之后通过后台上传上去使用。

- [Vno](https://github.com/ruibaby/vno-halo) - 来自Jekyll的一款主题，作者 [Wei Wang](https://onevcat.com/)。
- [Hux](https://github.com/ruibaby/hux-halo) - 来自Jekyll的一款主题，作者 [Xuan Huang](https://huangxuan.me/)。
- [Story](https://github.com/ruibaby/story-halo) - 来自Typecho的一款主题，作者 [Trii Hsia](https://yumoe.com/)。
- [NexT](https://github.com/ruibaby/next-halo) - 来自Hexo的一款主题，作者 [iissnan](https://notes.iissnan.com/)。
- [Casper](https://github.com/ruibaby/casper-halo) - 来自Ghost的一款主题，作者 [Ghost](https://github.com/TryGhost)。

> 声明：不接受任何对**移植主题**功能上的意见和建议。

## 许可证

[![license](https://img.shields.io/github/license/ruibaby/halo.svg?style=flat-square)](https://github.com/ruibaby/halo/blob/master/LICENSE)

> Halo 使用 GPL-v3.0 协议开源，请尽量遵守开源协议，即便是在中国。

## 感谢

Halo 的诞生离不开下面这些项目：

- [Spring Boot](https://github.com/spring-projects/spring-boot)：Spring 的快速开发框架
- [Freemarker](https://freemarker.apache.org/)：模板引擎，使页面静态化
- [H2 Database](https://github.com/h2database/h2database)：嵌入式数据库，无需安装
- [Spring-data-jpa](https://github.com/spring-projects/spring-data-jpa.git)：不需要写 sql 语句的持久层框架
- [Ehcache](http://www.ehcache.org/)：缓存框架
- [Lombok](https://www.projectlombok.org/)：让代码更简洁
- [oh-my-email](https://github.com/biezhi/oh-my-email)：可能是最小的 Java 邮件发送库了，支持抄送、附件、模板等
- [Hutool](https://github.com/looly/hutool)：一个 Java 基础工具类库
- [Thumbnailator](https://github.com/coobird/thumbnailator)：缩略图生成库
- [AdminLTE](https://github.com/almasaeed2010/AdminLTE)：基于 Bootstrap 的后台模板
- [Bootstrap](https://github.com/twbs/bootstrap.git)：使用最广泛的前端 ui 框架
- [Animate](https://github.com/daneden/animate.css.git)：非常好用的 css 动效库
- [SimpleMDE - Markdown Editor](https://github.com/sparksuite/simplemde-markdown-editor)：简洁，功能够用，且轻量级的 Markdown 编辑器
- [Bootstrap-FileInput](https://github.com/kartik-v/bootstrap-fileinput.git)：基于 Bootstrap 的文件上传组件
- [Font-awesome](https://github.com/FortAwesome/Font-Awesome.git)：使用最广泛的字体图标库
- [JQuery](https://github.com/jquery/jquery.git)：使用最广泛的 JavaScript 框架
- [Layer](https://github.com/sentsin/layer.git)：个人认为最实用最好看的弹出层组件，没有之一
- [JQuery-Toast](https://github.com/kamranahmedse/jquery-toast-plugin)：消息提示组件
- [Pjax](https://github.com/defunkt/jquery-pjax.git)：pushState + ajax = pjax
- [OwO](https://github.com/DIYgod/OwO)：前端表情库


## 界面展示

![](https://i.loli.net/2018/12/16/5c15b6edb9a49.png)
![](https://i.loli.net/2018/12/16/5c15b6ee08333.png)
![](https://i.loli.net/2018/12/16/5c15b6ec853af.png)
![](https://i.loli.net/2018/12/16/5c15b6ec50238.png)
![](https://i.loli.net/2018/12/16/5c15b6ed4057a.png)
![](https://i.loli.net/2018/12/16/5c15b6eb01f2d.png)
![](https://i.loli.net/2018/12/16/5c15b6eb98898.png)
![](https://i.loli.net/2018/12/16/5c15b6eb3b506.png)
![](https://i.loli.net/2018/12/16/5c15b6ebf29fd.png)
