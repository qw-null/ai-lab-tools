module.exports = {
  publicPath: "./",
  assetsDir: "static",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "大数据技术与认知智能实验室";
      return args;
    });
  },
  lintOnSave: false

};
