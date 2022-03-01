<!--
 * @Autor: clark tan
 * @Date: 2021-05-18 17:17:53
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-05 16:29:38
 * @Description: 
-->
<template>
  <div style="width: 100%">
    <el-select
      v-if="!optionsGroup"
      v-model="selectedValue"
      class="pa-select"
      popper-class="pa-select-dropdown"
      v-bind="$options.propsData"
      :size="size"
      @change="change"
      @visible-change="visibleChange"
      @remove-tag="removeTag"
      @clear="clear"
      @blur="blur"
      @focus="focus"
    >
      <el-option
        v-for="item in options"
        :key="item[optionsKey]"
        :label="item[optionsLabel]"
        :value="item[optionsValue]"
        :disabled="item[optionsDisabled]"
      >
        <div v-if="customShow" class="custom">
          <span class="custom-key">{{ item[optionsKey] }}</span>
          <span class="custom-value">{{ item[optionsValue] }}</span>
          <span class="custom-label">{{ item[optionsLabel] }}</span>
        </div>
      </el-option>
    </el-select>
    <el-select
      v-if="optionsGroup"
      v-model="selectedValue"
      class="pa-select"
      popper-class="pa-select-dropdown"
      v-bind="$options.propsData"
      @change="change"
      @visible-change="visibleChange"
      @remove-tag="removeTag"
      @clear="clear"
      @blur="blur"
      @focus="focus"
    >
      <el-option-group
        v-for="group in options"
        :key="group[optionsLabel]"
        :label="group[optionsLabel]"
      >
        <el-option
          v-for="item in group.options"
          :key="item[optionsKey]"
          :label="item[optionsLabel]"
          :value="item[optionsValue]"
          :disabled="item[optionsDisabled]"
        />
      </el-option-group>
    </el-select>
  </div>
</template>
<script>
import Vue from "vue";
import { Select, Option, OptionGroup } from "element-ui";
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
export default {
  name: "PaSelect",
  props: {
    value: {
      type: [String, Number, Boolean, Array],
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
    options: {
      type: Array,
      default: () => [],
    },
    optionsKey: {
      type: String,
      default: "value",
    },
    optionsLabel: {
      type: String,
      default: "label",
    },
    optionsValue: {
      type: String,
      default: "value",
    },
    optionsDisabled: {
      type: String,
      default: "disabled",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    collapseTags: {
      type: Boolean,
      default: false,
    },
    customShow: {
      type: Boolean,
      default: false,
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    remote: {
      type: Boolean,
      default: false,
    },
    reserveKeyword: {
      type: Boolean,
      default: false,
    },
    optionsGroup: {
      type: Boolean,
      default: false,
    },
    remoteMethod: {
      type: Function,
    },
    size: {
      type: String,
      default: "small",
    },
  },
  data() {
    return {
      selectedValue: undefined,
    };
  },
  watch: {
    value: {
      handler(val) {
        this.selectedValue = val;
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    // console.warn(
    //   "Select组件将在2.0版本后停止维护，请尽快切换至新组件SelectS!!!"
    // );
  },
  methods: {
    // remoteMethod(query) {
    //   this.$emit('remoteMethod', query);
    // },
    change(val) {
      this.$emit("change", val);
      this.$emit("update:value", val);
      this.$emit("input", val);
    },
    visibleChange(val) {
      this.$emit("visibleChange", val);
    },
    removeTag(val) {
      this.$emit("removeTag", val);
    },
    clear() {
      this.$emit("clear");
    },
    blur(e) {
      this.$emit("blur", e);
    },
    focus(e) {
      this.$emit("focus", e);
    },
  },
};
</script>
<style lang="scss" scoped></style>
