<template>
  <div style="height: 100%">
    <table-layout class="search-list">
      <template v-slot:breadcrumb>
        <pa-breadcrumb :breadcrumbs.sync="$store.state.menu" />
      </template>
      <template v-slot:search>
        <pa-tabs v-model="searchTabVal" @change="handler">
          <pa-tab-pane label="登录日志" name="1">
            <pa-search-form
              :search-form="searchForm"
              :query-fun="searchForm.doQuery"
              :offset="2"
              ref="searchForm"
              @resetCallback="searchForm.resetCallback"
              :btn-col-span="6"
            >
              <pa-search-form-item prop-name="status" label="状态">
                <pa-select
                  v-model="searchForm.status"
                  :options="searchForm.options"
                />
              </pa-search-form-item>
              <pa-search-form-item prop-name="userAccount" label="用户账号">
                <pa-input
                  v-model="searchForm.userAccount"
                  placeholder="用户账号"
                />
              </pa-search-form-item>
              <pa-search-form-item prop-name="userNumber" label="员工编号">
                <pa-input
                  v-model="searchForm.userNumber"
                  placeholder="员工编号"
                />
              </pa-search-form-item>
              <pa-search-form-item prop-name="userName" label="用户名称">
                <pa-input
                  v-model="searchForm.userName"
                  placeholder="用户名称"
                />
              </pa-search-form-item>
            </pa-search-form>
          </pa-tab-pane>
          <pa-tab-pane label="操作日志" name="2">
            <pa-search-form
              :search-form="searchForm"
              :query-fun="searchForm.doQuery"
              :offset="2"
              ref="searchForm"
              @resetCallback="searchForm.resetCallback"
              :btn-col-span="searchTabVal === '1' ? 6 : 14"
            >
              <pa-search-form-item prop-name="status" label="状态">
                <pa-select
                  v-model="searchForm.status"
                  :options="searchForm.options"
                  width="100%"
                />
              </pa-search-form-item>
              <pa-search-form-item prop-name="userAccount" label="用户账号">
                <pa-input
                  v-model="searchForm.userAccount"
                  placeholder="用户账号"
                />
              </pa-search-form-item>
              <pa-search-form-item
                prop-name="userNumber"
                label="员工编号"
                v-if="searchTabVal === '1'"
              >
                <pa-input
                  v-model="searchForm.userNumber"
                  placeholder="员工编号"
                />
              </pa-search-form-item>
              <pa-search-form-item
                prop-name="userName"
                label="用户名称"
                v-if="searchTabVal === '1'"
              >
                <pa-input
                  v-model="searchForm.userName"
                  placeholder="用户名称"
                />
              </pa-search-form-item>
            </pa-search-form>
          </pa-tab-pane>
        </pa-tabs>
      </template>
      <template v-slot:table>
        <template>
          <pa-table
            ref="table"
            :data="tableData"
            :columns="columns"
            :pagination="pager"
            :loading="loading"
            @page-change="onPageChange"
            type="checkbox"
          >
            <template #toolbar-right>
              <pa-button type="primary" @click="addDrawer.visible = true">
                新增
              </pa-button>
              <pa-button @click="deleteAll"> 删除 </pa-button>
            </template>
            <pa-table-column title="状态" width="160">
              <template #default="{ row }">
                {{ row.status === 1 ? "已启动" : "已禁用" }}
              </template>
            </pa-table-column>
          </pa-table>
        </template>
      </template>
    </table-layout>
  </div>
</template>
<script>
export default {
  name: "SearchList",
  data() {
    return {
      searchTabVal: "1",
      searchForm: {
        status: 1,
        options: [
          {
            value: 0,
            label: "全部",
          },
          {
            value: 1,
            label: "已启动",
          },
          {
            value: 2,
            label: "已禁用",
          },
        ],
        userAccount: undefined,
        userNumber: undefined,
        userName: undefined,
        doQuery: () => {
          this.doQuery();
        },
        resetCallback: () => {
          this.$refs.searchForm.$refs.searchForm.resetFields();
          this.getData();
        },
      },

      tableData: [],
      columns: [
        { type: "checkbox", width: "38", align: "center" },
        { field: "userAccount", title: "用户账号" },
        { field: "userName", title: "用户名称" },
        { field: "userNumber", title: "员工编号" },
      ],
      pager: { currentPage: 1, pageSize: 15, total: 0 },
      loading: false,
    };
  },
  mounted() {
    // this.getData();
  },
  methods: {
    async getData(p = {}) {
      this.loading = true;
      const data = await this.MockDb.getSearchList(p);
      this.loading = false;
      this.tableData = data.row;
      this.pager.total = data.total;
    },
    async deleteData(p = []) {
      const data = await this.MockDb.deleteSearchList(p);
      if (data.status) {
        this.$paMessage({
          type: "success",
          message: "删除成功",
          duration: 2000,
        });
        this.doQuery();
      } else {
        this.$paMessage({
          type: "error",
          message: "保存失败",
          duration: 2000,
        });
      }
    },
    async onPageChange(p) {
      if (p.type === "size") {
        this.pager.currentPage = 1;
      }
      this.getData({
        currentPage: this.pager.currentPage,
        pageSize: this.pager.pageSize,
      });
    },
    doQuery() {
      this.pager.currentPage = 1;
      const p = Object.assign(
        {
          userAccount: this.searchForm.userAccount,
          status: this.searchForm.status,
          userNumber: this.searchForm.userNumber,
          userName: this.searchForm.userName,
        },
        {
          pageSize: this.pager.pageSize,
          currentPage: 1,
        }
      );
      this.getData(p);
    },
    deleteAll() {
      const checks = this.$refs.table.getInstance().getCheckboxRecords();
      this.deleteData(checks);
    },
    handler() {},
  },
};
</script>
