# 部署

这章将模拟一个完成的网站开发场景，快速帮助熟悉julycms。如果你是老选手，可以直接使用docker compose 一键部署。

现在接了一个私活，需要开发一个网站，需要一个PC端，管理后台，后端接口服务，那么使用julycms有两种方式：

1. 直接使用julycms的docker compose一键部署
2. 定制开发后，自行部署上线

## 直接使用julycms的docker compose一键部署

> 一键部署适合简单的，不需要定制开发的场景。且部署步骤都是按照Rocky linux系统来的。

### 下载

这里默认认为服务器已经安装了git。

```sh
  # gitee
  git clone https://gitee.com/const-undefined-man/julycms.com

  # github
  git clone https://github.com/const-undefined-man/julycms.com
```

如果没有安装git，也可以使用wget直接下载zip包，然后解压

```sh
  # gitee
  wget https://gitee.com/const-undefined-man/julycms.com-server/repository/archive/master.zip

  # github
  wget https://github.com/const-undefined-man/julycms.com-server/archive/refs/heads/master.zip

  # 解压
  unzip master.zip
```

### 创建Dockerfile

> 项目已经创建好了，如果需要变更，请自行修改

```dockerfile
ARG NODE_VERSION=20.10.0

# build satge
FROM node:${NODE_VERSION}-alpine as build-stage

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm ci

COPY . .

RUN npm run build

# production stage
FROM node:${NODE_VERSION}-alpine as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json
COPY --from=build-stage /app/package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm install --omit=dev

RUN npm install pm2 -g

EXPOSE 3000

CMD ["pm2-runtime", "/app/main.js"]
```

### 创建docker-compose.yml

> 项目已经创建好了，如果需要变更，请自行修改

```yaml
version: '3.8'
services:
  console-ui:
    image: 20230709/julycms-console-ui:1.0.0
    ports:
      - 82:80
    depends_on:
      - api-server
    networks:
      - julycms-network
  api-server:
    build:
      context: ./
      dockerfile: ./Dockerfile
    ports:
      - '3000:3000'
    environment:
      NODE_ENV: 'prod'
    depends_on:
      - mysql-server
      - redis-server
    networks:
      - julycms-network
  mysql-server:
    image: mysql
    ports:
      - 3306:3306
    volumes:
      - /Users/sole/docker/mysql:/var/lib/mysql
    environment:
      - MYSQL_DATABASE=julyCms
      - MYSQL_ROOT_PASSWORD=123123123
    networks:
      - julycms-network
  redis-server:
    image: redis:alpine3.19
    volumes:
      - /Users/sole/docker/redis:/data
    networks:
      - julycms-network
networks:
  julycms-network:
    driver: bridge
```

:::info
注意：docker-compose.yml中的services节点没有PC的服务，后续更新后，会维护进去。如果你已经迫不及待了，可以自行添加，示例代码如下：
:::

```yaml
version: '3.8'
services:
  pc-ui:
    image: 这里填写自己的镜像地址
    ports:
      - 81:80
    depends_on:
      - api-server
    networks:
      - julycms-network
```

### 启动

```sh
# 进入目录
cd julycms.com-server
# 如果启动失败，可以多次尝试
docker compose up -d
# 查看启动的镜像
docker ps
# 如果PC端、管理后台、服务端、mysql、redis都启动了，那么恭喜你，你已经部署成功了！🎉🎉🎉
```

### nginx 配置

```nginx
 server {
    ...

    # 代理PC前台
    location / {
        proxy_pass http://localhost:81;
    }

    # 代理管理后台
    location /console-ui {
        proxy_pass http://localhost:82;
    }

    ...
}
```

### 访问

此时你已经可以访问了，地址如下：

- PC端：<http://julycms.com>
- 管理后台：<http://julycms.com/console-ui>

## 定制开发后，自行部署上线

### 下载

1. 下载PC端代码 [gitee](https://gitee.com/const-undefined-man/julycms.com-pc-ui) | [github](https://github.com/const-undefined-man/julycms.com-pc-ui)
2. 下载管理后台代码 [gitee](https://gitee.com/const-undefined-man/julycms.com-console-ui) | [github](https://github.com/const-undefined-man/julycms.com-console-ui)
3. 下载后端服务代码 [gitee](https://gitee.com/const-undefined-man/julycms.com-server) | [github](https://github.com/const-undefined-man/julycms.com-server)

### 本地开发

本地开发省略....

### 打包镜像，并发布到指定服务器

系统默认的镜像是发布到`hub.docker.com`官网的，可以自己发布到自己的镜像仓库，现在云上有免费的镜像仓库

这里演示如何打包镜像到官网，记得本地启动docker服务

```sh
# 进入目录
cd julycms.com-pc-ui
# 打包镜像
docker build -t 你的账号/julycms-pc-ui:1.0.0 .
# 登录到docker官网
docker login
# 发布镜像
docker push 你的账号/julycms-pc-ui:1.0.0
```

### 部署

如果服务器有git，你可以吧你的代码提交到git仓库，然后服务器上拉取代码，进入到目录，然后执行`docker-compose up -d`即可。

如果没有安装git，可以使用scp 或者 wget 等方式，总是办法很多，在服务器开启ftp服务也可以的。

scp 示例命令：

```sh
# 上传代码
scp -P 2222 julycms.com-server.zip root@服务器ip:/root/julycms.com-server
# 登录服务器
ssh root@服务器ip
# 解压
unzip julycms.com-server.zip
# 进入目录
cd /julycms.com-server
# 启动
docker compose up -d
```
