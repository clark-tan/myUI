<!--
 * @Autor: clark tan
 * @Date: 2021-12-21 14:02:53
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-18 11:16:25
 * @Description: 
-->
<style>
  .icon-list{
    list-style-type: none;
    list-style-image: none;
    display:flex;
    width: 100%;
    height: 100%;
    flex: 1;
    flex-wrap: wrap;
  }
  .icon-list li{
    margin: 16px;
    flex: 0 0 12%;
    height: 105px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon-list li span{
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
  }
  .icon-list li .pa-icon{
    font-size: 40px;
  }
</style>
# PaIcon 图标

##### 提供了一套常用的图标集合。

#### 1. 使用方法

直接通过设置类名为 name="iconName" 来使用即可。例如：

:::demo

```html
<template>
  <ul class="icon-list">
    <li v-for="name in iconList" :key="name">
        <pa-icon :name="name" @click="click" />
        <span>{{name}}</span>
    </li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        iconList: null,
        url:'/iconfont.js'
      };
    },
    mounted(){
      this.getIcoList(this.url)
    },
    methods: {
      click() {
        this.$paMessage('图标被点击了');
      },
      async getIcoList(url) {
        const text = await this.getText(url);
        const reg = /(icon.*?)"/g;
        const iconList = [];
        let resultS;
        while ((resultS = reg.exec(text)) != null) {
          iconList.push(resultS[1]);
        }
        this.iconList = iconList;
      },
      getText(url) {
        return new Promise((resolve) => {
          const request = new XMLHttpRequest();
          request.open("GET", url, true);
          request.send(null);
          request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
              resolve(request.responseText);
            }
          };
        });
      }
    },
  };
</script>
```

:::

#### 2. 更多图标请访问下面的地址

```
https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.13&manage_type=myprojects&projectId=2643053&keyword=&project_type=&page=
```
ps:如果访问不了，联系UI组开通查阅权限

### Attributes

| 参数      | 说明               | 类型   | 可选值 | 默认值 |
| --------- | ------------------ | ------ | ------ | ------ |
| svg-class | 添加自定义的 class | String | -      | -      |

### Methods

| 方法名 | 说明     | 参数 |
| ------ | -------- | ---- |
| click  | 点击事件 | -    |