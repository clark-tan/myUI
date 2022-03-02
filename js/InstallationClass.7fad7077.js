(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["InstallationClass"],{ba9a:function(n,t,a){"use strict";a.r(t);var e,r=a("bee2"),i=a("d4ec"),c=a("257e"),s=a("262e"),o=a("2caf"),m=a("ade3"),p=a("8d35"),u=a("2fe1"),b="\x3c!--\n * @Autor: clark tan\n * @Date: 2021-12-21 14:02:53\n * @LastEditors: clark tan\n * @LastEditTime: 2022-01-05 16:41:28\n * @Description: \n--\x3e\n# 安装\n\n### 1.全局配置内网仓库源\n\n```\nnpm config set registry registry=http://124.196.4.70:8873/\n```\n\n### 2.局部配置仓库源\n\n项目根目录新增本地配置.npmrc文件\n添加一下配置：\nregistry=https://registry.npm.taobao.org\n; 为作用域包设置私服地址\n@pahm:registry=http://124.196.4.70:8873/\n```\nyarn install\n```\n\n### 3. npm 安装\n\n推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。\n\n```js\n\nnpm i @pahm/common-ui -S -D\n```\n\n### 4. 在项目中使用\n\n```js\nimport PaUI from '@pahm/common-ui';\nimport '@pahm/common-ui/dist/@pahm/common-ui.css';\nVue.use(PaUI);\n```\n",h=Object(u["b"])(e=function(n){Object(s["a"])(a,n);var t=Object(o["a"])(a);function a(n){var e;return Object(i["a"])(this,a),e=t.call(this,n),Object(m["a"])(Object(c["a"])(e),"value",b),e}return Object(r["a"])(a)}(p["a"]))||e;t["default"]=h}}]);