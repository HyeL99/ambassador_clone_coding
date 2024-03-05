const path = require("path");
// eslint-disable-next-line no-unused-vars
const webpack = require("webpack");

module.exports = {
  chainWebpack: (config) => {
    // Add "node_modules" alias
    config.resolve.alias.set(
      "node_modules",
      path.join(__dirname, "./node_modules")
    );
    // Do not remove whitespaces
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      });
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/_variables.scss";
          @import "@/assets/style/_reset.scss";
          @import "@/assets/style/_common.scss";
        `,
      },
    },
  },
  // configureWebpack: {
  //   plugins: [
  //     new webpack.DefinePlugin({
  //       "process.env.VUE_APP_GOOGLE_KEY": JSON.stringify(process.env.VUE_APP_GOOGLE_KEY),
  //     }),
  //   ],
  // },
};
