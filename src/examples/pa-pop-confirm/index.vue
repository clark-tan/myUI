<!--
*<button></button> 可替换任意标签以及文本
-->
<template>
  <div style="text-align: center">
    <pa-pop-confirm
      :title="'我是字符串那就行'"
      :cancel-button-text="'否'"
      :confirm-button-text="'真的确定吗？'"
      @confirm="confirmHandler"
      @cancel="cancelHandler"
    >
      <button>删除</button>
    </pa-pop-confirm>
  </div>
</template>
<script>
export default {
  name: "PahmPopConfirm",
  data() {
    return {};
  },
  methods: {
    confirmHandler() {
      window.console.log("confirmHandler");
    },
    cancelHandler() {
      window.console.log("cancelHandler");
    },
  },
};
</script>
