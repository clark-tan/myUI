<template>
  <div class="layout-content pa-table-layout">
    <Base
      :show-breadcrumb="showBreadcrumb"
      :breadcrumbs="breadcrumbs"
      :breadcrumbs-layout="breadcrumbsLayout"
    >
      <template v-slot:breadcrumb>
        <slot name="breadcrumb" />
      </template>
      <template v-slot:content>
        <div
          :class="[
            'query-content',
            'part',
            {
              'search-layout': searchLayout,
            },
          ]"
          :style="searchStyle"
        >
          <slot name="search" />
        </div>
        <div
          :class="[
            'box-content',
            'part',
            {
              'table-layout': tableLayout,
            },
          ]"
        >
          <slot name="table" />
        </div>
      </template>
    </Base>
  </div>
</template>

<script>
import { Utils } from "@/components/utils/utils";
import Base from "../Base";
export default {
  name: "TableLayout",
  components: {
    Base,
  },
  props: {
    showBreadcrumb: {
      type: Boolean,
      default: true,
    },
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
    breadcrumbsLayout: {
      type: Boolean,
      default: true,
    },
    searchLayout: {
      type: Boolean,
      default: true,
    },
    tableLayout: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isIe: Utils.getNavigator() === "Ie",
      searchStyle: {},
      tableStyle: {},
    };
  },
  mounted() {
    this.$root.$emit("resize", { id: "PaTable" });
    // ie下弹性布局问题
    if (this.isIe) {
      this.searchStyle = {
        overflow: "hidden",
      };
    }
  },
};
</script>

<style scoped lang="scss">
.layout-content {
  height: 100%;
  .query-content {
    //padding: 16px 16px 16px 22px;
    margin-bottom: 8px;
  }
  .box-content {
    flex: 1 auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .main-content {
      flex: 1 auto;
    }
    .operate-content {
      padding: 8px 16px 8px 22px;
    }
  }
}
</style>
