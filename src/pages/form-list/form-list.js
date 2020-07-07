import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { Loading, Tab } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/formList'
import { getWindowHeight } from '@utils/style'
import {HocHeaderTabs} from '@HocUi'
import {ItemList,IconList } from '@components'
import { dataToShow } from '@utils/tools'
import {formType } from'@constants/globalEnum'

import './form-list.scss'
@connect(state => state.formList, { ...actions })
export default class extends Component {
  state={
    current: 0,
    subCateId:'',
    loaded: false
  }
  config = {
    navigationBarTitleText: '表单'
  }
 componentDidMount() {
  const params= this.$router.params
   this.props.dispatchFormSubCate({})
   const _this=this;
    this.props.dispatchFormList(params).then((res)=>{

      _this.setState({
       loaded:true,
       subCateId: params.id,
       index: 0
     })
   })
 }
  renderRightPop=(item)=>{
    let type=formType[item.labCode]
    return <View className={`form-render-right-top form-render-right-top-${type}`}>
      {item.labName}
    </View>
  }
  changeCode=(params)=>{
    this.setState({
      loaded:false,
      subCateId: params.id
    })
    const _this=this;
    this.props.dispatchFormList(params).then(()=>{
      _this.setState({
        loaded:true,
      })
    })
  }
  onClickItem=(item)=>{
    Taro.navigateTo({
      url: `/pages/form-item/form-item?itemId=${item.id}&projectType=0`
    })
  }
  renderTips=(item)=>{
    return (<View className='at-row create-list-tip'>
      <View className='at-col'><IconList type='score' color={'#FF7A02'} text={item.score}/></View>
      <View className='at-col at-row__align--center at-row__justify--center'><IconList className='create-list-tip__visit' type='visit' color={'#999;'} text={dataToShow(item.visit)}/></View>
      <View className='at-col at-row__align--end at-row__justify--end' ><IconList  color={'#999;'} type={item.like>0?'like-active':'like'} text={dataToShow(item.like)}/></View>
    </View>)
  }
  getCurrent=(subCateId)=>{
    const {formSubCates} =this.props
    if(formSubCates && formSubCates.length >0){
     return formSubCates.findIndex((item)=>item.id==subCateId)
    }
    return this.state.current;
  }
 render() {

   return(<View>
    <HocHeaderTabs formSubCates={this.props.formSubCates} current={this.state.current===0?this.getCurrent(this.state.subCateId):this.state.current} onChangeCode={this.changeCode.bind(this)} >
      {!this.state.loaded?<Loading/>:<ItemList   onClick={this.onClickItem}  renderTips={this.renderTips} list={this.props.list}  renderRightPop={this.renderRightPop}/>}
    </HocHeaderTabs>
   </View>)
 }

}
