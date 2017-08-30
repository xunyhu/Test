import {GET_FOOD_STATUS,GET_PUBLICATION_STATUS,GET_PHONE_STATUS} from '../actions/certification' 
const initialState ={
	errorCode:-1,
  errorMsg: "失败",
  success: false,
  result:{
  	authStatus:-2,
  	authComment:""
  }
};
const shop_initialState ={
	errorCode:-1,
  errorMsg: "失败",
  success: false,
  result:{
  	agriculture:{
  		authStatus:-2,
  		authComment:""
  	},
  	inbulk:{
  		authStatus:-2,
  		authComment:""
  	}
  }
};
//获取食品经营认证初始状态
export function foodStatus(state = shop_initialState, action) {
	  const json = action.json;
    switch (action.type) {
        case GET_FOOD_STATUS:
            
            return Object.assign(state,json);
            break;
        default:
            return state
    }
}

//获取出版物认证初始状态
export function punlicationStatus(state = initialState, action) {
	  const json = action.json;
    switch (action.type) {
        case GET_PUBLICATION_STATUS:
            return Object.assign(state,json);
            break;
        default:
            return state
    }
}

//获取电话卡认证初始状态
export function phoneStatus(state = initialState, action) {
	  const json = action.json;
    switch (action.type) {
        case GET_PHONE_STATUS:
            return Object.assign(state,json);
            break;
        default:
            return state
    }
}
