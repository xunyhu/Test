
import { combineReducers } from 'redux'
import * as editShop from './editShop'
import * as shop from './shop'
import * as shopList from './shopList'
import * as order from './order'
import { routerReducer as routing } from 'react-router-redux'
import {foodStatus,punlicationStatus,phoneStatus} from './certification'

const rootDeducer = combineReducers({
  ...editShop,
  ...shop,
  ...shopList,
  ...order,
  foodStatus,
  punlicationStatus,
  phoneStatus,
  routing
  
})
export default rootDeducer;