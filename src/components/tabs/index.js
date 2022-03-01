import PaTabs from "./tabs.vue";

/* istanbul ignore next */
PaTabs.install = function (Vue) {
  Vue.component(PaTabs.name, PaTabs);
};

export default PaTabs;
