<template>
  <div v-close class="mult-select">
    <!-- v-close -->
    <div class="result-box" @click="togglePop">
      <div class="flex-inner-box">
        <span v-if="selectedList.length < 1" class="empty">
          {{ placeholder }}
        </span>
        <div v-else>
          已选择：
          <div class="select-item">
            {{ selectedList[0][replaceFields.title] }}
            <span
              class="remove"
              @click.stop="handleRemoveItem(selectedList[0])"
            >
              <pa-icon name="icon-guanbi" class="icon-remove" />
            </span>
          </div>
          <div v-if="selectedList.length > 1" class="select-item">
            +
            {{ selectedList.length - 1 }}
          </div>
        </div>
      </div>
      <pa-icon
        :class="['el-icon-arrow-down', { open: isShowSelect }]"
        name="icon-xiala"
      />
    </div>
    <!-- v-close -->
    <div v-if="isShowSelect" class="drop-down-box" @click="showPop">
      <div class="drop-down-left">
        <pa-input
          v-model.trim="searchText"
          :placeholder="searchPlaceholder"
          @input="filterOption"
        >
          <pa-icon slot="prefix" name="icon-sousuo" class="svg-search" />
        </pa-input>
        <pa-checkbox
          v-model="isCheckAll"
          :indeterminate="indeterminate"
          @change="handleCheckAllChange"
        >
          全部
        </pa-checkbox>
        <pa-checkbox-group v-model="checkedList" @change="handleGroupChange">
          <pa-checkbox
            v-for="(item, index) in checkOptions"
            :key="'drop_' + item[replaceFields.key] + index"
            :label="item[replaceFields.key]"
            @change="handleCheckBox($event, item[replaceFields.key])"
          >
            {{ item[replaceFields.title] }}
          </pa-checkbox>
        </pa-checkbox-group>
      </div>

      <div class="drop-down-middle" />

      <div class="drop-down-right">
        <div class="select-title">
          <span class="flex-1">已选择({{ selectedList.length }})</span>
          <div class="clear" @click="handleClear">清空</div>
        </div>
        <div class="select-list">
          <div
            v-for="(item, index) in selectedList"
            :key="'item_' + item[replaceFields.key] + index"
            :class="[
              'select-item',
              { disable: item[filterFields.key] == filterFields.value },
            ]"
          >
            {{ item[replaceFields.title] }}
            <span class="remove" @click.stop="handleRemoveTemp(item)">
              <pa-icon name="icon-guanbi" class="icon-remove" />
            </span>
          </div>
        </div>
      </div>

      <div class="fixed-bottom">
        <pa-button
          type="defalut"
          class="default-ant-btn"
          @click.native.stop="handleCancel"
        >
          取消
        </pa-button>
        <pa-button type="primary" @click.native.stop="handleConfirm">
          确认
        </pa-button>
      </div>
    </div>
  </div>
</template>

<script>
import "./style";

