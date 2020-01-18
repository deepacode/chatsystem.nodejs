// 定义类
class ChatRecords {

    // 构造函数
    constructor() {
        this.records = new Array();
    }

    // 广播聊天记录
    broadCastsChatRecords(player) {
        this.records.forEach(function(v,k){
          player.sendToMe(v);
        })
      }

    // 添加聊天记录
    addChatRecord(message) {
      if(this.records.length > 5) {
        this.records.shift();
        this.records.push(message);
      }else {
        this.records.push(message);
      }
      console.log("添加聊天记录：",message);
    }
    
}

module.exports = ChatRecords;
