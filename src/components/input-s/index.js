import InputS from "./input.vue";
import Autocomplete from "./autocomplete.vue";
/* istanbul ignore next */
InputS.install = function (Vue) {
  Vue.component("PaInputS", InputS);
  Vue.component("PaAutocomplete", Autocomplete);
};

export default InputS;
