# 定义变量
ARG NODE_VERSION=20.10.0

# build stage
FROM node:${NODE_VERSION}-alpine as build-stage

# 设置工作目录
WORKDIR /app

# 将应用代码复制到容器内
COPY . .

# 安装vitepress
RUN npm add -D vitepress

# 运行构建命令
RUN npm run docs:build


# production stage
FROM nginx:stable as production-stage

# 设置工作目录
WORKDIR /usr/share/nginx/html/julycms.com

# 从构建阶段复制构建产物到新的镜像
COPY --from=build-stage /app/.vitepress/dist .
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

# 曝露端口
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
