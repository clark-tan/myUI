export default {
  name: "PaTooltip",
  props: {
    content: String,
    effect: {
      type: String,
      default: "dark",
    },
    placement: {
      type: String,
      default: "bottom",
    },
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    offset: {
      type: Number,
      default: 0,
    },
    transition: {
      type: String,
      default: "el-fade-in-linear",
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    popperOptions: {
      type: Object,
      default() {
        return { boundariesElement: "body", gpuAcceleration: false };
      },
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    manual: {
      type: Boolean,
      default: false,
    },
    popperClass: {
      type: String,
      default: "",
    },
    enterable: {
      type: Boolean,
      default: true,
    },
    hideAfter: {
      type: Number,
      default: 0,
    },
    tabindex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  render() {
    return this.content || this.$slots.content ? (
      <el-tooltip
        props={this.$options.propsData}
        popperClass={`pa-tooltip ${this.$options.propsData.popperClass || ""}`}
      >
        <template slot="content">{this.$slots.content}</template>
        {this.$slots.default}
      </el-tooltip>
    ) : (
      this.$slots.default
    );
  },
};
