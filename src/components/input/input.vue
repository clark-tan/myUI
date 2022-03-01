<template>
  <el-input
    v-model="inputValue"
    :class="{
      'pa-input': true,
      'pa-input-prefix': !!(prefixIcon || $slots.prefix),
    }"
    v-bind="$options.propsData"
    :size="size"
    @blur="blur"
    @focus="focus"
    @change="change"
    @input="input"
    @clear="clear"
    @select="select"
  >
    <slot slot="prefix" name="prefix" />
    <slot slot="suffix" name="suffix" />
    <slot slot="prepend" name="prepend" />
    <slot slot="append" name="append" />
  </el-input>
</template>
<script>
import Vue from "vue";
import { Input } from "element-ui";
Vue.use(Input);
export default {
  name: "PaInput",
  props: {
    value: {
      type: [Number, String],
    },
    type: {
      type: String,
      default: "text",
    },
    maxlength: [Number, String],
    minlength: [Number, String],
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "text",
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "small",
    },
    prefixIcon: String,
    suffixIcon: String,
    rows: {
      type: Number,
      default: 2,
    },
    autosize: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: "off",
    },
    name: String,
    readonly: {
      type: Boolean,
      default: false,
    },
    max: Number,
    min: Number,
    step: null,
    resize: String,
    autofocus: {
      type: Boolean,
      default: false,
    },
    form: String,
    label: String,
    tabindex: String,
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    value: {
      handler(val) {
        this.inputValue = val;
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    console.warn("Input组件将在2.0版本后停止维护，请尽快切换至新组件InputS!!!");
  },
  methods: {
    blur(e) {
      this.$emit("blur", e);
    },
    focus(e) {
      this.$emit("focus", e);
    },
    change(val) {
      this.$emit("change", val);
    },
    input(val) {
      this.$emit("input", val);
      this.$emit("update:value", val);
    },
    clear() {
      this.$emit("clear");
    },
    select() {
      this.$emit("select");
    },
  },
};
</script>
<style lang="scss" scoped></style>
