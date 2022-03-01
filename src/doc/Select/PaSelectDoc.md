# PaSelect 下拉

### 基本用法

:::demo

```html
<template>
  <div style="width: 100%; height: 100%;">
    <p>
      <a href="https://element.eleme.cn/#/zh-CN/component/select" target="_blank">
        参考element 文档
      </a>
    </p>
    <p>基础用法</p>
    <pa-select :value.sync="value" :options="options" />
    <p>有禁用选项</p>
    <pa-select :value.sync="value" :options="options1" />
    <p>禁用状态</p>
    <pa-select :value.sync="value" :options="options" disabled />
    <p>基础多选</p>
    <pa-select :value.sync="value1" :options="options" multiple />
    <br>
    <pa-select :value.sync="value1" :options="options" multiple collapse-tags />
    <p>自定义模板</p>
    <pa-select :value.sync="value" :options="options" custom-show />
    <p>可搜索</p>
    <pa-select :value.sync="value" :options="options" filterable />
    <p>远程搜索</p>
    <pa-select
      :value.sync="value2"
      :options="options2"
      filterable
      remote
      reserve-keyword
      :remote-method="remoteMethod"
      multiple
    />
    <p>分组</p>
    <pa-select :value.sync="value3" :options="options3" options-group />
  </div>
</template>
<script>
  export default {
    name: 'PahmSelect',
    data() {
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
        ],
        value: '',
        options1: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
            disabled: true,
          },
          {
            value: '选项3',
            label: '黄金糕3',
          },
          {
            value: '选项4',
            label: '黄金糕4',
          },
        ],
        value1: [],
        options2: [],
        value2: '',
        options3: [
          {
            label: '热门城市',
            options: [
              {
                value: 'Shanghai',
                label: '上海',
              },
              {
                value: 'Beijing',
                label: '北京',
              },
            ],
          },
          {
            label: '城市名',
            options: [
              {
                value: 'Chengdu',
                label: '成都',
              },
              {
                value: 'Shenzhen',
                label: '深圳',
              },
              {
                value: 'Guangzhou',
                label: '广州',
              },
              {
                value: 'Dalian',
                label: '大连',
              },
            ],
          },
        ],
        value3: '',
        columns: [
          {
            field: 'name',
            title: '属性名',
          },
          {
            title: '类型',
            field: 'type',
          },
          {
            title: '默认值',
            field: 'default',
          },
          {
            title: '说明',
            field: 'state',
          },
        ],
        dataColumns: [
          {
            name: 'customShow',
            type: 'boolean',
            state: '自定义模板',
            default: 'false',
          },
          {
            name: 'optionsGroup',
            type: 'boolean',
            state: '分组',
            default: 'false',
          },
        ],
      };
    },
    methods: {
      remoteMethod(query) {
        let list = [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
          {
            value: '选项3',
            label: '蚵仔煎',
          },
          {
            value: '选项4',
            label: '龙须面',
          },
          {
            value: '选项5',
            label: '北京烤鸭',
          },
        ];
        if (query) {
          this.options2 = list.filter(item => item.label.indexOf(query) > -1);
        } else {
          this.options2 = [];
        }
      },
    },
  };
</script>
```

:::

### Select Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| multiple | 是否多选 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| value-key | 作为 value 唯一标识的键名，绑定值为对象类型时必填 | string | — | value |
| size | 输入框尺寸 | string | medium/small/mini | — |
| clearable | 是否可以清空选项 | boolean | — | false |
| collapse-tags | 多选时是否将选中值按文字的形式展示 | boolean | — | false |
| multiple-limit | 多选时用户最多可以选择的项目数，为 0 则不限制 | number | — | 0 |
| name | select input 的 name 属性 | string | — | — |
| autocomplete | select input 的 autocomplete 属性 | string | — | off |
| auto-complete | 下个主版本弃用 | string | — | off |
| placeholder | 占位符 | string | — | 请选择 |
| filterable | 是否可搜索 | boolean | — | false |
| allow-create | 是否允许用户创建新条目，需配合 `filterable` 使用 | boolean | — | false |
| filter-method | 自定义搜索方法 | function | — | — |
| remote | 是否为远程搜索 | boolean | — | false |
| remote-method | 远程搜索方法 | function | — | — |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| loading-text | 远程加载时显示的文字 | string | — | 加载中 |
| no-match-text | 搜索条件无匹配时显示的文字 | string | — | 无匹配数据 |
| no-data-text | 选项为空时显示的文字 | string | — | 无数据 |
| popper-class | Select 下拉框的类名 | string | — | — |
| reserve-keyword | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词 | boolean | — | false |
| default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用 | boolean | - | false |
| popper-append-to-body | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false | boolean | - | true |
| automatic-dropdown | 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单 | boolean | - | false |

### Select Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| remove-tag | 多选模式下移除tag时触发 | 移除的tag值 |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |

### Select Slots
|   name  | 说明     |
|---------|---------|
|    —    | Option 组件列表 |
| prefix  | Select 组件头部内容 |

### Option Group Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 分组的组名 | string | — | — |
| disabled | 是否将该分组下所有选项置为禁用 | boolean | — | false |

### Option Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签，若不设置则默认与 `value` 相同 | string/number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
| blur | 使 input 失去焦点，并隐藏下拉框 | - |
