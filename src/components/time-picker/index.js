import TimePicker from "./timePicker.vue";
import TimeSelect from "./timeSelect.vue";
// import RadioButton from "./radioButton.vue";
/* istanbul ignore next */
TimePicker.install = function (Vue) {
  Vue.component("PaTimePicker", TimePicker);
  Vue.component("PaTimeSelect", TimeSelect);
  //   Vue.component(RadioButton.name, RadioButton);
};

export default TimePicker;
