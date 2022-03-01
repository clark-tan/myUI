<!--
 * @Autor: clark tan
 * @Date: 2021-05-24 20:30:56
 * @LastEditors: clark tan
 * @LastEditTime: 2021-06-30 18:05:36
 * @Description: 
-->
<template>
  <div style="width: 100%; height: 100%; padding: 24px">
    <pa-button type="primary" @click="openCommon"> 常用弹窗 </pa-button>
    <pa-button type="primary" @click="openCommonOther"> 其他用法 </pa-button>
    <div style="width: 100%">
      <p style="font-size: 24px; margin-top: 24px">常用写法</p>
      <pre>
        @click="openCommon" // dom 点击事件

        openCommon() {
          this.$paComfirm({
            icon: 'icon-jinggao', // pa-icon 的name
            title: '比较长的标题比较长的标题比较长的标题比较长的标题比较长的标题比较长的标题',
            text: '',
          })
            .then(() => {
              this.$message({
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
      </pre>
    </div>

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
  name: "PahmMessageBox",
  data() {
    return {
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
          name: "title",
          type: "string",
          state: "MessageBox 标题",
          default: "",
        },
        {
          name: "text",
          type: "string",
          state: "MessageBox 描述",
          default: "",
        },
        {
          name: "icon",
          type: "string",
          state: "图标",
          default: "icon-jinggao",
        },
        {
          name: "cancelButtonText",
          type: "string",
          state: "取消按钮的文本内容",
          default: "取消",
        },
        {
          name: "confirmButtonText",
          type: "string",
          state: "确定按钮的文本内容",
          default: "确定",
        },
      ],
    };
  },
  methods: {
    openCommon() {
      this.$paConfirm({
        icon: "icon-jinggao",
        title:
          "比较长的标题比较长的标题比较长的标题比较长的标题比较长的标题比较长的标题",
        text: "",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    openCommonOther() {
      const h = this.$createElement;
      const instance = this.$paMessageBox({
        title: "消息",
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode"),
        ]),
        confirmButtonText: "确定",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
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
