<!--
*   Copyright (c) 2021,xxxx.
*   All rights reserved.
*
*   Author: wanlicheng
-->
<template>
  <div
    class="pa-datePicker"
    :class="
      format.indexOf('HH') > -1 ? 'pa-datePicker-time' : 'pa-datePicker-other'
    "
  >
    <el-date-picker
      ref="pa-datePicker"
      v-bind="$options.propsData"
      :value="value"
      :popper-class="`pa-date-picker-popper ${popperClass || ''}`"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :placeholder="placeholder"
      :default-value="defaultValue"
      :format="format"
      @input="input"
      @change="change"
      @focus="focus"
      @blur="blur"
    />
  </div>
</template>
<script>
import { PROPS } from "./props";
import { input, change, focus, blur } from "./events";
import { DatePicker } from "element-ui";
export default {
  name: "PaDatePicker",
  components: {
    [DatePicker.name]: DatePicker,
  },
  props: PROPS,
  data() {
    return {};
  },

  mounted() {},
  methods: {
    input(value) {
      input.call(this, value);
    },

    focus() {
      focus.call(this);
    },

    change(p) {
      change.call(this, p);
    },

    blur(...p) {
      blur.call(this, ...p);
    },
  },
};
</script>
