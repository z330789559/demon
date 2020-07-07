import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './HocHeaderTabs.scss'
import {Tabs_Cate,Tabs_Cate_List} from '@constants/globalEnum'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Content from "../pages/create/form-content";
import SenceContent from "../pages/create/sence-content";


  class FormHocHeaderTabs extends Component {

      handleClick=(data)=>{
        this.onChange(Tabs_Cate_List[data],data)
      }
      onChange=(item,data)=>{
        this.props.onChangeCode(item.code,data)
      }
      render() {
        const {current} =this.props;
        console.log(current)
        return(<View>
          <AtTabs
            current={current}
            scroll
            tabList={Tabs_Cate_List}
            onClick={this.handleClick.bind(this)}>
            <AtTabsPane current={current} index={0}>
              {current===0?<View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>:null}
            </AtTabsPane>
            <AtTabsPane current={current} index={1}>
              {current===1?<View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>:null}
            </AtTabsPane>
            <AtTabsPane current={current} index={2}>
              {current===2?<View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>:null}
            </AtTabsPane>
            <AtTabsPane current={current} index={3}>
              {current===3?<View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>:null}
            </AtTabsPane>
            <AtTabsPane current={current} index={4}>
              {current===4?<Content/>:null}
            </AtTabsPane>
            <AtTabsPane current={current} index={5}>
              {current===5?<View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>:null}
            </AtTabsPane>
            <AtTabsPane current={current} index={6}>
              {current===6?<SenceContent >标签页七的内容</SenceContent>:null}
            </AtTabsPane>
          </AtTabs>
        </View>)
      }
    }

export default FormHocHeaderTabs;
