/*
 * @Autor: clark tan
 * @Date: 2021-06-17 10:25:34
 * @LastEditors: clark tan
 * @LastEditTime: 2021-06-22 19:41:38
 * @Description:
 */
import PaMenu from "./menu.vue";

/* istanbul ignore next */
PaMenu.install = function (Vue) {
  Vue.component(PaMenu.name, PaMenu);
};

export default PaMenu;
