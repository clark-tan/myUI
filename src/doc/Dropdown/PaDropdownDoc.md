## Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

### 基础用法

移动到下拉菜单上，展开更多操作。

:::demo 通过组件`slot`来设置下拉触发的元素以及需要通过具名`slot`为`dropdown` 来设置下拉菜单。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单。

```html
<template>
  <div style="padding: 0 24px">
    <div style="margin-bottom:24px">
      <pa-button style="margin-bottom:24px" @click="statuesChange"
        >启用/禁用切换</pa-button
      >
      <br />
      <span>禁用选择</span>
      <pa-dropdown @command="changeVal" :disabled="disabled">
        <span class="pa-dropdown-link">
          菜单<i class="pa-icon-arrow-down pa-icon--right"></i>
        </span>
        <pa-dropdown-menu slot="dropdown">
          <pa-dropdown-item command="黄金糕">黄金糕</pa-dropdown-item>
          <pa-dropdown-item command="狮子头">狮子头</pa-dropdown-item>
          <pa-dropdown-item command="螺蛳粉">螺蛳粉</pa-dropdown-item>
          <pa-dropdown-item command="双皮奶">双皮奶</pa-dropdown-item>
          <pa-dropdown-item command="蚵仔煎">蚵仔煎</pa-dropdown-item>
        </pa-dropdown-menu>
      </pa-dropdown>
      <pa-input
        style="display:inline-block;width:200px"
        v-model="disabledVal"
        disabled
      />
    </div>
    <span>查看禁用</span>
    <pa-dropdown>
      <span class="pa-dropdown-link">
        下拉菜单<i class="pa-icon-arrow-down pa-icon--right"></i>
      </span>
      <pa-dropdown-menu slot="dropdown">
        <pa-dropdown-item command="黄金糕" :disabled="disabledVal === '黄金糕'"
          >黄金糕</pa-dropdown-item
        >
        <pa-dropdown-item command="狮子头" :disabled="disabledVal === '狮子头'"
          >狮子头</pa-dropdown-item
        >
        <pa-dropdown-item command="螺蛳粉" :disabled="disabledVal === '螺蛳粉'"
          >螺蛳粉</pa-dropdown-item
        >
        <pa-dropdown-item command="双皮奶" :disabled="disabledVal === '双皮奶'"
          >双皮奶</pa-dropdown-item
        >
        <pa-dropdown-item command="蚵仔煎" :disabled="disabledVal === '蚵仔煎'"
          >蚵仔煎</pa-dropdown-item
        >
      </pa-dropdown-menu>
    </pa-dropdown>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio: "1",
        disabled: false,
        disabledVal: "蚵仔煎",
      };
    },
    methods: {
      radioChanged(val) {
        console.log(val);
      },
      statuesChange(val) {
        this.disabled = !this.disabled;
      },
      changeVal(val) {
        this.disabledVal = val;
      },
    },
  };
</script>
<style>
  .pa-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .pa-icon-arrow-down {
    font-size: 12px;
  }
</style>
```

:::

### 触发对象

可使用按钮触发下拉菜单。

:::demo 设置`split-button`属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为`true`即可。

```html
<template>
  <div style="padding: 0 24px">
    <pa-dropdown>
      <pa-button type="primary">
        更多菜单<i class="pa-icon-arrow-down pa-icon--right"></i>
      </pa-button>
      <pa-dropdown-menu slot="dropdown">
        <pa-dropdown-item>黄金糕</pa-dropdown-item>
        <pa-dropdown-item>狮子头</pa-dropdown-item>
        <pa-dropdown-item>螺蛳粉</pa-dropdown-item>
        <pa-dropdown-item>双皮奶</pa-dropdown-item>
        <pa-dropdown-item>蚵仔煎</pa-dropdown-item>
      </pa-dropdown-menu>
    </pa-dropdown>
    <pa-dropdown split-button type="primary" @click="handleClick">
      更多菜单
      <pa-dropdown-menu slot="dropdown">
        <pa-dropdown-item>黄金糕</pa-dropdown-item>
        <pa-dropdown-item>狮子头</pa-dropdown-item>
        <pa-dropdown-item>螺蛳粉</pa-dropdown-item>
        <pa-dropdown-item>双皮奶</pa-dropdown-item>
        <pa-dropdown-item>蚵仔煎</pa-dropdown-item>
      </pa-dropdown-menu>
    </pa-dropdown>
  </div>
</template>
<style>
  .pa-dropdown {
    vertical-align: top;
  }
  .pa-dropdown + .pa-dropdown {
    margin-left: 15px;
  }
  .pa-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        console.log("dropdown click");
      },
    },
  };
</script>
```

