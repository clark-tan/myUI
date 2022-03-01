<!--
*   Copyright (c) 2021,xxxx.
*   All rights reserved.
*
*   Author: wanlicheng
-->
<template>
  <div class="pa-datePicker-multi">
    <slot />
    <div
      ref="pa-datePicker-multi-range"
      class="pa-datePicker-multi-range"
      :style="{
        left: `${rangeLeft}px`,
      }"
    >
      {{ rangeSeparator }}
    </div>
  </div>
</template>
<script>
export default {
  name: "PaDatePickerMulti",
  props: {
    rangeSeparator: {
      type: String,
      default: "-",
    },
  },
  data() {
    return {
      rangeLeft: 0,
    };
  },
  created() {},
  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      this.$nextTick(() => {
        const childrens = this.$children.filter((c) => {
          const value = this.findPicker(c, "PaDatePicker");
          return value;
        });
        // eslint-disable-next-line no-console
        if (childrens.length !== this.$children.length) {
          throw new Error("只允许PaDatePicker或者表单嵌套组件作为slot");
        }
        const start = childrens[0].$el.offsetWidth;
        this.rangeLeft = start;
        let marginLeft = this.$refs["pa-datePicker-multi-range"].offsetWidth;
        marginLeft = marginLeft <= 40 ? 40 : marginLeft;
        childrens[1].$el.style.marginLeft = marginLeft + "px";
      });
    },

    findPicker(instance, name) {
      if (!(instance instanceof this.$root.__proto__.constructor)) {
        return;
      }
      if (instance.name === name) {
        return instance;
      }
      const { $slots } = instance;
      if ($slots.default) {
        if (Array.isArray($slots.default)) {
          let newInstance = null;
          for (const v of $slots.default) {
            try {
              if (v.componentInstance.name === name) {
                newInstance = v.componentInstance;
                break;
              } else if (
                v.componentInstance.$slots &&
                v.componentInstance.$slots.default
              ) {
                newInstance = this.findPicker(v.componentInstance, name);
                break;
              }
            } catch (e) {
              newInstance = null;
              break;
            }
          }
          return newInstance;
        } else {
          if ($slots.default.componentInstance.name === name) {
            return $slots.default.componentInstance;
          } else if (
            $slots.default.componentInstance.$slots &&
            $slots.default.componentInstance.$slots.default
          ) {
            return this.findPicker($slots.default.componentInstance, name);
          } else {
            return null;
          }
        }
      }
    },
  },
};
</script>
