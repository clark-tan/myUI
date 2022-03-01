<template>
  <div class="message">
    <h3>
      在element UI
      消息提示基础上新增属性maxCount：可配置该消息最大显示消息数量。默认不做限制
    </h3>
    <el-button @click="open"> success消息提示 </el-button>
    <el-button @click="open1"> error消息提示 </el-button>
    <el-button @click="open2"> warning消息提示 </el-button>
    <el-button @click="open3"> normal消息提示 </el-button>
    <div>
      <el-button @click="open4"> 自定义消息提示 </el-button>
      <el-button @click="open5"> 连续点击只显示一个的消息提示 </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      instance: null,
    };
  },
  methods: {
    open() {
      this.$paMessage({
        type: "success",
        message: "成功出现了一个提示信息",
        duration: 2000,
      });
    },
    open1() {
      this.$paMessage({
        type: "error",
        message: "出现了一个错误提示信息",
        duration: 2000,
      });
    },
    open2() {
      this.$paMessage({
        type: "info",
        message: "出现了一个警告提示信息",
        duration: 2000,
      });
    },
    open3() {
      this.$paMessage({
        message: "正常提示信息",
        duration: 2000,
      });
    },
    open4() {
      if (this.instance) {
        this.instance.close();
      }
      this.instance = this.$paMessage({
        type: "danger",
        message: "自定义消息提示",
        duration: 2000,
      });
    },
    open5() {
      this.$paMessage({
        type: "error",
        message: "只显示一个的消息提示",
        duration: 2000,
        maxCount: 1,
      });
    },
  },
};
</script>

<style scoped></style>
