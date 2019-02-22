// vue.config.js
module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    css: {
      loaderOptions: {
        // 给 sass-loader 传递选项
        sass: {
          // @/ 是 src/ 的别名
          // 所以这里假设你有 `src/variables.scss` 这个文件
          data: `@import "@/style/variables.scss";`
        }
      }
    }
  }