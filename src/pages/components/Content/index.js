import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { AtButton,AtInput} from 'taro-ui'
import {PAGEKEY} from '@constants/globalEnum'
import {Radio ,Checkbox,Rate}from '@components'
import './index.scss'

export default class extends Component {
  downFile=(url)=>{
    Taro.downloadFile(url);
  }

    getCurrentComponent=(element)=>{
    switch (element.type) {
      case PAGEKEY.text:
        return(<View>{element.must?<Text  className='form-edit-required'>*</Text>:null}<Text className='form-edit-input'>{element.title}</Text>
          <AtInput
            name={element.id}
            title=''
            type='text'
            placeholder=''
            value=''
          /></View>)
      case PAGEKEY.radio:
        return <View>{element.must?<Text  className='form-edit-required'>*</Text>:null}<Text className='form-edit-input'>{element.title}</Text>
          <Radio
            name={element.id}
            selectList={element.selectList.map(item=> {
              return { label: item,
                value: item
              }
            })
            }
            value={element.value[0]}
          />
        </View>
      case PAGEKEY.checkbox:
        return <View>{element.must?<Text  className='form-edit-required'>*</Text>:null}<Text className='form-edit-input'>{element.title}</Text>
          <Checkbox
            name={element.id}
            selectList={element.selectList.map(item=> {
              return { label: item,
                value: item
              }
            })
            }
            value={element.value}
          />
        </View>
      case PAGEKEY.score:
        return <View>{element.must?<Text  className='form-edit-required'>*</Text>:null}<Text className='form-edit-input'>{element.title}</Text>
          <Rate
            value={element.value}
            leftText={element.leftText}
            rightText={element.rightText}
            max={element.rank}
          />
        </View>

      case PAGEKEY.download:

        return <View className='cm-preview-download' onClick={()=>this.downFile(element.url)}>{element.must?<Text  className='form-edit-required'>*</Text>:null}<Text className='form-edit-input'>{element.title}</Text>
        </View>
    }
  }

  render() {
    const {data} =this.props;

    return(<View className='form-body'>
        {
          data.map((item,index)=>{
            return <View className='form_item__wrap'>
                <View className='form_item__wrap_inner'>
                  {this.getCurrentComponent(item)}
                </View>
            </View>})
        }
    </View>)
  }

}
