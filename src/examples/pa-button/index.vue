<!--
 * @Autor: clark tan
 * @Date: 2021-05-24 20:30:56
 * @LastEditors: clark tan
 * @LastEditTime: 2021-06-30 18:03:42
 * @Description: 
-->
<template>
  <div style="width: 100%; height: 100%; padding: 24px">
    <pa-button type="primary" @click="testClick"> 提交 </pa-button>
    <pa-button>删除</pa-button>
    <pa-button :loading="true" type="primary"> 加载中... </pa-button>
    <pa-button icon-name="icon-bianji" type="primary"> 编辑 </pa-button>
    <pa-button icon-name="icon-cuowu" type="primary" :disabled="true">
      禁用
    </pa-button>
    <pa-button icon-name="icon-shanchu"> 删除 </pa-button>
    <pa-button icon-name="icon-shanchu" :disabled="true"> 删除 </pa-button>
    <pa-button type="primary-text"> 文字按钮 </pa-button>
    <pa-button type="primary-text" disabled> 文字按钮 </pa-button>
    <pa-button type="text"> 文字按钮 </pa-button>
    <pa-button type="info-text"> 文字按钮 </pa-button>
    <div style="width: 100%">
      <p style="font-size: 24px; margin-top: 24px">API</p>
      <pa-table
        :data="dataColumns"
        :columns="columns"
        :show-pager="false"
        height="auto"
      />
      <p style="font-size: 24px; margin-top: 24px">事件</p>
      <pa-table
        :data="dataColumnsEvents"
        :columns="columnsEvents"
        :show-pager="false"
        height="auto"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "PahmButton",
  data() {
    return {
      columns: [
        {
          title: "属性名",
          field: "name",
        },
        {
          title: "类型",
          field: "type",
        },
        {
          title: "默认值",
          field: "default",
        },
        {
          title: "说明",
          field: "state",
        },
      ],
      dataColumns: [
        {
          name: "type",
          type: "String",
          state:
            "按钮类型: primary, success, info, wraning, danger, primary-text, text",
          default: "",
        },
        {
          name: "loading",
          type: "Boolean",
          state: "",
          default: "false",
        },
        {
          name: "iconName",
          type: "String",
          state: '举例: icon-name="icon-shanchu"',
          default: "",
        },
      ],
      columnsEvents: [
        {
          title: "事件名称",
          field: "name",
        },
        {
          title: "说明",
          field: "state",
        },
        {
          title: "回调参数",
          field: "params",
        },
      ],
      dataColumnsEvents: [
        {
          name: "click",
          state: "点击按钮时的回调",
          params: "(event) => void",
        },
      ],
    };
  },
  methods: {
    testClick() {
      alert("click");
    },
  },
};
</script>
