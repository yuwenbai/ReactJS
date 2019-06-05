const proxy = require('http-proxy-middleware')
    
module.exports = function(app) {
  // ...
  console.log(' proxy regist auto ')
    app.use(proxy("/api/del_user", {
    target: "http://192.168.50.22:8081",
    changeOrigin: true
  })),
  app.use(proxy("/list_user", {
    target: "http://192.168.50.22:8081",
    changeOrigin: true
  }))
}