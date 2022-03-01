# PaDatePicker 日期选择器

### 时间限定于一段时间， 时间限定于当月

:::demo

```html
<template>
  <div class="pahm-datePickers">
    <pa-date-picker-multi range-separator="至">
      <pa-date-picker
        v-model="propsMultiData.valueStart"
        type="date"
        format="yyyy-MM-dd"
        :picker-options="propsMultiData.pickerOptionStart"
        @pa-picker="paPickerMultiStart"
      />
      <pa-date-picker
        v-model="propsMultiData.valueEnd"
        type="date"
        format="yyyy-MM-dd"
        :picker-options="propsMultiData.pickerOptionEnd"
        @pa-picker="paPickerMultiEnd"
      />
    </pa-date-picker-multi>
  </div>
</template>
<script>
  const rangeTime = (timer, range) => {
    const rangeDate = range.split('-');
    const start = rangeDate[0];
    const end = rangeDate[1];
    return timer.getTime() < new Date(start).getTime() || timer.getTime() > new Date(end).getTime();
  };
  const formatDate = time => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).substr(-2);
    const day = date.getDate();
    return `${year}.${month}.${day}`;
  };
  export default {
    name: 'DatePickerDemo',
    data() {
      return {
        propsMultiData: {
          valueStart: new Date().getTime(),
          pickerOptionStart: {
            disabledDate: timer => {
              const end =
                this.propsMultiData.valueEnd &&
                timer.getTime() > new Date(formatDate(this.propsMultiData.valueEnd)).getTime();
              return end || rangeTime(timer, '2021.06.01-2021.06.30');
            },
            shortcuts: [
              {
                text: '今天',
                onClick: picker => {
                  const start = new Date(formatDate(new Date()));
                  const end = new Date(start).getTime() + 8.64e7 - 1000;
                  picker.$emit('pick', start);
                  this.propsMultiData.valueEnd = end;
                },
              },
              {
                text: '最近一周',
                onClick: picker => {
                  const date = new Date();
                  const end = new Date(date.getTime() + 3600 * 1000 * 24 * 7 - 1000);
                  picker.$emit('pick', date);
                  this.propsMultiData.valueEnd = end;
                },
              },
              {
                text: '最近一个月',
                onClick: picker => {
                  const date = new Date();
                  const end = new Date(date.getTime() + 3600 * 1000 * 24 * 30 - 1000);
                  picker.$emit('pick', date);
                  this.propsMultiData.valueEnd = end;
                },
              },
            ],
          },
          pickerOptionEnd: {
            disabledDate: timer => {
              const start =
                this.propsMultiData.valueStart &&
                timer.getTime() < new Date(formatDate(this.propsMultiData.valueStart)).getTime();
              return start || rangeTime(timer, '2021.06.01-2021.06.30');
            },
          },
          valueEnd: new Date().getTime() + 8.64e7,
        },
      };
    },
    mounted() {},
    methods: {
      paPickerMultiStart() {},
      paPickerMultiEnd() {},
    },
  };
</script>
```

:::

### 时间选择同时限制开始和结束，同时都具有快捷选择器

:::demo

