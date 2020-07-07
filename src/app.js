import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Main from './pages/main/main'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/main/main',
      'pages/community/community',
      'pages/create/create',
      'pages/opus/opus',
      'pages/me/me',
      '/pages/form-item/form-item',
      'pages/form-list/form-list',
      '/pages/user-login/user-login',
      '/pages/issue-lib/issue-lib',
      '/pages/form-preview/form-preview',
      '/pages/create/sence-detail',
      '/pages/sence-preview/sence-preview',
      '/pages/customer-view/customer-view'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#333',
      navigationBarTitleText: '遇见',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "grey",
      selectedColor: "#b4282d",
      backgroundColor: "#fff",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/main/main",
        iconPath: "./assets/image/index.png",
        selectedIconPath: "./assets/image/index-active.png",
        text: "首页"
      },
        {
          pagePath: "pages/community/community",
          iconPath: "./assets/image/community.png",
          selectedIconPath: "./assets/image/community-active.png",
          text: "社区"
        },{
          pagePath: "pages/create/create",
          iconPath: "./assets/image/create.png",
          selectedIconPath: "./assets/image/create.png",
        }, {
          pagePath: "pages/opus/opus",
          iconPath: "./assets/image/opus.png",
          selectedIconPath: "./assets/image/opus-active.png",
          text: "作品"
        }, {
          pagePath: "pages/me/me",
          iconPath: "./assets/image/me.png",
          selectedIconPath: "./assets/image/me-active.png",
          text: "我的"
        }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
