<template>
  <div style="padding-left: 30px">
    <div class="pahm-datePickers">
      <pa-date-picker
        v-model="propsData.value"
        format="yyyy-MM-dd"
        v-bind="propsData"
      />
    </div>

    <h2>添加默认选中的值，范围禁用</h2>
    <div class="pahm-datePickers">
      <pa-form :model="propsMultiData" :rules="rules" inline>
        <pa-date-picker-multi range-separator="至">
          <pa-form-item prop="valueStart">
            <pa-date-picker
              v-model="propsData.value"
              type="date"
              disabled
              format="yyyy-MM-dd"
              v-bind="propsData"
            />
          </pa-form-item>
          <pa-form-item prop="valueEnd">
            <pa-date-picker
              v-model="propsData.value"
              type="date"
              format="yyyy-MM-dd"
              v-bind="propsData"
            />
          </pa-form-item>
        </pa-date-picker-multi>
      </pa-form>
    </div>

    <h2>添加默认选中的值，范围禁用</h2>
    <div class="pahm-datePickers">
      <pa-form :model="propsMultiData" :rules="rules" inline>
        <pa-date-picker-multi range-separator="至">
          <pa-form-item prop="valueStart">
            <pa-date-picker
              v-model="propsMultiData.valueStart"
              type="datetime"
              :picker-options="propsMultiData.pickerOptionStart"
              @pa-picker="paPickerMultiStart"
            />
          </pa-form-item>
          <pa-form-item prop="valueEnd">
            <pa-date-picker
              v-model="propsMultiData.valueEnd"
              type="datetime"
              :picker-options="propsMultiData.pickerOptionEnd"
              @pa-picker="paPickerMultiEnd"
            />
          </pa-form-item>
        </pa-date-picker-multi>
      </pa-form>
    </div>

    <h2>无校验</h2>
    <div class="pahm-datePickers">
      <pa-date-picker-multi range-separator="至">
        <pa-date-picker
          v-model="propsMultiData.valueStart"
          type="datetime"
          :picker-options="propsMultiData.pickerOptionStart"
          @pa-picker="paPickerMultiStart"
        />
        <pa-date-picker
          v-model="propsMultiData.valueEnd"
          type="datetime"
          :picker-options="propsMultiData.pickerOptionEnd"
          @pa-picker="paPickerMultiEnd"
        />
      </pa-date-picker-multi>
    </div>
    <h2>使用方式</h2>
    <pre class="pahm-datePickers"> {{ html }} </pre>
    <div style="margin-top: 50px">
      <h2>Attributes</h2>
      <a-table
        :columns="columns"
        :data-source="dataSource"
        :pagination="false"
      />
    </div>
    <div style="margin-top: 50px">
      <h3>更加详细的文档请访问</h3>
      <div>https://element.eleme.cn/#/zh-CN/component/datetime-picker</div>
    </div>
  </div>
</template>
<script>
import { html, columns, dataSource } from "./html";
const rangeTime = (timer, range) => {
  const rangeDate = range.split("-");
  const start = rangeDate[0];
  const end = rangeDate[1];
  return (
    timer.getTime() < new Date(start).getTime() ||
    timer.getTime() > new Date(end).getTime()
  );
};
const formatDate = (time) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).substr(-2);
  const day = date.getDate();
  return `${year}.${month}.${day}`;
};
export default {
  name: "PahmDatePicker",
  data() {
    return {
      propsData: {
        value: "",
        type: "datetime",
      },
      propsMultiData: {
        valueStart: new Date().getTime(),
        pickerOptionStart: {
          disabledDate: (timer) => {
            const end =
              this.propsMultiData.valueEnd &&
              timer.getTime() >
                new Date(formatDate(this.propsMultiData.valueEnd)).getTime();
            return end || rangeTime(timer, "2021.06.01-2021.08.01");
          },
          shortcuts: [
            {
              text: "今天",
              onClick: (picker) => {
                const start = new Date(formatDate(new Date()));
                const end = new Date(start).getTime() + 8.64e7 - 1000;
                picker.$emit("pick", start);
                this.propsMultiData.valueEnd = end;
              },
            },
            {
              text: "最近一周",
              onClick: (picker) => {
                const date = new Date();
                const end = new Date(
                  date.getTime() + 3600 * 1000 * 24 * 7 - 1000
                );
                picker.$emit("pick", date);
                this.propsMultiData.valueEnd = end;
              },
            },
            {
              text: "最近一个月",
              onClick: (picker) => {
                const date = new Date();
                const end = new Date(
                  date.getTime() + 3600 * 1000 * 24 * 30 - 1000
                );
                picker.$emit("pick", date);
                this.propsMultiData.valueEnd = end;
              },
            },
          ],
        },
        pickerOptionEnd: {
          disabledDate: (timer) => {
            const start =
              this.propsMultiData.valueStart &&
              timer.getTime() <
                new Date(formatDate(this.propsMultiData.valueStart)).getTime();
            return start || rangeTime(timer, "2021.06.01-2021.08.01");
          },
        },
        valueEnd: new Date().getTime() + 8.64e7,
      },
      html,
      columns,
      dataSource,
      rules: {
        valueStart: [
          { required: true, message: "请输入开始时间", trigger: "change" },
        ],
        valueEnd: [
          { required: true, message: "请输入结束时间", trigger: "change" },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    paPickerMultiStart() {},
    paPickerMultiEnd() {},
  },
};
</script>
<style lang="less" scope>
.pahm-datePickers {
  padding: 20px;
  height: 32px;
}
</style>
