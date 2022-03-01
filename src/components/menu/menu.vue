<template>
  <div id="menu" class="pa-menu">
    <el-scrollbar style="height: 100%">
      <el-menu
        class="menu"
        router
        :collapse="menuCollapse"
        :default-active="defaultActive"
      >
        <!-- 路由匹配不上菜单时激活此不显示的菜单 -->
        <el-menu-item index="none" class="hidden" />

        <template v-for="item in menuTree">
          <template>
            <el-submenu
              v-if="isSubmenu(item)"
              :key="item.path || item.id || item.key"
              :index="item.path"
              :disabled="disabledFun(item)"
              :class="{
                hidden: hiddenFun(item),
                'has-icon': !!item.meta.icon,
                'none-icon': !item.meta.icon,
              }"
            >
              <template slot="title">
                <pa-icon class="icon" :name="item.meta.icon" />
                <span>{{ item.meta.title }}</span>
              </template>
              <template v-for="child in item.children">
                <el-menu-item
                  v-if="!child.meta.isIndexDetail"
                  :key="child.path || child.id || child.key"
                  :index="child.path"
                  :disabled="disabledFun(child)"
                  :class="{ hidden: hiddenFun(child) }"
                >
                  {{ child.meta.title }}
                </el-menu-item>
              </template>
            </el-submenu>
            <el-menu-item
              v-else
              :key="item.path || item.id || item.key"
              :index="item.path"
              :disabled="disabledFun(item)"
              :class="{
                hidden: hiddenFun(item),
                'has-icon': !!item.meta.icon,
                'none-icon': !item.meta.icon,
              }"
            >
              <pa-icon class="icon" :name="item.meta.icon" />
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
    <div class="collapse-handler" @click="collapseHandler">
      <pa-icon
        class="icon"
        :name="menuCollapse ? 'icon-shouqi' : 'icon-zhankai'"
        :svg-style="{ 'font-size': '24px' }"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Menu, Submenu, MenuItem, Scrollbar } from "element-ui";
Vue.use(Scrollbar);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
import { generatorMenu, listToTree, getParentId } from "../utils/common";
export default {
  name: "PaMenu",
  components: {},
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
    permission: {
      type: Array,
      default: () => [], // 权限数据，String[]，如：['A', 'B']
    },
    collapse: {
      type: Boolean,
      default: false, // 是否收起
    },
    isTree: {
      type: Boolean,
      default: true,
    },
    disabledFun: {
      type: Function,
      default: () => {
        return false;
      },
    },
    hiddenFun: {
      type: Function,
      default: () => {
        return false;
      },
    },
  },
  data() {
    return {
      menuCollapse: false,
    };
  },
  computed: {
    menuTree() {
      const menuList = [...this.menu];
      let menuTree = menuList;
      if (menuList.length < 1) {
        return menuTree;
      }
      if (!this.isTree) {
        menuTree = listToTree(menuList, 0);
        menuTree = generatorMenu(menuTree)[0].children;
      } else {
        menuTree = generatorMenu(menuTree);
      }
      return menuTree;
    },
    defaultActive() {
      // 如果有name则有限匹配name，没有则匹配path
      const currentName =
        this.$route?.matched.length > 0
          ? this.$route?.matched[this.$route?.matched.length - 1]?.name
          : this.$route?.name;
      const currentPath =
        this.$route?.matched.length > 0
          ? this.$route?.matched[this.$route?.matched.length - 1]?.path
          : this.$route?.path;

      const parent = getParentId(this.menuTree, currentName, currentPath) || [];

      parent.reverse();
      if (parent && parent.length > 1) {
        if (parent[parent.length - 1].meta.isIndexDetail) {
          return parent[0].path;
        }
        return parent[1].path;
      }
      if (parent && parent.length == 1) {
        return parent[0].path;
      }
      return currentPath;
    },
  },
  watch: {
    collapse: {
      handler(value) {
        this.menuCollapse = value;
      },
      immediate: true,
    },
  },
  methods: {
    collapseHandler() {
      this.menuCollapse = !this.menuCollapse;
      this.$nextTick(() => {
        this.$root.$emit("resize", {
          id: "PaTable",
        });
      });
    },
    checkPermission(nav) {
      // funcCode为空表示该菜单无须权限
      if (!nav.funcCode) {
        return true;
      }
      return this.permission.includes(nav.funcCode);
    },
    isSubmenu(menu) {
      return (
        menu.children && menu.children.some((item) => !item.meta.isIndexDetail)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
#menu {
  .hidden {
    display: none;
  }
}
</style>
