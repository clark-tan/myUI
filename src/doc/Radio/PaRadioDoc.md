## Radio 单选框

在一组备选项中进行单选

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

:::demo 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

```html
<template>
  <div style="padding:0 24px">
    <div style="margin-bottom:24px">
      <pa-button @click="statuesChange">启用/禁用切换</pa-button>
    </div>
    <pa-radio
      v-model="radio"
      :disabled="disabled"
      @change="radioChanged"
      label="1"
      >备选项</pa-radio
    >
    <pa-radio
      v-model="radio"
      :disabled="disabled"
      @change="radioChanged"
      label="2"
      >备选项</pa-radio
    >
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio: "1",
        disabled: false,
      };
    },
    methods: {
      radioChanged(val) {
        console.log(val);
      },
      statuesChange(val) {
        this.disabled = !this.disabled;
      },
    },
  };
</script>
```

:::

### 禁用状态

单选框不可用的状态。

:::demo 只要在`pa-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。

```html
<template>
  <div style="padding:0 24px">
    <pa-radio disabled v-model="radio" label="禁用">备选项</pa-radio>
    <pa-radio disabled v-model="radio" label="选中且禁用">备选项</pa-radio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio: "选中且禁用",
      };
    },
  };
</script>
```

:::

### 单选框组

适用于在多个互斥的选项中选择的场景

:::demo 结合`pa-radio-group`元素和子元素`pa-radio`可以实现单选组，在`pa-radio-group`中绑定`v-model`，在`pa-radio`中设置好`label`即可，无需再给每一个`pa-radio`绑定变量，另外，还提供了`change`事件来响应变化，它会传入一个参数`value`。

```html
<template>
  <div style="padding:0 24px">
    <span>HTML形式</span>
    <pa-radio-group v-model="radio" @change="changed">
      <pa-radio :label="3">备选项</pa-radio>
      <pa-radio :label="6">备选项</pa-radio>
      <pa-radio :label="9">备选项</pa-radio>
    </pa-radio-group>
    <br />
    <span>数 据 形 式</span>
    <!--labelFiled默认为label,textFiled默认为text-->
    <pa-radio-group
      v-model="radio"
      :groupList="groupList"
      :labelFiled="'key'"
      :textFiled="'text'"
    ></pa-radio-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio: 3,
        groupList: [
          {
            key: 3,
            text: "备选项",
          },
          {
            key: 6, //默认为label
            text: "备选项", //默认为text
            disabled: true,
          },
          {
            key: 9,
            text: "备选项",
            border: true,
            size: "small",
          },
        ],
      };
    },
    methods: {
      changed(val) {
        console.log(val);
      },
    },
  };
</script>
```

:::

### 按钮样式

按钮样式的单选组合。

:::demo 只需要把`pa-radio`元素换成`pa-radio-button`元素即可，此外，Element 还提供了`size`属性。

```html
<template>
  <div style="padding:0 24px">
    <div>
      <pa-radio-group v-model="radio1">
        <pa-radio-button label="上海"></pa-radio-button>
        <pa-radio-button label="北京"></pa-radio-button>
        <pa-radio-button label="广州"></pa-radio-button>
        <pa-radio-button label="深圳"></pa-radio-button>
      </pa-radio-group>
    </div>
    <div style="margin-top: 20px">
      <pa-radio-group v-model="radio2" size="medium">
        <pa-radio-button label="上海"></pa-radio-button>
        <pa-radio-button label="北京"></pa-radio-button>
        <pa-radio-button label="广州"></pa-radio-button>
        <pa-radio-button label="深圳"></pa-radio-button>
      </pa-radio-group>
    </div>
    <div style="margin-top: 20px">
      <pa-radio-group v-model="radio3" size="small">
        <pa-radio-button label="上海"></pa-radio-button>
        <pa-radio-button label="北京" disabled></pa-radio-button>
        <pa-radio-button label="广州"></pa-radio-button>
        <pa-radio-button label="深圳"></pa-radio-button>
      </pa-radio-group>
    </div>
    <div style="margin-top: 20px">
      <pa-radio-group v-model="radio4" disabled size="mini">
        <pa-radio-button label="上海"></pa-radio-button>
        <pa-radio-button label="北京"></pa-radio-button>
        <pa-radio-button label="广州"></pa-radio-button>
        <pa-radio-button label="深圳"></pa-radio-button>
      </pa-radio-group>
    </div>
    <div style="margin-top: 20px">
      <!--labelFiled默认为label,textFiled默认为text-->
      <pa-radio-group
        v-model="radio4"
        :groupList="groupList"
        labelFiled="key"
        size="mini"
        groupType="button"
      >
      </pa-radio-group>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio1: "上海",
        radio2: "上海",
        radio3: "上海",
        radio4: "上海",
        groupList: [
          {
            key: "上海",
            text: "上海",
          },
          {
            key: "北京", //默认为label
            text: "北京", //默认为text
            disabled: true,
          },
          {
            key: "广州",
            text: "广州",
          },
          {
            key: "深圳",
            text: "深圳",
          },
        ],
      };
    },
  };
