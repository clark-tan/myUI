<template>
  <el-input-number
    v-model="inputValue"
    class="pa-input"
    v-bind="$options.propsData"
    @blur="blur"
    @input="input"
    @focus="focus"
    @change="change"
    @select="select"
  />
</template>
<script>
import Vue from "vue";
import { InputNumber } from "element-ui";
Vue.use(InputNumber);
export default {
  name: "PaInputNumber",
  props: {
    value: {
      type: Number,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    step: {
      type: Number,
      default: 1,
    },
    stepStrictly: {
      type: Boolean,
      default: false,
    },
    precision: Number,
    size: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    controlsPosition: String,
    name: String,
    label: String,
    placeholder: String,
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
      immediate: true,
    },
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
    select() {
      this.$emit("select");
    },
    input(value) {
      this.$emit("input", value);
      this.$emit("update:value", value);
    },
  },
};
</script>
<style lang="scss" scoped></style>
