import PaFormItem from "../form/src/form-item";

/* istanbul ignore next */
PaFormItem.install = function (Vue) {
  Vue.component(PaFormItem.name, PaFormItem);
};

export default PaFormItem;
