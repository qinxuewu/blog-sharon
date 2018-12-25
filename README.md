# blog-sharon

#### 项目介绍
简单微信笔记小程序



### 效果图如下

 

### 首页

![输入图片说明](https://images.gitee.com/uploads/images/2018/1223/190517_c9e3945d_1478371.png "屏幕截图.png")

### 分类列

![输入图片说明](https://images.gitee.com/uploads/images/2018/1223/190549_d1b2f361_1478371.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1224/214918_5448ec74_1478371.png "屏幕截图.png")

### 详情页

![输入图片说明](https://images.gitee.com/uploads/images/2018/1223/190907_23c4dcba_1478371.png "屏幕截图.png")


### 个人中心

![输入图片说明](https://images.gitee.com/uploads/images/2018/1223/190649_5f950925_1478371.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1224/215038_8714586f_1478371.png "屏幕截图.png")

海报分享
![输入图片说明](https://images.gitee.com/uploads/images/2018/1224/215211_fd208f9f_1478371.png "屏幕截图.png")

### 接口
https://gitee.com/qinxuewu/blog-sharon/wikis/pages

![输入图片说明](https://images.gitee.com/uploads/images/2018/1224/002832_288da88c_1478371.png "屏幕截图.png")



 

### 后端项目 Halo 可能是最好的 Java 博客系统。



## 简介

**Halo** [ˈheɪloʊ]，意为光环。当然，你也可以当成拼音读(哈喽)。

轻快，简洁，功能强大，使用 Java 开发的博客系统。



## 快速开始

源码部署 内置h2数据库：
```bash
进入pom目录  cd halo # 

#打包 mvn clean package -Pprod  

#上传文件到服务器   target/dist/halo/halo-latest.jar

#运行  cd /target/dist/halo
nohup java -Xms256m -Xmx256m -jar halo-latest.jar  &
```


### 接口地址
- 域名：https://www.qinxuewu.club/


### 文章分类接口

```
url地址   /api/categories
接口类型： get 
返回值说明：
     {
          "code": 200,
          "msg": "OK",
          "result": [
             {
                 "cateId": "分类编号",
                 "cateName": "分类名称",
                 "cateUrl": "分类路径",
                 "cateDesc": "分类描述",
                  "count":"文章总数"
             }
         ]
     }
```

### 获取单个分类的信息
```
url地址   /api/categories/{cateUrl}
接口类型： get 
返回值说明：
     {
          "code": 200,
          "msg": "OK",
          "result": [
             {
                 "cateId": "分类编号",
                 "cateName": "分类名称",
                 "cateUrl": "分类路径",
                 "cateDesc": "分类描述"
             }
         ]
     }
```
### 根据分类目录查询所有文章 分页
```
url地址   /api/categories/{cateUrl}/page/{page}
接口类型： get 
返回值说明：
      {
        "code": 200,
        "msg": "OK",
        "result": {
            "content": [
                {
                    "postId": ,             //文章编号
                    "user": {},             //发表用户
                    "postTitle": "",        //文章标题
                    "postType": "",         //文章类型 post=文章,page=页面
                    "postContentMd": "",    //文章内容 Markdown格式
                    "postContent": "",      //文章内容 html格式
                    "postUrl": "",          //文章路径
                    "postSummary": "",      //文章摘要
                    "categories": [],       //文章所属分类
                    "tags": [],            //文章所属标签
                    "comments": [],        //文章的评论
                    "postThumbnail": "",    //缩略图
                    "postDate": "",        //发表日期
                    "postUpdate": "",      //最后一次更新时间
                    "postStatus": 0,        //0 已发布 1 草稿 2 回收站
                    "postViews": 0,        //文章访问量
                    "allowComment": 1,        //是否允许评论
                    "customTpl": ""           //指定渲染模板
                }
            ],
              "pageable": {
                "sort": {
                    "sorted": true,
                    "unsorted": false,
                    "empty": false
                },
                "offset": 0,
                "pageSize": 10,
                "pageNumber": 0,
                "unpaged": false,
                "paged": true
            },
            "last": true,
            "totalElements": 1,   //分类文章总条数
            "totalPages": 1,
            "size": 10,
            "number": 0,
            "first": true,
            "numberOfElements": 1,
            "sort": {
                "sorted": true,
                "unsorted": false,
                "empty": false
            },
            "empty": false
        }
    }
```

### 文章API

```
url地址   /api/post/page/{page}
接口；类型： get 
参数：{page} 页码
请求如下：http://www.qinxuewu.club/api/posts/page/1
返回值说明：
    {
        "code": 200,
        "msg": "OK",
        "result": {
            "content": [
                {
                    "postId": ,             //文章编号
                    "user": {},             //发表用户
                    "postTitle": "",        //文章标题
                    "postType": "",         //文章类型 post=文章,page=页面
                    "postContentMd": "",    //文章内容 Markdown格式
                    "postContent": "",      //文章内容 html格式
                    "postUrl": "",          //文章路径
                    "postSummary": "",      //文章摘要
                    "categories": [],       //文章所属分类
                    "tags": [],            //文章所属标签
                    "comments": [],        //文章的评论
                    "postThumbnail": "",    //缩略图
                    "postDate": "",        //发表日期
                    "postUpdate": "",      //最后一次更新时间
                    "postStatus": 0,        //0 已发布 1 草稿 2 回收站
                    "postViews": 0,        //文章访问量
                    "allowComment": 1,        //是否允许评论
                    "customTpl": ""           //指定渲染模板
                }
            ]
        }
    }
```
### 
搜索文章

```
url地址   /api/post/search?keyword=xxx&page=1
接口；类型： get 
返回值说明：
    {
        "code": 200,
        "msg": "OK",
        "result": {
                    "postId": ,             //文章编号
                    "postTitle": "",        //文章标题
                    "postType": "",         //文章类型 post=文章,page=页面
                    "postContentMd": "",    //文章内容 Markdown格式
                    "postContent": "",      //文章内容 html格式
                    "postUrl": "",          //文章路径
                    "postSummary": "",      //文章摘要
                    "categories": [],       //文章所属分类
                    "tags": [],            //文章所属标签
                    "comments": [],        //文章的评论
                    "postThumbnail": "",    //缩略图
                    "postDate": "",        //发表日期
                    "postUpdate": "",      //最后一次更新时间
                    "postStatus": 0,        //0 已发布 1 草稿 2 回收站
                    "postViews": 0,        //文章访问量
                    "allowComment": 1,        //是否允许评论
                    "customTpl": ""           //指定渲染模板
        }
    }
```


### 获取单个文章信息


```
url地址   /api/post/{postId}
接口；类型： get 
请求如下：http://www.qinxuewu.club/api/posts/27
返回值说明：
    {
        "code": 200,
        "msg": "OK",
        "result": {
                    "postId": ,             //文章编号
                    "postTitle": "",        //文章标题
                    "postType": "",         //文章类型 post=文章,page=页面
                    "postContentMd": "",    //文章内容 Markdown格式
                    "postContent": "",      //文章内容 html格式
                    "postUrl": "",          //文章路径
                    "postSummary": "",      //文章摘要
                    "categories": [],       //文章所属分类
                    "tags": [],            //文章所属标签
                    "comments": [],        //文章的评论
                    "postThumbnail": "",    //缩略图
                    "postDate": "",        //发表日期
                    "postUpdate": "",      //最后一次更新时间
                    "postStatus": 0,        //0 已发布 1 草稿 2 回收站
                    "postViews": 0,        //文章访问量
                    "allowComment": 1,        //是否允许评论
                    "customTpl": ""           //指定渲染模板
        }
    }
```

### 获取所有标签

```
url地址   /api/tags
接口；类型： get 
请求如下：http://www.qinxuewu.club/api/tags
返回值说明：
      {
         "code": 200,
         "msg": "OK",
         "result": [
             {
                 "tagId": ,            //标签编号
                "tagName": "",        //标签名称
                 "tagUrl": ""         //标签路径
             }
         ]
     }
```

### 获取单个标签

```
url地址   /api/tags/{tagUrl}
接口；类型： get 
请求如下：http://www.qinxuewu.club/api/tags/jvm
返回值说明：
 {"code":200,"msg":"OK","result":{"tagId":32,"tagName":"jvm","tagUrl":"jvm"}}
```

### 文章归档API  根据年份归档

```
url地址   /api/archives/year
接口；类型： get 
请求如下：http://www.qinxuewu.club/api/archives/year
返回值说明：
      {
         "code": 200,
         "msg": "OK",
         "result": [
             {
                 "year": "年份",
                 "month": "月份",
                 "count": "对应的文章数",
                 "posts": [
                     {
                    "postId": ,             //文章编号
                    "postTitle": "",        //文章标题
                    "postType": "",         //文章类型 post=文章,page=页面
                    "postContentMd": "",    //文章内容 Markdown格式
                    "postContent": "",      //文章内容 html格式
                    "postUrl": "",          //文章路径
                    "postSummary": "",      //文章摘要
                    "categories": [],       //文章所属分类
                    "tags": [],            //文章所属标签
                    "comments": [],        //文章的评论
                    "postThumbnail": "",    //缩略图
                    "postDate": "",        //发表日期
                    "postUpdate": "",      //最后一次更新时间
                    "postStatus": 0,        //0 已发布 1 草稿 2 回收站
                    "postViews": 0,        //文章访问量
                    "allowComment": 1,        //是否允许评论
                    "customTpl": ""           //指定渲染模板
                     }
                 ]
             }
         ]
     }
```

### 文章归档API  根据月份归档

```
url地址   /api/archives/year/
接口；类型： get 
请求如下：http://www.qinxuewu.club/api/archives/year/month
返回值说明：
      {
         "code": 200,
         "msg": "OK",
         "result": [
             {
                 "year": "年份",
                 "month": "月份",
                 "count": "对应的文章数",
                 "posts": [
                     {
                    "postId": ,             //文章编号
                    "postTitle": "",        //文章标题
                    "postType": "",         //文章类型 post=文章,page=页面
                    "postContentMd": "",    //文章内容 Markdown格式
                    "postContent": "",      //文章内容 html格式
                    "postUrl": "",          //文章路径
                    "postSummary": "",      //文章摘要
                    "categories": [],       //文章所属分类
                    "tags": [],            //文章所属标签
                    "comments": [],        //文章的评论
                    "postThumbnail": "",    //缩略图
                    "postDate": "",        //发表日期
                    "postUpdate": "",      //最后一次更新时间
                    "postStatus": 0,        //0 已发布 1 草稿 2 回收站
                    "postViews": 0,        //文章访问量
                    "allowComment": 1,        //是否允许评论
                    "customTpl": ""           //指定渲染模板
                     }
                 ]
             }
         ]
     }
```