</script>
```

:::

### 带有边框

:::demo 设置`border`属性可以渲染为带有边框的单选框。

```html
<template>
  <div style="padding:0 24px">
    <div>
      <pa-radio v-model="radio1" label="1" border>备选项1</pa-radio>
      <pa-radio v-model="radio1" label="2" border>备选项2</pa-radio>
    </div>
    <div style="margin-top: 20px">
      <pa-radio v-model="radio2" label="1" border size="medium"
        >备选项1</pa-radio
      >
      <pa-radio v-model="radio2" label="2" border size="medium"
        >备选项2</pa-radio
      >
    </div>
    <div style="margin-top: 20px">
      <pa-radio-group v-model="radio3" size="small">
        <pa-radio label="1" border>备选项1</pa-radio>
        <pa-radio label="2" border disabled>备选项2</pa-radio>
      </pa-radio-group>
    </div>
    <div style="margin-top: 20px">
      <pa-radio-group v-model="radio4" size="mini" disabled>
        <pa-radio label="1" border>备选项1</pa-radio>
        <pa-radio label="2" border>备选项2</pa-radio>
      </pa-radio-group>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio1: "1",
        radio2: "1",
        radio3: "1",
        radio4: "1",
      };
    },
  };
</script>
```

:::

### Radio Attributes

| 参数            | 说明                                 | 类型                      | 可选值                | 默认值 |
| --------------- | ------------------------------------ | ------------------------- | --------------------- | ------ |
| value / v-model | 绑定值                               | string / number / boolean | —                     | —      |
| label           | Radio 的 value                       | string / number / boolean | —                     | —      |
| disabled        | 是否禁用                             | boolean                   | —                     | false  |
| border          | 是否显示边框                         | boolean                   | —                     | false  |
| size            | Radio 的尺寸，仅在 border 为真时有效 | string                    | medium / small / mini | —      |
| name            | 原生 name 属性                       | string                    | —                     | —      |

### Radio Events

| 事件名称 | 说明                   | 回调参数              |
| -------- | ---------------------- | --------------------- |
| change   | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

### Radio-group Attributes

| 参数            | 说明                                                       | 类型                      | 可选值                | 默认值  |
| --------------- | ---------------------------------------------------------- | ------------------------- | --------------------- | ------- |
| value / v-model | 绑定值                                                     | string / number / boolean | —                     | —       |
| size            | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效 | string                    | medium / small / mini | —       |
| disabled        | 是否禁用                                                   | boolean                   | —                     | false   |
| text-color      | 按钮形式的 Radio 激活时的文本颜色                          | string                    | —                     | #ffffff |
| fill            | 按钮形式的 Radio 激活时的填充色和边框色                    | string                    | —                     | #409EFF |

### Radio-group Events

| 事件名称 | 说明                   | 回调参数              |
| -------- | ---------------------- | --------------------- |
| change   | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

### Radio-button Attributes

| 参数     | 说明           | 类型            | 可选值 | 默认值 |
| -------- | -------------- | --------------- | ------ | ------ |
| label    | Radio 的 value | string / number | —      | —      |
| disabled | 是否禁用       | boolean         | —      | false  |
| name     | 原生 name 属性 | string          | —      | —      |
