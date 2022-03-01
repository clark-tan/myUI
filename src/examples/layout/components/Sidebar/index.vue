<template>
  <pa-menu
    :menu="menu"
    :is-tree="true"
    :permission="permission"
    :collapse="menuCollapse"
  />
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {
      collapse: false,
      menu: [
        {
          id: "1",
          title: "错误页",
          path: "/1",
          children: [
            {
              id: "1-1",
              title: "200",
              path: "/examples/error-page-200",
              parentId: "1",
            },
            {
              id: "1-2",
              title: "403",
              path: "/examples/error-page-403",
              parentId: "1",
            },
            {
              id: "1-3",
              title: "404",
              path: "/examples/error-page-404",
              parentId: "1",
            },
            {
              id: "1-4",
              title: "500",
              path: "/examples/error-page-500",
              parentId: "1",
            },
          ],
        },
        {
          id: "2",
          title: "布局",
          path: "/2",
          children: [
            {
              id: "2-1",
              title: "常规列表",
              path: "/examples/normal-search-list",
              parentId: "1",
            },
            {
              id: "2-2",
              title: "多查询列表",
              path: "/examples/table-layout",
              parentId: "1",
            },
            {
              id: "2-3",
              title: "含tab列表",
              path: "/examples/tabs-list",
              parentId: "1",
            },
            {
              id: "2-4",
              title: "基础表单详情页",
              path: "/examples/detail-table",
              parentId: "1",
            },
            {
              id: "2-5",
              title: "复杂详情页",
              path: "/examples/normal-detail",
              parentId: "1",
            },
            {
              id: "2-6",
              title: "含tab详情页",
              path: "/examples/detail-tabs",
              parentId: "1",
            },
          ],
        },
      ],
      permission: ["ONE"],
    };
  },
  computed: {
    ...mapState(["menuCollapse"]),
  },
  mounted() {
    // console.log(this.$route.path);
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
