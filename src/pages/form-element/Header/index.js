import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import {AtInput,AtTextarea} from 'taro-ui'
import {Audio} from '@components'
import './index.scss'

const song=  import('@assets/video/youhebuke.mp3')
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

  handleChange=(text,key)=>{
  const {header} =this.props;

  this.setState({
    [key]:text
  })

    this.props.changeHeader({
      ...header,
      [key]: text
    })
}
  handleTextAreaChange=(e,key)=>{
    const {header} =this.props;
  const text=e.target.value;
    this.setState({
      [key]:text
    })

    this.props.changeHeader({
      ...header,
      [key]: text
    })
  }
  uploadPic=(file)=>{
  console.log(file)
  }
  uploadPicOver=(res)=>{

  }
  uploadFail=(res)=>{

  }
  changeCover=()=>{
    Taro.chooseImage({count:1,
      success:this.uploadPic.bind(this),
      complete: this.uploadPicOver.bind(this),
      fail: this.uploadFail.bind(this)
    }).then((res)=>{
      console.log('res',res)
    })
  }
  render() {
  const {isPreview}=this.props;
    const {showTitle, showDes}=this.props.header;
    const {title,description}=this.state;

    return <View className='form-header'>
        <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583333761089&di=dfb31786b68da527407f40899203ce96&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1301%2F08%2Fc1%2F17228898_1357627460092.jpg'   className='form-header-image' />
      {!isPreview?<View className='form-header-edit-cover'onClick={this.changeCover.bind(this)}>更换封面</View>:''}
        <View>
          {/*<Audio*/}
            {/*controls ={false}*/}
            {/*autoplay={true}*/}
            {/*loop*/}
            {/*src={song}*/}
          {/*/>*/}
        </View>
      {!showTitle&&!showDes?'':<View className='form-header-content'>
        {showTitle?<View
          className='form-header-title'
        ><Text>
          <AtInput
            className='title'
            name='title'
            type='text'
            placeholder='问卷标题'
            value={title}
            onChange={(e)=>this.handleChange(e,'title')}
          />
        </Text></View>:''}
        {showDes?<View className='form-header-desc'>
          <AtTextarea
            className='description'
            value={description}
            onChange={(e)=>this.handleTextAreaChange(e,'description')}
            maxLength={100}
            placeholder='问卷描述不超过100个字.'
          />
        </View>:''}
      </View>}

    </View>
  }

}
