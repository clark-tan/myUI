<template>
  <detail-layout class="detail-tabs">
    <template v-slot:breadcrumb>
      <pa-breadcrumb :breadcrumbs.sync="$store.state.menu" />
    </template>
    <template v-slot:detail-content>
      <pa-tabs style="height: 100%" v-model="value" @change="handler">
        <pa-tab-pane label="查看表格" name="1" style="height: 100%">
          <pa-table
            ref="table"
            :data="tableData"
            :columns="columns"
            :pagination="pager"
            :loading="loading"
            @page-change="onPageChange"
            type="checkbox"
          >
            <pa-table-column title="状态" width="160">
              <template #default="{ row }">
                {{ row.status === 1 ? "已启动" : "已禁用" }}
              </template>
            </pa-table-column>
          </pa-table>
        </pa-tab-pane>
        <pa-tab-pane label="查看字段" name="2">
          <pa-form inline label-width="80px">
            <el-col v-for="(v, i) in new Array(20)" :key="i" :span="8">
              <pa-form-item label="实体编码 : ">
                {{ `001_${i}` }}
              </pa-form-item>
            </el-col>
          </pa-form>
        </pa-tab-pane>
      </pa-tabs>
    </template>
  </detail-layout>
</template>
<script>
export default {
  name: "DetailTabs",
  data() {
    return {
      value: "1",
      tableData: [],
      columns: [
        { type: "seq", width: "38", align: "center" },
        { field: "userAccount", title: "用户账号" },
        { field: "userName", title: "用户名称" },
        { field: "userNumber", title: "员工编号" },
      ],
      pager: { currentPage: 1, pageSize: 15, total: 0 },
      loading: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData(p = {}) {
      const data = await this.MockDb.getSearchList(p);
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
    handler() {
      this.$paMessage({
        type: "success",
        message: "切换成功",
      });
    },
  },
};
</script>
<style lang="scss">
.detail-tabs {
  .pa-tabs {
    height: 100%;
    .el-tabs__content {
      height: calc(100% - 64px);
    }
    label {
      color: #999;
    }
  }
}
</style>
