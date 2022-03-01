const transferTableData = {
  examples: `<pa-transfer-table 
          :filterable="true" 
          :filter-key-words="['address','name']" 
          :table-data-source="transferTableDataSource "
          :table-data-target="transferTableDataTarget "
          :table-column="transferTableColumn"
        />`,
  attributesData: [
    {
      param: "nodeKey",
      des: "每条数据唯一识别的值，两边的数据nodekey不允许重复，例如id",
      type: "String",
      selects: "-",
      default: "id",
    },
    {
      param: "filterable",
      des: "显示过滤输入框",
      type: "Boolean",
      selects: "-",
      default: "false",
    },
    {
      param: "filter-key-words",
      des: "在filterable属性为true时，需要过滤的table头字段",
      type: "Array",
      selects: "-",
      default: "id",
    },
    {
      param: "table-data-source",
      des: "左边table初始化数据",
      type: "Array",
      selects: "-",
      default: "[]",
    },
    {
      param: "table-data-target",
      des: "右边table初始化数据",
      type: "Array",
      selects: "-",
      default: "[]",
    },
    {
      param: "table-column",
      des: "table定义的表头字段属性",
      type: "Array",
      selects: "-",
      default: "[]",
    },
    {
      param: "search-conditions-and",
      des: "添加搜索条件，与过滤条件形成且的关系；keyWord为需要搜索的字段，value1左边搜索值，value2右边搜索值",
      type: "Object",
      selects: "-",
      default: `{
        keyWord:'',
        value1:'',
        value2:'',
      }`,
    },
    {
      param: "-",
      des: "获取左边table的所有数据",
      type: "返回Array",
      selects: "-",
      default: "this.$refs.paTransferTable.leftTableData",
    },
    {
      param: "-",
      des: "获取右边table的所有数据",
      type: "返回Array",
      selects: "-",
      default: "this.$refs.paTransferTable.rightTableData",
    },
    {
      param: "-",
      des: "左边Table与条件输入，例如input、select",
      type: "slot",
      selects: "-",
      default: "left-condition",
    },
    {
      param: "-",
      des: "右边Table与条件输入，例如input、select",
      type: "slot",
      selects: "-",
      default: "right-condition",
    },
  ],
  eventsData: [
    {
      param: "left-btn",
      des: "点击左移按钮时触发",
      type: "-",
      selects: "-",
      default: "-",
    },
    {
      param: "right-btn",
      des: "点击右移按钮时触发",
      type: "-",
      selects: "-",
      default: "-",
    },
    {
      param: "left-table-select",
      des: "左边table选择触发",
      type: "-",
      selects: "-",
      default: "-",
    },
    {
      param: "right-table-select",
      des: "右边table选择触发",
      type: "-",
      selects: "-",
      default: "-",
    },
  ],
};
const transferTreeData = {
  examples: `<pa-transfer-tree ref="paTransferTree" :left-tree-data="treeData" />`,
  attributesData: [
    {
      param: "left-tree-data",
      des: "左边tree初始值",
      type: "Array",
      selects: "-",
      default: "[]",
    },
    {
      param: "rightTreeData",
      des: "右边tree初始值",
      type: "Array",
      selects: "-",
      default: "[]",
    },
    {
      param: "-",
      des: "获取左边tree数据",
      type: "返回Array",
      selects: "-",
      default: "this.$refs.paTransferTree.leftTreeDataLocal",
    },
    {
      param: "-",
      des: "获取右边扁平化的tree数据",
      type: "返回Array",
      selects: "-",
      default: "this.$refs.paTransferTree.letfTreeDataCache",
    },
    {
      param: "-",
      des: "获取右边tree数据",
      type: "返回Array",
      selects: "-",
      default: "this.$refs.paTransferTree.leftTreeDataLocal",
    },
    {
      param: "-",
      des: "获取右边扁平化的tree数据",
      type: "返回Array",
      selects: "-",
      default: "this.$refs.paTransferTree.letfTreeDataCache",
    },
    {
      param: "-",
      des: "左边标题文字",
      type: "slot",
      selects: "-",
      default: "left-title",
    },
    {
      param: "-",
      des: "右边标题文字",
      type: "slot",
      selects: "-",
      default: "right-title",
    },
    {
      param: "filterable",
      des: "带搜索",
      type: "Boolean",
      selects: "-",
      default: "false",
    },
  ],
  eventsData: [
    {
      param: "left-btn",
      des: "点击左移按钮时触发",
      type: "-",
      selects: "-",
      default: "-",
    },
    {
      param: "right-btn",
      des: "点击右移按钮时触发",
      type: "-",
      selects: "-",
      default: "-",
    },
    {
      param: "left-all-checked",
      des: "左边tree全选触发",
      type: "-",
      selects: "-",
      default: "-",
    },
    {
      param: "left-node-checked",
      des: "左边节点选择触发",
      type: "-",
      selects: "-",
      default: "-",
    },
    {
      param: "right-all-checked",
      des: "右边tree全选触发",
      type: "-",
      selects: "-",
      default: "-",
    },
    {
      param: "right-node-checked",
      des: "右边节点选择触发",
      type: "-",
      selects: "-",
      default: "-",
    },
  ],
};
const transferLayoutData = {
  examples: ` <pa-transfer-layout @left-btn="leftBtn" @right-btn="rightBtn"/>`,
  attributesData: [
    {
      param: "-",
      des: "自定义左边头部插槽",
      type: "slot",
      selects: "-",
      default: "left-header",
    },
    {
      param: "-",
      des: "自定义左边内容插槽",
      type: "slot",
      selects: "-",
      default: "left",
    },
    {
      param: "-",
      des: "自定义右边头部插槽",
      type: "slot",
      selects: "-",
      default: "right-header",
    },
    {
      param: "-",
      des: "自定义右边内容插槽",
      type: "slot",
      selects: "-",
      default: "right",
    },
  ],
  eventsData: [
    {
      param: "left-btn",
      des: "点击左移按钮时触发",
      type: "-",
      selects: "-",
      default: "-",
    },
    {
      param: "right-btn",
      des: "点击右移按钮时触发",
      type: "-",
      selects: "-",
      default: "-",
    },
  ],
};
const attributesColumns = [
  { field: "param", title: "参数" },
  { field: "des", title: "说明" },
  { field: "type", title: "类型" },
  { field: "selects", title: "可选值" },
  { field: "default", title: "默认值" },
];
const eventColumns = [
  { field: "param", title: "事件名称" },
  { field: "des", title: "说明" },
  { field: "type", title: "类型" },
  { field: "selects", title: "可选值" },
  { field: "default", title: "默认值" },
];
export {
  transferTableData,
  attributesColumns,
  eventColumns,
  transferTreeData,
  transferLayoutData,
};
export default {
  transferTableData,
  attributesColumns,
  eventColumns,
  transferTreeData,
  transferLayoutData,
};
