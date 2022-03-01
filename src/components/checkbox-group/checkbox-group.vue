<template>
  <el-checkbox-group
    v-bind="$options.propsData"
    :value="value"
    v-on="$listeners"
    @input="change($event)"
  >
    <slot />
  </el-checkbox-group>
</template>
<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup } from "element-ui";
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

export default {
  name: "PaCheckboxGroup",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    textColor: {
      type: String,
      default: "#ffffff",
    },
    fill: {
      type: String,
      default: "#409EFF",
    },
  },
  data() {
    return {};
  },
  methods: {
    change(val) {
      this.$emit("input", val);
    },
  },
};
</script>
