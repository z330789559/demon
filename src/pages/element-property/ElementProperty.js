import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import {PAGEKEY} from '@constants/globalEnum'
import {TextPropertySetting, RadioPropertySetting,CheckBoxPropertySetting,  RatePropertySetting,DownLoadPropertySetting,
  SectionPropertySetting,
  PtextPropertySetting,
  TagPropertySetting,
  ImagePropertySetting} from '@issue/primary'

import {ModalPropertySetting,ContainerPropertySetting} from '@issue/special'

import {FormHocElement} from '@HocUi'
const   CompoentsMap={
  [PAGEKEY.text]:TextPropertySetting,
  [PAGEKEY.radio]:RadioPropertySetting,
  [PAGEKEY.checkbox]:CheckBoxPropertySetting,
  [PAGEKEY.score]:RatePropertySetting,
  [PAGEKEY.download]:DownLoadPropertySetting,
  [PAGEKEY.section]:SectionPropertySetting,
  [PAGEKEY.image]:ImagePropertySetting,
  [PAGEKEY.ptext]:PtextPropertySetting,
  [PAGEKEY.tag]:TagPropertySetting,
  [PAGEKEY.modal]:ModalPropertySetting,
  [PAGEKEY.container]:ContainerPropertySetting,

}
export default  class ElementProperty extends Component {

constructor(props){
  super(props)

}
  getCurrentView=(element)=>{
  debugger;
  if(!CompoentsMap[element.type]){
    throw new Error("不存在的组件");
  }
    return <FormHocElement WrappedComponent={CompoentsMap[element.type]}   {...this.props} />

  }
render() {
  return <View style='min-height:100vh' className='element-property'>
    {this.getCurrentView(this.props.element)}
  </View>
}

}
