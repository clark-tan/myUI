# PaDetailLayout 详情布局

### 基本用法

detail-layout 组件属性介绍：
1、breadcrumbs：面包屑数据，结构与菜单数据相同；面包屑组件可以通过 slot（breadcrumb）覆盖做个性化配置
2、showBreadcrumb： 是否显示面包屑模块（默认值为 true）

#### 一、使用 layout 自带的面包屑示例

:::demo

```html
<template>
  <div style="width: 100%; height: calc(100vh - 48px)">
    <detail-layout :breadcrumbs="menu">
      <template v-slot:detail-content>
        <pa-table :data="tableData0" :columns="columns0" padding>
          <template #toolbar-left>
            <pa-button>左边</pa-button>
          </template>
          <template #toolbar-right>
            <pa-button type="primary"> 新增 </pa-button>
            <pa-button> 删除 </pa-button>
          </template>
        </pa-table>
      </template>
    </detail-layout>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      const menu = [
        {
          path: "/",
          title: "开发指南",
        },
        {
          path: "/doc/detail-layout",
          title: "主布局",
        },
      ];
      return {
        menu,
        breadcrumbs: [
          {
            path: "/",
            text: "首页",
          },
          {
            path: "/pahm-menu",
            text: "菜单菜单菜单菜单菜单菜单菜单",
          },
          {
            path: "/pahm-menu1",
            text: "菜单1菜单菜单菜单菜单菜单菜单菜单",
          },
        ],
        customSuffix: [
          {
            path: "",
            meta: {
              title: "自定义面包屑替换",
            },
          },
        ],
        tableData0: [
          {
            id: 10001,
            name: "Test1",
            role: "Develop",
            sex: "Man",
            age: 28,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10002,
            name: "Test2",
            role: "Test",
            sex: "Women",
            age: 22,
            address: "Guangzhou",
          },
          {
            id: 10003,
            name: "Test3",
            role: "PM",
            sex: "Man",
            age: 32,
            address: "Shanghai",
          },
          {
            id: 10004,
            name: "Test4",
            role: "Designer",
            sex: "Women",
            age: 24,
            address: "Shanghai",
          },
        ],
        columns0: [
          { type: "seq", width: "38", align: "center" },
          { field: "name", title: "Name" },
          { field: "sex", title: "Sex" },
          { field: "age", title: "Age" },
        ],
      };
    },
    methods: {
      // eslint-disable-next-line no-unused-vars
      handlerClick(data) {
        // console.log(data);
      },
    },
  };
</script>
```

:::

#### 二、不带的面包屑示例

:::demo

```html
<template>
  <div style="width: 100%; height: calc(100vh - 48px)">
    <detail-layout :showBreadcrumb="false">
      <template v-slot:detail-content>
        <pa-table :data="tableData0" :columns="columns0" padding>
          <template #toolbar-left>
            <pa-button>左边</pa-button>
          </template>
          <template #toolbar-right>
            <pa-button type="primary"> 新增 </pa-button>
            <pa-button> 删除 </pa-button>
          </template>
        </pa-table>
      </template>
    </detail-layout>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        breadcrumbs: [
          {
            path: "/",
            text: "首页",
          },
          {
            path: "/pahm-menu",
            text: "菜单菜单菜单菜单菜单菜单菜单",
          },
          {
            path: "/pahm-menu1",
            text: "菜单1菜单菜单菜单菜单菜单菜单菜单",
          },
        ],
        customSuffix: [
          {
            path: "",
            meta: {
              title: "自定义面包屑替换",
            },
          },
        ],
        tableData0: [
          {
            id: 10001,
            name: "Test1",
            role: "Develop",
            sex: "Man",
            age: 28,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10002,
            name: "Test2",
            role: "Test",
            sex: "Women",
            age: 22,
            address: "Guangzhou",
          },
          {
            id: 10003,
            name: "Test3",
            role: "PM",
            sex: "Man",
            age: 32,
            address: "Shanghai",
          },
          {
            id: 10004,
            name: "Test4",
            role: "Designer",
            sex: "Women",
            age: 24,
            address: "Shanghai",
          },
        ],
        columns0: [
          { type: "seq", width: "38", align: "center" },
          { field: "name", title: "Name" },
          { field: "sex", title: "Sex" },
          { field: "age", title: "Age" },
        ],
      };
    },
    methods: {
      // eslint-disable-next-line no-unused-vars
      handlerClick(data) {
        // console.log(data);
      },
    },
  };
</script>
```

:::

#### 二、不带的面包屑和分页示例

:::demo

```html
<template>
  <div style="width: 100%; height: calc(100vh - 48px)">
    <detail-layout :showBreadcrumb="false">
      <template v-slot:detail-content>
        <pa-table
          :data="tableData0"
          :showPager="false"
          :columns="columns0"
          padding
        >
          <template #toolbar-left>
            <pa-button>左边</pa-button>
          </template>
          <template #toolbar-right>
            <pa-button type="primary"> 新增 </pa-button>
            <pa-button> 删除 </pa-button>
          </template>
        </pa-table>
      </template>
    </detail-layout>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        breadcrumbs: [
          {
            path: "/",
            text: "首页",
          },
          {
            path: "/pahm-menu",
            text: "菜单菜单菜单菜单菜单菜单菜单",
          },
          {
            path: "/pahm-menu1",
            text: "菜单1菜单菜单菜单菜单菜单菜单菜单",
          },
        ],
        customSuffix: [
          {
            path: "",
            meta: {
              title: "自定义面包屑替换",
            },
          },
        ],
        tableData0: [
          {
            id: 10001,
            name: "Test1",
            role: "Develop",
            sex: "Man",
            age: 28,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10002,
            name: "Test2",
            role: "Test",
            sex: "Women",
            age: 22,
            address: "Guangzhou",
          },
          {
            id: 10003,
            name: "Test3",
            role: "PM",
            sex: "Man",
            age: 32,
            address: "Shanghai",
          },
          {
            id: 10004,
            name: "Test4",
            role: "Designer",
            sex: "Women",
            age: 24,
            address: "Shanghai",
          },
        ],
        columns0: [
          { type: "seq", width: "38", align: "center" },
          { field: "name", title: "Name" },
          { field: "sex", title: "Sex" },
          { field: "age", title: "Age" },
        ],
      };
    },
    methods: {
      // eslint-disable-next-line no-unused-vars
      handlerClick(data) {
        // console.log(data);
      },
    },
  };
</script>
```

:::
