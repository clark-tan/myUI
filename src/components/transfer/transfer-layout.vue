<template>
  <div class="pa-transfer-layout">
    <div class="left-container">
      <div v-if="$slots['left-header']" class="left-header">
        <slot name="left-header" />
      </div>
      <div v-if="$slots['left']" class="left-body">
        <slot name="left" />
      </div>
    </div>
    <div class="middle-button">
      <pa-button :disabled="rightDisabled" @click.native="rightBtn">
        <i class="el-icon-arrow-right" />
      </pa-button>
      <pa-button :disabled="leftDisabled" @click.native="leftBtn">
        <i class="el-icon-arrow-left" />
      </pa-button>
    </div>
    <div class="right-container">
      <div v-if="$slots['right-header']" class="right-header">
        <slot name="right-header" />
      </div>
      <div v-if="$slots['right']" class="right-body">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
<script>
import PaButton from "../button";
export default {
  name: "PaTransferLayout",
  components: {
    PaButton,
  },
  props: {
    leftDisabled: {
      default: false,
      type: Boolean,
    },
    rightDisabled: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    rightBtn() {
      this.$emit("right-btn");
    },
    leftBtn() {
      this.$emit("left-btn");
    },
  },
};
</script>
<style lang="scss" scoped>
.pa-transfer-layout {
  display: flex;
  .left-container,
  .right-container {
    border: 1px solid #ebeef5;
    min-height: 300px;
    min-width: 150px;
    border-radius: 4px;
  }
  .left-container .left-header,
  .right-container .right-header {
    height: 40px;
    background: #f5f7fa;
    border-bottom: 1px solid #ebeef5;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    font-size: 16px;
    color: #303133;
    font-weight: 400;
  }
  .left-container .left-body,
  .right-container .right-body {
    padding: 10px;
    font-size: 14px;
    color: #606266;
  }
  .middle-button {
    align-self: center;
    margin: 0 20px;
    button {
      display: block;
      margin-left: 0;
      margin-right: 0;
      &:nth-child(1) {
        margin-bottom: 5px;
      }
    }
  }
  .pa-btn.el-button + .pa-btn.el-button {
    margin-left: 0;
  }
}
</style>
