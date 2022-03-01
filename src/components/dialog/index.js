/*
 * @Autor: clark tan
 * @Date: 2021-05-18 17:17:18
 * @LastEditors: clark tan
 * @LastEditTime: 2021-05-24 14:42:08
 * @Description:
 */
import Dialog from "./dialog.vue";

/* istanbul ignore next */
Dialog.install = function (Vue) {
  Vue.component(Dialog.name, Dialog);
};

export default Dialog;
