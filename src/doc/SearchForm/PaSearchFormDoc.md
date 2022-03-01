<style>
  .pa-col.el-col .el-form-item{
    padding-right: 8px;
  }
</style>
# PaSearchForm 搜索栏

#### 经常作为容器放在主布局的搜索区域。

### 基本用法

### 1. 搜索栏单行使用示例

:::demo

```html
<template>
  <div style="width: 100%">
    <pa-search-form
      :search-form="searchForm"
      :query-fun="doQuery"
      @resetCallback="resetCallback"
       :offset="2"
    >
      <pa-search-form-item v-for="i in 3" :key="i" prop-name="name" label="测试1">
        <pa-input v-model="searchForm.name" />
      </pa-search-form-item>
      <pa-search-form-item label="测试4" :col-span="5">
        <pa-input v-model="searchForm.name4" />
      </pa-search-form-item>
    </pa-search-form>
  </div>
</template>
<script>
  export default {
    name: 'PahmSearchForm',
    data() {
      return {
        searchForm: {
          name: '',
          name2: '',
          name3: '',
          name4: '不需要被自动重置',
        },
      };
    },
    methods: {
      doQuery() {
        alert('查询');
      },
      resetCallback() {},
    },
  };
</script>
```

:::

### 2. 搜索栏单行附带操作按钮使用示例

:::demo

```html
<template>
  <pa-search-form :search-form="searchForm2">
    <pa-search-form-item prop-name="name" label="名称查询" :col-span="8">
      <pa-input v-model="searchForm2.name" />
    </pa-search-form-item>
    <template v-slot:suffix>
      <el-col :span="4" :offset="7">
        <pa-button>高级搜索</pa-button>
      </el-col>
    </template>
  </pa-search-form>
</template>
<script>
  export default {
    data() {
      return {
        searchForm2: {
          name: '',
          date: ['', ''],
        },
      };
    },
    methods: {},
  };
</script>
```

:::

### 3. 搜索栏多行使用示例

:::demo

```html
<template>
  <pa-search-form :search-form="searchForm2" :offset="1">
    <pa-search-form-item prop-name="name" label="状态" :col-span="6">
      <pa-input v-model="searchForm2.name" />
    </pa-search-form-item>
    <pa-search-form-item prop-name="name" label="名查询" :col-span="6">
      <pa-input v-model="searchForm2.name" />
    </pa-search-form-item>
    <pa-search-form-item prop-name="name" label="名称查询" :col-span="6">
      <pa-input v-model="searchForm2.name" />
    </pa-search-form-item>
    <pa-search-form-item prop-name="name" label="名称查询" :col-span="6">
      <pa-input v-model="searchForm2.name" />
    </pa-search-form-item>
    <pa-search-form-item prop-name="name" label="名称查询" :col-span="6">
      <pa-input v-model="searchForm2.name" />
    </pa-search-form-item>
    <pa-search-form-item prop-name="date" label="日期" :col-span="12">
      <pa-date-picker-multi>
        <pa-date-picker v-model="searchForm2.date[0]" type="datetime" />
        <pa-date-picker v-model="searchForm2.date[1]" type="datetime" />
      </pa-date-picker-multi>
    </pa-search-form-item>
  </pa-search-form>
</template>
<script>
  export default {
    data() {
      return {
        searchForm2: {
          name: '',
          date: ['', ''],
        },
      };
    },
    methods: {},
  };
</script>
```

:::

### 4. 搜索栏折叠行使用示例

:::demo

```html
<template>
  <pa-search-form :search-form="searchForm2" layout="folder" :btn-col-span="6" :folder-offset="6">
    <pa-search-form-item v-for="i in 3" :key="i" prop-name="name" label="名称查询" :col-span="6">
      <pa-input v-model="searchForm2.name" />
    </pa-search-form-item>

    <template v-slot:folder>
      <pa-search-form-item
        v-for="i in 3"
        :key="`k${i}`"
        prop-name="name"
        label="名称查询"
        :col-span="6"
      >
        <pa-input v-model="searchForm2.name" />
      </pa-search-form-item>
    </template>
  </pa-search-form>
</template>
<script>
  export default {
    data() {
      return {
        searchForm2: {
          name: '',
          date: ['', ''],
        },
      };
    },
    methods: {},
  };
</script>
```

:::

# pa-search-form 组件属性(搜索栏使用了栅格布局，栅格数量为 24)

# Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| search-form | 表单绑定的 model 值 | object | - | - |
| query-fun | 表单需执行的查询事件 | function | - | - |
| layout | 表单布局方式 | string | normal/folder | normal |
| gutter | 表单项之间的间隔 | number | - | 16 |
| label-width | 表单项里 label 文字宽度 | string | - | auto |
| label-position | 表单项里 label 文字对齐方式 | string | left/right | right |
| btn-col-span | 查询重置按钮组合所占格子数量 | number | - | 5 |
| offset | 查询重置按钮组合左侧间隔格子数量 | number | - | 0 |
| folder-offset | 查询重置按钮组合左侧间隔格子数量（仅在展开折叠时适用） | number | - | 0 |

# Methods

| 方法名        | 说明                                 | 参数 |
| ------------- | ------------------------------------ | ---- |
| resetCallback | 表单重置回调事件，可手动重置某些字段 | -    |

# pa-search-form 组件 Slot

# Attributes

| 参数   | 说明                       | 类型 | 可选值 | 默认值 |
| ------ | -------------------------- | ---- | ------ | ------ |
| suffix | 显示搜索栏额外的按钮操作区 | -    | -      | -      |
| folder | 被折叠的搜索表单项         | -    | -      | -      |

# pa-search-form-item 组件属性(搜索栏使用了栅格布局，栅格数量为 24)

# Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| prop-name | 搜索表单 model 的字段，需要搜索栏组件重置该字段时，该属性是必填的。不传该字段表示不需要重置该字段数据 | string | - | - |
|label | 表单项 label 文本 | string | - | - | 
|col-span | 表单项所占格子数量 | number | - | 4
