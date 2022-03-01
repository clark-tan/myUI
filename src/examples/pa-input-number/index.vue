<template>
  <div>
    <pa-input-number
      v-model="value"
      :min="1"
      :max="10"
      label="描述文字"
      style="width: 150px"
    />
    <pa-input-number :value.sync="value" :precision="2" :step="0.1" :max="10" />
    <pa-input-number
      :value.sync="value"
      controls-position="right"
      :min="1"
      :max="10"
    />
    <p style="color: red">写法举例：跟官方文档一样</p>
    <pre>
      &lt;pa-input-number :value.sync="value" :min="1" :max="10" label="描述文字" style="width: 150px"&gt;
      &lt;/pa-input-number&gt;
      &lt;pa-input-number :value.sync="value" :precision="2" :step="0.1" :max="10"&gt;
      &lt;/pa-input-number&gt;
      &lt;pa-input-number :value.sync="value" controls-position="right" :min="1" :max="10"&gt;&lt;/pa-input-number&gt;
    </pre>
  </div>
</template>
<script>
export default {
  name: "PahmInputNumber",
  data() {
    return {
      value: 1,
    };
  },
  methods: {},
};
</script>
