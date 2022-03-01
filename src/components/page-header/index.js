import PaHeader from "./page-header.vue";

/* istanbul ignore next */
PaHeader.install = function (Vue) {
  Vue.component(PaHeader.name, PaHeader);
};

export default PaHeader;
