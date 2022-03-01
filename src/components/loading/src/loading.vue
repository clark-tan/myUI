<template>
  <transition name="el-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="el-loading-mask"
      :style="{ backgroundColor: background || '' }"
      :class="[customClass, { 'is-fullscreen': fullscreen }]"
    >
      <div class="el-loading-spinner">
        <div v-if="!spinner" class="pa-spin" :class="sizeObj">
          <span class="pa-spin-dot pa-spin-dot-spin">
            <i class="pa-spin-dot-item" />
            <i class="pa-spin-dot-item" />
            <i class="pa-spin-dot-item" />
            <i class="pa-spin-dot-item" />
          </span>
        </div>
        <i v-else :class="spinner" />
        <p v-if="text" class="el-loading-text">
          {{ text }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: "",
      size: "",
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    sizeObj() {
      if (this.size) {
        if (this.size === "small") {
          return "pa-spin-small";
        }
        if (this.size === "large") {
          return "pa-spin-large";
        }
      }
    },
  },
  methods: {
    handleAfterLeave() {
      this.$emit("after-leave");
    },
    setText(text) {
      this.text = text;
    },
  },
};
</script>
<style scoped lang="scss">
.pa-spin {
  text-align: center;
  .pa-spin-dot-spin {
    transform: rotate(45deg);
    animation: paRotate 1.2s linear infinite;
  }
  .pa-spin-dot {
    position: relative;
    display: inline-block;
    font-size: 20px;
    width: 1em;
    height: 1em;
  }
  .pa-spin-dot-item {
    position: absolute;
    display: block;
    width: 9px;
    height: 9px;
    background-color: #1890ff;
    border-radius: 100%;
    transform: scale(0.75);
    transform-origin: 50% 50%;
    opacity: 0.3;
    animation: paSpinMove 1s linear infinite alternate;
    &:first-child {
      top: 0;
      left: 0;
    }
    &:nth-child(2) {
      top: 0;
      right: 0;
      animation-delay: 0.4s;
    }
    &:nth-child(3) {
      right: 0;
      bottom: 0;
      animation-delay: 0.8s;
    }
    &:nth-child(4) {
      bottom: 0;
      left: 0;
      animation-delay: 1.2s;
    }
  }
}
.pa-spin-large {
  .pa-spin-dot {
    font-size: 32px;
    i {
      width: 14px;
      height: 14px;
    }
  }
}
.pa-spin-small {
  .pa-spin-dot {
    font-size: 14px;
    i {
      width: 6px;
      height: 6px;
    }
  }
}
@keyframes paRotate {
  100% {
    transform: rotate(405deg);
  }
}
@keyframes paSpinMove {
  100% {
    opacity: 1;
  }
}
</style>
