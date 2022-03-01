<template>
  <div>
    <pa-transfer-layout
      :left-disabled="leftBtnDisabled"
      :right-disabled="rightBtnDisabled"
      @left-btn="leftBtn"
      @right-btn="rightBtn"
      class="pa-transfer-layout-tree"
    >
      <template v-if="$slots['left-header']" v-slot:left-header>
        <slot name="left-header" />
      </template>
      <template v-slot:left>
        <slot name="left-condition" />
        <pa-input
          v-if="filterable"
          v-model="leftQuery"
          :placeholder="placeholderText"
          clearable
        >
          <pa-icon slot="prefix" name="icon-sousuo" />
        </pa-input>
        <pa-table
          :data="leftTableFilterData"
          @checkbox-change="leftHandleSelectionChange"
          @checkbox-all="leftHandleSelectionChange"
        >
          <pa-table-column type="checkbox" width="50px" align="center" />
          <pa-table-column
            v-for="(item, index) in tableColumn"
            :key="index"
            :field="item.keyWord"
            :title="item.label"
            :width="item.width + 'px'"
            :show-overflow-tooltip="item.showTooltip"
          ></pa-table-column>
        </pa-table>
      </template>
      <template v-if="$slots['right-header']" v-slot:right-header>
        <slot name="right-header" />
      </template>
      <template v-slot:right>
        <slot name="right-condition" />
        <pa-input
          v-if="filterable"
          v-model="rightQuery"
          :placeholder="placeholderText"
          clearable
        >
          <pa-icon slot="prefix" name="icon-sousuo" />
        </pa-input>
        <pa-table
          :data="rightTableFilterData"
          @checkbox-change="rightHandleSelectionChange"
          @checkbox-all="rightHandleSelectionChange"
        >
          <pa-table-column type="checkbox" width="50px" align="center" />
          <pa-table-column
            v-for="(item, index) in tableColumn"
            :key="index"
            :field="item.keyWord"
            :title="item.label"
            :width="item.width + 'px'"
            :show-overflow-tooltip="item.showTooltip"
          ></pa-table-column>
        </pa-table>
      </template>
    </pa-transfer-layout>
  </div>
