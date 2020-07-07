import Taro, { Component } from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import classNames from 'classnames'


export default class  extends Component {

  render() {

    const{data,className,onAddIssue,onSort,onSetting,onPreView}=this.props;
    return  <View className='taro-tabbar__tabbar taro-tabbar__tabbar-bottom   taro-tabbar_fix '>
      <View className='weui-tabbar taro-tabbar__border-black' style='background-color: rgb(255, 255, 255);'>
        <View
          href='javascript:;' className={className} onClick={onAddIssue}><Text
          style='display: inline-block; position: relative;'>
          <Image  src={data[0].src}
                  alt='' className='weui-tabbar__icon'/></Text><Text className='weui-tabbar__label'>{data[0].title}</Text>
        </View>
        <View
          href='javascript:;' className={className} onClick={onSort}><Text
          style='display: inline-block; position: relative;'>
          <Image  src={data[1].src}
                  alt='' className='weui-tabbar__icon'/></Text><Text className='weui-tabbar__label'>{data[1].title}</Text>
        </View>
        <View
          href='javascript:;' className={className}  onClick={onSetting}><Text
          style='display: inline-block; position: relative;'>
          <Image  src={data[2].src}
                  alt='' className='weui-tabbar__icon'/></Text><Text className='weui-tabbar__label'>{data[2].title}</Text>
        </View>
        <View
          href='javascript:;' className={className} onClick={onPreView}><Text
          style='display: inline-block; position: relative;'>
          <Image  src={data[3].src}
                  alt='' className='weui-tabbar__icon'/></Text><Text className='weui-tabbar__label'>{data[3].title}</Text>
        </View>
      </View>
    </View>
  }

}
