/*
 *   Copyright (c) 2020,xxxx.
 *   All rights reserved.
 *
 *   Author: wanlicheng
 */

export const change = function (...p) {
  this.$emit("change", ...p);
};

export const focus = function () {
  this.$emit("focus");
  this.$nextTick(() => {
    this.$refs["pa-datePicker"].picker.$on("pick", (...p) => {
      this.$emit("pa-picker", p);
    });
  });
};

export const input = function (...p) {
  this.$emit("input", ...p);
};

export const blur = function (...p) {
  this.$emit("blur", ...p);
};
