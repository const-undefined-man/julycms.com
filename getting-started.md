# 快速开始

## 后端项目

> 后端项目node版本要求`node>=18.x`, mysql版本要求`mysql>=8.0`，其余依赖包请看`package.json`

### 下载

```sh
git clone 仓库地址
```

### 安装依赖

```sh
npm install
```

### 修改配置

:::info
配置文件在`/config/*.ts`根据自己的环境修改配置
:::

### 启动项目

【具体命令请看`package.json`scripts节点配置的命令，也可以根据自己的情况修改】

```sh
npm run start:july-cms:dev
```

### api Url

```md
# www网站API地址
http://localhost:3000/api/doc

# 管理后台API地址
http://localhost:3001/api/doc

# 微信小程序API地址
http://localhost:3002/api/doc
```

## 管理后台项目

> 管理后台项目node版本要求`node>=16.x`, 其余依赖包请`package.json`

### 下载

```sh
git clone 仓库地址
```

### 安装依赖

```sh
npm install
```

### 修改配置

```md
各个环境对应的 .env.环境 里面
```

### 启动项目

【具体命令请看`package.json`scripts节点配置的命令，也可以根据自己的情况修改】

```sh
npm run serve
```

### 打包

```sh
npm run build
```