</template>
<script>
import PaTransferLayout from "./transfer-layout.vue";
export default {
  name: "PaTransferTable",
  components: {
    PaTransferLayout,
  },
  props: {
    nodeKey: {
      type: String,
      default() {
        return "id";
      },
    },
    filterable: {
      type: Boolean,
      default() {
        return false;
      },
    },
    filterKeyWords: {
      type: Array,
      default() {
        return ["id"];
      },
    },
    tableDataSource: {
      type: Array,
      default() {
        return [];
      },
    },
    tableDataTarget: {
      type: Array,
      default() {
        return [];
      },
    },
    tableColumn: {
      type: Array,
      default() {
        return [];
      },
    },
    searchConditionsAnd: {
      type: Object,
      default() {
        return {
          keyWord: "",
          value1: "",
          value2: "",
        };
      },
    },
  },
  data() {
    return {
      leftQuery: null, //左边过滤输入的值
      rightQuery: null, //右边过滤输入的值
      leftTableData: [], //左边本地数据
      rightTableData: [], // 右边本地数据
      leftMultipleSelection: [], //左边勾选的数据
      rightMultipleSelection: [], //右边勾选的数据
      placeholderText: "请输入内容",
      leftBtnDisabled: true,
      rightBtnDisabled: true,
    };
  },
  computed: {
    //左边过滤后的数据
    leftTableFilterData() {
      let _leftTableFilterData = [];
      if (this.filterable && this.leftQuery) {
        for (let j = 0; j < this.leftTableData.length; j++) {
          for (let i = 0; i < this.filterKeyWords.length; i++) {
            let _str = this.leftTableData[j][this.filterKeyWords[i]].toString();
            let _indexOfStr = this.leftQuery.toString();
            if (_str.indexOf(_indexOfStr) != -1) {
              _leftTableFilterData.push(this.leftTableData[j]);
              break;
            }
          }
        }
      } else {
        _leftTableFilterData = this.leftTableData;
      }
      if (this.searchConditionsAnd.keyWord && this.searchConditionsAnd.value1) {
        _leftTableFilterData = _leftTableFilterData.filter((item) => {
          return (
            item[this.searchConditionsAnd.keyWord] ==
            this.searchConditionsAnd.value1
          );
        });
      }

      return _leftTableFilterData;
    },
    //右边过滤后的数据
    rightTableFilterData() {
      let _rightTableFilterData = [];
      if (this.filterable && this.rightQuery) {
        for (let j = 0; j < this.rightTableData.length; j++) {
          for (let i = 0; i < this.filterKeyWords.length; i++) {
            let _str =
              this.rightTableData[j][this.filterKeyWords[i]].toString();
            let _indexOfStr = this.rightQuery.toString();
            if (_str.indexOf(_indexOfStr) != -1) {
              _rightTableFilterData.push(this.rightTableData[j]);
              break;
            }
          }
        }
      } else {
        _rightTableFilterData = this.rightTableData;
      }
      if (this.searchConditionsAnd.keyWord && this.searchConditionsAnd.value2) {
        _rightTableFilterData = _rightTableFilterData.filter((item) => {
          return (
            item[this.searchConditionsAnd.keyWord] ==
            this.searchConditionsAnd.value2
          );
        });
      }
      return _rightTableFilterData;
    },
  },
  watch: {
    tableDataSource: {
      handler() {
        this.leftTableData = this.tableDataSource;
      },
      immediate: true,
    },
    tableDataTarget: {
      handler() {
        this.rightTableData = this.tableDataTarget;
      },
      immediate: true,
    },
    leftMultipleSelection: {
      handler(val) {
        if (val && val.length > 0) {
          this.rightBtnDisabled = false;
        } else {
          this.rightBtnDisabled = true;
        }
      },
    },
    rightMultipleSelection: {
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
    this.placeholderText = this.getPlaceholderText();
  },
  methods: {
    // 向左移动数据
    leftBtn() {
      this.leftTableData = [
        ...this.rightMultipleSelection,
        ...this.leftTableData,
      ];
      let rightSelectKeys = this.rightMultipleSelection.map((item) => {
        return item[this.nodeKey];
      });
      let _rightTableData = this.rightTableData.filter((item) => {
        if (!rightSelectKeys.includes(item[this.nodeKey])) return item;
      });
      this.rightTableData = [..._rightTableData];
      this.rightMultipleSelection = [];
      this.$emit("leftBtn");
    },
    // 向右移动数据
    rightBtn() {
      this.rightTableData = [
        ...this.leftMultipleSelection,
        ...this.rightTableData,
      ];
      let leftSelectKeys = this.leftMultipleSelection.map((item) => {
        return item[this.nodeKey];
      });
      let _leftTableData = this.leftTableData.filter((item) => {
        if (!leftSelectKeys.includes(item[this.nodeKey])) return item;
      });
      this.leftTableData = [..._leftTableData];
      this.leftMultipleSelection = [];
      this.$emit("rightBtn");
    },
    // 左边选择的数据
    leftHandleSelectionChange(val) {
      this.leftMultipleSelection = [...val?.records];
      this.$emit("leftTableSelect");
    },
    // 右边选择的数据
    rightHandleSelectionChange(val) {
      this.rightMultipleSelection = [...val?.records];
      this.$emit("rightTableSelect");
    },
    getPlaceholderText() {
      let _placeholderText = "请输入";
      this.filterKeyWords.forEach((item1, index1) => {
        this.tableColumn.forEach((item2) => {
          if (item2["keyWord"] == item1) {
            _placeholderText =
              _placeholderText + `${index1 != 0 ? "、" : ""}` + item2.label;
          }
        });
      });
      return _placeholderText;
    },
  },
};
</script>
<style lang="less" scoped></style>
