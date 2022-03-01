# PaTable 表格

### 基本用法

具体参数配置请参照 https://xuliangzhan_admin.gitee.io/vxe-table/#/table/start/install

:::demo

```html
<template>
  <pa-table :data="tableData0" :columns="columns0" highlight-hover-row>
    <template #toolbar-left>
      <pa-button>左边</pa-button>
    </template>
    <template #toolbar-right>
      <pa-button type="primary" @click="addAll"> 新增 </pa-button>
      <pa-button @click="deleteAll"> 删除 </pa-button>
    </template>
  </pa-table>
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
      };
    },
    methods: {
      deleteAll() {
        alert("哦豁，按钮点击了");
      },
      addAll() {
        alert("哦豁，按钮点击了");
      },
    },
  };
</script>
```

:::

### 纵向滚动条，组件已默认处理。

:::demo

```html
<template>
  <pa-table
    :data="tableData1"
    :columns="columns1"
    :show-pager="false"
    :padding="false"
    highlight-hover-row
  />
</template>
<script>
  export default {
    data() {
      return {
        tableData1: [
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
            age: 23,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10005,
            name: "Test5",
            role: "Develop",
            sex: "Women",
            age: 30,
            address: "Shanghai",
          },
          {
            id: 10006,
            name: "Test6",
            role: "Designer",
            sex: "Women",
            age: 21,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10007,
            name: "Test7",
            role: "Test",
            sex: "Man",
            age: 29,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10008,
            name: "Test8",
            role: "Develop",
            sex: "Man",
            age: 35,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10009,
            name: "Test9",
            role: "Test",
            sex: "Man",
            age: 26,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10010,
            name: "Test10",
            role: "Develop",
            sex: "Man",
            age: 38,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10011,
            name: "Test11",
            role: "Test",
            sex: "Women",
            age: 29,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10012,
            name: "Test12",
            role: "Develop",
            sex: "Man",
            age: 27,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10013,
            name: "Test13",
            role: "Test",
            sex: "Women",
            age: 24,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10014,
            name: "Test14",
            role: "Develop",
            sex: "Man",
            age: 34,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10015,
            name: "Test15",
            role: "Test",
            sex: "Man",
            age: 21,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10016,
            name: "Test16",
            role: "Develop",
            sex: "Women",
            age: 20,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10017,
            name: "Test17",
            role: "Test",
            sex: "Man",
            age: 31,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10018,
            name: "Test18",
            role: "Develop",
            sex: "Women",
            age: 32,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10019,
            name: "Test19",
            role: "Test",
            sex: "Man",
            age: 37,
            address: "vxe-table 从入门到放弃",
          },
          {
            id: 10020,
            name: "Test20",
            role: "Develop",
            sex: "Man",
            age: 41,
            address: "vxe-table 从入门到放弃",
          },
        ],
        columns1: [
          { type: "seq", width: "38", align: "center" },
          { field: "name", title: "Name" },
          { field: "sex", title: "Sex" },
          { field: "age", title: "Age" },
          { field: "address", title: "Address" },
        ],
      };
    },
  };
</script>
```

:::