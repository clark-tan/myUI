<!--
 * @Autor: clark tan
 * @Date: 2021-12-31 16:03:38
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-06 16:55:17
 * @Description: 
-->
<template>
  <button
    class="pa-btn el-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :size="size"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <pa-icon :name="iconName" v-if="iconName && !loading"></pa-icon>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: "PaButton",

  inject: {
    elForm: {
      default: "",
    },
    elFormItem: {
      default: "",
    },
  },

  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "small",
    },
    iconName: {
      type: String,
      default: "",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return Object.hasOwnProperty.call(this.$options.propsData, "disabled")
        ? this.disabled
        : (this.elForm || {}).disabled;
    },
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>