```html
<template>
  <div class="pahm-datePickers">
    <pa-form :model="propsMultiData" inline>
      <pa-date-picker-multi>
        <pa-date-picker
          v-model="propsMultiDataLR.valueStart"
          type="datetime"
          :picker-options="propsMultiDataLR.pickerOptionStart"
          @pa-picker="paPickerMultiStart"
        />
        <pa-date-picker
          v-model="propsMultiDataLR.valueEnd"
          type="datetime"
          :picker-options="propsMultiDataLR.pickerOptionEnd"
          @pa-picker="paPickerMultiEnd"
        />
      </pa-date-picker-multi>
    </pa-form>
  </div>
</template>
<script>
  const rangeTime = (timer, range) => {
  const rangeDate = range.split('-');
  const start = rangeDate[0];
  const end = rangeDate[1];
    return timer.getTime() < new Date(start).getTime() || timer.getTime() > new Date(end).getTime();
  };
  const formatDate = time => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).substr(-2);
    const day = date.getDate();
    return `${year}.${month}.${day}`;
  };
  export default {
    name: 'DatePickerDemo',
    data() {
      return {
        propsMultiData: {
          valueStart: new Date().getTime(),
          pickerOptionStart: {
            disabledDate: timer => {
              const end =
                this.propsMultiData.valueEnd &&
                timer.getTime() > new Date(formatDate(this.propsMultiData.valueEnd)).getTime();
              return end || rangeTime(timer, '2021.06.01-2021.06.30');
            },
            shortcuts: [
              {
                text: '今天',
                onClick: picker => {
                  const start = new Date(formatDate(new Date()));
                  const end = new Date(start).getTime() + 8.64e7 - 1000;
                  picker.$emit('pick', start);
                  this.propsMultiData.valueEnd = end;
                },
              },
              {
                text: '最近一周',
                onClick: picker => {
                  const date = new Date();
                  const end = new Date(date.getTime() + 3600 * 1000 * 24 * 7 - 1000);
                  picker.$emit('pick', date);
                  this.propsMultiData.valueEnd = end;
                },
              },
              {
                text: '最近一个月',
                onClick: picker => {
                  const date = new Date();
                  const end = new Date(date.getTime() + 3600 * 1000 * 24 * 30 - 1000);
                  picker.$emit('pick', date);
                  this.propsMultiData.valueEnd = end;
                },
              },
            ],
          },
          pickerOptionEnd: {
            disabledDate: timer => {
              const start =
                this.propsMultiData.valueStart &&
                timer.getTime() < new Date(formatDate(this.propsMultiData.valueStart)).getTime();
              return start || rangeTime(timer, '2021.06.01-2021.06.30');
            },
          },
          valueEnd: new Date().getTime() + 8.64e7,
        },
        propsMultiDataLR: {
          valueStart: new Date().getTime(),
          pickerOptionStart: {
            disabledDate: timer => {
              const end =
                this.propsMultiDataLR.valueEnd &&
                timer.getTime() > new Date(formatDate(this.propsMultiDataLR.valueEnd)).getTime();
              return end;
            },
            shortcuts: [
              {
                text: '今天',
                onClick: picker => {
                  const start = new Date(formatDate(new Date()));
                  const end = new Date(start).getTime() + 8.64e7 - 1000;
                  picker.$emit('pick', start);
                  this.propsMultiDataLR.valueEnd = end;
                },
              },
              {
                text: '最近一周',
                onClick: picker => {
                  const date = new Date();
                  const end = new Date(date.getTime() + 3600 * 1000 * 24 * 7 - 1000);
                  picker.$emit('pick', date);
                  this.propsMultiDataLR.valueEnd = end;
                },
              },
              {
                text: '最近一个月',
                onClick: picker => {
                  const date = new Date();
                  const end = new Date(date.getTime() + 3600 * 1000 * 24 * 30 - 1000);
                  picker.$emit('pick', date);
                  this.propsMultiDataLR.valueEnd = end;
                },
              },
            ],
          },
          pickerOptionEnd: {
            disabledDate: timer => {
              const start =
                this.propsMultiDataLR.valueStart &&
                timer.getTime() < new Date(formatDate(this.propsMultiDataLR.valueStart)).getTime();
              return start;
            },
            shortcuts: [
              {
                text: '今天',
                onClick: picker => {
                  const start = new Date(formatDate(new Date()));
                  const end = new Date(start).getTime() + 8.64e7 - 1000;
                  picker.$emit('pick', end);
                  this.propsMultiDataLR.valueStart = start;
                },
              },
              {
                text: '最近一周',
                onClick: picker => {
                  const date = new Date();
                  const end = new Date(date.getTime() + 3600 * 1000 * 24 * 7 - 1000);
                  picker.$emit('pick', end);
                  this.propsMultiDataLR.valueStart = date;
                },
              },
              {
                text: '最近一个月',
                onClick: picker => {
                  const date = new Date();
                  const end = new Date(date.getTime() + 3600 * 1000 * 24 * 30 - 1000);
                  picker.$emit('pick', end);
                  this.propsMultiDataLR.valueStart = date;
                },
              },
            ],
          },
          valueEnd: new Date().getTime() + 8.64e7,
        },
      };
    },
    mounted() {},
    methods: {
      paPickerMultiStart() {},
      paPickerMultiEnd() {},
      paPickerStart(p) {
        if (this.propsMultiDataBet.valueEnd) {
          new Date(p[0]).getTime() > new Date(this.propsMultiDataBet.valueEnd) &&
            (this.propsMultiDataBet.valueEnd = '');
        }
      },
      paPickerEnd(p) {
        if (this.propsMultiDataBet.valueStart) {
          new Date(p[0]).getTime() < new Date(this.propsMultiDataBet.valueStart) &&
            (this.propsMultiDataBet.valueStart = '');
        }
      },
    },
  };
</script>
```

