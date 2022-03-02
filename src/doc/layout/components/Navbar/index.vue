<!--
 * @Autor: clark tan
 * @Date: 2021-06-28 17:02:14
 * @LastEditors: clark tan
 * @LastEditTime: 2022-03-02 09:45:42
 * @Description: 
-->
<template>
  <div class="page-header">
    <pa-header
      :system-name="systemName"
      :logoImg="logoImg"
      :user-name="userName"
      @logout="logout"
    >
      <div slot="headerContent" class="header-content">
        <pa-icon
          :svg-class="'menuBtn'"
          :name="false ? 'icon-shouqi' : 'icon-zhankai'"
        />
        <span> 顶部自定义内容</span>
      </div>
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
import logoImg from "@/examples/logo-copyright.svg";
export default {
  name: "Navbar",
  data() {
    return {
      systemName: "my design",
      userName: "系统管理员",
      logoImg,
    };
  },

  created() {
    this.$pahmUtils.title.update("my design");
  },
  methods: {
    logout() {
      this.$paConfirm({
        title: "确定退出当前账号吗？",
        confirmButtonText: "退出",
      }).then(() => {
        window.console.log("退出登录");
      });
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
  .system-name {
    font-family: helvetica;
  }
  .header-content {
    padding: 0 24px;
    line-height: 48px;
    .menuBtn {
      font-size: 18px;
    }
  }
}
</style>
