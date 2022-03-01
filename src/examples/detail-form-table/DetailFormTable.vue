<template>
  <detail-layout class="detail-form-table">
    <template v-slot:breadcrumb>
      <pa-breadcrumb :breadcrumbs.sync="$store.state.menu" />
    </template>
    <template v-slot:detail-content>
      <div
        class="detail-table-title"
        style="border-bottom: 1px solid #ddd; justify-content: flex-end"
      >
        <pa-button type="primary" @click="submitall">提交</pa-button>
      </div>
      <div class="detail-table-title">
        <div class="title">基本属性</div>
      </div>
      <pa-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        inline
        label-width="100px"
        class="demo-ruleForm"
      >
        <pa-form-item label="实体编码" prop="account">
          <pa-input v-model="ruleForm.account" placeholder="请输入实体编码" />
        </pa-form-item>
        <pa-form-item label="实体名称" prop="name">
          <pa-input v-model="ruleForm.name" placeholder="请输入实体名称" />
        </pa-form-item>
        <pa-form-item label="所属领域" prop="classify">
          <pa-select
            v-model="ruleForm.classify"
            placeholder="请选择领域"
            :options="ruleForm.classifyOptions"
          >
          </pa-select>
        </pa-form-item>
        <pa-form-item label="参考标准" prop="stand">
          <pa-select
            v-model="ruleForm.stand"
            placeholder="请选择参考标准"
            :options="ruleForm.standOptions"
          >
          </pa-select>
        </pa-form-item>
        <pa-form-item label="实体描述" prop="desc">
          <pa-input v-model="ruleForm.desc" type="textarea" />
        </pa-form-item>
      </pa-form>
      <div class="detail-table-title">
        <div class="title">属性信息</div>
      </div>
      <pa-form class="media-form" :model="tableForm" ref="tableForm">
        <pa-table
          class="table-oprator"
          ref="table"
          :data="tableForm.tableData"
          :columns="columns"
          @page-change="onPageChange"
        >
          <template #toolbar-right>
            <pa-button type="primary" @click="add"> 新增 </pa-button>
          </template>

          <pa-table-column title="属性编码" width="200">
            <template #default="{ row }">
              <pa-form-item
                :prop="`tableData.${row.index}.account`"
                :rules="[{ required: true, message: '必填', trigger: 'blur' }]"
              >
                <pa-input v-model="row.account"></pa-input>
              </pa-form-item>
            </template>
          </pa-table-column>
          <pa-table-column title="属性名称" width="200">
            <template #default="{ row }">
              <pa-form-item
                :prop="`tableData.${row.index}.name`"
                :rules="[{ required: true, message: '必填', trigger: 'blur' }]"
              >
                <pa-input v-model="row.name"></pa-input>
              </pa-form-item>
            </template>
          </pa-table-column>
          <pa-table-column title="长度" width="200">
            <template #default="{ row }">
              <pa-form-item
                :prop="`tableData.${row.index}.length`"
                :rules="[{ required: true, message: '必填', trigger: 'blur' }]"
              >
                <pa-input v-model="row.length"></pa-input>
              </pa-form-item>
            </template>
          </pa-table-column>
          <pa-table-column title="引用主数据">
            <template #default="{ row }">
              <pa-form-item
                :prop="`tableData.${row.index}.quote`"
                :rules="[{ required: true, message: '必填', trigger: 'blur' }]"
              >
                <pa-select
                  style="width: 100%"
                  v-model="row.quote"
                  placeholder="请选择参考标准"
                  :options="quoteOption"
                />
              </pa-form-item>
            </template>
          </pa-table-column>
          <pa-table-column title="操作">
            <template #default="{ row }">
              <pa-button type="text" @click="deleted(row)">删除</pa-button>
            </template>
          </pa-table-column>
        </pa-table>
      </pa-form>
    </template>
  </detail-layout>
</template>
<script>
export default {
  name: "DetailFormTable",
  data() {
    return {
      ruleForm: {
        name: "",
        account: "",
        classify: "",
        stand: "",
        desc: "",
        classifyOptions: [
          {
            label: "领域一",
            value: "1",
          },
          {
            label: "领域二",
            value: "2",
          },
        ],
        standOptions: [
          {
            label: "参考标准一",
            value: "1",
          },
          {
            label: "参考标准二",
            value: "2",
          },
        ],
      },
      rules: {
        name: [{ required: true, message: "请输入实体编码", trigger: "blur" }],
        account: [
          { required: true, message: "请输入实体名称", trigger: "blur" },
        ],
        classify: [
          { required: true, message: "请选择所属领域", trigger: "blur" },
        ],
        stand: [{ required: true, message: "请选择参考标准", trigger: "blur" }],
      },
      columns: [{ type: "seq", width: "38", align: "center" }],
      tableForm: {
        tableData: [
          {
            index: 0,
            account: "001",
            name: "name",
            length: "100",
            quote: "1",
          },
          {
            index: 1,
            account: "002",
            name: "name",
            length: "100",
            quote: "1",
          },
        ],
      },

      quoteOption: [
        {
          label: "主数据一",
          value: "1",
        },
        {
          label: "主数据二",
          value: "2",
        },
      ],
    };
  },
  methods: {
    submitall() {
      Promise.all([
        this.submitForm("ruleForm"),
        this.submitForm("tableForm"),
      ]).then((rs) => {
        if (rs.some((r) => !r)) {
          this.$paMessage({
            type: "error",
            message: "提交失败",
          });
        } else {
          this.$paMessage({
            type: "success",
            message: "提交成功",
          });
          this.resetForm("ruleForm");
          this.resetForm("tableForm");
        }
      });
    },
    submitForm(formName) {
      return new Promise((r) => {
        this.$refs[formName].validate((valid) => {
          r(valid);
        });
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    add() {
      this.tableForm.tableData.push({
        account: undefined,
        name: undefined,
        length: undefined,
        quote: undefined,
      });
      this.tableForm.tableData = this.tableForm.tableData.map((t, i) => {
        t.index = i;
        return t;
      });
    },
    onPageChange() {},
    deleted(row) {
      this.tableForm.tableData.splice(row.index, 1);
      this.tableForm.tableData = this.tableForm.tableData.map((t, i) => {
        t.index = i;
        return t;
      });
    },
  },
};
</script>
<style lang="scss">
.detail-form-table {
  .detail-table-title {
    height: 48px;
    display: flex;
    align-items: center;
    .title {
      height: 14px;
      line-height: 14px;
      padding-left: 12px;
      font-size: 14px;
      position: relative;
      &::after {
        width: 4px;
        position: absolute;
        height: 100%;
        content: "";
        top: 0;
        left: 0;
        background: #06c;
      }
    }
  }
  .table-oprator {
    .pa-select {
      width: 100%;
    }
  }

  @media screen and (max-width: 1650px) {
    .media-form {
      height: calc(100% - 274px);
    }
  }
  @media screen and (min-width: 1651px) {
    .media-form {
      height: calc(100% - 210px);
    }
  }

  form {
    .el-textarea__inner {
      margin-top: 4px;
    }
  }
  .media-form {
    .el-form-item {
      margin-bottom: 0;
    }
    .el-form-item__error {
      top: 82%;
    }
    .vxe-cell {
      overflow: visible !important;
    }
  }
}
</style>
