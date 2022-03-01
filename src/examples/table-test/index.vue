<template>
  <div class="test-table">
    <!-- 默认效果 -->
    <div class="table-example">
      <p class="tip">默认效果</p>
      <pa-table :data="tableData0" :columns="columns0" padding>
        <template #toolbar-left>
          <pa-button>左边</pa-button>
        </template>
        <template #toolbar-right>
          <pa-button type="primary" @click="addAll"> 新增 </pa-button>
          <pa-button @click="deleteAll"> 删除 </pa-button>
        </template>
      </pa-table>
    </div>

    <!-- 纵向滚动条 -->
    <div class="table-example pa-table-layout">
      <p class="tip">纵向滚动条，组件已默认处理。</p>
      <pa-table
        :data="tableData1"
        :columns="columns1"
        :show-pager="false"
        :padding="false"
      />
    </div>

    <!-- 横向滚动条 -->
    <div class="table-example small-table">
      <p class="tip">横向滚动条，组件已默认处理。设置fixed: 'left'锁定列。</p>
      <pa-table
        :data="tableData2"
        :columns="columns2"
        :height="height"
        :show-pager="false"
      />
    </div>

    <!-- 单选表格 -->
    <div class="table-example">
      <p class="tip">单选表格，设置type: 'radio'。</p>
      <pa-table
        :data="tableData2"
        :columns="columns3"
        :radio-config="{ highlight: true }"
        :show-pager="false"
      />
    </div>

    <!-- 多选表格 -->
    <div class="table-example">
      <p class="tip">多选表格，设置type = 'checkbox'。</p>
      <pa-table :data="tableData2" :columns="columns4" />
    </div>

    <!-- 列和行选中高亮 -->
    <div class="table-example">
      <p class="tip">
        列和行选中高亮，通过设置 highlight-current-row、highlight-current-column
        参数实现。
      </p>
      <pa-table
        :data="tableData2"
        :columns="columns1"
        highlight-hover-row
        highlight-current-row
        highlight-hover-column
        highlight-current-column
        :show-pager="false"
      />
    </div>

    <!-- 合并行或列 -->
    <div class="table-example">
      <p class="tip">
        合并行或列，通过 merge-cells 临时合并，或者自定义 span-method 合并方法。
      </p>
      <pa-table
        :data="tableData2"
        :columns="columns1"
        :merge-cells="mergeCells"
        border
        :height="height"
        :show-pager="false"
      />
    </div>

    <!-- 分页 -->
    <div class="table-example">
      <p class="tip">分页</p>
      <pa-table
        :data="tableData3"
        :columns="columns1"
        :pagination="pager"
        :loading="loading"
        @page-change="onPageChange"
      >
        <template #toolbar-right>
          <pa-button @click="reset"> 重置 </pa-button>
        </template>
      </pa-table>
    </div>

    <!-- tooltip -->
    <div class="table-example" style="margin: 0 37% 0 50px">
      <p class="tip">
        当内容溢出时显示为省略号并用 tooltip 显示，组件已默认处理。
      </p>
      <pa-table
        :data="tableData4"
        :columns="columns5"
        show-footer
        :footer-method="footerMethod"
      />
    </div>

    <!-- 编辑表格 -->
    <div class="table-example">
      <p class="tip">编辑表格</p>
      <keep-alive>
        <pa-table
          ref="xTable"
          :data="tableData5"
          :loading="loading"
          :show-pager="false"
          keep-source
          :edit-config="{ trigger: 'manual', mode: 'row', autoClear: false }"
          :edit-rules="validRules"
        >
          <pa-table-column
            type="seq"
            width="38"
            fixed="left"
            align="center"
            class-name="pa-table-column-flex"
          />
          <pa-table-column
            field="name"
            title="Name"
            :edit-render="{ name: 'input', attrs: { type: 'text' } }"
          />
          <pa-table-column
            field="role"
            title="Role"
            :edit-render="{
              name: 'input',
              attrs: { type: 'text', placeholder: '请输入昵称' },
            }"
          />
          <pa-table-column
            field="sex"
            title="Sex"
            :edit-render="{ name: '$select', options: sexList }"
          />
          <pa-table-column
            field="sex2"
            title="多选下拉"
            :edit-render="{
              name: '$select',
              options: sexList,
              props: { multiple: true },
            }"
          />
          <pa-table-column
            field="num6"
            title="Number"
            :edit-render="{
              name: '$input',
              props: { type: 'number', placeholder: '请输入数值' },
            }"
          />
          <pa-table-column
            field="date12"
            title="Date"
            :edit-render="{ name: '$input', props: { type: 'date' } }"
          />
          <pa-table-column
            field="date13"
            title="Week"
            :edit-render="{
              name: '$input',
              props: { type: 'week', placeholder: '请选择日期' },
            }"
          />
          <pa-table-column
            field="address"
            title="Address"
            :edit-render="{ name: 'textarea' }"
          />
          <pa-table-column title="操作" width="160">
            <template #default="{ row }">
              <template v-if="$refs.xTable.isActiveByRow(row)">
                <pa-button type="text" @click="saveRowEvent(row)">
                  保存
                </pa-button>
                <pa-button type="text" @click="cancelRowEvent(row)">
                  取消
                </pa-button>
              </template>
              <template v-else>
                <pa-button type="text" @click="editRowEvent(row)">
                  编辑
                </pa-button>
                <pa-button type="text" @click="saveRowEvent(row, $event)">
                  保存
                </pa-button>
                <pa-button type="text" disabled @click="cancelRowEvent(row)">
                  取消
                </pa-button>
              </template>
            </template>
          </pa-table-column>
        </pa-table>
      </keep-alive>
    </div>

    <!-- 编辑表格-自定义表单校验 -->
    <div class="table-example">
      <p class="tip">编辑表格-自定义表单校验</p>
      <!-- <el-form :model="editForm" :rules="rules" ref="editForm" :inline="true">
        <el-form-item prop="name">
          <pa-input :value.sync="editForm.name" style="width: 150px" />
        </el-form-item>
        <el-form-item prop="role">
          <pa-input :value.sync="editForm.role" style="width: 150px" />
        </el-form-item>
      </el-form> -->
      <el-form ref="ruleForm" :model="editForm" :rules="rules" :inline="true">
        <pa-table
          ref="xTable1"
          :data="tableData5"
          :loading="loading"
          :show-pager="false"
          keep-source
          :edit-config="{ trigger: 'manual', mode: 'row', autoClear: false }"
        >
          <pa-table-column type="seq" width="38" fixed="left" align="center" />
          <pa-table-column
            field="name"
            title="Name"
            :edit-render="{ autofocus: '.vxe-input--inner' }"
          >
            <template #edit="{ row }">
              <el-form-item prop="name">
                <pa-input :value.sync="row.name" style="width: 150px" />
              </el-form-item>
            </template>
          </pa-table-column>
          <pa-table-column
            field="role"
            title="Role"
            :edit-render="{ autofocus: '.vxe-input--inner' }"
          >
            <template #edit="{ row }">
              <el-form
                ref="ruleForm"
                :model="row"
                :rules="rules"
                :inline="true"
              >
                <el-form-item prop="role">
                  <pa-input :value.sync="row.role" style="width: 150px" />
                </el-form-item>
              </el-form>
            </template>
          </pa-table-column>
          <pa-table-column
            field="sex"
            title="Sex"
            :edit-render="{ name: '$select', options: sexList }"
          />
          <pa-table-column
            field="sex2"
            title="多选下拉"
            :edit-render="{
              name: '$select',
              options: sexList,
              props: { multiple: true },
            }"
          />
          <pa-table-column
            field="num6"
            title="Number"
            :edit-render="{
              name: '$input',
              props: { type: 'number', placeholder: '请输入数值' },
            }"
          />
          <pa-table-column
            field="date12"
            title="Date"
            :edit-render="{ name: '$input', props: { type: 'date' } }"
          />
          <pa-table-column
            field="date13"
            title="Week"
            :edit-render="{
              name: '$input',
              props: { type: 'week', placeholder: '请选择日期' },
            }"
          />
          <pa-table-column
            field="address"
            title="Address"
            :edit-render="{ name: 'textarea' }"
          />
          <pa-table-column title="操作" width="160">
            <template #default="{ row }">
              <template v-if="$refs.xTable1.isActiveByRow(row)">
                <pa-button type="text" @click="saveRowEvent(row, 'xTable1')">
                  保存
                </pa-button>
                <pa-button
                  type="text"
                  @click="cancelRowEvent(row, 'xTable1', $event)"
                >
                  取消
                </pa-button>
              </template>
              <template v-else>
                <pa-button type="text" @click="editRowEvent(row, 'xTable1')">
                  编辑
                </pa-button>
              </template>
            </template>
          </pa-table-column>
        </pa-table>
      </el-form>
    </div>

    <!-- 树型表格 -->
    <div class="table-example">
      <p class="tip">树型表格</p>
      <pa-table
        ref="xTree"
        :tree-config="{ children: 'childs' }"
        :data="tableData6"
        :show-pager="false"
        @toggle-tree-expand="toggleExpandChangeEvent"
      >
        <template #toolbar-right>
          <pa-button @click="getTreeExpansionEvent"> 获取已展开 </pa-button>
          <pa-button @click="$refs.xTree.getInstance().setAllTreeExpand(true)">
            展开所有
          </pa-button>
          <pa-button @click="$refs.xTree.getInstance().clearTreeExpand()">
            关闭所有
          </pa-button>
        </template>
        <pa-table-column field="name" title="Name" tree-node />
        <pa-table-column field="size" title="Size" />
        <pa-table-column field="type" title="Type" />
        <pa-table-column field="date" title="Date" />
      </pa-table>
    </div>
  </div>
