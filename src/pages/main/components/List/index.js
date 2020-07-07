import Taro,{ Component } from '@tarojs/taro'

import {Image, Text, View} from '@tarojs/components'
import './index.scss'
import { dataToShow } from '@utils/tools'
import { Tag, IconList } from '@components'
class  List extends Component{
  handleClick=()=>{
    Taro.navigateTo({
      url:"/pages/create/sence-detail?id="+this.props.item.id
    })
  }
  render() {
    const {item} =this.props;
    return(<View className='opus-comp-item-list'  key={item.id} onClick={this.handleClick.bind(this, item)}>
        <View
      className='comp-item-list__item'
    >
      <Image className='comp-item-list__item-img' src={item.src} />
      <View className='comp-item-list__item-info'>

        {item.name?<Text className='comp-item-list__item-name' numberOfLines={1}>
          {item.name}
        </Text>:null}

        <View className='comp-item-list__item-price-wrap'>
          <Text><IconList type='score' color={'#FF7A02'} text={item.score} /></Text>
          <Text className='comp-item-list__item-catalog'>
            { item.catalogFont}
          </Text>
          {item.tags?item.tags.split(",").map(tag=><Text className='comp-item-list__item-tag'>{tag}</Text>):null}
        </View>
      </View>
    </View>
        <View className='comp-item-list__item-action'>
          <Text>点击:<Text className='colr'>{dataToShow(item.interest)}</Text></Text>
          <Text>兴趣:<Text className='colr'>{dataToShow(item.visit)}</Text></Text>
          <Text>附件:<Text className='colr'>{dataToShow(item.attach)}</Text></Text>
          <Text></Text>
        </View>
      </View>
      )
  }

}

export default List;
