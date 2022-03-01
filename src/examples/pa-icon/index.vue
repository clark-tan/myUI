<template>
  <div>
    <div>
      <h2>pa-icon 使用方式</h2>
    </div>
    <div>
      <h3>1. 通过传入name来选择不同的图标</h3>
      <p>icon 的选择参考对应的主数据服务</p>
      <a
        src="https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.13&manage_type=myprojects&projectId=2290174&keyword=&project_type=&page="
      >
        https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.13&manage_type=myprojects&projectId=2290174&keyword=&project_type=&page=
      </a>
    </div>
    <div>
      <p>
        <pa-icon name="icon-daoru" />
        <span style="margin-left: 20px">name: icon-daoru</span>
        <br />
        <span><pre>&lt;pa-icon name="icon-daoru" \/&gt;</pre></span>
      </p>
      <p>
        <pa-icon name="icon-logo" />
        <span style="margin-left: 20px">name: icon-logo</span><br />
        <span><pre>&lt;pa-icon name="icon-logo" /&gt;</pre></span>
      </p>
      <p>
        <pa-icon name="icon-shanchu" />
        <span style="margin-left: 20px">name: icon-shanchu</span><br />
        <span><pre>&lt;pa-icon name="icon-shanchu" /&gt;</pre></span>
      </p>

      <br />
      <br />
      <p>如果需要修改icon的图标颜色，可以在上面添加class或者style</p>
      <p>
        <pa-icon
          :svg-style="{ color: 'red' }"
          svg-class="svgClass"
          name="icon-shibai"
        />
        <span style="margin-left: 20px">name: icon-shibai</span>
        <br />
        <span>
          <pre>
&lt;pa-icon name="icon-shibai" svg-class="svgClass" name="icon-shibai" /&gt;</pre
          >
        </span>
      </p>

      <br />
      <br />
      <h3>Attribute</h3>
      <a-table
        :columns="columns"
        :data-source="dataColumns"
        :pagination="false"
      />
      <br />
      <br />
      <h3>Events</h3>
      <a-table
        :columns="columnsEvent"
        :data-source="dataEvent"
        :pagination="false"
      />
      <br />
      <br />
    </div>
  </div>
</template>
<script>
export default {
  name: "PahmIcon",
  data() {
    return {
      columns: [
        {
          dataIndex: "name",
          key: "name",
          title: "属性名",
        },
        {
          title: "类型",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "说明",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "默认值",
          dataIndex: "default",
          key: "default",
        },
      ],
      columnsEvent: [
        {
          dataIndex: "name",
          key: "name",
          title: "属性名",
        },
        {
          title: "类型",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "说明",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "默认值",
          dataIndex: "default",
          key: "default",
        },
      ],
      dataColumns: [
        {
          name: "svg-class",
          address: "添加自定义的class",
          age: "String",
          default: "-",
        },
        {
          name: "svg-style",
          address: "添加自定义的style",
          age: "Object",
          default: "{}",
        },
      ],
      dataEvent: [
        {
          name: "click",
          address: "点击事件",
          age: "event",
          default: "-",
        },
      ],
    };
  },
};
</script>
