# PaTableLayout 主布局

### 基本用法

table-layout 组件属性介绍： 1、breadcrumbs：面包屑数据，结构与菜单数据相同；面包屑组件可以通过 slot（breadcrumb）覆盖做个性化配置 2、showBreadcrumb： 是否显示面包屑模块（默认值为 true）

#### 一、使用 layout 自带的面包屑示例

:::demo

```html
<template>
  <div style="width: 100%; height: calc(100vh - 48px)">
    <table-layout
      :breadcrumbs="menu"
      search-layout
      :table-layout="false"
      breadcrumbs-layout
    >
      <template v-slot:search>
        <pa-search-form
          :search-form="searchForm"
          :query-fun="doQuery"
          :offset="2"
          @resetCallback="resetCallback"
        >
          <pa-search-form-item
            v-for="i in 3"
            :key="i"
            prop-name="name"
            label="测试1"
          >
            <pa-input v-model="searchForm[`name${i>0?i:''}`]" />
          </pa-search-form-item>
          <pa-search-form-item label="测试4" :col-span="5">
            <pa-input v-model="searchForm.name4" />
          </pa-search-form-item>
        </pa-search-form>
      </template>
      <template v-slot:table>
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
    </table-layout>
  </div>
</template>
<script>
  export default {
    data() {
      const menu = [
        {
          path: "/",
          title: "开发指南",
        },
        {
          path: "/doc/table-layout",
          title: "主布局",
        },
      ];
      return {
        menu,
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
        searchForm: {
          name: "",
          name2: "",
          name3: "",
          name4: "",
        },
      };
    },
    methods: {
      doQuery() {
        this.$paMessage.success("查询成功！");
      },
      resetCallback() {
        //搜索重置
      },
    },
  };
</script>
```

:::

#### 二、无面包屑示例

:::demo

```html
<template>
  <div style="width: 100%; height: calc(100vh - 48px)">
    <table-layout
      :showBreadcrumb="false"
      search-layout
      :table-layout="false"
      breadcrumbs-layout
    >
      <template v-slot:search>
        <pa-search-form
          :search-form="searchForm"
          :query-fun="doQuery"
          :offset="2"
          @resetCallback="resetCallback"
        >
          <pa-search-form-item
            v-for="i in 3"
            :key="i"
            prop-name="name"
            label="测试1"
          >
            <pa-input v-model="searchForm[`name${i>0?i:''}`]" />
          </pa-search-form-item>
          <pa-search-form-item label="测试4" :col-span="5">
            <pa-input v-model="searchForm.name4" />
          </pa-search-form-item>
        </pa-search-form>
      </template>
      <template v-slot:table>
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
    </table-layout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
        searchForm: {
          name: "",
          name2: "",
          name3: "",
          name4: "",
        },
      };
    },
    methods: {
      doQuery() {
        alert("查询");
      },
      resetCallback() {
        //搜索重置
      },
    },
  };
</script>
```

:::

#### 三、无面包屑,无分页示例

:::demo

```html
<template>
  <div style="width: 100%; height: calc(100vh - 48px)">
    <table-layout
      :showBreadcrumb="false"
      search-layout
      :table-layout="false"
      breadcrumbs-layout
    >
      <template v-slot:search>
        <pa-search-form
          :search-form="searchForm"
          :query-fun="doQuery"
          :offset="2"
          @resetCallback="resetCallback"
        >
          <pa-search-form-item
            v-for="i in 3"
            :key="i"
            prop-name="name"
            label="测试1"
          >
            <pa-input v-model="searchForm[`name${i>0?i:''}`]" />
          </pa-search-form-item>
          <pa-search-form-item label="测试4" :col-span="5">
            <pa-input v-model="searchForm.name4" />
          </pa-search-form-item>
        </pa-search-form>
      </template>
      <template v-slot:table>
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
    </table-layout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
        searchForm: {
          name: "",
          name2: "",
          name3: "",
          name4: "",
        },
      };
    },
    methods: {
      doQuery() {
        alert("查询");
      },
      resetCallback() {
        //搜索重置
      },
    },
  };
</script>
```

:::
