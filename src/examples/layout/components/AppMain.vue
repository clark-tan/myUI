<!--
 * @Autor: clark tan
 * @Date: 2021-05-26 15:06:58
 * @LastEditors: clark tan
 * @LastEditTime: 2021-05-26 17:46:42
 * @Description:
-->
<template>
  <section class="app-main">
    <!--     <div  class="breadcrumb-container">此处替换面包屑</div>-->
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {
      cachedViews: [],
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 48px);
  min-width: 1280px - 208px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
