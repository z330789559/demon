import {Component} from "@tarojs/taro";
import Taro from "@tarojs/taro";
import {Image, View,Text} from "@tarojs/components";
import {images} from '@constants/globalEnum'
export default class SecondChannal  extends Component {
  static defaultProps = {
    list: []
  }

  handleClick = (item) => {
    Taro.navigateTo({
      url: `/pages/channal/channal?channalId=${item.id}`
    })
  }

  render() {
    const {list} = this.props
    return (
      <View className='at-row' style='background:rgba(244,245,247,1)'>
        {list.map(item => (
          <View
            key={item.id}
            className='at-col'
            style='line-height: 1.2; display: flex;flex-direction: column;align-items: center;margin: 14px 0;    padding: 14px 0px;
    margin: 16px;background: #fff;'
            onClick={this.handleClick.bind(this, item)}
          >
            <Image  style='width: 60%;background: #fff;    height: auto' src={images[item.code]}/>
            <View style='font-size:12px;margin-top: 8px;'>{item.name}</View>
          </View>
        ))}
      </View>
    )
  }
}
