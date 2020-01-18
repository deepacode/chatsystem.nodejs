
// 定义类
class PlayerMgr {

    // 构造函数
    constructor() {
        this.players = new Map();
    }

    // 广播消息
    broadCasts(message) {
        this.players.forEach(function(v,k){
          v.sendToMe(message);
        })
      }

    // 添加玩家
    addPlayer(id, player) {
        this.players.set(id,player);
        console.log(player.playerInfo()," 加入聊天室");
    }
    // 删除玩家
    removePlayer(player) {
        this.players.delete(player.getPlayerId());
        console.log(player.playerInfo()," 退出聊天室");
    }

    // 获取玩家 by task
    getPlayerByTask(task,func) {
        this.players.forEach(function(v,k){
            if(v.getPlayerTask() == task) {
                return func(v);
            }
          })
    } 

    // 删除玩家by task
    removePlayerByTask(task) {
        this.players.forEach(function(v,k,players){
            if(v.getPlayerTask() == task) {
                players.delete(v.getPlayerId());
                console.log(v.playerInfo()," 退出聊天室");
            }
          })
    }

    
}

module.exports = PlayerMgr;
