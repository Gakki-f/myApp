import Taro, { PureComponent, stopRecord } from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";
import Top from "./top";
import "./head.less";
import Activity from "./activity";
class Head extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      store: {
        title: "味香居",
        notice: "欢迎光临。。",
        tags: ["味道好", "分量足", "主食好"]
      }
    };
  }
  render() {
    let { store } = this.state;
    return (
      <View className="head">
        <Top />
        <Image className="back" src={require("../../assets/img/pic1.jpg")} />
        <View className="store">
          <Image
            className="store_img"
            src={require("../../assets/img/pic2.jpg")}
          />
          <View className="store_text">
            <Text>{store.title}</Text>
            <Text>{store.notice}</Text>
            <View>
              {store.tags.map((item, index) => (
                <Text className="tags_text" key={index}>
                  {item}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <Activity></Activity>
      </View>
    );
  }
}
export default Head;
