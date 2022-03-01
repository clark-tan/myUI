<style>
  .checkboxCss{
    margin-bottom: -16px;
  }
</style>
# PaDialog 弹窗

### 基本用法

#### Dialog 弹出一个对话框，适合需要定制性更大的场景

:::demo

```html
<template>
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
</template>
<script>
  export default {
    name: 'PahmDialog',
    data() {
      return {
        dialogVisible: false,
        confirmLoading: false,
        breadcrumbs: [
          {
            path: '/dialog',
            text: '对话框',
          },
        ],
        dialogVisibleFrom: false,
        confirmLoadingFrom: false,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          ],
          region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
          date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
          date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' },
          ],
          resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
          desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
        },
        options: [
          {
            value: '广东',
            label: '广东',
          },
          {
            value: '上海',
            label: '上海',
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
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            alert('submit!');
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
```

:::

### 内嵌表单

:::demo

```html
<template>
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
            <pa-input :value.sync="ruleForm.name" clearable placeholder="请输入活动名称" />
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
            <pa-checkbox-group v-model="ruleForm.type" class="checkboxCss">
              <pa-checkbox label="美食/餐厅线上活动" name="type" />
              <pa-checkbox label="地推活动" name="type" />
              <pa-checkbox label="线下主题活动" name="type" />
              <pa-checkbox label="单纯品牌曝光" name="type" />
            </pa-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
            <pa-radio-group v-model="ruleForm.resource">
              <pa-radio label="线上品牌商赞助" />
              <pa-radio label="线下场地免费" />
            </pa-radio-group>
          </el-form-item>
          <el-form-item label="活动形式" prop="desc">
            <pa-input type="textarea" :value.sync="ruleForm.desc" />
          </el-form-item>
        </el-form>
      </pa-dialog>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PahmDialog',
    data() {
      return {
        dialogVisible: false,
        confirmLoading: false,
        breadcrumbs: [
          {
            path: '/dialog',
            text: '对话框',
          },
        ],
        dialogVisibleFrom: false,
        confirmLoadingFrom: false,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          ],
          region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
          date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
          date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' },
          ],
          resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
          desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
        },
        options: [
          {
            value: '广东',
            label: '广东',
          },
          {
            value: '上海',
            label: '上海',
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
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            alert('submit!');
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
```

:::

# Attributes

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | 标题 | 标题 |
| visible | boolean | false | 是否显示 Dialog，支持 .sync 修饰符 |
| width | string | 400px | Dialog 的宽度 |
| cancelButtonText | string | 取消 | 取消按钮文本 |
| confirmButtonText | string | 确认 | 确认按钮文本 |
| footerShow | boolean | true | 是否显示底部按钮区域 |
| confirmLoading | boolean | false | 确认按钮加载中状态 |
| fullscreen | boolean | false | 是否为全屏 Dialog |
| top | string | 15vh | Dialog CSS 中的 margin-top 值 |
| modal | boolean | true | 是否需要遮罩层 |
| modalAppendToBody | boolean | true | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 |
| appendToBody | boolean | false | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true |
| lockScroll | boolean | true | 是否在 Dialog 出现时将 body 滚动锁定 |
| customClass | string | - | Dialog 的自定义类名 |
| closeOnClickModal | boolean | true | 是否可以通过点击 modal 关闭 Dialog |
| closeOnPressEscape | boolean | true | 是否可以通过按下 ESC 关闭 Dialog |
| showClose | boolean | true | 是否显示关闭按钮 |
| beforeClose | function(done)，done 用于关闭 Dialog |  | 关闭前的回调，会暂停 Dialog 的关闭 |
| center | boolean | false | 关闭前的回调，会暂停 Dialog 的关闭 |
| destroyOnClose | boolean | false | 关闭时销毁 Dialog 中的元素 |
