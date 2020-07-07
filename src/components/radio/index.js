import { AtButton,AtInput ,AtRadio} from 'taro-ui'

export default class Index extends Taro.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  render () {
    return (
      <AtRadio
        name={this.props.name}
        options={this.props.selectList}
        value={this.state.value}
        onClick={this.handleChange.bind(this)}
      />
    )
  }
}
