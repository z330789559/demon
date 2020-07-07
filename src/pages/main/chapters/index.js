import Taro, {Component} from "@tarojs/taro";

import {Image, View, Text} from "@tarojs/components";

import './index.scss'
export default class Chapters extends Component{
  render() {
    const{ left,right }=this.props;
    return <View className='chapter'>
        <View className='chapter-left'>{left}</View>
        <View className='chapter-right'>{typeof right ==='function'?right():right}</View>
    </View>
  }

}
