import Tooltip from "./main";

Tooltip.install = (Vue) => {
  Vue.component(Tooltip.name, Tooltip);
};

export default Tooltip;