:::

### 触发方式

可以配置 click 激活或者 hover 激活。

:::demo 在`trigger`属性设置为`click`即可。

```html
<template>
  <el-row style="padding: 0 24px" class="block-col-2">
    <el-col :span="12">
      <span class="demonstration">hover 激活</span>
      <pa-dropdown>
        <span class="pa-dropdown-link">
          下拉菜单<i class="pa-icon-arrow-down pa-icon--right"></i>
        </span>
        <pa-dropdown-menu slot="dropdown">
          <pa-dropdown-item icon="pa-icon-plus">黄金糕</pa-dropdown-item>
          <pa-dropdown-item icon="pa-icon-circle-plus">狮子头</pa-dropdown-item>
          <pa-dropdown-item icon="pa-icon-circle-plus-outline"
            >螺蛳粉</pa-dropdown-item
          >
          <pa-dropdown-item icon="pa-icon-check">双皮奶</pa-dropdown-item>
          <pa-dropdown-item icon="pa-icon-circle-check"
            >蚵仔煎</pa-dropdown-item
          >
        </pa-dropdown-menu>
      </pa-dropdown>
    </el-col>
    <el-col :span="12">
      <span class="demonstration">click 激活</span>
      <pa-dropdown trigger="click">
        <span class="pa-dropdown-link">
          下拉菜单<i class="pa-icon-arrow-down pa-icon--right"></i>
        </span>
        <pa-dropdown-menu slot="dropdown">
          <pa-dropdown-item icon="pa-icon-plus">黄金糕</pa-dropdown-item>
          <pa-dropdown-item icon="pa-icon-circle-plus">狮子头</pa-dropdown-item>
          <pa-dropdown-item icon="pa-icon-circle-plus-outline"
            >螺蛳粉</pa-dropdown-item
          >
          <pa-dropdown-item icon="pa-icon-check">双皮奶</pa-dropdown-item>
          <pa-dropdown-item icon="pa-icon-circle-check"
            >蚵仔煎</pa-dropdown-item
          >
        </pa-dropdown-menu>
      </pa-dropdown>
    </el-col>
  </el-row>
</template>
<style>
  .pa-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .pa-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```

:::

### 菜单隐藏方式

可以`hide-on-click`属性来配置。

:::demo 下拉菜单默认在点击菜单项后会被隐藏，将`hide-on-click`属性默认为`false`可以关闭此功能。

```html
<template>
  <div style="padding: 0 24px">
    <pa-dropdown :hide-on-click="false">
      <span class="pa-dropdown-link">
        下拉菜单<i class="pa-icon-arrow-down pa-icon--right"></i>
      </span>
      <pa-dropdown-menu slot="dropdown">
        <pa-dropdown-item>黄金糕</pa-dropdown-item>
        <pa-dropdown-item>狮子头</pa-dropdown-item>
        <pa-dropdown-item>螺蛳粉</pa-dropdown-item>
        <pa-dropdown-item disabled>双皮奶</pa-dropdown-item>
        <pa-dropdown-item divided>蚵仔煎</pa-dropdown-item>
      </pa-dropdown-menu>
    </pa-dropdown>
  </div>
</template>
<style>
  .pa-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .pa-icon-arrow-down {
    font-size: 12px;
  }
</style>
```

:::

### 指令事件

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作

:::demo

```html
<template>
  <div style="padding: 0 24px">
    <pa-dropdown @command="handleCommand">
      <span class="pa-dropdown-link">
        下拉菜单<i class="pa-icon-arrow-down pa-icon--right"></i>
      </span>
      <pa-dropdown-menu slot="dropdown">
        <pa-dropdown-item command="a">黄金糕</pa-dropdown-item>
        <pa-dropdown-item command="b">狮子头</pa-dropdown-item>
        <pa-dropdown-item command="c">螺蛳粉</pa-dropdown-item>
        <pa-dropdown-item command="d" disabled>双皮奶</pa-dropdown-item>
        <pa-dropdown-item command="e" divided>蚵仔煎</pa-dropdown-item>
      </pa-dropdown-menu>
    </pa-dropdown>
  </div>
</template>
<style>
  .pa-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .pa-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$message("click on item " + command);
      },
    },
  };
</script>
```

:::

