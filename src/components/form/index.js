import PaForm from "./src/form";

/* istanbul ignore next */
PaForm.install = function (Vue) {
  Vue.component(PaForm.name, PaForm);
};

export default PaForm;
