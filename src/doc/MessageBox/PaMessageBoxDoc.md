# PaMessageBox 弹窗（编程式）

### 基本用法

:::demo

```html
<template>
  <div style="width: 100%; height: 100%; padding: 24px">
    <pa-button type="primary" @click="openCommon">
      常用弹窗
    </pa-button>
    <pa-button type="primary" @click="openCommonOther">
      其他用法
    </pa-button>
  </div>
</template>
<script>
  export default {
    name: 'PahmMessageBox',
    data() {
      return {};
    },
    methods: {
      openCommon() {
        this.$paConfirm({
          icon: 'icon-jinggao',
          title: '比较长的标题比较长的标题比较长的标题比较长的标题比较长的标题比较长的标题',
          text: '',
        })
          .then(() => {
            this.$paMessage({
              type: 'success',
              message: '删除成功!',
            });
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除',
            });
          });
      },
      openCommonOther() {
        const h = this.$createElement;
        const instance = this.$paMessageBox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode'),
          ]),
          confirmButtonText: '确定',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          },
        });
        // eslint-disable-next-line no-console
        console.log(instance);
      },
    },
  };
</script>
```

:::
