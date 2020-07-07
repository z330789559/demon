import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image, ScrollView, Swiper, SwiperItem} from '@tarojs/components'
import {Loading, Tab} from '@components'
import {connect} from '@tarojs/redux'
import * as actions from '@actions/opus'
import {getWindowHeight} from '@utils/style'
import './opus.scss'
import {AtList, AtListItem, AtTabs, AtTabsPane, AtLoadMore} from "taro-ui"
import OpusContent from '../main/sence-content'

@connect(state => state.opus, {...actions})
class Opus extends Component{
  state = {
    current: 0,
    loading: true
  }

  componentDidMount() {
    this.props.dispatchLoadPage().then(() => {
      this.setState({
        loading: false
      })
    });
  }

  handleClick = (index) => {
    this.setState({
      current: index,
      loading: true
    })
    this.props.onLoadList().then(() => {

      this.setState({
        loading: false
      })
    })
  }

  render() {
    const {header, opusList} = this.props
    console.log(opusList)
    return (
      <View className='opus'>
        <Swiper className='opus-slider'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay
        >
          {header.images ? header.images.map(img => <SwiperItem>
            <View className='slider-h'>
              <Image src={img} className='slider-img'/>
            </View>
          </SwiperItem>) : null}
        </Swiper>
        <AtListItem
          title={header.projectName}
          note={header.projectSubTitle}
          thumb={header.projectLogo}
        />

        <AtTabs
          animated={false}
          current={this.state.current}
          tabList={header.catalogs ? header.catalogs.map(ca => {
            return {title: ca.name + "(" + ca.count + ")"}
          }) : []}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            {this.state.loading? <AtLoadMore status={'loading'}/>:<View style='background-color: #FAFBFC;text-align: center;'><OpusContent  opusList={opusList}/></View>}
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1}>
            {this.state.loading? <AtLoadMore status={'loading'}/>: <View style='background-color: #FAFBFC;text-align: center;' ><OpusContent opusList={this.props.opusList}/></View>}
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={2}>
            {this.state.loading? <AtLoadMore status={'loading'}/>: <View style='background-color: #FAFBFC;text-align: center;' ><OpusContent opusList={this.props.opusList}/></View>}
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={3}>
            {this.state.loading? <AtLoadMore status={'loading'}/>: <View style='background-color: #FAFBFC;text-align: center;' ><OpusContent opusList={this.props.opusList}/></View>}
              </AtTabsPane>
              </AtTabs>


              </View>)
            }

            }
            export default Opus;
