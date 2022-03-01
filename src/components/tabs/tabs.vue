<template>
  <div>
    <el-tabs
      :class="['pa-tabs']"
      v-bind="$attrs"
      v-on="$listeners"
      @tab-click="tabClickHandler"
    >
      <template v-if="options.length">
        <el-tab-pane
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :name="item.value"
        >
          {{ item.value }}
        </el-tab-pane>
      </template>
      <slot v-else />
    </el-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabs, TabPane } from "element-ui";
Vue.use(Tabs);
Vue.use(TabPane);
export default {
  name: "PaTabs",
  components: {},
  // model: {
  //   prop: "vModel",
  //   event: "change",
  // },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // value: "",
    };
  },
  created() {
    // this.value = this.vModel;
  },
  mounted() {
    // console.warn("Tabs组件将在2.0版本后停止维护，请尽快切换至新组件TabsS!!!");
  },
  methods: {
    tabClickHandler(vNode) {
      const val = vNode.name;
      this.$emit("change", val);
    },
  },
};
</script>
