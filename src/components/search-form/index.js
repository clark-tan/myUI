import SearchForm from "./search-form.vue";

SearchForm.install = function (Vue) {
  Vue.component(SearchForm.name, SearchForm);
};

export default SearchForm;
