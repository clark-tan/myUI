/*
 *   Copyright (c) 2021,xxxx.
 *   All rights reserved.
 *
 *   Author: wanlicheng
 */
export const html = `<template>
<div>
  <div class="pahm-datePickers">
    <pa-date-picker v-model="propsData.value" v-bind="propsData" />
  </div>
  <div class="pahm-datePickers">
    <pa-date-picker-multi range-separator="至">
      <pa-date-picker
        v-model="propsMultiData.valueStart"
        type="datetime"
        :picker-options="propsMultiData.pickerOptionStart"
        @pa-picker="paPickerMultiStart"
      />
      <pa-date-picker
        v-model="propsMultiData.valueEnd"
        type="datetime"
        :picker-options="propsMultiData.pickerOptionEnd"
        @pa-picker="paPickerMultiEnd"
      />
    </pa-date-picker-multi>
  </div>
  {{ html }}
</div>
</template>
<script>
debugger;
export default {
name: 'PahmDatePicker',
data() {
  return {
    propsData: {
      value: '',
      type: 'datetime',
    },
    propsMultiData: {
      valueStart: '',
      pickerOptionStart: {
        disabledDate(timer) {
          return timer.getTime() < new Date().getTime() - 3600 * 24 * 1000;
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
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
        disabledDate(timer) {
          return timer.getTime() < new Date().getTime() - 3600 * 24 * 1000;
        },
      },
      valueEnd: '',
    },
  };
},
mounted() {},
methods: {
  paPickerMultiStart(p) {
    const time = p[0];
    this.propsMultiData.pickerOptionEnd.disabledDate = function(timer) {
      return timer.getTime() < time.getTime();
    };
    if (this.propsMultiData.valueEnd && time.getTime() > this.propsMultiData.valueEnd.getTime()) {
      this.propsMultiData.valueEnd = '';
    }
  },
  paPickerMultiEnd() {},
},
};
</script>
<style lang='less' scope>
.pahm-datePickers {
  padding: 20px;
}
</style>
`;
export const columns = [
  {
    title: "参数",
    dataIndex: "param",
    key: "param",
  },
  {
    title: "说明",
    dataIndex: "des",
    key: "des",
  },
  {
    title: "类型",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "可选值",
    dataIndex: "selects",
    key: "selects",
  },
  {
    title: "默认值",
    dataIndex: "default",
    key: "default",
  },
];

export const dataSource = [
  {
    param: "value / v-model",
    des: "绑定值",
    type: "date(DateTimePicker) / array(DateTimeRangePicker)",
    selects: "-",
    default: "-",
  },
  {
    param: "readonly",
    des: "完全只读",
    type: "Boolean",
    selects: "-",
    default: "false",
  },
  {
    param: "disabled",
    des: "禁用",
    type: "Boolean",
    selects: "-",
    default: "false",
  },
  {
    param: "editable",
    des: "文本框可输入",
    type: "Boolean",
    selects: "-",
    default: "true",
  },
  {
    param: "clearable",
    des: "是否显示清除按钮",
    type: "Boolean",
    selects: "-",
    default: "true",
  },
  {
    param: "size",
    des: "输入框尺寸",
    type: "String",
    selects: "large, small, mini",
    default: "-",
  },
  {
    param: "placeholder",
    des: "非范围选择时的占位内容",
    type: "String",
    selects: "-",
    default: "-",
  },
  {
    param: "start-placeholder",
    des: "范围选择时开始日期的占位内容",
    type: "String",
    selects: "-",
    default: "-",
  },
  {
    param: "end-placeholder",
    des: "范围选择时结束日期的占位内容",
    type: "String",
    selects: "-",
    default: "-",
  },
  {
    param: "time-arrow-control",
    des: "是否使用箭头进行时间选择",
    type: "Boolean",
    selects: "-",
    default: "false",
  },
  {
    param: "type",
    des: "显示类型",
    type: "String",
    selects: "year/month/date/week/ datetime/datetimerange/daterange",
    default: "date",
  },
  {
    param: "format",
    des: "显示在输入框中的格式",
    type: "String",
    selects: "见日期格式",
    default: "yyyy-MM-dd HH:mm:ss",
  },
  {
    param: "align",
    des: "对齐方式",
    type: "String",
    selects: "left, center, right",
    default: "left",
  },
  {
    param: "popper-class",
    des: "DateTimePicker 下拉框的类名",
    type: "String",
    selects: "-",
    default: "-",
  },
  {
    param: "picker-options",
    des: "当前时间日期选择器特有的选项参考下表",
    type: "String",
    selects: "-",
    default: "-",
  },
  {
    param: "range-separator",
    des: "选择范围时的分隔符（可配合date-picker-multi组件来使用，表示分割符）",
    type: "String",
    selects: "-",
    default: "-",
  },
  {
    param: "default-value",
    des: "可选，选择器打开时默认显示的时间",
    type: "Date",
    selects: "可被new Date()解析",
    default: "-",
  },
  {
    param: "default-time",
    des: "选中日期后的默认具体时刻",
    type: "非范围选择时：string / 范围选择时：string[]",
    selects:
      "非范围选择时：形如12:00:00的字符串；范围选择时：数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 00:00:00",
    default: "-",
  },
  {
    param: "unlink-panels",
    des: "在范围选择器里取消两个日期面板之间的联动",
    type: "Boolean",
    selects: "-",
    default: "false",
  },
];
