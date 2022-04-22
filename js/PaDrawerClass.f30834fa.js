(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PaDrawerClass"],{8711:function(n,e,a){"use strict";a.r(e);var i,t=a("bee2"),r=a("d4ec"),l=a("257e"),o=a("262e"),d=a("2caf"),c=a("ade3"),s=a("8d35"),b=a("2fe1"),p='\x3c!--\n * @Autor: clark tan\n * @Date: 2021-12-21 14:02:53\n * @LastEditors: clark tan\n * @LastEditTime: 2022-01-11 17:17:30\n * @Description: \n--\x3e\n# PaDrawer 抽屉\n\n### 基本用法\n\n:::demo\n\n```html\n<template>\n  <div>\n    <el-radio-group v-model="direction">\n      <el-radio label="ltr">\n        从左往右开\n      </el-radio>\n      <el-radio label="rtl">\n        从右往左开\n      </el-radio>\n      <el-radio label="ttb">\n        从上往下开\n      </el-radio>\n      <el-radio label="btt">\n        从下往上开\n      </el-radio>\n    </el-radio-group>\n    <pa-button type="primary" @click="showDrawer">\n      Open\n    </pa-button>\n    <pa-drawer\n      title="抽屉"\n      :direction="direction"\n      :closable="true"\n      :visible.sync="visible"\n      :confirm-loading="confirmLoading"\n      @ok="handleOK"\n      @cancel="handleCancel"\n    >\n      <div style="margin-top:24px;">\n        hello wrold\n      </div>\n    </pa-drawer>\n  </div>\n</template>\n<script>\n  export default {\n    name: \'PahmDrawer\',\n    data() {\n      return {\n        visible: false,\n        direction: \'rtl\',\n        confirmLoading: false,\n      };\n    },\n    methods: {\n      showDrawer() {\n        this.visible = true;\n      },\n      handleOK() {\n        this.confirmLoading = true;\n        setTimeout(() => {\n          this.visible = false;\n          this.confirmLoading = false;\n        }, 1000);\n      },\n      handleCancel() {\n        this.visible = false;\n      },\n    },\n  };\n<\/script>\n```\n\n:::\n\n',u=Object(b["b"])(i=function(n){Object(o["a"])(a,n);var e=Object(d["a"])(a);function a(n){var i;return Object(r["a"])(this,a),i=e.call(this,n),Object(c["a"])(Object(l["a"])(i),"value",p),i}return Object(t["a"])(a)}(s["a"]))||i;e["default"]=u}}]);