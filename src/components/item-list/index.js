import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { Tag } from '@components'
import './index.scss'

export default class ItemList extends Component {
  static defaultProps = {
    list: []
  }

  handleClick = (item) => {
    this.props.onClick(item)
  }
  renderTips=(item)=>{
   return this.props.renderTips(item)
  }


  render () {
    const { list,renderRightPop } = this.props
    return (
      <View className='comp-item-list'>
        {this.props.listTitle? <View className='comp-item-list__title'>
          {this.props.listTitle}
        </View>:null}
        <View className='comp-item-list__wrap'>
          {list.map(item => (
            <View
              key={item.id}
              className='comp-item-list__item'
              onClick={this.handleClick.bind(this, item)}
            >
              <Image className='comp-item-list__item-img' src={item.src} />
              <View className='comp-item-list__item-info'>
                {!!item.limitedTag &&
                  <Tag text={item.limitedTag} />
                }
                {item.name?<Text className='comp-item-list__item-name' numberOfLines={1}>
                  {item.name}
                </Text>:null}
                <View className='comp-item-list__item-price-wrap'>
                  <Text className='comp-item-list__item-price'>
                    { item.activeName}
                  </Text>
                </View>
                {this.renderTips(item)}
                {this.props.renderRightPop?this.props.renderRightPop(item):null}
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
