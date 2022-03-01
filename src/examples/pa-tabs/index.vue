<template>
  <div class="page-header">
    <h2>options用法</h2>
    <pa-tabs v-model="value" :options="options" @change="handler" />
    <h2>slot用法</h2>
    <pa-tabs v-model="value" @change="handler">
      <pa-tab-pane
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :name="item.value"
      >
        {{ item.label }}
      </pa-tab-pane>
    </pa-tabs>
    <pa-tabs v-model="value" padding @change="handler">
      <pa-tab-pane
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :name="item.value"
      >
        {{ item.label }}
      </pa-tab-pane>
    </pa-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "value1",
      options: [
        {
          label: "tab1",
          value: "value1",
        },
        {
          label: "tab2",
          value: "value2",
        },
        {
          label: "tab3tab3tab3tab3",
          value: "value3",
        },
      ],
    };
  },
  methods: {
    handler(value) {
      window.console.log(value, this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  height: 100%;
  .header-content {
    padding: 0 24px;
    line-height: 48px;
  }
}
</style>
