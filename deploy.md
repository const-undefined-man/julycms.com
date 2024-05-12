# 部署

管理后台console-ui有打包好的镜像在hub.docker.com；后端服务有配置的docker-compose.yml，支持docker-compose一键部署。

## 使用docker-compose部署

 > 服务器配置就不多废话了，2核2G3M带宽跑得动，阿里云只要99😁

### 安装docker

> 各个服务商都有文档，这里就不多说了,可以自行取官网查找文档

[阿里云](https://help.aliyun.com/zh/ecs/use-cases/deploy-and-use-docker-on-alibaba-cloud-linux-2-instances?spm=5176.21213303.J_qCOwPWspKEuWcmp8qiZNQ.21.3f8e2f3dtTC3Bf&scm=20140722.S_help@@%E6%96%87%E6%A1%A3@@51853._.ID_help@@%E6%96%87%E6%A1%A3@@51853-RL_centos7%E5%AE%89%E8%A3%85docker-LOC_llm-OR_ser-V_3-RE_new3-P0_0)、
[腾讯云](https://cloud.tencent.com/document/product/1207/45596)、
[华为云](https://support.huaweicloud.com/bestpractice-ecs/zh-cn_topic_0141067581.html)、
[百度云](https://cloud.baidu.com/doc/BCC/s/nkg8s52bt)、
[京东云](https://docs.jdcloud.com/cn/iavm/mdocker)、
[AWS](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-docker.html)

### 安装git

安装git的目的是拿到代码，如果不想安装git，也可以通过scp命令吧代码上传到服务器。具体安装过程略过。

如果不想安装git可以通过wget下载 。

### 启动

```bash
# 需要换成自己的仓库地址
git clone git@github.com:const-undefined-man/julycms.com-server.git

# 进入目录
cd julycms.com-server

# docker启动
docker-compose up -d
```

## 其他部署方式

待更新！需要可持续集成部署的小伙伴可以[反馈](/feedback)

## 关于多个服务的说明

julycms.com-server启动的是3000端口，管理后台julycms.com-console-ui用的是80端口，PC前台用的也是80端口，这里需要一个中间服务做代理。以下是各种服务器的配置。

### nginx

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

### apache

```bash
<VirtualHost *:80>
    ServerName julycms.com

    # 代理PC前台
    ProxyPass / http://localhost:81/
    ProxyPassReverse / http://localhost:81/

    # 代理管理后台
    ProxyPass /console-ui http://localhost:82/
    ProxyPassReverse /console-ui http://localhost:82/

    ...
</VirtualHost>
```
