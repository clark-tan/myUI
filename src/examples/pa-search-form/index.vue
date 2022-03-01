<template>
  <div style="width: 1200px">
    <h2>搜索栏单行使用示例</h2>
    <pa-search-form
      :search-form="searchForm"
      :query-fun="doQuery"
      :offset="2"
      @resetCallback="resetCallback"
    >
      <pa-search-form-item
        v-for="i in 3"
        :key="i"
        prop-name="name"
        label="测试1"
      >
        <pa-input v-model="searchForm.name" />
      </pa-search-form-item>
      <pa-search-form-item label="测试4" :col-span="5">
        <pa-input v-model="searchForm.name4" />
      </pa-search-form-item>
    </pa-search-form>

    <h2>搜索栏单行附带操作按钮使用示例</h2>
    <pa-search-form :search-form="searchForm2">
      <pa-search-form-item prop-name="name" label="名称查询" :col-span="8">
        <pa-input v-model="searchForm2.name" />
      </pa-search-form-item>
      <template v-slot:suffix>
        <el-col :span="4" :offset="7">
          <pa-button>高级搜索</pa-button>
        </el-col>
      </template>
    </pa-search-form>

    <h2>搜索栏多行使用示例</h2>
    <pa-search-form :search-form="searchForm2" :offset="1" label-width="68px">
      <pa-search-form-item prop-name="name" label="状态" :col-span="6">
        <pa-input v-model="searchForm2.name" />
      </pa-search-form-item>
      <pa-search-form-item prop-name="name" label="名查询" :col-span="6">
        <pa-input v-model="searchForm2.name" />
      </pa-search-form-item>
      <pa-search-form-item prop-name="name" label="名称查询" :col-span="6">
        <pa-input v-model="searchForm2.name" />
      </pa-search-form-item>
      <pa-search-form-item prop-name="name" label="名称查询" :col-span="6">
        <pa-input v-model="searchForm2.name" />
      </pa-search-form-item>
      <pa-search-form-item prop-name="name" label="名称查询" :col-span="6">
        <pa-input v-model="searchForm2.name" />
      </pa-search-form-item>
      <pa-search-form-item prop-name="date" label="日期" :col-span="12">
        <pa-date-picker-multi>
          <pa-date-picker v-model="searchForm2.date[0]" type="datetime" />
          <pa-date-picker v-model="searchForm2.date[1]" type="datetime" />
        </pa-date-picker-multi>
      </pa-search-form-item>
    </pa-search-form>

    <h2>搜索栏折叠行使用示例</h2>
    <pa-search-form
      :search-form="searchForm2"
      layout="folder"
      :btn-col-span="6"
      :folder-offset="6"
    >
      <pa-search-form-item
        v-for="i in 3"
        :key="i"
        prop-name="name"
        label="名称查询"
        :col-span="6"
      >
        <pa-input v-model="searchForm2.name" />
      </pa-search-form-item>

      <template v-slot:folder>
        <pa-search-form-item
          v-for="i in 3"
          :key="`k${i}`"
          prop-name="name"
          label="名称查询"
          :col-span="6"
        >
          <pa-input v-model="searchForm2.name" />
        </pa-search-form-item>
      </template>
    </pa-search-form>

    <div>
      <h3>
        pa-search-form组件属性(<small>搜索栏使用了栅格布局，栅格数量为24</small>)
      </h3>
      <el-table :data="formAttrData">
        <el-table-column prop="param" label="参数" />
        <el-table-column prop="describe" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="selects" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h3>pa-search-form组件事件</h3>
      <el-table :columns="eventColumns" :data="formEventData">
        <el-table-column prop="methodName" label="方法名" />
        <el-table-column prop="describe" label="说明" />
      </el-table>
      <h3>pa-search-form组件Slot</h3>
      <el-table :columns="slotColumns" :data="formSlotData">
        <el-table-column prop="name" label="name" />
        <el-table-column prop="describe" label="说明" />
      </el-table>
      <h3>
        pa-search-form-item组件属性(<small>搜索栏使用了栅格布局，栅格数量为24</small>)
      </h3>
      <el-table :columns="columns" :data="formItemAttrData">
        <el-table-column prop="param" label="参数" />
        <el-table-column prop="describe" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="selects" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Col, Input, Table, TableColumn } from "element-ui";
