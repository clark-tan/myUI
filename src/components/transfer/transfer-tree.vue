<template>
  <div>
    <pa-transfer-layout
      :left-disabled="leftBtnDisabled"
      :right-disabled="rightBtnDisabled"
      class="pa-transfer-layout-tree"
      @left-btn="leftBtn"
      @right-btn="rightBtn"
    >
      <template v-slot:left-header>
        <pa-checkbox
          v-model="leftTree.headerChecked"
          class="all-check-box"
          :indeterminate="leftTree.indeterminate"
          @change="leftAllSslectchange"
        />
        <slot name="left-title" />
      </template>
      <template v-slot:left style="height: calc(100% - 40px)">
        <pa-input
          v-if="filterable"
          v-model="leftQuery"
          placeholder="输入关键字进行过滤"
          clearable
        />
        <el-tree
          v-show="leftTreeDataLocal && leftTreeDataLocal.length"
          ref="leftTree"
          :data="leftTreeDataLocal"
          show-checkbox
          :node-key="nodeKey"
          :default-checked-keys="defaultCheckedKeys"
          :props="defaultProps"
          :filter-node-method="filterNode"
          @check="leftCheck"
        />
        <div
          v-show="!leftTreeDataLocal || !leftTreeDataLocal.length"
          class="tree-empty"
        >
          <pa-error-page type="no-data" message="暂无数据" />
        </div>
      </template>
      <template v-slot:right-header>
        <pa-checkbox
          v-model="rightTree.headerChecked"
          class="all-check-box"
          :indeterminate="rightTree.indeterminate"
          @change="rightAllSslectchange"
        />
        <slot name="right-title" />
      </template>
      <template v-slot:right>
        <pa-input
          v-if="filterable"
          v-model="rightQuery"
          placeholder="输入关键字进行过滤"
          clearable
        />
        <el-tree
          v-show="rightTreeDataLocal && rightTreeDataLocal.length"
          ref="rightTree"
          :data="rightTreeDataLocal"
          show-checkbox
          :node-key="nodeKey"
          :default-checked-keys="defaultCheckedKeys"
          :props="defaultProps"
          :filter-node-method="filterNode"
          @check="rightCheck"
        />
        <div
          v-show="!rightTreeDataLocal || !rightTreeDataLocal.length"
          class="tree-empty"
        >
          <pa-error-page type="no-data" message="暂无数据" />
        </div>
      </template>
    </pa-transfer-layout>
  </div>
