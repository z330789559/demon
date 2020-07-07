import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCheckbox } from 'taro-ui'
export default class Index extends Taro.Component {
  constructor (props) {
    super(props)
    this.state = {
      checkedList: props.value
    }
    this.checkboxOption = props.selectList
  }
  handleChange (value) {
    this.setState({
      checkedList: value
    })
  }
  render () {
    return (
      <AtCheckbox
        options={this.checkboxOption}
        selectedList={this.state.checkedList}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}
