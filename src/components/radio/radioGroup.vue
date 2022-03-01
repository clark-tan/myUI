<template>
  <el-radio-group class="pa-radio-group" v-bind="$attrs" v-on="$listeners">
    <template v-for="item in radioList">
      <pa-radio
        v-bind="item"
        :label="item[labelFiled]"
        :key="item[labelFiled]"
        >{{ item[textFiled] || item[labelFiled] }}</pa-radio
      >
    </template>
    <template v-for="item in buttonList">
      <pa-radio-button
        v-bind="item"
        :label="item[labelFiled]"
        :key="item[labelFiled]"
        >{{ item[textFiled] || item[labelFiled] }}</pa-radio-button
      >
    </template>
    <slot />
  </el-radio-group>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class PaRadioGroup extends Vue {
  @Prop({ default: () => [] }) groupList?: Array<any>;
  @Prop({ default: "label" }) labelFiled?: string;
  @Prop({ default: "text" }) textFiled?: string;
  @Prop({ default: "radio" }) groupType?: string;

  get radioList() {
    return this.groupType === "radio" ? this.groupList : [];
  }

  get buttonList() {
    return this.groupType === "button" ? this.groupList : [];
  }
}
</script>
