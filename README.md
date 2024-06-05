<p align="center">
  <a href="//www.julycms.com" target="blank"><img src="https://julycms.com/logo.svg" width="100" alt="julycms Logo" /></a>
</p>
<p align="center">JulyCms v1.0.0 | julycms.com-console-ui v1.0.0 ｜ julycms.com-pc-ui v1.0.0</p>

<p align="center">一个基于[<a href="https://nestjs.com/" target="_blank">nestjs</a>+<a href="https://typeorm.io/" target="_blank">typeorm</a>]+[<a href="https://v2.cn.vuejs.org/" target="_blank">vue v2.x</a>+ElementUI 2.x]+[<a href="https://nuxt.com" target="_blank">nuxt v3.11</a>]的快速搭建web应用程序的开源框架。</p>

![预览](https://julycms.com/admin.png)

## 简介

> 项目采用前后端分离，三个项目：后端服务、管理后台UI、PC前台UI。后端服务给管理后台、PC前台提供接口。如果想支持更多端点可以自行扩展。

- PC端采用nuxt 3.11、nuxtUI、tailwindcss。
- 管理后台采用Vue、Element UI。
- 后端采用NestJs、typeorm、Redis & Jwt。
- 权限认证使用Jwt。
- 支持加载动态权限菜单，多方式轻松权限控制。
- swagger文档支持
- 前后端代码分离，可单独部署。
- 支持docker compose部署

## 仓库

### gitee

- 后端服务 ：[julycms.com-server](https://gitee.com/const-undefined-man/julycms.com-server)
- 管理后台UI ：[julycms.com-console-ui](https://gitee.com/const-undefined-man/julycms.com-console-ui)
- PC ：[julycms.com-pc-ui](https://gitee.com/const-undefined-man/julycms.com-pc-ui)

### github

- 后端服务 ：[julycms.com-server](https://github.com/const-undefined-man/julycms.com-server)
- 管理后台UI ：[julycms.com-console-ui](https://github.com/const-undefined-man/julycms.com-console-ui)
- PC ：[julycms.com-pc-ui](https://github.com/const-undefined-man/julycms.com-pc-ui)

## 在线体验

PC前台：<https://demo.julycms.com>

管理后台: <https://demo.julycms.com/console>

账号密码：julycms/julycms

## 内置功能

✅ 站点设置 ✅ 模型管理 ✅ 敏感词管理

✅ 栏目管理 ✅ 内容管理 ✅ 标签管理 ✅ 碎片管理 ✅ 附件单管理

✅ 管理员管理 ✅ 角色设置 ✅ 后台菜单 ✅ 字典管理 ✅ 操作日志

## 安装教程

> 本地需要安装nodejs, nvm, docker & docker-compose

### 后端服务 [julycms.com-server]

> nodejs >= v20; 本地用的是v20.10.0。

1. 下载代码：任选其一

- gitee：`$ git clone git@gitee.com:const-undefined-man/julycms.com-server.git`
- github：`$ git clone git@github.com:const-undefined-man/julycms.com-server.git`

2. 进入目录：`$ cd julycms.com-server`
3. 安装依赖：`$ npm install`
4. 一键启动：`$ docker-compose up -d` 如果想一键启动，可以只下载后端服务代码
5. 访问文档：`http://localhost:3000/api-doc`
6. 访问后台：`http://localhost:8080/console`
7. PC：`http://localhost`

### 管理后台 UI [julycms.com-console-ui]

> 管理后台前端因为计划的比较早，采用的nodejs v16.x, vue2.x。这里在安装的时候一定要注意。

1. 下载代码：：任选其一

- gitee：`$ git clone git@gitee.com:const-undefined-man/julycms.com-console-ui.git`
- github：`$ git clone git@github.com:const-undefined-man/julycms.com-console-ui.git`

2. 进入目录：`$ cd julycms.com-console-ui`
3. 切换版本：`$ nvm use 16.13.0` node版本根据自己本地的来。
4. 安装依赖：`$ npm install`
5. 项目启动：`$ npm run serve`
6. 访问地址：`http://localhost:8080`

### PC前台UI项目

- gitee：`$ git clone git@gitee.com:const-undefined-man/julycms.com-pc-ui.git`
- github：`$ git clone git@github.com:const-undefined-man/julycms.com-pc-ui.git`

2. 进入目录：`$ cd julycms.com-pc-ui`
3. 切换版本：`$ nvm use 20.13.0`
4. 安装依赖：`$ npm install`
5. 项目启动：`$ npm run dev`
6. 访问地址：`http://localhost:3000`

## 扩展端点API

首先需要拿到服务端代码`julycms.com-server`，进入到`src/apis`目录，新建一个目录，比如微信小程序：`wx-mp`

接着在`wx-mp`目录创建模块，以及子模块。可以像`ConsoleModule`一样设置api前缀`consumer.apply(OperationLogMiddleware).forRoutes('api/wx-mp');`

最后在app.module模块import。

```ts
@Module({
  imports: [WxMpModule],
  ...
})
export class AppModule {}
```

## 参与贡献

1. Fork 本仓库
2. 新建 feature/issue_number 分支
3. 提交代码
4. 新建 Pull Request

## 特别鸣谢

感谢以下的项目,排名不分先后

- [NestJs](https://nestjs.com/)
- [Typeorm](https://typeorm.io/)
- [Vue](https://v2.cn.vuejs.org/)
- [Element UI](https://element.eleme.cn/#/zh-CN)
- [Swagger](https://swagger.io/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [JWT](https://jwt.io/)
- [Redis](https://redis.io/)

## License

[MIT](https://github.com/const-undefined-man/julycms.com/blob/master/LICENSE)
