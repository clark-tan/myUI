<!--
 * @Autor: clark tan
 * @Date: 2021-12-21 14:02:53
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-11 15:36:21
 * @Description: 
-->
## Breadcrumb 面包屑
显示当前页面的路径，快速返回之前的任意页面。

### 基础用法

适用广泛的基础用法。

:::demo 在`pa-breadcrumb`中使用`pa-breadcrumb-item`标签表示从首页开始的每一级。Element 提供了一个`separator`属性，在`pa-breadcrumb`标签中设置它来决定分隔符，它只能是字符串，默认为斜杠`/`。

```html
<template>
  <div style="height:200px;">
    <pa-breadcrumb :breadcrumbs="breadcrumbs"></pa-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadcrumbs:[
      {
        title: '用户管理',
        icon: 'icon-yonghuguanli',
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
      params: [],
    };
  },
  methods: {
    addBreadcrumb() {
      this.breadcrumbs.push({
        path: '123232',
        text: '添加菜单菜单1菜单菜单菜单菜单菜单菜单菜单',
        title: '123321菜单',
      });
    },
    handlerClick(item) {
      this.params = JSON.stringify(item);
    },
  },
};
</script>
```
:::

### 图标分隔符

:::demo 通过设置 `separator-class` 可使用相应的 `iconfont` 作为分隔符，注意这将使 `separator` 设置失效

```html
<pa-breadcrumb separator-class="pa-icon-arrow-right">
  <pa-breadcrumb-item :to="{ path: '/' }">首页</pa-breadcrumb-item>
  <pa-breadcrumb-item>活动管理</pa-breadcrumb-item>
  <pa-breadcrumb-item>活动列表</pa-breadcrumb-item>
  <pa-breadcrumb-item>活动详情</pa-breadcrumb-item>
</pa-breadcrumb>
```
:::

### Breadcrumb Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | string | — | 斜杠'/' |
| separator-class | 图标分隔符 class | string | — | - |

### Breadcrumb Item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to        | 路由跳转对象，同 `vue-router` 的 `to` | string/object | — | — |
| replace   | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean | — | false |
