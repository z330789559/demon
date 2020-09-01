const isH5 = process.env.CLIENT_ENV === 'h5'

const HOST = '"http://localhost:3721"'
const HOST_M = '""'

// XXX 搭了个 proxy 用于演示 prod 环境的 H5
const HOST_H5 = '"http://localhost:3721"'
const HOST_M_H5 = '"http://localhost:3721"'

module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    HOST: isH5 ? HOST_H5 : HOST,
    HOST_M: isH5 ? HOST_M_H5 : HOST_M
  },
  weapp: {},
  h5: {
    publicPath: '/demon'
  }
}
