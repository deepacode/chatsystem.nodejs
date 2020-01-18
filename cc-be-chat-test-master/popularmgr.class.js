class Popular {
    constructor(words){
      this.begintime = Date.now();
      this.words = words;
    }

    // 获取时间
    getBeginTime() {
      return this.begintime;
    }

    // 获取流行词
    popular() {
      return this.words;
    }
}


// 定义类
class PopularMgr {

  // 构造函数
  constructor() {
      this.populars = new Array();
  }

  // 添加 Popular
  addPopular(message){
    this.populars.push(new Popular(message));
  }
  // 定时删除
  timeRemovePopular(){
    this.populars.forEach(function(v,k,populars){
      var nowtime = Date.now();
      var durtime = nowtime - v.getBeginTime();
      if(durtime < 0) durtime = 0;
      if(durtime > 50*1000) {
          populars.pop(k);
      }
    })

    // console.log("populars:",this.populars.length);
  }

  // 获取流行词v
  getPopular() {
    var popular = "";
    this.populars.forEach(function(v,k){
      popular += v.popular() +"\n";
    })

    return popular;
  }

 
}

//module.exports = Popular;
module.exports = PopularMgr;
