<template>
  <el-col class="pa-col" :span="colSpan">
    <el-form-item :label="label" :prop="propName">
      <slot />
    </el-form-item>
  </el-col>
</template>
<script>
import "./style";
import Vue from "vue";
import { Icon, Row, Col, FormItem } from "element-ui";

Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(FormItem);

export default {
  name: "PaSearchFormItem",
  props: {
    propName: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    colSpan: {
      type: Number,
      default: 4,
    },
  },
};
</script>
