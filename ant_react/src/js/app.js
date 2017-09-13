/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = vendors;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(656);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(74);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearAllWithLogout = undefined;
exports.getUserInfo = getUserInfo;
exports.setUserInfo = setUserInfo;
exports.removeUserInfo = removeUserInfo;

var _store = __webpack_require__(56);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var key = "tudou_api_";
var keys = {

  /*
    * 请求写在请求头的token时，
    * 退出登录时清除
  */
  userInfo: key + '_api_user_info'

  /***用户token start***/
};function getUserInfo() {
  return _store2.default.get(keys.userInfo) || {};
}
function setUserInfo(data) {
  _store2.default.set(keys.userInfo, data);
  return data;
}
function removeUserInfo() {
  _store2.default.remove(keys.userInfo);
}
/***用户token end***/

/***用户token start***/
// export function getApiToken(){
//   return store.get(keys.apiToken) || token
// }
// export function setApiToken (token){
//   store.set(keys.apiToken,token);
//   return token
// }
// export function removeApiToken (){
//   store.remove(keys.apiToken);
// }
/***用户token end***/

//退出时，清空本地数据
var clearAllWithLogout = exports.clearAllWithLogout = function clearAllWithLogout() {
  removeUserInfo();
  _store2.default.clear();
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(652);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(657);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(651);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _urls = __webpack_require__(43);

var _urls2 = _interopRequireDefault(_urls);

var _get = __webpack_require__(39);

var _get2 = _interopRequireDefault(_get);

var _post = __webpack_require__(42);

var _form = __webpack_require__(38);

var _form2 = _interopRequireDefault(_form);

var _md = __webpack_require__(41);

var _md2 = _interopRequireDefault(_md);

var _message = __webpack_require__(9);

var _message2 = _interopRequireDefault(_message);

var _validate = __webpack_require__(44);

var _validate2 = _interopRequireDefault(_validate);

var _area_code = __webpack_require__(37);

var area_code = _interopRequireWildcard(_area_code);

var _address = __webpack_require__(36);

var address = _interopRequireWildcard(_address);

var _storage = __webpack_require__(4);

var storage = _interopRequireWildcard(_storage);

var _immutable = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const userAgent =  window.navigator.userAgent
// const isIos = userAgent.indexOf('iPhone') > -1
// const isAndroid = userAgent.indexOf('Android') > -1
// const isWin = isIos||isAndroid ? false : true // 区分电脑版微信，不是安卓，苹果手机

// import postJson     from './postJson'
var utils = {
  shopId: 26,
  version: '1.1.0',
  platform: 2,
  height: window.screen.height,
  width: window.screen.width,
  url: _urls2.default,
  serverUrl: window.location.host.indexOf('sellerapi.mall.doubozhibo.com') > -1 ? 'http://sellerapi.mall.doubozhibo.com' : 'http://seller.uat.doubozhibo.com',
  getProvince: address.getProvince(),
  getCityList: address.getCityList,
  getCityListByValue: address.getCityListByValue,
  getAreaList: address.getAreaList,
  getAreaListByValue: address.getAreaListByValue,
  getProvince_code: area_code.getProvince_code(),
  getCityList_code: area_code.getCityList_code,
  getAllCity_code: area_code.getAllCity_code(),

  splitAttr: ';', // 分割属性与属性之间的值，需要与安卓,ios,后台对应，否则数据会解析失败
  splitAttrVal: ':', // 分割属性与属性值之间的值，需要与安卓,ios,后台对应，否则数据会解析失败

  postJson: _post.postJson, storage: storage, validate: _validate2.default, get: _get2.default, post: _post.post, form: _form2.default, md5: _md2.default, msg: _message2.default,

  number: function number(num, digit) {
    digit = digit === undefined ? 2 : +digit;
    return Number(num).toFixed(digit);
  },

  /* 
    根据id获取在数组中的索引下标
    返回索引下标
  */
  getIndexById: function getIndexById(list, item) {
    if (!Array.isArray(list)) {
      console.error('list is not an Array');
      return -1;
    }
    for (var i = 0; i < list.length; i++) {
      if (list[i].id && item.id === list[i].id || list[i] === item.id) {
        return i;
      }
    }
    return -1;
  },
  removeItemById: function removeItemById(list, id) {
    list = (0, _immutable.fromJS)(list).toJS();
    // list = _.cloneDeep(list)
    if (!Array.isArray(list)) {
      console.error('list is not an Array');
      return -1;
    }
    var index = -1;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id && id === list[i].id) {
        index = i;
        break;
      } else {
        if (list[i] === id) {
          index = i;
          break;
        }
      }
    }
    if (index > -1) {
      list.splice(index, 1);
    }
    return list;
  },
  removeItemByIndex: function removeItemByIndex(list, id) {
    if (!Array.isArray(list)) {
      console.error('list is not an Array');
      return -1;
    }
    for (var i = 0; i < list.length; i++) {
      if (id === list[i].id) {
        list.splice(i, 1);
        return list;
      }
    }
    return list;
  },

  // cloneDeep(obj){
  //   return _.cloneDeep(obj)
  // },
  onValidNumber: function onValidNumber(number) {
    var re = /^\d+$/;
    var num = number;
    if (!re.test(num) || num == '' || num == null || num == undefined) {
      num = 0;
    }
    return num;
  },

  // 乘法  
  // accMul (arg1,arg2)   {   
  //   var m=0,s1=arg1.toString(),s2=arg2.toString();   
  //   try{m+=s1.split(".")[1].length}catch(e){}   
  //   try{m+=s2.split(".")[1].length}catch(e){}   
  //   return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)   
  // },
  // // 加法
  // accAdd (arg1,arg2){   
  //   var r1,r2,m;   
  //   try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}   
  //   try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}   
  //   m=Math.pow(10,Math.max(r1,r2));
  //   var n=Math.max(r1,r2);
  //           n>2?n=2:n;/*money最多保留两位小数*/  
  //   return ((arg1*m+arg2*m).toFixed(n))/m   
  // } ,
  buildParams: function buildParams(params) {
    var str = '';
    for (var key in params) {
      str += key + '=' + params[key] + "&";
    }
    str = str.substr(0, str.length - 1);
    return "?" + str;
  }
};
module.exports = utils;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = __webpack_require__(20);

var _message = __webpack_require__(19);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// type为消息类型 
// str需要提示的文本
var msg = function msg(str) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  type = type;
  switch (type) {
    case 0:
      //正确的提示
      _message2.default.success(str);
      break;
    case 1:
      _message2.default.warning(str);
      break;
    default:
      _message2.default.error(str);
  }
};

exports.default = msg;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(313);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(654);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(655);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_SHOP_INFO = exports.GET_SHOP_INFO = 'GET_SHOP_INFO'; // 店铺信息
var GET_SHOP_CATEGORY = exports.GET_SHOP_CATEGORY = 'GET_SHOP_CATEGORY'; // 店铺商品分类列表
var LIST_SUPPLIER = exports.LIST_SUPPLIER = 'LIST_SUPPLIER'; // 供应商列表
var LIST_BRAND = exports.LIST_BRAND = 'LIST_BRAND'; // 品牌

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _notice = __webpack_require__(29);

var _notice2 = _interopRequireDefault(_notice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    null,
    _react2.default.createElement(_reactRouter.Route, { path: '/*', component: _notice2.default })
);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(10);

var _reduxThunk = __webpack_require__(55);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(32);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
  return (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default))(_redux.createStore)(_reducers2.default, initialState);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(13);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(650);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(54);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(50);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(49);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(52);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Icon = function Icon(props) {
    var type = props.type,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        spin = props.spin;

    var classString = (0, _classnames2['default'])((0, _defineProperty3['default'])({
        anticon: true,
        'anticon-spin': !!spin || type === 'loading'
    }, 'anticon-' + type, true), className);
    return _react2['default'].createElement('i', (0, _extends3['default'])({}, (0, _omit2['default'])(props, ['type', 'spin']), { className: classString }));
};
exports['default'] = Icon;
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _rcNotification = __webpack_require__(53);

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _icon = __webpack_require__(18);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultDuration = 3;
var defaultTop = void 0;
var messageInstance = void 0;
var key = 1;
var prefixCls = 'ant-message';
var getContainer = void 0;
function getMessageInstance() {
    messageInstance = messageInstance || _rcNotification2['default'].newInstance({
        prefixCls: prefixCls,
        transitionName: 'move-up',
        style: { top: defaultTop },
        getContainer: getContainer
    });
    return messageInstance;
}
function notice(content) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
    var type = arguments[2];
    var onClose = arguments[3];

    var iconType = {
        info: 'info-circle',
        success: 'check-circle',
        error: 'cross-circle',
        warning: 'exclamation-circle',
        loading: 'loading'
    }[type];
    var instance = getMessageInstance();
    instance.notice({
        key: key,
        duration: duration,
        style: {},
        content: _react2['default'].createElement(
            'div',
            { className: prefixCls + '-custom-content ' + prefixCls + '-' + type },
            _react2['default'].createElement(_icon2['default'], { type: iconType }),
            _react2['default'].createElement(
                'span',
                null,
                content
            )
        ),
        onClose: onClose
    });
    return function () {
        var target = key++;
        return function () {
            instance.removeNotice(target);
        };
    }();
}
exports['default'] = {
    info: function info(content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },
    success: function success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    error: function error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },

    // Departed usage, please use warning()
    warn: function warn(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    warning: function warning(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    loading: function loading(content, duration, onClose) {
        return notice(content, duration, 'loading', onClose);
    },
    config: function config(options) {
        if (options.top !== undefined) {
            defaultTop = options.top;
            messageInstance = null; // delete messageInstance for new defaultTop
        }
        if (options.duration !== undefined) {
            defaultDuration = options.duration;
        }
        if (options.prefixCls !== undefined) {
            prefixCls = options.prefixCls;
        }
        if (options.getContainer !== undefined) {
            getContainer = options.getContainer;
        }
    },
    destroy: function destroy() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(47);

__webpack_require__(46);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_PHONE_STATUS = exports.GET_PUBLICATION_STATUS = exports.GET_FOOD_STATUS = undefined;
exports.getFoodStatus = getFoodStatus;
exports.getPublicationStatus = getPublicationStatus;
exports.getPhoneStatus = getPhoneStatus;

var _httpFetch = __webpack_require__(40);

var _utils = __webpack_require__(8);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_FOOD_STATUS = exports.GET_FOOD_STATUS = "GET_FOOD_STATUS";
var GET_PUBLICATION_STATUS = exports.GET_PUBLICATION_STATUS = "GET_PUBLICATION_STATUS";
var GET_PHONE_STATUS = exports.GET_PHONE_STATUS = "GET_PHONE_STATUS";

//获取食品经营认证初始状态
function getFoodStatus(data) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (json) {};

  return (0, _httpFetch.post)(_utils2.default.url.getAuthStatus, data, callback, function (json) {
    return {
      type: GET_FOOD_STATUS,
      json: json
    };
  });
}

//获取出版物经营认证初始状态
function getPublicationStatus(data) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (json) {};

  return (0, _httpFetch.post)(_utils2.default.url.publicationAuth, data, callback, function (json) {
    return {
      type: GET_PUBLICATION_STATUS,
      json: json
    };
  });
}

//获取电话卡认证初始状态
function getPhoneStatus(data) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (json) {};

  return (0, _httpFetch.post)(_utils2.default.url.phonecardAuth, data, callback, function (json) {
    return {
      type: GET_PHONE_STATUS,
      json: json
    };
  });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteShopCategory = exports.updateShopCategory = exports.addShopCategory = exports.getBrandList = exports.getListSupplier = exports.getShopCategory = exports.getShopInfo = undefined;
exports.updateShopInfo = updateShopInfo;

var _shop = __webpack_require__(13);

var _utils = __webpack_require__(8);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestSuccess(data, type) {
  return {
    type: type,
    data: data
  };
}

var getShopInfo = exports.getShopInfo = function getShopInfo(actions) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { readCache: false, clear: false, callback: function callback() {} };

  return function (dispatch, state) {
    var _utils$storage$getUse = _utils2.default.storage.getUserInfo(),
        shop = _utils$storage$getUse.shop,
        user = _utils$storage$getUse.user; //state().getShopInfo.toJS()


    if (config.clear) {
      return dispatch(requestSuccess({}, _shop.GET_SHOP_INFO));
    }
    if (shop && shop.id && config.readCache) {
      if (config.callback != undefined && typeof config.callback == 'function') config.callback(shop);
      return dispatch(requestSuccess(shop, _shop.GET_SHOP_INFO));
    }
    return _utils2.default.get(_utils2.default.url.getShop + '?id=1', actions).then(function (data) {
      if (data.errorCode === 0) {
        if (config.callback != undefined && typeof config.callback == 'function') {
          config.callback(data.result);
        }

        return dispatch(requestSuccess(data.result, _shop.GET_SHOP_INFO));
      } else {
        return null;
      }
    });
  };
};

// 更新店铺
function updateShopInfo(shopInfo) {
  return function (dispatch, state) {
    return dispatch(requestSuccess(shopInfo, _shop.GET_SHOP_INFO));
  };
}

// 获取店铺商品分类列表
var getShopCategory = exports.getShopCategory = function getShopCategory() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { cache: false };

  return function (dispatch, state) {
    var options = state().getShopCategory.toJS();
    if (config.cache && options.length) {
      options = options.reduce(function (arr, item) {
        if (item.id != -1) {
          arr.push(item);
        }
        return arr;
      }, []);
      return dispatch(requestSuccess(options, _shop.GET_SHOP_CATEGORY));
    }
    _utils2.default.get(_utils2.default.url.categoryList + "?isGive=1").then(function (res) {
      if (res.errorCode == 0) {
        return dispatch(requestSuccess(res.result, _shop.GET_SHOP_CATEGORY));
      }
    });
  };
};

// 获取供应商
var getListSupplier = exports.getListSupplier = function getListSupplier() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { cache: false };

  return function (dispatch, state) {
    var options = state().getListSupplier.toJS();
    if (config.cache && options.length) {
      return dispatch(requestSuccess(options, _shop.LIST_SUPPLIER));
    }
    _utils2.default.get(_utils2.default.url.listSupplierList).then(function (res) {
      if (res.errorCode == 0) {
        return dispatch(requestSuccess(res.result, _shop.LIST_SUPPLIER));
      }
    });
  };
};

// 品牌
var getBrandList = exports.getBrandList = function getBrandList() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { cache: false };

  return function (dispatch, state) {
    var options = state().BrandList.toJS();
    if (config.cache && options.length) {
      return dispatch(requestSuccess(options, _shop.LIST_BRAND));
    }
    _utils2.default.get(_utils2.default.url.brandList).then(function (res) {
      if (res.errorCode == 0) {
        return dispatch(requestSuccess(res.result, _shop.LIST_BRAND));
      }
    });
  };
};

// 新增一个商品分类
var addShopCategory = exports.addShopCategory = function addShopCategory() {
  return function (dispatch, state) {
    var options = state().getShopCategory.toJS();
    var res = {
      id: -1,
      categoryName: '',
      isShow: 0,
      createDt: '今天'
    };
    options.push(res);
    return dispatch(requestSuccess(options, _shop.GET_SHOP_CATEGORY));
  };
};

// 更新商品分类
var updateShopCategory = exports.updateShopCategory = function updateShopCategory(data) {
  return function (dispatch, state) {
    return dispatch(requestSuccess(data, _shop.GET_SHOP_CATEGORY));
  };
};
// 删除商品分类
var deleteShopCategory = exports.deleteShopCategory = function deleteShopCategory(index, item) {
  return function (dispatch, state) {
    var list = state().getShopCategory.toJS();
    _utils2.default.get(_utils2.default.url.categoryDelete + "?id=" + item.id).then(function (res) {
      if (res.errorCode == 0) {
        list.splice(index, 1);
      }
      return dispatch(requestSuccess(list, _shop.GET_SHOP_CATEGORY));
      _utils2.default.msg(res.errorMsg, res.errorCode);
    });
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(17);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactRouter = __webpack_require__(2);

var _reactRouterRedux = __webpack_require__(12);

var _reactRedux = __webpack_require__(11);

var _history = __webpack_require__(7);

var _configureStore = __webpack_require__(15);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _routes = __webpack_require__(14);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _configureStore2.default)();
var appHistory = (0, _reactRouter.useRouterHistory)(_history.createHashHistory)({ queryKey: false });
var history = (0, _reactRouterRedux.syncHistoryWithStore)(appHistory, store);

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          history = _props.history;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })
      );
    }
  }]);

  return Root;
}(_react.Component);

Root.propTypes = {
  store: _react.PropTypes.object.isRequired,
  history: _react.PropTypes.object.isRequired
};


(0, _reactDom.render)(_react2.default.createElement(Root, { store: store, history: history }), document.getElementById('_root'));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _redux = __webpack_require__(10);

var _reactRedux = __webpack_require__(11);

var _shop = __webpack_require__(22);

var Actions = _interopRequireWildcard(_shop);

var _utils = __webpack_require__(8);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderTop = function (_Component) {
    _inherits(HeaderTop, _Component);

    function HeaderTop() {
        _classCallCheck(this, HeaderTop);

        return _possibleConstructorReturn(this, (HeaderTop.__proto__ || Object.getPrototypeOf(HeaderTop)).apply(this, arguments));
    }

    _createClass(HeaderTop, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'header-t' },
                _react2.default.createElement(
                    'div',
                    { className: 'banner' },
                    _react2.default.createElement(
                        'div',
                        { className: 'banner-list' },
                        _react2.default.createElement(
                            'div',
                            { className: 'for_gaq' },
                            '\u571F\u8C46\u6CE5\u76F4\u64AD'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'for_gaq' },
                            '\u571F\u8C46\u6CE5\u76F4\u64AD'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'for_gaq' },
                            '\u571F\u8C46\u6CE5\u76F4\u64AD'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'for_gaq' },
                            '\u571F\u8C46\u6CE5\u76F4\u64AD'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'for_gaq' },
                            '\u571F\u8C46\u6CE5\u76F4\u64AD'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'for_gaq' },
                            '\u571F\u8C46\u6CE5\u76F4\u64AD'
                        )
                    )
                )
            );
        }
    }]);

    return HeaderTop;
}(_react.Component);

var HeaderInfo = function (_Component2) {
    _inherits(HeaderInfo, _Component2);

    function HeaderInfo(props) {
        _classCallCheck(this, HeaderInfo);

        var _this2 = _possibleConstructorReturn(this, (HeaderInfo.__proto__ || Object.getPrototypeOf(HeaderInfo)).call(this, props));

        _this2.state = {
            show: false
        };
        return _this2;
    }

    _createClass(HeaderInfo, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var show = this.state.show;
            var _props = this.props,
                shopInfo = _props.shopInfo,
                needLogin = _props.needLogin,
                actions = _props.actions;


            return _react2.default.createElement(
                'div',
                { className: 'header-b-r' },
                _react2.default.createElement(
                    'div',
                    { className: 'wealth-tips' },
                    _react2.default.createElement(
                        'span',
                        { id: 'hd_u_name', onClick: function onClick() {}, style: { "display": "inline-block" } },
                        shopInfo.name
                    ),
                    show ? _react2.default.createElement(
                        'div',
                        { className: 'tips-list' },
                        _react2.default.createElement(
                            'div',
                            { className: 'tips-t' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u8BA2\u5355\u6D88\u606F\uFF1A',
                                _react2.default.createElement(
                                    'i',
                                    { className: 'order-infor' },
                                    '0'
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { className: 'hd_enter_im', href: '###' },
                                '\u804A\u5929\u6D88\u606F\uFF1A',
                                _react2.default.createElement(
                                    'i',
                                    { className: 'customer-infor' },
                                    '1'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'tips-b' },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/account/main', href: '#' },
                                '\u4E2A\u4EBA\u8D44\u6599'
                            )
                        )
                    ) : null
                ),
                _react2.default.createElement(
                    'a',
                    { className: 'quit', onClick: function onClick() {
                            _utils2.default.post(_utils2.default.url.logout).then(function (res) {
                                _utils2.default.storage.removeUserInfo();
                                actions.getShopInfo(actions, { clear: true });
                                _this3.context.router.replace('/Login');
                            });
                        } },
                    '\u9000\u51FA'
                )
            );
        }
    }]);

    return HeaderInfo;
}(_react.Component);

HeaderInfo.contextTypes = {
    router: _react.PropTypes.object.isRequired
};

var Header = function (_Component3) {
    _inherits(Header, _Component3);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props2 = this.props,
                actions = _props2.actions,
                needLogin = _props2.needLogin;

            if (needLogin) {
                actions.getShopInfo(actions, { readCache: true });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                shopInfo = _props3.shopInfo,
                needLogin = _props3.needLogin,
                actions = _props3.actions;

            return _react2.default.createElement(
                'div',
                { className: 'wd-header' },
                _react2.default.createElement(
                    'div',
                    { className: 'header-b' },
                    _react2.default.createElement(
                        'div',
                        { className: 'header-b-c' },
                        _react2.default.createElement(
                            'div',
                            { className: 'header-b-l' },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement('img', { style: { "marginTop": "4px" }, src: './assets/image/logo.png' }),
                                ' '
                            )
                        ),
                        needLogin ? _react2.default.createElement(HeaderInfo, { actions: actions, shopInfo: shopInfo, needLogin: needLogin }) : null
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

Header.defaultProps = {
    needLogin: true
};
Header.PropTypes = {
    needLogin: _react.PropTypes.bool
};


function mapStateToProps(state) {
    return {
        shopInfo: state.getShopInfo.toJS()
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(Actions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// 编辑商品

var EDIT_SHOW_IMAGES = exports.EDIT_SHOW_IMAGES = 'EDIT_SHOW_IMAGES'; // 商品图片
var EDIT_SHOW_SKU = exports.EDIT_SHOW_SKU = 'EDIT_SHOW_SKU'; // 商品属性
var EDIT_SHOW_TABLE = exports.EDIT_SHOW_TABLE = 'EDIT_SHOW_TABLE'; // 商品sku列表
var EDIT_SHOW_INFO = exports.EDIT_SHOW_INFO = 'EDIT_SHOW_INFO'; // 商品基本信息
var EDIT_SHOW_CLEAR = exports.EDIT_SHOW_CLEAR = 'EDIT_SHOW_CLEAR'; // 清空商品基本信息

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ORDER_LIST = exports.ORDER_LIST = 'ORDER_LIST'; // 订单列表

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// 商品管理

var SHOP_LIST_TOTAL = exports.SHOP_LIST_TOTAL = 'SHOP_LIST_TOTAL'; // 商品列表

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
函数式编程

function hello (props) {
    const { style, children } = props;
    return (
        <h1
            style = { style }
        >
            { children }
        </h1>
    );
}
 */

var hello = function (_Component) {
    _inherits(hello, _Component);

    function hello() {
        _classCallCheck(this, hello);

        return _possibleConstructorReturn(this, (hello.__proto__ || Object.getPrototypeOf(hello)).apply(this, arguments));
    }

    _createClass(hello, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                style = _props.style;

            return _react2.default.createElement(
                'h1',
                { style: style },
                children
            );
        }
    }]);

    return hello;
}(_react.Component);

exports.default = hello;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _hello = __webpack_require__(28);

var _hello2 = _interopRequireDefault(_hello);

var _header = __webpack_require__(24);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoticeMain = function (_Component) {
	_inherits(NoticeMain, _Component);

	function NoticeMain(props) {
		_classCallCheck(this, NoticeMain);

		var _this = _possibleConstructorReturn(this, (NoticeMain.__proto__ || Object.getPrototypeOf(NoticeMain)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(NoticeMain, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_header2.default, this.props)
			);
		}
	}]);

	return NoticeMain;
}(_react.Component);

NoticeMain.defaultProps = {
	leftHide: false
};
NoticeMain.propsType = {
	leftHide: _react.PropTypes.bool // 是否隐藏左侧菜单, 默认不隐藏
};
exports.default = NoticeMain;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foodStatus = foodStatus;
exports.punlicationStatus = punlicationStatus;
exports.phoneStatus = phoneStatus;

var _certification = __webpack_require__(21);

var initialState = {
    errorCode: -1,
    errorMsg: "失败",
    success: false,
    result: {
        authStatus: -2,
        authComment: ""
    }
};
var shop_initialState = {
    errorCode: -1,
    errorMsg: "失败",
    success: false,
    result: {
        agriculture: {
            authStatus: -2,
            authComment: ""
        },
        inbulk: {
            authStatus: -2,
            authComment: ""
        }
    }
};
//获取食品经营认证初始状态
function foodStatus() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : shop_initialState;
    var action = arguments[1];

    var json = action.json;
    switch (action.type) {
        case _certification.GET_FOOD_STATUS:

            return Object.assign(state, json);
            break;
        default:
            return state;
    }
}

//获取出版物认证初始状态
function punlicationStatus() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var json = action.json;
    switch (action.type) {
        case _certification.GET_PUBLICATION_STATUS:
            return Object.assign(state, json);
            break;
        default:
            return state;
    }
}

//获取电话卡认证初始状态
function phoneStatus() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var json = action.json;
    switch (action.type) {
        case _certification.GET_PHONE_STATUS:
            return Object.assign(state, json);
            break;
        default:
            return state;
    }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editShowInfo = exports.editShowImages = exports.editShowSkuTable = exports.editShowSku = undefined;

var _createReducer, _createReducer2, _createReducer3, _fromJS, _createReducer4;

var _editShop = __webpack_require__(25);

var _reduxImmutablejs = __webpack_require__(6);

var _immutable = __webpack_require__(3);

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // 编辑商品


// 商品属性
var editShowSku = exports.editShowSku = (0, _reduxImmutablejs.createReducer)((0, _immutable.fromJS)({}), (_createReducer = {}, _defineProperty(_createReducer, _editShop.EDIT_SHOW_SKU, function (state, action) {
  return (0, _immutable.fromJS)(action.data);
}), _defineProperty(_createReducer, _editShop.EDIT_SHOW_CLEAR, function (state, action) {
  return (0, _immutable.fromJS)(action.data);
}), _createReducer));

// 商品sku列表
var editShowSkuTable = exports.editShowSkuTable = (0, _reduxImmutablejs.createReducer)((0, _immutable.fromJS)([]), (_createReducer2 = {}, _defineProperty(_createReducer2, _editShop.EDIT_SHOW_TABLE, function (state, action) {
  return (0, _immutable.fromJS)(action.data);
}), _defineProperty(_createReducer2, _editShop.EDIT_SHOW_CLEAR, function (state, action) {
  return (0, _immutable.fromJS)([]);
}), _createReducer2));

// 商品图片
var initImage = (0, _immutable.fromJS)({
  imageUrl: '', //商品主图
  goodsImgUrls: [] //  商品图片
});
var editShowImages = exports.editShowImages = (0, _reduxImmutablejs.createReducer)(initImage, (_createReducer3 = {}, _defineProperty(_createReducer3, _editShop.EDIT_SHOW_IMAGES, function (state, action) {
  return (0, _immutable.fromJS)(action.data);
}), _defineProperty(_createReducer3, _editShop.EDIT_SHOW_CLEAR, function (state, action) {
  return initImage;
}), _createReducer3));

// 商品基本信息
var initInfo = (0, _immutable.fromJS)((_fromJS = {
  categoryId: '', // 商品分类
  commission: 0, //佣金
  goodsName: '', //商品名称
  price: 0, //价格
  detail: [], //  商品描述
  brandId: '0', //商品品类，超级后台维护
  // brandName : '',//品类
  goodsStock: 0, // 商品库存
  status: 1, //审核,上架 0为上架，1为下架
  isRecommend: 0, // 店长推荐标识 是否推荐，0为不推荐，1为推荐
  freeDelivery: 0, //是否包邮(0代表不包邮,1代表包邮)
  freightTemplateId: '', //关联运费模板ID
  weight: 0, // 商品重量,以kg为单位,
  goodsType: 1, // 0:自营;1:网红商品;2:为第三方平台
  moneyType: 0,
  tag: 0, //商品标签
  shareFlag: 0, // 是否分享得佣金 shareFlag=0，没有分享佣金，shareFlag=1有分享佣金
  shareCommision: 0, // 分享佣金金额 shareFlag=0是隐藏
  supplierCode: '', //供应商code
  supplierName: '' }, _defineProperty(_fromJS, 'brandId', ''), _defineProperty(_fromJS, 'brandName', ''), _fromJS));
var editShowInfo = exports.editShowInfo = (0, _reduxImmutablejs.createReducer)(initInfo, (_createReducer4 = {}, _defineProperty(_createReducer4, _editShop.EDIT_SHOW_INFO, function (state, action) {
  return (0, _immutable.fromJS)(action.data);
}), _defineProperty(_createReducer4, _editShop.EDIT_SHOW_CLEAR, function (state, action) {
  return initInfo;
}), _createReducer4));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(10);

var _editShop = __webpack_require__(31);

var editShop = _interopRequireWildcard(_editShop);

var _shop = __webpack_require__(34);

var shop = _interopRequireWildcard(_shop);

var _shopList = __webpack_require__(35);

var shopList = _interopRequireWildcard(_shopList);

var _order = __webpack_require__(33);

var order = _interopRequireWildcard(_order);

var _reactRouterRedux = __webpack_require__(12);

var _certification = __webpack_require__(30);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var rootDeducer = (0, _redux.combineReducers)(_extends({}, editShop, shop, shopList, order, {
  foodStatus: _certification.foodStatus,
  punlicationStatus: _certification.punlicationStatus,
  phoneStatus: _certification.phoneStatus,
  routing: _reactRouterRedux.routerReducer

}));
exports.default = rootDeducer;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderListData = undefined;

var _order = __webpack_require__(26);

var _reduxImmutablejs = __webpack_require__(6);

var _immutable = __webpack_require__(3);

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // 编辑商品


// 订单列表
var initOrderList = (0, _immutable.fromJS)({
  pageSize: 20, // 当前分页条数
  currentPage: 1, // 当前页码
  totalCount: 0, // 总订单记录数
  allCheck: false, // 全选checkbox，默认为不全选
  data: [], // 订单列表
  checkIds: [] // 选中订单记录的id数组
});
var orderListData = exports.orderListData = (0, _reduxImmutablejs.createReducer)(initOrderList, _defineProperty({}, _order.ORDER_LIST, function (state, action) {
  return (0, _immutable.fromJS)(action.data);
}));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandList = exports.getListSupplier = exports.getShopCategory = exports.getShopInfo = undefined;

var _shop = __webpack_require__(13);

var _reduxImmutablejs = __webpack_require__(6);

var _immutable = __webpack_require__(3);

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 店铺信息
var initShopInfo = (0, _immutable.fromJS)({
  "name": "",
  "userId": 0,
  "reductionMode": -1,
  "shopStatus": 0,
  "directsaleStatus": 0,
  "otherServiceStatus": 0,
  "servicePhone": null,
  "isCompany": 0,
  "shopType": 1,
  "notice": null,
  "shopIcon": "",
  "deleteFlag": 0,
  "autoConfirmDays": 15,
  "isPromiseTransaction": 0,
  "isPromiseReverse": 0,
  "isWeiboAuth": 0,
  "isHonestyAuth": 0,
  "isPhysicalStoreAuth": 1
});
var getShopInfo = exports.getShopInfo = (0, _reduxImmutablejs.createReducer)(initShopInfo, _defineProperty({}, _shop.GET_SHOP_INFO, function (state, action) {
  return (0, _immutable.fromJS)(action.data);
}));
var getShopCategory = exports.getShopCategory = (0, _reduxImmutablejs.createReducer)((0, _immutable.fromJS)([]), _defineProperty({}, _shop.GET_SHOP_CATEGORY, function (state, action) {
  return (0, _immutable.fromJS)(action.data);
}));

var getListSupplier = exports.getListSupplier = (0, _reduxImmutablejs.createReducer)((0, _immutable.fromJS)([]), _defineProperty({}, _shop.LIST_SUPPLIER, function (state, action) {
  return (0, _immutable.fromJS)(action.data);
}));

var BrandList = exports.BrandList = (0, _reduxImmutablejs.createReducer)((0, _immutable.fromJS)([]), _defineProperty({}, _shop.LIST_BRAND, function (state, action) {
  return (0, _immutable.fromJS)(action.data);
}));

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shopListData = undefined;

var _shopList = __webpack_require__(27);

var _reduxImmutablejs = __webpack_require__(6);

var _immutable = __webpack_require__(3);

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // 编辑商品


