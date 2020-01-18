
// 定义类
class Player {
    // 构造函数
    constructor(id,name,task) {
        this.id = id;
        this.name = name;
        this.task = task;
        this.logintime =  Date.now();
    }

    // 玩家信息
    playerInfo() {
        return "["+this.name+this.id +"]"; 
    }

    // 获取玩家id
    getPlayerId() {
      return this.id;
    }

    // 获取玩家连接
    getPlayerTask(){
      return this.task;
    }

    // 发送消息
     sendToMe(message) {
        this.task.send(message);
    }

    // 获取登陆时长
    getLoginTime() {
        var nowtime =  Date.now();
        // console.log("logintime",this.logintime);
        // console.log("nowtime",nowtime);
        var durtime = nowtime - this.logintime;
        if(durtime < 0) durtime =0;
        // console.log(durtime);
        var durday = parseInt(durtime/(24*3600*1000));
        var durhour = parseInt((durtime%(24*3600*1000))/(3600*1000));
        var durmin = parseInt(((durtime%(24*3600*1000))%(3600*1000))/(60*1000));
        var dursec = parseInt((((durtime%(24*3600*1000))%(3600*1000))%(60*1000))/1000);

        // 格式化
        var format = function(num) {
            if(num < 10) return "0" + num;
            else{
              return num;
            }
        }

        var str = format(durday) +"d "+ format(durhour) +"h " + format(durmin) +"m "+  format(dursec) + "s"
        console.log(str);
        return str;
    }


}

module.exports = Player;