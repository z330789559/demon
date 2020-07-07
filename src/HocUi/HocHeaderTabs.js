import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './HocHeaderTabs.scss'
import {Tabs_Cate,Tabs_Cate_List} from '@constants/globalEnum'
import {Tab} from '@components'

  class MainHocHeaderTabs extends Component {

      handleClick=(data)=>{
        this.onChange(this.props.formSubCates)
      }
      onChange=(item)=>{
        this.props.onChangeCode(item)
      }
      render() {
        const {current} =this.props;
        console.log(current)
        return(<View>
          <Tab current={this.props.current}  list={this.props.formSubCates} onChange={this.onChange.bind(this)}> </Tab>
            {this.props.children}
        </View>)
      }
    }

export default MainHocHeaderTabs;
