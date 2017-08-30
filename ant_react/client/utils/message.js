
import {message} from 'antd'

// type为消息类型 
// str需要提示的文本
const msg = (str,type=0)=>{
  type = type
  switch(type){
    case 0: //正确的提示
      message.success(str)
      break;
    case 1:
      message.warning(str)
      break;
    default:
      message.error(str);
  }
}

export default msg