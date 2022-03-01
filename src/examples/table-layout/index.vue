<template>
  <div class="demo-table-layout" style="width: 100%; height: 100%">
    <table-layout :breadcrumbs="$store.state.menu">
      <!-- <template v-slot:breadcrumb>
        <pa-breadcrumb :breadcrumbs.sync="breadcrumbs" />
      </template> -->

      <template v-slot:search>
        <pa-search-form
          :search-form="searchForm"
          layout="folder"
          :btn-col-span="7"
          :query-fun="search"
          :folder-offset="3"
        >
          <pa-search-form-item
            prop-name="userName"
            label="用户账户"
            :col-span="5"
          >
            <pa-input v-model="searchForm.userName" />
          </pa-search-form-item>
          <pa-search-form-item
            prop-name="userId"
            label="员工编号"
            :col-span="6"
          >
            <pa-input v-model="searchForm.userId" />
          </pa-search-form-item>
          <pa-search-form-item
            prop-name="realName"
            label="用户名称"
            :col-span="6"
          >
            <pa-input v-model="searchForm.realName" />
          </pa-search-form-item>

          <template v-slot:folder>
            <pa-search-form-item
              prop-name="item1"
              label="搜索条件"
              :col-span="6"
            >
              <pa-input v-model="searchForm.item1" />
            </pa-search-form-item>
            <!-- <pa-search-form-item prop-name="item2" label="搜索条件" :col-span="6">
              <pa-input v-model="searchForm.item2" />
            </pa-search-form-item> -->
            <pa-search-form-item
              prop-name="date"
              label="日期选择"
              :col-span="14"
            >
              <pa-date-picker-multi>
                <pa-date-picker v-model="searchForm.date[0]" type="datetime" />
                <pa-date-picker v-model="searchForm.date[1]" type="datetime" />
              </pa-date-picker-multi>
            </pa-search-form-item>
          </template>
        </pa-search-form>
      </template>

      <template v-slot:table>
        <!-- 主要内容自定义 -->
        <pa-table
          :data="tableData3"
          :columns="columns1"
          :pagination="pager"
          :loading="loading"
          @page-change="onPageChange"
        >
          <!-- <pa-table-column type="seq" width="60" title="序号" />
          <pa-table-column
            field="userName"
            title="账号"
            :edit-render="{ name: 'input', attrs: { type: 'text' } }"
          /> -->
        </pa-table>
      </template>
    </table-layout>
  </div>
</template>

<script>
import { staticTableData1, columns1 } from "./test-data";

export default {
  name: "Index",
  data() {
    return {
      breadcrumbs: [
        {
          path: "",
          text: "table-layout",
        },
      ],
      searchForm: {
        status: "",
        realName: "",
        userName: "",
        userId: "",
        item1: "",
        item2: "",
        item3: "",
        item4: "",
        date: ["", ""],
      },
      loading: false,
      tableData3: [],
      columns1,
      pager: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
      },
    };
  },
  created() {
    this.search();
  },
  computed: {
    tableHeight() {
      const bodyHeight = document.body.offsetHeight;
      if (bodyHeight) {
        return String(bodyHeight - 212);
      }
      return "600";
    },
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handlerClick(data) {
      // console.log(data);
    },
    search() {
      const start = (this.pager.currentPage - 1) * this.pager.pageSize;
      const end = this.pager.currentPage * this.pager.pageSize;
      // 查询中
      this.loading = true;
      setTimeout(() => {
        this.tableData3 = staticTableData1.filter((item, index) => {
          return start <= index && index < end;
        });
        this.pager.total = staticTableData1.length;
        this.loading = false;
      }, 1000);
    },
    onPageChange({ currentPage, pageSize }) {
      this.pager.currentPage = currentPage;
      this.pager.pageSize = pageSize;
      this.search();
    },
  },
};
</script>

<style>
.demo-table-layout .layout-content .box-content {
  padding-top: 8px;
}
</style>
