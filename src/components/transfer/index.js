/*
 * @Autor: clark tan
 * @Date: 2021-12-21 17:51:36
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-14 10:42:03
 * @Description:
 */
import PaTransfer from "./transfer.vue";
import PaTransferLayout from "./transfer-layout.vue";
import PaTransferTree from "./transfer-tree.vue";
import PaTransferTable from "./transfer-table.vue";

PaTransfer.install = function (Vue) {
  Vue.component(PaTransfer.name, PaTransfer);
};
PaTransferLayout.install = function (Vue) {
  Vue.component(PaTransferLayout.name, PaTransferLayout);
};
PaTransferTree.install = function (Vue) {
  Vue.component(PaTransferTree.name, PaTransferTree);
};
PaTransferTable.install = function (Vue) {
  Vue.component(PaTransferTable.name, PaTransferTable);
};
export { PaTransfer, PaTransferLayout, PaTransferTree, PaTransferTable };
