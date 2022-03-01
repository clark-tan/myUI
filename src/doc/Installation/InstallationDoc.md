<!--
 * @Autor: clark tan
 * @Date: 2021-12-21 14:02:53
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-05 16:41:28
 * @Description: 
-->
# 安装

### 1.全局配置内网仓库源

```
npm config set registry registry=http://124.196.4.70:8873/
```

### 2.局部配置仓库源

项目根目录新增本地配置.npmrc文件
添加一下配置：
registry=https://registry.npm.taobao.org
; 为作用域包设置私服地址
@pahm:registry=http://124.196.4.70:8873/
```
yarn install
```

### 3. npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```js

npm i @pahm/common-ui -S -D
```

### 4. 在项目中使用

```js
import PaUI from '@pahm/common-ui';
import '@pahm/common-ui/dist/@pahm/common-ui.css';
Vue.use(PaUI);
```
