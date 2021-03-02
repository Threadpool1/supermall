const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  //设置路径映射
  chainWebpack: config => {
    config.resolve.alias
        .set("@", resolve("src"))
        .set("assets", resolve("src/assets"))
        .set("components", resolve("src/components"))
        .set("views", resolve("src/views"))
        .set("network",resolve("src/network"))
        // .set("base", resolve("baseConfig"))
        // .set("public", resolve("public"));
  },
  //打包
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}