</template>
<script>
import PaTransferLayout from "./transfer-layout.vue";
import Vue from "vue";
import { Checkbox, Tree } from "element-ui";
import PaCheckbox from "../checkbox/checkbox.vue";
import PaInput from "../input/input.vue";
import * as CircularJSON from "circular-json";
Vue.use(Checkbox).use(Tree);
export default {
  name: "PaTransferTree",
  components: {
    PaTransferLayout,
    PaCheckbox,
    PaInput,
  },
  props: {
    filterable: {
      default: false,
      type: Boolean,
    },
    leftTreeData: {
      //左边初始数据
      type: Array,
      default() {
        return [];
      },
    },
    rightTreeData: {
      //右边初始数据
      type: Array,
      default() {
        return [];
      },
    },
    nodeKey: {
      type: String,
      default() {
        return "id";
      },
    },
    filterNode: {
      type: Function,
      default: (value, data) => {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
    },
    defaultProps: {
      type: Object,
      default: () => {
        return {
          children: "children",
          label: "label",
        };
      },
    },
  },
  data() {
    return {
      letfTreeDataCache: [], //扁平化
      leftTreeDataLocal: [],
      rightTreeDataLocal: [],
      rightTreeDataCache: [], //扁平化
      leftTree: {
        headerChecked: false, //全选状态值
        indeterminate: false, //半选状态值
        dataAllId: [], //所有数据的key值
        checkedNodes: [],
        checkedKeys: [],
        halfCheckedKeys: [],
        halfCheckedNodes: [],
      },
      rightTree: {
        headerChecked: false,
        indeterminate: false,
        dataAllId: [],
        checkedNodes: [],
        checkedKeys: [],
        halfCheckedKeys: [],
        halfCheckedNodes: [],
      },
      defaultCheckedKeys: [],

      rightHeaderChecked: false,
      leftQuery: "",
      leftFilterData: [],
      leftFilterDataKeys: [],
      rightQuery: "",
      rightFilterData: [],
      rightFilterDataKeys: [],

      leftBtnDisabled: true,
      rightBtnDisabled: true,
    };
  },

  watch: {
    leftQuery(val) {
      this.$refs.leftTree.filter(val);
      this.getTwoAsideFilterData();
      //this.changeCheckAllsState();
    },
    rightQuery(val) {
      this.$refs.rightTree.filter(val);
      this.getTwoAsideFilterData();
    },
    leftTreeData(newVal) {
      this.$nextTick(() => {
        this.leftTreeDataLocal = newVal;
        this.getLeftTreeId();
      });
    },
    rightTreeData(newVal) {
      this.$nextTick(() => {
        this.rightTreeDataLocal = newVal;
        this.getRightTreeId();
      });
    },
    "leftTree.checkedNodes": {
      handler(val) {
        if (val && val.length > 0) {
          this.rightBtnDisabled = false;
        } else {
          this.rightBtnDisabled = true;
        }
      },
    },
    "rightTree.checkedNodes": {
      handler(val) {
        if (val && val.length > 0) {
          this.leftBtnDisabled = false;
        } else {
          this.leftBtnDisabled = true;
        }
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.leftTreeDataLocal = this.leftTreeData;
      this.rightTreeDataLocal = this.rightTreeData;
      this.getLeftTreeId();
      this.getRightTreeId();
    });
  },
  methods: {
    //获取两边过滤数据
    getTwoAsideFilterData() {
      this.$nextTick(() => {
        this.getLeftAndRightFilterData();
      });
    },
    //移动完成后根据输入条件过滤
    moveDoneFilter() {
      this.$nextTick(() => {
        this.$refs.leftTree.filter(this.leftQuery);
        this.$refs.rightTree.filter(this.rightQuery);
        this.getTwoAsideFilterData();
      });
    },
    // 左边列表全选
    leftAllSslectchange() {
      this.getLeftTreeId();
      this.leftTree.indeterminate = false;
      // 设置全选nodes和keys
      if (this.leftTree.headerChecked) {
        let _dataAllId = [];
        if (this.filterable && this.leftFilterDataKeys.length > 0) {
          _dataAllId = [...this.leftFilterDataKeys];
        } else {
          _dataAllId = [...this.leftTree.dataAllId];
        }
        this.$refs.leftTree.setCheckedKeys([..._dataAllId]);
        this.leftTree.checkedKeys = [..._dataAllId];
        this.leftTree.checkedNodes = [...this.$refs.leftTree.getCheckedNodes()];
      } else if (!this.leftTree.headerChecked) {
        this.$refs.leftTree.setCheckedKeys([]);
        this.leftTree.checkedKeys = [];
        this.leftTree.checkedNodes = [];
      }
      this.$emit("leftAllChecked");
    },
    // 右边列表全选
    rightAllSslectchange() {
      this.getRightTreeId();
      this.rightTree.indeterminate = false;
      if (this.rightTree.headerChecked) {
        let _dataAllId = [];
        if (this.filterable && this.rightFilterDataKeys.length > 0) {
          _dataAllId = [...this.rightFilterDataKeys];
        } else {
          _dataAllId = [...this.rightTree.dataAllId];
        }
        this.$refs.rightTree.setCheckedKeys([..._dataAllId]);
        this.rightTree.checkedKeys = [..._dataAllId];
        this.rightTree.checkedNodes = [
          ...this.$refs.rightTree.getCheckedNodes(),
        ];
      } else if (!this.rightTree.headerChecked) {
        this.$refs.rightTree.setCheckedKeys([]);
        this.rightTree.checkedKeys = [];
        this.rightTree.checkedNodes = [];
      }
      this.$emit("rightAllChecked");
    },
    // 重置全选状态
    resetAllSelectState() {
      this.leftTree.headerChecked = false;
      this.leftAllSslectchange();
      this.rightTree.headerChecked = false;
      this.rightAllSslectchange();
    },
    // 向右移按钮
    rightBtn() {
      if (this.leftTree.checkedKeys.length == 0) return;
      // 所选节点不包含在右边
      let _allNodes = [
        ...this.leftTree.checkedNodes,
        ...this.leftTree.halfCheckedNodes,
      ].filter((item) => {
        if (!this.rightTree.dataAllId.includes(item[this.nodeKey])) {
          return item;
        }
      });
      // 扁平化的所有节点合并
      let _rightTreeData = [..._allNodes, ...this.rightTreeDataCache];
      // 扁片化节点转tree
      let _rightData = JSON.parse(
        JSON.stringify(this.toTree(_rightTreeData, this.nodeKey, "parentId"))
      );
      this.rightTreeDataLocal = JSON.parse(JSON.stringify(_rightData));
      // 左边扁平化数据去掉勾选的数据
      this.letfTreeDataCache = this.letfTreeDataCache.filter((item) => {
        if (!this.leftTree.checkedKeys.includes(item[this.nodeKey])) {
          return item;
        }
      });
      let _leftData = JSON.parse(
        JSON.stringify(
          this.toTree(this.letfTreeDataCache, this.nodeKey, "parentId")
        )
      );
      this.leftTreeDataLocal = JSON.parse(JSON.stringify(_leftData));
      this.resetAllSelectState();
      if (this.filterable) {
        this.moveDoneFilter();
      }
      this.$emit("rightBtn");
    },
    // 向左移按钮
    leftBtn() {
      if (this.rightTree.checkedKeys.length == 0) return;
      // 所选节点不包含在右边
      let _allNodes = [
        ...this.rightTree.checkedNodes,
        ...this.rightTree.halfCheckedNodes,
      ].filter((item) => {
        if (!this.leftTree.dataAllId.includes(item[this.nodeKey])) {
          return item;
        }
      });
      // 扁平化的所有节点合并
      let _leftTreeData = [..._allNodes, ...this.letfTreeDataCache];
      // 扁片化节点转tree
      let _leftData = JSON.parse(
        JSON.stringify(this.toTree(_leftTreeData, this.nodeKey, "parentId"))
      );
      this.leftTreeDataLocal = JSON.parse(JSON.stringify(_leftData));

      // 右边扁平化数据去掉勾选的数据
      this.rightTreeDataCache = this.rightTreeDataCache.filter((item) => {
        if (!this.rightTree.checkedKeys.includes(item[this.nodeKey])) {
          return item;
        }
      });
      let _rightData = JSON.parse(
        JSON.stringify(
          this.toTree(this.rightTreeDataCache, this.nodeKey, "parentId")
        )
      );
      this.rightTreeDataLocal = JSON.parse(JSON.stringify(_rightData));
      this.resetAllSelectState();
      if (this.filterable) {
        this.moveDoneFilter();
      }
      this.$emit("leftBtn");
    },
    // 左边tree选择
    leftCheck(currentNode, checkedNodes) {
      let _checkedKeys = checkedNodes.checkedKeys;
      this.leftTree.checkedKeys = [...checkedNodes.checkedKeys];
      this.leftTree.checkedNodes = [...checkedNodes.checkedNodes];
      this.leftTree.halfCheckedKeys = [...checkedNodes.halfCheckedKeys];
      this.leftTree.halfCheckedNodes = [...checkedNodes.halfCheckedNodes];
      let _dataAllId = [];
      if (this.filterable) {
        _dataAllId = [...this.leftFilterDataKeys];
      } else {
        _dataAllId = [...this.leftTree.dataAllId];
      }
      if (_checkedKeys.toString() == _dataAllId.toString()) {
        this.leftTree.headerChecked = true;
        this.leftTree.indeterminate = false;
      }
      if (_checkedKeys.length == 0) {
        this.leftTree.headerChecked = false;
        this.leftTree.indeterminate = false;
      }
      if (_checkedKeys.length > 0 && _checkedKeys.length < _dataAllId.length) {
        this.leftTree.indeterminate = true;
      }
      this.$emit("leftNodeChecked");
    },
    // 右边tree选择
    rightCheck(currentNode, checkedNodes) {
      this.rightTree.checkedKeys = [...checkedNodes.checkedKeys];
      this.rightTree.checkedNodes = [...checkedNodes.checkedNodes];
      this.rightTree.halfCheckedKeys = [...checkedNodes.halfCheckedKeys];
      this.rightTree.halfCheckedNodes = [...checkedNodes.halfCheckedNodes];
      if (
        this.rightTree.checkedKeys.toString() ==
        this.rightTree.dataAllId.toString()
      ) {
        this.rightTree.headerChecked = true;
        this.rightTree.indeterminate = false;
      }
      if (this.rightTree.checkedKeys.length == 0) {
        this.rightTree.headerChecked = false;
        this.rightTree.indeterminate = false;
      }
      if (
        this.rightTree.checkedKeys.length > 0 &&
        this.rightTree.checkedKeys.length < this.rightTree.dataAllId.length
      ) {
        this.rightTree.indeterminate = true;
      }
      this.$emit("rightNodeChecked");
    },
    //获取左边所有节点的key值
    getLeftTreeId() {
      let _getTreeAllId = this.getTreeAllId(this.leftTreeDataLocal);
      this.leftTree.dataAllId = _getTreeAllId[0];
      this.letfTreeDataCache = _getTreeAllId[1];
    },
    //获取右边所有节点的key值
    getRightTreeId() {
      let _getTreeAllId = this.getTreeAllId(this.rightTreeDataLocal);
      this.rightTree.dataAllId = _getTreeAllId[0];
      this.rightTreeDataCache = _getTreeAllId[1];
    },
    //获取所有节点的key值
    getTreeAllId(treeData) {
      const searchAllId = (Data, returnArr, returnNode) => {
        Data.map((item) => {
          returnArr.push(item[this.nodeKey]);
          returnNode.push(item);
          if (item.children) {
            item.children = searchAllId(item.children, returnArr, returnNode);
          }
        });
      };
      let returnArr = [];
      let returnNode = [];
      let _treeData = JSON.parse(JSON.stringify(treeData));
      searchAllId(_treeData, returnArr, returnNode);
      return [returnArr, returnNode];
    },
    // 转化为树形结构的数据
    toTree(list, idPropName, pidPropName) {
      //复制一份源列表对象
      const newList =
        list?.map((it) => {
          if (it["children"]) it["children"] = [];
          return { ...it };
        }) ?? [];
      //建立id:对象索引
      const idObjMap = newList.reduce((obj, item) => {
        obj[item[idPropName]] = item;
        return obj;
      }, {});
      //转换为树型
      const result = [];
      newList.forEach((it) => {
        const pid = it[pidPropName];
        if (!pid) {
          // 没有父id时，作为根节点加入
          result.push(it);
        } else {
          const parent = idObjMap[pid];
          //父节点不存在时，也作为根节点
          if (!parent) {
            result.push(it);
          } else {
            //父节点还未创建子集合时，先创建子集合
            if (!parent.children) {
              parent.children = [];
            }
            parent.children.push(it);
          }
        }
      });
      return result;
    },
    getLeftAndRightFilterData() {
      this.getFilterData("leftTree", "leftFilterData", "leftFilterDataKeys");
      this.getFilterData("rightTree", "rightFilterData", "rightFilterDataKeys");
    },
    /**
     * @description: 获取过滤后的数据
     */
    getFilterData(refsString, FilterData, FilterDataKeys) {
      if (this.filterable) {
        const rootData = this.$refs[refsString].root;
        if (rootData.visible) {
          const childNodesStr = CircularJSON.stringify(rootData.childNodes);
          const childNodes = CircularJSON.parse(childNodesStr);
          this[FilterData] = this.recursionNodes(childNodes);
          this[FilterDataKeys] = this.getTreeAllId(this[FilterData])[0];
        }
      }
    },

    /**
     * @description: 递归遍历数据
     * @param {array} nodes
     */
    recursionNodes(childNodes) {
      const nodes = childNodes;
      const result = [];
      for (const item of nodes) {
        if (item.visible) {
          //||noVisible==true
          result.push(item.data);
        }
        if (item.childNodes && item.childNodes.length) {
          const tempResult = this.recursionNodes(item.childNodes);
          item.data.children = tempResult;
        }
      }
      return result;
    },
  },
};
</script>
<style lang="scss" scoped>
.all-check-box {
  margin-right: 8px !important;
}
</style>
