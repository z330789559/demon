import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { Loading, Tab,FooterTabBars } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/customerView'
import {sort} from '@utils/tools'
import {Header} from '../form-element/index'
import {ContentHocElement} from '@HocUi'
import {PAGESTATUS} from '@constants/globalEnum'
import {AtButton, AtForm, AtInput, AtModal, AtModalAction, AtModalContent, AtModalHeader, AtTag} from 'taro-ui'
import './customer-view.scss'
import '@issue/primary/index.scss'

@connect(state => state.customerView, { ...actions })
export default class extends Component{
  state={
    mode:'publish',
    code:"",
    cell:"",
    isOpened:false
  }
  config = {
    navigationBarTitleText: '',

  }
  // componentDidMount() {
  //   const params= this.$router.params
  //   if(params && params.itemId){
  //     this.props.dispatchFormItemLoad(params)
  //   }
  // }
  // onAddIssue=()=>{
  //   Taro.navigateTo({
  //     url:'/pages/issue-lib/issue-lib?projectType=1'
  //   })
  // }
  // onSort=()=>{
  //
  // }
  // onSetting=()=>{
  //
  // }
  // onPreView=()=>{
  //   Taro.navigateTo({
  //     url:'/pages/sence-preview/sence-preview'
  //   })

  // }
  // changeCurrentElement=(id)=>{
  //   Taro.navigateTo({
  //     url:`/pages/issue-lib/issue-lib?page=properties&id=${id}&projectType=1`
  //   })
  // }
  // changeHeader=(header)=>{
  //   this.props.dispatchChangeHeader(header);
  // }
//onSort,onSetting,onPreView

  // backModify=()=>{
  //   Taro.navigateBack();
  // }
  //
  // publish=()=>{
  //   this.setState({
  //     isOpened:true
  //   })
  // }
  onSubmit=()=>{
    console.log(this.state)
    setTimeout(()=>{

    },1000)
  }
  handleChange=(value,property)=>{
    this.setState({
      [value]:property
    })
  }
  render() {
    const {header,body,itemStyles,defineState,onDispatchPropsChange} =this.props
    const isPreview=PAGESTATUS.publish;
    const sortBody=sort(body,'order');
    return <View className='form'>
      <View className='form-frame'>
        <View className='form-frame-content'>
          <Header  header={header} mode={this.state.mode} isPreview={false}/>
          <View id='content'>
            {sortBody.map((item,index)=><ContentHocElement element={item} onDispatchPropsChange={onDispatchPropsChange} isPreview={isPreview} hideWrap itemStyles={itemStyles} defineState={defineState}/> )}
          </View>
        </View>

      </View>
    </View>
  }
}
