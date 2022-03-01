<!--
 * @Autor: clark tan
 * @Date: 2021-12-21 14:02:53
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-11 17:17:30
 * @Description: 
-->
# PaDrawer 抽屉

### 基本用法

:::demo

```html
<template>
  <div>
    <el-radio-group v-model="direction">
      <el-radio label="ltr">
        从左往右开
      </el-radio>
      <el-radio label="rtl">
        从右往左开
      </el-radio>
      <el-radio label="ttb">
        从上往下开
      </el-radio>
      <el-radio label="btt">
        从下往上开
      </el-radio>
    </el-radio-group>
    <pa-button type="primary" @click="showDrawer">
      Open
    </pa-button>
    <pa-drawer
      title="抽屉"
      :direction="direction"
      :closable="true"
      :visible.sync="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOK"
      @cancel="handleCancel"
    >
      <div style="margin-top:24px;">
        hello wrold
      </div>
    </pa-drawer>
  </div>
</template>
<script>
  export default {
    name: 'PahmDrawer',
    data() {
      return {
        visible: false,
        direction: 'rtl',
        confirmLoading: false,
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      handleOK() {
        this.confirmLoading = true;
        setTimeout(() => {
          this.visible = false;
          this.confirmLoading = false;
        }, 1000);
      },
      handleCancel() {
        this.visible = false;
      },
    },
  };
</script>
```

:::

