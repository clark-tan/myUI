<template>
  <div>
    <el-radio-group v-model="direction">
      <el-radio label="ltr"> 从左往右开 </el-radio>
      <el-radio label="rtl"> 从右往左开 </el-radio>
      <el-radio label="ttb"> 从上往下开 </el-radio>
      <el-radio label="btt"> 从下往上开 </el-radio>
    </el-radio-group>
    <pa-button type="primary" @click="showDrawer"> Open </pa-button>
    <pa-drawer
      title="抽屉"
      :direction="direction"
      :closable="true"
      :visible.sync="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOK"
      @cancel="handleCancel"
    >
      <div>hello wrold</div>
    </pa-drawer>
    <pre>
      &lt;pa-drawer
        title="抽屉"
        :direction="direction"
        :closable="true"
        :visible.sync="visible"
        :confirm-loading="confirmLoading"
        @ok="handleOK"
        @cancel="handleCancel"
      >
        &lt;div>
          hello wrold
        &lt;/div>
      &lt;/pa-drawer>
    </pre>
    <p style="color: red">跟官方文档一样 新增属性在表格里</p>
    <pa-table
      :data="dataColumns"
      :columns="columns"
      :show-pager="false"
      height="auto"
    />
  </div>
</template>
<script>
import Vue from "vue";
import { Radio, RadioGroup } from "element-ui";
Vue.use(Radio);
Vue.use(RadioGroup);
export default {
  name: "PahmDrawer",
  data() {
    return {
      visible: false,
      direction: "rtl",
      confirmLoading: false,
      columns: [
        {
          field: "name",
          title: "属性名",
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
          name: "confirmLoading",
          type: "boolean",
          state: "确定按钮loading",
          default: "false",
        },
        {
          name: "withFooter",
          type: "boolean",
          state: "显示底部按钮",
          default: "true",
        },
        {
          name: "cancelButtonText",
          type: "string",
          state: "取消按钮文案",
          default: "取消",
        },
        {
          name: "confirmButtonText",
          type: "string",
          state: "确定按钮文案",
          default: "确定",
        },
        {
          name: "@ok",
          type: "function",
          state: "点击确定事件",
          default: "",
        },
        {
          name: "@cancel",
          type: "function",
          state: "点击取消事件",
          default: "",
        },
      ],
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    handleOK() {
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 1000);
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>
