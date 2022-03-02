<!--
 * @Autor: clark tan
 * @Date: 2021-06-22 19:12:48
 * @LastEditors: clark tan
 * @LastEditTime: 2022-03-02 09:29:52
 * @Description: 
-->
# @tyc/common-ui-vue

## Project setup

项目根目录新增本地配置.npmrc文件
添加一下配置：
registry=https://registry.npm.taobao.org
; 为作用域包设置私服地址
@yourserver:registry=http://yourIP:port/
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Project push 发布npm包需要进行以下步骤
```
npm set registry http://yourIP:port/

name:servername
pwd:serverpwd
email:serveremail
```

### 1、构建npm包文件

```
//更新package.json的version版本号
npm run build-npm
```

### 2、推送npm包
```
npm run push
```

### 3、查阅是否上传成功
```
登陆此网址： http://yourIP:port/
查看是否上传了对应版本
```