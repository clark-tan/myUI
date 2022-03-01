import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [
      {
        id: "1",
        parentId: null,
        title: "错误列",
        icon: "icon-a-bianzu13",
        path: "/examples/error-page-200",
        children: [
          {
            id: "1-1",
            parentId: "1",
            title: "200",
            path: "/examples/error-page-200",
          },
          {
            id: "1-2",
            parentId: "1",
            title: "403",
            path: "/examples/error-page-403",
          },
          {
            id: "1-3",
            parentId: "1",
            title: "404",
            path: "/examples/error-page-404",
          },
          {
            id: "1-4",
            parentId: "1",
            title: "500",
            path: "/examples/error-page-404",
          },
        ],
      },
      {
        id: "2",
        parentId: null,
        title: "布局",
        icon: "icon-a-bianzu13",
        path: "/examples",
        children: [
          {
            id: "2-1",
            parentId: "2",
            title: "常规列表",
            path: "/examples/normal-search-list",
          },
          {
            id: "2-2",
            parentId: "2",
            title: "多查询列表",
            path: "/examples/table-layout",
          },
          {
            id: "2-3",
            parentId: "2",
            title: "含tab列表",
            path: "/examples/tabs-list",
          },
          {
            id: "2-4",
            parentId: "2",
            title: "含tab列表",
            path: "/examples/detail-table",
          },
          {
            id: "2-5",
            parentId: "2",
            title: "含tab列表",
            path: "/examples/normal-detail",
          },
          {
            id: "2-6",
            parentId: "2",
            title: "含tab列表",
            path: "/examples/detail-tabs",
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
