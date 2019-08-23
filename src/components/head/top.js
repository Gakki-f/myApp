import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button, Image} from '@tarojs/components';
import './top.less'
class Top extends PureComponent {

  
  render() {
    return (
      <View className='top'>
        <View className="left">
            <Image className="img" src={require("../../assets/img/left.png")}></Image>
            </View>
        <View className="right">
        <Image className="img" src={require("../../assets/img/search.png")}></Image>
        <Image className="img" src={require("../../assets/img/collect.png")}></Image>
        <Image className="img" src={require("../../assets/img/team.png")}></Image>
        <Image className="img" src={require("../../assets/img/lue.png")}></Image>
        </View>
      </View>
    );
  }
}
export default Top;