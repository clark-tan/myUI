/*
 * @Autor: clark tan
 * @Date: 2021-12-21 13:46:42
 * @LastEditors: clark tan
 * @LastEditTime: 2021-12-21 17:51:45
 * @Description:
 */
import "core-js/stable";
import "regenerator-runtime/runtime";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
Vue.use(ElementUI);
import "./components/style.js";
import Pa from "./components/index.js";
import pahmUtils from "./components/utils.js";
Vue.prototype.$pahmUtils = pahmUtils;
Vue.use(Pa);

Vue.config.productionTip = false;

window.exampleInstance = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