:::

### 当两侧选择的时间分别跨了对方的跨度，被跨度的会被重置

:::demo

```html
<template>
  <div class="pahm-datePickers">
    <pa-date-picker-multi>
      <pa-date-picker
        v-model="propsMultiDataBet.valueStart"
        type="datetime"
        :picker-options="propsMultiDataBet.pickerOptionStart"
        @pa-picker="paPickerStart"
      />
      <pa-date-picker
        v-model="propsMultiDataBet.valueEnd"
        type="datetime"
        :picker-options="propsMultiDataBet.pickerOptionEnd"
        @pa-picker="paPickerEnd"
      />
    </pa-date-picker-multi>
  </div>
</template>
<script>
  const rangeTime = (timer, range) => {
    const rangeDate = range.split('-');
    const start = rangeDate[0];
    const end = rangeDate[1];
    return timer.getTime() < new Date(start).getTime() || timer.getTime() > new Date(end).getTime();
  };
  const formatDate = time => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).substr(-2);
    const day = date.getDate();
    return `${year}.${month}.${day}`;
  };
  export default {
    name: 'DatePickerDemo',
    data() {
      return {
        propsMultiDataBet: {
          valueStart: '',
          pickerOptionStart: {
            shortcuts: [
              {
                text: '今天',
                onClick: picker => {
                  const start = new Date(formatDate(new Date()));
                  const end = new Date(start).getTime() + 8.64e7 - 1000;
                  picker.$emit('pick', start);
                  this.propsMultiDataBet.valueEnd = end;
                },
              },
              {
                text: '最近一周',
                onClick: picker => {
                  const date = new Date();
                  const end = new Date(date.getTime() + 3600 * 1000 * 24 * 7 - 1000);
                  picker.$emit('pick', date);
                  this.propsMultiDataBet.valueEnd = end;
                },
              },
              {
                text: '最近一个月',
                onClick: picker => {
                  const date = new Date();
                  const end = new Date(date.getTime() + 3600 * 1000 * 24 * 30 - 1000);
                  picker.$emit('pick', date);
                  this.propsMultiDataBet.valueEnd = end;
                },
              },
            ],
          },
          valueEnd: '',
          pickerOptionEnd: {
            shortcuts: [
              {
                text: '今天',
                onClick: picker => {
                  const start = new Date(formatDate(new Date()));
                  const end = new Date(start).getTime() + 8.64e7 - 1000;
                  picker.$emit('pick', end);
                  this.propsMultiDataBet.valueStart = start;
                },
              },
              {
                text: '最近一周',
                onClick: picker => {
                  const date = new Date();
                  const end = new Date(date.getTime() + 3600 * 1000 * 24 * 7 - 1000);
                  picker.$emit('pick', end);
                  this.propsMultiDataBet.valueStart = date;
                },
              },
              {
                text: '最近一个月',
                onClick: picker => {
                  const date = new Date();
                  const end = new Date(date.getTime() + 3600 * 1000 * 24 * 30 - 1000);
                  picker.$emit('pick', end);
                  this.propsMultiDataBet.valueStart = date;
                },
              },
            ],
          },
        },
      }
    },
    mounted() {},
    methods: {
      paPickerStart(p) {
        if (this.propsMultiDataBet.valueEnd) {
          new Date(p[0]).getTime() > new Date(this.propsMultiDataBet.valueEnd) &&
            (this.propsMultiDataBet.valueEnd = '');
        }
      },
      paPickerEnd(p) {
        if (this.propsMultiDataBet.valueStart) {
          new Date(p[0]).getTime() < new Date(this.propsMultiDataBet.valueStart) &&
            (this.propsMultiDataBet.valueStart = '');
        }
      },
    },
  };
</script>
```

