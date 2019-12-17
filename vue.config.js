// vue.config.js
module.exports = {
    // options...
    publicPath: '/assigment-eurowings-imgur/dist/',
    css: {
        loaderOptions: {
          scss: {
            prependData: `
              @import "@/assets/scss/_variables.scss";
              @import "@/assets/scss/_mixins.scss";
            `
          }
        }
      }
}