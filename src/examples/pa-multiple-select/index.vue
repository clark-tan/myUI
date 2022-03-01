<template>
  <div style="width: 1000px">
    <h2>示例一：下拉框-新增</h2>
    <div style="width: 500px; margin-bottom: 20px">
      <pa-multiple-select
        v-model="result1"
        :all-options="dataList1"
        :replace-fields="{ title: 'name', key: 'id' }"
      />
    </div>
    <h2>示例二：下拉框-编辑回显（包含被禁用的历史数据）</h2>
    <div style="width: 500px; margin-bottom: 20px">
      <pa-multiple-select
        v-model="result2"
        :all-options="dataList2"
        :replace-fields="{ title: 'name', key: 'id' }"
        :filter-fields="{ key: 'status', value: 0 }"
        @change="handleChange"
      />
    </div>
    <h3 style="margin-top: 30px">组件属性说明</h3>
    <el-table :data="formAttrData">
      <el-table-column prop="param" label="参数" />
      <el-table-column prop="describe" label="说明" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="selects" label="可选值" />
      <el-table-column prop="default" label="默认值" />
    </el-table>
    <h3 style="margin-top: 30px">组件事件说明</h3>
    <el-table :data="formEventData">
      <el-table-column prop="eventName" label="方法名" />
      <el-table-column prop="describe" label="说明" />
    </el-table>
  </div>
</template>
<script>
export default {
  name: "PahmMultipleSelect",
  data() {
    return {
      result1: [],
      result2: [1, 2],
      text: [],
      dataList1: [
        {
          id: 1,
          name: "选项1",
        },
        {
          id: 2,
          name: "选项2",
        },
        {
          id: 3,
          name: "选项3",
        },
      ],
      dataList2: [
        {
          id: 1,
          name: "选项1",
          status: 1,
        },
        {
          id: 2,
          name: "选项2是已被禁用的历史数据",
          status: 0,
        },
        {
          id: 3,
          name: "选项3",
          status: 1,
        },
      ],
      formAttrData: [
        {
          param: "v-model",
          describe: "绑定值（结果集合）",
          type: "array",
          selects: "-",
          default: "[]",
        },
        {
          param: "all-options",
          describe: "下拉复选框选项集合（包含被禁用数据）",
          type: "array",
          selects: "-",
          default: "[]",
        },
        {
          param: "placeholder",
          describe: "复选框占位符",
          type: "string",
          selects: "-",
          default: "请选择",
        },
        {
          param: "search-placeholder",
          describe: "复选框下拉框搜索项占位符",
          type: "string",
          selects: "-",
          default: "请输入",
        },
        {
          param: "replace-fields",
          describe: "替换下拉选项中的title、key字段",
          type: "object",
          selects: "-",
          default: '{title: "title",key: "key"}',
        },
        {
          param: "filter-fields",
          describe: "替换需要被过滤的key、value字段",
          type: "object",
          selects: "-",
          default: '{key: "valid",value: "0"}',
        },
      ],
      formEventData: [
        {
          eventName: "change",
          describe: "复选下拉框model值改变回调",
        },
      ],
    };
  },
  methods: {
    handleChange() {},
  },
};
</script>
<style lang="less" scoped></style>
