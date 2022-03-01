/*
 * @Autor: clark tan
 * @Date: 2021-12-31 14:15:30
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-13 15:53:52
 * @Description:
 */
import PaTabs from "./tabs.vue";
import { TabPane } from "element-ui";

PaTabs.install = function (Vue) {
  Vue.component("PaTabsS", PaTabs);
  Vue.component("PaTabPaneS", TabPane);
};

export default PaTabs;
