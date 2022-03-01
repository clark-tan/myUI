<template>
  <div style="height: 100%">
    <table-layout class="search-list">
      <template v-slot:breadcrumb>
        <pa-breadcrumb :breadcrumbs.sync="$store.state.menu" />
      </template>
      <template v-slot:search>
        <pa-search-form
          :search-form="searchForm"
          :query-fun="searchForm.doQuery"
          :offset="2"
          ref="searchForm"
          @resetCallback="searchForm.resetCallback"
          :btn-col-span="6"
        >
          <pa-search-form-item prop-name="status" label="状态">
            <pa-select-s
              v-model="searchForm.status"
              :options="searchForm.options"
            >
              <pa-option-s
                v-for="item in searchForm.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </pa-option-s>
            </pa-select-s>
          </pa-search-form-item>
          <pa-search-form-item prop-name="userAccount" label="用户账号">
            <pa-input-s
              v-model="searchForm.userAccount"
              placeholder="用户账号"
            />
          </pa-search-form-item>
          <pa-search-form-item prop-name="userNumber" label="员工编号">
            <pa-input-s
              v-model="searchForm.userNumber"
              placeholder="员工编号"
            />
          </pa-search-form-item>
          <pa-search-form-item prop-name="userName" label="用户名称">
            <pa-input-s v-model="searchForm.userName" placeholder="用户名称" />
          </pa-search-form-item>
        </pa-search-form>
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
              <pa-button type="primary" @click="addNewRow"> 新增 </pa-button>
              <pa-button @click="deleteAll"> 删除 </pa-button>
            </template>
            <pa-table-column title="状态" width="160">
              <template #default="{ row }">
                {{ row.status == 1 ? "已启动" : "已禁用" }}
              </template>
            </pa-table-column>
            <pa-table-column title="操作" width="140">
              <template #default="{ row }">
                <pa-button type="text" @click="editRowData(row)"
                  >编辑</pa-button
                >
                <pa-button type="text" @click="deleteRow(row)">删除</pa-button>
              </template>
            </pa-table-column>
          </pa-table>
        </template>
      </template>
    </table-layout>
    <pa-drawer-s
      title="抽屉"
      :closable="true"
      direction="rtl"
      :with-popconfirm="false"
      :visible.sync="editConfig.visible"
      :confirm-loading="editConfig.confirmLoading"
      @ok="drawerClickOK"
      @cancel="editConfig.handleCancel"
    >
      <pa-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
        style="margin-top: 20px"
      >
        <pa-form-item label="用户账号">
          <pa-input-s v-model="ruleForm.userAccount" />
        </pa-form-item>
        <pa-form-item label="用户名称">
          <pa-input-s v-model="ruleForm.userName" />
        </pa-form-item>
        <pa-form-item label="员工编号">
          <pa-input-s v-model="ruleForm.userNumber" />
        </pa-form-item>
        <pa-form-item label="状态">
          <pa-switch
            v-model="ruleForm.status"
            active-color="#0066cc"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
            active-text="启用"
            inactive-text="禁用"
            textShowType="inner"
            style="width: 55px"
          />
          <!-- <pa-select-s
            v-model="searchForm.status"
            :options="searchForm.options"
          >
            <pa-option-s
              v-for="item in searchForm.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </pa-option-s>
          </pa-select-s> -->
        </pa-form-item>
      </pa-form>
    </pa-drawer-s>
    <pa-dialog-s
      title="提示"
      width="300px"
      :visible.sync="dialogVisible"
      @ok="suerDeleteRow"
    >
      <span>确认删除此项吗？</span>
    </pa-dialog-s>
  </div>
