import Vue from "vue";
import VXETable from "vxe-table";
import "vxe-table/lib/index.css";
import Table from "./table.vue";
// import TableColumn from './table-column.vue';
import TableColumn from "./table-column.ts";

Vue.use(VXETable, {
  tooltipConfig: {
    zIndex: 3000,
  },
});

/* istanbul ignore next */
Table.install = function (Vue) {
  Vue.component("PaTable", Table);
  Vue.component(TableColumn.name, TableColumn);
};

export default Table;
