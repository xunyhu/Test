

import msg from './message'
module.exports = function(list){
  if(!list.length) return ;
  var bl = true;
  var str = '';
  for(var i=0;i<list.length;i++){
    var rec   = list[i],
      text  = rec['text'],
      type  = rec['type'],
      data  = rec['data'];
    switch(type){
      case 'tel':
        var re = /^1\d{10}$/;
        if (!re.test(data)) {
          str = text || "请输入正确的手机号码";
          bl = false;
          break;
          };
        break;
      case 'empty':
        if(!data){
          str = text;
          bl = false;
        }
        break;   
      case 'isTriDecimal':
        var length=rec['other']==undefined?2:rec['other']
        data=data.toString()
        var decimalIndex = data.indexOf('.');
        if (decimalIndex == '-1') {
            bl=true
        } else {
            var decimalPart = data.substring(decimalIndex + 1, data.length);
            if (decimalPart.length <= parseInt(length)) {
                bl= true;
            } else {
                str = text;
                bl= false;
            }
        }
        break;  
    }
    if(!bl) break;
  }
  if(!bl) msg(str)
  return bl;
}
    