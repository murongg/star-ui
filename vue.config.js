// vue.config.js

module.exports = {
  pages: {
    index: {
      title: 'Star UI',
      // page 的入口
      entry: "examples/main.ts",
      // 模板来源
      template: "examples/index.html",
      // 输出文件名
      filename: "index.html",
    }
  },
  outputDir: "document-dist/demo",
  publicPath: "/star-ui/demo/"
};