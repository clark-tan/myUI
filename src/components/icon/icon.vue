<template>
  <svg
    :class="`pa-icon ${svgClass}`"
    aria-hidden="true"
    :style="svgStyle"
    @click="handleClick"
  >
    <use :xlink:href="`#${name}`" />
  </svg>
</template>
<script>
export default {
  name: "PaIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
    svgClass: {
      type: String,
      default: "",
    },
    svgStyle: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    handleClick() {
      this.$emit("click", this);
    },
  },
};
</script>
