/*
 * @Autor: clark tan
 * @Date: 2021-12-21 14:43:02
 * @LastEditors: clark tan
 * @LastEditTime: 2022-03-02 10:12:13
 * @Description:
 */
const vueConfig = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/myUI/'
  : '/',
  // 在exports中添加，这里很关键，不配置不行
  transpileDependencies: ["element-ui"],
  configureWebpack: (config) => {
    console.log(process.env.NODE_ENV);
    // 配置不打包的模块
    config.externals =
      process.env.NODE_ENV === "production"
        ? {
            // vue: "vue",
            // "element-ui": "element-ui",
            // "vxe-table": "vxe-table",
          }
        : {};
  },
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.module
      .rule("raw-loade")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader");
  },
  productionSourceMap: false,
};

module.exports = vueConfig;
