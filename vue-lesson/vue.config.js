module.exports = {
  devServer: {
    proxy: { // !!!代理没成功
      '/user': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/user': 'user.json'
        }
      },
      '/list': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/list': 'list.json'
        }
      }
    }
  }
}