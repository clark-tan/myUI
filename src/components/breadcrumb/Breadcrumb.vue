<!--
 * @Autor: clark tan
 * @Date: 2021-06-21 20:58:18
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-10 17:48:05
 * @Description:
-->
<template>
  <div v-if="!isCustom" class="breadcrumb pa-breadcrumb">
    <el-breadcrumb
      v-if="breadcrumb.length > 0"
      separator-class="el-icon-arrow-right"
    >
      <div
        v-if="breadcrumb.length > 1"
        class="pa-breadcurmb-goback"
        @click="goIndex"
      >
        <pa-icon name="icon-mianbaoxiefanhui1" />
        <span class="pa-breadcurmb-goback-title">返回</span>
      </div>
      <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
        <pa-tooltip
          :content="item.meta && item.meta.title"
          placement="top"
          :disabled="item.meta.title.length <= maxLength || index === 0"
        >
          <router-link
            v-if="index != breadcrumb.length - 1"
            :to="{
              path: item.path === '' ? '/' : item.path,
              query: item.query || {},
            }"
          >
            {{ formatTitle(item.meta && item.meta.title) }}
          </router-link>
        </pa-tooltip>
        <span v-if="index == breadcrumb.length - 1">
          {{ item.meta && item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div v-else class="breadcrumb">
    <slot />
  </div>
</template>
<script>
import Vue from "vue";
import { Breadcrumb, BreadcrumbItem, Tooltip } from "element-ui";
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tooltip);
import { generatorMenu, getParentId } from "../utils/common";

export default {
  name: "PaBreadcrumb",
  components: {},
  props: {
    breadcrumbs: {
      // 数据
      type: Array,
      default: () => [],
    },
    maxLength: {
      type: Number,
      default: 14,
    },
    customSuffix: {
      type: Array,
      default: () => [],
    },
    isReplace: {
      type: Boolean,
      default: false,
    },
    isCustom: {
      type: Boolean,
      default: false,
    },
    router: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    // 格式化菜单结构
    menuList() {
      return generatorMenu(this.breadcrumbs) || [];
    },
    breadcrumb() {
      // 先从本地存储取面包屑数据，没有的话再取父组件传过来的数据
      // let _menuList = localStorage.getItem('pamenu') && JSON.parse(localStorage.getItem('pamenu'));
      // _menuList = _menuList || [...this.menuList];
      const _menuList = [...this.menuList];
      // 根据当前路由的path获取其所有关联父级信息
      const currentPath =
        this.$route?.matched.length > 0
          ? this.$route?.matched[this.$route?.matched.length - 1]?.path
          : this.$route?.path;
      let _levelInfo = getParentId(_menuList, currentPath) || [];
      _levelInfo.reverse();
      if (this.customSuffix.length > 0 && this.isReplace) {
        _levelInfo.pop();
      }
      const breadcrumb = [..._levelInfo, ...this.customSuffix];
      if (breadcrumb.length > 1) {
        if (breadcrumb[breadcrumb.length - 1].meta.isIndexDetail) {
          return breadcrumb;
        }
        breadcrumb.splice(0, 1);
        return breadcrumb;
      }
      return breadcrumb;
    },
  },
  methods: {
    formatTitle(v) {
      return v.length >= this.maxLength
        ? v.substr(0, this.maxLength) + "..."
        : v;
    },
    handlerLink(item, index) {
      let breadcrumbs = [];
      if (index >= 0 && index < this.breadcrumbs.length - 1) {
        breadcrumbs = [].concat(this.breadcrumbs).splice(0, index + 1);
        this.$emit("update:breadcrumbs", breadcrumbs);
      }
      // 判断父组件是否绑定了回调方法
      if (this.$listeners["handlerClick"]) {
        this.$emit("handlerClick", item);
      }
    },
    goIndex() {
      if (this.router) {
        const indexRoute = this.breadcrumb[0];
        this.$router.push({
          path: indexRoute.path ? indexRoute.path : "/",
        });
      } else {
        this.$emit("breadcrumbs-goback");
      }
    },
  },
};
</script>

<style scoped lang="scss">
// 变量
// 重置样式
.breadcrumb {
  font-size: 14px;
  ::v-deep .el-breadcrumb__inner.is-link,
  ::v-deep .el-breadcrumb__inner {
    > a {
      font-weight: normal;
      // display: inline-block;
      //max-width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
      float: left;
      color: #333;
      &:hover {
        color: #0066cc;
      }
    }
    > span {
      color: #999;
    }
  }
}
</style>
