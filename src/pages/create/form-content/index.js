import Taro, {Component} from "@tarojs/taro";

import {Image, View, Text, ScrollView} from "@tarojs/components";
import { connect } from '@tarojs/redux'
import './index.scss'
import { getWindowHeight } from '@utils/style'
import { dataToShow } from '@utils/tools'
import * as actions from '@actions/create'
import {ItemList,IconList } from '@components'

@connect(state => state.create, { ...actions })
export default class Content  extends Component {



  redirectToItems=(id)=>{
    Taro.navigateTo({
      url:'/pages/form-list/form-list?id='+id
    })
  }

  onClickItem=(item)=>{
    Taro.navigateTo({
      url: `/pages/form-item/form-item?itemId=${item.id}`
    })
  }


  renderTips=(item)=>{
    return (<View className='at-row create-list-tip'>
      <View className='at-col'><IconList type='score' color={'#FF7A02'} text={item.score}/></View>
      <View className='at-col at-row__align--center at-row__justify--center'><IconList className='create-list-tip__visit' type='visit' color={'#999;'} text={dataToShow(item.visit)}/></View>
      <View className='at-col at-row__align--end at-row__justify--end' ><IconList  color={'#999;'} type={item.like>0?'like-active':'like'} text={dataToShow(item.like)}/></View>
    </View>)
  }
  renderLab=(item)=>{

  }
  render() {
    const {subCates,recommends} =this.props;
    return (<ScrollView
        scrollY
        className='home__wrap'
        onScrollToLower={()=>this.props.dispatchLoadList()}
        style={{ height: getWindowHeight() }}
      >
        <View className='add-item'>
          <View className='add-item__inner'>
            <Text>+ 空白表单</Text>
          </View>

        </View>
      <View className='at-row at-row--wrap'>
        {subCates.map(item=> <View className='at-col at-col-6 create-content-card'>
          <View className='create-content-card__title' onClick={()=>this.redirectToItems(item.id)}>
            <View>{item.title}</View>
            <view className='create-content-card__resume'>{item.resume}</view>
          </View>
          <view><Image src={item.icon}   mode='aspectFill' className='create-content-card_image'></Image></view>
        </View>)}
      </View>
        <ItemList  onClick={this.onClickItem} listTitle='猜你喜欢' renderTips={this.renderTips} list={recommends} renderRightPop={this.renderLab}/>
      </ScrollView>
    )
  }

}
