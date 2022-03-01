<template>
  <div style="width: 100%; height: 100%">
    <detail-layout :breadcrumbs="$store.state.menu">
      <!--      <template v-slot:breadcrumb>-->
      <!--        <pa-breadcrumb :breadcrumbs.sync="breadcrumbs" />-->
      <!--      </template>-->
      <template v-slot:detail-content>
        <div class="detail-main">
          <div class="title">基本信息</div>
          <div class="item-content">
            <el-form ref="form" :inline="true" label-width="100px">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="活动名称1：">
                    <span>迷失的森林</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="活动名称1：">
                    <span>迷失的森林</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="活动名称2：">
                    <span>迷失的森林2</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="活动名称3：">
                    <span>迷失的森林3</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="活动名称4：">
                    <span>迷失的森林4</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="活动名称5：">
                    <span>迷失的森林5</span>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <div class="title">组件信息</div>
          <div class="item-content">
            <el-row :gutter="20">
              <el-col :span="24" class="dash-line">
                <pa-search-form :search-form="searchForm" :btn-col-span="5">
                  <pa-search-form-item
                    prop-name="status"
                    label="状态"
                    :col-span="4"
                  >
                    <pa-input v-model="searchForm.status" clearable />
                  </pa-search-form-item>
                  <pa-search-form-item
                    prop-name="userName"
                    label="用户账户"
                    :col-span="5"
                  >
                    <pa-input v-model="searchForm.userName" clearable />
                  </pa-search-form-item>
                  <pa-search-form-item
                    prop-name="userId"
                    label="员工编号"
                    :col-span="5"
                  >
                    <pa-input v-model="searchForm.userId" clearable />
                  </pa-search-form-item>
                  <pa-search-form-item
                    prop-name="realName"
                    label="用户名称"
                    :col-span="5"
                  >
                    <pa-input v-model="searchForm.realName" clearable />
                  </pa-search-form-item>
                </pa-search-form>
              </el-col>
              <el-col :span="24" class="dash-line">
                <pa-tabs v-model="value">
                  <pa-tab-pane
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :name="item.value"
                  >
                    {{ item.label }}
                  </pa-tab-pane>
                </pa-tabs>
              </el-col>
              <el-col :span="24" class="dash-line">
                <pa-breadcrumb :breadcrumbs.sync="breadcrumbs1" />
              </el-col>
              <el-col :span="24" class="dash-line">
                <div style="margin-top: 16px">
                  <pa-button @click="open"> success消息 </pa-button>
                  <pa-button @click="open1"> error消息 </pa-button>
                  <pa-button @click="open2"> warning消息 </pa-button>
                  <pa-button @click="open3"> normal消息 </pa-button>
                </div>
              </el-col>
              <el-col :span="24" class="dash-line">
                <pa-button @click="handlerClick">
                  服务方式loading...
                </pa-button>
                <pa-button
                  v-loading.fullscreen.lock="fullscreenLoading"
                  @click="handlerClick1"
                >
                  指令方式loading...
                </pa-button>
              </el-col>
              <el-col :span="24" class="dash-line">
                <pa-button type="primary"> 提交 </pa-button>
                <pa-button>删除</pa-button>
                <pa-button :loading="true" type="primary">
                  加载中...
                </pa-button>
                <pa-button icon-name="icon-bianji" type="primary">
                  编辑
                </pa-button>
                <pa-button
                  icon-name="icon-cuowu"
                  type="primary"
                  :disabled="true"
                >
                  禁用
                </pa-button>
                <pa-button icon-name="icon-shanchu"> 删除 </pa-button>
                <pa-button icon-name="icon-shanchu" :disabled="true">
                  删除
                </pa-button>
                <pa-button type="primary-text"> 文字按钮 </pa-button>
                <pa-button type="primary-text" disabled> 文字按钮 </pa-button>
                <pa-button type="text"> 文字按钮 </pa-button>
              </el-col>
              <el-col :span="24" class="dash-line">
                <pa-button type="primary" @click="dialogVisible = true">
                  弹框
                </pa-button>
                <pa-dialog
                  title="标题"
                  :visible.sync="dialogVisible"
                  :confirm-loading="confirmLoading"
                  @ok="handleOK"
                  @cancel="handleCancel"
                >
                  这里可以写各种复杂的div | form
                </pa-dialog>
              </el-col>
              <el-col :span="24" class="dash-line">
                <el-radio-group v-model="direction">
                  <el-radio label="ltr"> 从左往右开 </el-radio>
                  <el-radio label="rtl"> 从右往左开 </el-radio>
                  <el-radio label="ttb"> 从上往下开 </el-radio>
                  <el-radio label="btt"> 从下往上开 </el-radio>
                </el-radio-group>
                <pa-button
                  type="primary"
                  @click="showDrawer"
                  style="margin-left: 24px"
                >
                  打开抽屉
                </pa-button>
                <pa-drawer
                  title="抽屉"
                  :direction="direction"
                  :closable="true"
                  :visible.sync="visible"
                  :confirm-loading="confirmLoading1"
                  @ok="handleOK1"
                  @cancel="handleCancel1"
                >
                  <div style="padding: 24px">hello wrold</div>
                </pa-drawer>
              </el-col>
            </el-row>
          </div>
        </div>
      </template>
    </detail-layout>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      breadcrumbs: [
        {
          path: "/detail-layout",
          text: "详情",
        },
      ],
      searchForm: {
        status: "",
        realName: "",
        userName: "",
        userId: "",
      },
      // tabs
      value: "value1",
      options: [
        {
          label: "今日任务概览",
          value: "value1",
        },
        {
          label: "近一周任务概览",
          value: "value2",
        },
      ],
      // 面包屑
      breadcrumbs1: [
        {
          path: "/",
          text: "首页",
        },
        {
          path: "/",
          text: "活动管理",
        },
        {
          path: "/",
          text: "活动列表",
        },
        {
          path: "/",
          text: "活动详情",
        },
      ],
      //   loading
      fullscreenLoading: false,
      // 弹框
      dialogVisible: false,
      confirmLoading: false,
      visible: false,
      direction: "rtl",
      confirmLoading1: false,
      dialogVisible1: false,
    };
  },
  methods: {
    open() {
      this.$pamessage({
        type: "success",
        message: "成功出现了一个提示信息",
        duration: 2000,
      });
    },
    open1() {
      this.$pamessage({
        type: "error",
        message: "出现了一个错误提示信息",
        duration: 2000,
      });
    },
    open2() {
      this.$pamessage({
        type: "warning",
        message: "出现了一个警告提示信息",
        duration: 2000,
      });
    },
    open3() {
      this.$pamessage({
        message: "正常提示信息",
        duration: 2000,
      });
    },
    handlerClick1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    handlerClick() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        // spinner: 'el-icon-loading',
        background: "rgba(0, 0, 0, 0.7)",
        // size:'small',
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    handleOK() {
      this.confirmLoading = true;
      setTimeout(() => {
        this.dialogVisible = false;
        this.confirmLoading = false;
      }, 1000);
    },
    handleCancel() {
      this.dialogVisible = false;
    },
    showDrawer() {
      this.visible = true;
    },
    handleOK1() {
      this.confirmLoading1 = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading1 = false;
      }, 1000);
    },
    handleCancel1() {
      this.visible = false;
    },
  },
};
</script>

<style scoped lang="scss">
.detail-main {
  height: 100%;
  overflow: auto;
  padding: 0 22px;
  .title {
    width: 144px;
    height: 16px;
    color: #222b45;
    line-height: 16px;
    position: relative;
    padding-left: 8px;
    margin-bottom: 14px;
    margin-top: 16px;
    &:after {
      content: "";
      width: 4px;
      height: 100%;
      background: #06c;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
.dash-line {
  border-bottom: 1px dashed #edf1f7;
  padding-bottom: 16px;
  padding-top: 16px;
}
::v-deep {
  .el-form-item__label {
    color: #999;
  }
}
</style>
