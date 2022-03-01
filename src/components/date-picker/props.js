/*
 *   Copyright (c) 2020,xxxx.
 *   All rights reserved.
 *
 *   Author: wanlicheng
 */
export const PROPS = {
  value: {
    type: [Date, Array, String, Number],
    default() {
      return null;
    },
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  editable: {
    type: Boolean,
    default: true,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: "",
  },

  startPlaceholder: {
    type: String,
    default: "",
  },
  endPlaceholder: {
    type: String,
    default: "",
  },
  timeArrowControl: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "date",
  },
  format: {
    type: String,
    default: "yyyy-MM-dd HH:mm:ss",
  },
  align: {
    type: String,
    default: "",
  },
  popperClass: {
    type: String,
    default: "",
  },
  pickerOptions: {
    type: Object,
    default() {
      return {};
    },
  },
  rangeSeparator: {
    type: String,
    default: "-",
  },
  defaultValue: {
    type: Date,
    default: null,
  },
  defaultTime: {
    type: [String, Array],
    default: "",
  },
  valueFormat: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "PaDatePicker",
  },
  unlinkPanels: {
    type: Boolean,
    default: false,
  },
  prefixIcon: {
    type: String,
    default: "el-icon-date",
  },
  clearIcon: {
    type: String,
    default: "el-icon-circle-close",
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
};
