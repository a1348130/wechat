const API_VERSION = '/api/v1'
const cvCodeList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L' ,'M', 'N', 'O', 'P',
'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2' ,'3', '4', '5', '6', '7', '8', '9', '0']
const nickNameList = ["加菲猫", "流氓兔", "柯南", "小新", "樱木花道", "卡卡西", "绯村剑心", "机器猫",
"凌波丽", "小熊维尼", "寒羽良", "杀生丸", "樱桃小丸子", "沙加", "达也", "佐助", "米老鼠", "唐老鸭",
"跳跳虎", "龙猫", "麦兜", "阿贵", "一休", "阿童木", "丁丁", "皮卡丘", "悟空", "阿拉蕾", "史努比",
"皮诺曹", "兔八哥", "白雪公主", "鬼冢英吉", "桔梗", "珊璞", "小茜", "良牙", "卡卡西", "景麒",
"小樱", "蜘蛛侠", "蝙蝠侠", "超人", "史瑞克", "SONIC", "HelloKitty", "赤木刚宪", "三井寿",
"银次", "鸣人", "彩子", "安西教练", "流川枫", "樱木花道", "宫城良田", "藤真", "赵灵儿",
"林月如", "阿奴", "李逍遥", "钢牙", "大力水手", "咸蛋超人", "小鹿斑比", "晴子", "擎天柱",
"威震天", "补天士", "惊破天", "星矢", "紫龙", "冰河", "一辉", "瞬", "童虎", "穆先生",
"撒加", "忍者神龟", "芭比", "高达", "孙悟空", "贝吉塔", "特兰克斯", "布欧", "孙悟天",
"扬羽", "明日香", "雪代巴", "斑点狗", "乱马", "犬夜叉", "黑猫警长", "秦博士",
"浦饭幽助", "PUCCA"]
const conversationTypes = {
  friend: 'FRIEND',
  group: 'GROUP'
}
module.exports = {
  API_VERSION,
  cvCodeList,
  nickNameList,
  conversationTypes
}
