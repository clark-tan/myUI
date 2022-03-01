import Icon from "./icon.vue";
import "./fonts/fonts";

Icon.install = (Vue) => {
  Vue.component(Icon.name, Icon);
};

export default Icon;
