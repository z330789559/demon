import Taro, { Component } from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'
export default class  extends Component {

  render() {

    const{data}=this.props;
    const width='width:'+100 % data.length +'%';
    return  <View className='taro-tabbar__tabbar taro-tabbar__tabbar-bottom   taro-tabbar_fix footer-operator'>
      <View className='weui-tabbar taro-tabbar__border-black' style='background-color: rgb(255, 255, 255);'>
        {
          data.map(item=><AtButton  className='btn-ls' type='primary' size='normal' onClick={item.onClick}>
            {item.title}
            </AtButton>
          )
        }
      </View>
    </View>
  }

}
