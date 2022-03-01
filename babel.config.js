/*
 * @Autor: clark tan
 * @Date: 2021-12-21 13:46:42
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-05 16:16:49
 * @Description:
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        style: false,
      },
    ],
  ],
};
