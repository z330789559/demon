import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView,Picker } from '@tarojs/components'
import {getUUid,deepClone} from '@utils/tools'
import {AtInput,AtSwitch} from 'taro-ui'
import {FormHocElement} from '@HocUi'

export default class extends Component {
  constructor(props){
    super(props);
    this.state={
      element: props.element
    }
  }

  handleChange=(key,value)=>{
    let _element =deepClone(this.state.element)
    let $element={
      ..._element,
      [key]: value
    }
    this.setState({
      element: {
        ..._element,
        [key]: value
      }
    })
  }

  onSubmitChange=()=>{
    this.props.onChangeElement(this.state.element)
  }

  render() {
    const element=this.state.element
    return (
      <View style='background-color: #fff;'>
        <AtInput
          name='title'
          type='text'
          placeholder='填写标签名称'
          value={element.title}
          onChange={this.handleChange.bind(this,'title')}
        />

      </View>

    )
  }

}
