import Taro, {Component} from "@tarojs/taro";

import {Image, View, Text, ScrollView} from "@tarojs/components";
import { connect } from '@tarojs/redux'
import './index.scss'
import { getWindowHeight } from '@utils/style'
import { dataToShow } from '@utils/tools'
import * as actions from '@actions/create'
import { AtTabs, AtTabsPane ,AtGrid} from 'taro-ui'
import { SENCE_CATALOGS } from '@constants/globalEnum'
@connect(state => state.create, { ...actions })
export default class SenceContent  extends Component {
  state={
    current:0,
    content:[]
  }

  handleClick=(value)=>{
    this.setState({
      current: value
    })
  }
  renderContent=()=>{
    return <AtGrid  hasBorder={false} columnNum={2} data={
  [
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      value: '领取中心'
    },
    {
      image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
      value: '找折扣'
    },
    {
      image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
      value: '领会员'
    },
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
      value: '新品首发'
    },
    {
      image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
      value: '领京豆'
    },
    {
      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
      value: '手机馆'
    }
  ]
} />
   }
  render() {
    return(<View>
      <AtTabs
        current={this.state.current}
        scroll
        height={getWindowHeight(true)}
        tabDirection='vertical'
        tabList={SENCE_CATALOGS}
        onClick={this.handleClick.bind(this)}>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
          {this.state.current==0?<View style='font-size:18px;text-align:center;height:200px;'>{this.renderContent()}</View>:null}
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
          {this.state.current==1?<View style='font-size:18px;text-align:center;height:200px;'>{this.renderContent()}</View>:null}
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
          {this.state.current==2?<View style='font-size:18px;text-align:center;height:200px;'>{this.renderContent()}</View>:null}
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
          {this.state.current==3?<View style='font-size:18px;text-align:center;height:200px;'>{this.renderContent()}</View>:null}
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
          {this.state.current==4?<View style='font-size:18px;text-align:center;height:200px;'>{this.renderContent()}</View>:null}
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
          {this.state.current==5?<View style='font-size:18px;text-align:center;height:200px;'>{this.renderContent()}</View>:null}
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
          {this.state.current==6?<View style='font-size:18px;text-align:center;height:200px;'>{this.renderContent()}</View>:null}
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
          {this.state.current==7?<View style='font-size:18px;text-align:center;height:200px;'>{this.renderContent()}</View>:null}
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
          {this.state.current==8?<View style='font-size:18px;text-align:center;height:200px;'>{this.renderContent()}</View>:null}
        </AtTabsPane>
      </AtTabs>
    </View>)
  }

}
