import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView,Picker } from '@tarojs/components'
import {getUUid,deepClone} from '@utils/tools'
import {AtInput,AtSwitch,AtButton} from 'taro-ui'
import {FormHocElement} from '@HocUi'
import deleteItem from '@assets/image/deleteIem.png'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state={
      element: {
        ...props.element,
        selectList: !props.element.selectList || props.element.selectList.length===0?['']:props.element.selectList
      },
    }
  }


  handleChange=(key,value)=>{
    let _element =deepClone(this.state.element)
    let $element={
    ..._element,
      [key]: value
    }
    this.setState({
      element: {
        ..._element,
        [key]: value
      }
    })
   }

  handleSelectChange=(key,e)=>{
    let _element =deepClone(this.state.element)
    if(e.detail.value===0){
      _element[key]=""
    }else{
      const _value=_element.limitOption[e.detail.value-1];
      _element[key]=_value['value']
    }
  }

  getCurrentKey=()=>{
  const _element= this.state.element;
    let index=_element.limitOption.findIndex(item=>item.value===_element.limit)
    if( index> -1){
      return _element.limitOption[index].key
    }else{
      return "不限制"
    }
  }
  onSubmitChange=()=>{
    this.props.onChangeElement(this.state.element)
  }
  deleteCurrentItem=(item)=>{
    const element=this.state.element;
   const _index= element.selectList.indexOf(item)
    const newElement={
        ...element,
        selectList: [...element.selectList.slice(0,_index),...element.selectList.slice(_index+1,element.selectList.length)],
    }
    this.setState({
      element:newElement
    })

  }
  addSelectList=()=>{
    const element=this.state.element;
    this.setState({
      element:{
        ...element,
        selectList: [...element.selectList,'']
      }
    })
  }
  addValue=(e,index)=>{
    const element=this.state.element;
    this.setState({
      element:{
        ...element,
        selectList: [...element.selectList.slice(0,index),e,...element.selectList.slice(index+1,element.selectList.length)],
      }
    })
  }
  getSelectItem=(item,index)=>{
   return <AtInput
     clear
     type='text'
     placeholder='点击添加选项'
     value={item}
     onChange={(e)=>this.addValue(e,index)}
     name='selectList'
   >
     <Image className='property-del' src={deleteItem} onClick={(event)=>this.deleteCurrentItem(item)} />
   </AtInput>
  }
  render(){
     const element=this.state.element
    return (
      <View style='background-color: #fff;' className='radio-properties-edit'>
      <AtInput
        name='title'
        type='text'
        placeholder='填写标签名称'
        value={element.title}
        onChange={this.handleChange.bind(this,'title')}
      />

        {
          element.selectList && element.selectList.length >0? element.selectList.map((item,index)=>{
            return this.getSelectItem(item,index)
            }):this.getSelectItem('',0)
        }
        <AtButton className='addbth' type='primary' size='normal' onClick={this.addSelectList.bind(this)}>添加选项</AtButton>
        <View className='propertis-setting'>
          设置
        </View>
        <View>
          <AtSwitch title='是否必填' checked={element.must} onChange={this.handleChange.bind(this,"must")} />

          <AtInput
            name='correntValue'
            title='答案'
            type='text'
            placeholder='设置答案'
            value={element.correntValue}
            onChange={this.handleChange.bind(this,'correntValue')}
          />
          <AtInput
            name='score'
            title='分值'
            type='text'
            placeholder='设置分值'
            value={element.score}
            onChange={this.handleChange.bind(this,'score')}
          />
          {/*<Picker className='at-input' mode='selector' range={["不限制"].concat(element.limitOption.map(item=>item.key))} onChange={this.handleSelectChange.bind(this,'limit')} >*/}
            {/*<View className='picker'>*/}
              {/*<Text  className='at-input__title'>当前选择</Text><Text className='at-input input'>{this.getCurrentKey()}</Text>*/}
            {/*</View>*/}
          {/*</Picker >*/}
        </View>
      </View>

    )
  }

}
