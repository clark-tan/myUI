# PaMessage 信息提示


### 基本使用

:::demo

```html
<template>
  <div class="message">
    <h3>在element UI 消息提示基础上新增属性maxCount：可配置该消息最大显示消息数量。默认不做限制</h3>
    <pa-button @click="open">
      success消息提示
    </pa-button>
    <pa-button @click="open1">
      error消息提示
    </pa-button>
    <pa-button @click="open2">
      warning消息提示
    </pa-button>
    <pa-button @click="open3">
      normal消息提示
    </pa-button>
    <pa-button @click="open4">
      自定义消息提示
    </pa-button>
    <pa-button @click="open5">
      连续点击只显示一个的消息提示
    </pa-button>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    methods: {
      open() {
        this.$paMessage({
          type: 'success',
          message: '成功出现了一个提示信息',
          duration: 2000,
        });
      },
      open1() {
        this.$paMessage({
          type: 'error',
          message: '出现了一个错误提示信息',
          duration: 2000,
        });
      },
      open2() {
        this.$paMessage({
          type: 'warning',
          message: '出现了一个警告提示信息',
          duration: 2000,
        });
      },
      open3() {
        this.$paMessage({
          message: '正常提示信息',
          duration: 2000,
        });
      },
      open4() {
        this.$paMessage({
          type: 'danger',
          message: '自定义消息提示',
          duration: 2000,
        });
      },
      open5() {
        this.$paMessage({
          type: 'error',
          message: '只显示一个的消息提示',
          duration: 2000,
          maxCount: 1,
        });
      },
    },
  };
</script>
```

:::


### Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | string / VNode | — | — |
| type | 主题 | string | success/warning/info/error | info |
| iconClass | 自定义图标的类名，会覆盖 `type` | string | — | — |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean | — | false |
| customClass | 自定义类名 | string | — | — |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |
| showClose | 是否显示关闭按钮 | boolean | — | false |
| center | 文字是否居中 | boolean | — | false |
| onClose | 关闭时的回调函数, 参数为被关闭的 message 实例 | function | — | — |

### 方法 Methods
调用 `Message` 或 `this.$paMessage` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。

| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Message |
