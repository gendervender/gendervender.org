const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
          sass: {
            prependData: `
              @import "@/styles/_mixins.scss";
              @import "@/styles/_variables.scss";
            `
          }
        }
    },
    publicPath: './',
    configureWebpack: {
      resolve: {
        alias: {
          // Relative path to your root dir (adjust accordingly)
          '@': path.resolve(__dirname, './src'),
    
          vue$: 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.js', '.vue', '.json'],
      }
    }
}