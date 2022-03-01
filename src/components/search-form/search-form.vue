<template>
  <div ref="SearchForm" class="pa-search-form">
    <el-form
      ref="searchForm"
      :model="searchForm"
      :label-width="labelWidth"
      :class="{ 'label-left': labelPosition == 'left' }"
      @submit.native.prevent
      @keyup.enter.native="handleSearch"
    >
      <el-row :gutter="gutter">
        <slot />
        <slot v-if="showFolder" name="folder" />
        <el-col
          :span="btnColSpan"
          :offset="(showFolder && folderOffset) || offset"
          class="btn-group-col"
        >
          <div class="pa-search-form-btn">
            <pa-button
              type="primary"
              icon-name="icon-sousuo"
              @click="handleSearch"
            >
              查询
            </pa-button>
            <pa-button
              icon-name="icon-zhongzhi"
              @click="resetForm('searchForm')"
            >
              重置
            </pa-button>
          </div>
          <span
            v-if="layout === 'folder'"
            :class="['fold-btn', { open: showFolder }]"
            @click="togglePanel"
          >
            {{ optText }}<pa-icon name="icon-xiala" />
          </span>
        </el-col>
        <div class="suffix">
          <slot name="suffix" />
        </div>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import "./style";
import Vue from "vue";
import { Row, Col, Form } from "element-ui";

Vue.use(Row);
Vue.use(Col);
Vue.use(Form);

export default {
  name: "PaSearchForm",
  props: {
    // normal:默认不折叠 folder：折叠
    layout: {
      type: String,
      default: "normal",
    },
    gutter: {
      type: Number,
      default: 16,
    },
    btnColSpan: {
      type: Number,
      default: 5,
    },
    labelWidth: {
      type: String,
      default: "",
    },
    labelPosition: {
      type: String,
      default: "right",
    },
    offset: {
      type: Number,
      default: 0,
    },
    folderOffset: {
      type: Number,
      default: 0,
    },
    searchForm: {
      type: Object,
      default: () => {},
    },
    queryFun: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      showFolder: false,
    };
  },
  computed: {
    optText() {
      return this.showFolder ? "收起" : "展开";
    },
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.$emit("resetCallback");
    },
    handleSearch() {
      this.queryFun();
    },
    togglePanel() {
      this.showFolder = !this.showFolder;
      this.$root.$emit("resize", { id: "PaTable" });
    },
  },
};
</script>
<style lang="less" scoped>
div {
  box-sizing: border-box;
}
</style>
