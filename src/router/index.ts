/*
 * @Autor: clark tan
 * @Date: 2021-12-21 13:46:42
 * @LastEditors: clark tan
 * @LastEditTime: 2021-12-21 17:52:50
 * @Description:
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/examples",
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/doc",
    redirect: "/doc/installation",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../doc/layout/index.vue"),
    children: [
      {
        path: "/doc/installation",
        component: () =>
          import(
            /* webpackChunkName: "InstallationClass" */ "../doc/Installation/InstallationClass.js"
          ),
      },
      {
        path: "/doc/update",
        name: "update",
        component: () =>
          import(
            /* webpackChunkName: "PaUpdateClass" */ "../doc/Update/PaUpdateClass.js"
          ),
      },
      {
        path: "/doc/icon",
        component: () =>
          import(
            /* webpackChunkName: "PaIconClass" */ "../doc/Icon/PaIconClass.js"
          ),
      },
      {
        path: "/doc/button",
        component: () =>
          import(
            /* webpackChunkName: "PaButtonClass" */ "../doc/Button/PaButtonClass.js"
          ),
      },
      {
        path: "/doc/tooltip",
        component: () =>
          import(
            /* webpackChunkName: "PaTooltipClass" */ "../doc/ToolTip/PaTooltipClass.js"
          ),
      },
      {
        path: "/doc/pop-confirm",
        component: () =>
          import(
            /* webpackChunkName: "PaPopConfirmClass" */ "../doc/PopConfirm/PaPopConfirmClass.js"
          ),
      },
      {
        path: "/doc/date-picker",
        component: () =>
          import(
            /* webpackChunkName: "PaDatePickerClass" */ "../doc/DatePicker/PaDatePickerClass.js"
          ),
      },
      {
        path: "/doc/loading",
        component: () =>
          import(
            /* webpackChunkName: "PaLoadingClass" */ "../doc/Loading/PaLoadingClass.js"
          ),
      },
      {
        path: "/doc/message",
        component: () =>
          import(
            /* webpackChunkName: "PaMessageClass" */ "../doc/Message/PaMessageClass.js"
          ),
      },
      {
        path: "/doc/dialog",
        component: () =>
          import(
            /* webpackChunkName: "PaDialogClass" */ "../doc/Dialog/PaDialogClass.js"
          ),
      },
      {
        path: "/doc/message-box",
        component: () =>
          import(
            /* webpackChunkName: "PaMessageBoxClass" */ "../doc/MessageBox/PaMessageBoxClass.js"
          ),
      },
      {
        path: "/doc/drawer",
        component: () =>
          import(
            /* webpackChunkName: "PaDrawerClass" */ "../doc/Drawer/PaDrawerClass.js"
          ),
      },
      {
        path: "/doc/input",
        component: () =>
          import(
            /* webpackChunkName: "PaInputClass" */ "../doc/Input/PaInputClass.js"
          ),
      },
      {
        path: "/doc/input-number",
        component: () =>
          import(
            /* webpackChunkName: "PaInputNumberClass" */ "../doc/InputNumber/PaInputNumberClass.js"
          ),
      },
      {
        path: "/doc/checkbox",
        component: () =>
          import(
            /* webpackChunkName: "PaCheckBoxClass" */ "../doc/CheckBox/PaCheckBoxClass.js"
          ),
      },
      {
        path: "/doc/multiple-select",
        component: () =>
          import(
            /* webpackChunkName: "PaMultipleSelectClass" */ "../doc/MultipleSelect/PaMultipleSelectClass.js"
          ),
      },
      {
        path: "/doc/select",
        component: () =>
          import(
            /* webpackChunkName: "PaSelectClass" */ "../doc/Select/PaSelectClass.js"
          ),
      },
      {
        path: "/doc/footer",
        component: () =>
          import(
            /* webpackChunkName: "PaFooterClass" */ "../doc/Footer/PaFooterClass.js"
          ),
      },
      {
        path: "/doc/header",
        component: () =>
          import(
            /* webpackChunkName: "PaHeaderClass" */ "../doc/Header/PaHeaderClass.js"
          ),
      },
      {
        path: "/doc/table-layout",
        component: () =>
          import(
            /* webpackChunkName: "PaTableLayoutClass" */ "../doc/TableLayout/PaTableLayoutClass.js"
          ),
      },
      {
        path: "/doc/detail-layout",
        component: () =>
          import(
            /* webpackChunkName: "PaDetailLayoutClass" */ "../doc/DetailLayout/PaDetailLayoutClass.js"
          ),
      },
      {
        path: "/doc/menu",
        name: "menu",
        component: () =>
          import(
            /* webpackChunkName: "PaMenuClass" */ "../doc/Menu/PaMenuClass.js"
          ),
      },
      {
        path: "/doc/breadcrumb",
        component: () =>
          import(
            /* webpackChunkName: "PaBreadcrumbClass" */ "../doc/Breadcrumb/PaBreadcrumbClass.js"
          ),
      },
      {
        path: "/doc/tabs",
        component: () =>
          import(
            /* webpackChunkName: "PaTabsClass" */ "../doc/Tabs/PaTabsClass.js"
          ),
      },
      {
        path: "/doc/transfer",
        component: () =>
          import(
            /* webpackChunkName: "PaTransferClass" */ "../doc/Transfer/PaTransferClass.js"
          ),
      },
      {
        path: "/doc/search-form",
        component: () =>
          import(
            /* webpackChunkName: "PaSearchFormClass" */ "../doc/SearchForm/PaSearchFormClass.js"
          ),
      },
      {
        path: "/doc/error-page",
        component: () =>
          import(
            /* webpackChunkName: "PaErrorPageClass" */ "../doc/ErrorPage/PaErrorPageClass.js"
          ),
      },
      {
        path: "/doc/table",
        component: () =>
          import(
            /* webpackChunkName: "PaTableClass" */ "../doc/Table/PaTableClass.js"
          ),
      },
      {
        path: "/doc/form",
        component: () =>
          import(
            /* webpackChunkName: "PaFormClass" */ "../doc/Form/PaFormClass.js"
          ),
      },
      {
        path: "/doc/tree",
        component: () =>
          import(
            /* webpackChunkName: "PaTreeClass" */ "../doc/Tree/PaTreeClass.js"
          ),
      },
      {
        path: "/doc/radio",
        component: () =>
          import(
            /* webpackChunkName: "PaInputClass" */ "../doc/Radio/PaRadioClass.js"
          ),
      },
      {
        path: "/doc/switch",
        component: () =>
          import(
            /* webpackChunkName: "PaInputClass" */ "../doc/Switch/PaSwitchClass.js"
          ),
      },
      {
        path: "/doc/timePicker",
        component: () =>
          import(
            /* webpackChunkName: "PaInputClass" */ "../doc/TimePicker/PaTimePickerClass.js"
          ),
      },
      {
        path: "/doc/dropdown",
        component: () =>
          import(
            /* webpackChunkName: "PaInputClass" */ "../doc/Dropdown/PaDropdownClass.js"
          ),
      },
      {
        path: "/doc/input-s",
        component: () =>
          import(
            /* webpackChunkName: "PaInputClass" */ "../doc/Input-s/PaInputClass.js"
          ),
      },
      {
        path: "/doc/tabs-s",
        component: () =>
          import(
            /* webpackChunkName: "PaInputClass" */ "../doc/Tabs-s/PaTabsClass.js"
          ),
      },
      {
        path: "/doc/drawer-s",
        component: () =>
          import(
            /* webpackChunkName: "PaInputClass" */ "../doc/Drawer-s/PaDrawerClass.js"
          ),
      },
      {
        path: "/doc/dialog-s",
        component: () =>
          import(
            /* webpackChunkName: "PaInputClass" */ "../doc/Dialog-s/PaDialogClass.js"
          ),
      },
      {
        path: "/doc/select-s",
        component: () =>
          import(
            /* webpackChunkName: "PaInputClass" */ "../doc/Select-s/PaSelectClass.js"
          ),
      },
    ],
  },
  {
    path: "/examples",
    redirect: "/examples/normal-search-list",
    component: () =>
      import(/* webpackChunkName: "examples" */ "../examples/layout/index.vue"),
    children: [
      {
        path: "/examples/error-page-200",
        component: () =>
          import(
            /* webpackChunkName: "examples" */ "../examples/error-page/error-page-200.vue"
          ),
      },
      {
        path: "/examples/error-page-403",
        component: () =>
          import(
            /* webpackChunkName: "examples" */ "../examples/error-page/error-page-403.vue"
          ),
      },
      {
        path: "/examples/error-page-404",
        component: () =>
          import(
            /* webpackChunkName: "examples" */ "../examples/error-page/error-page-404.vue"
          ),
      },
      {
        path: "/examples/error-page-500",
        component: () =>
          import(
            /* webpackChunkName: "examples" */ "../examples/error-page/error-page-500.vue"
          ),
      },
      {
        path: "/examples/normal-search-list",
        component: () =>
          import(
            /* webpackChunkName: "examples" */ "../examples/e-search-list/SearchList.vue"
          ),
      },
      {
        path: "/examples/detail-table",
        component: () =>
          import(
            /* webpackChunkName: "examples" */ "../examples/detail-form-table/DetailFormTable.vue"
          ),
      },
      {
        path: "/examples/normal-detail",
        component: () =>
          import(
            /* webpackChunkName: "examples" */ "../examples/detail-layout/index.vue"
          ),
      },
      {
        path: "/examples/detail-tabs",
        component: () =>
          import(
            /* webpackChunkName: "examples" */ "../examples/detail-tabs/DetailTabs.vue"
          ),
      },
      {
        path: "/examples/table-layout",
        component: () =>
          import(
            /* webpackChunkName: "examples" */ "../examples/table-layout/index.vue"
          ),
      },
      {
        path: "/examples/tabs-list",
        component: () =>
          import(
            /* webpackChunkName: "examples" */ "../examples/tabs-list/TabsList.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
