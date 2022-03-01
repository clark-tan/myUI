# PaLoading 加载中

### 基本用法


:::demo

```html
<template>
  <div>
    <pa-button @click="handlerClick">
      服务方式loading...
    </pa-button>
    <pa-button v-loading.fullscreen.lock="fullscreenLoading" @click="handlerClick1">
      指令方式loading...
    </pa-button>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
        fullscreenLoading: false,
      };
    },
    methods: {
      handlerClick1() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      handlerClick() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading123',
          // spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
          // size:'small',
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      },
    },
  };
</script>
```

:::