Vue.use(Col);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);

export default {
  name: "PahmSearchForm",
  data() {
    return {
      searchForm: {
        name: "",
        name2: "",
        name3: "",
        name4: "不需要被自动重置",
      },
      searchForm2: {
        name: "",
        date: ["", ""],
      },
      columns: [
        {
          title: "参数",
          dataIndex: "param",
          key: "param",
        },
        {
          title: "说明",
          dataIndex: "describe",
          key: "describe",
        },
        {
          title: "类型",
          dataIndex: "type",
          key: "type",
        },
        {
          title: "可选值",
          dataIndex: "selects",
          key: "selects",
        },
        {
          title: "默认值",
          dataIndex: "default",
          key: "default",
        },
      ],
      formAttrData: [
        {
          param: "search-form",
          describe: "表单绑定的model值",
          type: "object",
          selects: "-",
          default: "-",
        },
        {
          param: "query-fun",
          describe: "表单需执行的查询事件",
          type: "function",
          selects: "-",
          default: "-",
        },
        {
          param: "layout",
          describe: "表单布局方式",
          type: "string",
          selects: "normal/folder",
          default: "normal",
        },
        {
          param: "gutter",
          describe: "表单项之间的间隔",
          type: "number",
          selects: "-",
          default: 16,
        },
        {
          param: "label-width",
          describe: "表单项里label文字宽度",
          type: "string",
          selects: "-",
          default: "auto",
        },
        {
          param: "label-position",
          describe: "表单项里label文字对齐方式",
          type: "string",
          selects: "left/right",
          default: "right",
        },
        {
          param: "btn-col-span",
          describe: "查询重置按钮组合所占格子数量",
          type: "number",
          selects: "-",
          default: 5,
        },
        {
          param: "offset",
          describe: "查询重置按钮组合左侧间隔格子数量",
          type: "number",
          selects: "-",
          default: 0,
        },
        {
          param: "folder-offset",
          describe: "查询重置按钮组合左侧间隔格子数量（仅在展开折叠时适用）",
          type: "number",
          selects: "-",
          default: 0,
        },
      ],
      eventColumns: [
        {
          title: "方法名",
          dataIndex: "methodName",
          key: "methodName",
        },
        {
          title: "说明",
          dataIndex: "describe",
          key: "describe",
        },
        {
          title: "参数",
          dataIndex: "param",
          key: "param",
        },
      ],
      formEventData: [
        {
          methodName: "resetCallback",
          describe: "表单重置回调事件，可手动重置某些字段",
          param: "-",
        },
      ],
      slotColumns: [
        {
          title: "name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "说明",
          dataIndex: "describe",
          key: "describe",
        },
      ],
      formSlotData: [
        {
          name: "-",
          describe: "搜索栏默认显示的表单搜索项",
        },
        {
          name: "suffix",
          describe: "显示搜索栏额外的按钮操作区",
        },
        {
          name: "folder",
          describe: "被折叠的搜索表单项",
        },
      ],
      formItemAttrData: [
        {
          param: "prop-name",
          describe:
            "搜索表单model的字段，需要搜索栏组件重置该字段时，该属性是必填的。不传该字段表示不需要重置该字段数据",
          type: "string",
          selects: "-",
          default: "-",
        },
        {
          param: "label",
          describe: "表单项label文本",
          type: "string",
          selects: "-",
          default: "-",
        },
        {
          param: "col-span",
          describe: "表单项所占格子数量",
          type: "number",
          selects: "-",
          default: 4,
        },
      ],
    };
  },
  methods: {
    doQuery() {
      alert("查询");
      // console.log(this.searchForm);
    },
    resetCallback() {
      // console.log('手动重置某些字段');
    },
  },
};
</script>
<style lang="less" scoped>
h3 {
  padding: 10px 0;
}
</style>
