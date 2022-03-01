import Dropdown from "./dropdown.vue";
import DropdownItem from "./dropdownItem.vue";
import DropdownMenu from "./dropdownMenu.vue";
/* istanbul ignore next */
Dropdown.install = function (Vue) {
  Vue.component("PaDropdown", Dropdown);
  Vue.component("PaDropdownItem", DropdownItem);
  Vue.component("PaDropdownMenu", DropdownMenu);
};

export default Dropdown;