export default {
  name: "PaMultipleSelect",
  directives: {
    close: {
      inserted(el, binding, vnode) {
        document.addEventListener("click", (e) => {
          if (!el.contains(e.target)) {
            vnode.context.isShowSelect = false;
          }
        });
      },
    },
  },
  model: {
    prop: "vModel",
    event: "change",
  },
  props: {
    // 所有下拉选项（包含已禁用数据）
    allOptions: {
      type: Array,
      default: () => [],
    },
    vModel: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
    searchPlaceholder: {
      type: String,
      default: "请输入",
    },
    replaceFields: {
      type: Object,
      default: () => {
        return {
          title: "title",
          key: "key",
        };
      },
    },
    filterFields: {
      type: Object,
      default: () => {
        return {
          key: "valid",
          value: "0",
        };
      },
    },
  },
  data() {
    return {
      searchText: "",
      isShowSelect: false,
      indeterminate: false,
      isCheckAll: false,
      selectedList: [], // 右侧已选择列表
      checkedList: [], // 左侧复选框已选集合
      resultList: [], // 文本框筛选结果集合
      checkOptions: [], // 过滤后的下拉选项（去掉已禁用数据）
      modelCopy: [],
    };
  },
  watch: {
    allOptions: {
      immediate: true,
      handler() {
        this.checkOptions =
          this.allOptions.filter(
            (item) => item[this.filterFields.key] != this.filterFields.value
          ) || [];
      },
    },
    vModel: {
      immediate: true,
      handler() {
        setTimeout(() => {
          this.modelCopy = Array.isArray(this.vModel)
            ? JSON.parse(JSON.stringify(this.vModel))
            : [];
          if (Array.isArray(this.vModel) && this.vModel.length > 0) {
            this.getBackFill();
          }
        }, 200);
      },
    },
  },
  methods: {
    // 编辑回填文本框及右侧选项数据
    getBackFill() {
      const _checkedList = this.vModel || [];
      const key = this.replaceFields.key;
      // 从全部列表中回显右侧已选数据以及文本框数据(按选择顺序回显)
      // this.selectedList = this.allOptions.filter(item => _checkedList.includes(item[key]));
      this.selectedList = [];
      _checkedList.map((val) => {
        this.allOptions.map((item) => {
          if (val === item[key]) {
            this.selectedList.push(item);
          }
        });
      });
      this.resultList = this.selectedList;
      // 从过滤后的列表中筛选出已被勾选数据
      const _checkListCodes = [];
      this.checkOptions.map((item) => _checkListCodes.push(item[key]));
      this.checkedList = _checkListCodes.filter((item) =>
        _checkedList.includes(item)
      );
      // 判断全选按钮状态
      this.switchAllStatus();
    },

    // 点击确认关闭
    handleConfirm() {
      this.isShowSelect = false;
      // 把已选择的回填至文本框
      this.resultList = this.selectedList;
      const resultModel = [];
      const key = this.replaceFields.key;
      this.resultList.map((item) => resultModel.push(item[key]));
      this.$emit("change", resultModel);
    },
    handleCancel() {
      this.isShowSelect = false;
      // 重置为回显的列表
      const key = this.replaceFields.key;
      this.selectedList = [];
      this.modelCopy.map((val) => {
        this.allOptions.map((item) => {
          if (val === item[key]) {
            this.selectedList.push(item);
          }
        });
      });
      this.$emit("change", this.modelCopy);
    },
    // 点击下拉框不隐藏
    showPop() {
      this.isShowSelect = true;
    },
    // 下拉框显示切换
    togglePop() {
      this.isShowSelect = !this.isShowSelect;
      this.$emit("togglePop");
      if (this.isShowSelect) {
        this.getBackFill();
      }
    },
    // 清空
    handleClear() {
      this.checkedList = [];
      this.selectedList = [];
      this.switchAllStatus();
    },
    // 复选框值变化事件
    handleGroupChange() {
      this.switchAllStatus();
    },
    // 全选状态变更
    switchAllStatus() {
      this.isCheckAll = this.checkedList.length === this.checkOptions.length;
      this.isIndeterminate =
        this.checkedList > 0 && this.checkedList < this.checkOptions.length;
    },
    // 复选框单个点击事件
    handleCheckBox(val, selectVal) {
      const key = this.replaceFields.key;
      if (val) {
        const newItem = this.checkOptions.filter(
          (item) => item[key] == selectVal
        );
        this.selectedList = [...this.selectedList, ...newItem];
      } else {
        this.selectedList = this.selectedList.filter(
          (item) => item[key] != selectVal
        );
      }
    },
    // 文本框做单个移除
    handleRemoveItem(item) {
      const key = this.replaceFields.key;
      // this.resultList = this.resultList.filter(val => val[key] !== item[key]);
      this.modelCopy = this.modelCopy.filter((val) => val !== item[key]);
      this.handleRemoveTemp(item);
    },
    // 右侧已选择做单个移除
    handleRemoveTemp(item) {
      const key = this.replaceFields.key;
      this.selectedList = this.selectedList.filter(
        (val) => val[key] !== item[key]
      );
      this.checkedList = this.checkedList.filter((val) => val !== item[key]);
      this.switchAllStatus();
    },
    // 多选下拉框搜索过滤
    filterOption() {
      // 重新查询时恢复所有数据
      this.checkOptions =
        this.allOptions.filter(
          (item) => item[this.filterFields.key] != this.filterFields.value
        ) || [];
      const result = this.checkOptions.filter(
        (item) =>
          item[this.replaceFields.title]
            .toLowerCase()
            .indexOf(this.searchText.toLowerCase()) >= 0
      );
      this.checkOptions = result;
    },
    // 点击全选
    handleCheckAllChange(value) {
      const checked = value;
      const key = this.replaceFields.key;
      let _checkedList = []; // 所有选项code集合
      let _checkedListItem = []; // 所有选项集合
      let _selectedList = [];
      this.checkOptions.map((item) => {
        _checkedList.push(item[key]);
        _checkedListItem.push(item);
      });
      if (checked) {
        this.isCheckAll = true;
        // 全选求并集
        _selectedList = this.selectedList.concat(
          _checkedListItem.filter((v) => !this.selectedList.includes(v))
        );
      } else {
        this.isCheckAll = false;
        _checkedList = [];
        // 全不选求差集
        _selectedList = _checkedListItem
          .concat(this.selectedList)
          .filter(
            (v) =>
              this.selectedList.includes(v) && !_checkedListItem.includes(v)
          );
      }
      this.selectedList = _selectedList;
      this.checkedList = _checkedList;
      this.indeterminate = false;
    },

    bindEvent() {},
  },
};
</script>

<style lang="less" scoped>
div {
  box-sizing: border-box;
}
</style>
