// import PaTabPane from 'element-ui/packages/tabs/src/tab-pane.vue';
import PaTabPane from "./tab-pane.vue";

/* istanbul ignore next */
PaTabPane.install = function (Vue) {
  Vue.component("PaTabPane", PaTabPane);
};

export default PaTabPane;
