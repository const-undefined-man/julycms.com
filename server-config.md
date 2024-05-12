# 服务器配置手册

这里默认认为你已经有了一台服务器，如果没有，可以购买一台，[阿里云99上云活动](https://www.aliyun.com/benefit?spm=5176.28508143.0.0.23e6154a6jrqjo&scm=20140722.M_10244282._.V_1)很适合你。

如果你想在本地虚拟机尝试，可以下载VMware Fusion, 或者使用Vagrant。下载centOs或者rocky linux 镜像。centos和rocky linux 几乎可以平滑切换。

本章配置均是在Rocky Linux 9.3 64位上进行。为什么不用centOs？老哥，centOs不维护了。

:::warning ⚠️⚠️⚠️免责声明
以下配置均是基础配置，仅供参考和学习使用，出现问题，本站概不负责！！！
::::

## 🧒添加新用户，并给一个sudo权限

新系统，一般是root账户登录。

```sh
# 添加新用户
useradd your_username
# 设置新用户密码
passwd your_username

# 添加sudo权限
vim /etc/sudoers
# 找到 root ALL=(ALL) ALL 这一行，在其下面添加一行：
your_username ALL=(ALL) ALL
```

## 🔐禁用root账户ssh登录，更改ssh端口

为什么这两个操作在一起呢，因为修改的文件是同一个😋。

```sh
# 禁用root账户登录
# 打开sshd_config文件
vim /etc/ssh/sshd_config
# 找到 PermitRootLogin 这一行，如果存在，将其设置为 no；如果不存在，可以在文件中适当位置添加：
PermitRootLogin no

# 修改ssh端口号，还是sshd_config这个文件
# 找到 Port 这一行，将其设置为 2222；也可以设置其他的，保证端口未被占用
Port 2222

# 最后重启ssh服务
systemctl restart sshd.service
```

## 🔑禁用密码登录，使用密钥登录【根据自己情况】

如果你觉的密码登录不安全，可以禁用密码登录。

```sh
# 在本机生成密钥
ssh-keygen -t xxx_rsa
# 复制公钥到服务器
ssh-copy-id -i ~/.ssh/id_xxx_rsa.pub your_username@your_server_ip -p 2222
# 将公钥上传到服务器上的新用户家目录下的`authorized_keys`文件中：
cat ~/.ssh/id_xxx_rsa.pub >> ~/.ssh/authorized_keys

# 打开sshd_config文件
vim /etc/ssh/sshd_config
# 找到 PasswordAuthentication 这一行，将其设置为 no；
PasswordAuthentication no
PublicKeyAuthentication yes

# 重启ssh服务
systemctl restart sshd.service
```

## 🔥配置防火墙

```sh
# 启动firewalld
systemctl start firewalld
# 设置firewalld开机自启
systemctl enable firewalld
# 添加一个自定义服务
firewall-cmd --permanent --new-service=web-alt
# 开放ssh端口
firewall-cmd --permanent --service=web-alt --add-port=2222/tcp
# 开放80端口
firewall-cmd --permanent --service=web-alt --add-port=80/tcp
# 开放443端口 如果你设置了ssl证书可以开启，如果没有设置，可以忽略
firewall-cmd --permanent --service=web-alt --add-port=443/tcp
# 重新加载firewalld
firewall-cmd --reload
# 查看状态
systemctl status firewalld
```

看到下面的结果就说明配置成功了。
![firewall](/firewalld.png)

## 😌rocky linux安装fail2ban，防止暴力破解ssh

```sh
## 更新系统
dnf update -y
dnf install epel-release -y
# 安装fail2ban软件包
dnf install fail2ban -y
# 启动fail2ban服务
systemctl start fail2ban
# 设置fail2ban服务开机自启
systemctl enable fail2ban
# 查看fail2ban状态
systemctl status fail2ban
```

看到下面的结果就说明配置成功了。
![fail2ban](/fail2ban.png)

## 😯简易安装nginx

```sh
# 安装nginx
dnf install nginx -y
# 启动nginx服务
systemctl start nginx
# 设置nginx服务开机自启
systemctl enable nginx
```

## 6⃣️ 配置SSL

🔥 一行命令，一分钟轻松搞定SSL证书自动续期

✅ 快速开始：<https://httpsok.com/doc/guide/quickstart.html>

✅ 控制台地址：<https://httpsok.com/?p=4fi3>

## ☁️设置云的安全组规则

当你配置完了，发现网站访问不了，检查一下服务器的安全组，保障上面开启的端口是开放的。比如：2222端口，80端口，443端口。

![安全组规则](/aqz-1.png)
![安全组规则](/aqz-2.png)

## 🤔还是没有安全感？？？

装一个蜜罐🍯，诶，就是玩儿😁... <https://hfish.net/#/>

> 如果你按照官方文档内容配置了，访问不了，那么记得配置防火墙和安全组规则。

在本地搭一个资产管理系统 <https://github.com/TophantTechnology/ARL>