### 不同尺寸

Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<template>
  <div style="padding: 0 24px">
    <pa-dropdown split-button type="primary">
      默认尺寸
      <pa-dropdown-menu slot="dropdown">
        <pa-dropdown-item>黄金糕</pa-dropdown-item>
        <pa-dropdown-item>狮子头</pa-dropdown-item>
        <pa-dropdown-item>螺蛳粉</pa-dropdown-item>
        <pa-dropdown-item>双皮奶</pa-dropdown-item>
        <pa-dropdown-item>蚵仔煎</pa-dropdown-item>
      </pa-dropdown-menu>
    </pa-dropdown>

    <pa-dropdown size="medium" split-button type="primary">
      中等尺寸
      <pa-dropdown-menu slot="dropdown">
        <pa-dropdown-item>黄金糕</pa-dropdown-item>
        <pa-dropdown-item>狮子头</pa-dropdown-item>
        <pa-dropdown-item>螺蛳粉</pa-dropdown-item>
        <pa-dropdown-item>双皮奶</pa-dropdown-item>
        <pa-dropdown-item>蚵仔煎</pa-dropdown-item>
      </pa-dropdown-menu>
    </pa-dropdown>

    <pa-dropdown size="small" split-button type="primary">
      小型尺寸
      <pa-dropdown-menu slot="dropdown">
        <pa-dropdown-item>黄金糕</pa-dropdown-item>
        <pa-dropdown-item>狮子头</pa-dropdown-item>
        <pa-dropdown-item>螺蛳粉</pa-dropdown-item>
        <pa-dropdown-item>双皮奶</pa-dropdown-item>
        <pa-dropdown-item>蚵仔煎</pa-dropdown-item>
      </pa-dropdown-menu>
    </pa-dropdown>

    <pa-dropdown size="mini" split-button type="primary">
      超小尺寸
      <pa-dropdown-menu slot="dropdown">
        <pa-dropdown-item>黄金糕</pa-dropdown-item>
        <pa-dropdown-item>狮子头</pa-dropdown-item>
        <pa-dropdown-item>螺蛳粉</pa-dropdown-item>
        <pa-dropdown-item>双皮奶</pa-dropdown-item>
        <pa-dropdown-item>蚵仔煎</pa-dropdown-item>
      </pa-dropdown-menu>
    </pa-dropdown>
  </div>
</template>
```

:::

### Dropdown Attributes

| 参数          | 说明                                                                                                     | 类型    | 可选值                                               | 默认值     |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------- | ---------- |
| type          | 菜单按钮类型，同 Button 组件(只在`split-button`为 true 的情况下有效)                                     | string  | —                                                    | —          |
| size          | 菜单尺寸，在`split-button`为 true 的情况下也对触发按钮生效                                               | string  | medium / small / mini                                | —          |
| split-button  | 下拉触发元素呈现为按钮组                                                                                 | boolean | —                                                    | false      |
| placement     | 菜单弹出位置                                                                                             | string  | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom-end |
| trigger       | 触发下拉的行为                                                                                           | string  | hover, click                                         | hover      |
| hide-on-click | 是否在点击菜单项后隐藏菜单                                                                               | boolean | —                                                    | true       |
| show-timeout  | 展开下拉菜单的延时（仅在 trigger 为 hover 时有效）                                                       | number  | —                                                    | 250        |
| hide-timeout  | 收起下拉菜单的延时（仅在 trigger 为 hover 时有效）                                                       | number  | —                                                    | 150        |
| tabindex      | Dropdown 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | number  | —                                                    | 0          |
| disabled      | 是否禁用                                                                                                 | boolean | —                                                    | false      |

### Dropdown Slots

| Name     | 说明                                                       |
| -------- | ---------------------------------------------------------- |
| —        | 触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件 |
| dropdown | 下拉列表，通常是 `<pa-dropdown-menu>` 组件                 |

### Dropdown Events

| 事件名称       | 说明                                          | 回调参数                      |
| -------------- | --------------------------------------------- | ----------------------------- |
| click          | `split-button` 为 true 时，点击左侧按钮的回调 | —                             |
| command        | 点击菜单项触发的事件回调                      | dropdown-item 的指令          |
| visible-change | 下拉框出现/隐藏时触发                         | 出现则为 true，隐藏则为 false |

### Dropdown Menu Item Attributes

| 参数     | 说明       | 类型                 | 可选值 | 默认值 |
| -------- | ---------- | -------------------- | ------ | ------ |
| command  | 指令       | string/number/object | —      | —      |
| disabled | 禁用       | boolean              | —      | false  |
| divided  | 显示分割线 | boolean              | —      | false  |
| icon     | 图标类名   | string               | —      | —      |
