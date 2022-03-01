<template>
  <div class="page-header">
    <pa-header :system-name="systemName" :user-name="userName" @logout="logout">
      <div slot="headerContent" class="header-content">顶部自定义内容</div>
      <template slot="userMenu">
        <el-dropdown-item @click.native="userNavHandler('菜单一')">
          <span>菜单一</span>
        </el-dropdown-item>
        <el-dropdown-item @click.native="userNavHandler('菜单二')">
          <span>菜单二</span>
        </el-dropdown-item>
      </template>
    </pa-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      systemName: "医院闭环管理系统",
      userName: "系统管理员",
    };
  },
  methods: {
    logout() {
      window.console.log("退出登录");
    },
    userNavHandler(name) {
      window.console.log(name);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  height: 100%;
  .header-content {
    padding: 0 24px;
    line-height: 48px;
  }
}
</style>
