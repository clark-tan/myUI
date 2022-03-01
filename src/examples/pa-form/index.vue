<!--
*   Copyright (c) 2021,xxxx.
*   All rights reserved.
*
*   Author: wanlicheng
-->
<template>
  <div>
    <pa-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <pa-form-item label="活动名称" prop="name">
        <pa-input v-model="ruleForm.name" />
      </pa-form-item>
      <pa-form-item label="活动区域" prop="region">
        <pa-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <pa-option label="区域一" value="shanghai" />
          <pa-option label="区域二" value="beijing" />
        </pa-select>
      </pa-form-item>

      <pa-form-item label="活动形式" prop="desc">
        <pa-input v-model="ruleForm.desc" type="textarea" />
      </pa-form-item>
      <pa-form-item>
        <pa-button type="primary" @click="submitForm('ruleForm')">
          立即创建
        </pa-button>
        <pa-button @click="resetForm('ruleForm')"> 重置 </pa-button>
      </pa-form-item>
    </pa-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
