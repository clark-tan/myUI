<template>
  <div class="pahmtooltip">
    <div class="top">
      <pa-tooltip
        class="item"
        effect="dark"
        content="Top Left 提示文字"
        placement="top-start"
      >
        <pa-button>上左</pa-button>
      </pa-tooltip>
      <pa-tooltip
        class="item"
        effect="dark"
        content="Top Center 提示文字"
        placement="top"
        :value="true"
        :manual="true"
      >
        <pa-button>上边</pa-button>
      </pa-tooltip>
      <pa-tooltip
        class="item"
        effect="dark"
        content="Top Right 提示文字"
        placement="top-end"
      >
        <pa-button>上右</pa-button>
      </pa-tooltip>
    </div>
    <div class="left">
      <pa-tooltip
        class="item"
        effect="dark"
        content="Left Top 提示文字"
        placement="left-start"
      >
        <pa-button>左上</pa-button>
      </pa-tooltip>
      <pa-tooltip
        class="item"
        effect="dark"
        content="Left Center 提示文字"
        placement="left"
      >
        <pa-button>左边</pa-button>
      </pa-tooltip>
      <pa-tooltip
        class="item"
        effect="dark"
        content="Left Bottom 提示文字"
        placement="left-end"
      >
        <pa-button>左下</pa-button>
      </pa-tooltip>
    </div>

    <div class="right">
      <pa-tooltip
        class="item"
        effect="dark"
        content="Right Top 提示文字"
        placement="right-start"
      >
        <pa-button>右上</pa-button>
      </pa-tooltip>
      <pa-tooltip class="item" effect="dark" content="" placement="right">
        <pa-button>右边</pa-button>
      </pa-tooltip>
      <pa-tooltip class="item" effect="dark" placement="right-end">
        <span slot="content">slot Right Bottom 提示文字</span>
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
      <pa-tooltip
        class="item"
        effect="dark"
        content="Bottom Center 提示文字"
        placement="bottom"
      >
        <pa-button>下边</pa-button>
      </pa-tooltip>
      <pa-tooltip
        class="item"
        effect="dark"
        content="Bottom Right 提示文字"
        placement="bottom-end"
      >
        <pa-button>下右</pa-button>
      </pa-tooltip>
    </div>
    <div style="margin-top: 50px">
      <h2>使用方式</h2>
      <div v-text="text" />
      <h2>Attributes</h2>
      <a-table
        :columns="columns"
        :data-source="dataSource"
        :pagination="false"
      />
    </div>
  </div>
</template>
<script>
const dataSource = require("./data-source.json");
export default {
  name: "PahmToolTip",
  data() {
    return {
      text: `<pa-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
        <pa-button>下右</pa-button>
      </pa-tooltip>`,
      columns: [
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
      ],
      dataSource,
    };
  },
};
</script>
<style lang="less" scope>
.page {
  .pahmtooltip {
    width: 1000px;
    height: 100%;
    margin: 150px;

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
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }
}
</style>
