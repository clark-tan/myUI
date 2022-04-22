(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PaLoadingClass"],{"3c62":function(n,e,a){"use strict";a.r(e);var t,l=a("bee2"),d=a("d4ec"),i=a("257e"),c=a("262e"),s=a("2caf"),o=a("ade3"),r=a("8d35"),u=a("2fe1"),b="# PaLoading 加载中\n\n### 基本用法\n\n\n:::demo\n\n```html\n<template>\n  <div>\n    <pa-button @click=\"handlerClick\">\n      服务方式loading...\n    </pa-button>\n    <pa-button v-loading.fullscreen.lock=\"fullscreenLoading\" @click=\"handlerClick1\">\n      指令方式loading...\n    </pa-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Index',\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄',\n          },\n        ],\n        fullscreenLoading: false,\n      };\n    },\n    methods: {\n      handlerClick1() {\n        this.fullscreenLoading = true;\n        setTimeout(() => {\n          this.fullscreenLoading = false;\n        }, 2000);\n      },\n      handlerClick() {\n        const loading = this.$loading({\n          lock: true,\n          text: 'Loading123',\n          // spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)',\n          // size:'small',\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      },\n    },\n  };\n<\/script>\n```\n\n:::\n",g=Object(u["b"])(t=function(n){Object(c["a"])(a,n);var e=Object(s["a"])(a);function a(n){var t;return Object(d["a"])(this,a),t=e.call(this,n),Object(o["a"])(Object(i["a"])(t),"value",b),t}return Object(l["a"])(a)}(r["a"]))||t;e["default"]=g}}]);