import{_ as s,c as a,o as i,a5 as n,a7 as e}from"./chunks/framework.tzUHMcfZ.js";const g=JSON.parse('{"title":"JulyCms是什么","description":"","frontmatter":{},"headers":[],"relativePath":"what-is-julycms.md","filePath":"what-is-julycms.md"}'),t={name:"what-is-julycms.md"},l=n(`<h1 id="julycms是什么" tabindex="-1">JulyCms是什么 <a class="header-anchor" href="#julycms是什么" aria-label="Permalink to &quot;JulyCms是什么&quot;">​</a></h1><p>JulyCms 是一个基于nestjs+typeorm+vue快速搭建web应用程序的开源框架。</p><h2 id="后端架构" tabindex="-1">后端架构 <a class="header-anchor" href="#后端架构" aria-label="Permalink to &quot;后端架构&quot;">​</a></h2><p>底层框架 <a href="https://nestjs.com/" target="_blank" rel="noreferrer">Nestjs</a>, 数据库 <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">mysql</a>, 缓存 <a href="https://redis.io/" target="_blank" rel="noreferrer">redis</a>，ORM <a href="https://typeorm.io/" target="_blank" rel="noreferrer">TypeOrm</a>，日志 <a href="https://github.com/winstonjs/winston" target="_blank" rel="noreferrer">winston</a> 等。</p><h3 id="主要文件结构" tabindex="-1">主要文件结构 <a class="header-anchor" href="#主要文件结构" aria-label="Permalink to &quot;主要文件结构&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- julycms.com-server/src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- apis                    // 应用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |   |-- console             // 管理后台API</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |   |-- july-cms            // www站点API</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- config                  // 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- modules                 // 模块</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- main.ts                 // 入口文件</span></span></code></pre></div><h3 id="实现功能" tabindex="-1">实现功能 <a class="header-anchor" href="#实现功能" aria-label="Permalink to &quot;实现功能&quot;">​</a></h3><p>✅ 站点设置 ✅ 模型管理 ✅ 敏感词管理</p><p>✅ 栏目管理 ✅ 内容管理 ✅ 标签管理 ✅ 碎片管理 ✅ 附件单管理</p><p>✅ 管理员管理 ✅ 角色设置 ✅ 后台菜单 ✅ 字典管理 ✅ 操作日志</p><h2 id="前端架构" tabindex="-1">前端架构 <a class="header-anchor" href="#前端架构" aria-label="Permalink to &quot;前端架构&quot;">​</a></h2><p>前端使用<a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer">Vue全家桶</a>框架，UI库<a href="https://element.eleme.cn/#/zh-CN" target="_blank" rel="noreferrer">ElementUI</a>，axios请求<a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">axios</a>。</p><h3 id="后台页面展示" tabindex="-1">后台页面展示 <a class="header-anchor" href="#后台页面展示" aria-label="Permalink to &quot;后台页面展示&quot;">​</a></h3><p><img src="`+e+`" alt="后台"></p><h3 id="管理后台文件结构" tabindex="-1">管理后台文件结构 <a class="header-anchor" href="#管理后台文件结构" aria-label="Permalink to &quot;管理后台文件结构&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- julycms-console/src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- api                     // 应用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |   |-- content             // 内容模块</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |   |-- system              // 系统管理模块</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |   |-- common.js           // 公共接口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |   |-- index.js            // 入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- assets                  // 静态资源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- components              // 自定义组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |   |-- common              // 公共组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |   |-- leyout              // 布局组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |   |-- section             // 模块内组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |   |-- index.js            // 组件入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- directive               // 指令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- libs                    // 全局挂载属性 &amp; 三方库挂载</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- mixins                  // 混入文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- pages                   // 页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- touter                  // 路由</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    |-- store                   // 状态管理</span></span></code></pre></div>`,16),p=[l];function r(h,o,E,c,k,d){return i(),a("div",null,p)}const u=s(t,[["render",r]]);export{g as __pageData,u as default};
