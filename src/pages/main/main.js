import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { Loading, Tab } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/main'
import { getWindowHeight } from '@utils/style'
import {MainHocHeaderTabs} from '@HocUi'

import {Tabs_Cate,Tabs_Cate_List} from '@constants/globalEnum'
import Search from './search'
@connect(state => state.main, { ...actions })
class Main extends Component {
  config = {
    navigationBarTitleText: '遇见'
  }
  state={
    current: 4
  }

  componentDidMount() {
    this.changeCode("FORM",4)

  }

  changeCode=(code,current)=>{

    this.setState({
      current: current
    })
    switch (code) {
      case Tabs_Cate.FORM:
        debugger
        this.props.dispatchLoadPage({code});
        break;
      case  Tabs_Cate.SCENE:
        this.props.dispatchLoadScenePage({code});
        break;
    }

  }
  render (){

    return (
    <View className='home'>
      <View className='home__search'>
        <View className='home__search__middle'>
         <Search/>
        </View>
      </View>
    <MainHocHeaderTabs
      onChangeCode={this.changeCode.bind(this)}
      current={this.state.current}
      channals={this.props.channals}
      recommends={this.props.recommends}
      loadRecommend={this.props.loadRecommend}
      opusList={this.props.opusList}
    />
    </View>)
  }
}

export default Main;