</template>

<script>
import {
  staticTableData0,
  staticTableData1,
  staticTableData2,
  staticTableData3,
  staticTableData4,
  staticTableData5,
  columns0,
  columns1,
  columns2,
  columns3,
  columns4,
  columns5,
} from "./test-data";

export default {
  name: "PahmTable",
  data() {
    const nameValid = ({ cellValue }) => {
      // 模拟服务端校验
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (cellValue && (cellValue.length < 3 || cellValue.length > 50)) {
            reject(new Error("名称长度在 3 到 50 个字符之间"));
          } else {
            resolve();
          }
        }, 100);
      });
    };
    const roleValid = ({ cellValue }) => {
      if (
        cellValue &&
        !["前端", "后端", "设计师", "项目经理", "测试"].includes(cellValue)
      ) {
        return new Error("角色输入不正确");
      }
    };
    const rolePaValid = (rule, value, callback) => {
      if (
        value &&
        !["前端", "后端", "设计师", "项目经理", "测试"].includes(value)
      ) {
        callback(new Error("角色输入不正确"));
      } else {
        callback();
      }
    };
    return {
      height: "300",
      loading: false,
      tableData0: staticTableData0,
      tableData1: staticTableData1,
      tableData2: staticTableData2,
      tableData3: [],
      tableData4: staticTableData3,
      tableData5: staticTableData4,
      tableData6: staticTableData5,
      columns0,
      columns1,
      columns2,
      columns3,
      columns4,
      columns5,
      mergeCells: [
        { row: 1, col: 1, rowspan: 3, colspan: 3 },
        { row: 5, col: 0, rowspan: 2, colspan: 2 },
      ],
      pager: {
        currentPage: 1,
        pageSize: 15,
        total: 0,
      },
      sexList: [
        { label: "", value: "" },
        { label: "男", value: "1" },
        { label: "女", value: "0" },
      ],
      validRules: {
        name: [
          { required: true, message: "名称必须填写" },
          { validator: nameValid },
        ],
        role: [{ validator: roleValid }],
        sex2: [
          { required: true, message: "性别必须填写" },
          { pattern: /^[0,1]{1}$/, message: "格式不正确" },
        ],
        age: [{ pattern: "^[0-9]{0,3}$", message: "格式不正确" }],
      },
      rules: {
        name: [
          { required: true, message: "名称必须填写", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        role: [
          { validator: rolePaValid, trigger: "blur" },
          { required: true, message: "角色必须填写", trigger: "blur" },
        ],
      },
      editForm: {
        name: "",
        role: "",
      },
    };
  },
  created() {
    this.search();
  },
  methods: {
    search() {
      const start = (this.pager.currentPage - 1) * this.pager.pageSize;
      const end = this.pager.currentPage * this.pager.pageSize;
      // 查询中
      this.loading = true;
      setTimeout(() => {
        this.tableData3 = this.tableData1.filter((item, index) => {
          return start <= index && index < end;
        });
        this.pager.total = this.tableData1.length;
        this.loading = false;
      }, 1000);
    },
    onPageChange({ currentPage, pageSize }) {
      this.pager.currentPage = currentPage;
      this.pager.pageSize = pageSize;
      this.search();
    },
    reset() {
      this.pager.currentPage = 1;
      this.pager.pageSize = 15;
      this.search();
    },
    footerMethod({ columns }) {
      const footerData = [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return "合计";
          }
          if (["date"].includes(column.property)) {
            return "说明 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
          }
          if (["rate"].includes(column.property)) {
            return "不想换行不想换行不想换行不想换行不想换行不想换行不想换行不想换行";
          }
          return null;
        }),
      ];
      return footerData;
    },
    editRowEvent(row, tableName) {
      this.editForm = row;
      const $table = tableName ? this.$refs[tableName] : this.$refs.xTable;
      $table.setActiveRow(row);
    },
    async saveRowEvent(row, tableName) {
      const $table = tableName ? this.$refs[tableName] : this.$refs.xTable;
      if (tableName) {
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            $table.clearActived().then(() => {
              this.loading = true;
              setTimeout(() => {
                this.loading = false;
                this.$paMessage({
                  type: "success",
                  message: "保存成功！",
                  duration: 2000,
                });
              }, 300);
            });
          } else {
            return false;
          }
        });
      } else {
        const errMap = await $table.validate(row).catch((errMap) => errMap);
        if (!errMap) {
          $table.clearActived().then(() => {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.$paMessage({
                type: "success",
                message: "保存成功！",
                duration: 2000,
              });
            }, 300);
          });
        }
      }
    },
    cancelRowEvent(row, tableName) {
      const $table = tableName ? this.$refs[tableName] : this.$refs.xTable;
      $table.clearActived().then(() => {
        // 还原行数据
        $table.revertData(row);
      });
    },
    addAll() {
      this.tableData0 = staticTableData0;
    },
    deleteAll() {
      this.tableData0 = [];
    },
    toggleExpandChangeEvent({ row, expanded }) {
      // eslint-disable-next-line no-console
      console.log("节点展开事件" + expanded, row);
    },
    getTreeExpansionEvent() {
      let treeExpandRecords = this.$refs.xTree
        .getInstance()
        .getTreeExpandRecords();
      this.$paConfirm({
        icon: "icon-jinggao", // pa-icon 的name
        title: treeExpandRecords.length,
        text: "",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.test-table {
  width: 100%;
  .table-example {
    padding-top: 10px;
    margin: 0 50px;
    height: 50vh;
    p.tip,
    p.warn {
      padding: 12px 24px 12px 30px;
      margin: 2em 0;
      background-color: #f8f8f8;
    }

    p.tip {
      border-left: 4px solid #409eff;
    }
  }
  .small-table {
    margin: 0 550px 0 50px;
  }
}
</style>
