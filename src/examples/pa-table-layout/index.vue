<template>
  <div class="" style="width: 100%; height: 100vh">
    <pre>
      table-layout组件属性介绍：
        1、breadcrumbs：面包屑数据，结构与菜单数据相同；面包屑组件可以通过slot（breadcrumb）覆盖做个性化配置
        2、showBreadcrumb： 是否显示面包屑模块（默认值为true）
    </pre>

    <h3>使用layout自带的面包屑示例</h3>
    <table-layout
      :breadcrumbs="menu"
      search-layout
      :table-layout="false"
      breadcrumbs-layout
    >
      <template v-slot:search> 搜索自定义 </template>
      <template v-slot:table> 主要内容自定义 </template>
    </table-layout>

    <h3>自定义面包屑示例1</h3>
    <table-layout>
      <template v-slot:breadcrumb>
        <pa-breadcrumb
          :breadcrumbs="menu"
          :custom-suffix="customSuffix"
          :is-replace="true"
        />
      </template>
      <template v-slot:search> 搜索自定义 </template>
      <template v-slot:table> 主要内容自定义 </template>
    </table-layout>

    <h3>自定义面包屑示例2</h3>
    <table-layout>
      <template v-slot:breadcrumb>
        <pa-breadcrumb :is-custom="true">
          内容全部由业务系统定义
        </pa-breadcrumb>
      </template>
      <template v-slot:search> 搜索自定义 </template>
      <template v-slot:table>
        <pa-table
          :data="tableData1"
          :columns="columns1"
          :show-pager="false"
          :padding="false"
        />
      </template>
    </table-layout>

    <h3>不展示面包屑模块</h3>
    <table-layout :show-breadcrumb="false">
      <template v-slot:search> 搜索自定义 </template>
      <template v-slot:table> 主要内容自定义 </template>
    </table-layout>
  </div>
</template>

<script>
import menu from "../menu";
import {
  staticTableData0,
  staticTableData1,
  staticTableData2,
  staticTableData3,
  staticTableData4,
  staticTableData5,
  columns0,
  columns1,
  columns2,
  columns3,
  columns4,
  columns5,
} from "../table-test/test-data";

export default {
  name: "Index",
  data() {
    return {
      menu,
      breadcrumbs: [
        {
          path: "/",
          text: "首页",
        },
        {
          path: "/pahm-menu",
          text: "菜单菜单菜单菜单菜单菜单菜单",
        },
        {
          path: "/pahm-menu1",
          text: "菜单1菜单菜单菜单菜单菜单菜单菜单",
        },
      ],
      tableData0: staticTableData0,
      tableData1: staticTableData1,
      tableData2: staticTableData2,
      tableData3: [],
      tableData4: staticTableData3,
      tableData5: staticTableData4,
      tableData6: staticTableData5,
      columns0,
      columns1,
      columns2,
      columns3,
      columns4,
      columns5,
      customSuffix: [
        {
          path: "",
          meta: {
            title: "自定义面包屑替换",
          },
        },
      ],
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handlerClick(data) {
      // console.log(data);
    },
  },
};
</script>

<style scoped></style>
