/*
 * @Autor: clark tan
 * @Date: 2021-05-18 17:17:18
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-05 14:15:19
 * @Description:
 */
import PaPopConfirm from "./popconfirm.vue";

PaPopConfirm.install = function (Vue) {
  Vue.component(PaPopConfirm.name, PaPopConfirm);
};

export default PaPopConfirm;
