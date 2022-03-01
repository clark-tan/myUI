import Radio from "./radio.vue";
import RadioGroup from "./radioGroup.vue";
import RadioButton from "./radioButton.vue";
/* istanbul ignore next */
Radio.install = function (Vue) {
  Vue.component("PaRadio", Radio);
  Vue.component("PaRadioGroup", RadioGroup);
  Vue.component("PaRadioButton", RadioButton);
};

export default Radio;
