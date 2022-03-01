<template>
  <div class="layout-content pa-detail-layout">
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
            'box-content',
            'part',
            {
              'table-layout': tableLayout,
            },
          ]"
        >
          <slot name="detail-content" />
        </div>
      </template>
    </Base>
  </div>
</template>

<script>
import Base from "../Base";
export default {
  name: "DetailLayout",
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
    tableLayout: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.$root.$emit("resize", { id: "PaTable" });
  },
};
</script>

<style scoped lang="scss">
.layout-content {
  height: 100%;
}
.box-content {
  height: 100%;
  overflow-y: auto;
}
</style>
