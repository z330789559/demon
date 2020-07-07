import Taro,{ Component } from '@tarojs/taro'

import {View} from '@tarojs/components'
import './index.scss'
import {List}  from '../components'



class OpusContent extends Component{

  render() {
    const {opusList}=this.props
    return(
      <View className='opus-content'>
        {opusList.map(item=><List  item={item}/>)}
      </View>
    )
  }

}

export default OpusContent;
