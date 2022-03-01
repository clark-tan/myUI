<template>
  <div :class="`pa-errorPage ${src}-custom`">
    <div class="pa-errorPage-content">
      <div
        :class="`pa-errorPage-img ${src}`"
        :style="{
          ...style,
          ...imgStyle,
        }"
      />
      <div class="pa-errorPage-msg" :style="msgStyle">
        {{ msg }}
      </div>
      <div v-if="footerShow" class="pa-errorPage-foot-static">
        <pa-button @click="$router.back(-1)">返回上一页</pa-button>
        <pa-button type="primary" @click="goToIndexPage">返回首页</pa-button>
      </div>
      <div v-if="$slots.foot" class="pa-errorPage-foot">
        <slot name="foot" />
      </div>
    </div>
  </div>
</template>
<script>
import imgCfg from "./img-cfg";
export default {
  name: "PaErrorPage",
  props: {
    type: {
      type: String,
      default: "404",
    },
    message: {
      type: String,
      default: "",
    },
    imgStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    msgStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    footerShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      src: "",
      msgList: imgCfg,
      msg: "",
      style: {},
      imgConfig: {},
    };
  },
  watch: {
    type() {
      this.init();
    },
    message() {
      this.init();
    },
  },
  mounted() {
    this.init();
    window.addEventListener("resize", () => {
      this.resize();
    });
  },
  methods: {
    init() {
      let type = this.type;
      let imgConfig = this.msgList[type];
      if (!imgConfig) {
        imgConfig = this.msgList["200"];
      }
      this.src = imgConfig.src;
      this.msg = this.message ? this.message : imgConfig.msg;
      this.imgConfig = Object.assign(this.imgConfig, imgConfig);
      this.resize();
    },
    resize() {
      const offsetWidth = this.$el.offsetWidth;
      const { img, ui } = this.imgConfig;
      this.style = {
        width: offsetWidth * (img[0] / ui) + "px",
        height: offsetWidth * (img[1] / ui) + "px",
      };
    },
    goToIndexPage() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>
