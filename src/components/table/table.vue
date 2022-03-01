<template>
  <div
    :class="[
      `pa-table`,
      {
        'is-padding': autoPadding,
      },
    ]"
  >
    <vxe-toolbar
      v-if="$scopedSlots['toolbar-left'] || $scopedSlots['toolbar-right']"
    >
      <template #buttons>
        <slot name="toolbar-left" />
      </template>
      <template #tools>
        <slot name="toolbar-right" />
      </template>
    </vxe-toolbar>
    <vxe-table
      ref="xTable"
      v-loading.lock="loading"
      auto-resize
      class="table-scrollbar"
      :class="{ 'hidden-pager': isHiddenPager }"
      size="default"
      v-bind="$attrs"
      :height="autoHeight"
      :align="allAlign"
      resizable
      v-on="$listeners"
    >
      <pa-table-column
        v-for="(item, index) in columns"
        :key="index"
        v-bind="item"
      />
      <slot />
      <template #empty>
        <span>
          <!-- <img src="./assets/icon-nodata.svg" /> -->
          <div class="nodata" />
          <p class="nodata-tips">暂无数据</p>
        </span>
      </template>
    </vxe-table>
    <vxe-pager
      v-if="showPager"
      :class="{ 'hidden-pager': isHiddenPager }"
      :current-page.sync="pagination.currentPage"
      :page-size.sync="pagination.pageSize"
      :total="pagerTotal"
      :layouts="[
        'Total',
        'Sizes',
        'PrevPage',
        'JumpNumber',
        'NextPage',
        'FullJump',
      ]"
      @page-change="onPageChange"
    >
      <template #left>
        <span v-if="checkedLength != 0"> 已选 {{ checkedLength }} 条 </span>
        <slot name="pager-left" />
      </template>
    </vxe-pager>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Table, RowInfo, PagerOptions } from "vxe-table";
import { Utils } from "../utils/utils";

@Component({
  props: {
    // 表格列配置
    columns: {
      type: Array,
      default: () => [],
    },
    // 表格高度
    height: {
      type: String,
      default: "0",
    },
    // 表格内容位置
    allAlign: {
      type: String,
      default: "left",
    },
    // 是否显示分页器
    showPager: {
      type: Boolean,
      default: true,
    },
    // 是否显示加载中
    loading: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          currentPage: 1,
          pageSize: 10,
          total: 0,
        };
      },
    },
    padding: {
      type: Boolean,
      default: false,
    },
  },
})
export default class PaTable extends Vue {
  showPager!: boolean;
  pagination!: PagerOptions;
  // pager: PagerOptions = {
  //   currentPage: this.pagination.currentPage ? this.pagination.currentPage : 1,
  //   pageSize: this.pagination.pageSize ? this.pagination.pageSize : 10,
  //   total: this.pagination.total ? this.pagination.total : 0,
  // };
  tableData = this.$attrs.data;

  // 是否默认设置左右间距
  padding!: boolean;
  autoPadding = false;

  height!: number | string;
  autoHeight = this.height;

  @Watch("height")
  onHeightChanged() {
    this.getAutoTableHeight();
  }
  @Watch("isHiddenPager")
  onIsHiddenPagerChanged() {
    this.getAutoTableHeight();
  }
  /**
   * 是否显示分页器
   * @returns Boolean
   */
  get isHiddenPager(): boolean {
    return !this.showPager || this.$attrs.data.length == 0;
  }

  get pagerTotal() {
    return this.pagination.total == 0
      ? this.tableData.length
      : this.pagination.total;
  }

  /**
   * 勾选数量
   * @returns Number| any
   */
  get checkedLength(): any {
    let checkedRecords = (this.$refs["xTable"] as Table).getCheckboxRecords();
    return checkedRecords.length;
  }