</template>
<script>
export default {
  name: "SearchList",
  data() {
    return {
      searchForm: {
        status: 0,
        options: [
          {
            value: 0,
            label: "全部",
          },
          {
            value: 1,
            label: "已启用",
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
          this.getData();
        },
        resetCallback: () => {
          this.$refs.searchForm.$refs.searchForm.resetFields();
          this.getData();
        },
      },
      editConfig: {
        editItem: null,
        visible: false,
        confirmLoading: false,
        handleOK: this.drawerClickOK,
        handleCancel() {},
      },
      dialogVisible: false,
      ruleForm: {
        userAccount: "",
        userName: "",
        userNumber: "",
        status: 1,
      },
      rules: {
        userAccount: [{ required: true, message: "不能为空", trigger: "blur" }],
        userName: [{ required: true, message: "不能为空", trigger: "blur" }],
        userNumber: [{ required: true, message: "不能为空", trigger: "blur" }],
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
    this.getData();
  },
  methods: {
    async deleteRowData(p = []) {
      await this.deleteData(p);
      this.$paMessage({
        type: "success",
        message: "删除成功",
        duration: 2000,
      });
      this.doQuery();
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
      this.getData();
    },
    addAll() {
      alert("哦豁，按钮点击了");
    },
    drawerClickOK() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let obj = {
            userAccount: this.ruleForm.userAccount,
            status: this.ruleForm.status,
            userNumber: this.ruleForm.userNumber,
            userName: this.ruleForm.userName,
          };

          if (this.editConfig.editItem) {
            Object.assign(this.editConfig.editItem, obj);
            obj = this.editConfig.editItem;
          }
          this.addData(obj);
          Object.assign(this.ruleForm, {
            userAccount: "",
            status: 1,
            userNumber: "",
            userName: "",
          });
          this.getData();
          this.$set(this.editConfig, "visible", false);
        } else {
          return false;
        }
      });
    },
    addNewRow() {
      this.editConfig.editItem = null;
      Object.assign(this.ruleForm, {
        userAccount: "",
        status: 1,
        userNumber: "",
        userName: "",
      });
      this.$set(this.editConfig, "visible", true);
    },
    editRowData(row) {
      this.editConfig.editItem = row;
      Object.assign(this.ruleForm, row);
      this.$set(this.editConfig, "visible", true);
    },
    deleteRow(row) {
      this.dialogVisible = true;
      this.editConfig.editItem = row;
    },
    suerDeleteRow() {
      const editItem = this.editConfig.editItem;
      this.deleteData(editItem);
      this.getData();
      this.dialogVisible = false;
    },
    //
    async getData() {
      this.loading = true;
      const data = await this.queryData();
      this.loading = false;
      this.tableData = data.rows || [];
      this.pager.total = data.total || 0;
    },
    getRowId() {
      return Math.random().toString(36).substr(3, 10);
    },
    updateStorageData(data) {
      sessionStorage.setItem("mockListData", JSON.stringify(data));
    },
    getStorageData() {
      let data = sessionStorage.getItem("mockListData") || "";
      if (!data) {
        data = {
          rows: [],
          filterRows: [],
        };
        this.updateStorageData(data);
        return data;
      }
      return JSON.parse(data);
    },
    addData(newData) {
      const data = this.getStorageData();
      if (newData._id) {
        data.rows.some((item) => {
          const flag = item._id === newData._id;
          if (flag) {
            Object.assign(item, newData);
          }
          return flag;
        });
      } else {
        const _id = this.getRowId();
        newData._id = _id;
        data.rows.unshift(newData);
      }
      this.updateStorageData(data);
    },
    queryData(params) {
      console.log("查询");
      return new Promise((resolve, reject) => {
        params = params || {
          userAccount: this.searchForm.userAccount,
          userName: this.searchForm.userName,
          userNumber: this.searchForm.userNumber,
          status: this.searchForm.status,
        };
        const data = this.getStorageData();
        let newData = [];
        data.rows.forEach((item) => {
          const flag = Object.keys(params).every((key) => {
            if (key === "status") {
              if (!params[key] || item[key] === params[key]) {
                return true;
              }
            } else if (!params[key] || item[key].includes(params[key])) {
              return true;
            }
            return false;
          });
          flag && newData.push(item);
        });
        data.filterRows = newData;
        const { currentPage, pageSize } = this.pager;
        const lastIndex = currentPage * pageSize;
        this.updateStorageData(data);
        setTimeout(() => {
          resolve({
            rows: newData.slice(lastIndex - pageSize, lastIndex),
            total: newData.length,
          });
        }, 1500);
      });
    },
    deleteData(rows) {
      if (!Array.isArray(rows)) {
        rows = [rows];
      }
      const data = this.getStorageData();
      const list = data.rows.filter((item) => {
        const flag = rows.some((rItem) => {
          return item._id == rItem._id;
        });
        return !flag;
      });
      data.rows = list;
      this.updateStorageData(data);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 600);
      });
    },
  },
};
</script>
