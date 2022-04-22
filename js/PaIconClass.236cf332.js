(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PaIconClass"],{"9bb5":function(n,e,t){"use strict";t.r(e);var s,i=t("bee2"),a=t("d4ec"),c=t("257e"),l=t("262e"),o=t("2caf"),r=t("ade3"),u=t("8d35"),p=t("2fe1"),d='\x3c!--\n * @Autor: clark tan\n * @Date: 2021-12-21 14:02:53\n * @LastEditors: clark tan\n * @LastEditTime: 2022-01-18 11:16:25\n * @Description: \n--\x3e\n<style>\n  .icon-list{\n    list-style-type: none;\n    list-style-image: none;\n    display:flex;\n    width: 100%;\n    height: 100%;\n    flex: 1;\n    flex-wrap: wrap;\n  }\n  .icon-list li{\n    margin: 16px;\n    flex: 0 0 12%;\n    height: 105px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .icon-list li span{\n    margin-top: 10px;\n    font-size: 14px;\n    text-align: center;\n  }\n  .icon-list li .pa-icon{\n    font-size: 40px;\n  }\n</style>\n# PaIcon 图标\n\n##### 提供了一套常用的图标集合。\n\n#### 1. 使用方法\n\n直接通过设置类名为 name="iconName" 来使用即可。例如：\n\n:::demo\n\n```html\n<template>\n  <ul class="icon-list">\n    <li v-for="name in iconList" :key="name">\n        <pa-icon :name="name" @click="click" />\n        <span>{{name}}</span>\n    </li>\n  </ul>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        iconList: null,\n        url:\'/iconfont.js\'\n      };\n    },\n    mounted(){\n      this.getIcoList(this.url)\n    },\n    methods: {\n      click() {\n        this.$paMessage(\'图标被点击了\');\n      },\n      async getIcoList(url) {\n        const text = await this.getText(url);\n        const reg = /(icon.*?)"/g;\n        const iconList = [];\n        let resultS;\n        while ((resultS = reg.exec(text)) != null) {\n          iconList.push(resultS[1]);\n        }\n        this.iconList = iconList;\n      },\n      getText(url) {\n        return new Promise((resolve) => {\n          const request = new XMLHttpRequest();\n          request.open("GET", url, true);\n          request.send(null);\n          request.onreadystatechange = function () {\n            if (request.readyState === 4 && request.status === 200) {\n              resolve(request.responseText);\n            }\n          };\n        });\n      }\n    },\n  };\n<\/script>\n```\n\n:::\n\n#### 2. 更多图标请访问下面的地址\n\n```\nhttps://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.13&manage_type=myprojects&projectId=2643053&keyword=&project_type=&page=\n```\nps:如果访问不了，联系UI组开通查阅权限\n\n### Attributes\n\n| 参数      | 说明               | 类型   | 可选值 | 默认值 |\n| --------- | ------------------ | ------ | ------ | ------ |\n| svg-class | 添加自定义的 class | String | -      | -      |\n\n### Methods\n\n| 方法名 | 说明     | 参数 |\n| ------ | -------- | ---- |\n| click  | 点击事件 | -    |',m=Object(p["b"])(s=function(n){Object(l["a"])(t,n);var e=Object(o["a"])(t);function t(n){var s;return Object(a["a"])(this,t),s=e.call(this,n),Object(r["a"])(Object(c["a"])(s),"value",d),s}return Object(i["a"])(t)}(u["a"]))||s;e["default"]=m}}]);