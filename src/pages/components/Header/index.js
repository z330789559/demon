import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import {AtInput,AtTextarea} from 'taro-ui'
const song=  import('@assets/video/youhebuke.mp3')
import {Audio} from '@components'

import './index.scss'
export default class extends Component {
constructor(props){
  super(props)
  this.refs=Taro.createRef();
  this.state={
    playState: false,
    title: props.header.title,
    description: props.header.description,
    imageUrl: props.header.imageUrl
  }
}

  render() {

    const {imageUrl, videoUrl,isCreate}=this.props.header;
    const {title,description}=this.state;

    return <View className='form-header'>
        <Image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583333761089&di=dfb31786b68da527407f40899203ce96&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1301%2F08%2Fc1%2F17228898_1357627460092.jpg"   className='form-header-image'/>
        <View>
          {/*<Audio*/}
          {/*controls ={false}*/}
          {/*autoplay={true}*/}
          {/*loop*/}
          {/*src={song}*/}
        {/*/>*/}
        </View>

      <View className='form-header-content'>
      <View
        className='form-header-title'><Text>
        <View className="at-input title" style="">
        {title}
        </View>
      </Text></View>
      <View className='form-header-desc'>
        <View  className="at-textarea at-textarea--WEB description" style="">
        {description}
        </View>
      </View>
      </View>
    </View>
  }

}
