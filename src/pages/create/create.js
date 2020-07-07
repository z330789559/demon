import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { Loading, Tab } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/create'
import { getWindowHeight } from '@utils/style'
import {FormHocHeaderTabs} from '@HocUi'

import './create.scss'
import {Tabs_Cate,Tabs_Cate_List} from '@constants/globalEnum'
@connect(state => state.create, { ...actions })
class Create extends Component {
  config = {
    navigationBarTitleText: '创建作品'
  }
  state={
    current: 4
  }

  componentDidMount() {
    this.changeCode({code:"form"},4)

  }

  changeCode=(code,current)=>{
    this.setState({
      current: current
    })
    this.props.dispatchLoadCate()
    this.props.dispatchLoadList()
  }
  render (){

    return (
      <View className='create'>
        <FormHocHeaderTabs onChangeCode={this.changeCode.bind(this)} current={this.state.current} />
      </View>)
  }
}

export default Create;
