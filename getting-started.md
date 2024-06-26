# 快速开始

本章旨在介绍如何在本地使用docker启动服务，以便快速开发。

## 准备docker

第一步：下载安装[docker desktop](https://www.docker.com/products/docker-desktop/)

第二步：下载mysql 和 redis 镜像

![下载mysql镜像](/docker1.png)
![下载redis镜像](/docker2.png)

第三步：启动mysql和redis镜像

> Volume 是挂载卷，可以用来持久化数据，也可以用来映射到宿主机，方便开发调试。我本地写的是`/Users/sole/docker/mysql`和`/Users/sole/docker/redis`,你可以放到自己喜欢的目录。要注意的是，Volume的路径必须是存在的，否则会报错。

![启动镜像](/docker3.png)
![启动mysql镜像](/docker4.png)
![启动redis镜像](/docker5.png)

第四部：查看启动的容器
![查看启动的容器](/docker6.png)

## 启动后端服务 [julycms.com-server]

> 后端项目node版本要求`node>=20.x`, mysql版本要求`mysql>=8.0`，其余依赖包请看`package.json`

:::info 提示
后端服务配置docker-compose.yml文件，可以一键启动服务，也可以管理后台UI和后端服务代码单独下载，单独启动。
:::

1. 下载代码：任选其一
::: code-group

```sh [gitee]
git clone git@gitee.com:const-undefined-man/julycms.com-server.git
```

```sh [github]
git clone git@github.com:const-undefined-man/julycms.com-server.git
```

:::

2. 进入目录：`$ cd julycms.com-server`
3. 安装依赖：`$ npm install`
4. 本地启动：`$ npm run start:dev`
5. 访问文档：`http://localhost:3000/api-doc`
6. 访问后台：`http://localhost:8080/console-ui/`

### 错误处理

> 如果遇到 `Authentication plugin ‘caching_sha2_password‘ cannot be loaded` 类似的错误，请按照以下步骤操作

::: code-group

```sh [1.进入mysql容器]
mysql -u root -p你的密码
```

```sh [2.修改认证插件]
# 以下命令逐行执行
use mysql;
SELECT Host, User, plugin from user;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY ‘密码’;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '密码';
FLUSH PRIVILEGES;
```

:::

![进入mysql容器](/docker7.png)
![修改认证插件](/docker8.png)

### 扩展端点API

后端服务提供了console 和 pc 两个端点的API，如果需要增加一个端点的API，比如 微信小程序，则需要手动修改。

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

### 修改配置

:::info 提示
配置文件在`/src/config/*.ts`根据自己的环境修改配置
:::

### api Url

```txt
# www网站API地址
http://localhost:3000/api/pc/

# 管理后台API地址
http://localhost:3000/api/console/

```

## 启动管理后台 UI [julycms.com-console-ui]

> 管理后台前端因为计划的比较早，采用的nodejs v16.x, vue2.x。这里在安装的时候一定要注意。

1. 下载代码：：任选其一
::: code-group

```sh [gitee]
git clone git@gitee.com:const-undefined-man/julycms.com-console-ui.git
```

```sh [github]
git clone git@github.com:const-undefined-man/julycms.com-console-ui.git
```

:::
2. 进入目录：`$ cd julycms.com-console-ui`
3. 切换版本：`$ nvm use 16.13.0` node版本根据自己本地的来。
4. 安装依赖：`$ npm install`
5. 项目启动：`$ npm run serve`
6. 访问地址：`http://localhost:8080`

### 修改配置

```md
各个环境对应的 .env.环境 里面
```

### 打包

```sh
npm run build
```

## PC前台UI项目

> 待完善，持续跟进中。计划采用nuxtJs。
