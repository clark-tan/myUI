/*
 * @Autor: clark tan
 * @Date: 2021-06-24 16:26:54
 * @LastEditors: clark tan
 * @LastEditTime: 2021-06-28 11:37:30
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import PahmButton from "../pa-button/index.vue";
import PahmFooter from "../pa-footer/index.vue";
import PahmSearchForm from "../pa-search-form/index.vue";
import PahmIcon from "../pa-icon";
import PahmMenu from "../pa-menu/index.vue";
import test from "./test";
Vue.use(VueRouter);
const routes = [
  ...test,
  {
    path: "/pahm-button",
    name: "PahmButton",
    component: PahmButton,
  },
  {
    path: "/pahm-footer",
    name: "PahmFooter",
    component: PahmFooter,
  },
  {
    path: "/pahm-search-form",
    name: "PahmSearchForm",
    component: PahmSearchForm,
  },
  {
    path: "/pahm-icon",
    name: "PahmIcon",
    component: PahmIcon,
  },
  {
    path: "/pahm-menu",
    name: "PahmMenu",
    component: PahmMenu,
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
