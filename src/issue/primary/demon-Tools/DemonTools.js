
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import {getUUid} from '@utils/tools'



export default class extends  Component{
constructor(props){
  super(props)
}
  render() {
    return  <View  className={this.props.className} onClick={()=>this.props.addElement(this.props.element)}>
    <View className="taro-text-wrap" >
      <View
      className="taro-img weui-tabbar__icon" >
      <img className="taro-img__mode-scaletofill"
           src={this.props.element.icon}/>
    </View>
      <View className="taro-text weui-tabbar__label">{this.props.element.name}</View>
    </View>

  </View>
  }

}
