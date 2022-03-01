<!--
 * @Autor: clark tan
 * @Date: 2021-05-24 20:30:56
 * @LastEditors: clark tan
 * @LastEditTime: 2021-05-24 20:37:33
 * @Description: 
-->
<template>
  <div style="width: 100%; height: 100%; padding: 24px">
    <div class="demo-transfer">
      <div class="header-title">
        <h2>基本用法</h2>
        <p>Dialog 弹出一个对话框，适合需要定制性更大的场景</p>
      </div>
      <div class="demo-block">
        <pa-button type="primary" @click="dialogVisible = true">
          点击打开对话框
        </pa-button>
        <pa-dialog
          title="标题"
          :visible.sync="dialogVisible"
          :confirm-loading="confirmLoading"
          @ok="handleOK"
          @cancel="handleCancel"
        >
          这里可以写各种复杂的DOM结构
        </pa-dialog>
      </div>
    </div>
    <div class="demo-transfer">
      <div class="header-title">
        <h2>内嵌表单</h2>
      </div>
      <div class="demo-block">
        <pa-button type="primary" @click="dialogVisibleFrom = true">
          点击打开对话框
        </pa-button>
        <pa-dialog
          title="表单弹窗"
          :visible.sync="dialogVisibleFrom"
          :confirm-loading="confirmLoading"
          :destroy-on-close="true"
          top="100px"
          width="600px"
          @ok="formHandleOK"
          @cancel="formHandleCancel"
        >
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="活动名称" prop="name">
              <pa-input
                :value.sync="ruleForm.name"
                clearable
                placeholder="请输入活动名称"
              />
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
              <pa-select
                :value.sync="ruleForm.region"
                :options="options"
                placeholder="请选择活动区域"
                clearable
              />
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
              <pa-checkbox-group v-model="ruleForm.type">
                <pa-checkbox label="美食/餐厅线上活动" name="type" />
                <pa-checkbox label="地推活动" name="type" />
                <pa-checkbox label="线下主题活动" name="type" />
                <pa-checkbox label="单纯品牌曝光" name="type" />
              </pa-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌商赞助" />
                <el-radio label="线下场地免费" />
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
              <pa-input type="textarea" :value.sync="ruleForm.desc" />
            </el-form-item>
          </el-form>
        </pa-dialog>
      </div>
    </div>
    <p style="color: red">写法举例：跟官方文档一样</p>
    <pre>
      &lt;pa-dialog title="标题" :visible.sync="dialogVisible" :confirmLoading="confirmLoading" @ok="handleOK" @cancel="handleCancel"&gt;
        这里可以写各种复杂的div | form
      &lt;/pa-dialog&gt;
    </pre>
    <pa-table
      :data="dataColumns"
      :columns="columns"
      :show-pager="false"
      height="auto"
    />
  </div>
</template>
<script>
export default {
  name: "PahmDialog",
  data() {
    return {
      dialogVisible: false,
      confirmLoading: false,
      breadcrumbs: [
        {
          path: "/dialog",
          text: "对话框",
        },
      ],
      dialogVisibleFrom: false,
      confirmLoadingFrom: false,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      options: [
        {
          value: "广东",
          label: "广东",
        },
        {
          value: "上海",
          label: "上海",
        },
      ],
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
          name: "title",
          type: "string",
          state: "标题",
          default: "标题",
        },
        {
          name: "visible",
          type: "boolean",
          state: "是否显示 Dialog，支持 .sync 修饰符",
          default: "false",
        },
        {
          name: "width",
          type: "string",
          state: "Dialog 的宽度	",
          default: "400px",
        },
        {
          name: "cancelButtonText",
          type: "string",
          state: "取消按钮文本",
          default: "取消",
        },
        {
          name: "confirmButtonText",
          type: "string",
          state: "确认按钮文本",
          default: "确认",
        },
        {
          name: "footerShow",
          type: "boolean",
          state: "是否显示底部按钮区域",
          default: "true",
        },
        {
          name: "confirmLoading",
          type: "boolean",
          state: "确认按钮加载中状态",
          default: "false",
        },
        {
          name: "fullscreen",
          type: "boolean",
          state: "是否为全屏 Dialog",
          default: "false",
        },
        {
          name: "top",
          type: "string",
          state: "Dialog CSS 中的 margin-top 值",
          default: "15vh",
        },
        {
          name: "modal",
          type: "boolean",
          state: "是否需要遮罩层",
          default: "true",
        },
        {
          name: "modalAppendToBody",
          type: "boolean",
          state:
            "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上",
          default: "true",
        },
        {
          name: "appendToBody",
          type: "boolean",
          state:
            "Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true",
          default: "false",
        },
        {
          name: "lockScroll",
          type: "boolean",
          state: "是否在 Dialog 出现时将 body 滚动锁定",
          default: "true",
        },
        {
          name: "customClass",
          type: "string",
          state: "Dialog 的自定义类名",
          default: "",
        },
        {
          name: "closeOnClickModal",
          type: "boolean",
          state: "是否可以通过点击 modal 关闭 Dialog",
          default: "true",
        },
        {
          name: "closeOnPressEscape",
          type: "boolean",
          state: "是否可以通过按下 ESC 关闭 Dialog",
          default: "true",
        },
        {
          name: "showClose",
          type: "boolean",
          state: "是否显示关闭按钮",
          default: "true",
        },
        {
          name: "beforeClose",
          type: "function(done)，done 用于关闭 Dialog",
          state: "关闭前的回调，会暂停 Dialog 的关闭",
          default: "",
        },
        {
          name: "center",
          type: "boolean",
          state: "关闭前的回调，会暂停 Dialog 的关闭",
          default: "false",
        },
        {
          name: "destroyOnClose",
          type: "boolean",
          state: "关闭时销毁 Dialog 中的元素",
          default: "false",
        },
      ],
    };
  },
  methods: {
    handleOK() {
      this.confirmLoading = true;
      setTimeout(() => {
        this.dialogVisible = false;
        this.confirmLoading = false;
      }, 1000);
    },
    handleCancel() {
      this.dialogVisible = false;
    },
    formHandleOK() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
    formHandleCancel() {
      this.dialogVisibleFrom = false;
    },
  },
};
</script>
