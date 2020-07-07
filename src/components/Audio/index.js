import Taro, { Component } from '@tarojs/taro'
import { View,Button, Text } from '@tarojs/components'
import  song from '@assets/video/youhebuke.mp3'
let theAudio = null;
import './index.scss'
let running =false;
let initAduio=false;
function audioAutoPlay(audio,videoUrl){
const playLoad=()=>{
  initAduio=true;
  audio.src=videoUrl;
  audio.load();
    audio.play();
  document.removeEventListener('click',playLoad);
}
  document.addEventListener("WeixinJSBridgeReady", playLoad, false);

  document.addEventListener('click', playLoad, false);

}

export default class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioUrl: null,//接口返回的音频地址
      playStatus: true
    };
    this.audioValue=Taro.createRef();
  }

  componentDidMount() {
    //
    // if(Taro.getEnv()==='WEB' && this.state.playStatus && this.state.audioUrl && !running){
    //   audioAutoPlay(this.audioValue.current);
    //   running=true;
    // }
  }

  defaultPlay=(videoUrl)=>{
    if(Taro.getEnv()==='WEB' && this.state.playStatus && this.state.audioUrl && !running){
      audioAutoPlay(this.audioValue.current,videoUrl);
      running=true;
    }
  }
  componentWillReceiveProps(nextProps) {
    //通过接口获取音频地址
    if (nextProps.videoUrl) {
      return this.setState({ audioUrl: nextProps.videoUrl, playStatus:nextProps.autoplay })
    } else {
      return this.setState({ audioUrl: song,playStatus:nextProps.autoplay })
    }

  }
  //这个周期在render后执行，此时你的audio对象是存在的
  componentDidUpdate() {
    if (this.state.audioUrl && !running && this.state.playStatus) {
      audioAutoPlay(this.audioValue.current,this.state.audioUrl)
    }
    running=true;
  }
  playSong =()=>{
   if(!initAduio){
     return false;
   }
    theAudio = this.audioValue.current;
    theAudio.src = '';
    theAudio.src = this.state.audioUrl;
    theAudio.load();
    if(!this.state.playStatus){

      theAudio.play()
    }else{
      this.audioValue.current.pause();
    }
    this.setState({
      playStatus:!this.state.playStatus
    })
     return false;
  }

  render(){
    return<View  className="bgm-btn-wraper" _tracker_click_="_tracker_click_" style="display: block;"  onClick={this.playSong.bind(this)} >
      <div className={`bgm-btn ${this.state.playStatus ?'rotate':''}`} data-event="11205" _tracker_click_="_tracker_click_" style="animation-play-state: running;">
      {this.state.audioUrl? <audio  style='width: 1px; height:1px;visibility: false'   ref={ this.audioValue} controls autoPlay={false} preload="none" controlsList="nodownload" >
        <track kind="captions" />
        您的浏览器不支持 audio 元素。
      </audio>:null}
      </div>
    </View>
  }
}
