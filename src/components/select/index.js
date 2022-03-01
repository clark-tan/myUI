/*
 * @Autor: clark tan
 * @Date: 2021-05-18 17:17:18
 * @LastEditors: clark tan
 * @LastEditTime: 2021-05-24 14:42:08
 * @Description:
 */
import Select from "./select.vue";

/* istanbul ignore next */
Select.install = function (Vue) {
  Vue.component(Select.name, Select);
};

export default Select;
