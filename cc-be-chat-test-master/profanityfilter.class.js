
 var fs = require('fs');

// 定义类
class ProfanityFilter {

  // 构造函数
  constructor() {
      this.words = new Set();
  }

  // 加载过滤字
  loadTXT() {
    var data =fs.readFileSync("list.txt");
    var list = data.toString().split("\n");
    for(var i=0;i<list.length;++i) {
      // console.log("loadTXT：",list[i]);
      this.words.add(list[i]);
    }
    // console.log("loadTXT OK："+this.words.size);
  }
  
  // 检查过滤字
  checkWords(message){
    if(message == "") return message;
    var word = message;
    this.words.forEach(function(v,k) {
      // console.log("checkWords ",v);
      word = word.replace(v,function(s){
        var str = "";
        for(var j = 0; j < s.length; j++){
          str += "*";
        }
        return str;
      })
    })

    // console.log("checkWords End："+word);
    return word;
  }
}
module.exports = ProfanityFilter;
