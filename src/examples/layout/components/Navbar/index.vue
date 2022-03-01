<!--
 * @Autor: clark tan
 * @Date: 2021-06-28 17:02:14
 * @LastEditors: clark tan
 * @LastEditTime: 2021-07-01 19:46:41
 * @Description: 
-->
<template>
  <div class="page-header">
    <pa-header
      :system-name="systemName"
      :user-name="userName"
      :logoIcon="'icon-shuban'"
      @logout="logout"
    >
      <div slot="headerContent" class="header-content">
        <pa-icon
          :svgClass="'menuBtn'"
          @click="$store.commit('menuCollapse')"
          :name="menuCollapse ? 'icon-shouqi' : 'icon-zhankai'"
        ></pa-icon>
        <div class="look-btn">
          <pa-button
            class="look-doc-btn"
            size=""
            type="text"
            @click="goToUpdate"
            >更新日志</pa-button
          >
          <el-divider direction="vertical"></el-divider>
          <pa-button class="look-doc-btn" size="" type="text" @click="goToDoc"
            >组件文档</pa-button
          >
        </div>
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
import { mapState } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      systemName: "iHybrid design pro",
      userName: "系统管理员",
    };
  },
  computed: {
    ...mapState(["menuCollapse"]),
  },
  created() {
    this.$pahmUtils.title.update("iHybrid design pro");
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
    goToDoc() {
      const path = this.$router.resolve({
        path: "/doc",
      });
      window.open(path.href);
    },
    goToUpdate() {
      const path = this.$router.resolve({
        name: "update",
      });
      window.open(path.href);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  .header-content {
    padding: 0 24px;
    line-height: 48px;
    .menuBtn {
      font-size: 18px;
    }
  }
  .look-btn {
    float: right;
    height: 48px;
    display: flex;
    align-items: center;
  }
  .look-doc-btn {
    color: #fff;
    font-weight: 400;
  }
}
</style>
