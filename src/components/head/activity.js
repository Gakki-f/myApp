import Taro, { PureComponent } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./activity.less";
class Activity extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      activity: [
        {
          type: "cut",
          info: [
            { total: 48, cut: 10 },
            { total: 48, cut: 10 },
            { total: 48, cut: 10 }
          ]
        }
      ]
    };
  }
  getTextByType(type){
    switch(type){
      case "cut":
        return "减"
         break;
         default:
           return "减"
           break;

    }
  }
  render() {
    // let activity[]=this.state
    return (
      <View className="activity">
        <Text className="type">减</Text>
        <Text>满48减10;满48减10;满48减10</Text>
        <Text>3个活动</Text>
      </View>
    );
  }
}
export default Activity;
