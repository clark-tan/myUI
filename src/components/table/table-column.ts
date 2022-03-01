import { Column } from "vxe-table";

export default {
  name: "PaTableColumn",
  extends: Column,
  props: {
    // 当内容过长时显示为省略号
    showOverflow: {
      type: Boolean,
      default: true,
    },
    // 当表头内容过长时显示为省略号
    showHeaderOverflow: {
      type: Boolean,
      default: true,
    },
    showFooterOverflow: {
      type: Boolean,
      default: true,
    },
    className: {
      type: String,
      default: "pa-table-column-default",
    },
  },
};
