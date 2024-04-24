# JulyCms是什么

JulyCms 是一个基于nestjs+typeorm+vue快速搭建web应用程序的开源框架。

## 后端架构

底层框架 [Nestjs](https://nestjs.com/), 数据库 [mysql](https://www.mysql.com/), 缓存 [redis](https://redis.io/)，ORM [TypeOrm](https://typeorm.io/)，日志 [winston](https://github.com/winstonjs/winston)。

![逻辑](/lj.png)

### 文件结构

``` md
|-- julycms-backend
    |-- apps                    // 应用
    |   |-- console             // 管理后台API
    |   |-- july-cms            // www站点API
    |   |-- weixin-mp           // 微信小程序API
    |-- config                  // 配置
    |-- libs                    // 资源库
    |   |-- common              // 公共资源
    |   |-- modules             // 公共模块
    |-- logs                    // 日志
    |-- static                  // 静态资源
    |-- types                   // 类型声明
    |-- uploads                 // 附件上传目录
    |-- views                   // 视图
```

### 实现功能

✅ 站点设置     ✅ 模型管理     ✅ 敏感词管理

✅ 栏目管理     ✅ 内容管理     ✅ 标签管理     ✅ 碎片管理     ✅ 附件单管理

✅ 管理员管理   ✅ 角色设置     ✅ 后台菜单     ✅ 字典管理     ✅ 操作日志

## 前端架构

前端使用[Vue全家桶](https://cn.vuejs.org/)框架，UI库[ElementUI](https://element.eleme.cn/#/zh-CN)，axios请求[axios](https://github.com/axios/axios)。

### 后台页面展示

![后台](/admin.png)

### 管理后台文件结构

``` md
|-- julycms-console/src
    |-- api                     // 应用
    |   |-- content             // 内容模块
    |   |-- system              // 系统管理模块
    |   |-- common.js           // 公共接口
    |   |-- index.js            // 入口文件
    |-- assets                  // 静态资源
    |-- components              // 自定义组件
    |   |-- common              // 公共组件
    |   |-- leyout              // 布局组件
    |   |-- section             // 模块内组件
    |   |-- index.js            // 组件入口文件
    |-- directive               // 指令
    |-- libs                    // 全局挂载属性 & 三方库挂载
    |-- mixins                  // 混入文件
    |-- pages                   // 页面
    |-- touter                  // 路由
    |-- store                   // 状态管理
```
