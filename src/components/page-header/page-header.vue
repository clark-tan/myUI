<template>
  <div id="header">
    <div class="header-left">
      <pa-icon class="logo" v-if="logoIcon" :name="logoIcon" />
      <img class="logo" v-if="logoImg" :src="logoImg" />
      <h1 class="system-name">
        {{ systemName }}
      </h1>
    </div>
    <div class="header-customer">
      <slot name="headerContent" />
    </div>
    <div class="header-right">
      <pa-icon class="icon-user" :name="userIcon" />
      <el-dropdown trigger="click" class="user-nav">
        <span class="el-dropdown-link">
          <span>{{ userName }} </span>
          <pa-icon class="dropdown-icon" name="icon-xiala" />
        </span>
        <el-dropdown-menu slot="dropdown" class="user-nav-dropdown">
          <slot name="userMenu" />
          <el-dropdown-item @click.native="logout">
            <span>安全退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Dropdown, DropdownMenu, DropdownItem } from "element-ui";
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
export default {
  name: "PaHeader",
  components: {},
  props: {
    logoImg: {
      type: String,
      default: null,
    },
    logoIcon: {
      type: String,
      default: null,
    },
    systemName: {
      type: String,
      default: "",
    },
    userIcon: {
      type: String,
      default: "icon-yonghu",
    },
    userName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    logout() {
      // window.console.log('logout');
      this.$emit("logout");
    },
  },
};
</script>

<style lang="scss" scoped></style>