// 商品列表
var initShopList = (0, _immutable.fromJS)({
  pageSize: 20, // 当前分页条数
  currentPage: 1, // 当前页码
  totalCount: 0, // 总商品记录数
  allCheck: false, // 全选checkbox，默认为不全选
  data: [], // 商品列表
  checkIds: [] // 选中商品记录的id数组
});
var shopListData = exports.shopListData = (0, _reduxImmutablejs.createReducer)(initShopList, _defineProperty({}, _shopList.SHOP_LIST_TOTAL, function (state, action) {
  return (0, _immutable.fromJS)(action.data);
}));

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProvince = getProvince;
exports.getCityList = getCityList;
exports.getCityListByValue = getCityListByValue;
exports.getAreaList = getAreaList;
exports.getAreaListByValue = getAreaListByValue;
var _address = [{ "code": 0, "value": "--请选择--", "states": [{ "code": 0, "value": "--请选择--", "cities": [] }] }, {
    "code": "11",
    "value": "北京市",
    "states": [{
        "code": "1101",
        "value": "市辖区",
        "cities": [{
            "code": "110101",
            "value": "东城区"
        }, {
            "code": "110102",
            "value": "西城区"
        }, {
            "code": "110105",
            "value": "朝阳区"
        }, {
            "code": "110106",
            "value": "丰台区"
        }, {
            "code": "110107",
            "value": "石景山区"
        }, {
            "code": "110108",
            "value": "海淀区"
        }, {
            "code": "110109",
            "value": "门头沟区"
        }, {
            "code": "110111",
            "value": "房山区"
        }, {
            "code": "110112",
            "value": "通州区"
        }, {
            "code": "110113",
            "value": "顺义区"
        }, {
            "code": "110114",
            "value": "昌平区"
        }, {
            "code": "110115",
            "value": "大兴区"
        }, {
            "code": "110116",
            "value": "怀柔区"
        }, {
            "code": "110117",
            "value": "平谷区"
        }]
    }, {
        "code": "1102",
        "value": "县",
        "cities": [{
            "code": "110228",
            "value": "密云县"
        }, {
            "code": "110229",
            "value": "延庆县"
        }]
    }]
}, {
    "code": "12",
    "value": "天津市",
    "states": [{
        "code": "1201",
        "value": "市辖区",
        "cities": [{
            "code": "120101",
            "value": "和平区"
        }, {
            "code": "120102",
            "value": "河东区"
        }, {
            "code": "120103",
            "value": "河西区"
        }, {
            "code": "120104",
            "value": "南开区"
        }, {
            "code": "120105",
            "value": "河北区"
        }, {
            "code": "120106",
            "value": "红桥区"
        }, {
            "code": "120110",
            "value": "东丽区"
        }, {
            "code": "120111",
            "value": "西青区"
        }, {
            "code": "120112",
            "value": "津南区"
        }, {
            "code": "120113",
            "value": "北辰区"
        }, {
            "code": "120114",
            "value": "武清区"
        }, {
            "code": "120115",
            "value": "宝坻区"
        }, {
            "code": "120116",
            "value": "滨海新区"
        }]
    }, {
        "code": "1202",
        "value": "县",
        "cities": [{
            "code": "120221",
            "value": "宁河县"
        }, {
            "code": "120223",
            "value": "静海县"
        }, {
            "code": "120225",
            "value": "蓟县"
        }]
    }]
}, {
    "code": "13",
    "value": "河北省",
    "states": [{
        "code": "1301",
        "value": "石家庄市",
        "cities": [{
            "code": "130101",
            "value": "市辖区"
        }, {
            "code": "130102",
            "value": "长安区"
        }, {
            "code": "130103",
            "value": "桥东区"
        }, {
            "code": "130104",
            "value": "桥西区"
        }, {
            "code": "130105",
            "value": "新华区"
        }, {
            "code": "130107",
            "value": "井陉矿区"
        }, {
            "code": "130108",
            "value": "裕华区"
        }, {
            "code": "130121",
            "value": "井陉县"
        }, {
            "code": "130123",
            "value": "正定县"
        }, {
            "code": "130124",
            "value": "栾城县"
        }, {
            "code": "130125",
            "value": "行唐县"
        }, {
            "code": "130126",
            "value": "灵寿县"
        }, {
            "code": "130127",
            "value": "高邑县"
        }, {
            "code": "130128",
            "value": "深泽县"
        }, {
            "code": "130129",
            "value": "赞皇县"
        }, {
            "code": "130130",
            "value": "无极县"
        }, {
            "code": "130131",
            "value": "平山县"
        }, {
            "code": "130132",
            "value": "元氏县"
        }, {
            "code": "130133",
            "value": "赵县"
        }, {
            "code": "130181",
            "value": "辛集市"
        }, {
            "code": "130182",
            "value": "藁城市"
        }, {
            "code": "130183",
            "value": "晋州市"
        }, {
            "code": "130184",
            "value": "新乐市"
        }, {
            "code": "130185",
            "value": "鹿泉市"
        }]
    }, {
        "code": "1302",
        "value": "唐山市",
        "cities": [{
            "code": "130201",
            "value": "市辖区"
        }, {
            "code": "130202",
            "value": "路南区"
        }, {
            "code": "130203",
            "value": "路北区"
        }, {
            "code": "130204",
            "value": "古冶区"
        }, {
            "code": "130205",
            "value": "开平区"
        }, {
            "code": "130207",
            "value": "丰南区"
        }, {
            "code": "130208",
            "value": "丰润区"
        }, {
            "code": "130209",
            "value": "曹妃甸区"
        }, {
            "code": "130223",
            "value": "滦县"
        }, {
            "code": "130224",
            "value": "滦南县"
        }, {
            "code": "130225",
            "value": "乐亭县"
        }, {
            "code": "130227",
            "value": "迁西县"
        }, {
            "code": "130229",
            "value": "玉田县"
        }, {
            "code": "130281",
            "value": "遵化市"
        }, {
            "code": "130283",
            "value": "迁安市"
        }]
    }, {
        "code": "1303",
        "value": "秦皇岛市",
        "cities": [{
            "code": "130301",
            "value": "市辖区"
        }, {
            "code": "130302",
            "value": "海港区"
        }, {
            "code": "130303",
            "value": "山海关区"
        }, {
            "code": "130304",
            "value": "北戴河区"
        }, {
            "code": "130321",
            "value": "青龙县"
        }, {
            "code": "130322",
            "value": "昌黎县"
        }, {
            "code": "130323",
            "value": "抚宁县"
        }, {
            "code": "130324",
            "value": "卢龙县"
        }]
    }, {
        "code": "1304",
        "value": "邯郸市",
        "cities": [{
            "code": "130401",
            "value": "市辖区"
        }, {
            "code": "130402",
            "value": "邯山区"
        }, {
            "code": "130403",
            "value": "丛台区"
        }, {
            "code": "130404",
            "value": "复兴区"
        }, {
            "code": "130406",
            "value": "峰峰矿区"
        }, {
            "code": "130421",
            "value": "邯郸县"
        }, {
            "code": "130423",
            "value": "临漳县"
        }, {
            "code": "130424",
            "value": "成安县"
        }, {
            "code": "130425",
            "value": "大名县"
        }, {
            "code": "130426",
            "value": "涉县"
        }, {
            "code": "130427",
            "value": "磁县"
        }, {
            "code": "130428",
            "value": "肥乡县"
        }, {
            "code": "130429",
            "value": "永年县"
        }, {
            "code": "130430",
            "value": "邱县"
        }, {
            "code": "130431",
            "value": "鸡泽县"
        }, {
            "code": "130432",
            "value": "广平县"
        }, {
            "code": "130433",
            "value": "馆陶县"
        }, {
            "code": "130434",
            "value": "魏县"
        }, {
            "code": "130435",
            "value": "曲周县"
        }, {
            "code": "130481",
            "value": "武安市"
        }]
    }, {
        "code": "1305",
        "value": "邢台市",
        "cities": [{
            "code": "130501",
            "value": "市辖区"
        }, {
            "code": "130502",
            "value": "桥东区"
        }, {
            "code": "130503",
            "value": "桥西区"
        }, {
            "code": "130521",
            "value": "邢台县"
        }, {
            "code": "130522",
            "value": "临城县"
        }, {
            "code": "130523",
            "value": "内丘县"
        }, {
            "code": "130524",
            "value": "柏乡县"
        }, {
            "code": "130525",
            "value": "隆尧县"
        }, {
            "code": "130526",
            "value": "任县"
        }, {
            "code": "130527",
            "value": "南和县"
        }, {
            "code": "130528",
            "value": "宁晋县"
        }, {
            "code": "130529",
            "value": "巨鹿县"
        }, {
            "code": "130530",
            "value": "新河县"
        }, {
            "code": "130531",
            "value": "广宗县"
        }, {
            "code": "130532",
            "value": "平乡县"
        }, {
            "code": "130533",
            "value": "威县"
        }, {
            "code": "130534",
            "value": "清河县"
        }, {
            "code": "130535",
            "value": "临西县"
        }, {
            "code": "130581",
            "value": "南宫市"
        }, {
            "code": "130582",
            "value": "沙河市"
        }]
    }, {
        "code": "1306",
        "value": "保定市",
        "cities": [{
            "code": "130601",
            "value": "市辖区"
        }, {
            "code": "130602",
            "value": "新市区"
        }, {
            "code": "130603",
            "value": "北市区"
        }, {
            "code": "130604",
            "value": "南市区"
        }, {
            "code": "130621",
            "value": "满城县"
        }, {
            "code": "130622",
            "value": "清苑县"
        }, {
            "code": "130623",
            "value": "涞水县"
        }, {
            "code": "130624",
            "value": "阜平县"
        }, {
            "code": "130625",
            "value": "徐水县"
        }, {
            "code": "130626",
            "value": "定兴县"
        }, {
            "code": "130627",
            "value": "唐县"
        }, {
            "code": "130628",
            "value": "高阳县"
        }, {
            "code": "130629",
            "value": "容城县"
        }, {
            "code": "130630",
            "value": "涞源县"
        }, {
            "code": "130631",
            "value": "望都县"
        }, {
            "code": "130632",
            "value": "安新县"
        }, {
            "code": "130633",
            "value": "易县"
        }, {
            "code": "130634",
            "value": "曲阳县"
        }, {
            "code": "130635",
            "value": "蠡县"
        }, {
            "code": "130636",
            "value": "顺平县"
        }, {
            "code": "130637",
            "value": "博野县"
        }, {
            "code": "130638",
            "value": "雄县"
        }, {
            "code": "130681",
            "value": "涿州市"
        }, {
            "code": "130682",
            "value": "定州市"
        }, {
            "code": "130683",
            "value": "安国市"
        }, {
            "code": "130684",
            "value": "高碑店市"
        }]
    }, {
        "code": "1307",
        "value": "张家口市",
        "cities": [{
            "code": "130701",
            "value": "市辖区"
        }, {
            "code": "130702",
            "value": "桥东区"
        }, {
            "code": "130703",
            "value": "桥西区"
        }, {
            "code": "130705",
            "value": "宣化区"
        }, {
            "code": "130706",
            "value": "下花园区"
        }, {
            "code": "130721",
            "value": "宣化县"
        }, {
            "code": "130722",
            "value": "张北县"
        }, {
            "code": "130723",
            "value": "康保县"
        }, {
            "code": "130724",
            "value": "沽源县"
        }, {
            "code": "130725",
            "value": "尚义县"
        }, {
            "code": "130726",
            "value": "蔚县"
        }, {
            "code": "130727",
            "value": "阳原县"
        }, {
            "code": "130728",
            "value": "怀安县"
        }, {
            "code": "130729",
            "value": "万全县"
        }, {
            "code": "130730",
            "value": "怀来县"
        }, {
            "code": "130731",
            "value": "涿鹿县"
        }, {
            "code": "130732",
            "value": "赤城县"
        }, {
            "code": "130733",
            "value": "崇礼县"
        }]
    }, {
        "code": "1308",
        "value": "承德市",
        "cities": [{
            "code": "130801",
            "value": "市辖区"
        }, {
            "code": "130802",
            "value": "双桥区"
        }, {
            "code": "130803",
            "value": "双滦区"
        }, {
            "code": "130804",
            "value": "鹰手营子矿区"
        }, {
            "code": "130821",
            "value": "承德县"
        }, {
            "code": "130822",
            "value": "兴隆县"
        }, {
            "code": "130823",
            "value": "平泉县"
        }, {
            "code": "130824",
            "value": "滦平县"
        }, {
            "code": "130825",
            "value": "隆化县"
        }, {
            "code": "130826",
            "value": "丰宁县"
        }, {
            "code": "130827",
            "value": "宽城县"
        }, {
            "code": "130828",
            "value": "围场县"
        }]
    }, {
        "code": "1309",
        "value": "沧州市",
        "cities": [{
            "code": "130901",
            "value": "市辖区"
        }, {
            "code": "130902",
            "value": "新华区"
        }, {
            "code": "130903",
            "value": "运河区"
        }, {
            "code": "130921",
            "value": "沧县"
        }, {
            "code": "130922",
            "value": "青县"
        }, {
            "code": "130923",
            "value": "东光县"
        }, {
            "code": "130924",
            "value": "海兴县"
        }, {
            "code": "130925",
            "value": "盐山县"
        }, {
            "code": "130926",
            "value": "肃宁县"
        }, {
            "code": "130927",
            "value": "南皮县"
        }, {
            "code": "130928",
            "value": "吴桥县"
        }, {
            "code": "130929",
            "value": "献县"
        }, {
            "code": "130930",
            "value": "孟村县"
        }, {
            "code": "130981",
            "value": "泊头市"
        }, {
            "code": "130982",
            "value": "任丘市"
        }, {
            "code": "130983",
            "value": "黄骅市"
        }, {
            "code": "130984",
            "value": "河间市"
        }]
    }, {
        "code": "1310",
        "value": "廊坊市",
        "cities": [{
            "code": "131001",
            "value": "市辖区"
        }, {
            "code": "131002",
            "value": "安次区"
        }, {
            "code": "131003",
            "value": "广阳区"
        }, {
            "code": "131022",
            "value": "固安县"
        }, {
            "code": "131023",
            "value": "永清县"
        }, {
            "code": "131024",
            "value": "香河县"
        }, {
            "code": "131025",
            "value": "大城县"
        }, {
            "code": "131026",
            "value": "文安县"
        }, {
            "code": "131028",
            "value": "大厂县"
        }, {
            "code": "131081",
            "value": "霸州市"
        }, {
            "code": "131082",
            "value": "三河市"
        }]
    }, {
        "code": "1311",
        "value": "衡水市",
        "cities": [{
            "code": "131101",
            "value": "市辖区"
        }, {
            "code": "131102",
            "value": "桃城区"
        }, {
            "code": "131121",
            "value": "枣强县"
        }, {
            "code": "131122",
            "value": "武邑县"
        }, {
            "code": "131123",
            "value": "武强县"
        }, {
            "code": "131124",
            "value": "饶阳县"
        }, {
            "code": "131125",
            "value": "安平县"
        }, {
            "code": "131126",
            "value": "故城县"
        }, {
            "code": "131127",
            "value": "景县"
        }, {
            "code": "131128",
            "value": "阜城县"
        }, {
            "code": "131181",
            "value": "冀州市"
        }, {
            "code": "131182",
            "value": "深州市"
        }]
    }]
}, {
    "code": "14",
    "value": "山西省",
    "states": [{
        "code": "1401",
        "value": "太原市",
        "cities": [{
            "code": "140101",
            "value": "市辖区"
        }, {
            "code": "140105",
            "value": "小店区"
        }, {
            "code": "140106",
            "value": "迎泽区"
        }, {
            "code": "140107",
            "value": "杏花岭区"
        }, {
            "code": "140108",
            "value": "尖草坪区"
        }, {
            "code": "140109",
            "value": "万柏林区"
        }, {
            "code": "140110",
            "value": "晋源区"
        }, {
            "code": "140121",
            "value": "清徐县"
        }, {
            "code": "140122",
            "value": "阳曲县"
        }, {
            "code": "140123",
            "value": "娄烦县"
        }, {
            "code": "140181",
            "value": "古交市"
        }]
    }, {
        "code": "1402",
        "value": "大同市",
        "cities": [{
            "code": "140201",
            "value": "市辖区"
        }, {
            "code": "140202",
            "value": "城区"
        }, {
            "code": "140203",
            "value": "矿区"
        }, {
            "code": "140211",
            "value": "南郊区"
        }, {
            "code": "140212",
            "value": "新荣区"
        }, {
            "code": "140221",
            "value": "阳高县"
        }, {
            "code": "140222",
            "value": "天镇县"
        }, {
            "code": "140223",
            "value": "广灵县"
        }, {
            "code": "140224",
            "value": "灵丘县"
        }, {
            "code": "140225",
            "value": "浑源县"
        }, {
            "code": "140226",
            "value": "左云县"
        }, {
            "code": "140227",
            "value": "大同县"
        }]
    }, {
        "code": "1403",
        "value": "阳泉市",
        "cities": [{
            "code": "140301",
            "value": "市辖区"
        }, {
            "code": "140302",
            "value": "城区"
        }, {
            "code": "140303",
            "value": "矿区"
        }, {
            "code": "140311",
            "value": "郊区"
        }, {
            "code": "140321",
            "value": "平定县"
        }, {
            "code": "140322",
            "value": "盂县"
        }]
    }, {
        "code": "1404",
        "value": "长治市",
        "cities": [{
            "code": "140401",
            "value": "市辖区"
        }, {
            "code": "140402",
            "value": "城区"
        }, {
            "code": "140411",
            "value": "郊区"
        }, {
            "code": "140421",
            "value": "长治县"
        }, {
            "code": "140423",
            "value": "襄垣县"
        }, {
            "code": "140424",
            "value": "屯留县"
        }, {
            "code": "140425",
            "value": "平顺县"
        }, {
            "code": "140426",
            "value": "黎城县"
        }, {
            "code": "140427",
            "value": "壶关县"
        }, {
            "code": "140428",
            "value": "长子县"
        }, {
            "code": "140429",
            "value": "武乡县"
        }, {
            "code": "140430",
            "value": "沁县"
        }, {
            "code": "140431",
            "value": "沁源县"
        }, {
            "code": "140481",
            "value": "潞城市"
        }]
    }, {
        "code": "1405",
        "value": "晋城市",
        "cities": [{
            "code": "140501",
            "value": "市辖区"
        }, {
            "code": "140502",
            "value": "城区"
        }, {
            "code": "140521",
            "value": "沁水县"
        }, {
            "code": "140522",
            "value": "阳城县"
        }, {
            "code": "140524",
            "value": "陵川县"
        }, {
            "code": "140525",
            "value": "泽州县"
        }, {
            "code": "140581",
            "value": "高平市"
        }]
    }, {
        "code": "1406",
        "value": "朔州市",
        "cities": [{
            "code": "140601",
            "value": "市辖区"
        }, {
            "code": "140602",
            "value": "朔城区"
        }, {
            "code": "140603",
            "value": "平鲁区"
        }, {
            "code": "140621",
            "value": "山阴县"
        }, {
            "code": "140622",
            "value": "应县"
        }, {
            "code": "140623",
            "value": "右玉县"
        }, {
            "code": "140624",
            "value": "怀仁县"
        }]
    }, {
        "code": "1407",
        "value": "晋中市",
        "cities": [{
            "code": "140701",
            "value": "市辖区"
        }, {
            "code": "140702",
            "value": "榆次区"
        }, {
            "code": "140721",
            "value": "榆社县"
        }, {
            "code": "140722",
            "value": "左权县"
        }, {
            "code": "140723",
            "value": "和顺县"
        }, {
            "code": "140724",
            "value": "昔阳县"
        }, {
            "code": "140725",
            "value": "寿阳县"
        }, {
            "code": "140726",
            "value": "太谷县"
        }, {
            "code": "140727",
            "value": "祁县"
        }, {
            "code": "140728",
            "value": "平遥县"
        }, {
            "code": "140729",
            "value": "灵石县"
        }, {
            "code": "140781",
            "value": "介休市"
        }]
    }, {
        "code": "1408",
        "value": "运城市",
        "cities": [{
            "code": "140801",
            "value": "市辖区"
        }, {
            "code": "140802",
            "value": "盐湖区"
        }, {
            "code": "140821",
            "value": "临猗县"
        }, {
            "code": "140822",
            "value": "万荣县"
        }, {
            "code": "140823",
            "value": "闻喜县"
        }, {
            "code": "140824",
            "value": "稷山县"
        }, {
            "code": "140825",
            "value": "新绛县"
        }, {
            "code": "140826",
            "value": "绛县"
        }, {
            "code": "140827",
            "value": "垣曲县"
        }, {
            "code": "140828",
            "value": "夏县"
        }, {
            "code": "140829",
            "value": "平陆县"
        }, {
            "code": "140830",
            "value": "芮城县"
        }, {
            "code": "140881",
            "value": "永济市"
        }, {
            "code": "140882",
            "value": "河津市"
        }]
    }, {
        "code": "1409",
        "value": "忻州市",
        "cities": [{
            "code": "140901",
            "value": "市辖区"
        }, {
            "code": "140902",
            "value": "忻府区"
        }, {
            "code": "140921",
            "value": "定襄县"
        }, {
            "code": "140922",
            "value": "五台县"
        }, {
            "code": "140923",
            "value": "代县"
        }, {
            "code": "140924",
            "value": "繁峙县"
        }, {
            "code": "140925",
            "value": "宁武县"
        }, {
            "code": "140926",
            "value": "静乐县"
        }, {
            "code": "140927",
            "value": "神池县"
        }, {
            "code": "140928",
            "value": "五寨县"
        }, {
            "code": "140929",
            "value": "岢岚县"
        }, {
            "code": "140930",
            "value": "河曲县"
        }, {
            "code": "140931",
            "value": "保德县"
        }, {
            "code": "140932",
            "value": "偏关县"
        }, {
            "code": "140981",
            "value": "原平市"
        }]
    }, {
        "code": "1410",
        "value": "临汾市",
        "cities": [{
            "code": "141001",
            "value": "市辖区"
        }, {
            "code": "141002",
            "value": "尧都区"
        }, {
            "code": "141021",
            "value": "曲沃县"
        }, {
            "code": "141022",
            "value": "翼城县"
        }, {
            "code": "141023",
            "value": "襄汾县"
        }, {
            "code": "141024",
            "value": "洪洞县"
        }, {
            "code": "141025",
            "value": "古县"
        }, {
            "code": "141026",
            "value": "安泽县"
        }, {
            "code": "141027",
            "value": "浮山县"
        }, {
            "code": "141028",
            "value": "吉县"
        }, {
            "code": "141029",
            "value": "乡宁县"
        }, {
            "code": "141030",
            "value": "大宁县"
        }, {
            "code": "141031",
            "value": "隰县"
        }, {
            "code": "141032",
            "value": "永和县"
        }, {
            "code": "141033",
            "value": "蒲县"
        }, {
            "code": "141034",
            "value": "汾西县"
        }, {
            "code": "141081",
            "value": "侯马市"
        }, {
            "code": "141082",
            "value": "霍州市"
        }]
    }, {
        "code": "1411",
        "value": "吕梁市",
        "cities": [{
            "code": "141101",
            "value": "市辖区"
        }, {
            "code": "141102",
            "value": "离石区"
        }, {
            "code": "141121",
            "value": "文水县"
        }, {
            "code": "141122",
            "value": "交城县"
        }, {
            "code": "141123",
            "value": "兴县"
        }, {
            "code": "141124",
            "value": "临县"
        }, {
            "code": "141125",
            "value": "柳林县"
        }, {
            "code": "141126",
            "value": "石楼县"
        }, {
            "code": "141127",
            "value": "岚县"
        }, {
            "code": "141128",
            "value": "方山县"
        }, {
            "code": "141129",
            "value": "中阳县"
        }, {
            "code": "141130",
            "value": "交口县"
        }, {
            "code": "141181",
            "value": "孝义市"
        }, {
            "code": "141182",
            "value": "汾阳市"
        }]
    }]
}, {
    "code": "15",
    "value": "内蒙古自治区",
    "states": [{
        "code": "1501",
        "value": "呼和浩特市",
        "cities": [{
            "code": "150101",
            "value": "市辖区"
        }, {
            "code": "150102",
            "value": "新城区"
        }, {
            "code": "150103",
            "value": "回民区"
        }, {
            "code": "150104",
            "value": "玉泉区"
        }, {
            "code": "150105",
            "value": "赛罕区"
        }, {
            "code": "150121",
            "value": "土默特左旗"
        }, {
            "code": "150122",
            "value": "托克托县"
        }, {
            "code": "150123",
            "value": "和林格尔县"
        }, {
            "code": "150124",
            "value": "清水河县"
        }, {
            "code": "150125",
            "value": "武川县"
        }]
    }, {
        "code": "1502",
        "value": "包头市",
        "cities": [{
            "code": "150201",
            "value": "市辖区"
        }, {
            "code": "150202",
            "value": "东河区"
        }, {
            "code": "150203",
            "value": "昆都仑区"
        }, {
            "code": "150204",
            "value": "青山区"
        }, {
            "code": "150205",
            "value": "石拐区"
        }, {
            "code": "150206",
            "value": "白云鄂博矿区"
        }, {
            "code": "150207",
            "value": "九原区"
        }, {
            "code": "150221",
            "value": "土默特右旗"
        }, {
            "code": "150222",
            "value": "固阳县"
        }, {
            "code": "150223",
            "value": "达尔罕茂明安联合旗"
        }]
    }, {
        "code": "1503",
        "value": "乌海市",
        "cities": [{
            "code": "150301",
            "value": "市辖区"
        }, {
            "code": "150302",
            "value": "海勃湾区"
        }, {
            "code": "150303",
            "value": "海南区"
        }, {
            "code": "150304",
            "value": "乌达区"
        }]
    }, {
        "code": "1504",
        "value": "赤峰市",
        "cities": [{
            "code": "150401",
            "value": "市辖区"
        }, {
            "code": "150402",
            "value": "红山区"
        }, {
            "code": "150403",
            "value": "元宝山区"
        }, {
            "code": "150404",
            "value": "松山区"
        }, {
            "code": "150421",
            "value": "阿鲁科尔沁旗"
        }, {
            "code": "150422",
            "value": "巴林左旗"
        }, {
            "code": "150423",
            "value": "巴林右旗"
        }, {
            "code": "150424",
            "value": "林西县"
        }, {
            "code": "150425",
            "value": "克什克腾旗"
        }, {
            "code": "150426",
            "value": "翁牛特旗"
        }, {
            "code": "150428",
            "value": "喀喇沁旗"
        }, {
            "code": "150429",
            "value": "宁城县"
        }, {
            "code": "150430",
            "value": "敖汉旗"
        }]
    }, {
        "code": "1505",
        "value": "通辽市",
        "cities": [{
            "code": "150501",
            "value": "市辖区"
        }, {
            "code": "150502",
            "value": "科尔沁区"
        }, {
            "code": "150521",
            "value": "科尔沁左翼中旗"
        }, {
            "code": "150522",
            "value": "科尔沁左翼后旗"
        }, {
            "code": "150523",
            "value": "开鲁县"
        }, {
            "code": "150524",
            "value": "库伦旗"
        }, {
            "code": "150525",
            "value": "奈曼旗"
        }, {
            "code": "150526",
            "value": "扎鲁特旗"
        }, {
            "code": "150581",
            "value": "霍林郭勒市"
        }]
    }, {
        "code": "1506",
        "value": "鄂尔多斯市",
        "cities": [{
            "code": "150601",
            "value": "市辖区"
        }, {
            "code": "150602",
            "value": "东胜区"
        }, {
            "code": "150621",
            "value": "达拉特旗"
        }, {
            "code": "150622",
            "value": "准格尔旗"
        }, {
            "code": "150623",
            "value": "鄂托克前旗"
        }, {
            "code": "150624",
            "value": "鄂托克旗"
        }, {
            "code": "150625",
            "value": "杭锦旗"
        }, {
            "code": "150626",
            "value": "乌审旗"
        }, {
            "code": "150627",
            "value": "伊金霍洛旗"
        }]
    }, {
        "code": "1507",
        "value": "呼伦贝尔市",
        "cities": [{
            "code": "150701",
            "value": "市辖区"
        }, {
            "code": "150702",
            "value": "海拉尔区"
        }, {
            "code": "150703",
            "value": "扎赉诺尔区"
        }, {
            "code": "150721",
            "value": "阿荣旗"
        }, {
            "code": "150722",
            "value": "莫力达瓦达斡尔族自治旗"
        }, {
            "code": "150723",
            "value": "鄂伦春自治旗"
        }, {
            "code": "150724",
            "value": "鄂温克族自治旗"
        }, {
            "code": "150725",
            "value": "陈巴尔虎旗"
        }, {
            "code": "150726",
            "value": "新巴尔虎左旗"
        }, {
            "code": "150727",
            "value": "新巴尔虎右旗"
        }, {
            "code": "150781",
            "value": "满洲里市"
        }, {
            "code": "150782",
            "value": "牙克石市"
        }, {
            "code": "150783",
            "value": "扎兰屯市"
        }, {
            "code": "150784",
            "value": "额尔古纳市"
        }, {
            "code": "150785",
            "value": "根河市"
        }]
    }, {
        "code": "1508",
        "value": "巴彦淖尔市",
        "cities": [{
            "code": "150801",
            "value": "市辖区"
        }, {
            "code": "150802",
            "value": "临河区"
        }, {
            "code": "150821",
            "value": "五原县"
        }, {
            "code": "150822",
            "value": "磴口县"
        }, {
            "code": "150823",
            "value": "乌拉特前旗"
        }, {
            "code": "150824",
            "value": "乌拉特中旗"
        }, {
            "code": "150825",
            "value": "乌拉特后旗"
        }, {
            "code": "150826",
            "value": "杭锦后旗"
        }]
    }, {
        "code": "1509",
        "value": "乌兰察布市",
        "cities": [{
            "code": "150901",
            "value": "市辖区"
        }, {
            "code": "150902",
            "value": "集宁区"
        }, {
            "code": "150921",
            "value": "卓资县"
        }, {
            "code": "150922",
            "value": "化德县"
        }, {
            "code": "150923",
            "value": "商都县"
        }, {
            "code": "150924",
            "value": "兴和县"
        }, {
            "code": "150925",
            "value": "凉城县"
        }, {
            "code": "150926",
            "value": "察哈尔右翼前旗"
        }, {
            "code": "150927",
            "value": "察哈尔右翼中旗"
        }, {
            "code": "150928",
            "value": "察哈尔右翼后旗"
        }, {
            "code": "150929",
            "value": "四子王旗"
        }, {
            "code": "150981",
            "value": "丰镇市"
        }]
    }, {
        "code": "1522",
        "value": "兴安盟",
        "cities": [{
            "code": "152201",
            "value": "乌兰浩特市"
        }, {
            "code": "152202",
            "value": "阿尔山市"
        }, {
            "code": "152221",
            "value": "科尔沁右翼前旗"
        }, {
            "code": "152222",
            "value": "科尔沁右翼中旗"
        }, {
            "code": "152223",
            "value": "扎赉特旗"
        }, {
            "code": "152224",
            "value": "突泉县"
        }]
    }, {
        "code": "1525",
        "value": "锡林郭勒盟",
        "cities": [{
            "code": "152501",
            "value": "二连浩特市"
        }, {
            "code": "152502",
            "value": "锡林浩特市"
        }, {
            "code": "152522",
            "value": "阿巴嘎旗"
        }, {
            "code": "152523",
            "value": "苏尼特左旗"
        }, {
            "code": "152524",
            "value": "苏尼特右旗"
        }, {
            "code": "152525",
            "value": "东乌珠穆沁旗"
        }, {
            "code": "152526",
            "value": "西乌珠穆沁旗"
        }, {
            "code": "152527",
            "value": "太仆寺旗"
        }, {
            "code": "152528",
            "value": "镶黄旗"
        }, {
            "code": "152529",
            "value": "正镶白旗"
        }, {
            "code": "152530",
            "value": "正蓝旗"
        }, {
            "code": "152531",
            "value": "多伦县"
        }]
    }, {
        "code": "1529",
        "value": "阿拉善盟",
        "cities": [{
            "code": "152921",
            "value": "阿拉善左旗"
        }, {
            "code": "152922",
            "value": "阿拉善右旗"
        }, {
            "code": "152923",
            "value": "额济纳旗"
        }]
    }]
}, {
    "code": "21",
    "value": "辽宁省",
    "states": [{
        "code": "2101",
        "value": "沈阳市",
        "cities": [{
            "code": "210101",
            "value": "市辖区"
        }, {
            "code": "210102",
            "value": "和平区"
        }, {
            "code": "210103",
            "value": "沈河区"
        }, {
            "code": "210104",
            "value": "大东区"
        }, {
            "code": "210105",
            "value": "皇姑区"
        }, {
            "code": "210106",
            "value": "铁西区"
        }, {
            "code": "210111",
            "value": "苏家屯区"
        }, {
            "code": "210112",
            "value": "东陵区"
        }, {
            "code": "210113",
            "value": "沈北新区"
        }, {
            "code": "210114",
            "value": "于洪区"
        }, {
            "code": "210122",
            "value": "辽中县"
        }, {
            "code": "210123",
            "value": "康平县"
        }, {
            "code": "210124",
            "value": "法库县"
        }, {
            "code": "210181",
            "value": "新民市"
        }]
    }, {
        "code": "2102",
        "value": "大连市",
        "cities": [{
            "code": "210201",
            "value": "市辖区"
        }, {
            "code": "210202",
            "value": "中山区"
        }, {
            "code": "210203",
            "value": "西岗区"
        }, {
            "code": "210204",
            "value": "沙河口区"
        }, {
            "code": "210211",
            "value": "甘井子区"
        }, {
            "code": "210212",
            "value": "旅顺口区"
        }, {
            "code": "210213",
            "value": "金州区"
        }, {
            "code": "210224",
            "value": "长海县"
        }, {
            "code": "210281",
            "value": "瓦房店市"
        }, {
            "code": "210282",
            "value": "普兰店市"
        }, {
            "code": "210283",
            "value": "庄河市"
        }]
    }, {
        "code": "2103",
        "value": "鞍山市",
        "cities": [{
            "code": "210301",
            "value": "市辖区"
        }, {
            "code": "210302",
            "value": "铁东区"
        }, {
            "code": "210303",
            "value": "铁西区"
        }, {
            "code": "210304",
            "value": "立山区"
        }, {
            "code": "210311",
            "value": "千山区"
        }, {
            "code": "210321",
            "value": "台安县"
        }, {
            "code": "210323",
            "value": "岫岩县"
        }, {
            "code": "210381",
            "value": "海城市"
        }]
    }, {
        "code": "2104",
        "value": "抚顺市",
        "cities": [{
            "code": "210401",
            "value": "市辖区"
        }, {
            "code": "210402",
            "value": "新抚区"
        }, {
            "code": "210403",
            "value": "东洲区"
        }, {
            "code": "210404",
            "value": "望花区"
        }, {
            "code": "210411",
            "value": "顺城区"
        }, {
            "code": "210421",
            "value": "抚顺县"
        }, {
            "code": "210422",
            "value": "新宾县"
        }, {
            "code": "210423",
            "value": "清原县"
        }]
    }, {
        "code": "2105",
        "value": "本溪市",
        "cities": [{
            "code": "210501",
            "value": "市辖区"
        }, {
            "code": "210502",
            "value": "平山区"
        }, {
            "code": "210503",
            "value": "溪湖区"
        }, {
            "code": "210504",
            "value": "明山区"
        }, {
            "code": "210505",
            "value": "南芬区"
        }, {
            "code": "210521",
            "value": "本溪县"
        }, {
            "code": "210522",
            "value": "桓仁县"
        }]
    }, {
        "code": "2106",
        "value": "丹东市",
        "cities": [{
            "code": "210601",
            "value": "市辖区"
        }, {
            "code": "210602",
            "value": "元宝区"
        }, {
            "code": "210603",
            "value": "振兴区"
        }, {
            "code": "210604",
            "value": "振安区"
        }, {
            "code": "210624",
            "value": "宽甸县"
        }, {
            "code": "210681",
            "value": "东港市"
        }, {
            "code": "210682",
            "value": "凤城市"
        }]
    }, {
        "code": "2107",
        "value": "锦州市",
        "cities": [{
            "code": "210701",
            "value": "市辖区"
        }, {
            "code": "210702",
            "value": "古塔区"
        }, {
            "code": "210703",
            "value": "凌河区"
        }, {
            "code": "210711",
            "value": "太和区"
        }, {
            "code": "210726",
            "value": "黑山县"
        }, {
            "code": "210727",
            "value": "义县"
        }, {
            "code": "210781",
            "value": "凌海市"
        }, {
            "code": "210782",
            "value": "北镇市"
        }]
    }, {
        "code": "2108",
        "value": "营口市",
        "cities": [{
            "code": "210801",
            "value": "市辖区"
        }, {
            "code": "210802",
            "value": "站前区"
        }, {
            "code": "210803",
            "value": "西市区"
        }, {
            "code": "210804",
            "value": "鲅鱼圈区"
        }, {
            "code": "210811",
            "value": "老边区"
        }, {
            "code": "210881",
            "value": "盖州市"
        }, {
            "code": "210882",
            "value": "大石桥市"
        }]
    }, {
        "code": "2109",
        "value": "阜新市",
        "cities": [{
            "code": "210901",
            "value": "市辖区"
        }, {
            "code": "210902",
            "value": "海州区"
        }, {
            "code": "210903",
            "value": "新邱区"
        }, {
            "code": "210904",
            "value": "太平区"
        }, {
            "code": "210905",
            "value": "清河门区"
        }, {
            "code": "210911",
            "value": "细河区"
        }, {
            "code": "210921",
            "value": "阜新县"
        }, {
            "code": "210922",
            "value": "彰武县"
        }]
    }, {
        "code": "2110",
        "value": "辽阳市",
        "cities": [{
            "code": "211001",
            "value": "市辖区"
        }, {
            "code": "211002",
            "value": "白塔区"
        }, {
            "code": "211003",
            "value": "文圣区"
        }, {
            "code": "211004",
            "value": "宏伟区"
        }, {
            "code": "211005",
            "value": "弓长岭区"
        }, {
            "code": "211011",
            "value": "太子河区"
        }, {
            "code": "211021",
            "value": "辽阳县"
        }, {
            "code": "211081",
            "value": "灯塔市"
        }]
    }, {
        "code": "2111",
        "value": "盘锦市",
        "cities": [{
            "code": "211101",
            "value": "市辖区"
        }, {
            "code": "211102",
            "value": "双台子区"
        }, {
            "code": "211103",
            "value": "兴隆台区"
        }, {
            "code": "211121",
            "value": "大洼县"
        }, {
            "code": "211122",
            "value": "盘山县"
        }]
    }, {
        "code": "2112",
        "value": "铁岭市",
        "cities": [{
            "code": "211201",
            "value": "市辖区"
        }, {
            "code": "211202",
            "value": "银州区"
        }, {
            "code": "211204",
            "value": "清河区"
        }, {
            "code": "211221",
            "value": "铁岭县"
        }, {
            "code": "211223",
            "value": "西丰县"
        }, {
            "code": "211224",
            "value": "昌图县"
        }, {
            "code": "211281",
            "value": "调兵山市"
        }, {
            "code": "211282",
            "value": "开原市"
        }]
    }, {
        "code": "2113",
        "value": "朝阳市",
        "cities": [{
            "code": "211301",
            "value": "市辖区"
        }, {
            "code": "211302",
            "value": "双塔区"
        }, {
            "code": "211303",
            "value": "龙城区"
        }, {
            "code": "211321",
            "value": "朝阳县"
        }, {
            "code": "211322",
            "value": "建平县"
        }, {
            "code": "211324",
            "value": "喀喇沁左翼县"
        }, {
            "code": "211381",
            "value": "北票市"
        }, {
            "code": "211382",
            "value": "凌源市"
        }]
    }, {
        "code": "2114",
        "value": "葫芦岛市",
        "cities": [{
            "code": "211401",
            "value": "市辖区"
        }, {
            "code": "211402",
            "value": "连山区"
        }, {
            "code": "211403",
            "value": "龙港区"
        }, {
            "code": "211404",
            "value": "南票区"
        }, {
            "code": "211421",
            "value": "绥中县"
        }, {
            "code": "211422",
            "value": "建昌县"
        }, {
            "code": "211481",
            "value": "兴城市"
        }]
    }]
}, {
    "code": "22",
    "value": "吉林省",
    "states": [{
        "code": "2201",
        "value": "长春市",
        "cities": [{
            "code": "220101",
            "value": "市辖区"
        }, {
            "code": "220102",
            "value": "南关区"
        }, {
            "code": "220103",
            "value": "宽城区"
        }, {
            "code": "220104",
            "value": "朝阳区"
        }, {
            "code": "220105",
            "value": "二道区"
        }, {
            "code": "220106",
            "value": "绿园区"
        }, {
            "code": "220112",
            "value": "双阳区"
        }, {
            "code": "220113",
            "value": "经济技术开发区"
        }, {
            "code": "220114",
            "value": "高新技术开发区"
        }, {
            "code": "220122",
            "value": "农安县"
        }, {
            "code": "220181",
            "value": "九台市"
        }, {
            "code": "220182",
            "value": "榆树市"
        }, {
            "code": "220183",
            "value": "德惠市"
        }]
    }, {
        "code": "2202",
        "value": "吉林市",
        "cities": [{
            "code": "220201",
            "value": "市辖区"
        }, {
            "code": "220202",
            "value": "昌邑区"
        }, {
            "code": "220203",
            "value": "龙潭区"
        }, {
            "code": "220204",
            "value": "船营区"
        }, {
            "code": "220205",
            "value": "经济技术开发区"
        }, {
            "code": "220206",
            "value": "高新技术开发区"
        }, {
            "code": "220211",
            "value": "丰满区"
        }, {
            "code": "220221",
            "value": "永吉县"
        }, {
            "code": "220281",
            "value": "蛟河市"
        }, {
            "code": "220282",
            "value": "桦甸市"
        }, {
            "code": "220283",
            "value": "舒兰市"
        }, {
            "code": "220284",
            "value": "磐石市"
        }]
    }, {
        "code": "2203",
        "value": "四平市",
        "cities": [{
            "code": "220301",
            "value": "市辖区"
        }, {
            "code": "220302",
            "value": "铁西区"
        }, {
            "code": "220303",
            "value": "铁东区"
        }, {
            "code": "220322",
            "value": "梨树县"
        }, {
            "code": "220323",
            "value": "伊通县"
        }, {
            "code": "220381",
            "value": "公主岭市"
        }, {
            "code": "220382",
            "value": "双辽市"
        }]
    }, {
        "code": "2204",
        "value": "辽源市",
        "cities": [{
            "code": "220401",
            "value": "市辖区"
        }, {
            "code": "220402",
            "value": "龙山区"
        }, {
            "code": "220403",
            "value": "西安区"
        }, {
            "code": "220421",
            "value": "东丰县"
        }, {
            "code": "220422",
            "value": "东辽县"
        }]
    }, {
        "code": "2205",
        "value": "通化市",
        "cities": [{
            "code": "220501",
            "value": "市辖区"
        }, {
            "code": "220502",
            "value": "东昌区"
        }, {
            "code": "220503",
            "value": "二道江区"
        }, {
            "code": "220521",
            "value": "通化县"
        }, {
            "code": "220523",
            "value": "辉南县"
        }, {
            "code": "220524",
            "value": "柳河县"
        }, {
            "code": "220581",
            "value": "梅河口市"
        }, {
            "code": "220582",
            "value": "集安市"
        }]
    }, {
        "code": "2206",
        "value": "白山市",
        "cities": [{
            "code": "220601",
            "value": "市辖区"
        }, {
            "code": "220602",
            "value": "浑江区"
        }, {
            "code": "220605",
            "value": "江源区"
        }, {
            "code": "220621",
            "value": "抚松县"
        }, {
            "code": "220622",
            "value": "靖宇县"
        }, {
            "code": "220623",
            "value": "长白县"
        }, {
            "code": "220681",
            "value": "临江市"
        }]
    }, {
        "code": "2207",
        "value": "松原市",
        "cities": [{
            "code": "220701",
            "value": "市辖区"
        }, {
            "code": "220702",
            "value": "宁江区"
        }, {
            "code": "220721",
            "value": "前郭尔罗斯县"
        }, {
            "code": "220722",
            "value": "长岭县"
        }, {
            "code": "220723",
            "value": "乾安县"
        }, {
            "code": "220724",
            "value": "扶余市"
        }]
    }, {
        "code": "2208",
        "value": "白城市",
        "cities": [{
            "code": "220801",
            "value": "市辖区"
        }, {
            "code": "220802",
            "value": "洮北区"
        }, {
            "code": "220821",
            "value": "镇赉县"
        }, {
            "code": "220822",
            "value": "通榆县"
        }, {
            "code": "220881",
            "value": "洮南市"
        }, {
            "code": "220882",
            "value": "大安市"
        }]
    }, {
        "code": "2224",
        "value": "延边朝鲜族自治州",
        "cities": [{
            "code": "222401",
            "value": "延吉市"
        }, {
            "code": "222402",
            "value": "图们市"
        }, {
            "code": "222403",
            "value": "敦化市"
        }, {
            "code": "222404",
            "value": "珲春市"
        }, {
            "code": "222405",
            "value": "龙井市"
        }, {
            "code": "222406",
            "value": "和龙市"
        }, {
            "code": "222424",
            "value": "汪清县"
        }, {
            "code": "222426",
            "value": "安图县"
        }]
    }]
}, {
    "code": "23",
    "value": "黑龙江省",
    "states": [{
        "code": "2301",
        "value": "哈尔滨市",
        "cities": [{
            "code": "230101",
            "value": "市辖区"
        }, {
            "code": "230102",
            "value": "道里区"
        }, {
            "code": "230103",
            "value": "南岗区"
        }, {
            "code": "230104",
            "value": "道外区"
        }, {
            "code": "230108",
            "value": "平房区"
        }, {
            "code": "230109",
            "value": "松北区"
        }, {
            "code": "230110",
            "value": "香坊区"
        }, {
            "code": "230111",
            "value": "呼兰区"
        }, {
            "code": "230112",
            "value": "阿城区"
        }, {
            "code": "230123",
            "value": "依兰县"
        }, {
            "code": "230124",
            "value": "方正县"
        }, {
            "code": "230125",
            "value": "宾县"
        }, {
            "code": "230126",
            "value": "巴彦县"
        }, {
            "code": "230127",
            "value": "木兰县"
        }, {
            "code": "230128",
            "value": "通河县"
        }, {
            "code": "230129",
            "value": "延寿县"
        }, {
            "code": "230182",
            "value": "双城市"
        }, {
            "code": "230183",
            "value": "尚志市"
        }, {
            "code": "230184",
            "value": "五常市"
        }]
    }, {
        "code": "2302",
        "value": "齐齐哈尔市",
        "cities": [{
            "code": "230201",
            "value": "市辖区"
        }, {
            "code": "230202",
            "value": "龙沙区"
        }, {
            "code": "230203",
            "value": "建华区"
        }, {
            "code": "230204",
            "value": "铁锋区"
        }, {
            "code": "230205",
            "value": "昂昂溪区"
        }, {
            "code": "230206",
            "value": "富拉尔基区"
        }, {
            "code": "230207",
            "value": "碾子山区"
        }, {
            "code": "230208",
            "value": "梅里斯达斡尔族区"
        }, {
            "code": "230221",
            "value": "龙江县"
        }, {
            "code": "230223",
            "value": "依安县"
        }, {
            "code": "230224",
            "value": "泰来县"
        }, {
            "code": "230225",
            "value": "甘南县"
        }, {
            "code": "230227",
            "value": "富裕县"
        }, {
            "code": "230229",
            "value": "克山县"
        }, {
            "code": "230230",
            "value": "克东县"
        }, {
            "code": "230231",
            "value": "拜泉县"
        }, {
            "code": "230281",
            "value": "讷河市"
        }]
    }, {
        "code": "2303",
        "value": "鸡西市",
        "cities": [{
            "code": "230301",
            "value": "市辖区"
        }, {
            "code": "230302",
            "value": "鸡冠区"
        }, {
            "code": "230303",
            "value": "恒山区"
        }, {
            "code": "230304",
            "value": "滴道区"
        }, {
            "code": "230305",
            "value": "梨树区"
        }, {
            "code": "230306",
            "value": "城子河区"
        }, {
            "code": "230307",
            "value": "麻山区"
        }, {
            "code": "230321",
            "value": "鸡东县"
        }, {
            "code": "230381",
            "value": "虎林市"
        }, {
            "code": "230382",
            "value": "密山市"
        }]
    }, {
        "code": "2304",
        "value": "鹤岗市",
        "cities": [{
            "code": "230401",
            "value": "市辖区"
        }, {
            "code": "230402",
            "value": "向阳区"
        }, {
            "code": "230403",
            "value": "工农区"
        }, {
            "code": "230404",
            "value": "南山区"
        }, {
            "code": "230405",
            "value": "兴安区"
        }, {
            "code": "230406",
            "value": "东山区"
        }, {
            "code": "230407",
            "value": "兴山区"
        }, {
            "code": "230421",
            "value": "萝北县"
        }, {
            "code": "230422",
            "value": "绥滨县"
        }]
    }, {
        "code": "2305",
        "value": "双鸭山市",
        "cities": [{
            "code": "230501",
            "value": "市辖区"
        }, {
            "code": "230502",
            "value": "尖山区"
        }, {
            "code": "230503",
            "value": "岭东区"
        }, {
            "code": "230505",
            "value": "四方台区"
        }, {
            "code": "230506",
            "value": "宝山区"
        }, {
            "code": "230521",
            "value": "集贤县"
        }, {
            "code": "230522",
            "value": "友谊县"
        }, {
            "code": "230523",
            "value": "宝清县"
        }, {
            "code": "230524",
            "value": "饶河县"
        }]
    }, {
        "code": "2306",
        "value": "大庆市",
        "cities": [{
            "code": "230601",
            "value": "市辖区"
        }, {
            "code": "230602",
            "value": "萨尔图区"
        }, {
            "code": "230603",
            "value": "龙凤区"
        }, {
            "code": "230604",
            "value": "让胡路区"
        }, {
            "code": "230605",
            "value": "红岗区"
        }, {
            "code": "230606",
            "value": "大同区"
        }, {
            "code": "230621",
            "value": "肇州县"
        }, {
            "code": "230622",
            "value": "肇源县"
        }, {
            "code": "230623",
            "value": "林甸县"
        }, {
            "code": "230624",
            "value": "杜尔伯特县"
        }]
    }, {
        "code": "2307",
        "value": "伊春市",
        "cities": [{
            "code": "230701",
            "value": "市辖区"
        }, {
            "code": "230702",
            "value": "伊春区"
        }, {
            "code": "230703",
            "value": "南岔区"
        }, {
            "code": "230704",
            "value": "友好区"
        }, {
            "code": "230705",
            "value": "西林区"
        }, {
            "code": "230706",
            "value": "翠峦区"
        }, {
            "code": "230707",
            "value": "新青区"
        }, {
            "code": "230708",
            "value": "美溪区"
        }, {
            "code": "230709",
            "value": "金山屯区"
        }, {
            "code": "230710",
            "value": "五营区"
        }, {
            "code": "230711",
            "value": "乌马河区"
        }, {
            "code": "230712",
            "value": "汤旺河区"
        }, {
            "code": "230713",
            "value": "带岭区"
        }, {
            "code": "230714",
            "value": "乌伊岭区"
        }, {
            "code": "230715",
            "value": "红星区"
        }, {
            "code": "230716",
            "value": "上甘岭区"
        }, {
            "code": "230722",
            "value": "嘉荫县"
        }, {
            "code": "230781",
            "value": "铁力市"
        }]
    }, {
        "code": "2308",
        "value": "佳木斯市",
        "cities": [{
            "code": "230801",
            "value": "市辖区"
        }, {
            "code": "230803",
            "value": "向阳区"
        }, {
            "code": "230804",
            "value": "前进区"
        }, {
            "code": "230805",
            "value": "东风区"
        }, {
            "code": "230811",
            "value": "郊区"
        }, {
            "code": "230822",
            "value": "桦南县"
        }, {
            "code": "230826",
            "value": "桦川县"
        }, {
            "code": "230828",
            "value": "汤原县"
        }, {
            "code": "230833",
            "value": "抚远县"
        }, {
            "code": "230881",
            "value": "同江市"
        }, {
            "code": "230882",
            "value": "富锦市"
        }]
    }, {
        "code": "2309",
        "value": "七台河市",
        "cities": [{
            "code": "230901",
            "value": "市辖区"
        }, {
            "code": "230902",
            "value": "新兴区"
        }, {
            "code": "230903",
            "value": "桃山区"
        }, {
            "code": "230904",
            "value": "茄子河区"
        }, {
            "code": "230921",
            "value": "勃利县"
        }]
    }, {
        "code": "2310",
        "value": "牡丹江市",
        "cities": [{
            "code": "231001",
            "value": "市辖区"
        }, {
            "code": "231002",
            "value": "东安区"
        }, {
            "code": "231003",
            "value": "阳明区"
        }, {
            "code": "231004",
            "value": "爱民区"
        }, {
            "code": "231005",
            "value": "西安区"
        }, {
            "code": "231024",
            "value": "东宁县"
        }, {
            "code": "231025",
            "value": "林口县"
        }, {
            "code": "231081",
            "value": "绥芬河市"
        }, {
            "code": "231083",
            "value": "海林市"
        }, {
            "code": "231084",
            "value": "宁安市"
        }, {
            "code": "231085",
            "value": "穆棱市"
        }]
    }, {
        "code": "2311",
        "value": "黑河市",
        "cities": [{
            "code": "231101",
            "value": "市辖区"
        }, {
            "code": "231102",
            "value": "爱辉区"
        }, {
            "code": "231121",
            "value": "嫩江县"
        }, {
            "code": "231123",
            "value": "逊克县"
        }, {
            "code": "231124",
            "value": "孙吴县"
        }, {
            "code": "231181",
            "value": "北安市"
        }, {
            "code": "231182",
            "value": "五大连池市"
        }]
    }, {
        "code": "2312",
        "value": "绥化市",
        "cities": [{
            "code": "231201",
            "value": "市辖区"
        }, {
            "code": "231202",
            "value": "北林区"
        }, {
            "code": "231221",
            "value": "望奎县"
        }, {
            "code": "231222",
            "value": "兰西县"
        }, {
            "code": "231223",
            "value": "青冈县"
        }, {
            "code": "231224",
            "value": "庆安县"
        }, {
            "code": "231225",
            "value": "明水县"
        }, {
            "code": "231226",
            "value": "绥棱县"
        }, {
            "code": "231281",
            "value": "安达市"
        }, {
            "code": "231282",
            "value": "肇东市"
        }, {
            "code": "231283",
            "value": "海伦市"
        }]
    }, {
        "code": "2327",
        "value": "大兴安岭地区",
        "cities": [{
            "code": "232721",
            "value": "呼玛县"
        }, {
            "code": "232722",
            "value": "塔河县"
        }, {
            "code": "232723",
            "value": "漠河县"
        }]
    }, {
        "code": "2350",
        "value": "省农垦总局",
        "cities": []
    }, {
        "code": "2351",
        "value": "黑龙江省农垦绥化管理局",
        "cities": [{
            "code": "235101",
            "value": "肇源农场"
        }, {
            "code": "235102",
            "value": "安达农牧场"
        }, {
            "code": "235103",
            "value": "红光农场"
        }, {
            "code": "235104",
            "value": "嘉荫农场"
        }, {
            "code": "235105",
            "value": "绥棱农场"
        }, {
            "code": "235106",
            "value": "和平种畜场"
        }, {
            "code": "235107",
            "value": "海伦农场"
        }, {
            "code": "235108",
            "value": "铁力农场"
        }]
    }, {
        "code": "2352",
        "value": "黑龙江省农垦宝泉岭管理局",
        "cities": [{
            "code": "235201",
            "value": "新华农场"
        }, {
            "code": "235202",
            "value": "江滨农场"
        }, {
            "code": "235203",
            "value": "军川农场"
        }, {
            "code": "235204",
            "value": "汤原农场"
        }, {
            "code": "235205",
            "value": "梧桐河农场"
        }, {
            "code": "235206",
            "value": "绥滨农场"
        }, {
            "code": "235207",
            "value": "宝泉岭农场"
        }, {
            "code": "235208",
            "value": "普阳农场"
        }, {
            "code": "235209",
            "value": "共青农场"
        }, {
            "code": "235210",
            "value": "名出农场"
        }, {
            "code": "235211",
            "value": "依兰农场"
        }, {
            "code": "235212",
            "value": "延军农场"
        }, {
            "code": "235213",
            "value": "二九Ｏ农场"
        }]
    }, {
        "code": "2353",
        "value": "黑龙江省农垦建三江管理局",
        "cities": [{
            "code": "235301",
            "value": "大兴农场"
        }, {
            "code": "235302",
            "value": "红卫农场"
        }, {
            "code": "235303",
            "value": "八五九农场"
        }, {
            "code": "235304",
            "value": "前进农场"
        }, {
            "code": "235305",
            "value": "青龙山农场"
        }, {
            "code": "235306",
            "value": "前锋农场"
        }, {
            "code": "235307",
            "value": "七星农场"
        }, {
            "code": "235308",
            "value": "创业农场"
        }, {
            "code": "235309",
            "value": "胜利农场"
        }, {
            "code": "235310",
            "value": "二道河农场"
        }, {
            "code": "235311",
            "value": "洪河农场"
        }, {
            "code": "235312",
            "value": "鸭绿河农场"
        }, {
            "code": "235313",
            "value": "浓江农场"
        }, {
            "code": "235314",
            "value": "前哨农场"
        }]
    }, {
        "code": "2354",
        "value": "黑龙江省农垦红兴隆管理局",
        "cities": [{
            "code": "235401",
            "value": "八五二农场"
        }, {
            "code": "235402",
            "value": "友谊农场"
        }, {
            "code": "235403",
            "value": "八五三农场"
        }, {
            "code": "235404",
            "value": "红旗岭农场"
        }, {
            "code": "235405",
            "value": "二九一农场"
        }, {
            "code": "235406",
            "value": "江川农场"
        }, {
            "code": "235407",
            "value": "北兴农场"
        }, {
            "code": "235408",
            "value": "五九七农场"
        }, {
            "code": "235409",
            "value": "饶河农场"
        }, {
            "code": "235410",
            "value": "双鸭山农场"
        }, {
            "code": "235411",
            "value": "曙光农场"
        }, {
            "code": "235412",
            "value": "宝山农场"
        }]
    }, {
        "code": "2355",
        "value": "黑龙江省农垦牡丹江管理局",
        "cities": [{
            "code": "235501",
            "value": "八五七农场"
        }, {
            "code": "235502",
            "value": "八五五农场"
        }, {
            "code": "235503",
            "value": "八五一Ｏ农场"
        }, {
            "code": "235504",
            "value": "八五Ｏ农场"
        }, {
            "code": "235505",
            "value": "八五八农场"
        }, {
            "code": "235506",
            "value": "庆丰农场"
        }, {
            "code": "235507",
            "value": "海林农场"
        }, {
            "code": "235508",
            "value": "兴凯湖农场"
        }, {
            "code": "235509",
            "value": "龙头农场"
        }, {
            "code": "235510",
            "value": "八五一一农场"
        }, {
            "code": "235511",
            "value": "云山农场"
        }, {
            "code": "235512",
            "value": "八五六农场"
        }, {
            "code": "235513",
            "value": "八五四农场"
        }, {
            "code": "235514",
            "value": "宁安农场"
        }]
    }, {
        "code": "2356",
        "value": "黑龙江省农垦北安管理局",
        "cities": [{
            "code": "235601",
            "value": "赵光农场"
        }, {
            "code": "235602",
            "value": "红星农场"
        }, {
            "code": "235603",
            "value": "建设农场"
        }, {
            "code": "235604",
            "value": "龙镇农场"
        }, {
            "code": "235605",
            "value": "格球山农场"
        }, {
            "code": "235606",
            "value": "红色边疆农场"
        }, {
            "code": "235607",
            "value": "锦河农场"
        }, {
            "code": "235608",
            "value": "长水河农场"
        }, {
            "code": "235609",
            "value": "龙门农场"
        }, {
            "code": "235610",
            "value": "引龙河农场"
        }, {
            "code": "235611",
            "value": "尾山农场"
        }, {
            "code": "235612",
            "value": "襄河农场"
        }, {
            "code": "235613",
            "value": "逊克农场"
        }]
    }, {
        "code": "2357",
        "value": "黑龙江省农垦九三管理局",
        "cities": [{
            "code": "235701",
            "value": "跃进农场"
        }, {
            "code": "235702",
            "value": "尖山农场"
        }, {
            "code": "235703",
            "value": "红五月农场"
        }, {
            "code": "235704",
            "value": "七星泡农场"
        }, {
            "code": "235705",
            "value": "建边农场"
        }, {
            "code": "235706",
            "value": "鹤山农场"
        }, {
            "code": "235707",
            "value": "荣军农场"
        }, {
            "code": "235708",
            "value": "大西江农场"
        }, {
            "code": "235709",
            "value": "嫩江农场"
        }, {
            "code": "235710",
            "value": "山河农场"
        }, {
            "code": "235711",
            "value": "嫩北农场"
        }]
    }, {
        "code": "2358",
        "value": "黑龙江省农垦齐齐哈尔管理局",
        "cities": [{
            "code": "235801",
            "value": "查哈阳农场"
        }, {
            "code": "235802",
            "value": "富裕牧场"
        }, {
            "code": "235803",
            "value": "绿色草原牧场"
        }, {
            "code": "235804",
            "value": "长吉岗农场"
        }, {
            "code": "235805",
            "value": "克山农场"
        }, {
            "code": "235806",
            "value": "依安农场"
        }, {
            "code": "235807",
            "value": "巨浪牧场"
        }, {
            "code": "235808",
            "value": "泰来农场"
        }]
    }, {
        "code": "2359",
        "value": "黑龙江省农垦哈尔滨管理局",
        "cities": [{
            "code": "235901",
            "value": "青年农场"
        }, {
            "code": "235902",
            "value": "阎家岗农场"
        }, {
            "code": "235903",
            "value": "庆阳农场"
        }, {
            "code": "235904",
            "value": "红旗农场"
        }, {
            "code": "235905",
            "value": "香坊农场"
        }, {
            "code": "235906",
            "value": "岔林河农场"
        }, {
            "code": "235907",
            "value": "沙河农场"
        }]
    }, {
        "code": "2360",
        "value": "省森工总局",
        "cities": []
    }, {
        "code": "2361",
        "value": "松花江林业管理局",
        "cities": [{
            "code": "236101",
            "value": "兴隆林业局"
        }, {
            "code": "236102",
            "value": "山河屯林业局"
        }, {
            "code": "236103",
            "value": "通北林业局"
        }, {
            "code": "236104",
            "value": "清河林业局"
        }, {
            "code": "236105",
            "value": "苇河林业局"
        }, {
            "code": "236106",
            "value": "亚布力林业局"
        }, {
            "code": "236107",
            "value": "方正林业局"
        }, {
            "code": "236108",
            "value": "沾河林业局"
        }, {
            "code": "236109",
            "value": "绥棱林业局"
        }]
    }, {
        "code": "2362",
        "value": "牡丹江林业管理局",
        "cities": [{
            "code": "236201",
            "value": "大海林林业局"
        }, {
            "code": "236202",
            "value": "海林林业局"
        }, {
            "code": "236203",
            "value": "柴河林业局"
        }, {
            "code": "236204",
            "value": "东方红林业局"
        }, {
            "code": "236205",
            "value": "东京城林业局"
        }, {
            "code": "236206",
            "value": "林口林业局"
        }, {
            "code": "236207",
            "value": "绥阳林业局"
        }, {
            "code": "236208",
            "value": "八面通林业局"
        }, {
            "code": "236209",
            "value": "穆棱林业局"
        }, {
            "code": "236210",
            "value": "迎春林业局"
        }]
    }, {
        "code": "2363",
        "value": "合江林业管理局",
        "cities": [{
            "code": "236301",
            "value": "双鸭山林业局"
        }, {
            "code": "236302",
            "value": "鹤立林业局"
        }, {
            "code": "236303",
            "value": "桦南林业局"
        }, {
            "code": "236304",
            "value": "鹤北林业局"
        }]
    }, {
        "code": "2364",
        "value": "伊春林管局",
        "cities": [{
            "code": "236401",
            "value": "上甘岭林业局"
        }, {
            "code": "236402",
            "value": "翠峦林业局"
        }, {
            "code": "236403",
            "value": "金山屯林业局"
        }, {
            "code": "236404",
            "value": "五营林业局"
        }, {
            "code": "236405",
            "value": "友好林业局"
        }, {
            "code": "236406",
            "value": "南岔林业局"
        }, {
            "code": "236407",
            "value": "汤旺河林业局"
        }, {
            "code": "236408",
            "value": "红星林业局"
        }, {
            "code": "236409",
            "value": "双丰林业局"
        }, {
            "code": "236410",
            "value": "桃山林业局"
        }, {
            "code": "236411",
            "value": "朗乡林业局"
        }, {
            "code": "236412",
            "value": "铁力林业局"
        }, {
            "code": "236413",
            "value": "美溪林业局"
        }, {
            "code": "236414",
            "value": "新青林业局"
        }, {
            "code": "236415",
            "value": "乌马河林业局"
        }, {
            "code": "236416",
            "value": "带岭林业实验局"
        }, {
            "code": "236417",
            "value": "乌伊岭林业局"
        }]
    }, {
        "code": "2365",
        "value": "大兴安岭林管局",
        "cities": [{
            "code": "236501",
            "value": "松岭林业局"
        }, {
            "code": "236502",
            "value": "新林林业局"
        }, {
            "code": "236503",
            "value": "呼中林业局"
        }, {
            "code": "236504",
            "value": "塔河林业局"
        }, {
            "code": "236505",
            "value": "十八站林业局"
        }, {
            "code": "236506",
            "value": "阿木尔林业局"
        }, {
            "code": "236507",
            "value": "图强林业局"
        }, {
            "code": "236508",
            "value": "韩家园林业局"
        }]
    }]
}, {
    "code": "31",
    "value": "上海市",
    "states": [{
        "code": "3101",
        "value": "市辖区",
        "cities": [{
            "code": "310101",
            "value": "黄浦区"
        }, {
            "code": "310104",
            "value": "徐汇区"
        }, {
            "code": "310105",
            "value": "长宁区"
        }, {
            "code": "310106",
            "value": "静安区"
        }, {
            "code": "310107",
            "value": "普陀区"
        }, {
            "code": "310108",
            "value": "闸北区"
        }, {
            "code": "310109",
            "value": "虹口区"
        }, {
            "code": "310110",
            "value": "杨浦区"
        }, {
            "code": "310112",
            "value": "闵行区"
        }, {
            "code": "310113",
            "value": "宝山区"
        }, {
            "code": "310114",
            "value": "嘉定区"
        }, {
            "code": "310115",
            "value": "浦东新区"
        }, {
            "code": "310116",
            "value": "金山区"
        }, {
            "code": "310117",
            "value": "松江区"
        }, {
            "code": "310118",
            "value": "青浦区"
        }, {
            "code": "310120",
            "value": "奉贤区"
        }]
    }, {
        "code": "3102",
        "value": "县",
        "cities": [{
            "code": "310230",
            "value": "崇明县"
        }]
    }]
}, {
    "code": "32",
    "value": "江苏省",
    "states": [{
        "code": "3201",
        "value": "南京市",
        "cities": [{
            "code": "320101",
            "value": "市辖区"
        }, {
            "code": "320102",
            "value": "玄武区"
        }, {
            "code": "320104",
            "value": "秦淮区"
        }, {
            "code": "320105",
            "value": "建邺区"
        }, {
            "code": "320106",
            "value": "鼓楼区"
        }, {
            "code": "320111",
            "value": "浦口区"
        }, {
            "code": "320113",
            "value": "栖霞区"
        }, {
            "code": "320114",
            "value": "雨花台区"
        }, {
            "code": "320115",
            "value": "江宁区"
        }, {
            "code": "320116",
            "value": "六合区"
        }, {
            "code": "320117",
            "value": "溧水区"
        }, {
            "code": "320118",
            "value": "高淳区"
        }]
    }, {
        "code": "3202",
        "value": "无锡市",
        "cities": [{
            "code": "320201",
            "value": "市辖区"
        }, {
            "code": "320202",
            "value": "崇安区"
        }, {
            "code": "320203",
            "value": "南长区"
        }, {
            "code": "320204",
            "value": "北塘区"
        }, {
            "code": "320205",
            "value": "锡山区"
        }, {
            "code": "320206",
            "value": "惠山区"
        }, {
            "code": "320211",
            "value": "滨湖区"
        }, {
            "code": "320281",
            "value": "江阴市"
        }, {
            "code": "320282",
            "value": "宜兴市"
        }]
    }, {
        "code": "3203",
        "value": "徐州市",
        "cities": [{
            "code": "320301",
            "value": "市辖区"
        }, {
            "code": "320302",
            "value": "鼓楼区"
        }, {
            "code": "320303",
            "value": "云龙区"
        }, {
            "code": "320305",
            "value": "贾汪区"
        }, {
            "code": "320311",
            "value": "泉山区"
        }, {
            "code": "320312",
            "value": "铜山区"
        }, {
            "code": "320321",
            "value": "丰县"
        }, {
            "code": "320322",
            "value": "沛县"
        }, {
            "code": "320324",
            "value": "睢宁县"
        }, {
            "code": "320381",
            "value": "新沂市"
        }, {
            "code": "320382",
            "value": "邳州市"
        }]
    }, {
        "code": "3204",
        "value": "常州市",
        "cities": [{
            "code": "320401",
            "value": "市辖区"
        }, {
            "code": "320402",
            "value": "天宁区"
        }, {
            "code": "320404",
            "value": "钟楼区"
        }, {
            "code": "320405",
            "value": "戚墅堰区"
        }, {
            "code": "320411",
            "value": "新北区"
        }, {
            "code": "320412",
            "value": "武进区"
        }, {
            "code": "320481",
            "value": "溧阳市"
        }, {
            "code": "320482",
            "value": "金坛市"
        }]
    }, {
        "code": "3205",
        "value": "苏州市",
        "cities": [{
            "code": "320501",
            "value": "市辖区"
        }, {
            "code": "320505",
            "value": "虎丘区"
        }, {
            "code": "320506",
            "value": "吴中区"
        }, {
            "code": "320507",
            "value": "相城区"
        }, {
            "code": "320508",
            "value": "姑苏区"
        }, {
            "code": "320509",
            "value": "江苏省苏州市吴江区"
        }, {
            "code": "320581",
            "value": "常熟市"
        }, {
            "code": "320582",
            "value": "张家港市"
        }, {
            "code": "320583",
            "value": "昆山市"
        }, {
            "code": "320585",
            "value": "太仓市"
        }]
    }, {
        "code": "3206",
        "value": "南通市",
        "cities": [{
            "code": "320601",
            "value": "市辖区"
        }, {
            "code": "320602",
            "value": "崇川区"
        }, {
            "code": "320611",
            "value": "港闸区"
        }, {
            "code": "320612",
            "value": "通州区"
        }, {
            "code": "320621",
            "value": "海安县"
        }, {
            "code": "320623",
            "value": "如东县"
        }, {
            "code": "320681",
            "value": "启东市"
        }, {
            "code": "320682",
            "value": "如皋市"
        }, {
            "code": "320684",
            "value": "海门市"
        }]
    }, {
        "code": "3207",
        "value": "连云港市",
        "cities": [{
            "code": "320701",
            "value": "市辖区"
        }, {
            "code": "320703",
            "value": "连云区"
        }, {
            "code": "320705",
            "value": "新浦区"
        }, {
            "code": "320706",
            "value": "海州区"
        }, {
            "code": "320721",
            "value": "赣榆县"
        }, {
            "code": "320722",
            "value": "东海县"
        }, {
            "code": "320723",
            "value": "灌云县"
        }, {
            "code": "320724",
            "value": "灌南县"
        }]
    }, {
        "code": "3208",
        "value": "淮安市",
        "cities": [{
            "code": "320801",
            "value": "市辖区"
        }, {
            "code": "320802",
            "value": "清河区"
        }, {
            "code": "320803",
            "value": "淮安区"
        }, {
            "code": "320804",
            "value": "淮阴区"
        }, {
            "code": "320811",
            "value": "清浦区"
        }, {
            "code": "320826",
            "value": "涟水县"
        }, {
            "code": "320829",
            "value": "洪泽县"
        }, {
            "code": "320830",
            "value": "盱眙县"
        }, {
            "code": "320831",
            "value": "金湖县"
        }]
    }, {
        "code": "3209",
        "value": "盐城市",
        "cities": [{
            "code": "320901",
            "value": "市辖区"
        }, {
            "code": "320902",
            "value": "亭湖区"
        }, {
            "code": "320903",
            "value": "盐都区"
        }, {
            "code": "320921",
            "value": "响水县"
        }, {
            "code": "320922",
            "value": "滨海县"
        }, {
            "code": "320923",
            "value": "阜宁县"
        }, {
            "code": "320924",
            "value": "射阳县"
        }, {
            "code": "320925",
            "value": "建湖县"
        }, {
            "code": "320981",
            "value": "东台市"
        }, {
            "code": "320982",
            "value": "大丰市"
        }]
    }, {
        "code": "3210",
        "value": "扬州市",
        "cities": [{
            "code": "321001",
            "value": "市辖区"
        }, {
            "code": "321002",
            "value": "广陵区"
        }, {
            "code": "321003",
            "value": "邗江区"
        }, {
            "code": "321012",
            "value": "江都区"
        }, {
            "code": "321023",
            "value": "宝应县"
        }, {
            "code": "321081",
            "value": "仪征市"
        }, {
            "code": "321084",
            "value": "高邮市"
        }]
    }, {
        "code": "3211",
        "value": "镇江市",
        "cities": [{
            "code": "321101",
            "value": "市辖区"
        }, {
            "code": "321102",
            "value": "京口区"
        }, {
            "code": "321111",
            "value": "润州区"
        }, {
            "code": "321112",
            "value": "丹徒区"
        }, {
            "code": "321181",
            "value": "丹阳市"
        }, {
            "code": "321182",
            "value": "扬中市"
        }, {
            "code": "321183",
            "value": "句容市"
        }]
    }, {
        "code": "3212",
        "value": "泰州市",
        "cities": [{
            "code": "321201",
            "value": "市辖区"
        }, {
            "code": "321202",
            "value": "海陵区"
        }, {
            "code": "321203",
            "value": "高港区"
        }, {
            "code": "321204",
            "value": "姜堰区"
        }, {
            "code": "321281",
            "value": "兴化市"
        }, {
            "code": "321282",
            "value": "靖江市"
        }, {
            "code": "321283",
            "value": "泰兴市"
        }]
    }, {
        "code": "3213",
        "value": "宿迁市",
        "cities": [{
            "code": "321301",
            "value": "市辖区"
        }, {
            "code": "321302",
            "value": "宿城区"
        }, {
            "code": "321311",
            "value": "宿豫区"
        }, {
            "code": "321322",
            "value": "沭阳县"
        }, {
            "code": "321323",
            "value": "泗阳县"
        }, {
            "code": "321324",
            "value": "泗洪县"
        }]
    }]
}, {
    "code": "33",
    "value": "浙江省",
    "states": [{
        "code": "3301",
        "value": "杭州市",
        "cities": [{
            "code": "330101",
            "value": "市辖区"
        }, {
            "code": "330102",
            "value": "上城区"
        }, {
            "code": "330103",
            "value": "下城区"
        }, {
            "code": "330104",
            "value": "江干区"
        }, {
            "code": "330105",
            "value": "拱墅区"
        }, {
            "code": "330106",
            "value": "西湖区"
        }, {
            "code": "330108",
            "value": "滨江区"
        }, {
            "code": "330109",
            "value": "萧山区"
        }, {
            "code": "330110",
            "value": "余杭区"
        }, {
            "code": "330122",
            "value": "桐庐县"
        }, {
            "code": "330127",
            "value": "淳安县"
        }, {
            "code": "330182",
            "value": "建德市"
        }, {
            "code": "330183",
            "value": "富阳市"
        }, {
            "code": "330185",
            "value": "临安市"
        }]
    }, {
        "code": "3302",
        "value": "宁波市",
        "cities": [{
            "code": "330201",
            "value": "市辖区"
        }, {
            "code": "330203",
            "value": "海曙区"
        }, {
            "code": "330204",
            "value": "江东区"
        }, {
            "code": "330205",
            "value": "江北区"
        }, {
            "code": "330206",
            "value": "北仑区"
        }, {
            "code": "330211",
            "value": "镇海区"
        }, {
            "code": "330212",
            "value": "鄞州区"
        }, {
            "code": "330225",
            "value": "象山县"
        }, {
            "code": "330226",
            "value": "宁海县"
        }, {
            "code": "330281",
            "value": "余姚市"
        }, {
            "code": "330282",
            "value": "慈溪市"
        }, {
            "code": "330283",
            "value": "奉化市"
        }]
    }, {
        "code": "3303",
        "value": "温州市",
        "cities": [{
            "code": "330301",
            "value": "市辖区"
        }, {
            "code": "330302",
            "value": "鹿城区"
        }, {
            "code": "330303",
            "value": "龙湾区"
        }, {
            "code": "330304",
            "value": "瓯海区"
        }, {
            "code": "330322",
            "value": "洞头县"
        }, {
            "code": "330324",
            "value": "永嘉县"
        }, {
            "code": "330326",
            "value": "平阳县"
        }, {
            "code": "330327",
            "value": "苍南县"
        }, {
            "code": "330328",
            "value": "文成县"
        }, {
            "code": "330329",
            "value": "泰顺县"
        }, {
            "code": "330381",
            "value": "瑞安市"
        }, {
            "code": "330382",
            "value": "乐清市"
        }]
    }, {
        "code": "3304",
        "value": "嘉兴市",
        "cities": [{
            "code": "330401",
            "value": "市辖区"
        }, {
            "code": "330402",
            "value": "南湖区"
        }, {
            "code": "330411",
            "value": "秀洲区"
        }, {
            "code": "330421",
            "value": "嘉善县"
        }, {
            "code": "330424",
            "value": "海盐县"
        }, {
            "code": "330481",
            "value": "海宁市"
        }, {
            "code": "330482",
            "value": "平湖市"
        }, {
            "code": "330483",
            "value": "桐乡市"
        }]
    }, {
        "code": "3305",
        "value": "湖州市",
        "cities": [{
            "code": "330501",
            "value": "市辖区"
        }, {
            "code": "330502",
            "value": "吴兴区"
        }, {
            "code": "330503",
            "value": "南浔区"
        }, {
            "code": "330521",
            "value": "德清县"
        }, {
            "code": "330522",
            "value": "长兴县"
        }, {
            "code": "330523",
            "value": "安吉县"
        }]
    }, {
        "code": "3306",
        "value": "绍兴市",
        "cities": [{
            "code": "330601",
            "value": "市辖区"
        }, {
            "code": "330602",
            "value": "越城区"
        }, {
            "code": "330603",
            "value": "柯桥区"
        }, {
            "code": "330604",
            "value": "上虞区"
        }, {
            "code": "330624",
            "value": "新昌县"
        }, {
            "code": "330681",
            "value": "诸暨市"
        }, {
            "code": "330683",
            "value": "嵊州市"
        }]
    }, {
        "code": "3307",
        "value": "金华市",
        "cities": [{
            "code": "330701",
            "value": "市辖区"
        }, {
            "code": "330702",
            "value": "婺城区"
        }, {
            "code": "330703",
            "value": "金东区"
        }, {
            "code": "330723",
            "value": "武义县"
        }, {
            "code": "330726",
            "value": "浦江县"
        }, {
            "code": "330727",
            "value": "磐安县"
        }, {
            "code": "330781",
            "value": "兰溪市"
        }, {
            "code": "330782",
            "value": "义乌市"
        }, {
            "code": "330783",
            "value": "东阳市"
        }, {
            "code": "330784",
            "value": "永康市"
        }]
    }, {
        "code": "3308",
        "value": "衢州市",
        "cities": [{
            "code": "330801",
            "value": "市辖区"
        }, {
            "code": "330802",
            "value": "柯城区"
        }, {
            "code": "330803",
            "value": "衢江区"
        }, {
            "code": "330822",
            "value": "常山县"
        }, {
            "code": "330824",
            "value": "开化县"
        }, {
            "code": "330825",
            "value": "龙游县"
        }, {
            "code": "330881",
            "value": "江山市"
        }]
    }, {
        "code": "3309",
        "value": "舟山市",
        "cities": [{
            "code": "330901",
            "value": "市辖区"
        }, {
            "code": "330902",
            "value": "定海区"
        }, {
            "code": "330903",
            "value": "普陀区"
        }, {
            "code": "330921",
            "value": "岱山县"
        }, {
            "code": "330922",
            "value": "嵊泗县"
        }]
    }, {
        "code": "3310",
        "value": "台州市",
        "cities": [{
            "code": "331001",
            "value": "市辖区"
        }, {
            "code": "331002",
            "value": "椒江区"
        }, {
            "code": "331003",
            "value": "黄岩区"
        }, {
            "code": "331004",
            "value": "路桥区"
        }, {
            "code": "331021",
            "value": "玉环县"
        }, {
            "code": "331022",
            "value": "三门县"
        }, {
            "code": "331023",
            "value": "天台县"
        }, {
            "code": "331024",
            "value": "仙居县"
        }, {
            "code": "331081",
            "value": "温岭市"
        }, {
            "code": "331082",
            "value": "临海市"
        }]
    }, {
        "code": "3311",
        "value": "丽水市",
        "cities": [{
            "code": "331101",
            "value": "市辖区"
        }, {
            "code": "331102",
            "value": "莲都区"
        }, {
            "code": "331121",
            "value": "青田县"
        }, {
            "code": "331122",
            "value": "缙云县"
        }, {
            "code": "331123",
            "value": "遂昌县"
        }, {
            "code": "331124",
            "value": "松阳县"
        }, {
            "code": "331125",
            "value": "云和县"
        }, {
            "code": "331126",
            "value": "庆元县"
        }, {
            "code": "331127",
            "value": "景宁县"
        }, {
            "code": "331181",
            "value": "龙泉市"
        }]
    }]
}, {
    "code": "34",
    "value": "安徽省",
    "states": [{
        "code": "3401",
        "value": "合肥市",
        "cities": [{
            "code": "340101",
            "value": "市辖区"
        }, {
            "code": "340102",
            "value": "瑶海区"
        }, {
            "code": "340103",
            "value": "庐阳区"
        }, {
            "code": "340104",
            "value": "蜀山区"
        }, {
            "code": "340111",
            "value": "包河区"
        }, {
            "code": "340121",
            "value": "长丰县"
        }, {
            "code": "340122",
            "value": "肥东县"
        }, {
            "code": "340123",
            "value": "肥西县"
        }, {
            "code": "340124",
            "value": "庐江县"
        }, {
            "code": "340181",
            "value": "巢湖市"
        }]
    }, {
        "code": "3402",
        "value": "芜湖市",
        "cities": [{
            "code": "340201",
            "value": "市辖区"
        }, {
            "code": "340202",
            "value": "镜湖区"
        }, {
            "code": "340203",
            "value": "弋江区"
        }, {
            "code": "340207",
            "value": "鸠江区"
        }, {
            "code": "340208",
            "value": "三山区"
        }, {
            "code": "340221",
            "value": "芜湖县"
        }, {
            "code": "340222",
            "value": "繁昌县"
        }, {
            "code": "340223",
            "value": "南陵县"
        }, {
            "code": "340225",
            "value": "无为县"
        }]
    }, {
        "code": "3403",
        "value": "蚌埠市",
        "cities": [{
            "code": "340301",
            "value": "市辖区"
        }, {
            "code": "340302",
            "value": "龙子湖区"
        }, {
            "code": "340303",
            "value": "蚌山区"
        }, {
            "code": "340304",
            "value": "禹会区"
        }, {
            "code": "340311",
            "value": "淮上区"
        }, {
            "code": "340321",
            "value": "怀远县"
        }, {
            "code": "340322",
            "value": "五河县"
        }, {
            "code": "340323",
            "value": "固镇县"
        }]
    }, {
        "code": "3404",
        "value": "淮南市",
        "cities": [{
            "code": "340401",
            "value": "市辖区"
        }, {
            "code": "340402",
            "value": "大通区"
        }, {
            "code": "340403",
            "value": "田家庵区"
        }, {
            "code": "340404",
            "value": "谢家集区"
        }, {
            "code": "340405",
            "value": "八公山区"
        }, {
            "code": "340406",
            "value": "潘集区"
        }, {
            "code": "340421",
            "value": "凤台县"
        }]
    }, {
        "code": "3405",
        "value": "马鞍山市",
        "cities": [{
            "code": "340501",
            "value": "市辖区"
        }, {
            "code": "340503",
            "value": "花山区"
        }, {
            "code": "340504",
            "value": "雨山区"
        }, {
            "code": "340506",
            "value": "博望区"
        }, {
            "code": "340521",
            "value": "当涂县"
        }, {
            "code": "340522",
            "value": "含山县"
        }, {
            "code": "340523",
            "value": "和县"
        }]
    }, {
        "code": "3406",
        "value": "淮北市",
        "cities": [{
            "code": "340601",
            "value": "市辖区"
        }, {
            "code": "340602",
            "value": "杜集区"
        }, {
            "code": "340603",
            "value": "相山区"
        }, {
            "code": "340604",
            "value": "烈山区"
        }, {
            "code": "340621",
            "value": "濉溪县"
        }]
    }, {
        "code": "3407",
        "value": "铜陵市",
        "cities": [{
            "code": "340701",
            "value": "市辖区"
        }, {
            "code": "340702",
            "value": "铜官山区"
        }, {
            "code": "340703",
            "value": "狮子山区"
        }, {
            "code": "340711",
            "value": "郊区"
        }, {
            "code": "340721",
            "value": "铜陵县"
        }]
    }, {
        "code": "3408",
        "value": "安庆市",
        "cities": [{
            "code": "340801",
            "value": "市辖区"
        }, {
            "code": "340802",
            "value": "迎江区"
        }, {
            "code": "340803",
            "value": "大观区"
        }, {
            "code": "340811",
            "value": "宜秀区"
        }, {
            "code": "340822",
            "value": "怀宁县"
        }, {
            "code": "340823",
            "value": "枞阳县"
        }, {
            "code": "340824",
            "value": "潜山县"
        }, {
            "code": "340825",
            "value": "太湖县"
        }, {
            "code": "340826",
            "value": "宿松县"
        }, {
            "code": "340827",
            "value": "望江县"
        }, {
            "code": "340828",
            "value": "岳西县"
        }, {
            "code": "340881",
            "value": "桐城市"
        }]
    }, {
        "code": "3410",
        "value": "黄山市",
        "cities": [{
            "code": "341001",
            "value": "市辖区"
        }, {
            "code": "341002",
            "value": "屯溪区"
        }, {
            "code": "341003",
            "value": "黄山区"
        }, {
            "code": "341004",
            "value": "徽州区"
        }, {
            "code": "341021",
            "value": "歙县"
        }, {
            "code": "341022",
            "value": "休宁县"
        }, {
            "code": "341023",
            "value": "黟县"
        }, {
            "code": "341024",
            "value": "祁门县"
        }]
    }, {
        "code": "3411",
        "value": "滁州市",
        "cities": [{
            "code": "341101",
            "value": "市辖区"
        }, {
            "code": "341102",
            "value": "琅琊区"
        }, {
            "code": "341103",
            "value": "南谯区"
        }, {
            "code": "341122",
            "value": "来安县"
        }, {
            "code": "341124",
            "value": "全椒县"
        }, {
            "code": "341125",
            "value": "定远县"
        }, {
            "code": "341126",
            "value": "凤阳县"
        }, {
            "code": "341181",
            "value": "天长市"
        }, {
            "code": "341182",
            "value": "明光市"
        }]
    }, {
        "code": "3412",
        "value": "阜阳市",
        "cities": [{
            "code": "341201",
            "value": "市辖区"
        }, {
            "code": "341202",
            "value": "颍州区"
        }, {
            "code": "341203",
            "value": "颍东区"
        }, {
            "code": "341204",
            "value": "颍泉区"
        }, {
            "code": "341221",
            "value": "临泉县"
        }, {
            "code": "341222",
            "value": "太和县"
        }, {
            "code": "341225",
            "value": "阜南县"
        }, {
            "code": "341226",
            "value": "颍上县"
        }, {
            "code": "341282",
            "value": "界首市"
        }]
    }, {
        "code": "3413",
        "value": "宿州市",
        "cities": [{
            "code": "341301",
            "value": "市辖区"
        }, {
            "code": "341302",
            "value": "埇桥区"
        }, {
            "code": "341321",
            "value": "砀山县"
        }, {
            "code": "341322",
            "value": "萧县"
        }, {
            "code": "341323",
            "value": "灵璧县"
        }, {
            "code": "341324",
            "value": "泗县"
        }]
    }, {
        "code": "3415",
        "value": "六安市",
        "cities": [{
            "code": "341501",
            "value": "市辖区"
        }, {
            "code": "341502",
            "value": "金安区"
        }, {
            "code": "341503",
            "value": "裕安区"
        }, {
            "code": "341504",
            "value": "叶集试验区"
        }, {
            "code": "341521",
            "value": "寿县"
        }, {
            "code": "341522",
            "value": "霍邱县"
        }, {
            "code": "341523",
            "value": "舒城县"
        }, {
            "code": "341524",
            "value": "金寨县"
        }, {
            "code": "341525",
            "value": "霍山县"
        }]
    }, {
        "code": "3416",
        "value": "亳州市",
        "cities": [{
            "code": "341601",
            "value": "市辖区"
        }, {
            "code": "341602",
            "value": "谯城区"
        }, {
            "code": "341621",
            "value": "涡阳县"
        }, {
            "code": "341622",
            "value": "蒙城县"
        }, {
            "code": "341623",
            "value": "利辛县"
        }]
    }, {
        "code": "3417",
        "value": "池州市",
        "cities": [{
            "code": "341701",
            "value": "市辖区"
        }, {
            "code": "341702",
            "value": "贵池区"
        }, {
            "code": "341721",
            "value": "东至县"
        }, {
            "code": "341722",
            "value": "石台县"
        }, {
            "code": "341723",
            "value": "青阳县"
        }]
    }, {
        "code": "3418",
        "value": "宣城市",
        "cities": [{
            "code": "341801",
            "value": "市辖区"
        }, {
            "code": "341802",
            "value": "宣州区"
        }, {
            "code": "341821",
            "value": "郎溪县"
        }, {
            "code": "341822",
            "value": "广德县"
        }, {
            "code": "341823",
            "value": "泾县"
        }, {
            "code": "341824",
            "value": "绩溪县"
        }, {
            "code": "341825",
            "value": "旌德县"
        }, {
            "code": "341881",
            "value": "宁国市"
        }]
    }]
}, {
    "code": "35",
    "value": "福建省",
    "states": [{
        "code": "3501",
        "value": "福州市",
        "cities": [{
            "code": "350101",
            "value": "市辖区"
        }, {
            "code": "350102",
            "value": "鼓楼区"
        }, {
            "code": "350103",
            "value": "台江区"
        }, {
            "code": "350104",
            "value": "仓山区"
        }, {
            "code": "350105",
            "value": "马尾区"
        }, {
            "code": "350111",
            "value": "晋安区"
        }, {
            "code": "350121",
            "value": "闽侯县"
        }, {
            "code": "350122",
            "value": "连江县"
        }, {
            "code": "350123",
            "value": "罗源县"
        }, {
            "code": "350124",
            "value": "闽清县"
        }, {
            "code": "350125",
            "value": "永泰县"
        }, {
            "code": "350128",
            "value": "平潭县"
        }, {
            "code": "350181",
            "value": "福清市"
        }, {
            "code": "350182",
            "value": "长乐市"
        }]
    }, {
        "code": "3502",
        "value": "厦门市",
        "cities": [{
            "code": "350201",
            "value": "市辖区"
        }, {
            "code": "350203",
            "value": "思明区"
        }, {
            "code": "350205",
            "value": "海沧区"
        }, {
            "code": "350206",
            "value": "湖里区"
        }, {
            "code": "350211",
            "value": "集美区"
        }, {
            "code": "350212",
            "value": "同安区"
        }, {
            "code": "350213",
            "value": "翔安区"
        }]
    }, {
        "code": "3503",
        "value": "莆田市",
        "cities": [{
            "code": "350301",
            "value": "市辖区"
        }, {
            "code": "350302",
            "value": "城厢区"
        }, {
            "code": "350303",
            "value": "涵江区"
        }, {
            "code": "350304",
            "value": "荔城区"
        }, {
            "code": "350305",
            "value": "秀屿区"
        }, {
            "code": "350322",
            "value": "仙游县"
        }]
    }, {
        "code": "3504",
        "value": "三明市",
        "cities": [{
            "code": "350401",
            "value": "市辖区"
        }, {
            "code": "350402",
            "value": "梅列区"
        }, {
            "code": "350403",
            "value": "三元区"
        }, {
            "code": "350421",
            "value": "明溪县"
        }, {
            "code": "350423",
            "value": "清流县"
        }, {
            "code": "350424",
            "value": "宁化县"
        }, {
            "code": "350425",
            "value": "大田县"
        }, {
            "code": "350426",
            "value": "尤溪县"
        }, {
            "code": "350427",
            "value": "沙县"
        }, {
            "code": "350428",
            "value": "将乐县"
        }, {
            "code": "350429",
            "value": "泰宁县"
        }, {
            "code": "350430",
            "value": "建宁县"
        }, {
            "code": "350481",
            "value": "永安市"
        }]
    }, {
        "code": "3505",
        "value": "泉州市",
        "cities": [{
            "code": "350501",
            "value": "市辖区"
        }, {
            "code": "350502",
            "value": "鲤城区"
        }, {
            "code": "350503",
            "value": "丰泽区"
        }, {
            "code": "350504",
            "value": "洛江区"
        }, {
            "code": "350505",
            "value": "泉港区"
        }, {
            "code": "350521",
            "value": "惠安县"
        }, {
            "code": "350524",
            "value": "安溪县"
        }, {
            "code": "350525",
            "value": "永春县"
        }, {
            "code": "350526",
            "value": "德化县"
        }, {
            "code": "350527",
            "value": "金门县"
        }, {
            "code": "350581",
            "value": "石狮市"
        }, {
            "code": "350582",
            "value": "晋江市"
        }, {
            "code": "350583",
            "value": "南安市"
        }]
    }, {
        "code": "3506",
        "value": "漳州市",
        "cities": [{
            "code": "350601",
            "value": "市辖区"
        }, {
            "code": "350602",
            "value": "芗城区"
        }, {
            "code": "350603",
            "value": "龙文区"
        }, {
            "code": "350622",
            "value": "云霄县"
        }, {
            "code": "350623",
            "value": "漳浦县"
        }, {
            "code": "350624",
            "value": "诏安县"
        }, {
            "code": "350625",
            "value": "长泰县"
        }, {
            "code": "350626",
            "value": "东山县"
        }, {
            "code": "350627",
            "value": "南靖县"
        }, {
            "code": "350628",
            "value": "平和县"
        }, {
            "code": "350629",
            "value": "华安县"
        }, {
            "code": "350681",
            "value": "龙海市"
        }]
    }, {
        "code": "3507",
        "value": "南平市",
        "cities": [{
            "code": "350701",
            "value": "市辖区"
        }, {
            "code": "350702",
            "value": "延平区"
        }, {
            "code": "350721",
            "value": "顺昌县"
        }, {
            "code": "350722",
            "value": "浦城县"
        }, {
            "code": "350723",
            "value": "光泽县"
        }, {
            "code": "350724",
            "value": "松溪县"
        }, {
            "code": "350725",
            "value": "政和县"
        }, {
            "code": "350781",
            "value": "邵武市"
        }, {
            "code": "350782",
            "value": "武夷山市"
        }, {
            "code": "350783",
            "value": "建瓯市"
        }, {
            "code": "350784",
            "value": "建阳市"
        }]
    }, {
        "code": "3508",
        "value": "龙岩市",
        "cities": [{
            "code": "350801",
            "value": "市辖区"
        }, {
            "code": "350802",
            "value": "新罗区"
        }, {
            "code": "350821",
            "value": "长汀县"
        }, {
            "code": "350822",
            "value": "永定县"
        }, {
            "code": "350823",
            "value": "上杭县"
        }, {
            "code": "350824",
            "value": "武平县"
        }, {
            "code": "350825",
            "value": "连城县"
        }, {
            "code": "350881",
            "value": "漳平市"
        }]
    }, {
        "code": "3509",
        "value": "宁德市",
        "cities": [{
            "code": "350901",
            "value": "市辖区"
        }, {
            "code": "350902",
            "value": "蕉城区"
        }, {
            "code": "350921",
            "value": "霞浦县"
        }, {
            "code": "350922",
            "value": "古田县"
        }, {
            "code": "350923",
            "value": "屏南县"
        }, {
            "code": "350924",
            "value": "寿宁县"
        }, {
            "code": "350925",
            "value": "周宁县"
        }, {
            "code": "350926",
            "value": "柘荣县"
        }, {
            "code": "350981",
            "value": "福安市"
        }, {
            "code": "350982",
            "value": "福鼎市"
        }]
    }]
}, {
    "code": "36",
    "value": "江西省",
    "states": [{
        "code": "3601",
        "value": "南昌市",
        "cities": [{
            "code": "360101",
            "value": "市辖区"
        }, {
            "code": "360102",
            "value": "东湖区"
        }, {
            "code": "360103",
            "value": "西湖区"
        }, {
            "code": "360104",
            "value": "青云谱区"
        }, {
            "code": "360105",
            "value": "湾里区"
        }, {
            "code": "360111",
            "value": "青山湖区"
        }, {
            "code": "360121",
            "value": "南昌县"
        }, {
            "code": "360122",
            "value": "新建县"
        }, {
            "code": "360123",
            "value": "安义县"
        }, {
            "code": "360124",
            "value": "进贤县"
        }]
    }, {
        "code": "3602",
        "value": "景德镇市",
        "cities": [{
            "code": "360201",
            "value": "市辖区"
        }, {
            "code": "360202",
            "value": "昌江区"
        }, {
            "code": "360203",
            "value": "珠山区"
        }, {
            "code": "360222",
            "value": "浮梁县"
        }, {
            "code": "360281",
            "value": "乐平市"
        }]
    }, {
        "code": "3603",
        "value": "萍乡市",
        "cities": [{
            "code": "360301",
            "value": "市辖区"
        }, {
            "code": "360302",
            "value": "安源区"
        }, {
            "code": "360313",
            "value": "湘东区"
        }, {
            "code": "360321",
            "value": "莲花县"
        }, {
            "code": "360322",
            "value": "上栗县"
        }, {
            "code": "360323",
            "value": "芦溪县"
        }]
    }, {
        "code": "3604",
        "value": "九江市",
        "cities": [{
            "code": "360401",
            "value": "市辖区"
        }, {
            "code": "360402",
            "value": "庐山区"
        }, {
            "code": "360403",
            "value": "浔阳区"
        }, {
            "code": "360421",
            "value": "九江县"
        }, {
            "code": "360423",
            "value": "武宁县"
        }, {
            "code": "360424",
            "value": "修水县"
        }, {
            "code": "360425",
            "value": "永修县"
        }, {
            "code": "360426",
            "value": "德安县"
        }, {
            "code": "360427",
            "value": "星子县"
        }, {
            "code": "360428",
            "value": "都昌县"
        }, {
            "code": "360429",
            "value": "湖口县"
        }, {
            "code": "360430",
            "value": "彭泽县"
        }, {
            "code": "360481",
            "value": "瑞昌市"
        }, {
            "code": "360482",
            "value": "共青城市"
        }]
    }, {
        "code": "3605",
        "value": "新余市",
        "cities": [{
            "code": "360501",
            "value": "市辖区"
        }, {
            "code": "360502",
            "value": "渝水区"
        }, {
            "code": "360521",
            "value": "分宜县"
        }]
    }, {
        "code": "3606",
        "value": "鹰潭市",
        "cities": [{
            "code": "360601",
            "value": "市辖区"
        }, {
            "code": "360602",
            "value": "月湖区"
        }, {
            "code": "360622",
            "value": "余江县"
        }, {
            "code": "360681",
            "value": "贵溪市"
        }]
    }, {
        "code": "3607",
        "value": "赣州市",
        "cities": [{
            "code": "360701",
            "value": "市辖区"
        }, {
            "code": "360702",
            "value": "章贡区"
        }, {
            "code": "360721",
            "value": "赣县"
        }, {
            "code": "360722",
            "value": "信丰县"
        }, {
            "code": "360723",
            "value": "大余县"
        }, {
            "code": "360724",
            "value": "上犹县"
        }, {
            "code": "360725",
            "value": "崇义县"
        }, {
            "code": "360726",
            "value": "安远县"
        }, {
            "code": "360727",
            "value": "龙南县"
        }, {
            "code": "360728",
            "value": "定南县"
        }, {
            "code": "360729",
            "value": "全南县"
        }, {
            "code": "360730",
            "value": "宁都县"
        }, {
            "code": "360731",
            "value": "于都县"
        }, {
            "code": "360732",
            "value": "兴国县"
        }, {
            "code": "360733",
            "value": "会昌县"
        }, {
            "code": "360734",
            "value": "寻乌县"
        }, {
            "code": "360735",
            "value": "石城县"
        }, {
            "code": "360781",
            "value": "瑞金市"
        }, {
            "code": "360782",
            "value": "南康市"
        }]
    }, {
        "code": "3608",
        "value": "吉安市",
        "cities": [{
            "code": "360801",
            "value": "市辖区"
        }, {
            "code": "360802",
            "value": "吉州区"
        }, {
            "code": "360803",
            "value": "青原区"
        }, {
            "code": "360821",
            "value": "吉安县"
        }, {
            "code": "360822",
            "value": "吉水县"
        }, {
            "code": "360823",
            "value": "峡江县"
        }, {
            "code": "360824",
            "value": "新干县"
        }, {
            "code": "360825",
            "value": "永丰县"
        }, {
            "code": "360826",
            "value": "泰和县"
        }, {
            "code": "360827",
            "value": "遂川县"
        }, {
            "code": "360828",
            "value": "万安县"
        }, {
            "code": "360829",
            "value": "安福县"
        }, {
            "code": "360830",
            "value": "永新县"
        }, {
            "code": "360881",
            "value": "井冈山市"
        }]
    }, {
        "code": "3609",
        "value": "宜春市",
        "cities": [{
            "code": "360901",
            "value": "市辖区"
        }, {
            "code": "360902",
            "value": "袁州区"
        }, {
            "code": "360921",
            "value": "奉新县"
        }, {
            "code": "360922",
            "value": "万载县"
        }, {
            "code": "360923",
            "value": "上高县"
        }, {
            "code": "360924",
            "value": "宜丰县"
        }, {
            "code": "360925",
            "value": "靖安县"
        }, {
            "code": "360926",
            "value": "铜鼓县"
        }, {
            "code": "360981",
            "value": "丰城市"
        }, {
            "code": "360982",
            "value": "樟树市"
        }, {
            "code": "360983",
            "value": "高安市"
        }]
    }, {
        "code": "3610",
        "value": "抚州市",
        "cities": [{
            "code": "361001",
            "value": "市辖区"
        }, {
            "code": "361002",
            "value": "临川区"
        }, {
            "code": "361021",
            "value": "南城县"
        }, {
            "code": "361022",
            "value": "黎川县"
        }, {
            "code": "361023",
            "value": "南丰县"
        }, {
            "code": "361024",
            "value": "崇仁县"
        }, {
            "code": "361025",
            "value": "乐安县"
        }, {
            "code": "361026",
            "value": "宜黄县"
        }, {
            "code": "361027",
            "value": "金溪县"
        }, {
            "code": "361028",
            "value": "资溪县"
        }, {
            "code": "361029",
            "value": "东乡县"
        }, {
            "code": "361030",
            "value": "广昌县"
        }]
    }, {
        "code": "3611",
        "value": "上饶市",
        "cities": [{
            "code": "361101",
            "value": "市辖区"
        }, {
            "code": "361102",
            "value": "信州区"
        }, {
            "code": "361121",
            "value": "上饶县"
        }, {
            "code": "361122",
            "value": "广丰县"
        }, {
            "code": "361123",
            "value": "玉山县"
        }, {
            "code": "361124",
            "value": "铅山县"
        }, {
            "code": "361125",
            "value": "横峰县"
        }, {
            "code": "361126",
            "value": "弋阳县"
        }, {
            "code": "361127",
            "value": "余干县"
        }, {
            "code": "361128",
            "value": "鄱阳县"
        }, {
            "code": "361129",
            "value": "万年县"
        }, {
            "code": "361130",
            "value": "婺源县"
        }, {
            "code": "361181",
            "value": "德兴市"
        }]
    }]
}, {
    "code": "37",
    "value": "山东省",
    "states": [{
        "code": "3701",
        "value": "济南市",
        "cities": [{
            "code": "370101",
            "value": "市辖区"
        }, {
            "code": "370102",
            "value": "历下区"
        }, {
            "code": "370103",
            "value": "中区"
        }, {
            "code": "370104",
            "value": "槐荫区"
        }, {
            "code": "370105",
            "value": "天桥区"
        }, {
            "code": "370112",
            "value": "历城区"
        }, {
            "code": "370113",
            "value": "长清区"
        }, {
            "code": "370124",
            "value": "平阴县"
        }, {
            "code": "370125",
            "value": "济阳县"
        }, {
            "code": "370126",
            "value": "商河县"
        }, {
            "code": "370181",
            "value": "章丘市"
        }]
    }, {
        "code": "3702",
        "value": "青岛市",
        "cities": [{
            "code": "370201",
            "value": "市辖区"
        }, {
            "code": "370202",
            "value": "南区"
        }, {
            "code": "370203",
            "value": "北区"
        }, {
            "code": "370211",
            "value": "黄岛区"
        }, {
            "code": "370212",
            "value": "崂山区"
        }, {
            "code": "370213",
            "value": "李沧区"
        }, {
            "code": "370214",
            "value": "城阳区"
        }, {
            "code": "370281",
            "value": "胶州市"
        }, {
            "code": "370282",
            "value": "即墨市"
        }, {
            "code": "370283",
            "value": "平度市"
        }, {
            "code": "370285",
            "value": "莱西市"
        }]
    }, {
        "code": "3703",
        "value": "淄博市",
        "cities": [{
            "code": "370301",
            "value": "市辖区"
        }, {
            "code": "370302",
            "value": "淄川区"
        }, {
            "code": "370303",
            "value": "张店区"
        }, {
            "code": "370304",
            "value": "博山区"
        }, {
            "code": "370305",
            "value": "临淄区"
        }, {
            "code": "370306",
            "value": "周村区"
        }, {
            "code": "370321",
            "value": "桓台县"
        }, {
            "code": "370322",
            "value": "高青县"
        }, {
            "code": "370323",
            "value": "沂源县"
        }]
    }, {
        "code": "3704",
        "value": "枣庄市",
        "cities": [{
            "code": "370401",
            "value": "市辖区"
        }, {
            "code": "370402",
            "value": "中区"
        }, {
            "code": "370403",
            "value": "薛城区"
        }, {
            "code": "370404",
            "value": "峄城区"
        }, {
            "code": "370405",
            "value": "台儿庄区"
        }, {
            "code": "370406",
            "value": "山亭区"
        }, {
            "code": "370481",
            "value": "滕州市"
        }]
    }, {
        "code": "3705",
        "value": "东营市",
        "cities": [{
            "code": "370501",
            "value": "市辖区"
        }, {
            "code": "370502",
            "value": "东营区"
        }, {
            "code": "370503",
            "value": "河口区"
        }, {
            "code": "370521",
            "value": "垦利县"
        }, {
            "code": "370522",
            "value": "利津县"
        }, {
            "code": "370523",
            "value": "广饶县"
        }]
    }, {
        "code": "3706",
        "value": "烟台市",
        "cities": [{
            "code": "370601",
            "value": "市辖区"
        }, {
            "code": "370602",
            "value": "芝罘区"
        }, {
            "code": "370611",
            "value": "福山区"
        }, {
            "code": "370612",
            "value": "牟平区"
        }, {
            "code": "370613",
            "value": "莱山区"
        }, {
            "code": "370634",
            "value": "长岛县"
        }, {
            "code": "370681",
            "value": "龙口市"
        }, {
            "code": "370682",
            "value": "莱阳市"
        }, {
            "code": "370683",
            "value": "莱州市"
        }, {
            "code": "370684",
            "value": "蓬莱市"
        }, {
            "code": "370685",
            "value": "招远市"
        }, {
            "code": "370686",
            "value": "栖霞市"
        }, {
            "code": "370687",
            "value": "海阳市"
        }]
    }, {
        "code": "3707",
        "value": "潍坊市",
        "cities": [{
            "code": "370701",
            "value": "市辖区"
        }, {
            "code": "370702",
            "value": "潍城区"
        }, {
            "code": "370703",
            "value": "寒亭区"
        }, {
            "code": "370704",
            "value": "坊子区"
        }, {
            "code": "370705",
            "value": "奎文区"
        }, {
            "code": "370724",
            "value": "临朐县"
        }, {
            "code": "370725",
            "value": "昌乐县"
        }, {
            "code": "370781",
            "value": "青州市"
        }, {
            "code": "370782",
            "value": "诸城市"
        }, {
            "code": "370783",
            "value": "寿光市"
        }, {
            "code": "370784",
            "value": "安丘市"
        }, {
            "code": "370785",
            "value": "高密市"
        }, {
            "code": "370786",
            "value": "昌邑市"
        }]
    }, {
        "code": "3708",
        "value": "济宁市",
        "cities": [{
            "code": "370801",
            "value": "市辖区"
        }, {
            "code": "370802",
            "value": "中区"
        }, {
            "code": "370811",
            "value": "任城区"
        }, {
            "code": "370826",
            "value": "微山县"
        }, {
            "code": "370827",
            "value": "鱼台县"
        }, {
            "code": "370828",
            "value": "金乡县"
        }, {
            "code": "370829",
            "value": "嘉祥县"
        }, {
            "code": "370830",
            "value": "汶上县"
        }, {
            "code": "370831",
            "value": "泗水县"
        }, {
            "code": "370832",
            "value": "梁山县"
        }, {
            "code": "370881",
            "value": "曲阜市"
        }, {
            "code": "370882",
            "value": "兖州市"
        }, {
            "code": "370883",
            "value": "邹城市"
        }]
    }, {
        "code": "3709",
        "value": "泰安市",
        "cities": [{
            "code": "370901",
            "value": "市辖区"
        }, {
            "code": "370902",
            "value": "泰山区"
        }, {
            "code": "370903",
            "value": "岱岳区"
        }, {
            "code": "370921",
            "value": "宁阳县"
        }, {
            "code": "370923",
            "value": "东平县"
        }, {
            "code": "370982",
            "value": "新泰市"
        }, {
            "code": "370983",
            "value": "肥城市"
        }]
    }, {
        "code": "3710",
        "value": "威海市",
        "cities": [{
            "code": "371001",
            "value": "市辖区"
        }, {
            "code": "371002",
            "value": "环翠区"
        }, {
            "code": "371081",
            "value": "文登市"
        }, {
            "code": "371082",
            "value": "荣成市"
        }, {
            "code": "371083",
            "value": "乳山市"
        }]
    }, {
        "code": "3711",
        "value": "日照市",
        "cities": [{
            "code": "371101",
            "value": "市辖区"
        }, {
            "code": "371102",
            "value": "东港区"
        }, {
            "code": "371103",
            "value": "岚山区"
        }, {
            "code": "371121",
            "value": "五莲县"
        }, {
            "code": "371122",
            "value": "莒县"
        }]
    }, {
        "code": "3712",
        "value": "莱芜市",
        "cities": [{
            "code": "371201",
            "value": "市辖区"
        }, {
            "code": "371202",
            "value": "莱城区"
        }, {
            "code": "371203",
            "value": "钢城区"
        }]
    }, {
        "code": "3713",
        "value": "临沂市",
        "cities": [{
            "code": "371301",
            "value": "市辖区"
        }, {
            "code": "371302",
            "value": "兰山区"
        }, {
            "code": "371311",
            "value": "罗庄区"
        }, {
            "code": "371312",
            "value": "河东区"
        }, {
            "code": "371321",
            "value": "沂南县"
        }, {
            "code": "371322",
            "value": "郯城县"
        }, {
            "code": "371323",
            "value": "沂水县"
        }, {
            "code": "371324",
            "value": "苍山县"
        }, {
            "code": "371325",
            "value": "费县"
        }, {
            "code": "371326",
            "value": "平邑县"
        }, {
            "code": "371327",
            "value": "莒南县"
        }, {
            "code": "371328",
            "value": "蒙阴县"
        }, {
            "code": "371329",
            "value": "临沭县"
        }]
    }, {
        "code": "3714",
        "value": "德州市",
        "cities": [{
            "code": "371401",
            "value": "市辖区"
        }, {
            "code": "371402",
            "value": "德城区"
        }, {
            "code": "371421",
            "value": "陵县"
        }, {
            "code": "371422",
            "value": "宁津县"
        }, {
            "code": "371423",
            "value": "庆云县"
        }, {
            "code": "371424",
            "value": "临邑县"
        }, {
            "code": "371425",
            "value": "齐河县"
        }, {
            "code": "371426",
            "value": "平原县"
        }, {
            "code": "371427",
            "value": "夏津县"
        }, {
            "code": "371428",
            "value": "武城县"
        }, {
            "code": "371481",
            "value": "乐陵市"
        }, {
            "code": "371482",
            "value": "禹城市"
        }]
    }, {
        "code": "3715",
        "value": "聊城市",
        "cities": [{
            "code": "371501",
            "value": "市辖区"
        }, {
            "code": "371502",
            "value": "东昌府区"
        }, {
            "code": "371521",
            "value": "阳谷县"
        }, {
            "code": "371522",
            "value": "莘县"
        }, {
            "code": "371523",
            "value": "茌平县"
        }, {
            "code": "371524",
            "value": "东阿县"
        }, {
            "code": "371525",
            "value": "冠县"
        }, {
            "code": "371526",
            "value": "高唐县"
        }, {
            "code": "371581",
            "value": "临清市"
        }]
    }, {
        "code": "3716",
        "value": "滨州市",
        "cities": [{
            "code": "371601",
            "value": "市辖区"
        }, {
            "code": "371602",
            "value": "滨城区"
        }, {
            "code": "371621",
            "value": "惠民县"
        }, {
            "code": "371622",
            "value": "阳信县"
        }, {
            "code": "371623",
            "value": "无棣县"
        }, {
            "code": "371624",
            "value": "沾化县"
        }, {
            "code": "371625",
            "value": "博兴县"
        }, {
            "code": "371626",
            "value": "邹平县"
        }]
    }, {
        "code": "3717",
        "value": "菏泽市",
        "cities": [{
            "code": "371701",
            "value": "市辖区"
        }, {
            "code": "371702",
            "value": "牡丹区"
        }, {
            "code": "371721",
            "value": "曹县"
        }, {
            "code": "371722",
            "value": "单县"
        }, {
            "code": "371723",
            "value": "成武县"
        }, {
            "code": "371724",
            "value": "巨野县"
        }, {
            "code": "371725",
            "value": "郓城县"
        }, {
            "code": "371726",
            "value": "鄄城县"
        }, {
            "code": "371727",
            "value": "定陶县"
        }, {
            "code": "371728",
            "value": "东明县"
        }]
    }]
}, {
    "code": "41",
    "value": "河南省",
    "states": [{
        "code": "4101",
        "value": "郑州市",
        "cities": [{
            "code": "410101",
            "value": "市辖区"
        }, {
            "code": "410102",
            "value": "中原区"
        }, {
            "code": "410103",
            "value": "二七区"
        }, {
            "code": "410104",
            "value": "管城回族区"
        }, {
            "code": "410105",
            "value": "金水区"
        }, {
            "code": "410106",
            "value": "上街区"
        }, {
            "code": "410108",
            "value": "惠济区"
        }, {
            "code": "410122",
            "value": "中牟县"
        }, {
            "code": "410181",
            "value": "巩义市"
        }, {
            "code": "410182",
            "value": "荥阳市"
        }, {
            "code": "410183",
            "value": "新密市"
        }, {
            "code": "410184",
            "value": "新郑市"
        }, {
            "code": "410185",
            "value": "登封市"
        }]
    }, {
        "code": "4102",
        "value": "开封市",
        "cities": [{
            "code": "410201",
            "value": "市辖区"
        }, {
            "code": "410202",
            "value": "龙亭区"
        }, {
            "code": "410203",
            "value": "顺河回族区"
        }, {
            "code": "410204",
            "value": "鼓楼区"
        }, {
            "code": "410205",
            "value": "禹王台区"
        }, {
            "code": "410211",
            "value": "金明区"
        }, {
            "code": "410221",
            "value": "杞县"
        }, {
            "code": "410222",
            "value": "通许县"
        }, {
            "code": "410223",
            "value": "尉氏县"
        }, {
            "code": "410224",
            "value": "开封县"
        }, {
            "code": "410225",
            "value": "兰考县"
        }]
    }, {
        "code": "4103",
        "value": "洛阳市",
        "cities": [{
            "code": "410301",
            "value": "市辖区"
        }, {
            "code": "410302",
            "value": "老城区"
        }, {
            "code": "410303",
            "value": "西工区"
        }, {
            "code": "410304",
            "value": "廛河回族区"
        }, {
            "code": "410305",
            "value": "涧西区"
        }, {
            "code": "410306",
            "value": "吉利区"
        }, {
            "code": "410307",
            "value": "洛龙区"
        }, {
            "code": "410322",
            "value": "孟津县"
        }, {
            "code": "410323",
            "value": "新安县"
        }, {
            "code": "410324",
            "value": "栾川县"
        }, {
            "code": "410325",
            "value": "嵩县"
        }, {
            "code": "410326",
            "value": "汝阳县"
        }, {
            "code": "410327",
            "value": "宜阳县"
        }, {
            "code": "410328",
            "value": "洛宁县"
        }, {
            "code": "410329",
            "value": "伊川县"
        }, {
            "code": "410381",
            "value": "偃师市"
        }]
    }, {
        "code": "4104",
        "value": "平顶山市",
        "cities": [{
            "code": "410401",
            "value": "市辖区"
        }, {
            "code": "410402",
            "value": "新华区"
        }, {
            "code": "410403",
            "value": "卫东区"
        }, {
            "code": "410404",
            "value": "石龙区"
        }, {
            "code": "410411",
            "value": "湛河区"
        }, {
            "code": "410421",
            "value": "宝丰县"
        }, {
            "code": "410422",
            "value": "叶县"
        }, {
            "code": "410423",
            "value": "鲁山县"
        }, {
            "code": "410425",
            "value": "郏县"
        }, {
            "code": "410481",
            "value": "舞钢市"
        }, {
            "code": "410482",
            "value": "汝州市"
        }]
    }, {
        "code": "4105",
        "value": "安阳市",
        "cities": [{
            "code": "410501",
            "value": "市辖区"
        }, {
            "code": "410502",
            "value": "文峰区"
        }, {
            "code": "410503",
            "value": "北关区"
        }, {
            "code": "410505",
            "value": "殷都区"
        }, {
            "code": "410506",
            "value": "龙安区"
        }, {
            "code": "410522",
            "value": "安阳县"
        }, {
            "code": "410523",
            "value": "汤阴县"
        }, {
            "code": "410526",
            "value": "滑县"
        }, {
            "code": "410527",
            "value": "内黄县"
        }, {
            "code": "410581",
            "value": "林州市"
        }]
    }, {
        "code": "4106",
        "value": "鹤壁市",
        "cities": [{
            "code": "410601",
            "value": "市辖区"
        }, {
            "code": "410602",
            "value": "鹤山区"
        }, {
            "code": "410603",
            "value": "山城区"
        }, {
            "code": "410611",
            "value": "淇滨区"
        }, {
            "code": "410621",
            "value": "浚县"
        }, {
            "code": "410622",
            "value": "淇县"
        }]
    }, {
        "code": "4107",
        "value": "新乡市",
        "cities": [{
            "code": "410701",
            "value": "市辖区"
        }, {
            "code": "410702",
            "value": "红旗区"
        }, {
            "code": "410703",
            "value": "卫滨区"
        }, {
            "code": "410704",
            "value": "凤泉区"
        }, {
            "code": "410711",
            "value": "牧野区"
        }, {
            "code": "410721",
            "value": "新乡县"
        }, {
            "code": "410724",
            "value": "获嘉县"
        }, {
            "code": "410725",
            "value": "原阳县"
        }, {
            "code": "410726",
            "value": "延津县"
        }, {
            "code": "410727",
            "value": "封丘县"
        }, {
            "code": "410728",
            "value": "长垣县"
        }, {
            "code": "410781",
            "value": "卫辉市"
        }, {
            "code": "410782",
            "value": "辉县市"
        }]
    }, {
        "code": "4108",
        "value": "焦作市",
        "cities": [{
            "code": "410801",
            "value": "市辖区"
        }, {
            "code": "410802",
            "value": "解放区"
        }, {
            "code": "410803",
            "value": "中站区"
        }, {
            "code": "410804",
            "value": "马村区"
        }, {
            "code": "410811",
            "value": "山阳区"
        }, {
            "code": "410821",
            "value": "修武县"
        }, {
            "code": "410822",
            "value": "博爱县"
        }, {
            "code": "410823",
            "value": "武陟县"
        }, {
            "code": "410825",
            "value": "温县"
        }, {
            "code": "410882",
            "value": "沁阳市"
        }, {
            "code": "410883",
            "value": "孟州市"
        }]
    }, {
        "code": "4109",
        "value": "濮阳市",
        "cities": [{
            "code": "410901",
            "value": "市辖区"
        }, {
            "code": "410902",
            "value": "华龙区"
        }, {
            "code": "410922",
            "value": "清丰县"
        }, {
            "code": "410923",
            "value": "南乐县"
        }, {
            "code": "410926",
            "value": "范县"
        }, {
            "code": "410927",
            "value": "台前县"
        }, {
            "code": "410928",
            "value": "濮阳县"
        }]
    }, {
        "code": "4110",
        "value": "许昌市",
        "cities": [{
            "code": "411001",
            "value": "市辖区"
        }, {
            "code": "411002",
            "value": "魏都区"
        }, {
            "code": "411023",
            "value": "许昌县"
        }, {
            "code": "411024",
            "value": "鄢陵县"
        }, {
            "code": "411025",
            "value": "襄城县"
        }, {
            "code": "411081",
            "value": "禹州市"
        }, {
            "code": "411082",
            "value": "长葛市"
        }]
    }, {
        "code": "4111",
        "value": "漯河市",
        "cities": [{
            "code": "411101",
            "value": "市辖区"
        }, {
            "code": "411102",
            "value": "源汇区"
        }, {
            "code": "411103",
            "value": "郾城区"
        }, {
            "code": "411104",
            "value": "召陵区"
        }, {
            "code": "411121",
            "value": "舞阳县"
        }, {
            "code": "411122",
            "value": "临颍县"
        }]
    }, {
        "code": "4112",
        "value": "三门峡市",
        "cities": [{
            "code": "411201",
            "value": "市辖区"
        }, {
            "code": "411202",
            "value": "湖滨区"
        }, {
            "code": "411221",
            "value": "渑池县"
        }, {
            "code": "411222",
            "value": "陕县"
        }, {
            "code": "411224",
            "value": "卢氏县"
        }, {
            "code": "411281",
            "value": "义马市"
        }, {
            "code": "411282",
            "value": "灵宝市"
        }]
    }, {
        "code": "4113",
        "value": "南阳市",
        "cities": [{
            "code": "411301",
            "value": "市辖区"
        }, {
            "code": "411302",
            "value": "宛城区"
        }, {
            "code": "411303",
            "value": "卧龙区"
        }, {
            "code": "411321",
            "value": "南召县"
        }, {
            "code": "411322",
            "value": "方城县"
        }, {
            "code": "411323",
            "value": "西峡县"
        }, {
            "code": "411324",
            "value": "镇平县"
        }, {
            "code": "411325",
            "value": "内乡县"
        }, {
            "code": "411326",
            "value": "淅川县"
        }, {
            "code": "411327",
            "value": "社旗县"
        }, {
            "code": "411328",
            "value": "唐河县"
        }, {
            "code": "411329",
            "value": "新野县"
        }, {
            "code": "411330",
            "value": "桐柏县"
        }, {
            "code": "411381",
            "value": "邓州市"
        }]
    }, {
        "code": "4114",
        "value": "商丘市",
        "cities": [{
            "code": "411401",
            "value": "市辖区"
        }, {
            "code": "411402",
            "value": "梁园区"
        }, {
            "code": "411403",
            "value": "睢阳区"
        }, {
            "code": "411421",
            "value": "民权县"
        }, {
            "code": "411422",
            "value": "睢县"
        }, {
            "code": "411423",
            "value": "宁陵县"
        }, {
            "code": "411424",
            "value": "柘城县"
        }, {
            "code": "411425",
            "value": "虞城县"
        }, {
            "code": "411426",
            "value": "夏邑县"
        }, {
            "code": "411481",
            "value": "永城市"
        }]
    }, {
        "code": "4115",
        "value": "信阳市",
        "cities": [{
            "code": "411501",
            "value": "市辖区"
        }, {
            "code": "411502",
            "value": "浉河区"
        }, {
            "code": "411503",
            "value": "平桥区"
        }, {
            "code": "411521",
            "value": "罗山县"
        }, {
            "code": "411522",
            "value": "光山县"
        }, {
            "code": "411523",
            "value": "新县"
        }, {
            "code": "411524",
            "value": "商城县"
        }, {
            "code": "411525",
            "value": "固始县"
        }, {
            "code": "411526",
            "value": "潢川县"
        }, {
            "code": "411527",
            "value": "淮滨县"
        }, {
            "code": "411528",
            "value": "息县"
        }]
    }, {
        "code": "4116",
        "value": "周口市",
        "cities": [{
            "code": "411601",
            "value": "市辖区"
        }, {
            "code": "411602",
            "value": "川汇区"
        }, {
            "code": "411621",
            "value": "扶沟县"
        }, {
            "code": "411622",
            "value": "西华县"
        }, {
            "code": "411623",
            "value": "商水县"
        }, {
            "code": "411624",
            "value": "沈丘县"
        }, {
            "code": "411625",
            "value": "郸城县"
        }, {
            "code": "411626",
            "value": "淮阳县"
        }, {
            "code": "411627",
            "value": "太康县"
        }, {
            "code": "411628",
            "value": "鹿邑县"
        }, {
            "code": "411681",
            "value": "项城市"
        }]
    }, {
        "code": "4117",
        "value": "驻马店市",
        "cities": [{
            "code": "411701",
            "value": "市辖区"
        }, {
            "code": "411702",
            "value": "驿城区"
        }, {
            "code": "411721",
            "value": "西平县"
        }, {
            "code": "411722",
            "value": "上蔡县"
        }, {
            "code": "411723",
            "value": "平舆县"
        }, {
            "code": "411724",
            "value": "正阳县"
        }, {
            "code": "411725",
            "value": "确山县"
        }, {
            "code": "411726",
            "value": "泌阳县"
        }, {
            "code": "411727",
            "value": "汝南县"
        }, {
            "code": "411728",
            "value": "遂平县"
        }, {
            "code": "411729",
            "value": "新蔡县"
        }]
    }]
}, {
    "code": "42",
    "value": "湖北省",
    "states": [{
        "code": "4201",
        "value": "武汉市",
        "cities": [{
            "code": "420101",
            "value": "市辖区"
        }, {
            "code": "420102",
            "value": "江岸区"
        }, {
            "code": "420103",
            "value": "江汉区"
        }, {
            "code": "420104",
            "value": "硚口区"
        }, {
            "code": "420105",
            "value": "汉阳区"
        }, {
            "code": "420106",
            "value": "武昌区"
        }, {
            "code": "420107",
            "value": "青山区"
        }, {
            "code": "420111",
            "value": "洪山区"
        }, {
            "code": "420112",
            "value": "东西湖区"
        }, {
            "code": "420113",
            "value": "汉南区"
        }, {
            "code": "420114",
            "value": "蔡甸区"
        }, {
            "code": "420115",
            "value": "江夏区"
        }, {
            "code": "420116",
            "value": "黄陂区"
        }, {
            "code": "420117",
            "value": "新洲区"
        }]
    }, {
        "code": "4202",
        "value": "黄石市",
        "cities": [{
            "code": "420201",
            "value": "市辖区"
        }, {
            "code": "420202",
            "value": "黄石港区"
        }, {
            "code": "420203",
            "value": "西塞山区"
        }, {
            "code": "420204",
            "value": "下陆区"
        }, {
            "code": "420205",
            "value": "铁山区"
        }, {
            "code": "420222",
            "value": "阳新县"
        }, {
            "code": "420281",
            "value": "大冶市"
        }]
    }, {
        "code": "4203",
        "value": "十堰市",
        "cities": [{
            "code": "420301",
            "value": "市辖区"
        }, {
            "code": "420302",
            "value": "茅箭区"
        }, {
            "code": "420303",
            "value": "张湾区"
        }, {
            "code": "420321",
            "value": "郧县"
        }, {
            "code": "420322",
            "value": "郧西县"
        }, {
            "code": "420323",
            "value": "竹山县"
        }, {
            "code": "420324",
            "value": "竹溪县"
        }, {
            "code": "420325",
            "value": "房县"
        }, {
            "code": "420381",
            "value": "丹江口市"
        }]
    }, {
        "code": "4205",
        "value": "宜昌市",
        "cities": [{
            "code": "420501",
            "value": "市辖区"
        }, {
            "code": "420502",
            "value": "西陵区"
        }, {
            "code": "420503",
            "value": "伍家岗区"
        }, {
            "code": "420504",
            "value": "点军区"
        }, {
            "code": "420505",
            "value": "猇亭区"
        }, {
            "code": "420506",
            "value": "夷陵区"
        }, {
            "code": "420525",
            "value": "远安县"
        }, {
            "code": "420526",
            "value": "兴山县"
        }, {
            "code": "420527",
            "value": "秭归县"
        }, {
            "code": "420528",
            "value": "长阳县"
        }, {
            "code": "420529",
            "value": "五峰县"
        }, {
            "code": "420581",
            "value": "宜都市"
        }, {
            "code": "420582",
            "value": "当阳市"
        }, {
            "code": "420583",
            "value": "枝江市"
        }]
    }, {
        "code": "4206",
        "value": "襄阳市",
        "cities": [{
            "code": "420601",
            "value": "市辖区"
        }, {
            "code": "420602",
            "value": "襄城区"
        }, {
            "code": "420606",
            "value": "樊城区"
        }, {
            "code": "420607",
            "value": "襄州区"
        }, {
            "code": "420624",
            "value": "南漳县"
        }, {
            "code": "420625",
            "value": "谷城县"
        }, {
            "code": "420626",
            "value": "保康县"
        }, {
            "code": "420682",
            "value": "老河口市"
        }, {
            "code": "420683",
            "value": "枣阳市"
        }, {
            "code": "420684",
            "value": "宜城市"
        }]
    }, {
        "code": "4207",
        "value": "鄂州市",
        "cities": [{
            "code": "420701",
            "value": "市辖区"
        }, {
            "code": "420702",
            "value": "梁子湖区"
        }, {
            "code": "420703",
            "value": "华容区"
        }, {
            "code": "420704",
            "value": "鄂城区"
        }]
    }, {
        "code": "4208",
        "value": "荆门市",
        "cities": [{
            "code": "420801",
            "value": "市辖区"
        }, {
            "code": "420802",
            "value": "东宝区"
        }, {
            "code": "420804",
            "value": "掇刀区"
        }, {
            "code": "420821",
            "value": "京山县"
        }, {
            "code": "420822",
            "value": "沙洋县"
        }, {
            "code": "420881",
            "value": "钟祥市"
        }]
    }, {
        "code": "4209",
        "value": "孝感市",
        "cities": [{
            "code": "420901",
            "value": "市辖区"
        }, {
            "code": "420902",
            "value": "孝南区"
        }, {
            "code": "420921",
            "value": "孝昌县"
        }, {
            "code": "420922",
            "value": "大悟县"
        }, {
            "code": "420923",
            "value": "云梦县"
        }, {
            "code": "420981",
            "value": "应城市"
        }, {
            "code": "420982",
            "value": "安陆市"
        }, {
            "code": "420984",
            "value": "汉川市"
        }]
    }, {
        "code": "4210",
        "value": "荆州市",
        "cities": [{
            "code": "421001",
            "value": "市辖区"
        }, {
            "code": "421002",
            "value": "区"
        }, {
            "code": "421003",
            "value": "荆州区"
        }, {
            "code": "421022",
            "value": "公安县"
        }, {
            "code": "421023",
            "value": "监利县"
        }, {
            "code": "421024",
            "value": "江陵县"
        }, {
            "code": "421081",
            "value": "石首市"
        }, {
            "code": "421083",
            "value": "洪湖市"
        }, {
            "code": "421087",
            "value": "松滋市"
        }]
    }, {
        "code": "4211",
        "value": "黄冈市",
        "cities": [{
            "code": "421101",
            "value": "市辖区"
        }, {
            "code": "421102",
            "value": "黄州区"
        }, {
            "code": "421121",
            "value": "团风县"
        }, {
            "code": "421122",
            "value": "红安县"
        }, {
            "code": "421123",
            "value": "罗田县"
        }, {
            "code": "421124",
            "value": "英山县"
        }, {
            "code": "421125",
            "value": "浠水县"
        }, {
            "code": "421126",
            "value": "蕲春县"
        }, {
            "code": "421127",
            "value": "黄梅县"
        }, {
            "code": "421181",
            "value": "麻城市"
        }, {
            "code": "421182",
            "value": "武穴市"
        }]
    }, {
        "code": "4212",
        "value": "咸宁市",
        "cities": [{
            "code": "421201",
            "value": "市辖区"
        }, {
            "code": "421202",
            "value": "咸安区"
        }, {
            "code": "421221",
            "value": "嘉鱼县"
        }, {
            "code": "421222",
            "value": "通城县"
        }, {
            "code": "421223",
            "value": "崇阳县"
        }, {
            "code": "421224",
            "value": "通山县"
        }, {
            "code": "421281",
            "value": "赤壁市"
        }]
    }, {
        "code": "4213",
        "value": "随州市",
        "cities": [{
            "code": "421301",
            "value": "市辖区"
        }, {
            "code": "421303",
            "value": "曾都区"
        }, {
            "code": "421321",
            "value": "随县"
        }, {
            "code": "421381",
            "value": "广水市"
        }]
    }, {
        "code": "4228",
        "value": "恩施土家族苗族自治州",
        "cities": [{
            "code": "422801",
            "value": "恩施市"
        }, {
            "code": "422802",
            "value": "利川市"
        }, {
            "code": "422822",
            "value": "建始县"
        }, {
            "code": "422823",
            "value": "巴东县"
        }, {
            "code": "422825",
            "value": "宣恩县"
        }, {
            "code": "422826",
            "value": "咸丰县"
        }, {
            "code": "422827",
            "value": "来凤县"
        }, {
            "code": "422828",
            "value": "鹤峰县"
        }]
    }]
}, {
    "code": "43",
    "value": "湖南省",
    "states": [{
        "code": "4301",
        "value": "长沙市",
        "cities": [{
            "code": "430101",
            "value": "市辖区"
        }, {
            "code": "430102",
            "value": "芙蓉区"
        }, {
            "code": "430103",
            "value": "天心区"
        }, {
            "code": "430104",
            "value": "岳麓区"
        }, {
            "code": "430105",
            "value": "开福区"
        }, {
            "code": "430111",
            "value": "雨花区"
        }, {
            "code": "430112",
            "value": "望城区"
        }, {
            "code": "430121",
            "value": "长沙县"
        }, {
            "code": "430124",
            "value": "宁乡县"
        }, {
            "code": "430181",
            "value": "浏阳市"
        }]
    }, {
        "code": "4302",
        "value": "株洲市",
        "cities": [{
            "code": "430201",
            "value": "市辖区"
        }, {
            "code": "430202",
            "value": "荷塘区"
        }, {
            "code": "430203",
            "value": "芦淞区"
        }, {
            "code": "430204",
            "value": "石峰区"
        }, {
            "code": "430211",
            "value": "天元区"
        }, {
            "code": "430221",
            "value": "株洲县"
        }, {
            "code": "430223",
            "value": "攸县"
        }, {
            "code": "430224",
            "value": "茶陵县"
        }, {
            "code": "430225",
            "value": "炎陵县"
        }, {
            "code": "430281",
            "value": "醴陵市"
        }]
    }, {
        "code": "4303",
        "value": "湘潭市",
        "cities": [{
            "code": "430301",
            "value": "市辖区"
        }, {
            "code": "430302",
            "value": "雨湖区"
        }, {
            "code": "430304",
            "value": "岳塘区"
        }, {
            "code": "430321",
            "value": "湘潭县"
        }, {
            "code": "430381",
            "value": "湘乡市"
        }, {
            "code": "430382",
            "value": "韶山市"
        }]
    }, {
        "code": "4304",
        "value": "衡阳市",
        "cities": [{
            "code": "430401",
            "value": "市辖区"
        }, {
            "code": "430405",
            "value": "珠晖区"
        }, {
            "code": "430406",
            "value": "雁峰区"
        }, {
            "code": "430407",
            "value": "石鼓区"
        }, {
            "code": "430408",
            "value": "蒸湘区"
        }, {
            "code": "430412",
            "value": "南岳区"
        }, {
            "code": "430421",
            "value": "衡阳县"
        }, {
            "code": "430422",
            "value": "衡南县"
        }, {
            "code": "430423",
            "value": "衡山县"
        }, {
            "code": "430424",
            "value": "衡东县"
        }, {
            "code": "430426",
            "value": "祁东县"
        }, {
            "code": "430481",
            "value": "耒阳市"
        }, {
            "code": "430482",
            "value": "常宁市"
        }]
    }, {
        "code": "4305",
        "value": "邵阳市",
        "cities": [{
            "code": "430501",
            "value": "市辖区"
        }, {
            "code": "430502",
            "value": "双清区"
        }, {
            "code": "430503",
            "value": "大祥区"
        }, {
            "code": "430511",
            "value": "北塔区"
        }, {
            "code": "430521",
            "value": "邵东县"
        }, {
            "code": "430522",
            "value": "新邵县"
        }, {
            "code": "430523",
            "value": "邵阳县"
        }, {
            "code": "430524",
            "value": "隆回县"
        }, {
            "code": "430525",
            "value": "洞口县"
        }, {
            "code": "430527",
            "value": "绥宁县"
        }, {
            "code": "430528",
            "value": "新宁县"
        }, {
            "code": "430529",
            "value": "城步县"
        }, {
            "code": "430581",
            "value": "武冈市"
        }]
    }, {
        "code": "4306",
        "value": "岳阳市",
        "cities": [{
            "code": "430601",
            "value": "市辖区"
        }, {
            "code": "430602",
            "value": "岳阳楼区"
        }, {
            "code": "430603",
            "value": "云溪区"
        }, {
            "code": "430611",
            "value": "君山区"
        }, {
            "code": "430621",
            "value": "岳阳县"
        }, {
            "code": "430623",
            "value": "华容县"
        }, {
            "code": "430624",
            "value": "湘阴县"
        }, {
            "code": "430626",
            "value": "平江县"
        }, {
            "code": "430681",
            "value": "汨罗市"
        }, {
            "code": "430682",
            "value": "临湘市"
        }]
    }, {
        "code": "4307",
        "value": "常德市",
        "cities": [{
            "code": "430701",
            "value": "市辖区"
        }, {
            "code": "430702",
            "value": "武陵区"
        }, {
            "code": "430703",
            "value": "鼎城区"
        }, {
            "code": "430721",
            "value": "安乡县"
        }, {
            "code": "430722",
            "value": "汉寿县"
        }, {
            "code": "430723",
            "value": "澧县"
        }, {
            "code": "430724",
            "value": "临澧县"
        }, {
            "code": "430725",
            "value": "桃源县"
        }, {
            "code": "430726",
            "value": "石门县"
        }, {
            "code": "430781",
            "value": "津市市"
        }]
    }, {
        "code": "4308",
        "value": "张家界市",
        "cities": [{
            "code": "430801",
            "value": "市辖区"
        }, {
            "code": "430802",
            "value": "永定区"
        }, {
            "code": "430811",
            "value": "武陵源区"
        }, {
            "code": "430821",
            "value": "慈利县"
        }, {
            "code": "430822",
            "value": "桑植县"
        }]
    }, {
        "code": "4309",
        "value": "益阳市",
        "cities": [{
            "code": "430901",
            "value": "市辖区"
        }, {
            "code": "430902",
            "value": "资阳区"
        }, {
            "code": "430903",
            "value": "赫山区"
        }, {
            "code": "430921",
            "value": "南县"
        }, {
            "code": "430922",
            "value": "桃江县"
        }, {
            "code": "430923",
            "value": "安化县"
        }, {
            "code": "430981",
            "value": "沅江市"
        }]
    }, {
        "code": "4310",
        "value": "郴州市",
        "cities": [{
            "code": "431001",
            "value": "市辖区"
        }, {
            "code": "431002",
            "value": "北湖区"
        }, {
            "code": "431003",
            "value": "苏仙区"
        }, {
            "code": "431021",
            "value": "桂阳县"
        }, {
            "code": "431022",
            "value": "宜章县"
        }, {
            "code": "431023",
            "value": "永兴县"
        }, {
            "code": "431024",
            "value": "嘉禾县"
        }, {
            "code": "431025",
            "value": "临武县"
        }, {
            "code": "431026",
            "value": "汝城县"
        }, {
            "code": "431027",
            "value": "桂东县"
        }, {
            "code": "431028",
            "value": "安仁县"
        }, {
            "code": "431081",
            "value": "资兴市"
        }]
    }, {
        "code": "4311",
        "value": "永州市",
        "cities": [{
            "code": "431101",
            "value": "市辖区"
        }, {
            "code": "431102",
            "value": "零陵区"
        }, {
            "code": "431103",
            "value": "冷水滩区"
        }, {
            "code": "431121",
            "value": "祁阳县"
        }, {
            "code": "431122",
            "value": "东安县"
        }, {
            "code": "431123",
            "value": "双牌县"
        }, {
            "code": "431124",
            "value": "道县"
        }, {
            "code": "431125",
            "value": "江永县"
        }, {
            "code": "431126",
            "value": "宁远县"
        }, {
            "code": "431127",
            "value": "蓝山县"
        }, {
            "code": "431128",
            "value": "新田县"
        }, {
            "code": "431129",
            "value": "江华县"
        }]
    }, {
        "code": "4312",
        "value": "怀化市",
        "cities": [{
            "code": "431201",
            "value": "市辖区"
        }, {
            "code": "431202",
            "value": "鹤城区"
        }, {
            "code": "431221",
            "value": "中方县"
        }, {
            "code": "431222",
            "value": "沅陵县"
        }, {
            "code": "431223",
            "value": "辰溪县"
        }, {
            "code": "431224",
            "value": "溆浦县"
        }, {
            "code": "431225",
            "value": "会同县"
        }, {
            "code": "431226",
            "value": "麻阳县"
        }, {
            "code": "431227",
            "value": "新晃县"
        }, {
            "code": "431228",
            "value": "芷江县"
        }, {
            "code": "431229",
            "value": "靖州县"
        }, {
            "code": "431230",
            "value": "通道县"
        }, {
            "code": "431281",
            "value": "洪江市"
        }]
    }, {
        "code": "4313",
        "value": "娄底市",
        "cities": [{
            "code": "431301",
            "value": "市辖区"
        }, {
            "code": "431302",
            "value": "娄星区"
        }, {
            "code": "431321",
            "value": "双峰县"
        }, {
            "code": "431322",
            "value": "新化县"
        }, {
            "code": "431381",
            "value": "冷水江市"
        }, {
            "code": "431382",
            "value": "涟源市"
        }]
    }, {
        "code": "4331",
        "value": "湘西土家族苗族自治州",
        "cities": [{
            "code": "433101",
            "value": "吉首市"
        }, {
            "code": "433122",
            "value": "泸溪县"
        }, {
            "code": "433123",
            "value": "凤凰县"
        }, {
            "code": "433124",
            "value": "花垣县"
        }, {
            "code": "433125",
            "value": "保靖县"
        }, {
            "code": "433126",
            "value": "古丈县"
        }, {
            "code": "433127",
            "value": "永顺县"
        }, {
            "code": "433130",
            "value": "龙山县"
        }]
    }]
}, {
    "code": "44",
    "value": "广东省",
    "states": [{
        "code": "4401",
        "value": "广州市",
        "cities": [{
            "code": "440101",
            "value": "市辖区"
        }, {
            "code": "440103",
            "value": "荔湾区"
        }, {
            "code": "440104",
            "value": "越秀区"
        }, {
            "code": "440105",
            "value": "海珠区"
        }, {
            "code": "440106",
            "value": "天河区"
        }, {
            "code": "440111",
            "value": "白云区"
        }, {
            "code": "440112",
            "value": "黄埔区"
        }, {
            "code": "440113",
            "value": "番禺区"
        }, {
            "code": "440114",
            "value": "花都区"
        }, {
            "code": "440115",
            "value": "南沙区"
        }, {
            "code": "440116",
            "value": "萝岗区"
        }, {
            "code": "440183",
            "value": "增城区"
        }, {
            "code": "440184",
            "value": "从化区"
        }]
    }, {
        "code": "4402",
        "value": "韶关市",
        "cities": [{
            "code": "440201",
            "value": "市辖区"
        }, {
            "code": "440203",
            "value": "武江区"
        }, {
            "code": "440204",
            "value": "浈江区"
        }, {
            "code": "440205",
            "value": "曲江区"
        }, {
            "code": "440222",
            "value": "始兴县"
        }, {
            "code": "440224",
            "value": "仁化县"
        }, {
            "code": "440229",
            "value": "翁源县"
        }, {
            "code": "440232",
            "value": "乳源县"
        }, {
            "code": "440233",
            "value": "新丰县"
        }, {
            "code": "440281",
            "value": "乐昌市"
        }, {
            "code": "440282",
            "value": "南雄市"
        }]
    }, {
        "code": "4403",
        "value": "深圳市",
        "cities": [{
            "code": "440301",
            "value": "市辖区"
        }, {
            "code": "440303",
            "value": "罗湖区"
        }, {
            "code": "440304",
            "value": "福田区"
        }, {
            "code": "440305",
            "value": "南山区"
        }, {
            "code": "440306",
            "value": "宝安区"
        }, {
            "code": "440307",
            "value": "龙岗区"
        }, {
            "code": "440308",
            "value": "盐田区"
        }]
    }, {
        "code": "4404",
        "value": "珠海市",
        "cities": [{
            "code": "440401",
            "value": "市辖区"
        }, {
            "code": "440402",
            "value": "香洲区"
        }, {
            "code": "440403",
            "value": "斗门区"
        }, {
            "code": "440404",
            "value": "金湾区"
        }]
    }, {
        "code": "4405",
        "value": "汕头市",
        "cities": [{
            "code": "440501",
            "value": "市辖区"
        }, {
            "code": "440507",
            "value": "龙湖区"
        }, {
            "code": "440511",
            "value": "金平区"
        }, {
            "code": "440512",
            "value": "濠江区"
        }, {
            "code": "440513",
            "value": "潮阳区"
        }, {
            "code": "440514",
            "value": "潮南区"
        }, {
            "code": "440515",
            "value": "澄海区"
        }, {
            "code": "440523",
            "value": "南澳县"
        }]
    }, {
        "code": "4406",
        "value": "佛山市",
        "cities": [{
            "code": "440601",
            "value": "市辖区"
        }, {
            "code": "440604",
            "value": "禅城区"
        }, {
            "code": "440605",
            "value": "南海区"
        }, {
            "code": "440606",
            "value": "顺德区"
        }, {
            "code": "440607",
            "value": "三水区"
        }, {
            "code": "440608",
            "value": "高明区"
        }]
    }, {
        "code": "4407",
        "value": "江门市",
        "cities": [{
            "code": "440701",
            "value": "市辖区"
        }, {
            "code": "440703",
            "value": "蓬江区"
        }, {
            "code": "440704",
            "value": "江海区"
        }, {
            "code": "440705",
            "value": "新会区"
        }, {
            "code": "440781",
            "value": "台山市"
        }, {
            "code": "440783",
            "value": "开平市"
        }, {
            "code": "440784",
            "value": "鹤山市"
        }, {
            "code": "440785",
            "value": "恩平市"
        }]
    }, {
        "code": "4408",
        "value": "湛江市",
        "cities": [{
            "code": "440801",
            "value": "市辖区"
        }, {
            "code": "440802",
            "value": "赤坎区"
        }, {
            "code": "440803",
            "value": "霞山区"
        }, {
            "code": "440804",
            "value": "坡头区"
        }, {
            "code": "440811",
            "value": "麻章区"
        }, {
            "code": "440823",
            "value": "遂溪县"
        }, {
            "code": "440825",
            "value": "徐闻县"
        }, {
            "code": "440881",
            "value": "廉江市"
        }, {
            "code": "440882",
            "value": "雷州市"
        }, {
            "code": "440883",
            "value": "吴川市"
        }]
    }, {
        "code": "4409",
        "value": "茂名市",
        "cities": [{
            "code": "440901",
            "value": "市辖区"
        }, {
            "code": "440902",
            "value": "茂南区"
        }, {
            "code": "440903",
            "value": "茂港区"
        }, {
            "code": "440923",
            "value": "电白县"
        }, {
            "code": "440981",
            "value": "高州市"
        }, {
            "code": "440982",
            "value": "化州市"
        }, {
            "code": "440983",
            "value": "信宜市"
        }]
    }, {
        "code": "4412",
        "value": "肇庆市",
        "cities": [{
            "code": "441201",
            "value": "市辖区"
        }, {
            "code": "441202",
            "value": "端州区"
        }, {
            "code": "441203",
            "value": "鼎湖区"
        }, {
            "code": "441223",
            "value": "广宁县"
        }, {
            "code": "441224",
            "value": "怀集县"
        }, {
            "code": "441225",
            "value": "封开县"
        }, {
            "code": "441226",
            "value": "德庆县"
        }, {
            "code": "441283",
            "value": "高要市"
        }, {
            "code": "441284",
            "value": "四会市"
        }]
    }, {
        "code": "4413",
        "value": "惠州市",
        "cities": [{
            "code": "441301",
            "value": "市辖区"
        }, {
            "code": "441302",
            "value": "惠城区"
        }, {
            "code": "441303",
            "value": "惠阳区"
        }, {
            "code": "441322",
            "value": "博罗县"
        }, {
            "code": "441323",
            "value": "惠东县"
        }, {
            "code": "441324",
            "value": "龙门县"
        }]
    }, {
        "code": "4414",
        "value": "梅州市",
        "cities": [{
            "code": "441401",
            "value": "市辖区"
        }, {
            "code": "441402",
            "value": "梅江区"
        }, {
            "code": "441421",
            "value": "梅县"
        }, {
            "code": "441422",
            "value": "大埔县"
        }, {
            "code": "441423",
            "value": "丰顺县"
        }, {
            "code": "441424",
            "value": "五华县"
        }, {
            "code": "441426",
            "value": "平远县"
        }, {
            "code": "441427",
            "value": "蕉岭县"
        }, {
            "code": "441481",
            "value": "兴宁市"
        }]
    }, {
        "code": "4415",
        "value": "汕尾市",
        "cities": [{
            "code": "441501",
            "value": "市辖区"
        }, {
            "code": "441502",
            "value": "城区"
        }, {
            "code": "441521",
            "value": "海丰县"
        }, {
            "code": "441523",
            "value": "陆河县"
        }, {
            "code": "441581",
            "value": "陆丰市"
        }]
    }, {
        "code": "4416",
        "value": "河源市",
        "cities": [{
            "code": "441601",
            "value": "市辖区"
        }, {
            "code": "441602",
            "value": "源城区"
        }, {
            "code": "441621",
            "value": "紫金县"
        }, {
            "code": "441622",
            "value": "龙川县"
        }, {
            "code": "441623",
            "value": "连平县"
        }, {
            "code": "441624",
            "value": "和平县"
        }, {
            "code": "441625",
            "value": "东源县"
        }]
    }, {
        "code": "4417",
        "value": "阳江市",
        "cities": [{
            "code": "441701",
            "value": "市辖区"
        }, {
            "code": "441702",
            "value": "江城区"
        }, {
            "code": "441721",
            "value": "阳西县"
        }, {
            "code": "441723",
            "value": "阳东县"
        }, {
            "code": "441781",
            "value": "阳春市"
        }]
    }, {
        "code": "4418",
        "value": "清远市",
        "cities": [{
            "code": "441801",
            "value": "市辖区"
        }, {
            "code": "441802",
            "value": "清城区"
        }, {
            "code": "441803",
            "value": "清新区"
        }, {
            "code": "441821",
            "value": "佛冈县"
        }, {
            "code": "441823",
            "value": "阳山县"
        }, {
            "code": "441825",
            "value": "连山县"
        }, {
            "code": "441826",
            "value": "连南县"
        }, {
            "code": "441881",
            "value": "英德市"
        }, {
            "code": "441882",
            "value": "连州市"
        }]
    }, {
        "code": "4419",
        "value": "东莞市",
        "cities": []
    }, {
        "code": "4420",
        "value": "中山市",
        "cities": []
    }, {
        "code": "4451",
        "value": "潮州市",
        "cities": [{
            "code": "445101",
            "value": "市辖区"
        }, {
            "code": "445102",
            "value": "湘桥区"
        }, {
            "code": "445121",
            "value": "潮安县"
        }, {
            "code": "445122",
            "value": "饶平县"
        }]
    }, {
        "code": "4452",
        "value": "揭阳市",
        "cities": [{
            "code": "445201",
            "value": "市辖区"
        }, {
            "code": "445202",
            "value": "榕城区"
        }, {
            "code": "445221",
            "value": "揭东县"
        }, {
            "code": "445222",
            "value": "揭西县"
        }, {
            "code": "445224",
            "value": "惠来县"
        }, {
            "code": "445281",
            "value": "普宁市"
        }]
    }, {
        "code": "4453",
        "value": "云浮市",
        "cities": [{
            "code": "445301",
            "value": "市辖区"
        }, {
            "code": "445302",
            "value": "云城区"
        }, {
            "code": "445321",
            "value": "新兴县"
        }, {
            "code": "445322",
            "value": "郁南县"
        }, {
            "code": "445323",
            "value": "云安县"
        }, {
            "code": "445381",
            "value": "罗定市"
        }]
    }]
}, {
    "code": "45",
    "value": "广西壮族自治区",
    "states": [{
        "code": "4501",
        "value": "南宁市",
        "cities": [{
            "code": "450101",
            "value": "市辖区"
        }, {
            "code": "450102",
            "value": "兴宁区"
        }, {
            "code": "450103",
            "value": "青秀区"
        }, {
            "code": "450105",
            "value": "江南区"
        }, {
            "code": "450107",
            "value": "西乡塘区"
        }, {
            "code": "450108",
            "value": "良庆区"
        }, {
            "code": "450109",
            "value": "邕宁区"
        }, {
            "code": "450122",
            "value": "武鸣县"
        }, {
            "code": "450123",
            "value": "隆安县"
        }, {
            "code": "450124",
            "value": "马山县"
        }, {
            "code": "450125",
            "value": "上林县"
        }, {
            "code": "450126",
            "value": "宾阳县"
        }, {
            "code": "450127",
            "value": "横县"
        }]
    }, {
        "code": "4502",
        "value": "柳州市",
        "cities": [{
            "code": "450201",
            "value": "市辖区"
        }, {
            "code": "450202",
            "value": "城中区"
        }, {
            "code": "450203",
            "value": "鱼峰区"
        }, {
            "code": "450204",
            "value": "柳南区"
        }, {
            "code": "450205",
            "value": "柳北区"
        }, {
            "code": "450221",
            "value": "柳江县"
        }, {
            "code": "450222",
            "value": "柳城县"
        }, {
            "code": "450223",
            "value": "鹿寨县"
        }, {
            "code": "450224",
            "value": "融安县"
        }, {
            "code": "450225",
            "value": "融水县"
        }, {
            "code": "450226",
            "value": "三江县"
        }]
    }, {
        "code": "4503",
        "value": "桂林市",
        "cities": [{
            "code": "450301",
            "value": "市辖区"
        }, {
            "code": "450302",
            "value": "秀峰区"
        }, {
            "code": "450303",
            "value": "叠彩区"
        }, {
            "code": "450304",
            "value": "象山区"
        }, {
            "code": "450305",
            "value": "七星区"
        }, {
            "code": "450311",
            "value": "雁山区"
        }, {
            "code": "450312",
            "value": "临桂区"
        }, {
            "code": "450321",
            "value": "阳朔县"
        }, {
            "code": "450323",
            "value": "灵川县"
        }, {
            "code": "450324",
            "value": "全州县"
        }, {
            "code": "450325",
            "value": "兴安县"
        }, {
            "code": "450326",
            "value": "永福县"
        }, {
            "code": "450327",
            "value": "灌阳县"
        }, {
            "code": "450328",
            "value": "龙胜县"
        }, {
            "code": "450329",
            "value": "资源县"
        }, {
            "code": "450330",
            "value": "平乐县"
        }, {
            "code": "450331",
            "value": "荔蒲县"
        }, {
            "code": "450332",
            "value": "恭城县"
        }]
    }, {
        "code": "4504",
        "value": "梧州市",
        "cities": [{
            "code": "450401",
            "value": "市辖区"
        }, {
            "code": "450403",
            "value": "万秀区"
        }, {
            "code": "450405",
            "value": "长洲区"
        }, {
            "code": "450406",
            "value": "龙圩区"
        }, {
            "code": "450421",
            "value": "苍梧县"
        }, {
            "code": "450422",
            "value": "藤县"
        }, {
            "code": "450423",
            "value": "蒙山县"
        }, {
            "code": "450481",
            "value": "岑溪市"
        }]
    }, {
        "code": "4505",
        "value": "北海市",
        "cities": [{
            "code": "450501",
            "value": "市辖区"
        }, {
            "code": "450502",
            "value": "海城区"
        }, {
            "code": "450503",
            "value": "银海区"
        }, {
            "code": "450512",
            "value": "铁山港区"
        }, {
            "code": "450521",
            "value": "合浦县"
        }]
    }, {
        "code": "4506",
        "value": "防城港市",
        "cities": [{
            "code": "450601",
            "value": "市辖区"
        }, {
            "code": "450602",
            "value": "港口区"
        }, {
            "code": "450603",
            "value": "防城区"
        }, {
            "code": "450621",
            "value": "上思县"
        }, {
            "code": "450681",
            "value": "东兴市"
        }]
    }, {
        "code": "4507",
        "value": "钦州市",
        "cities": [{
            "code": "450701",
            "value": "市辖区"
        }, {
            "code": "450702",
            "value": "钦南区"
        }, {
            "code": "450703",
            "value": "钦北区"
        }, {
            "code": "450721",
            "value": "灵山县"
        }, {
            "code": "450722",
            "value": "浦北县"
        }]
    }, {
        "code": "4508",
        "value": "贵港市",
        "cities": [{
            "code": "450801",
            "value": "市辖区"
        }, {
            "code": "450802",
            "value": "港北区"
        }, {
            "code": "450803",
            "value": "港南区"
        }, {
            "code": "450804",
            "value": "覃塘区"
        }, {
            "code": "450821",
            "value": "平南县"
        }, {
            "code": "450881",
            "value": "桂平市"
        }]
    }, {
        "code": "4509",
        "value": "玉林市",
        "cities": [{
            "code": "450901",
            "value": "市辖区"
        }, {
            "code": "450902",
            "value": "玉州区"
        }, {
            "code": "450903",
            "value": "福绵区"
        }, {
            "code": "450921",
            "value": "容县"
        }, {
            "code": "450922",
            "value": "陆川县"
        }, {
            "code": "450923",
            "value": "博白县"
        }, {
            "code": "450924",
            "value": "兴业县"
        }, {
            "code": "450981",
            "value": "北流市"
        }]
    }, {
        "code": "4510",
        "value": "百色市",
        "cities": [{
            "code": "451001",
            "value": "市辖区"
        }, {
            "code": "451002",
            "value": "右江区"
        }, {
            "code": "451021",
            "value": "田阳县"
        }, {
            "code": "451022",
            "value": "田东县"
        }, {
            "code": "451023",
            "value": "平果县"
        }, {
            "code": "451024",
            "value": "德保县"
        }, {
            "code": "451025",
            "value": "靖西县"
        }, {
            "code": "451026",
            "value": "那坡县"
        }, {
            "code": "451027",
            "value": "凌云县"
        }, {
            "code": "451028",
            "value": "乐业县"
        }, {
            "code": "451029",
            "value": "田林县"
        }, {
            "code": "451030",
            "value": "西林县"
        }, {
            "code": "451031",
            "value": "隆林县"
        }]
    }, {
        "code": "4511",
        "value": "贺州市",
        "cities": [{
            "code": "451101",
            "value": "市辖区"
        }, {
            "code": "451102",
            "value": "八步区"
        }, {
            "code": "451121",
            "value": "昭平县"
        }, {
            "code": "451122",
            "value": "钟山县"
        }, {
            "code": "451123",
            "value": "富川县"
        }]
    }, {
        "code": "4512",
        "value": "河池市",
        "cities": [{
            "code": "451201",
            "value": "市辖区"
        }, {
            "code": "451202",
            "value": "金城江区"
        }, {
            "code": "451221",
            "value": "南丹县"
        }, {
            "code": "451222",
            "value": "天峨县"
        }, {
            "code": "451223",
            "value": "凤山县"
        }, {
            "code": "451224",
            "value": "东兰县"
        }, {
            "code": "451225",
            "value": "罗城县"
        }, {
            "code": "451226",
            "value": "环江县"
        }, {
            "code": "451227",
            "value": "巴马县"
        }, {
            "code": "451228",
            "value": "都安县"
        }, {
            "code": "451229",
            "value": "大化县"
        }, {
            "code": "451281",
            "value": "宜州市"
        }]
    }, {
        "code": "4513",
        "value": "来宾市",
        "cities": [{
            "code": "451301",
            "value": "市辖区"
        }, {
            "code": "451302",
            "value": "兴宾区"
        }, {
            "code": "451321",
            "value": "忻城县"
        }, {
            "code": "451322",
            "value": "象州县"
        }, {
            "code": "451323",
            "value": "武宣县"
        }, {
            "code": "451324",
            "value": "金秀县"
        }, {
            "code": "451381",
            "value": "合山市"
        }]
    }, {
        "code": "4514",
        "value": "崇左市",
        "cities": [{
            "code": "451401",
            "value": "市辖区"
        }, {
            "code": "451402",
            "value": "江洲区"
        }, {
            "code": "451421",
            "value": "扶绥县"
        }, {
            "code": "451422",
            "value": "宁明县"
        }, {
            "code": "451423",
            "value": "龙州县"
        }, {
            "code": "451424",
            "value": "大新县"
        }, {
            "code": "451425",
            "value": "天等县"
        }, {
            "code": "451481",
            "value": "凭祥市"
        }]
    }]
}, {
    "code": "46",
    "value": "海南省",
    "states": [{
        "code": "4601",
        "value": "海口市",
        "cities": [{
            "code": "460101",
            "value": "市辖区"
        }, {
            "code": "460105",
            "value": "秀英区"
        }, {
            "code": "460106",
            "value": "龙华区"
        }, {
            "code": "460107",
            "value": "琼山区"
        }, {
            "code": "460108",
            "value": "美兰区"
        }]
    }, {
        "code": "4602",
        "value": "三亚市",
        "cities": [{
            "code": "460201",
            "value": "市辖区"
        }]
    }, {
        "code": "4603",
        "value": "三沙市",
        "cities": [{
            "code": "460321",
            "value": "西沙群岛"
        }, {
            "code": "460322",
            "value": "南沙群岛"
        }, {
            "code": "460323",
            "value": "中沙群岛"
        }, {
            "code": "460324",
            "value": "永乐群岛"
        }]
    }]
}, {
    "code": "50",
    "value": "重庆市",
    "states": [{
        "code": "5001",
        "value": "市辖区",
        "cities": [{
            "code": "500101",
            "value": "万州区"
        }, {
            "code": "500102",
            "value": "涪陵区"
        }, {
            "code": "500103",
            "value": "渝中区"
        }, {
            "code": "500104",
            "value": "大渡口区"
        }, {
            "code": "500105",
            "value": "江北区"
        }, {
            "code": "500106",
            "value": "沙坪坝区"
        }, {
            "code": "500107",
            "value": "九龙坡区"
        }, {
            "code": "500108",
            "value": "南岸区"
        }, {
            "code": "500109",
            "value": "北碚区"
        }, {
            "code": "500110",
            "value": "綦江区"
        }, {
            "code": "500111",
            "value": "大足区"
        }, {
            "code": "500112",
            "value": "渝北区"
        }, {
            "code": "500113",
            "value": "巴南区"
        }, {
            "code": "500114",
            "value": "黔江区"
        }, {
            "code": "500115",
            "value": "长寿区"
        }, {
            "code": "500116",
            "value": "江津区"
        }, {
            "code": "500117",
            "value": "合川区"
        }, {
            "code": "500118",
            "value": "永川区"
        }, {
            "code": "500119",
            "value": "南川区"
        }, {
            "code": "500120",
            "value": "铜梁区"
        }, {
            "code": "500121",
            "value": "璧山区"
        }]
    }]
}, {
    "code": "51",
    "value": "四川省",
    "states": [{
        "code": "5101",
        "value": "成都市",
        "cities": [{
            "code": "510101",
            "value": "市辖区"
        }, {
            "code": "510104",
            "value": "锦江区"
        }, {
            "code": "510105",
            "value": "青羊区"
        }, {
            "code": "510106",
            "value": "金牛区"
        }, {
            "code": "510107",
            "value": "武侯区"
        }, {
            "code": "510108",
            "value": "成华区"
        }, {
            "code": "510112",
            "value": "龙泉驿区"
        }, {
            "code": "510113",
            "value": "青白江区"
        }, {
            "code": "510114",
            "value": "新都区"
        }, {
            "code": "510115",
            "value": "温江区"
        }, {
            "code": "510121",
            "value": "金堂县"
        }, {
            "code": "510122",
            "value": "双流县"
        }, {
            "code": "510124",
            "value": "郫县"
        }, {
            "code": "510129",
            "value": "大邑县"
        }, {
            "code": "510131",
            "value": "蒲江县"
        }, {
            "code": "510132",
            "value": "新津县"
        }, {
            "code": "510181",
            "value": "都江堰市"
        }, {
            "code": "510182",
            "value": "彭州市"
        }, {
            "code": "510183",
            "value": "邛崃市"
        }, {
            "code": "510184",
            "value": "崇州市"
        }]
    }, {
        "code": "5103",
        "value": "自贡市",
        "cities": [{
            "code": "510301",
            "value": "市辖区"
        }, {
            "code": "510302",
            "value": "自流井区"
        }, {
            "code": "510303",
            "value": "贡井区"
        }, {
            "code": "510304",
            "value": "大安区"
        }, {
            "code": "510311",
            "value": "沿滩区"
        }, {
            "code": "510321",
            "value": "荣县"
        }, {
            "code": "510322",
            "value": "富顺县"
        }]
    }, {
        "code": "5104",
        "value": "攀枝花市",
        "cities": [{
            "code": "510401",
            "value": "市辖区"
        }, {
            "code": "510402",
            "value": "东区"
        }, {
            "code": "510403",
            "value": "西区"
        }, {
            "code": "510411",
            "value": "仁和区"
        }, {
            "code": "510421",
            "value": "米易县"
        }, {
            "code": "510422",
            "value": "盐边县"
        }]
    }, {
        "code": "5105",
        "value": "泸州市",
        "cities": [{
            "code": "510501",
            "value": "市辖区"
        }, {
            "code": "510502",
            "value": "江阳区"
        }, {
            "code": "510503",
            "value": "纳溪区"
        }, {
            "code": "510504",
            "value": "龙马潭区"
        }, {
            "code": "510521",
            "value": "泸县"
        }, {
            "code": "510522",
            "value": "合江县"
        }, {
            "code": "510524",
            "value": "叙永县"
        }, {
            "code": "510525",
            "value": "古蔺县"
        }]
    }, {
        "code": "5106",
        "value": "德阳市",
        "cities": [{
            "code": "510601",
            "value": "市辖区"
        }, {
            "code": "510603",
            "value": "旌阳区"
        }, {
            "code": "510623",
            "value": "中江县"
        }, {
            "code": "510626",
            "value": "罗江县"
        }, {
            "code": "510681",
            "value": "广汉市"
        }, {
            "code": "510682",
            "value": "什邡市"
        }, {
            "code": "510683",
            "value": "绵竹市"
        }]
    }, {
        "code": "5107",
        "value": "绵阳市",
        "cities": [{
            "code": "510701",
            "value": "市辖区"
        }, {
            "code": "510703",
            "value": "涪城区"
        }, {
            "code": "510704",
            "value": "游仙区"
        }, {
            "code": "510722",
            "value": "三台县"
        }, {
            "code": "510723",
            "value": "盐亭县"
        }, {
            "code": "510724",
            "value": "安县"
        }, {
            "code": "510725",
            "value": "梓潼县"
        }, {
            "code": "510726",
            "value": "北川县"
        }, {
            "code": "510727",
            "value": "平武县"
        }, {
            "code": "510781",
            "value": "江油市"
        }]
    }, {
        "code": "5108",
        "value": "广元市",
        "cities": [{
            "code": "510801",
            "value": "市辖区"
        }, {
            "code": "510802",
            "value": "利州区"
        }, {
            "code": "510811",
            "value": "元坝区"
        }, {
            "code": "510812",
            "value": "朝天区"
        }, {
            "code": "510821",
            "value": "旺苍县"
        }, {
            "code": "510822",
            "value": "青川县"
        }, {
            "code": "510823",
            "value": "剑阁县"
        }, {
            "code": "510824",
            "value": "苍溪县"
        }]
    }, {
        "code": "5109",
        "value": "遂宁市",
        "cities": [{
            "code": "510901",
            "value": "市辖区"
        }, {
            "code": "510903",
            "value": "船山区"
        }, {
            "code": "510904",
            "value": "安居区"
        }, {
            "code": "510921",
            "value": "蓬溪县"
        }, {
            "code": "510922",
            "value": "射洪县"
        }, {
            "code": "510923",
            "value": "大英县"
        }]
    }, {
        "code": "5110",
        "value": "内江市",
        "cities": [{
            "code": "511001",
            "value": "市辖区"
        }, {
            "code": "511002",
            "value": "中区"
        }, {
            "code": "511011",
            "value": "东兴区"
        }, {
            "code": "511024",
            "value": "威远县"
        }, {
            "code": "511025",
            "value": "资中县"
        }, {
            "code": "511028",
            "value": "隆昌县"
        }]
    }, {
        "code": "5111",
        "value": "乐山市",
        "cities": [{
            "code": "511101",
            "value": "市辖区"
        }, {
            "code": "511102",
            "value": "中区"
        }, {
            "code": "511111",
            "value": "沙湾区"
        }, {
            "code": "511112",
            "value": "五通桥区"
        }, {
            "code": "511113",
            "value": "金口河区"
        }, {
            "code": "511123",
            "value": "犍为县"
        }, {
            "code": "511124",
            "value": "井研县"
        }, {
            "code": "511126",
            "value": "夹江县"
        }, {
            "code": "511129",
            "value": "沐川县"
        }, {
            "code": "511132",
            "value": "峨边县"
        }, {
            "code": "511133",
            "value": "马边县"
        }, {
            "code": "511181",
            "value": "峨眉山市"
        }]
    }, {
        "code": "5113",
        "value": "南充市",
        "cities": [{
            "code": "511301",
            "value": "市辖区"
        }, {
            "code": "511302",
            "value": "顺庆区"
        }, {
            "code": "511303",
            "value": "高坪区"
        }, {
            "code": "511304",
            "value": "嘉陵区"
        }, {
            "code": "511321",
            "value": "南部县"
        }, {
            "code": "511322",
            "value": "营山县"
        }, {
            "code": "511323",
            "value": "蓬安县"
        }, {
            "code": "511324",
            "value": "仪陇县"
        }, {
            "code": "511325",
            "value": "西充县"
        }, {
            "code": "511381",
            "value": "阆中市"
        }]
    }, {
        "code": "5114",
        "value": "眉山市",
        "cities": [{
            "code": "511401",
            "value": "市辖区"
        }, {
            "code": "511402",
            "value": "东坡区"
        }, {
            "code": "511421",
            "value": "仁寿县"
        }, {
            "code": "511422",
            "value": "彭山县"
        }, {
            "code": "511423",
            "value": "洪雅县"
        }, {
            "code": "511424",
            "value": "丹棱县"
        }, {
            "code": "511425",
            "value": "青神县"
        }]
    }, {
        "code": "5115",
        "value": "宜宾市",
        "cities": [{
            "code": "511501",
            "value": "市辖区"
        }, {
            "code": "511502",
            "value": "翠屏区"
        }, {
            "code": "511503",
            "value": "南溪区"
        }, {
            "code": "511521",
            "value": "宜宾县"
        }, {
            "code": "511523",
            "value": "江安县"
        }, {
            "code": "511524",
            "value": "长宁县"
        }, {
            "code": "511525",
            "value": "高县"
        }, {
            "code": "511526",
            "value": "珙县"
        }, {
            "code": "511527",
            "value": "筠连县"
        }, {
            "code": "511528",
            "value": "兴文县"
        }, {
            "code": "511529",
            "value": "屏山县"
        }]
    }, {
        "code": "5116",
        "value": "广安市",
        "cities": [{
            "code": "511601",
            "value": "市辖区"
        }, {
            "code": "511602",
            "value": "广安区"
        }, {
            "code": "511603",
            "value": "前锋区"
        }, {
            "code": "511621",
            "value": "岳池县"
        }, {
            "code": "511622",
            "value": "武胜县"
        }, {
            "code": "511623",
            "value": "邻水县"
        }, {
            "code": "511681",
            "value": "华蓥市"
        }]
    }, {
        "code": "5117",
        "value": "达州市",
        "cities": [{
            "code": "511701",
            "value": "市辖区"
        }, {
            "code": "511702",
            "value": "通川区"
        }, {
            "code": "511703",
            "value": "达川区"
        }, {
            "code": "511722",
            "value": "宣汉县"
        }, {
            "code": "511723",
            "value": "开江县"
        }, {
            "code": "511724",
            "value": "大竹县"
        }, {
            "code": "511725",
            "value": "渠县"
        }, {
            "code": "511781",
            "value": "万源市"
        }]
    }, {
        "code": "5118",
        "value": "雅安市",
        "cities": [{
            "code": "511801",
            "value": "市辖区"
        }, {
            "code": "511802",
            "value": "雨城区"
        }, {
            "code": "511803",
            "value": "名山区"
        }, {
            "code": "511822",
            "value": "荥经县"
        }, {
            "code": "511823",
            "value": "汉源县"
        }, {
            "code": "511824",
            "value": "石棉县"
        }, {
            "code": "511825",
            "value": "天全县"
        }, {
            "code": "511826",
            "value": "芦山县"
        }, {
            "code": "511827",
            "value": "宝兴县"
        }]
    }, {
        "code": "5119",
        "value": "巴中市",
        "cities": [{
            "code": "511901",
            "value": "市辖区"
        }, {
            "code": "511902",
            "value": "巴州区"
        }, {
            "code": "511903",
            "value": "恩阳区"
        }, {
            "code": "511921",
            "value": "通江县"
        }, {
            "code": "511922",
            "value": "南江县"
        }, {
            "code": "511923",
            "value": "平昌县"
        }]
    }, {
        "code": "5120",
        "value": "资阳市",
        "cities": [{
            "code": "512001",
            "value": "市辖区"
        }, {
            "code": "512002",
            "value": "雁江区"
        }, {
            "code": "512021",
            "value": "安岳县"
        }, {
            "code": "512022",
            "value": "乐至县"
        }, {
            "code": "512081",
            "value": "简阳市"
        }]
    }, {
        "code": "5132",
        "value": "阿坝州",
        "cities": [{
            "code": "513221",
            "value": "汶川县"
        }, {
            "code": "513222",
            "value": "理县"
        }, {
            "code": "513223",
            "value": "茂县"
        }, {
            "code": "513224",
            "value": "松潘县"
        }, {
            "code": "513225",
            "value": "九寨沟县"
        }, {
            "code": "513226",
            "value": "金川县"
        }, {
            "code": "513227",
            "value": "小金县"
        }, {
            "code": "513228",
            "value": "黑水县"
        }, {
            "code": "513229",
            "value": "马尔康县"
        }, {
            "code": "513230",
            "value": "壤塘县"
        }, {
            "code": "513231",
            "value": "阿坝县"
        }, {
            "code": "513232",
            "value": "若尔盖县"
        }, {
            "code": "513233",
            "value": "红原县"
        }]
    }, {
        "code": "5133",
        "value": "甘孜藏族自治州",
        "cities": [{
            "code": "513321",
            "value": "康定县"
        }, {
            "code": "513322",
            "value": "泸定县"
        }, {
            "code": "513323",
            "value": "丹巴县"
        }, {
            "code": "513324",
            "value": "九龙县"
        }, {
            "code": "513325",
            "value": "雅江县"
        }, {
            "code": "513326",
            "value": "道孚县"
        }, {
            "code": "513327",
            "value": "炉霍县"
        }, {
            "code": "513328",
            "value": "甘孜县"
        }, {
            "code": "513329",
            "value": "新龙县"
        }, {
            "code": "513330",
            "value": "德格县"
        }, {
            "code": "513331",
            "value": "白玉县"
        }, {
            "code": "513332",
            "value": "石渠县"
        }, {
            "code": "513333",
            "value": "色达县"
        }, {
            "code": "513334",
            "value": "理塘县"
        }, {
            "code": "513335",
            "value": "巴塘县"
        }, {
            "code": "513336",
            "value": "乡城县"
        }, {
            "code": "513337",
            "value": "稻城县"
        }, {
            "code": "513338",
            "value": "得荣县"
        }]
    }, {
        "code": "5134",
        "value": "凉山彝族自治州",
        "cities": [{
            "code": "513401",
            "value": "西昌市"
        }, {
            "code": "513422",
            "value": "木里县"
        }, {
            "code": "513423",
            "value": "盐源县"
        }, {
            "code": "513424",
            "value": "德昌县"
        }, {
            "code": "513425",
            "value": "会理县"
        }, {
            "code": "513426",
            "value": "会东县"
        }, {
            "code": "513427",
            "value": "宁南县"
        }, {
            "code": "513428",
            "value": "普格县"
        }, {
            "code": "513429",
            "value": "布拖县"
        }, {
            "code": "513430",
            "value": "金阳县"
        }, {
            "code": "513431",
            "value": "昭觉县"
        }, {
            "code": "513432",
            "value": "喜德县"
        }, {
            "code": "513433",
            "value": "冕宁县"
        }, {
            "code": "513434",
            "value": "越西县"
        }, {
            "code": "513435",
            "value": "甘洛县"
        }, {
            "code": "513436",
            "value": "美姑县"
        }, {
            "code": "513437",
            "value": "雷波县"
        }]
    }]
}, {
    "code": "52",
    "value": "贵州省",
    "states": [{
        "code": "5201",
        "value": "贵阳市",
        "cities": [{
            "code": "520101",
            "value": "市辖区"
        }, {
            "code": "520102",
            "value": "南明区"
        }, {
            "code": "520103",
            "value": "云岩区"
        }, {
            "code": "520111",
            "value": "花溪区"
        }, {
            "code": "520112",
            "value": "乌当区"
        }, {
            "code": "520113",
            "value": "白云区"
        }, {
            "code": "520115",
            "value": "观山湖区"
        }, {
            "code": "520121",
            "value": "开阳县"
        }, {
            "code": "520122",
            "value": "息烽县"
        }, {
            "code": "520123",
            "value": "修文县"
        }, {
            "code": "520181",
            "value": "清镇市"
        }]
    }, {
        "code": "5202",
        "value": "六盘水市",
        "cities": [{
            "code": "520201",
            "value": "六盘水市钟山区"
        }, {
            "code": "520203",
            "value": "六枝特区"
        }, {
            "code": "520221",
            "value": "水城县"
        }, {
            "code": "520222",
            "value": "盘县"
        }]
    }, {
        "code": "5203",
        "value": "遵义市",
        "cities": [{
            "code": "520301",
            "value": "市辖区"
        }, {
            "code": "520302",
            "value": "红花岗区"
        }, {
            "code": "520303",
            "value": "汇川区"
        }, {
            "code": "520321",
            "value": "遵义县"
        }, {
            "code": "520322",
            "value": "桐梓县"
        }, {
            "code": "520323",
            "value": "绥阳县"
        }, {
            "code": "520324",
            "value": "正安县"
        }, {
            "code": "520325",
            "value": "道真县"
        }, {
            "code": "520326",
            "value": "务川县"
        }, {
            "code": "520327",
            "value": "凤冈县"
        }, {
            "code": "520328",
            "value": "湄潭县"
        }, {
            "code": "520329",
            "value": "余庆县"
        }, {
            "code": "520330",
            "value": "习水县"
        }, {
            "code": "520381",
            "value": "赤水市"
        }, {
            "code": "520382",
            "value": "仁怀市"
        }]
    }, {
        "code": "5204",
        "value": "安顺市",
        "cities": [{
            "code": "520401",
            "value": "市辖区"
        }, {
            "code": "520402",
            "value": "西秀区"
        }, {
            "code": "520421",
            "value": "平坝县"
        }, {
            "code": "520422",
            "value": "普定县"
        }, {
            "code": "520423",
            "value": "镇宁县"
        }, {
            "code": "520424",
            "value": "关岭县"
        }, {
            "code": "520425",
            "value": "紫云县"
        }]
    }, {
        "code": "5205",
        "value": "毕节市",
        "cities": [{
            "code": "520501",
            "value": "市辖区"
        }, {
            "code": "520502",
            "value": "七星关区"
        }, {
            "code": "520521",
            "value": "大方县"
        }, {
            "code": "520522",
            "value": "黔西县"
        }, {
            "code": "520523",
            "value": "金沙县"
        }, {
            "code": "520524",
            "value": "织金县"
        }, {
            "code": "520525",
            "value": "纳雍县"
        }, {
            "code": "520526",
            "value": "威宁县"
        }, {
            "code": "520527",
            "value": "赫章县"
        }]
    }, {
        "code": "5206",
        "value": "铜仁市",
        "cities": [{
            "code": "520601",
            "value": "市辖区"
        }, {
            "code": "520602",
            "value": "碧江区"
        }, {
            "code": "520603",
            "value": "万山区"
        }, {
            "code": "520621",
            "value": "江口县"
        }, {
            "code": "520622",
            "value": "玉屏县"
        }, {
            "code": "520623",
            "value": "石阡县"
        }, {
            "code": "520624",
            "value": "思南县"
        }, {
            "code": "520625",
            "value": "印江县"
        }, {
            "code": "520626",
            "value": "德江县"
        }, {
            "code": "520627",
            "value": "沿河县"
        }, {
            "code": "520628",
            "value": "松桃县"
        }]
    }, {
        "code": "5223",
        "value": "黔西南布依族苗族自治州",
        "cities": [{
            "code": "522301",
            "value": "兴义市"
        }, {
            "code": "522322",
            "value": "兴仁县"
        }, {
            "code": "522323",
            "value": "普安县"
        }, {
            "code": "522324",
            "value": "晴隆县"
        }, {
            "code": "522325",
            "value": "贞丰县"
        }, {
            "code": "522326",
            "value": "望谟县"
        }, {
            "code": "522327",
            "value": "册亨县"
        }, {
            "code": "522328",
            "value": "安龙县"
        }]
    }, {
        "code": "5226",
        "value": "黔东南苗族侗族自治州",
        "cities": [{
            "code": "522601",
            "value": "凯里市"
        }, {
            "code": "522622",
            "value": "黄平县"
        }, {
            "code": "522623",
            "value": "施秉县"
        }, {
            "code": "522624",
            "value": "三穗县"
        }, {
            "code": "522625",
            "value": "镇远县"
        }, {
            "code": "522626",
            "value": "岑巩县"
        }, {
            "code": "522627",
            "value": "天柱县"
        }, {
            "code": "522628",
            "value": "锦屏县"
        }, {
            "code": "522629",
            "value": "剑河县"
        }, {
            "code": "522630",
            "value": "台江县"
        }, {
            "code": "522631",
            "value": "黎平县"
        }, {
            "code": "522632",
            "value": "榕江县"
        }, {
            "code": "522633",
            "value": "从江县"
        }, {
            "code": "522634",
            "value": "雷山县"
        }, {
            "code": "522635",
            "value": "麻江县"
        }, {
            "code": "522636",
            "value": "丹寨县"
        }]
    }, {
        "code": "5227",
        "value": "黔南布依族苗族自治州",
        "cities": [{
            "code": "522701",
            "value": "都匀市"
        }, {
            "code": "522702",
            "value": "福泉市"
        }, {
            "code": "522722",
            "value": "荔波县"
        }, {
            "code": "522723",
            "value": "贵定县"
        }, {
            "code": "522725",
            "value": "瓮安县"
        }, {
            "code": "522726",
            "value": "独山县"
        }, {
            "code": "522727",
            "value": "平塘县"
        }, {
            "code": "522728",
            "value": "罗甸县"
        }, {
            "code": "522729",
            "value": "长顺县"
        }, {
            "code": "522730",
            "value": "龙里县"
        }, {
            "code": "522731",
            "value": "惠水县"
        }, {
            "code": "522732",
            "value": "三都县"
        }]
    }]
}, {
    "code": "53",
    "value": "云南省",
    "states": [{
        "code": "5301",
        "value": "昆明市",
        "cities": [{
            "code": "530101",
            "value": "市辖区"
        }, {
            "code": "530102",
            "value": "五华区"
        }, {
            "code": "530103",
            "value": "盘龙区"
        }, {
            "code": "530111",
            "value": "官渡区"
        }, {
            "code": "530112",
            "value": "西山区"
        }, {
            "code": "530113",
            "value": "东川区"
        }, {
            "code": "530114",
            "value": "呈贡区"
        }, {
            "code": "530122",
            "value": "晋宁县"
        }, {
            "code": "530124",
            "value": "富民县"
        }, {
            "code": "530125",
            "value": "宜良县"
        }, {
            "code": "530126",
            "value": "石林县"
        }, {
            "code": "530127",
            "value": "嵩明县"
        }, {
            "code": "530128",
            "value": "禄劝县"
        }, {
            "code": "530129",
            "value": "寻甸县"
        }, {
            "code": "530181",
            "value": "安宁市"
        }]
    }, {
        "code": "5303",
        "value": "曲靖市",
        "cities": [{
            "code": "530301",
            "value": "市辖区"
        }, {
            "code": "530302",
            "value": "麒麟区"
        }, {
            "code": "530321",
            "value": "马龙县"
        }, {
            "code": "530322",
            "value": "陆良县"
        }, {
            "code": "530323",
            "value": "师宗县"
        }, {
            "code": "530324",
            "value": "罗平县"
        }, {
            "code": "530325",
            "value": "富源县"
        }, {
            "code": "530326",
            "value": "会泽县"
        }, {
            "code": "530328",
            "value": "沾益县"
        }, {
            "code": "530381",
            "value": "宣威市"
        }]
    }, {
        "code": "5304",
        "value": "玉溪市",
        "cities": [{
            "code": "530401",
            "value": "市辖区"
        }, {
            "code": "530402",
            "value": "红塔区"
        }, {
            "code": "530421",
            "value": "江川县"
        }, {
            "code": "530422",
            "value": "澄江县"
        }, {
            "code": "530423",
            "value": "通海县"
        }, {
            "code": "530424",
            "value": "华宁县"
        }, {
            "code": "530425",
            "value": "易门县"
        }, {
            "code": "530426",
            "value": "峨山县"
        }, {
            "code": "530427",
            "value": "新平县"
        }, {
            "code": "530428",
            "value": "元江县"
        }]
    }, {
        "code": "5305",
        "value": "保山市",
        "cities": [{
            "code": "530501",
            "value": "市辖区"
        }, {
            "code": "530502",
            "value": "隆阳区"
        }, {
            "code": "530521",
            "value": "施甸县"
        }, {
            "code": "530522",
            "value": "腾冲县"
        }, {
            "code": "530523",
            "value": "龙陵县"
        }, {
            "code": "530524",
            "value": "昌宁县"
        }]
    }, {
        "code": "5306",
        "value": "昭通市",
        "cities": [{
            "code": "530601",
            "value": "市辖区"
        }, {
            "code": "530602",
            "value": "昭阳区"
        }, {
            "code": "530621",
            "value": "鲁甸县"
        }, {
            "code": "530622",
            "value": "巧家县"
        }, {
            "code": "530623",
            "value": "盐津县"
        }, {
            "code": "530624",
            "value": "大关县"
        }, {
            "code": "530625",
            "value": "永善县"
        }, {
            "code": "530626",
            "value": "绥江县"
        }, {
            "code": "530627",
            "value": "镇雄县"
        }, {
            "code": "530628",
            "value": "彝良县"
        }, {
            "code": "530629",
            "value": "威信县"
        }, {
            "code": "530630",
            "value": "水富县"
        }]
    }, {
        "code": "5307",
        "value": "丽江市",
        "cities": [{
            "code": "530701",
            "value": "市辖区"
        }, {
            "code": "530702",
            "value": "古城区"
        }, {
            "code": "530721",
            "value": "玉龙县"
        }, {
            "code": "530722",
            "value": "永胜县"
        }, {
            "code": "530723",
            "value": "华坪县"
        }, {
            "code": "530724",
            "value": "宁蒗县"
        }]
    }, {
        "code": "5308",
        "value": "普洱市",
        "cities": [{
            "code": "530801",
            "value": "市辖区"
        }, {
            "code": "530802",
            "value": "思茅区"
        }, {
            "code": "530821",
            "value": "宁洱县"
        }, {
            "code": "530822",
            "value": "墨江县"
        }, {
            "code": "530823",
            "value": "景东县"
        }, {
            "code": "530824",
            "value": "景谷县"
        }, {
            "code": "530825",
            "value": "镇沅县"
        }, {
            "code": "530826",
            "value": "江城县"
        }, {
            "code": "530827",
            "value": "孟连县"
        }, {
            "code": "530828",
            "value": "澜沧县"
        }, {
            "code": "530829",
            "value": "西盟县"
        }]
    }, {
        "code": "5309",
        "value": "临沧市",
        "cities": [{
            "code": "530901",
            "value": "市辖区"
        }, {
            "code": "530902",
            "value": "临翔区"
        }, {
            "code": "530921",
            "value": "凤庆县"
        }, {
            "code": "530922",
            "value": "云县"
        }, {
            "code": "530923",
            "value": "永德县"
        }, {
            "code": "530924",
            "value": "镇康县"
        }, {
            "code": "530925",
            "value": "双江县"
        }, {
            "code": "530926",
            "value": "耿马县"
        }, {
            "code": "530927",
            "value": "沧源县"
        }]
    }, {
        "code": "5323",
        "value": "楚雄彝族自治州",
        "cities": [{
            "code": "532301",
            "value": "楚雄市"
        }, {
            "code": "532322",
            "value": "双柏县"
        }, {
            "code": "532323",
            "value": "牟定县"
        }, {
            "code": "532324",
            "value": "南华县"
        }, {
            "code": "532325",
            "value": "姚安县"
        }, {
            "code": "532326",
            "value": "大姚县"
        }, {
            "code": "532327",
            "value": "永仁县"
        }, {
            "code": "532328",
            "value": "元谋县"
        }, {
            "code": "532329",
            "value": "武定县"
        }, {
            "code": "532331",
            "value": "禄丰县"
        }]
    }, {
        "code": "5325",
        "value": "红河州",
        "cities": [{
            "code": "532501",
            "value": "个旧市"
        }, {
            "code": "532502",
            "value": "开远市"
        }, {
            "code": "532503",
            "value": "蒙自市"
        }, {
            "code": "532504",
            "value": "弥勒市"
        }, {
            "code": "532523",
            "value": "屏边县"
        }, {
            "code": "532524",
            "value": "建水县"
        }, {
            "code": "532525",
            "value": "石屏县"
        }, {
            "code": "532527",
            "value": "泸西县"
        }, {
            "code": "532528",
            "value": "元阳县"
        }, {
            "code": "532529",
            "value": "红河县"
        }, {
            "code": "532530",
            "value": "金平县"
        }, {
            "code": "532531",
            "value": "绿春县"
        }, {
            "code": "532532",
            "value": "河口县"
        }]
    }, {
        "code": "5326",
        "value": "文山州",
        "cities": [{
            "code": "532601",
            "value": "文山市"
        }, {
            "code": "532622",
            "value": "砚山县"
        }, {
            "code": "532623",
            "value": "西畴县"
        }, {
            "code": "532624",
            "value": "麻栗坡县"
        }, {
            "code": "532625",
            "value": "马关县"
        }, {
            "code": "532626",
            "value": "丘北县"
        }, {
            "code": "532627",
            "value": "广南县"
        }, {
            "code": "532628",
            "value": "富宁县"
        }]
    }, {
        "code": "5328",
        "value": "西双版纳州",
        "cities": [{
            "code": "532801",
            "value": "景洪市"
        }, {
            "code": "532822",
            "value": "勐海县"
        }, {
            "code": "532823",
            "value": "勐腊县"
        }]
    }, {
        "code": "5329",
        "value": "大理州",
        "cities": [{
            "code": "532901",
            "value": "大理市"
        }, {
            "code": "532922",
            "value": "漾濞县"
        }, {
            "code": "532923",
            "value": "祥云县"
        }, {
            "code": "532924",
            "value": "宾川县"
        }, {
            "code": "532925",
            "value": "弥渡县"
        }, {
            "code": "532926",
            "value": "南涧县"
        }, {
            "code": "532927",
            "value": "巍山县"
        }, {
            "code": "532928",
            "value": "永平县"
        }, {
            "code": "532929",
            "value": "云龙县"
        }, {
            "code": "532930",
            "value": "洱源县"
        }, {
            "code": "532931",
            "value": "剑川县"
        }, {
            "code": "532932",
            "value": "鹤庆县"
        }]
    }, {
        "code": "5331",
        "value": "德宏州",
        "cities": [{
            "code": "533102",
            "value": "瑞丽市"
        }, {
            "code": "533103",
            "value": "芒市"
        }, {
            "code": "533122",
            "value": "梁河县"
        }, {
            "code": "533123",
            "value": "盈江县"
        }, {
            "code": "533124",
            "value": "陇川县"
        }]
    }, {
        "code": "5333",
        "value": "怒江州",
        "cities": [{
            "code": "533321",
            "value": "泸水县"
        }, {
            "code": "533323",
            "value": "福贡县"
        }, {
            "code": "533324",
            "value": "贡山县"
        }, {
            "code": "533325",
            "value": "兰坪县"
        }]
    }, {
        "code": "5334",
        "value": "迪庆州",
        "cities": [{
            "code": "533421",
            "value": "香格里拉县"
        }, {
            "code": "533422",
            "value": "德钦县"
        }, {
            "code": "533423",
            "value": "维西县"
        }]
    }]
}, {
    "code": "54",
    "value": "西藏自治区",
    "states": [{
        "code": "5401",
        "value": "拉萨市",
        "cities": [{
            "code": "540101",
            "value": "市辖区"
        }, {
            "code": "540102",
            "value": "城关区"
        }, {
            "code": "540121",
            "value": "林周县"
        }, {
            "code": "540122",
            "value": "当雄县"
        }, {
            "code": "540123",
            "value": "尼木县"
        }, {
            "code": "540124",
            "value": "曲水县"
        }, {
            "code": "540125",
            "value": "堆龙德庆县"
        }, {
            "code": "540126",
            "value": "达孜县"
        }, {
            "code": "540127",
            "value": "墨竹工卡县"
        }]
    }, {
        "code": "5421",
        "value": "昌都地区",
        "cities": [{
            "code": "542121",
            "value": "昌都县"
        }, {
            "code": "542122",
            "value": "江达县"
        }, {
            "code": "542123",
            "value": "贡觉县"
        }, {
            "code": "542124",
            "value": "类乌齐县"
        }, {
            "code": "542125",
            "value": "丁青县"
        }, {
            "code": "542126",
            "value": "察雅县"
        }, {
            "code": "542127",
            "value": "八宿县"
        }, {
            "code": "542128",
            "value": "左贡县"
        }, {
            "code": "542129",
            "value": "芒康县"
        }, {
            "code": "542132",
            "value": "洛隆县"
        }, {
            "code": "542133",
            "value": "边坝县"
        }]
    }, {
        "code": "5422",
        "value": "山南地区",
        "cities": [{
            "code": "542221",
            "value": "乃东县"
        }, {
            "code": "542222",
            "value": "扎囊县"
        }, {
            "code": "542223",
            "value": "贡嘎县"
        }, {
            "code": "542224",
            "value": "桑日县"
        }, {
            "code": "542225",
            "value": "琼结县"
        }, {
            "code": "542226",
            "value": "曲松县"
        }, {
            "code": "542227",
            "value": "措美县"
        }, {
            "code": "542228",
            "value": "洛扎县"
        }, {
            "code": "542229",
            "value": "加查县"
        }, {
            "code": "542231",
            "value": "隆子县"
        }, {
            "code": "542232",
            "value": "错那县"
        }, {
            "code": "542233",
            "value": "浪卡子县"
        }]
    }, {
        "code": "5423",
        "value": "日喀则地区",
        "cities": [{
            "code": "542301",
            "value": "日喀则市"
        }, {
            "code": "542322",
            "value": "南木林县"
        }, {
            "code": "542323",
            "value": "江孜县"
        }, {
            "code": "542324",
            "value": "定日县"
        }, {
            "code": "542325",
            "value": "萨迦县"
        }, {
            "code": "542326",
            "value": "拉孜县"
        }, {
            "code": "542327",
            "value": "昂仁县"
        }, {
            "code": "542328",
            "value": "谢通门县"
        }, {
            "code": "542329",
            "value": "白朗县"
        }, {
            "code": "542330",
            "value": "仁布县"
        }, {
            "code": "542331",
            "value": "康马县"
        }, {
            "code": "542332",
            "value": "定结县"
        }, {
            "code": "542333",
            "value": "仲巴县"
        }, {
            "code": "542334",
            "value": "亚东县"
        }, {
            "code": "542335",
            "value": "吉隆县"
        }, {
            "code": "542336",
            "value": "聂拉木县"
        }, {
            "code": "542337",
            "value": "萨嘎县"
        }, {
            "code": "542338",
            "value": "岗巴县"
        }]
    }, {
        "code": "5424",
        "value": "那曲地区",
        "cities": [{
            "code": "542421",
            "value": "那曲县"
        }, {
            "code": "542422",
            "value": "嘉黎县"
        }, {
            "code": "542423",
            "value": "比如县"
        }, {
            "code": "542424",
            "value": "聂荣县"
        }, {
            "code": "542425",
            "value": "安多县"
        }, {
            "code": "542426",
            "value": "申扎县"
        }, {
            "code": "542427",
            "value": "索县"
        }, {
            "code": "542428",
            "value": "班戈县"
        }, {
            "code": "542429",
            "value": "巴青县"
        }, {
            "code": "542430",
            "value": "尼玛县"
        }, {
            "code": "542431",
            "value": "双湖县"
        }]
    }, {
        "code": "5425",
        "value": "阿里地区",
        "cities": [{
            "code": "542521",
            "value": "普兰县"
        }, {
            "code": "542522",
            "value": "札达县"
        }, {
            "code": "542523",
            "value": "噶尔县"
        }, {
            "code": "542524",
            "value": "日土县"
        }, {
            "code": "542525",
            "value": "革吉县"
        }, {
            "code": "542526",
            "value": "改则县"
        }, {
            "code": "542527",
            "value": "措勤县"
        }]
    }, {
        "code": "5426",
        "value": "林芝地区",
        "cities": [{
            "code": "542621",
            "value": "林芝县"
        }, {
            "code": "542622",
            "value": "工布江达县"
        }, {
            "code": "542623",
            "value": "米林县"
        }, {
            "code": "542624",
            "value": "墨脱县"
        }, {
            "code": "542625",
            "value": "波密县"
        }, {
            "code": "542626",
            "value": "察隅县"
        }, {
            "code": "542627",
            "value": "朗县"
        }]
    }]
}, {
    "code": "61",
    "value": "陕西省",
    "states": [{
        "code": "6101",
        "value": "西安市",
        "cities": [{
            "code": "610101",
            "value": "市辖区"
        }, {
            "code": "610102",
            "value": "新城区"
        }, {
            "code": "610103",
            "value": "碑林区"
        }, {
            "code": "610104",
            "value": "莲湖区"
        }, {
            "code": "610111",
            "value": "灞桥区"
        }, {
            "code": "610112",
            "value": "未央区"
        }, {
            "code": "610113",
            "value": "雁塔区"
        }, {
            "code": "610114",
            "value": "阎良区"
        }, {
            "code": "610115",
            "value": "临潼区"
        }, {
            "code": "610116",
            "value": "长安区"
        }, {
            "code": "610122",
            "value": "蓝田县"
        }, {
            "code": "610124",
            "value": "周至县"
        }, {
            "code": "610125",
            "value": "户县"
        }, {
            "code": "610126",
            "value": "高陵县"
        }]
    }, {
        "code": "6102",
        "value": "铜川市",
        "cities": [{
            "code": "610201",
            "value": "市辖区"
        }, {
            "code": "610202",
            "value": "王益区"
        }, {
            "code": "610203",
            "value": "印台区"
        }, {
            "code": "610204",
            "value": "耀州区"
        }, {
            "code": "610222",
            "value": "宜君县"
        }]
    }, {
        "code": "6103",
        "value": "宝鸡市",
        "cities": [{
            "code": "610301",
            "value": "市辖区"
        }, {
            "code": "610302",
            "value": "渭滨区"
        }, {
            "code": "610303",
            "value": "金台区"
        }, {
            "code": "610304",
            "value": "陈仓区"
        }, {
            "code": "610322",
            "value": "凤翔县"
        }, {
            "code": "610323",
            "value": "岐山县"
        }, {
            "code": "610324",
            "value": "扶风县"
        }, {
            "code": "610326",
            "value": "眉县"
        }, {
            "code": "610327",
            "value": "陇县"
        }, {
            "code": "610328",
            "value": "千阳县"
        }, {
            "code": "610329",
            "value": "麟游县"
        }, {
            "code": "610330",
            "value": "凤县"
        }, {
            "code": "610331",
            "value": "太白县"
        }]
    }, {
        "code": "6104",
        "value": "咸阳市",
        "cities": [{
            "code": "610401",
            "value": "市辖区"
        }, {
            "code": "610402",
            "value": "秦都区"
        }, {
            "code": "610403",
            "value": "杨凌区"
        }, {
            "code": "610404",
            "value": "渭城区"
        }, {
            "code": "610422",
            "value": "三原县"
        }, {
            "code": "610423",
            "value": "泾阳县"
        }, {
            "code": "610424",
            "value": "乾县"
        }, {
            "code": "610425",
            "value": "礼泉县"
        }, {
            "code": "610426",
            "value": "永寿县"
        }, {
            "code": "610427",
            "value": "彬县"
        }, {
            "code": "610428",
            "value": "长武县"
        }, {
            "code": "610429",
            "value": "旬邑县"
        }, {
            "code": "610430",
            "value": "淳化县"
        }, {
            "code": "610431",
            "value": "武功县"
        }, {
            "code": "610481",
            "value": "兴平市"
        }]
    }, {
        "code": "6105",
        "value": "渭南市",
        "cities": [{
            "code": "610501",
            "value": "市辖区"
        }, {
            "code": "610502",
            "value": "临渭区"
        }, {
            "code": "610521",
            "value": "华县"
        }, {
            "code": "610522",
            "value": "潼关县"
        }, {
            "code": "610523",
            "value": "大荔县"
        }, {
            "code": "610524",
            "value": "合阳县"
        }, {
            "code": "610525",
            "value": "澄城县"
        }, {
            "code": "610526",
            "value": "蒲城县"
        }, {
            "code": "610527",
            "value": "白水县"
        }, {
            "code": "610528",
            "value": "富平县"
        }, {
            "code": "610581",
            "value": "韩城市"
        }, {
            "code": "610582",
            "value": "华阴市"
        }]
    }, {
        "code": "6106",
        "value": "延安市",
        "cities": [{
            "code": "610601",
            "value": "市辖区"
        }, {
            "code": "610602",
            "value": "宝塔区"
        }, {
            "code": "610621",
            "value": "延长县"
        }, {
            "code": "610622",
            "value": "延川县"
        }, {
            "code": "610623",
            "value": "子长县"
        }, {
            "code": "610624",
            "value": "安塞县"
        }, {
            "code": "610625",
            "value": "志丹县"
        }, {
            "code": "610626",
            "value": "吴起县"
        }, {
            "code": "610627",
            "value": "甘泉县"
        }, {
            "code": "610628",
            "value": "富县"
        }, {
            "code": "610629",
            "value": "洛川县"
        }, {
            "code": "610630",
            "value": "宜川县"
        }, {
            "code": "610631",
            "value": "黄龙县"
        }, {
            "code": "610632",
            "value": "黄陵县"
        }]
    }, {
        "code": "6107",
        "value": "汉中市",
        "cities": [{
            "code": "610701",
            "value": "市辖区"
        }, {
            "code": "610702",
            "value": "汉台区"
        }, {
            "code": "610721",
            "value": "南郑县"
        }, {
            "code": "610722",
            "value": "城固县"
        }, {
            "code": "610723",
            "value": "洋县"
        }, {
            "code": "610724",
            "value": "西乡县"
        }, {
            "code": "610725",
            "value": "勉县"
        }, {
            "code": "610726",
            "value": "宁强县"
        }, {
            "code": "610727",
            "value": "略阳县"
        }, {
            "code": "610728",
            "value": "镇巴县"
        }, {
            "code": "610729",
            "value": "留坝县"
        }, {
            "code": "610730",
            "value": "佛坪县"
        }]
    }, {
        "code": "6108",
        "value": "榆林市",
        "cities": [{
            "code": "610801",
            "value": "市辖区"
        }, {
            "code": "610802",
            "value": "榆阳区"
        }, {
            "code": "610821",
            "value": "神木县"
        }, {
            "code": "610822",
            "value": "府谷县"
        }, {
            "code": "610823",
            "value": "横山县"
        }, {
            "code": "610824",
            "value": "靖边县"
        }, {
            "code": "610825",
            "value": "定边县"
        }, {
            "code": "610826",
            "value": "绥德县"
        }, {
            "code": "610827",
            "value": "米脂县"
        }, {
            "code": "610828",
            "value": "佳县"
        }, {
            "code": "610829",
            "value": "吴堡县"
        }, {
            "code": "610830",
            "value": "清涧县"
        }, {
            "code": "610831",
            "value": "子洲县"
        }]
    }, {
        "code": "6109",
        "value": "安康市",
        "cities": [{
            "code": "610901",
            "value": "市辖区"
        }, {
            "code": "610902",
            "value": "汉滨区"
        }, {
            "code": "610921",
            "value": "汉阴县"
        }, {
            "code": "610922",
            "value": "石泉县"
        }, {
            "code": "610923",
            "value": "宁陕县"
        }, {
            "code": "610924",
            "value": "紫阳县"
        }, {
            "code": "610925",
            "value": "岚皋县"
        }, {
            "code": "610926",
            "value": "平利县"
        }, {
            "code": "610927",
            "value": "镇坪县"
        }, {
            "code": "610928",
            "value": "旬阳县"
        }, {
            "code": "610929",
            "value": "白河县"
        }]
    }, {
        "code": "6110",
        "value": "商洛市",
        "cities": [{
            "code": "611001",
            "value": "市辖区"
        }, {
            "code": "611002",
            "value": "商州区"
        }, {
            "code": "611021",
            "value": "洛南县"
        }, {
            "code": "611022",
            "value": "丹凤县"
        }, {
            "code": "611023",
            "value": "商南县"
        }, {
            "code": "611024",
            "value": "山阳县"
        }, {
            "code": "611025",
            "value": "镇安县"
        }, {
            "code": "611026",
            "value": "柞水县"
        }]
    }]
}, {
    "code": "62",
    "value": "甘肃省",
    "states": [{
        "code": "6201",
        "value": "兰州市",
        "cities": [{
            "code": "620101",
            "value": "市辖区"
        }, {
            "code": "620102",
            "value": "城关区"
        }, {
            "code": "620103",
            "value": "七里河区"
        }, {
            "code": "620104",
            "value": "西固区"
        }, {
            "code": "620105",
            "value": "安宁区"
        }, {
            "code": "620111",
            "value": "红古区"
        }, {
            "code": "620121",
            "value": "永登县"
        }, {
            "code": "620122",
            "value": "皋兰县"
        }, {
            "code": "620123",
            "value": "榆中县"
        }]
    }, {
        "code": "6202",
        "value": "嘉峪关市",
        "cities": [{
            "code": "620201",
            "value": "市辖区"
        }]
    }, {
        "code": "6203",
        "value": "金昌市",
        "cities": [{
            "code": "620301",
            "value": "市辖区"
        }, {
            "code": "620302",
            "value": "金川区"
        }, {
            "code": "620321",
            "value": "永昌县"
        }]
    }, {
        "code": "6204",
        "value": "白银市",
        "cities": [{
            "code": "620401",
            "value": "市辖区"
        }, {
            "code": "620402",
            "value": "白银区"
        }, {
            "code": "620403",
            "value": "平川区"
        }, {
            "code": "620421",
            "value": "靖远县"
        }, {
            "code": "620422",
            "value": "会宁县"
        }, {
            "code": "620423",
            "value": "景泰县"
        }]
    }, {
        "code": "6205",
        "value": "天水市",
        "cities": [{
            "code": "620501",
            "value": "市辖区"
        }, {
            "code": "620502",
            "value": "秦州区"
        }, {
            "code": "620503",
            "value": "麦积区"
        }, {
            "code": "620521",
            "value": "清水县"
        }, {
            "code": "620522",
            "value": "秦安县"
        }, {
            "code": "620523",
            "value": "甘谷县"
        }, {
            "code": "620524",
            "value": "武山县"
        }, {
            "code": "620525",
            "value": "张家川县"
        }]
    }, {
        "code": "6206",
        "value": "武威市",
        "cities": [{
            "code": "620601",
            "value": "市辖区"
        }, {
            "code": "620602",
            "value": "凉州区"
        }, {
            "code": "620621",
            "value": "民勤县"
        }, {
            "code": "620622",
            "value": "古浪县"
        }, {
            "code": "620623",
            "value": "天祝县"
        }]
    }, {
        "code": "6207",
        "value": "张掖市",
        "cities": [{
            "code": "620701",
            "value": "市辖区"
        }, {
            "code": "620702",
            "value": "甘州区"
        }, {
            "code": "620721",
            "value": "肃南县"
        }, {
            "code": "620722",
            "value": "民乐县"
        }, {
            "code": "620723",
            "value": "临泽县"
        }, {
            "code": "620724",
            "value": "高台县"
        }, {
            "code": "620725",
            "value": "山丹县"
        }]
    }, {
        "code": "6208",
        "value": "平凉市",
        "cities": [{
            "code": "620801",
            "value": "市辖区"
        }, {
            "code": "620802",
            "value": "崆峒区"
        }, {
            "code": "620821",
            "value": "泾川县"
        }, {
            "code": "620822",
            "value": "灵台县"
        }, {
            "code": "620823",
            "value": "崇信县"
        }, {
            "code": "620824",
            "value": "华亭县"
        }, {
            "code": "620825",
            "value": "庄浪县"
        }, {
            "code": "620826",
            "value": "静宁县"
        }]
    }, {
        "code": "6209",
        "value": "酒泉市",
        "cities": [{
            "code": "620901",
            "value": "市辖区"
        }, {
            "code": "620902",
            "value": "肃州区"
        }, {
            "code": "620921",
            "value": "金塔县"
        }, {
            "code": "620922",
            "value": "瓜州县"
        }, {
            "code": "620923",
            "value": "肃北县"
        }, {
            "code": "620924",
            "value": "阿克塞县"
        }, {
            "code": "620981",
            "value": "玉门市"
        }, {
            "code": "620982",
            "value": "敦煌市"
        }]
    }, {
        "code": "6210",
        "value": "庆阳市",
        "cities": [{
            "code": "621001",
            "value": "市辖区"
        }, {
            "code": "621002",
            "value": "西峰区"
        }, {
            "code": "621021",
            "value": "庆城县"
        }, {
            "code": "621022",
            "value": "环县"
        }, {
            "code": "621023",
            "value": "华池县"
        }, {
            "code": "621024",
            "value": "合水县"
        }, {
            "code": "621025",
            "value": "正宁县"
        }, {
            "code": "621026",
            "value": "宁县"
        }, {
            "code": "621027",
            "value": "镇原县"
        }]
    }, {
        "code": "6211",
        "value": "定西市",
        "cities": [{
            "code": "621101",
            "value": "市辖区"
        }, {
            "code": "621102",
            "value": "安定区"
        }, {
            "code": "621121",
            "value": "通渭县"
        }, {
            "code": "621122",
            "value": "陇西县"
        }, {
            "code": "621123",
            "value": "渭源县"
        }, {
            "code": "621124",
            "value": "临洮县"
        }, {
            "code": "621125",
            "value": "漳县"
        }, {
            "code": "621126",
            "value": "岷县"
        }]
    }, {
        "code": "6212",
        "value": "陇南市",
        "cities": [{
            "code": "621201",
            "value": "市辖区"
        }, {
            "code": "621202",
            "value": "武都区"
        }, {
            "code": "621221",
            "value": "成县"
        }, {
            "code": "621222",
            "value": "文县"
        }, {
            "code": "621223",
            "value": "宕昌县"
        }, {
            "code": "621224",
            "value": "康县"
        }, {
            "code": "621225",
            "value": "西和县"
        }, {
            "code": "621226",
            "value": "礼县"
        }, {
            "code": "621227",
            "value": "徽县"
        }, {
            "code": "621228",
            "value": "两当县"
        }]
    }, {
        "code": "6229",
        "value": "临夏州",
        "cities": [{
            "code": "622901",
            "value": "临夏市"
        }, {
            "code": "622921",
            "value": "临夏县"
        }, {
            "code": "622922",
            "value": "康乐县"
        }, {
            "code": "622923",
            "value": "永靖县"
        }, {
            "code": "622924",
            "value": "广河县"
        }, {
            "code": "622925",
            "value": "和政县"
        }, {
            "code": "622926",
            "value": "东乡族自治县"
        }, {
            "code": "622927",
            "value": "积石山县"
        }]
    }, {
        "code": "6230",
        "value": "甘南州",
        "cities": [{
            "code": "623001",
            "value": "合作市"
        }, {
            "code": "623021",
            "value": "临潭县"
        }, {
            "code": "623022",
            "value": "卓尼县"
        }, {
            "code": "623023",
            "value": "舟曲县"
        }, {
            "code": "623024",
            "value": "迭部县"
        }, {
            "code": "623025",
            "value": "玛曲县"
        }, {
            "code": "623026",
            "value": "碌曲县"
        }, {
            "code": "623027",
            "value": "夏河县"
        }]
    }]
}, {
    "code": "63",
    "value": "青海省",
    "states": [{
        "code": "6301",
        "value": "西宁市",
        "cities": [{
            "code": "630101",
            "value": "市辖区"
        }, {
            "code": "630102",
            "value": "城东区"
        }, {
            "code": "630103",
            "value": "城中区"
        }, {
            "code": "630104",
            "value": "城西区"
        }, {
            "code": "630105",
            "value": "城北区"
        }, {
            "code": "630121",
            "value": "大通县"
        }, {
            "code": "630122",
            "value": "湟中县"
        }, {
            "code": "630123",
            "value": "湟源县"
        }]
    }, {
        "code": "6302",
        "value": "海东市",
        "cities": [{
            "code": "630202",
            "value": "乐都区"
        }, {
            "code": "630221",
            "value": "平安区"
        }, {
            "code": "630222",
            "value": "民和县"
        }, {
            "code": "630223",
            "value": "互助县"
        }, {
            "code": "630224",
            "value": "化隆县"
        }, {
            "code": "630225",
            "value": "循化县"
        }]
    }, {
        "code": "6322",
        "value": "海北州",
        "cities": [{
            "code": "632221",
            "value": "门源县"
        }, {
            "code": "632222",
            "value": "祁连县"
        }, {
            "code": "632223",
            "value": "海晏县"
        }, {
            "code": "632224",
            "value": "刚察县"
        }]
    }, {
        "code": "6323",
        "value": "黄南州",
        "cities": [{
            "code": "632321",
            "value": "同仁县"
        }, {
            "code": "632322",
            "value": "尖扎县"
        }, {
            "code": "632323",
            "value": "泽库县"
        }, {
            "code": "632324",
            "value": "河南县"
        }]
    }, {
        "code": "6325",
        "value": "海南州",
        "cities": [{
            "code": "632521",
            "value": "共和县"
        }, {
            "code": "632522",
            "value": "同德县"
        }, {
            "code": "632523",
            "value": "贵德县"
        }, {
            "code": "632524",
            "value": "兴海县"
        }, {
            "code": "632525",
            "value": "贵南县"
        }]
    }, {
        "code": "6326",
        "value": "果洛州",
        "cities": [{
            "code": "632621",
            "value": "玛沁县"
        }, {
            "code": "632622",
            "value": "班玛县"
        }, {
            "code": "632623",
            "value": "甘德县"
        }, {
            "code": "632624",
            "value": "达日县"
        }, {
            "code": "632625",
            "value": "久治县"
        }, {
            "code": "632626",
            "value": "玛多县"
        }]
    }, {
        "code": "6327",
        "value": "玉树州",
        "cities": [{
            "code": "632701",
            "value": "玉树市"
        }, {
            "code": "632722",
            "value": "杂多县"
        }, {
            "code": "632723",
            "value": "称多县"
        }, {
            "code": "632724",
            "value": "治多县"
        }, {
            "code": "632725",
            "value": "囊谦县"
        }, {
            "code": "632726",
            "value": "曲麻莱县"
        }]
    }, {
        "code": "6328",
        "value": "海西州",
        "cities": [{
            "code": "632801",
            "value": "格尔木市"
        }, {
            "code": "632802",
            "value": "德令哈市"
        }, {
            "code": "632821",
            "value": "乌兰县"
        }, {
            "code": "632822",
            "value": "都兰县"
        }, {
            "code": "632823",
            "value": "天峻县"
        }]
    }]
}, {
    "code": "64",
    "value": "宁夏回族自治区",
    "states": [{
        "code": "6401",
        "value": "银川市",
        "cities": [{
            "code": "640101",
            "value": "市辖区"
        }, {
            "code": "640104",
            "value": "兴庆区"
        }, {
            "code": "640105",
            "value": "西夏区"
        }, {
            "code": "640106",
            "value": "金凤区"
        }, {
            "code": "640121",
            "value": "永宁县"
        }, {
            "code": "640122",
            "value": "贺兰县"
        }, {
            "code": "640181",
            "value": "灵武市"
        }]
    }, {
        "code": "6402",
        "value": "石嘴山市",
        "cities": [{
            "code": "640201",
            "value": "市辖区"
        }, {
            "code": "640202",
            "value": "大武口区"
        }, {
            "code": "640205",
            "value": "惠农区"
        }, {
            "code": "640221",
            "value": "平罗县"
        }]
    }, {
        "code": "6403",
        "value": "吴忠市",
        "cities": [{
            "code": "640301",
            "value": "市辖区"
        }, {
            "code": "640302",
            "value": "利通区"
        }, {
            "code": "640303",
            "value": "红寺堡区"
        }, {
            "code": "640323",
            "value": "盐池县"
        }, {
            "code": "640324",
            "value": "同心县"
        }, {
            "code": "640381",
            "value": "青铜峡市"
        }]
    }, {
        "code": "6404",
        "value": "固原市",
        "cities": [{
            "code": "640401",
            "value": "市辖区"
        }, {
            "code": "640402",
            "value": "原州区"
        }, {
            "code": "640422",
            "value": "西吉县"
        }, {
            "code": "640423",
            "value": "隆德县"
        }, {
            "code": "640424",
            "value": "泾源县"
        }, {
            "code": "640425",
            "value": "彭阳县"
        }]
    }, {
        "code": "6405",
        "value": "中卫市",
        "cities": [{
            "code": "640501",
            "value": "市辖区"
        }, {
            "code": "640502",
            "value": "沙坡头区"
        }, {
            "code": "640521",
            "value": "中宁县"
        }, {
            "code": "640522",
            "value": "海原县"
        }]
    }]
}, {
    "code": "65",
    "value": "新疆维吾尔自治区",
    "states": [{
        "code": "6501",
        "value": "乌鲁木齐市",
        "cities": [{
            "code": "650101",
            "value": "市辖区"
        }, {
            "code": "650102",
            "value": "天山区"
        }, {
            "code": "650103",
            "value": "沙依巴克区"
        }, {
            "code": "650104",
            "value": "新市区"
        }, {
            "code": "650105",
            "value": "水磨沟区"
        }, {
            "code": "650106",
            "value": "头屯河区"
        }, {
            "code": "650107",
            "value": "达坂城区"
        }, {
            "code": "650109",
            "value": "米东区"
        }, {
            "code": "650121",
            "value": "乌鲁木齐县"
        }]
    }, {
        "code": "6502",
        "value": "克拉玛依市",
        "cities": [{
            "code": "650201",
            "value": "市辖区"
        }, {
            "code": "650202",
            "value": "独山子区"
        }, {
            "code": "650203",
            "value": "克拉玛依区"
        }, {
            "code": "650204",
            "value": "白碱滩区"
        }, {
            "code": "650205",
            "value": "乌尔禾区"
        }]
    }, {
        "code": "6521",
        "value": "吐鲁番地区",
        "cities": [{
            "code": "652101",
            "value": "吐鲁番市"
        }, {
            "code": "652122",
            "value": "鄯善县"
        }, {
            "code": "652123",
            "value": "托克逊县"
        }]
    }, {
        "code": "6522",
        "value": "哈密地区",
        "cities": [{
            "code": "652201",
            "value": "哈密市"
        }, {
            "code": "652222",
            "value": "巴里坤哈萨克自治县"
        }, {
            "code": "652223",
            "value": "伊吾县"
        }]
    }, {
        "code": "6523",
        "value": "昌吉州",
        "cities": [{
            "code": "652301",
            "value": "昌吉市"
        }, {
            "code": "652302",
            "value": "阜康市"
        }, {
            "code": "652323",
            "value": "呼图壁县"
        }, {
            "code": "652324",
            "value": "玛纳斯县"
        }, {
            "code": "652325",
            "value": "奇台县"
        }, {
            "code": "652327",
            "value": "吉木萨尔县"
        }, {
            "code": "652328",
            "value": "木垒哈萨克自治县"
        }]
    }, {
        "code": "6527",
        "value": "博尔塔拉蒙古自治州",
        "cities": [{
            "code": "652701",
            "value": "博乐市"
        }, {
            "code": "652702",
            "value": "阿拉山口市"
        }, {
            "code": "652722",
            "value": "精河县"
        }, {
            "code": "652723",
            "value": "温泉县"
        }]
    }, {
        "code": "6528",
        "value": "巴音郭楞蒙古自治州",
        "cities": [{
            "code": "652801",
            "value": "库尔勒市"
        }, {
            "code": "652822",
            "value": "轮台县"
        }, {
            "code": "652823",
            "value": "尉犁县"
        }, {
            "code": "652824",
            "value": "若羌县"
        }, {
            "code": "652825",
            "value": "且末县"
        }, {
            "code": "652826",
            "value": "焉耆县"
        }, {
            "code": "652827",
            "value": "和静县"
        }, {
            "code": "652828",
            "value": "和硕县"
        }, {
            "code": "652829",
            "value": "博湖县"
        }]
    }, {
        "code": "6529",
        "value": "阿克苏地区",
        "cities": [{
            "code": "652901",
            "value": "阿克苏市"
        }, {
            "code": "652922",
            "value": "温宿县"
        }, {
            "code": "652923",
            "value": "库车县"
        }, {
            "code": "652924",
            "value": "沙雅县"
        }, {
            "code": "652925",
            "value": "新和县"
        }, {
            "code": "652926",
            "value": "拜城县"
        }, {
            "code": "652927",
            "value": "乌什县"
        }, {
            "code": "652928",
            "value": "阿瓦提县"
        }, {
            "code": "652929",
            "value": "柯坪县"
        }]
    }, {
        "code": "6530",
        "value": "克州",
        "cities": [{
            "code": "653001",
            "value": "阿图什市"
        }, {
            "code": "653022",
            "value": "阿克陶县"
        }, {
            "code": "653023",
            "value": "阿合奇县"
        }, {
            "code": "653024",
            "value": "乌恰县"
        }]
    }, {
        "code": "6531",
        "value": "喀什地区",
        "cities": [{
            "code": "653101",
            "value": "喀什市"
        }, {
            "code": "653121",
            "value": "疏附县"
        }, {
            "code": "653122",
            "value": "疏勒县"
        }, {
            "code": "653123",
            "value": "英吉沙县"
        }, {
            "code": "653124",
            "value": "泽普县"
        }, {
            "code": "653125",
            "value": "莎车县"
        }, {
            "code": "653126",
            "value": "叶城县"
        }, {
            "code": "653127",
            "value": "麦盖提县"
        }, {
            "code": "653128",
            "value": "岳普湖县"
        }, {
            "code": "653129",
            "value": "伽师县"
        }, {
            "code": "653130",
            "value": "巴楚县"
        }, {
            "code": "653131",
            "value": "塔什库尔干县"
        }]
    }, {
        "code": "6532",
        "value": "和田地区",
        "cities": [{
            "code": "653201",
            "value": "和田市"
        }, {
            "code": "653221",
            "value": "和田县"
        }, {
            "code": "653222",
            "value": "墨玉县"
        }, {
            "code": "653223",
            "value": "皮山县"
        }, {
            "code": "653224",
            "value": "洛浦县"
        }, {
            "code": "653225",
            "value": "策勒县"
        }, {
            "code": "653226",
            "value": "于田县"
        }, {
            "code": "653227",
            "value": "民丰县"
        }]
    }, {
        "code": "6540",
        "value": "伊犁州",
        "cities": [{
            "code": "654002",
            "value": "伊宁市"
        }, {
            "code": "654003",
            "value": "奎屯市"
        }, {
            "code": "654021",
            "value": "伊宁县"
        }, {
            "code": "654022",
            "value": "察布查尔县"
        }, {
            "code": "654023",
            "value": "霍城县"
        }, {
            "code": "654024",
            "value": "巩留县"
        }, {
            "code": "654025",
            "value": "新源县"
        }, {
            "code": "654026",
            "value": "昭苏县"
        }, {
            "code": "654027",
            "value": "特克斯县"
        }, {
            "code": "654028",
            "value": "尼勒克县"
        }]
    }, {
        "code": "6542",
        "value": "塔城地区",
        "cities": [{
            "code": "654201",
            "value": "塔城市"
        }, {
            "code": "654202",
            "value": "乌苏市"
        }, {
            "code": "654221",
            "value": "额敏县"
        }, {
            "code": "654223",
            "value": "沙湾县"
        }, {
            "code": "654224",
            "value": "托里县"
        }, {
            "code": "654225",
            "value": "裕民县"
        }, {
            "code": "654226",
            "value": "和布克赛尔蒙古自治县"
        }]
    }, {
        "code": "6543",
        "value": "阿勒泰地区",
        "cities": [{
            "code": "654301",
            "value": "阿勒泰市"
        }, {
            "code": "654321",
            "value": "布尔津县"
        }, {
            "code": "654322",
            "value": "富蕴县"
        }, {
            "code": "654323",
            "value": "福海县"
        }, {
            "code": "654324",
            "value": "哈巴河县"
        }, {
            "code": "654325",
            "value": "青河县"
        }, {
            "code": "654326",
            "value": "吉木乃县"
        }]
    }, {
        "code": "6590",
        "value": "省直辖行政单位",
        "cities": [{
            "code": "659001",
            "value": "石河子市"
        }, {
            "code": "659002",
            "value": "阿拉尔市"
        }, {
            "code": "659003",
            "value": "图木舒克市"
        }, {
            "code": "659004",
            "value": "五家渠市"
        }, {
            "code": "659005",
            "value": "北屯市"
        }, {
            "code": "659006",
            "value": "铁门关市"
        }]
    }]
}, {
    "code": "71",
    "value": "台湾省",
    "states": []
}, {
    "code": "81",
    "value": "香港特别行政区",
    "states": []
}, {
    "code": "82",
    "value": "澳门特别行政区",
    "states": []
}];

