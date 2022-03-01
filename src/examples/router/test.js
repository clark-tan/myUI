const test = [
  {
    path: "/",
    name: "Base",
    meta: {
      title: "模版页",
    },
    children: [
      {
        path: "/",
        name: "Monitor",
        meta: {
          title: "监控管理",
        },
        component: () =>
          import(/* webpackChunkName: "pamenu" */ "../pa-menu/index.vue"),
        children: [
          {
            path: "/",
            name: "Message",
            meta: {
              title: "消息监控",
            },
            component: () =>
              import(/* webpackChunkName: "pamenu" */ "../pa-menu/index.vue"),
          },
          {
            path: "/dashbord/server-monitoring",
            name: "Server",
            meta: {
              title: "服务器监控",
            },
            component: () =>
              import(/* webpackChunkName: "pamenu" */ "../pa-menu/index.vue"),
            children: [
              {
                path: "/dashbord/server-details",
                name: "ServerDetails",
                meta: {
                  title: "服务器详情",
                },
                component: () =>
                  import(
                    /* webpackChunkName: "pamenu" */ "../pa-menu/index.vue"
                  ),
              },
            ],
          },
        ],
      },
      {
        path: "/system",
        meta: {
          title: "系统管理",
        },
        children: [
          {
            path: "/system/list",
            meta: {
              title: "列表页",
            },
            props: true,
          },
          {
            path: "/system/:systemCode",
            meta: {
              title: "详情页",
            },
          },
        ],
      },
    ],
  },
];
export default test;
