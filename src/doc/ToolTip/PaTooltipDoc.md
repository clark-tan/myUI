<style>
.pahmtooltip {
    height: 100%;
    margin: 0 25%;
}
.top {
  text-align: center;
}

.left {
  float: left;
  width: 60px;
}

.right {
  float: right;
  width: 60px;
}
.bottom {
  clear: both;
  text-align: center;
}

.item {
  margin: 4px !important;
}

.left .el-tooltip__popper,
.right .el-tooltip__popper {
  padding: 8px 10px;
}
</style>
# PaTooltip 提示


### 基础用法


:::demo

```html
<template>
  <div class="pahmtooltip">
    <div class="top">
      <pa-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
        <pa-button>上左</pa-button>
      </pa-tooltip>
      <pa-tooltip
        class="item"
        effect="dark"
        content="Top Center 提示文字"
        placement="top"
      >
        <pa-button>上边</pa-button>
      </pa-tooltip>
      <pa-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
        <pa-button>上右</pa-button>
      </pa-tooltip>
    </div>
    <div class="left">
      <pa-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
        <pa-button>左上</pa-button>
      </pa-tooltip>
      <pa-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
        <pa-button>左边</pa-button>
      </pa-tooltip>
      <pa-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
        <pa-button>左下</pa-button>
      </pa-tooltip>
    </div>

    <div class="right">
      <pa-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
        <pa-button>右上</pa-button>
      </pa-tooltip>
      <pa-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
        <pa-button>右边</pa-button>
      </pa-tooltip>
      <pa-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
        <pa-button>右下</pa-button>
      </pa-tooltip>
    </div>
    <div class="bottom">
      <pa-tooltip
        class="item"
        effect="dark"
        content="Bottom Left 提示文字"
        placement="bottom-start"
      >
        <pa-button>下左</pa-button>
      </pa-tooltip>
      <pa-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
        <pa-button>下边</pa-button>
      </pa-tooltip>
      <pa-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
        <pa-button>下右</pa-button>
      </pa-tooltip>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
   
  };
</script>
```

:::

:::tip
tooltip 内不支持 `router-link` 组件，请使用 `vm.$router.push` 代替。

tooltip 内不支持 disabled form 元素，参考[MDN](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter)，请在 disabled form 元素外层添加一层包裹元素。
:::

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  effect        |  默认提供的主题  | String            | dark/light | dark  |
|  content        |  显示的内容，也可以通过 `slot#content` 传入 DOM  | String            | — | — |
|  placement        |  Tooltip 的出现位置  | String           |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  value(v-model) |  状态是否可见  | Boolean           | — |  false |
|  disabled       |  Tooltip 是否可用  | Boolean           | — |  false |
|  offset        |  出现位置的偏移量  | Number           | — |  0 |
|  transition     |  定义渐变动画      | String             | — | el-fade-in-linear |
|  visible-arrow   |  是否显示 Tooltip 箭头，更多参数可见[Vue-popper](https://github.com/element-component/vue-popper) | Boolean | — | true |
|  popper-options        | [popper.js](https://popper.js.org/documentation.html) 的参数 | Object            | 参考 [popper.js](https://popper.js.org/documentation.html) 文档 | { boundariesElement: 'body', gpuAcceleration: false } |
| open-delay | 延迟出现，单位毫秒 | Number | — | 0 |
| manual | 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效 | Boolean | — | false |
| popper-class | 为 Tooltip 的 popper 添加类名 | String | — | — |
| enterable | 鼠标是否可进入到 tooltip 中 | Boolean | — | true |
| hide-after | Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏 | number | — | 0 |
