import ErrorPage from "./error-page.vue";

ErrorPage.install = (Vue) => {
  Vue.component(ErrorPage.name, ErrorPage);
};

export default ErrorPage;
