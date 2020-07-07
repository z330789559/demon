import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView,Picker } from '@tarojs/components'
import {getUUid,deepClone} from '@utils/tools'
import {AtInput,AtSwitch} from 'taro-ui'
import {FormHocElement} from '@HocUi'
import {Rate } from '@components'
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
  handleSelectChange=(key,e)=>{
    let _element =deepClone(this.props.element)
    if(e.detail.value===0){
      _element[key]=""
    }else{
      const _value=_element.limitOption[e.detail.value-1];
      _element[key]=_value['value']
    }
   this.setState({
     element: _element
   })
  }

  getCurrentKey=()=>{
  const _element= this.props.element;
    let index=_element.limitOption.findIndex(item=>item.value===_element.limit)
    if( index> -1){
      return _element.limitOption[index].key
    }else{
      return "不限制"
    }
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
      <Rate
        value={element.value}
        leftText={element.leftText}
        rightText={element.rightText}
        max={element.rank}
        />
        <View className='propertis-setting'>
          设置
        </View>
        <View>
          <AtSwitch title='是否必填' checked={element.must} onChange={this.handleChange.bind(this,"must")} />

          <AtInput
            name='correntValue'
            title='答案'
            type='text'
            placeholder='设置答案'
            value={element.correntValue}
            onChange={this.handleChange.bind(this,'correntValue')}
          />
          <AtInput
            name='score'
            title='分值'
            type='text'
            placeholder='设置分值'
            value={element.score}
            onChange={this.handleChange.bind(this,'score')}
          />

          <AtInput
            name='rank'
            title='分制'
            type='number'
            placeholder='设置分值'
            value={element.rank}
            onChange={this.handleChange.bind(this,'rank')}
          />
          <AtInput
            name='leftText'
            title='左侧提示文案'
            type='text'
            placeholder='设置文案'
            value={element.leftText}
            onChange={this.handleChange.bind(this,'leftText')}
          />
          <AtInput
            name='rightText'
            title='右侧提示文案'
            type='text'
            placeholder='设置文案'
            value={element.rightText}
            onChange={this.handleChange.bind(this,'rightText')}
          />
        </View>
      </View>

    )
  }

}
