<style>
.demo-transfer .vxe-table--body-wrapper{
  height: 100% !important;
}
</style>
# PaTransfer 穿梭框

### 基本用法

:::demo

```html
<template>
  <pa-transfer
    v-model="transferValue"
    :data="transferData"
    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市拼音"
  />
</template>
<script>
  export default {
    data() {
      const generateData = () => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index],
          });
        });
        return data;
      };
      return {
        transferValue: [],
        transferData: generateData(),
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
      };
    },
    methods: {
      click() {
        alert('图标被点击了');
      },
    },
  };
</script>
```

:::

### 2. transfer-layout
:::demo

```html
<template>
  <pa-transfer-layout @left-btn="leftBtn" @right-btn="rightBtn">
    <template v-slot:left-header>
      <span>左边自定义头部</span>
    </template>
    <template v-slot:left>
      <span>左边自定义内容</span>
    </template>
    <template v-slot:right-header>
      <span>右边自定义头部</span>
    </template>
    <template v-slot:right>
      <span>右边自定义内容</span>
    </template>
  </pa-transfer-layout>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods:{
      leftBtn(){
        this.transferLayOut = '点击了左边按钮';
      },
      rightBtn(){
        this.transferLayOut = '点击了右边按钮';
      },
    },
  };
</script>
```

:::


### 3. tree穿梭框
:::demo

```html
<template>
  <pa-transfer-tree ref="paTransferTree" :left-tree-data="treeData">
    <template v-slot:left-title>
      <span>左边列表</span>
    </template>
    <template v-slot:right-title>
      <span>右边列表</span>
    </template>
  </pa-transfer-tree>
</template>
<script>
  export default {
    data() {
      return {
        treeData: [{
          id: 1,
          label: '一级 1',
          parentId:null,
          children: [{
            id: 4,
            label: '二级 1-1',
            parentId:1,
            children: [{
              id: 9,
              label: '三级 1-1-1',
              parentId:4,
            }, {
              id: 10,
              label: '三级 1-1-2',
              parentId:4,
            }],
          }],
        }, {
          id: 2,
          label: '一级 2',
          parentId:null,
          children: [{
            id: 5,
            label: '二级 2-1',
            parentId:2,
          }, {
            id: 6,
            label: '二级 2-2',
            parentId:2,
          }],
        }, {
          id: 3,
          label: '一级 3',
          parentId:null,
          children: [{
            id: 7,
            label: '二级 3-1',
            parentId:3,
          }, {
            id: 8,
            label: '二级 3-2',
            parentId:3,
          }],
        }],
      };
    },
  };
</script>
```

:::

### 4. table穿梭框
:::demo
```html
<template>
  <div class="demo-transfer">
    <pa-transfer-table
      :filterable="true"
      :filter-key-words="['address','name']"
      :table-data-source="transferTableDataSource "
      :table-data-target="transferTableDataTarget "
      :table-column="transferTableColumn"
    >
      <template v-slot:left-header>
        左边头部标题
      </template>
      <template v-slot:right-header>
        右边头部标题
      </template>
    </pa-transfer-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        transferTableDataSource:[{
          id:1,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id:2,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id:3,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id:4,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id:5,
          date: '2016-05-08',
          name: '王大虎',
          address: '北京市普陀区金沙江路 1518 弄',
        }, {
          id:6,
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id:7,
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }],
        transferTableDataTarget:[],
        transferTableColumn:[
          {
            label:'日期',
            keyWord:'date',
            width:'120',
          },{
            label:'名字',
            keyWord:'name',
          },
          {
            label:'地址',
            keyWord:'address',
            showTooltip:true,
          },
        ],
      }
    }
  }
</script>
```
:::
# Attributes

| 参数      | 说明               | 类型   | 可选值 | 默认值 |
| --------- | ------------------ | ------ | ------ | ------ |
| svg-class | 添加自定义的 class | String | -      | -      |

# Methods

| 方法名 | 说明     | 参数 |
| ------ | -------- | ---- |
| click  | 点击事件 | -    |
