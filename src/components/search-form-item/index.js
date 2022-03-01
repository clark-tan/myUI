/*
 * @Autor: clark tan
 * @Date: 2021-06-21 18:04:58
 * @LastEditors: clark tan
 * @LastEditTime: 2021-12-21 17:58:02
 * @Description:
 */
import SearchFormItem from "./search-form-item.vue";

SearchFormItem.install = function (Vue) {
  Vue.component(SearchFormItem.name, SearchFormItem);
};

export default SearchFormItem;