  onPageChange(obj: any) {
    this.$emit("page-change", obj);
  }
  isActiveByRow(row: RowInfo) {
    return (this.$refs.xTable as Table).isActiveByRow(row);
  }
  setActiveRow(row: RowInfo) {
    return (this.$refs.xTable as Table).setActiveRow(row);
  }
  clearActived() {
    return (this.$refs.xTable as Table).clearActived();
  }
  revertData(row: RowInfo) {
    return (this.$refs.xTable as Table).revertData(row);
  }
  validate(row: RowInfo) {
    return (this.$refs.xTable as Table).validate(row);
  }
  /**
   * 返回表格实例
   * @returns Table
   */
  getInstance(): Table {
    return this.$refs.xTable as Table;
  }

  /**
   * 只有在table-layout中才给默认padding
   * 属于自动计算，如果配置padding，以padding为主
   * @returns Boolean
   */
  getAutoPadding(): boolean {
    return !!this.padding;
  }

  /**
   * 计算高度
   * 允许有同级元素
   * @returns void
   */
  getAutoTableHeight(): void {
    this.$nextTick(() => {
      if (Number(this.height)) {
        this.autoHeight = String(this.height);
        return;
      }
      const parentEl: HTMLElement = this.$el.parentElement || document.body;
      if (!Utils.innerHeight(parentEl)) {
        this.autoHeight = "400";
        return;
      }
      const hashMap = new Map();
      for (const element of parentEl.children) {
        if (element === this.$el) {
          hashMap.set(element, 0);
        } else {
          hashMap.set(element, Utils.outHeight(element));
        }
      }
      // 分页区域高度
      const footerHeight = this.isHiddenPager ? 8 : 80;
      // 工具栏区域高度
      const hasToolbar = !!(
        this.$scopedSlots["toolbar-left"] || this.$scopedSlots["toolbar-right"]
      );
      const toolbarHeight = hasToolbar ? 48 : 0;
      let computedHeight =
        Utils.innerHeight(parentEl) - toolbarHeight - footerHeight;
      hashMap.forEach((v) => {
        computedHeight -= v;
      });
      if (computedHeight < 96) {
        computedHeight = 96;
        parentEl.style.overflowY = "auto";
      }
      this.autoHeight = String(computedHeight);
    });
  }

  /**
   * 绑定监听
   * @returns void
   */
  bindEvents(): void {
    this.$root.$on("resize", (p: any) => {
      if (p.id === "PaTable") {
        this.getAutoTableHeight();
        this.$forceUpdate();
      }
    });
  }

  initComp(): void {
    this.bindEvents();
    this.autoPadding = this.getAutoPadding();
    this.getAutoTableHeight();
    window.addEventListener("resize", this.getAutoTableHeight);
  }
  mounted() {
    this.initComp();
  }

  activated() {
    this.$root.$emit("resize", {
      id: "PaTable",
      activated: true,
    });
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.getAutoTableHeight);
  }
}
</script>

<style scoped lang="less">
@import "./table.less";
</style>
<style lang="scss">
/* tooltip的dom在表格组件之外 */
.vxe-table--tooltip-wrapper.theme--dark {
  background: #666;
  z-index: 10000 !important;
  border-radius: 2px;
}

.vxe-table--tooltip-wrapper.theme--dark.placement--top
  .vxe-table--tooltip-arrow,
.vxe-table--tooltip-wrapper.theme--dark.placement--top
  .vxe-table--tooltip-arrow:before {
  border-top-color: #666;
}

/* radio */
.vxe-table--render-default
  .vxe-cell--radio:not(.is--disabled):hover
  .vxe-radio--icon:before {
  border-color: #0066cc;
}
.vxe-table--render-default
  .vxe-cell--radio.is--checked
  .vxe-radio--checked-icon:before {
  border-color: #0066cc;
  background-color: #0066cc;
}

/* checkbox */
.vxe-table--render-default
  .vxe-cell--checkbox:not(.is--disabled):hover
  .vxe-checkbox--icon:before {
  border-color: #0066cc;
}
.vxe-table--render-default
  .vxe-cell--checkbox.is--indeterminate
  .vxe-checkbox--icon:before,
.vxe-table--render-default
  .vxe-cell--checkbox.is--checked
  .vxe-checkbox--icon:before {
  border-color: #0066cc;
  background-color: #0066cc;
}
</style>
