import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView,Picker } from '@tarojs/components'
import {getUUid,deepClone} from '@utils/tools'
import {AtInput,AtSwitch,AtButton} from 'taro-ui'
import {FormHocElement} from '@HocUi'
import {sort} from '@utils/tools'
import PubSub from 'pubsub-js';
import {ContentHocElement} from '@HocUi'
import {ENVENT_TYPE } from'@constants/globalEnum'
export default class extends Component {
  constructor(props){
    super(props);
    this.state={
      element: props.element,
      childrens: props.element.childrens
    }
  }

  handleChange=(key,value)=>{
    let _element =deepClone(this.state.element)
    let $element={
      ..._element,
      [key]: value
    }
    this.setState({
      element: $element
    })
  }

  onSubmitChange=()=>{
    this.props.onChangeElement(this.state.element)
  }

  addCurrentElement(){
   const parentElement=this.state.element

  }
  onAddIssue=()=>{
    const parentElement=this.state.element
    this.
    Taro.navigateTo({
      url:'/pages/issue-lib/issue-lib'
    })
  }
  changeCurrentElement=(id)=>{
    Taro.navigateTo({
      url:'/pages/issue-lib/issue-lib?page=properties&id='+id
    })
  }
  addSubElement=()=>{
  const {element}=this.state;
    PubSub.publish(ENVENT_TYPE.MODEL_ADD_ELEMNT_START,{element});
    Taro.navigateTo({
      url:'/pages/issue-lib/issue-lib?page=main'
    })
  }
  render() {
    const element=this.state.element
   const  childrens=  this.state.childrens;
    const sortBody=sort(childrens,'order');
    return (
      <View style='background-color: #fff;'>
        <AtInput
          name='title'
          type='text'
          placeholder='填写模块名称'
          value={element.title}
          onChange={this.handleChange.bind(this,'title')}
        />

        <AtButton type='primary' onClick={this.addSubElement.bind(this)}>添加元素</AtButton>
        <View>
          <ContentHocElement element={element} changeCurrentElement={this.changeCurrentElement} />
        </View>

      </View>

    )
  }

}
