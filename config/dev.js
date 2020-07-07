
const isH5 = process.env.CLIENT_ENV === 'h5'
const HOST = '"http://localhost:3721"'
const HOST_M = '"https://m.you.163.com"'
const APP_HOST ='/api-app'


module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST: isH5 ? '"http://localhost:3721"' : HOST,
    HOST_M: isH5 ? '"/api-m"' : HOST_M,
    APP_HOST: isH5 ? '"/api-app"' : APP_HOST
  },
  weapp: {},
  h5: {
    devServer: {
      proxy: {
        '/api/': {
          target: JSON.parse(HOST),
          changeOrigin: true
        },
        '/api-m/': {
          target: JSON.parse(HOST_M),
          pathRewrite: {
            '^/api-m/': '/'
          },
          changeOrigin: true
        },
        '/api-app/': {
          target: '',
          pathRewrite: {
            '^/api-app': '/'
          },
          changeOrigin: true
        }
      }
    }
  }
}
