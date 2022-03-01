<style>
.el-tabs{
  background:#fff;
}
.el-tabs__content{
  padding: 0 16px 16px;
}
</style>
# PaTabs 标签页

### 基本用法

### options 用法

:::demo

```html
<template>
  <div>
    <pa-tabs v-model="value" stretch :options="options" @change="handler" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "value1",
        options: [
          {
            label: "tab1",
            value: "value1",
          },
          {
            label: "tab2",
            value: "value2",
          },
          {
            label: "tab3tab3tab3tab3",
            value: "value3",
          },
        ],
      };
    },
    methods: {
      handler(value) {
        window.console.log(value, this.value);
      },
    },
  };
</script>
```

:::

#### slot 用法

:::demo

```html
<template>
  <pa-tabs v-model="value" @change="handler">
    <pa-tab-pane
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :name="item.value"
    >
      {{ item.label }}
    </pa-tab-pane>
  </pa-tabs>
</template>
<script>
  export default {
    data() {
      return {
        value: "value1",
        options: [
          {
            label: "tab1",
            value: "value1",
          },
          {
            label: "tab2",
            value: "value2",
          },
          {
            label: "tab3tab3tab3tab3",
            value: "value3",
          },
        ],
      };
    },
    methods: {
      handler(value) {
        window.console.log(value, this.value);
      },
    },
  };
</script>
```

:::
