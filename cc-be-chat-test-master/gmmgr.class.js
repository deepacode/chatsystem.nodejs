var EventEmitter = require('events').EventEmitter;

// 定义类
class GMMgr {

  // 构造函数
  constructor() {
      this.event = new EventEmitter();
  }

  // GM初始化
  initGM(){
    // 注册监听事件
    this.event.addListener('popular',this.popular);
    this.event.addListener('stats',this.stats);
  }

  // 获取流行词
  popular(player,popularmgr) {
     var popularstr =  popularmgr.getPopular();
     console.log(player.playerInfo() + popularstr);
     player.sendToMe(popularstr);
  }

  // 玩家状态
  stats(player) {
    // console.log(player.playerInfo() + "stats");
    var loginstr = player.getLoginTime();
    player.sendToMe(loginstr);
 }

 // 解析事件
  parse(message,player,popularmgr) {
    var list = message.split("/");
    for(var i=0;i<list.length;++i) {
      this.event.emit(list[i],player,popularmgr);
    }
  }

 
}
module.exports = GMMgr;
