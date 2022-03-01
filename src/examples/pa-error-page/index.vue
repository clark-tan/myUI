<template>
  <div>
    <div class="pahmErrorPage">
      <pa-error-page type="404" />
    </div>
    <div class="pahmErrorPage">
      <pa-error-page type="403" />
    </div>
    <div class="pahmErrorPage">
      <pa-error-page type="500" />
    </div>

    <div class="pahmErrorPage">
      <pa-error-page
        type="no-data"
        message="这是暂无数据"
        :img-style="{ border: '1px solid red' }"
        :msg-style="{ color: 'red' }"
      />
    </div>

    <div class="pahmErrorPage">
      <pa-error-page type="302" message="这是自定义错误">
        <pa-button slot="foot"> 返回上一页 </pa-button>
      </pa-error-page>
    </div>

    <div class="msg-oprator">
      <h2>基本用法</h2>
      <div v-text="text" />
      <br />
      <h2>Attributes</h2>
      <a-table
        :columns="columns"
        :data-source="dataSource"
        :pagination="false"
      />
    </div>
  </div>
</template>
<script>
const dataSource = [
  {
    param: "type",
    des: "表示错误的显示页面信息",
    type: "String",
    selects: "404/403/500",
    default: "404",
  },
];
export default {
  name: "PahmErrorPage",
  data() {
    return {
      text: ` <pa-error-page type="500" />`,
      columns: [
        {
          title: "参数",
          dataIndex: "param",
          key: "param",
        },
        {
          title: "说明",
          dataIndex: "des",
          key: "des",
        },
        {
          title: "类型",
          dataIndex: "type",
          key: "type",
        },
        {
          title: "可选值",
          dataIndex: "selects",
          key: "selects",
        },
        {
          title: "默认值",
          dataIndex: "default",
          key: "default",
        },
      ],
      dataSource,
    };
  },
};
</script>
<style lang="less" scope>
.pahmErrorPage {
  width: 1000px;
  height: 800px;
  margin: 50px;
  border: 1px solid #000;
  padding: 20px;

  & > div.pa-errorPage {
    margin-top: 20px;
  }
}

.msg-oprator {
  padding: 0 70px;
}
</style>