:::

### Attributes

| 参数              | 说明                                           | 类型     | 可选值                                                                                                                          | 默认值               |
| ----------------- | ---------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| readonly          | 完全只读                                       | boolean  | —                                                                                                                               | false                |
| disabled          | 禁用                                           | boolean  | —                                                                                                                               | false                |
| editable          | 文本框可输入                                   | boolean  | —                                                                                                                               | true                 |
| clearable         | 是否显示清除按钮                               | boolean  | —                                                                                                                               | true                 |
| size              | 输入框尺寸                                     | string   | large, small, mini                                                                                                              | —                    |
| placeholder       | 非范围选择时的占位内容                         | string   | —                                                                                                                               | —                    |
| start-placeholder | 范围选择时开始日期的占位内容                   | string   | —                                                                                                                               | —                    |
| end-placeholder   | 范围选择时结束日期的占位内容                   | string   | —                                                                                                                               | —                    |
| type              | 显示类型                                       | string   | year/month/date/dates/ week/datetime/datetimerange/daterange                                                                    | date                 |
| format            | 显示在输入框中的格式                           | string   | 见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)                                                                        | yyyy-MM-dd           |
| align             | 对齐方式                                       | string   | left, center, right                                                                                                             | left                 |
| popper-class      | DatePicker 下拉框的类名                        | string   | —                                                                                                                               | —                    |
| picker-options    | 当前时间日期选择器特有的选项参考下表           | object   | —                                                                                                                               | {}                   |
| range-separator   | 选择范围时的分隔符                             | string   | —                                                                                                                               | '-'                  |
| default-value     | 可选，选择器打开时默认显示的时间               | Date     | 可被`new Date()`解析                                                                                                            | —                    |
| default-time      | 范围选择时选中日期所使用的当日内具体时刻       | string[] | 数组，长度为 2，每项值为字符串，形如`12:00:00`，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 `00:00:00` | —                    |
| value-format      | 可选，绑定值的格式。不指定则绑定值为 Date 对象 | string   | 见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)                                                                        | —                    |
| name              | 原生属性                                       | string   | —                                                                                                                               | —                    |
| unlink-panels     | 在范围选择器里取消两个日期面板之间的联动       | boolean  | —                                                                                                                               | false                |
| prefix-icon       | 自定义头部图标的类名                           | string   | —                                                                                                                               | el-icon-date         |
| clear-icon        | 自定义清空图标的类名                           | string   | —                                                                                                                               | el-icon-circle-close |

### Picker Options

| 参数           | 说明                                                                 | 类型                           | 可选值 | 默认值 |
| -------------- | -------------------------------------------------------------------- | ------------------------------ | ------ | ------ |
| shortcuts      | 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表    | Object[]                       | —      | —      |
| disabledDate   | 设置禁用状态，参数为当前日期，要求返回 Boolean                       | Function                       | —      | —      |
| firstDayOfWeek | 周起始日                                                             | Number                         | 1 到 7 | 7      |
| onPick         | 选中日期后会执行的回调，只有当 `daterange` 或 `datetimerange` 才生效 | Function({ maxDate, minDate }) | —      | —      |

### Shortcuts

| 参数    | 说明                                                                                                 | 类型     | 可选值 | 默认值 |
| ------- | ---------------------------------------------------------------------------------------------------- | -------- | ------ | ------ |
| text    | 标题文本                                                                                             | string   | —      | —      |
| onClick | 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date()) | function | —      | —      |

### Events

| 事件名称 | 说明                    | 回调参数                                               |
| -------- | ----------------------- | ------------------------------------------------------ |
| change   | 用户确认选定的值时触发  | 组件绑定值。格式与绑定值一致，可受 `value-format` 控制 |
| blur     | 当 input 失去焦点时触发 | 组件实例                                               |
| focus    | 当 input 获得焦点时触发 | 组件实例                                               |

### Methods

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | —    |
