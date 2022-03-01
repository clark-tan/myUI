# PaMenu 导航菜单

为网站提供导航功能的菜单。

### 树menu数据格式


:::demo 

```html
<template>
 <div style="width: 100%; height: 400px; padding: 24px">
  <pa-menu :menu='menus' :is-tree="true" style="border:1px solid #e5e5e5;"></pa-menu>
</div>
</template>

<script>
  export default {
    data() {
      return {
        menus: [
          {
            title: '用户管理',
            icon: 'icon-zhanghao',
            path: '/index',
            children: [
              {
                id: 11,
                parentId: 1,
                title: '账号管理',
                path: '/user',
                funcCode: "SysMgmt.Member.UserManage",
              },
              {
                id: 12,
                parentId: 1,
                title: '角色管理',
                path: '/role',
                funcCode: "SysMgmt.Member.RoleManage",
              },
              {
                id: 13,
                parentId: 1,
                title: '组织管理',
                path: '/organization',
                funcCode: "SysMgmt.Member.OrganizationManager",
              },
            ],
          },
          {
            id: 2,
            parentId: null,
            title: '配置管理',
            icon: 'icon-peizhiguanli',
            path: '/',
            children: [
              {
                title: '系统管理',
                path: '/system-manager/system-list',
                children: [
                  {
                    title: '功能管理',
                    path: "/system-manager/function-manager",
                  },
                ],
              },
              {
                title: '安全设置',
                path: '/security-settings',
                funcCode: "SysMgmt.Config.SecuritySettings",
              },
              {
                title: '数据字典',
                path: '/dictionary/dictionary-list',
                children: [
                  {
                    title: '字典子项',
                    path: "/dictionary/dictionary-item",
                  },
                ],
              },
            ],
          },
          {
            title: '日志管理',
            icon: 'icon-riqixuanzeqi',
            path: '/log',
            funcCode: "SysMgmt.Log",
          }
        ],
      };
    },
    methods: {
      goDetail(key, keyPath) {
        this.$router.push();
      }
    }
  }
</script>
```

:::

### 扁平menu数据格式


:::demo 
```html
<template>
 <div style="width: 100%; height: 400px; padding: 24px">
  <pa-menu :menu='menus'  style="border:1px solid #e5e5e5;"></pa-menu>
</div>
</template>

<script>
  export default {
    data() {
      return {
        menus: [
          {
            id: 8,
            funcCode: "DataPortal",
            parentId: null,
            title: "数据门户",
            path: "data-portal",
            name: "data-portal",
            icon: "iconshujumenhu"
          },
          {
            id: 5,
            funcCode: "DashBoard",
            parentId: null,
            title: "仪表板",
            path: "dash-board-list",
            name: "dash-board-list",
            icon: "iconyibiaoban"
          },
          {
            id: 6,
            funcCode: "DataSet",
            parentId: null,
            title: "数据集",
            path: "data-set-list",
            name: "data-set-list",
            icon: "iconshujuji"
          },
          {
            id: 7,
            funcCode: "DataSource",
            parentId: null,
            title: "数据源",
            path: "data-source",
            name: "data-source",
            icon: "iconjuyuan"
          },
          {
            id: 9,
            funcCode: "Member",
            parentId: null,
            title: "成员管理",
            path: "member-list",
            name: "member-list",
            icon: "iconguanliyuan"
          }
        ],
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::


### Menu Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | 模式   | string  |   horizontal / vertical   | vertical |
| collapse  | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）| boolean  |   —   | false |
| background-color  | 菜单的背景色（仅支持 hex 格式） | string |   —   | #ffffff |
| text-color  | 菜单的文字颜色（仅支持 hex 格式） | string |   —   | #303133 |
| active-text-color  | 当前激活菜单的文字颜色（仅支持 hex 格式） | string |   —   | #409EFF |
| default-active | 当前激活菜单的 index | string    | — | — |
| default-openeds | 当前打开的 sub-menu 的 index 的数组 | Array    | — | — |
| unique-opened  | 是否只保持一个子菜单的展开 | boolean   | — | false   |
| menu-trigger  | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效) | string   | hover / click | hover |
| router  | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean   | — | false   |
| collapse-transition  | 是否开启折叠动画 | boolean   | — | true   |

### Menu Methods
| 方法名称      | 说明    | 参数      |
|---------- |-------- |---------- |
| open  | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close  | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |

### Menu Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| select  | 菜单激活回调 | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path  |
| open  | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path  |
| close  | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path  |

### SubMenu Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | 唯一标志   | string/null  | — | null |
| popper-class | 弹出菜单的自定义类名 | string | — | — |
| show-timeout | 展开 sub-menu 的延时 | number | — | 300 |
| hide-timeout | 收起 sub-menu 的延时 | number | — | 300 |
| disabled  | 是否禁用 | boolean | — | false |
| popper-append-to-body | 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性 | boolean | — | 一级子菜单：true / 非一级子菜单：false |

### Menu-Item Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | 唯一标志   | string  | — | — |
| route     | Vue Router 路径对象 | Object | — | — |
| disabled  | 是否禁用 | boolean | — | false |

### Menu-Group Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 分组标题   | string  | — | — |
