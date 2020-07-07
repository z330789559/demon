import Taro from '@tarojs/taro'
import { AtRate }  from 'taro-ui'
import { View, Image } from '@tarojs/components'
import './index.scss'
export default class Index extends Taro.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value|| props.max,
      max: !props.max?5:props.max,
      size: !props.size?25:props.size,
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  render () {
    return (
      <View className='rate'>
        <View className='at-row'>
          <View className='at-col at-col-6'><span className='label'>{this.props.leftText}</span></View>
          <View className='at-col at-col-6'><span className='label'>{this.props.rightText}</span></View>
        </View>
        <View className='at-row star'>
          <AtRate
            max={this.props.max}
            size={this.props.size}
            value={this.state.value}
            margin={40}
            onChange={this.handleChange.bind(this)}
          />
        </View>

      </View>
    )
  }
}
