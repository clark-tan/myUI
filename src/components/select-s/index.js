import Select from "./select.vue";
import Option from "./option.vue";
import OptionGroup from "./optionGroup.vue";
/* istanbul ignore next */
Select.install = function (Vue) {
  Vue.component("PaSelectS", Select);
  Vue.component("PaOptionS", Option);
  Vue.component("PaOptionGroupS", OptionGroup);
};

export default Select;
