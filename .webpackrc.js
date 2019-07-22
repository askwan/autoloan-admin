const path = require('path');
export default {
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
  ],
  "publicPath":"/",
  alias:{
    '@':path.resolve(__dirname, "./src")
  },
  disableCSSModules:true,
  define:{
    "USE_COMMA":'wuhao'
  },
  env:{
    development:{
      "publicPath":"/",
    },
    production:{
      "publicPath":"./",
    }
  }
}