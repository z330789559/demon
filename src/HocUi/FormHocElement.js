import Taro, { Component } from '@tarojs/taro'
import {getUUid,deepClone} from '@utils/tools'
import { View, Image } from '@tarojs/components'
import { AtButton,AtToast } from 'taro-ui'
import './index.scss'
 class FormHocElement extends Component{
      constructor (props) {
        super(props)
        this.propertiesRef=Taro.createRef();
        this.state = {
          current: 0,
          element:props.element,
          errorMsg:''
        }
      }


      onChangeElement=(element)=>{
        if(!element.title){
          return this.setState({
            errorMsg:'标题为必填'
          })
        }
        let _elemnt=deepClone(element)
        if(!_elemnt.id){
          _elemnt.id=getUUid();
        }
        this.setState({
          element:element
        })
        this.props.settingProperties(_elemnt)
      }
   deleteElement=()=>{
     this.props.deleteElement(this.state.element)
   }
   clearMsg=()=>{
     this.setState({
       errorMsg:''
     })
      }
      addElement=()=>{
        this.propertiesRef.current.onSubmitChange()
     }
      render(){
        const {WrappedComponent}=this.props;
          return <View style='min-height: 100vh;background-color: #F4F5F7;'>
            <WrappedComponent  ref={this.propertiesRef} element={this.state.element}  onChangeElement={this.onChangeElement.bind(this)}/>
            <AtButton className='form_hoc_element_del' onClick={this.deleteElement.bind(this)}>删除</AtButton>
            <AtButton className='form_hoc_element_btn'   type='primary' onClick={this.addElement.bind(this)}>确定</AtButton>
            {this.state.errorMsg&& this.state.errorMsg.length >0?<AtToast status={'error'} onClose={this.clearMsg.bind(this)} isOpened text={this.state.errorMsg} style='color:red'/>:null}
          </View>
  }
}


export default FormHocElement;