// 获取省
function getProvince() {
    return _address;
}

// 根据省获取到城市列表
function getCityList(province) {
    var cityList = [];
    var CityData = _address;
    for (var i = 0; i < CityData.length; i++) {
        if (province == CityData[i]['code']) {
            cityList = CityData[i]['states'];
            break;
        }
    };
    return cityList;
}
// 根据省获取到城市列表
function getCityListByValue(province) {
    var cityList = [];
    var CityData = _address;
    for (var i = 0; i < CityData.length; i++) {
        if (province == CityData[i]['value']) {
            cityList = CityData[i]['states'];
            break;
        }
    };
    return cityList;
}
// 根据市获取到区列表
function getAreaList(city, cityList) {
    var areas = [];
    for (var i = 0; i < cityList.length; i++) {
        if (city == cityList[i]['code']) {
            areas = cityList[i]['cities'];
            break;
        }
    }
    return areas;
}

// 根据市获取到区列表
function getAreaListByValue(city, cityList) {
    var areas = [];
    for (var i = 0; i < cityList.length; i++) {
        if (city == cityList[i]['value']) {
            areas = cityList[i]['cities'];
            break;
        }
    }
    return areas;
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProvince_code = getProvince_code;
exports.getCityList_code = getCityList_code;
exports.getAllCity_code = getAllCity_code;
var _address = [{
    "code": "1100",
    "name": "华东",
    "areas": [{
        "code": "34",
        "name": "安徽"
    }, {
        "code": "32",
        "name": "江苏"
    }, {
        "code": "36",
        "name": "江西"
    }, {
        "code": "31",
        "name": "上海"
    }, {
        "code": "33",
        "name": "浙江"
    }]
}, {
    "code": "1200",
    "name": "华北",
    "areas": [{
        "code": "11",
        "name": "北京"
    }, {
        "code": "13",
        "name": "河北"
    }, {
        "code": "15",
        "name": "内蒙古"
    }, {
        "code": "37",
        "name": "山东"
    }, {
        "code": "14",
        "name": "山西"
    }, {
        "code": "12",
        "name": "天津"
    }]
}, {
    "code": "1300",
    "name": "华中",
    "areas": [{
        "code": "41",
        "name": "河南"
    }, {
        "code": "42",
        "name": "湖北"
    }, {
        "code": "43",
        "name": "湖南"
    }]
}, {
    "code": "1400",
    "name": "华南",
    "areas": [{
        "code": "35",
        "name": "福建"
    }, {
        "code": "44",
        "name": "广东"
    }, {
        "code": "45",
        "name": "广西"
    }, {
        "code": "46",
        "name": "海南"
    }]
}, {
    "code": "1500",
    "name": "东北",
    "areas": [{
        "code": "23",
        "name": "黑龙江"
    }, {
        "code": "22",
        "name": "吉林"
    }, {
        "code": "21",
        "name": "辽宁"
    }]
}, {
    "code": "1600",
    "name": "西北",
    "areas": [{
        "code": "62",
        "name": "甘肃"
    }, {
        "code": "1664",
        "name": "宁夏"
    }, {
        "code": "63",
        "name": "青海"
    }, {
        "code": "61",
        "name": "陕西"
    }, {
        "code": "65",
        "name": "新疆"
    }]
}, {
    "code": "1700",
    "name": "华西",
    "areas": [{
        "code": "52",
        "name": "贵州"
    }, {
        "code": "51",
        "name": "四川"
    }, {
        "code": "54",
        "name": "西藏"
    }, {
        "code": "53",
        "name": "云南"
    }, {
        "code": "50",
        "name": "重庆"
    }]
}, {
    "code": "1800",
    "name": "港澳台",
    "areas": [{
        "code": "81",
        "name": "香港"
    }, {
        "code": "82",
        "name": "澳门"
    }, {
        "code": "71",
        "name": "台湾"
    }]
}];
// 获取省
function getProvince_code() {
    return _address;
}
// 根据省获取到城市列表
function getCityList_code(code) {
    var cityList = [];
    var CityData = _address;
    for (var i = 0; i < CityData.length; i++) {
        if (code == CityData[i]['code']) {
            cityList = CityData[i]['areas'];
            break;
        }
    };
    return cityList;
}

//获取areas级别所有城市列表
function getAllCity_code() {
    var cityList = [];
    var CityData = _address;
    for (var i = 0; i < CityData.length; i++) {
        var areas = CityData[i]['areas'];
        for (var j = 0; j < areas.length; j++) {
            cityList.push(areas[j]);
        }
    };
    return cityList;
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isomorphicFetch = __webpack_require__(5);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (url, data) {

  var headers = new Headers();
  return function (url, data) {
    return (0, _isomorphicFetch2.default)(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: headers,
      body: data
    }).then(function (res) {
      if (res.ok) {
        return res.json();
      } else {
        return {};
      }
    }).then(function (res) {
      if (res.errorCode === undefined && res.code !== 0) {} else if (res.code === undefined && res.errorCode !== 0) {}
      return res;
    }).catch(function (e) {
      return { errorCode: -1, data: {}, errorMsg: "请求失败，请重新操作" };
    });
  }(url, data);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isomorphicFetch = __webpack_require__(5);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _message = __webpack_require__(9);

var _message2 = _interopRequireDefault(_message);

var _storage = __webpack_require__(4);

var storage = _interopRequireWildcard(_storage);

var _reactRouter = __webpack_require__(2);

var _history = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appHistory = (0, _reactRouter.useRouterHistory)(_history.createHashHistory)({ queryKey: false });

module.exports = function (url) {

  return function (url) {
    /* let {shop} = storage.getUserInfo()
     if(shop){
       var shopId = shop.id
     
       let urlList = url.split('?')
       if(urlList.length>1){
         let str = urlList[1].indexOf('id=')>-1 ? '&shopId='+shopId:'&id='+shopId+'&shopId='+shopId
         urlList[1] = urlList[1]+str
       }else{
         urlList.push('id='+shopId+'&shopId='+shopId)
       }
       url = urlList.join('?')
     }*/
    var headers = new Headers();
    return (0, _isomorphicFetch2.default)(url, {
      credentials: 'same-origin',
      headers: headers
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      if (res.errorCode == 1) {
        // msg(res.errorMsg,res.errorCode)
        appHistory.push('Login');
      }
      return res;
    }).catch(function (e) {
      return { code: -1, data: {}, message: "请求失败，请重新操作" };
    });
  }(url);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.get = get;
exports.post = post;

var _es6Promise = __webpack_require__(45);

var _isomorphicFetch = __webpack_require__(5);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _storage = __webpack_require__(4);

var storage = _interopRequireWildcard(_storage);

var _reactRouter = __webpack_require__(2);

var _history = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appHistory = (0, _reactRouter.useRouterHistory)(_history.createHashHistory)({ queryKey: false });
/**
 * @desc 格式化一个对象为字符串如 name=pat&city_no=020&old=99;
 * @param data string
 **/
function parseParams(data) {
  if (data == null) {
    return '';
  }
  var list = [];
  for (var item in data) {
    list.push(item + "=" + data[item]);
  }
  return list.join("&");
}
var option = {
  timeout: 10000,
  credentials: 'include'
};

function get() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (json) {};
  var reducersConnect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (json) {};

  var _storage$getUserInfo = storage.getUserInfo(),
      shop = _storage$getUserInfo.shop;

  if (shop) {
    var shopId = shop.id;
    Object.assign(data, { shopId: shopId, id: shopId });
  }
  var params = parseParams(data),
      tarUrl = data == null ? url : url + "?" + params;
  console.dir(tarUrl);
  return function (dispatch) {
    return (0, _isomorphicFetch2.default)(tarUrl, _extends({ method: "GET" }, option)).then(function (response) {
      return response.json();
    }).then(function (json) {
      console.dir(json);
      if (json.errorCode == 1) {
        msg(json.errorMsg, json.errorCode);
        appHistory.push('Login');
      }
      dispatch(reducersConnect(json));
      callback(json);
    }).catch(function (e) {
      return dispatch(reducersConnect({
        errorCode: -2,
        errorMsg: "请求失败",
        success: false,
        result: {} }));
    });
  };
}

function post() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (json) {};
  var reducersConnect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (json) {};

  var _storage$getUserInfo2 = storage.getUserInfo(),
      shop = _storage$getUserInfo2.shop;

  if (shop) {
    var shopId = shop.id;
    Object.assign(data, { shopId: shopId, id: shopId });
  }
  return function (dispatch) {
    return (0, _isomorphicFetch2.default)(url, _extends({ method: "POST", body: JSON.stringify(data) }, option)).then(function (response) {
      return response.json();
    }).then(function (json) {
      dispatch(reducersConnect(json));
      callback(json);
    }).catch(function (e) {
      return dispatch(reducersConnect({
        errorCode: -2,
        errorMsg: "请求失败",
        success: false,
        result: {} }));
    });
  };
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */

/*
 * Calculate the MD5 of a raw string
 */
function rstr_md5(s) {
  return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
}

/*
 * Calculate the HMAC-MD5, of a key and some data (raw strings)
 */
function rstr_hmac_md5(key, data) {
  var bkey = rstr2binl(key);
  if (bkey.length > 16) bkey = binl_md5(bkey, key.length * 8);

  var ipad = Array(16),
      opad = Array(16);
  for (var i = 0; i < 16; i++) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
  return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
}

/*
 * Convert a raw string to a hex string
 */
function rstr2hex(input) {
  try {
    hexcase;
  } catch (e) {
    hexcase = 0;
  }
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var output = "";
  var x;
  for (var i = 0; i < input.length; i++) {
    x = input.charCodeAt(i);
    output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
  }
  return output;
}

/*
 * Convert a raw string to a base-64 string
 */
function rstr2b64(input) {
  try {
    b64pad;
  } catch (e) {
    b64pad = '';
  }
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var output = "";
  var len = input.length;
  for (var i = 0; i < len; i += 3) {
    var triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
    for (var j = 0; j < 4; j++) {
      if (i * 8 + j * 6 > input.length * 8) output += b64pad;else output += tab.charAt(triplet >>> 6 * (3 - j) & 0x3F);
    }
  }
  return output;
}

/*
 * Convert a raw string to an arbitrary string encoding
 */
function rstr2any(input, encoding) {
  var divisor = encoding.length;
  var i, j, q, x, quotient;

  /* Convert to an array of 16-bit big-endian values, forming the dividend */
  var dividend = Array(Math.ceil(input.length / 2));
  for (i = 0; i < dividend.length; i++) {
    dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1);
  }

  /*
   * Repeatedly perform a long division. The binary array forms the dividend,
   * the length of the encoding is the divisor. Once computed, the quotient
   * forms the dividend for the next step. All remainders are stored for later
   * use.
   */
  var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
  var remainders = Array(full_length);
  for (j = 0; j < full_length; j++) {
    quotient = Array();
    x = 0;
    for (i = 0; i < dividend.length; i++) {
      x = (x << 16) + dividend[i];
      q = Math.floor(x / divisor);
      x -= q * divisor;
      if (quotient.length > 0 || q > 0) quotient[quotient.length] = q;
    }
    remainders[j] = x;
    dividend = quotient;
  }

  /* Convert the remainders to the output string */
  var output = "";
  for (i = remainders.length - 1; i >= 0; i--) {
    output += encoding.charAt(remainders[i]);
  }return output;
}

/*
 * Encode a string as utf-8.
 * For efficiency, this assumes the input is valid utf-16.
 */
function str2rstr_utf8(input) {
  var output = "";
  var i = -1;
  var x, y;

  while (++i < input.length) {
    /* Decode utf-16 surrogate pairs */
    x = input.charCodeAt(i);
    y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
    if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
      x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
      i++;
    }

    /* Encode output as utf-8 */
    if (x <= 0x7F) output += String.fromCharCode(x);else if (x <= 0x7FF) output += String.fromCharCode(0xC0 | x >>> 6 & 0x1F, 0x80 | x & 0x3F);else if (x <= 0xFFFF) output += String.fromCharCode(0xE0 | x >>> 12 & 0x0F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);else if (x <= 0x1FFFFF) output += String.fromCharCode(0xF0 | x >>> 18 & 0x07, 0x80 | x >>> 12 & 0x3F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
  }
  return output;
}

/*
 * Encode a string as utf-16
 */
function str2rstr_utf16le(input) {
  var output = "";
  for (var i = 0; i < input.length; i++) {
    output += String.fromCharCode(input.charCodeAt(i) & 0xFF, input.charCodeAt(i) >>> 8 & 0xFF);
  }return output;
}

function str2rstr_utf16be(input) {
  var output = "";
  for (var i = 0; i < input.length; i++) {
    output += String.fromCharCode(input.charCodeAt(i) >>> 8 & 0xFF, input.charCodeAt(i) & 0xFF);
  }return output;
}

/*
 * Convert a raw string to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */
function rstr2binl(input) {
  var output = Array(input.length >> 2);
  for (var i = 0; i < output.length; i++) {
    output[i] = 0;
  }for (var i = 0; i < input.length * 8; i += 8) {
    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << i % 32;
  }return output;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2rstr(input) {
  var output = "";
  for (var i = 0; i < input.length * 32; i += 8) {
    output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xFF);
  }return output;
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */
function binl_md5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[(len + 64 >>> 9 << 4) + 14] = len;

  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

    a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t) {
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function md5_ff(a, b, c, d, x, s, t) {
  return md5_cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t) {
  return md5_cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t) {
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t) {
  return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xFFFF;
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}

module.exports = function (s) {
  return rstr2hex(rstr_md5(str2rstr_utf8(s)));
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postJson = exports.post = undefined;

var _isomorphicFetch = __webpack_require__(5);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _storage = __webpack_require__(4);

var storage = _interopRequireWildcard(_storage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { browserHistory } from 'react-router/es6'
function param(obj) {
  var query = '',
      name,
      value,
      fullSubName,
      subName,
      subValue,
      innerObj,
      i;

  for (name in obj) {
    value = obj[name];

    if (value instanceof Array) {
      for (i = 0; i < value.length; ++i) {
        subValue = value[i];
        fullSubName = name + '[' + i + ']';
        innerObj = {};
        innerObj[fullSubName] = subValue;
        query += param(innerObj) + '&';
      }
    } else if (value instanceof Object) {
      for (subName in value) {
        subValue = value[subName];
        fullSubName = name + '[' + subName + ']';
        innerObj = {};
        innerObj[fullSubName] = subValue;
        query += param(innerObj) + '&';
      }
    } else if (value !== undefined && value !== null) query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
  }
  return query.length ? query.substr(0, query.length - 1) : query;
}

var response = function response(res) {
  var token = res.headers.get('wesale-token');
  if (res.ok) {
    return res.json();
  } else {
    return {};
  }
};
var post = exports.post = function post(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _storage$getUserInfo = storage.getUserInfo(),
      shop = _storage$getUserInfo.shop;

  if (shop) {
    var shopId = shop.id;
    data.shopId = shop.id;
  }
  var query = param(data);
  var headers = new Headers();
  headers.append('Accept', 'application/x-www-form-urlencoded;charset=utf-8');
  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  return function (url, data) {
    return (0, _isomorphicFetch2.default)(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: headers,
      body: query
    }).then(response).then(function (res) {
      if (res.errorCode === undefined && res.code !== 0) {} else if (res.code === undefined && res.errorCode !== 0) {}
      return res;
    });
  }(url, data);
};

var postJson = exports.postJson = function postJson(url, data) {
  var headers = new Headers();
  return function (url, data) {
    return (0, _isomorphicFetch2.default)(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: headers,
      body: JSON.stringify(data)
    }).then(response).then(function (res) {
      if (res.errorCode === undefined && res.code !== 0) {} else if (res.code === undefined && res.errorCode !== 0) {}
      return res;
    });
  }(url, data);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import config from '../../config'
var env = "development";
var DEBUG = env === "production"; // 区分是否生产环境和开发环境
// const port = config[env]['port'] // 获取端口号
// const local = "http://localhost:"+port+"/"

// 打包压缩代码上传测试服务器与正式服务后，请求api的路径区分
var path = DEBUG ? '../api' : 'SibuXwsApi/api';
var json = DEBUG ? '../api' : 'SibuXwsApiJson/api';
var file = DEBUG ? '../api' : 'SibuXwsApiFile/api';
var fileM = DEBUG ? '../api' : 'SibuXwsApiFileM/api';

var pathLogin = DEBUG ? '' : 'SibuXwsApi'; // 接口不需要登录验证

var url = {

  "sendsms": pathLogin + '/visitor/sendsms', //获取登录时的手机验证码
  "login": pathLogin + '/login', //用户登录
  "logout": pathLogin + '/admin/logout', //退出登录


  "cmsGetCategory": pathLogin + "/cms/getCategory", // cms分类
  "getArticelForPage": pathLogin + '/cms/getArticelForPage', //cms article 列表 ?categoryId=9
  "getArticelDetail": pathLogin + '/cms/getArticelDetail', //?id=1

  "sellerOrder": path + "/sellerOrder/page", //订单列表
  "sellerOrderDetail": path + "/sellerOrder/get", //订单详情
  "orderCount": path + "/sellerOrder/orderCount", //各个订单状态下的订单数量
  "orderDelivery": path + "/sellerOrder/delivery", //订单发货

  "categoryList": path + "/category/list", //卖家分类列表
  "categoryAdd": path + "/category/add", //添加卖家分类
  "categoryEdit": path + "/category/edit", //编辑卖家分类
  "categoryDelete": path + "/category/delete", //删除卖家分类

  "brandList": path + "/brand/list", // 获取商品品牌
  "listSupplierList": path + "/brand/listSupplier", // 供应商列表

  "platform": path + "/category/platform", //获取商品品牌 (新)
  "goodsAdd": path + "/goods/add", //添加卖家商品
  "goodsEdit": path + "/goods/edit", //编辑卖家商品
  "goodsDelete": path + "/goods/delete", //删除卖家商品
  "goodsGet": path + "/goods/get", //获取卖家商品详情
  "goodsList": path + "/goods/page", //分页商品列表
  "goodsAgent": path + "/goods/agent", //代理商品
  "goodsBatchUpAndDown": path + "/goods/batchUpAndDown", //批量上下架商品【0为上架，1为下架】
  "goodsAddCategory": path + "/goods/batchAddCategory", //批量将商品添加到分类
  "goodsCancelAgent": path + "/goods/cancelAgent", //取消代理商品
  "saveUpdateSku": json + "/sku/saveUpdateSku", //添加卖家商品sku
  "listSkuByGoods": path + "/sku/listSkuByGoods", //获取商品sku
  "photoUpload": file + "/upload/photoUpload", //图片上传
  "batchUploadSortedImg": fileM + '/upload/batchUploadSortedImg', // 批量上传图片并排序


  "attrValueAdd": path + "/attrValue/add", //添加卖家属性值
  "attrValueEdit": path + "/attrValue/edit", //编辑卖家属性值
  "attrValueDelete": path + "/attrValue/delete", //删除卖家属性值
  "attrValueList": path + "/attrValue/list", //某属性的属性值列表


  "attrList": path + "/attr/list", //获取卖家属性
  "attrAdd": path + "/attr/add", //添加卖家属性
  "attrEdit": path + "/attr/edit", //编辑卖家属性
  "attrDelete": path + "/attr/delete", //删除卖家属性
  "selectAttrList": path + "/attrValue/selectAttr", //获取属性及属性值列表


  "shopCreate": path + "/shop/create", //创建店铺
  "switchReductionMode": path + "/shop/switchReductionMode", //店铺库存扣减模式切换
  "switchReversePromise": path + "/shop/switchReversePromise", //店铺退货保障开关
  "switchTransactionPromise": path + "/shop/switchTransactionPromise", //店铺交易担保开关
  "updateAutoConfirm": path + "/shop/updateAutoConfirm", //店铺自动确认收货
  "updateShopName": path + "/shop/updateShopName", //店铺名称修改
  "updateShopImg": path + "/shop/updateShopImg", //店铺头像修改
  "getShop": path + "/shop/getShop", //获取店铺信息
  "updateShopPhone": path + "/shop/updateShopPhone", //店铺客服电话修改
  "getProfitTotal": path + "/profitTotal/get", //总收益信息获取
  "applyWithdrawCash": path + "/withdrawCash/apply", //申请提现
  "haveShop": path + "/shop/haveShop", //主播是否有店铺
  "withdrawCashList": path + "/withdrawCash/page", //提现记录分页
  "updateShopNotice": path + "/shop/updateShopNotice", //更新店铺公告
  "outcomePage": path + "/fund/outcomePage", //收支明细-支出列表
  "unfreezePage": path + "/fund/unfreezePage", //收支列表-冻结/解冻
  "fundAllPage": path + "/fund/allPage", //收支明细-全部
  "incomePage": path + "/fund/incomePage", //收支明细-收入列表


  "qualificationsAdd": path + "/qualifications/physicalStoreAuth/add", //新增实体店认证
  "qualificationsEdit": path + "/qualifications/physicalStoreAuth/edit", //修改实体店认证
  "qualificationsQuery": path + "/qualifications/physicalStoreAuth/query", //查询实体店认证
  "qualificationsQueryByShop": path + "/qualifications/physicalStoreAuth/queryByShop", //根据店铺去查询实体店认证
  "foodManagementAuthAdd": path + "/qualifications/foodManagementAuth/add", //新增食品经营认证
  "foodManagementAuthEdit": path + "/qualifications/foodManagementAuth/edit", //修改食品经营认证
  "foodManagementAuthQuery": path + "/qualifications/foodManagementAuth/query", //查询食品经营认证
  "foodManagementAuthQueryByShop": path + "/qualifications/foodManagementAuth/queryByShop", //根据店铺查询食品经营认证
  "publicationAuthAdd": path + "/qualifications/publicationAuth/add", //新增出版物认证
  "publicationAuthEdit": path + "/qualifications/publicationAuth/edit", //修改出版物认证
  "publicationAuthQuery": path + "/qualifications/publicationAuth/query", //查询出版物认证
  "publicationAuthQueryByShop": path + "/qualifications/publicationAuth/queryByShop", //根据店铺查询出版物认证
  "phonecardAuthAdd": path + "/qualifications/phonecardAuth/add", //新增电话卡审核
  "phonecardAuthEdit": path + "/qualifications/phonecardAuth/edit", //修改电话卡审核
  "phonecardAuthQuery": path + "/qualifications/phonecardAuth/query", //查询电话卡审核
  "phonecardAuthQueryByShop": path + "/qualifications/phonecardAuth/queryByShop", //根据店铺查询电话卡审核
  "physicalStoreAuthDel": path + "/qualifications/physicalStoreAuth/del", //删除实体店认证
  "foodManagementAuthDel": path + "/qualifications/foodManagementAuth/del", //删除食品经营认证
  "publicationAuthDel": path + "/qualifications/publicationAuth/del", //删除出版物认证
  "phonecardAuthDel": path + "/qualifications/phonecardAuth/del", //删除电话卡审核

  "getFreeTemplate": path + "/freightTemplate/getFreeTemplate", //获取免邮模板
  "updateFreeTemplate": path + "/freightTemplate/updateFreeTemplate", //更新免邮模板
  "addTemplate": json + "/freightTemplate/addTemplate", //添加运费模板
  "getTemplate": path + "/freightTemplate/getTemplate", //获取运费模板
  "updateTemplate": json + "/freightTemplate/updateTemplate", //更新运费模板
  "deleteDetail": path + "/freightTemplate/deleteDetail", //删除模板的子区域
  "deleteTemplate": path + "/freightTemplate/deleteTemplate", //删除运费模板
  "freightTemplateList": path + "/freightTemplate/page", //分页获取运费模板


  "categorySelfPlat": path + "/category/selfplat", //供货平台分类
  "agentPageList": path + "/goods/agentpage", // 供货商品列表

  "shopAccountGet": path + "/shopAccount/get", //店铺获取银行卡
  "shopAccountUpdate": path + "/shopAccount/update", //店铺更新银行卡
  "shopAccountAdd": path + "/shopAccount/add", //店铺绑定银行卡、
  "bankList": path + '/bank/list', //银行列表

  "queryRefundPage": path + "/refund/queryRefundPage", //商家退款列表
  "queryRefundProgress": path + "/refund/queryRefundProgress", //退单流程
  "RefundAgree": path + "/refund/agree", //同意退款
  "RefundRefuse": path + "/refund/refuse", //不同意退款
  "batchDistribution": path + "/sellerOrder/batchDistribution", //批量配货
  "getRefundOrder": path + "/refund/getRefundOrder", //退单详情


  "getAuthStatus": path + "/qualifications/foodManagementAuth/getAuthStatus", //食品认证
  "publicationAuth": path + "/qualifications/publicationAuth/getAuthStatus", //出版物认证
  "phonecardAuth": path + "/qualifications/phonecardAuth/getAuthStatus", //手机卡

  "getReturnAddres": path + "/returnAddress/get", // 获取退货地址
  "returnAddUpdate": path + "/returnAddress/addAndUpdate", // 添加/更新店铺退货地址

  "listGoodsSaleNum": path + "/goods/listGoodsSaleNum", //报表
  "goodExcel": path + "/export/goodExcel", //导出商品
  "orderExcel": pathLogin + "/export/orderExcel", //导出订单
  "deliveryOrder": file + "/import/deliveryOrder" //批量发货，上传文件

};

module.exports = url;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _message = __webpack_require__(9);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (list) {
  if (!list.length) return;
  var bl = true;
  var str = '';
  for (var i = 0; i < list.length; i++) {
    var rec = list[i],
        text = rec['text'],
        type = rec['type'],
        data = rec['data'];
    switch (type) {
      case 'tel':
        var re = /^1\d{10}$/;
        if (!re.test(data)) {
          str = text || "请输入正确的手机号码";
          bl = false;
          break;
        };
        break;
      case 'empty':
        if (!data) {
          str = text;
          bl = false;
        }
        break;
      case 'isTriDecimal':
        var length = rec['other'] == undefined ? 2 : rec['other'];
        data = data.toString();
        var decimalIndex = data.indexOf('.');
        if (decimalIndex == '-1') {
          bl = true;
        } else {
          var decimalPart = data.substring(decimalIndex + 1, data.length);
          if (decimalPart.length <= parseInt(length)) {
            bl = true;
          } else {
            str = text;
            bl = false;
          }
        }
        break;
    }
    if (!bl) break;
  }
  if (!bl) (0, _message2.default)(str);
  return bl;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   3.3.1
 */

(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  return function () {
    vertxNext(flush);
  };
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(57);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

polyfill();
// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));
//# sourceMappingURL=es6-promise.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48), __webpack_require__(51)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(11);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(35);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(51);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(581);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(6);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(658);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(659);

/***/ }),
/* 57 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);