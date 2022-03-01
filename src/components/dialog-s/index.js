/*
 * @Autor: clark tan
 * @Date: 2021-12-31 14:15:30
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-04 09:41:03
 * @Description:
 */
import Dialog from "./dialog.vue";

/* istanbul ignore next */
Dialog.install = function (Vue) {
  console.log(Dialog.options.name, "Dialog.name");
  Vue.component(Dialog.options.name, Dialog);
};

export default Dialog;
