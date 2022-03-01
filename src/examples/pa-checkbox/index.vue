<template>
  <div>
    <pa-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    >
      全选
    </pa-checkbox>
    <pa-checkbox-group v-model="checkedList" @change="handleGroupChange">
      <pa-checkbox
        v-for="item in checkOptions"
        :key="item.value"
        :label="item.value"
      >
        {{ item.name }}
      </pa-checkbox>
    </pa-checkbox-group>
    <pa-checkbox v-model="checkAll" disabled> 禁用 </pa-checkbox>
  </div>
</template>
<script>
export default {
  name: "PahmCheckbox",
  data() {
    return {
      checkAll: false,
      isIndeterminate: true,
      checkedList: [1],
      checked: true,
      checkOptions: [
        {
          name: "a",
          value: 1,
        },
        {
          name: "b",
          value: 2,
        },
      ],
    };
  },
  methods: {
    handleCheckAllChange(val) {
      let allCode = [];
      this.checkOptions.map((item) => allCode.push(item.value));
      this.checkedList = val ? allCode : [];
      this.isIndeterminate = false;
    },
    handleGroupChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.checkOptions.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.checkOptions.length;
    },
  },
};
</script>
