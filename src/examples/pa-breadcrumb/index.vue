<template>
  <div>
    <div>面包屑: <b>示例请在菜单组件中查看</b></div>
    <pre>
      面包屑组件属性：
        1、breadcrumbs：传入路由堆栈信息（this.$route.matched）
        2、customSuffix: 自定义最后一层面包屑名称（可不传，主要用于最后一层自定义名称）
        3、isReplace: 自定义的面包屑是否替换路由生成的面包屑最后一级（默认值为false，如果需要替换可传入true）
        4、isCustom: 是否自定义面包屑（默认值为false）
    </pre>
    <!-- <pa-breadcrumb :breadcrumbs.sync="breadcrumbs" router @handlerClick="handlerClick" />
    <h3>属性</h3>
    <div>breadcrumbs: 面包屑数据 类型： Array 格式 数组对象， text: 显示文本 path:路由跳转路径</div>
    <div>mode: 跳转模式 route：路由跳转（默认） link：自定义跳转</div>
    <div>link模式跳转回调方法：handlerClick</div>
    <div>link模式跳转回调参数：{{ params }}</div>
    <pa-button size="mini" @click.native="addBreadcrumb"> 添加面包屑 </pa-button> -->
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      breadcrumbs: [
        {
          path: "/home",
          text: "首页",
          title: "首页",
        },
        {
          path: "/pahm-menu",
          text: "菜单菜单菜单菜单菜单菜单菜单",
          title: "菜单菜单菜单菜单菜单菜单菜单",
        },
        {
          path: "/pahm-menu1",
          text: "菜单1菜单菜单菜单菜单菜单菜单菜单",
          title: "菜单菜单菜单菜单菜单菜单菜单",
        },
      ],
      params: [],
    };
  },
  methods: {
    addBreadcrumb() {
      this.breadcrumbs.push({
        path: "123232",
        text: "添加菜单菜单1菜单菜单菜单菜单菜单菜单菜单",
        title: "123321菜单",
      });
    },
    handlerClick(item) {
      this.params = JSON.stringify(item);
    },
  },
};
</script>

<style scoped></style>
