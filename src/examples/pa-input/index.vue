<template>
  <div>
    <pa-input
      :value.sync="value"
      placeholder="请输入内容"
      style="width: 150px"
    />
    <pa-input
      :value.sync="value"
      placeholder="请输入内容"
      disabled
      style="width: 150px"
    />
    <pa-input
      :value.sync="value"
      placeholder="请输入密码"
      clearable
      show-password
      style="width: 150px"
    />
    <pa-input
      :value.sync="value"
      placeholder="请输入内容"
      clearable
      style="width: 150px"
    >
      <i slot="prefix" class="el-input__icon el-icon-search" />
    </pa-input>
    <pa-input
      :value.sync="value"
      placeholder="请输入内容"
      clearable
      style="width: 150px"
    >
      <pa-icon slot="prefix" name="icon-sousuo" />
    </pa-input>
    <pa-input
      style="width: 150px"
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      :value.sync="value"
    />
    <pa-input
      style="width: 150px"
      type="textarea"
      placeholder="请输入内容"
      :value.sync="value"
      maxlength="30"
      show-word-limit
    />
    <p style="color: red">写法举例：跟官方文档一样</p>
    <pre>
      &lt;pa-input :value.sync="value" placeholder="请输入内容" clearable style="width: 150px">
      &lt;/pa-input&gt;
      &lt;pa-input :value.sync="value" placeholder="请输入内容" clearable disabled style="width: 150px"&gt;
      &lt;/pa-input&gt;
      &lt;pa-input :value.sync="value" placeholder="请输入密码" clearable show-password style="width: 150px"&gt;
      &lt;/pa-input&gt;
      &lt;pa-input :value.sync="value" placeholder="请输入内容" clearable style="width: 150px"&gt;
        &lt;i slot="prefix" class="el-input__icon el-icon-search"&gt;&lt;/i&gt;
      &lt;/pa-input&gt;
      &lt;pa-input
        style="width: 150px"
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        :value.sync="value"&gt;
      &lt;/pa-input&gt;
      &lt;pa-input
        style="width: 150px"
        type="textarea"
        placeholder="请输入内容"
        :value.sync="value"
        maxlength="30"
        show-word-limit
      &gt;
      &lt;/pa-input&gt;
    </pre>
  </div>
</template>
<script>
export default {
  name: "PahmInput",
  data() {
    return {
      value: "",
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
