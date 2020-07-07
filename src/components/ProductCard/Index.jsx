import Taro, {Component} from '@tarojs/taro';
import {View, Image, Text} from '@tarojs/components';
import './index.scss';

export default class ProductCard extends Component {
  static options = {
    addGlobalClass: true,
  };

  static defaultProps = {
    width: '200px',
    className: '',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let {src, logo, title, ownerName, className,like} = this.props;
    return (
      <View
        className={className + ' product-card'}
      >
        <Image
          className='img'
          src={src}
          mode='aspectFill'
        ></Image>
        <View className='title'>{title}</View>
        <View className='font20 lh1'>
          {ownerName &&<Text className='product-card__owner'><Image className='icon-logo' src={logo} />{ownerName}</Text>}
          {like && (
            <Text className='originalPrice'>{like}</Text>
          )}
        </View>
      </View>
    );
  }
}
