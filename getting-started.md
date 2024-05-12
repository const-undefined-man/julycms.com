# 快速开始

## 后端服务 [julycms.com-server]

> 后端项目node版本要求`node>=20.x`, mysql版本要求`mysql>=8.0`，其余依赖包请看`package.json`

:::info
后端服务配置docker-compose.yml文件，可以一键启动服务，也可以管理后台UI和后端服务代码单独下载，单独启动。
:::

1. 下载代码：任选其一

- gitee：`$ git clone git@gitee.com:const-undefined-man/julycms.com-server.git`
- github：`$ git clone git@github.com:const-undefined-man/julycms.com-server.git`

2. 进入目录：`$ cd julycms.com-server`
3. 安装依赖：`$ npm install`
4. 一键启动：`$ docker-compose up -d` 如果想一键启动，可以只下载后端服务代码
5. 访问文档：`http://localhost:3000/api-doc`
6. 访问后台：`http://localhost:8080/console`
7. PC：`http://localhost`

### 扩展端点API

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

:::info
配置文件在`/src/config/*.ts`根据自己的环境修改配置
:::

### 单独启动项目

【具体命令请看`package.json`scripts节点配置的命令，也可以根据自己的情况修改】。需要单独启动mysql和redis。

```sh
npm run start:dev
```

### api Url

```md
# www网站API地址
http://localhost:3000/api/pc/

# 管理后台API地址
http://localhost:3000/api/console/

```

## 管理后台 UI [julycms.com-console-ui]

> 管理后台前端因为计划的比较早，采用的nodejs v16.x, vue2.x。这里在安装的时候一定要注意。

1. 下载代码：：任选其一

- gitee：`$ git clone git@gitee.com:const-undefined-man/julycms.com-console-ui.git`
- github：`$ git clone git@github.com:const-undefined-man/julycms.com-console-ui.git`

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
