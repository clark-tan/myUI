const menu = [
  {
    title: "首页",
    path: "/",
    children: [
      {
        title: "首页详情",
        path: "/index-detail",
        isIndexDetail: true,
      },
    ],
  },
  {
    title: "系统",
    icon: "icon-riqixuanzeqi",
    path: "/system",
    funcCode: "ONE",
    children: [
      {
        title: "列表页",
        path: "/system/list",
        children: [
          {
            title: "详情页",
            path: "/system/:systemCode",
          },
        ],
      },
      {
        title: "禁用菜单",
        path: "/route-path1-2",
      },
      {
        title: "菜单1-3",
        path: "/route-path1-3",
      },
    ],
  },
  {
    id: 2,
    parentId: null,
    title: "菜单2",
    icon: "icon-riqixuanzeqi",
    path: "/route-path2",
    children: [
      {
        id: 31,
        parentId: 2,
        title: "菜单2-1",
        path: "/route-path2-1",
      },
      {
        parentId: 2,
        id: 22,
        title: "菜单2-2",
        path: "/route-path2-2",
      },
      {
        parentId: 2,
        id: 23,
        title: "菜单2-3",
        path: "/route-path2-3",
      },
      {
        parentId: 2,
        id: 24,
        title: "菜单2-4",
        path: "/route-path2-4",
      },
      {
        parentId: 2,
        id: 25,
        title: "菜单2-5",
        path: "/route-path2-5",
      },
      {
        parentId: 2,
        id: 26,
        title: "菜单2-6",
        path: "/route-path2-6",
      },
    ],
  },
  {
    id: 3,
    parentId: null,
    title: "菜单3",
    icon: "icon-riqixuanzeqi",
    path: "/route-path3",
  },
];
export default menu;
