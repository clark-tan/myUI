<!--
 * @Autor: clark tan
 * @Date: 2021-05-24 20:30:56
 * @LastEditors: clark tan
 * @LastEditTime: 2021-05-24 20:37:33
 * @Description: 
-->
<template>
  <div style="width: 100%; height: 100%; padding: 24px">
    <p>
      <a
        href="https://element.eleme.cn/#/zh-CN/component/select"
        target="_blank"
      >
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
    <br />
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
    <p style="color: red">写法举例：跟官方文档一样 新增属性在表格里</p>
    <pre>
      &lt;p&gt;基础用法&lt;/p&gt;
      &lt;pa-select :value.sync="value" :options="options"&gt;&lt;/pa-select&gt;
      &lt;p&gt;有禁用选项&lt;/p&gt;
      &lt;pa-select :value.sync="value" :options="options1"&gt;&lt;/pa-select&gt;
      &lt;p&gt;禁用状态&lt;/p&gt;
      &lt;pa-select :value.sync="value" :options="options" disabled&gt;&lt;/pa-select&gt;
      &lt;p&gt;基础多选&lt;/p&gt;
      &lt;pa-select :value.sync="value1" :options="options" multiple&gt;&lt;/pa-select&gt;
      &lt;pa-select :value.sync="value1" :options="options" multiple collapseTags&gt;&lt;/pa-select&gt;
      &lt;p&gt;自定义模板&lt;/p&gt;
      &lt;pa-select :value.sync="value" :options="options" customShow&gt;&lt;/pa-select&gt;
      &lt;p&gt;可搜索&lt;/p&gt;
      &lt;pa-select :value.sync="value" :options="options" filterable&gt;&lt;/pa-select&gt;
      &lt;p&gt;远程搜索&lt;/p&gt;
      &lt;pa-select
        :value.sync="value2"
        :options="options2"
        filterable
        remote
        reserveKeyword
        :remote-method="remoteMethod"
        multiple
      &gt;&lt;/pa-select&gt;
      &lt;p&gt;分组&lt;/p&gt;
      &lt;pa-select :value.sync="value3" :options="options3" optionsGroup&gt;&lt;/pa-select&gt;
      
    </pre>
    <pa-table
      :data="dataColumns"
      :columns="columns"
      :show-pager="false"
      height="auto"
    />
  </div>
</template>
<script>
export default {
  name: "PahmSelect",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value: "",
      options1: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true,
        },
        {
          value: "选项3",
          label: "黄金糕3",
        },
        {
          value: "选项4",
          label: "黄金糕4",
        },
      ],
      value1: [],
      options2: [],
      value2: "",
      options3: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海",
            },
            {
              value: "Beijing",
              label: "北京",
            },
          ],
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都",
            },
            {
              value: "Shenzhen",
              label: "深圳",
            },
            {
              value: "Guangzhou",
              label: "广州",
            },
            {
              value: "Dalian",
              label: "大连",
            },
          ],
        },
      ],
      value3: "",
      columns: [
        {
          field: "name",
          title: "属性名",
        },
        {
          title: "类型",
          field: "type",
        },
        {
          title: "默认值",
          field: "default",
        },
        {
          title: "说明",
          field: "state",
        },
      ],
      dataColumns: [
        {
          name: "customShow",
          type: "boolean",
          state: "自定义模板",
          default: "false",
        },
        {
          name: "optionsGroup",
          type: "boolean",
          state: "分组",
          default: "false",
        },
      ],
    };
  },
  methods: {
    remoteMethod(query) {
      let list = [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ];
      if (query) {
        this.options2 = list.filter((item) => item.label.indexOf(query) > -1);
      } else {
        this.options2 = [];
      }
    },
  },
};
</script>
