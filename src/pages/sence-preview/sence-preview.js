import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { Loading, Tab,FooterTabBars } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/formItem'
import {sort} from '@utils/tools'
import {Header} from '../form-element/index'
import {ContentHocElement} from '@HocUi'
import {PAGESTATUS} from '@constants/globalEnum'
import {AtButton, AtForm, AtInput, AtModal, AtModalAction, AtModalContent, AtModalHeader, AtTag} from 'taro-ui'
import './index.scss'
import '@issue/primary/index.scss'

@connect(state => state.formItem, { ...actions })
export default class extends Component{
  state={
    mode:'preview',
    code:"",
    cell:"",
    isOpened:false
  }
  config = {
    navigationBarTitleText: '预览场景',

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

  backModify=()=>{
    Taro.navigateBack();
  }

  publish=()=>{
    this.setState({
      isOpened:true
    })
  }
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
    const {header,body,itemStyles,defineState} =this.props
    const isPreview=PAGESTATUS.isPreview;
    const sortBody=sort(body,'order');
    return <View className='form'>
      <View className='form-frame'>
        <View className='form-frame-content'>
          <Header  header={header} mode={this.state.mode} isPreview/>
          <View>
            {sortBody.map((item,index)=><ContentHocElement element={item} changeCurrentElement={this.changeCurrentElement} isPreview={isPreview} hideWrap itemStyles={itemStyles} defineState={defineState}/> )}
          </View>
        </View>
        <View className='at-row ftn-op'>
          <View className='at-col'><AtButton type='primary' size='normal' className='ftn-btn ftn-btn-left' onClick={this.backModify.bind(this)}>返回修改</AtButton></View>
          <View className='at-col'><AtButton type='primary' size='normal' className='ftn-btn  ftn-btn-right' onClick={this.publish.bind(this)}>去发布</AtButton></View>
        </View>
      </View>
      <AtModal  isOpened={this.state.isOpened} className={'publish-modal'} >
        <AtForm   className='publish-form'>
          <AtModalHeader className={'publish-modal-tittle'}>根据网信办规定,发布问卷需绑定手机</AtModalHeader>

          <AtModalContent className='publish-modal-content'>
            <AtInput
              clear
              name='cell'
              border={false}
              type='phone'
              placeholder='手机号码'
              value={this.state.cell}
              onChange={this.handleChange.bind(this,'cell')}
            />
            <AtInput
              clear
              name="code"
              type='text'
              maxLength='6'
              placeholder='验证码'
              value={this.state.code}
              onChange={this.handleChange.bind(this,'code')}
            >
              <AtTag type='primary' >验证码</AtTag>
            </AtInput>
          </AtModalContent>
          <AtModalAction className='publish-modal-bottom'> <AtButton className='publish-modal-confirm'>取消</AtButton> <AtButton className="publish-modal-confirm" onClick={this.onSubmit.bind(this)}>确定</AtButton> </AtModalAction>
        </AtForm>
      </AtModal>
    </View>
  }
}
