<template>
  <el-checkbox
    class="pa-checkbox"
    v-bind="$options.propsData"
    :value="value"
    v-on="$listeners"
    @input="change($event)"
  >
    <slot />
  </el-checkbox>
</template>
<script>
import Vue from "vue";
import { Checkbox } from "element-ui";
Vue.use(Checkbox);

export default {
  name: "PaCheckbox",
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    disabled: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
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
