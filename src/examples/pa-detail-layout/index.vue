<template>
  <div style="width: 100%; height: 100vh">
    <pre>
      detail-layout组件属性介绍：
        1、breadcrumbs：面包屑数据，结构与菜单数据相同；面包屑组件可以通过slot（breadcrumb）覆盖做个性化配置
        2、showBreadcrumb： 是否显示面包屑模块（默认值为true）
    </pre>

    <h3>使用layout自带的面包屑示例</h3>
    <detail-layout :breadcrumbs="menu">
      <template v-slot:detail-content> 详情 </template>
    </detail-layout>

    <h3>自定义面包屑示例1</h3>
    <detail-layout table-layout>
      <template v-slot:breadcrumb>
        <pa-breadcrumb
          :breadcrumbs="menu"
          :custom-suffix="customSuffix"
          :is-replace="true"
        />
      </template>
      <template v-slot:detail-content> 详情 </template>
    </detail-layout>
  </div>
</template>

<script>
import menu from "../menu";

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
