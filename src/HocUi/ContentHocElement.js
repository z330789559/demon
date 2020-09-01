import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'

import {AtButton, AtInput, AtRate} from 'taro-ui'
import {PAGEKEY, PAGESTATUS, PAGEACTION} from '@constants/globalEnum'
import {Radio, Checkbox, Rate} from '@components'
import {getRealPx} from '@utils/style'
import './index.scss'

export default class FormHocElement extends Component {
  downFile = (url) => {
    console.log('下载')
    Taro.downloadFile(url);
  }
  changeCurrentElement = (element) => {
    this.props.changeCurrentElement(element.id)
  }


  getWrapContainer = (element, children) => {
    return (
      <View current-el={element.id} >
        {element.must === 0 ? <Text className='form-edit-required'>*</Text> : ''}
        {element.catalog === 0 ? <Text className='form-edit-input'>{element.title}</Text> : ''}
        {children}
      </View>
    )
  }
  callAjax = (element) => {
    const {url, type, stateChanges} = element.ajax;
    const nextState = stateChanges.reduce((o, item) => {
      o[item.key] = item.value;
      return o;
    }, {})
    console.log(nextState)
    this.props.onDispatchPropsChange(nextState);
  }
  getCurrentComponent = (element) => {
    const {defineState, isPreview} = this.props
    switch (element.type) {
      case PAGEKEY.text:
        return this.getWrapContainer(element, <AtInput
          name={element.id}
          title=''
          type='text'
          placeholder=''
          value=''
        />)
      case PAGEKEY.radio:
        return this.getWrapContainer(element,
          <Radio
            name={element.id}
            selectList={element.selectList.map(item => {
              return {
                label: item,
                value: item
              }
            })
            }
            value={element.value[0]}
          />)
      case PAGEKEY.checkbox:
        return this.getWrapContainer(element, <Checkbox
          name={element.id}
          selectList={element.selectList.map(item => {
            return {
              label: item,
              value: item
            }
          })
          }
          value={element.value}
        />)
      case PAGEKEY.score:
        return this.getWrapContainer(element, <AtRate
          customStyle={getRealPx(element.style)}
          max={element.rank}
          size={element.size}
          value={element.value[0]}
        />)
      case PAGEKEY.section:
        return this.getWrapContainer(element, <View name={element.id}>
          {element.content}
        </View>)
      case PAGEKEY.download:
        return this.getWrapContainer(element, <View className='cm-preview-download'
          onClick={() => this.downFile(element.url)}
        ><Image
          src={element.rightIcon} style={getRealPx(element.rightStyle)}
        /><Text>{element.title}</Text></View>)
      case PAGEKEY.image:
        return this.getWrapContainer(element, <Image
          style={getRealPx(element.style)}
          src={element.imageSrc}
        />)
      case PAGEKEY.ptext:
        return this.getWrapContainer(element, <View style={getRealPx(element.style)}>{element.content}</View>)
      case PAGEKEY.tag:
        return this.getWrapContainer(element, <Text style={getRealPx(element.style)}>{element.content}</Text>)
      case PAGEKEY.modal:
        if (element.style&&element.style.position === 'fixed' && isPreview == PAGESTATUS.publish) {
          return  (<View style={getRealPx(element.style)}>
            {element.childrens.map(children => this.getCurrentComponent(children))}
          </View>)
        }
        if (element.style&&element.style.position === 'fixed' && isPreview != PAGESTATUS.publish) {
          element.style.bottom = element.style.bottom ? element.style.bottom.replace("px") : 0;
          element.style.bottom = (element.style.bottom + 100) + "px";
        }
        return this.getWrapContainer(element, <View style={getRealPx(element.style)}>
          {element.childrens.length>0?element.childrens.map(children => this.getCurrentComponent(children)):"点击我添加内容"}
        </View>)
      case PAGEKEY.container:

        if (!element.showVar || (defineState[element.showVar] && defineState[element.showVar] == element.showVarValue)) {

          if (element.style&&element.style.position === 'fixed' && isPreview != PAGESTATUS.publish) {
            element.style.bottom = element.style.bottom ? element.style.bottom.replace("px") : 0;
            element.style.bottom = (element.style.bottom + 100) + "px";
          }
          return <View style={getRealPx(element.style)} >
            {element.childrens.length>0?element.childrens.map(children => this.getCurrentComponent(children)):"点击我添加内容"}
          </View>
        } else {
          return ''
        }
      case PAGEKEY.button:
        const currentStyle = this.getStyles(element);
        const {currentAction} = element;
        if (!currentAction) {
          return <View style={getRealPx(currentStyle)}>
            <AtButton type={element.theme} full={element.full}  customStyle={getRealPx(element.preStyles)}>{element.title}</AtButton>
          </View>
        } else {
          if (currentAction === PAGEACTION.AJAX) {
            return <View style={getRealPx(currentStyle)}>
              <AtButton type={element.theme} full={element.full} customStyle={getRealPx(element.preStyles)}
                onClick={() => this.callAjax(element)}
              >{element.title}</AtButton>
            </View>
          }
        }

    }
  }

  render() {
    const {element, isPreview, hideWrap, itemStyles} = this.props
    if (isPreview === PAGESTATUS.development) {
      itemStyles['paddingTop'] = '40px'
    }
    {
      return isPreview === PAGESTATUS.development ? (
        <View className={hideWrap ? 'form_item__wrap' : 'form_item__wrap item-margin'}>
          <View className='form_item__wrap_inner' style={getRealPx(itemStyles)}>
            <AtButton className='form_item__wrap-btn'
              onClick={this.changeCurrentElement.bind(this, element)}
            >....</AtButton>
            {this.getCurrentComponent(element)}
          </View>
        </View>) : (<View className={hideWrap ? 'form_item__wrap' : 'form_item__wrap item-margin'}> <View
          className='form_item__wrap_inner'
          style={getRealPx(itemStyles)}
        >{this.getCurrentComponent(element)}</View></View>)
    }

  }

  getStyles(element) {
    return element.commonStyles;
  }
}
