<!--
 * @Autor: clark tan
 * @Date: 2021-06-22 19:12:48
 * @LastEditors: clark tan
 * @LastEditTime: 2021-12-27 15:47:42
 * @Description: 
-->
# @pahm/common-ui-vue

## Project setup

项目根目录新增本地配置.npmrc文件
添加一下配置：
registry=https://registry.npm.taobao.org
; 为作用域包设置私服地址
@pahm:registry=http://124.196.4.70:8873/
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
npm set registry http://124.196.4.70:8873/

name:pahm
pwd:123
email:pahm@pingan.com.cn
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
登陆此网址： http://124.196.4.70:8873/
查看是否上传了对应版本
```