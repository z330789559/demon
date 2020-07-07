import Taro, {Component} from "@tarojs/taro";

import {Image, View, Text, ScrollView} from "@tarojs/components";
import './index.scss'
import { getWindowHeight } from '@utils/style'
import SecondChannal from '../secondchannal'
import {ProductCard} from '@components'
import Chapters from '../chapters'
import { AtIcon } from 'taro-ui';
export default class Content  extends Component {

  renderRight=()=>{
    return <View>
      <span>换一批  <AtIcon value='reload' size='16' color='#245FFF'/></span>
      <span className='home__wrap-margin'>更多</span>
    </View>
  }


  render() {
    const {channals,recommends} =this.props;
    return (<ScrollView
      scrollY
      className='home__wrap'
      onScrollToLower={()=>this.props.loadRecommend()}
      style={{ height: getWindowHeight() }}
    >
        <SecondChannal list ={channals}/>
        <Chapters left={'表单精选'} right={this.renderRight}/>
        <View className='list-container'>
          {recommends.map((e, index) => (
            <ProductCard
              className='recommend'
              key={'key' + index}
              taroKey={index}
              title={e.name}
              src={e.src}
              ownerName={e.ownerName}
              logo={e.logo}
              like={e.like}
            ></ProductCard>
          ))}
        </View>
      </ScrollView>
    )
  }

}
