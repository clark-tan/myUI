/*
 * @Autor: clark tan
 * @Date: 2021-05-18 17:17:18
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-07 11:21:50
 * @Description:
 */
import Button from "./button.vue";
import ElButtonGroup from "./button-group.vue";

/* istanbul ignore next */
Button.install = function (Vue) {
  Vue.component(Button.name, Button);
  Vue.component(ElButtonGroup.name, ElButtonGroup);
};

export default Button;
