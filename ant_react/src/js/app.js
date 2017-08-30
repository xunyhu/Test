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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _notice = __webpack_require__(10);

var _notice2 = _interopRequireDefault(_notice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(_reactRouter.Route, { path: '/*', component: _notice2.default });

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(13);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(650);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(651);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(654);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(655);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(5);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactRouter = __webpack_require__(2);

var _reactRouterRedux = __webpack_require__(8);

var _reactRedux = __webpack_require__(7);

var _history = __webpack_require__(6);

var _configureStore = __webpack_require__(11);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _configureStore2.default)();
var appHistory = (0, _reactRouter.useRouterHistory)(_history.createHashHistory)({ queryKey: false });
var history = (0, _reactRouterRedux.syncHistoryWithStore)(appHistory, store);
// const history = useRouterHistory(createHistory)({ basename: '/' })

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoticeMain = function (_Component) {
	_inherits(NoticeMain, _Component);

	function NoticeMain() {
		_classCallCheck(this, NoticeMain);

		return _possibleConstructorReturn(this, (NoticeMain.__proto__ || Object.getPrototypeOf(NoticeMain)).apply(this, arguments));
	}

	_createClass(NoticeMain, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'hello world'
			);
		}
	}]);

	return NoticeMain;
}(_react.Component);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(12);

var _reduxThunk = __webpack_require__(13);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(18);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
  // const store = createStore(rootReducer,initialState);
  // return store;
  // actions 内异步返回
  return (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default))(_redux.createStore)(_reducers2.default, initialState);
}
// export default compose(applyMiddleware(thunk))(createStore)(rootReducer);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(313);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(658);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(657);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(74);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foodStatus = foodStatus;
exports.punlicationStatus = punlicationStatus;
exports.phoneStatus = phoneStatus;

var _certification = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../actions/certification\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editShowInfo = exports.editShowImages = exports.editShowSkuTable = exports.editShowSku = undefined;

var _createReducer, _createReducer2, _createReducer3, _fromJS, _createReducer4;

var _editShop = __webpack_require__(22);

var _reduxImmutablejs = __webpack_require__(14);

var _immutable = __webpack_require__(15);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(12);

var _editShop = __webpack_require__(17);

var editShop = _interopRequireWildcard(_editShop);

var _shop = __webpack_require__(20);

var shop = _interopRequireWildcard(_shop);

var _shopList = __webpack_require__(21);

var shopList = _interopRequireWildcard(_shopList);

var _order = __webpack_require__(19);

var order = _interopRequireWildcard(_order);

var _reactRouterRedux = __webpack_require__(8);

var _certification = __webpack_require__(16);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var rootDeducer = (0, _redux.combineReducers)(_extends({}, editShop, shop, shopList, order, {
  foodStatus: _certification.foodStatus,
  punlicationStatus: _certification.punlicationStatus,
  phoneStatus: _certification.phoneStatus,
  routing: _reactRouterRedux.routerReducer

}));
exports.default = rootDeducer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderListData = undefined;

var _order = __webpack_require__(23);

var _reduxImmutablejs = __webpack_require__(14);

var _immutable = __webpack_require__(15);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandList = exports.getListSupplier = exports.getShopCategory = exports.getShopInfo = undefined;

var _shop = __webpack_require__(24);

var _reduxImmutablejs = __webpack_require__(14);

var _immutable = __webpack_require__(15);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shopListData = undefined;

var _shopList = __webpack_require__(25);

var _reduxImmutablejs = __webpack_require__(14);

var _immutable = __webpack_require__(15);

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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ORDER_LIST = exports.ORDER_LIST = 'ORDER_LIST'; // 订单列表

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// 商品管理

var SHOP_LIST_TOTAL = exports.SHOP_LIST_TOTAL = 'SHOP_LIST_TOTAL'; // 商品列表

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTgyMTY5ZWFlOTBmYjc3ZTBhZmMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmVuZG9yc1wiIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcnMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JzIiwid2VicGFjazovLy8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9ycyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXBvbHlmaWxsL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9ycyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9ycyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9ub3RpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9ycyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9ycyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LWltbXV0YWJsZWpzL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9ycyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2ltbXV0YWJsZS9kaXN0L2ltbXV0YWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9ycyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jZXJ0aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2VkaXRTaG9wLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL29yZGVyLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvc2hvcExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2VkaXRTaG9wLmpzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy9vcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvc2hvcC5qcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvc2hvcExpc3QuanMiXSwibmFtZXMiOlsic3RvcmUiLCJhcHBIaXN0b3J5IiwicXVlcnlLZXkiLCJoaXN0b3J5IiwiUm9vdCIsInByb3BzIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJOb3RpY2VNYWluIiwiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJmb29kU3RhdHVzIiwicHVubGljYXRpb25TdGF0dXMiLCJwaG9uZVN0YXR1cyIsImVycm9yQ29kZSIsImVycm9yTXNnIiwic3VjY2VzcyIsInJlc3VsdCIsImF1dGhTdGF0dXMiLCJhdXRoQ29tbWVudCIsInNob3BfaW5pdGlhbFN0YXRlIiwiYWdyaWN1bHR1cmUiLCJpbmJ1bGsiLCJzdGF0ZSIsImFjdGlvbiIsImpzb24iLCJ0eXBlIiwiT2JqZWN0IiwiYXNzaWduIiwiZWRpdFNob3dTa3UiLCJkYXRhIiwiZWRpdFNob3dTa3VUYWJsZSIsImluaXRJbWFnZSIsImltYWdlVXJsIiwiZ29vZHNJbWdVcmxzIiwiZWRpdFNob3dJbWFnZXMiLCJpbml0SW5mbyIsImNhdGVnb3J5SWQiLCJjb21taXNzaW9uIiwiZ29vZHNOYW1lIiwicHJpY2UiLCJkZXRhaWwiLCJicmFuZElkIiwiZ29vZHNTdG9jayIsInN0YXR1cyIsImlzUmVjb21tZW5kIiwiZnJlZURlbGl2ZXJ5IiwiZnJlaWdodFRlbXBsYXRlSWQiLCJ3ZWlnaHQiLCJnb29kc1R5cGUiLCJtb25leVR5cGUiLCJ0YWciLCJzaGFyZUZsYWciLCJzaGFyZUNvbW1pc2lvbiIsInN1cHBsaWVyQ29kZSIsInN1cHBsaWVyTmFtZSIsImVkaXRTaG93SW5mbyIsImVkaXRTaG9wIiwic2hvcCIsInNob3BMaXN0Iiwib3JkZXIiLCJyb290RGVkdWNlciIsInJvdXRpbmciLCJpbml0T3JkZXJMaXN0IiwicGFnZVNpemUiLCJjdXJyZW50UGFnZSIsInRvdGFsQ291bnQiLCJhbGxDaGVjayIsImNoZWNrSWRzIiwib3JkZXJMaXN0RGF0YSIsImluaXRTaG9wSW5mbyIsImdldFNob3BJbmZvIiwiZ2V0U2hvcENhdGVnb3J5IiwiZ2V0TGlzdFN1cHBsaWVyIiwiQnJhbmRMaXN0IiwiaW5pdFNob3BMaXN0Iiwic2hvcExpc3REYXRhIiwiRURJVF9TSE9XX0lNQUdFUyIsIkVESVRfU0hPV19TS1UiLCJFRElUX1NIT1dfVEFCTEUiLCJFRElUX1NIT1dfSU5GTyIsIkVESVRfU0hPV19DTEVBUiIsIk9SREVSX0xJU1QiLCJHRVRfU0hPUF9JTkZPIiwiR0VUX1NIT1BfQ0FU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T0EsT0FBT00sSUFBZCxDQUFQO0FBQ0QsQ0FIc0IsRUFBbEIsQzs7Ozs7Ozs7Ozs7Ozs7QUM5Q1A7O0FBR0E7O0FBQ0E7Ozs7OztrTkFMQTs7O0FBT0E7QUFDQSxJQUFNNkMsZUFBZSx1QkFBTztBQUMxQlgsWUFBUyxFQURpQixFQUNkO0FBQ1pDLGVBQWMsQ0FGWSxFQUVWO0FBQ2hCQyxjQUFhLENBSGEsRUFHVjtBQUNoQkMsWUFBVSxLQUpnQixFQUlUO0FBQ2pCckMsUUFBSyxFQUxxQixFQUtqQjtBQUNUc0MsWUFBVyxFQU5lLENBTVY7QUFOVSxDQUFQLENBQXJCO0FBUU8sSUFBTVEsc0NBQWUscUNBQWNELFlBQWQsaURBQ1AsVUFBQ3BELEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNwQyxTQUFPLHVCQUFPQSxPQUFPTSxJQUFkLENBQVA7QUFDRCxDQUh5QixFQUFyQixDOzs7Ozs7Ozs7Ozs7O0FDZlA7O0FBRU8sSUFBTStDLDhDQUFtQixrQkFBekIsQyxDQUE0QztBQUM1QyxJQUFNQyx3Q0FBZ0IsZUFBdEIsQyxDQUFzQztBQUN0QyxJQUFNQyw0Q0FBa0IsaUJBQXhCLEMsQ0FBMEM7QUFDMUMsSUFBTUMsMENBQWlCLGdCQUF2QixDLENBQXdDO0FBQ3hDLElBQU1DLDRDQUFrQixpQkFBeEIsQyxDQUEwQyxXOzs7Ozs7Ozs7Ozs7QUNQMUMsSUFBTUMsa0NBQWEsWUFBbkIsQyxDQUFnQyxPOzs7Ozs7Ozs7Ozs7QUNBaEMsSUFBTUMsd0NBQWdCLGVBQXRCLEMsQ0FBc0M7QUFDdEMsSUFBTUMsZ0RBQW9CLG1CQUExQixDLENBQThDO0FBQzlDLElBQU1DLHdDQUFnQixlQUF0QixDLENBQXNDO0FBQ3RDLElBQU1DLGtDQUFhLFlBQW5CLEMsQ0FBZ0MsSzs7Ozs7Ozs7Ozs7OztBQ0Z2Qzs7QUFFTyxJQUFNQyw0Q0FBa0IsaUJBQXhCLEMsQ0FBMEMsTyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImpzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk4MjE2OWVhZTkwZmI3N2UwYWZjIiwibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3JzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmVuZG9yc1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg2NTYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCBOb3RpY2VNYWluIGZyb20gJy4vY29udGFpbmVycy9ub3RpY2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgICA8Um91dGUgcGF0aD0nLyonIGNvbXBvbmVudD17Tm90aWNlTWFpbn0+PC9Sb3V0ZT5cclxuKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JvdXRlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDY1MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXBvbHlmaWxsL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg2NTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg2NTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcnNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNjU1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcclxuaW1wb3J0IFJlYWN0LHtDb21wb25lbnQsUHJvcFR5cGVzfSAgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXJIaXN0b3J5LCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHsgc3luY0hpc3RvcnlXaXRoU3RvcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNyZWF0ZUhhc2hIaXN0b3J5ICxjcmVhdGVIaXN0b3J5fSBmcm9tICdoaXN0b3J5J1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSdcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcydcclxuXHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKClcclxuY29uc3QgYXBwSGlzdG9yeSA9IHVzZVJvdXRlckhpc3RvcnkoY3JlYXRlSGFzaEhpc3RvcnkpKHsgcXVlcnlLZXk6IGZhbHNlIH0pXHJcbmNvbnN0IGhpc3RvcnkgPSBzeW5jSGlzdG9yeVdpdGhTdG9yZShhcHBIaXN0b3J5LCBzdG9yZSlcclxuLy8gY29uc3QgaGlzdG9yeSA9IHVzZVJvdXRlckhpc3RvcnkoY3JlYXRlSGlzdG9yeSkoeyBiYXNlbmFtZTogJy8nIH0pXHJcblxyXG5jbGFzcyBSb290IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgc3RvcmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG5cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzdG9yZSwgaGlzdG9yeSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fSByb3V0ZXM9e3JvdXRlc30gLz5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbnJlbmRlcihcclxuICA8Um9vdCBzdG9yZT17c3RvcmV9IGhpc3Rvcnk9e2hpc3Rvcnl9IC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfcm9vdCcpXHJcbilcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNsYXNzIE5vdGljZU1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybig8ZGl2PmhlbGxvIHdvcmxkPC9kaXY+KVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvbm90aWNlL2luZGV4LmpzIiwiXHJcbmltcG9ydCB7IFxyXG4gICAgY3JlYXRlU3RvcmUsIFxyXG4gICAgYXBwbHlNaWRkbGV3YXJlICxcclxuICAgIGNvbXBvc2UsICBcclxuICB9IGZyb20gJ3JlZHV4J1xyXG4gIGltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcclxuICBpbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKXtcclxuICAgIC8vIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsaW5pdGlhbFN0YXRlKTtcclxuICAgIC8vIHJldHVybiBzdG9yZTtcclxuICAgIC8vIGFjdGlvbnMg5YaF5byC5q2l6L+U5ZueXHJcbiAgICByZXR1cm4gY29tcG9zZShhcHBseU1pZGRsZXdhcmUodGh1bmspKShjcmVhdGVTdG9yZSkocm9vdFJlZHVjZXIsaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcbiAgLy8gZXhwb3J0IGRlZmF1bHQgY29tcG9zZShhcHBseU1pZGRsZXdhcmUodGh1bmspKShjcmVhdGVTdG9yZSkocm9vdFJlZHVjZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMzEzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcnNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDY1OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNjU3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtaW1tdXRhYmxlanMvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg3NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2ltbXV0YWJsZS9kaXN0L2ltbXV0YWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtHRVRfRk9PRF9TVEFUVVMsR0VUX1BVQkxJQ0FUSU9OX1NUQVRVUyxHRVRfUEhPTkVfU1RBVFVTfSBmcm9tICcuLi9hY3Rpb25zL2NlcnRpZmljYXRpb24nXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9e1xyXG5cdGVycm9yQ29kZTotMSxcclxuICBlcnJvck1zZzogXCLlpLHotKVcIixcclxuICBzdWNjZXNzOiBmYWxzZSxcclxuICByZXN1bHQ6e1xyXG4gIFx0YXV0aFN0YXR1czotMixcclxuICBcdGF1dGhDb21tZW50OlwiXCJcclxuICB9XHJcbn07XHJcbmNvbnN0IHNob3BfaW5pdGlhbFN0YXRlID17XHJcblx0ZXJyb3JDb2RlOi0xLFxyXG4gIGVycm9yTXNnOiBcIuWksei0pVwiLFxyXG4gIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gIHJlc3VsdDp7XHJcbiAgXHRhZ3JpY3VsdHVyZTp7XHJcbiAgXHRcdGF1dGhTdGF0dXM6LTIsXHJcbiAgXHRcdGF1dGhDb21tZW50OlwiXCJcclxuICBcdH0sXHJcbiAgXHRpbmJ1bGs6e1xyXG4gIFx0XHRhdXRoU3RhdHVzOi0yLFxyXG4gIFx0XHRhdXRoQ29tbWVudDpcIlwiXHJcbiAgXHR9XHJcbiAgfVxyXG59O1xyXG4vL+iOt+WPlumjn+WTgee7j+iQpeiupOivgeWIneWni+eKtuaAgVxyXG5leHBvcnQgZnVuY3Rpb24gZm9vZFN0YXR1cyhzdGF0ZSA9IHNob3BfaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHQgIGNvbnN0IGpzb24gPSBhY3Rpb24uanNvbjtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEdFVF9GT09EX1NUQVRVUzpcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN0YXRlLGpzb24pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuLy/ojrflj5blh7rniYjnianorqTor4HliJ3lp4vnirbmgIFcclxuZXhwb3J0IGZ1bmN0aW9uIHB1bmxpY2F0aW9uU3RhdHVzKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHQgIGNvbnN0IGpzb24gPSBhY3Rpb24uanNvbjtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEdFVF9QVUJMSUNBVElPTl9TVEFUVVM6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN0YXRlLGpzb24pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuLy/ojrflj5bnlLXor53ljaHorqTor4HliJ3lp4vnirbmgIFcclxuZXhwb3J0IGZ1bmN0aW9uIHBob25lU3RhdHVzKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHQgIGNvbnN0IGpzb24gPSBhY3Rpb24uanNvbjtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEdFVF9QSE9ORV9TVEFUVVM6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN0YXRlLGpzb24pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9jZXJ0aWZpY2F0aW9uLmpzIiwiLy8g57yW6L6R5ZWG5ZOBXHJcbmltcG9ydCB7XHJcbiAgRURJVF9TSE9XX0lNQUdFUyxcclxuICBFRElUX1NIT1dfU0tVLFxyXG4gIEVESVRfU0hPV19JTkZPLFxyXG4gIEVESVRfU0hPV19UQUJMRSxcclxuICBFRElUX1NIT1dfQ0xFQVJcclxufSBmcm9tICcuLi9jb25zdGFudHMvZWRpdFNob3AnXHJcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdyZWR1eC1pbW11dGFibGVqcydcclxuaW1wb3J0IGltbXV0YWJsZSwgeyBmcm9tSlMgfSBmcm9tICdpbW11dGFibGUnXHJcblxyXG4vLyDllYblk4HlsZ7mgKdcclxuZXhwb3J0IGNvbnN0IGVkaXRTaG93U2t1ID0gY3JlYXRlUmVkdWNlcihmcm9tSlMoe30pLCB7XHJcbiAgW0VESVRfU0hPV19TS1VdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIGZyb21KUyhhY3Rpb24uZGF0YSlcclxuICB9LFxyXG4gIFtFRElUX1NIT1dfQ0xFQVJdOihzdGF0ZSxhY3Rpb24pPT57XHJcbiAgICByZXR1cm4gZnJvbUpTKGFjdGlvbi5kYXRhKVxyXG4gIH1cclxufSlcclxuXHJcbi8vIOWVhuWTgXNrdeWIl+ihqFxyXG5leHBvcnQgY29uc3QgZWRpdFNob3dTa3VUYWJsZSA9IGNyZWF0ZVJlZHVjZXIoZnJvbUpTKFtdKSx7XHJcbiAgW0VESVRfU0hPV19UQUJMRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gZnJvbUpTKGFjdGlvbi5kYXRhKVxyXG4gIH0sXHJcbiAgW0VESVRfU0hPV19DTEVBUl06KHN0YXRlLGFjdGlvbik9PntcclxuICAgIHJldHVybiBmcm9tSlMoW10pXHJcbiAgfVxyXG59KVxyXG5cclxuLy8g5ZWG5ZOB5Zu+54mHXHJcbmNvbnN0IGluaXRJbWFnZSA9IGZyb21KUyh7XHJcbiAgaW1hZ2VVcmw6JycsLy/llYblk4HkuLvlm75cclxuICBnb29kc0ltZ1VybHM6W1xyXG4gIF0gLy8gIOWVhuWTgeWbvueJh1xyXG59KVxyXG5leHBvcnQgY29uc3QgZWRpdFNob3dJbWFnZXMgPSBjcmVhdGVSZWR1Y2VyKGluaXRJbWFnZSwge1xyXG4gIFtFRElUX1NIT1dfSU1BR0VTXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBmcm9tSlMoYWN0aW9uLmRhdGEpXHJcbiAgfSxcclxuICBbRURJVF9TSE9XX0NMRUFSXTooc3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgcmV0dXJuIGluaXRJbWFnZVxyXG4gIH1cclxufSlcclxuXHJcblxyXG4vLyDllYblk4Hln7rmnKzkv6Hmga9cclxuY29uc3QgaW5pdEluZm8gPSBmcm9tSlMoe1xyXG4gIGNhdGVnb3J5SWQ6JycsIC8vIOWVhuWTgeWIhuexu1xyXG4gIGNvbW1pc3Npb24gOjAgLCAvL+S9o+mHkVxyXG4gIGdvb2RzTmFtZTonJywgLy/llYblk4HlkI3np7BcclxuICBwcmljZTowLCAvL+S7t+agvFxyXG4gIGRldGFpbDpbXSwgLy8gIOWVhuWTgeaPj+i/sFxyXG4gIGJyYW5kSWQgOiAnMCcgLCAvL+WVhuWTgeWTgeexu++8jOi2hee6p+WQjuWPsOe7tOaKpFxyXG4gIC8vIGJyYW5kTmFtZSA6ICcnLC8v5ZOB57G7XHJcbiAgZ29vZHNTdG9jayA6IDAsIC8vIOWVhuWTgeW6k+WtmFxyXG4gIHN0YXR1czoxLCAvL+WuoeaguCzkuIrmnrYgMOS4uuS4iuaetu+8jDHkuLrkuIvmnrZcclxuICBpc1JlY29tbWVuZCA6IDAsICAvLyDlupfplb/mjqjojZDmoIfor4Yg5piv5ZCm5o6o6I2Q77yMMOS4uuS4jeaOqOiNkO+8jDHkuLrmjqjojZBcclxuICBmcmVlRGVsaXZlcnkgOjAsICAvL+aYr+WQpuWMhemCrigw5Luj6KGo5LiN5YyF6YKuLDHku6PooajljIXpgq4pXHJcbiAgZnJlaWdodFRlbXBsYXRlSWQgOiAnJyAsIC8v5YWz6IGU6L+Q6LS55qih5p2/SURcclxuICB3ZWlnaHQgOiAwLCAvLyDllYblk4Hph43ph48s5Lula2fkuLrljZXkvY0sXHJcbiAgZ29vZHNUeXBlOiAxLCAvLyAwOuiHquiQpTsxOue9kee6ouWVhuWTgTsyOuS4uuesrOS4ieaWueW5s+WPsFxyXG4gIG1vbmV5VHlwZTowLFxyXG4gIHRhZzowLC8v5ZWG5ZOB5qCH562+XHJcbiAgc2hhcmVGbGFnOjAsLy8g5piv5ZCm5YiG5Lqr5b6X5L2j6YeRIHNoYXJlRmxhZz0w77yM5rKh5pyJ5YiG5Lqr5L2j6YeR77yMc2hhcmVGbGFnPTHmnInliIbkuqvkvaPph5FcclxuICBzaGFyZUNvbW1pc2lvbiA6MCwgLy8g5YiG5Lqr5L2j6YeR6YeR6aKdIHNoYXJlRmxhZz0w5piv6ZqQ6JePXHJcbiAgc3VwcGxpZXJDb2RlOicnLC8v5L6b5bqU5ZWGY29kZVxyXG4gIHN1cHBsaWVyTmFtZTonJywvL+S+m+W6lOWVhuWQjeensFxyXG4gIGJyYW5kSWQ6JycsLy/lk4HniYxJRFxyXG4gIGJyYW5kTmFtZTonJywvL+WTgeeJjOWQjeensFxyXG5cclxuICAvLyBpc0NhbkFnZW50OjEsIC8vIDA65Y+v5Lul5Luj55CGLDE65bey57uP5Luj55CG77yM5LiN6IO95L+u5pS5XHJcbiAgLy8gc0FnZW5077yMMS3lt7LliIbplIDvvIwwLeacquWIhumUgFxyXG59KVxyXG5leHBvcnQgY29uc3QgZWRpdFNob3dJbmZvID0gY3JlYXRlUmVkdWNlcihpbml0SW5mbywge1xyXG4gIFtFRElUX1NIT1dfSU5GT106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gZnJvbUpTKGFjdGlvbi5kYXRhKVxyXG4gIH0sXHJcbiAgW0VESVRfU0hPV19DTEVBUl06KHN0YXRlLGFjdGlvbik9PntcclxuICAgIHJldHVybiBpbml0SW5mb1xyXG4gIH1cclxufSlcclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9lZGl0U2hvcC5qcyIsIlxyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0ICogYXMgZWRpdFNob3AgZnJvbSAnLi9lZGl0U2hvcCdcclxuaW1wb3J0ICogYXMgc2hvcCBmcm9tICcuL3Nob3AnXHJcbmltcG9ydCAqIGFzIHNob3BMaXN0IGZyb20gJy4vc2hvcExpc3QnXHJcbmltcG9ydCAqIGFzIG9yZGVyIGZyb20gJy4vb3JkZXInXHJcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgYXMgcm91dGluZyB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcclxuaW1wb3J0IHtmb29kU3RhdHVzLHB1bmxpY2F0aW9uU3RhdHVzLHBob25lU3RhdHVzfSBmcm9tICcuL2NlcnRpZmljYXRpb24nXHJcblxyXG5jb25zdCByb290RGVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgLi4uZWRpdFNob3AsXHJcbiAgLi4uc2hvcCxcclxuICAuLi5zaG9wTGlzdCxcclxuICAuLi5vcmRlcixcclxuICBmb29kU3RhdHVzLFxyXG4gIHB1bmxpY2F0aW9uU3RhdHVzLFxyXG4gIHBob25lU3RhdHVzLFxyXG4gIHJvdXRpbmdcclxuICBcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgcm9vdERlZHVjZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5kZXguanMiLCIvLyDnvJbovpHllYblk4FcclxuaW1wb3J0IHtcclxuICBPUkRFUl9MSVNUXHJcbn0gZnJvbSAnLi4vY29uc3RhbnRzL29yZGVyJ1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtaW1tdXRhYmxlanMnXHJcbmltcG9ydCBpbW11dGFibGUsIHsgZnJvbUpTIH0gZnJvbSAnaW1tdXRhYmxlJ1xyXG5cclxuLy8g6K6i5Y2V5YiX6KGoXHJcbmNvbnN0IGluaXRPcmRlckxpc3QgPSBmcm9tSlMoe1xyXG4gIHBhZ2VTaXplOjIwLC8vIOW9k+WJjeWIhumhteadoeaVsFxyXG4gIGN1cnJlbnRQYWdlIDogMSwvLyDlvZPliY3pobXnoIFcclxuICB0b3RhbENvdW50IDogMCwgLy8g5oC76K6i5Y2V6K6w5b2V5pWwXHJcbiAgYWxsQ2hlY2sgOmZhbHNlLCAvLyDlhajpgIljaGVja2JveO+8jOm7mOiupOS4uuS4jeWFqOmAiVxyXG4gIGRhdGE6W10sIC8vIOiuouWNleWIl+ihqFxyXG4gIGNoZWNrSWRzIDogW10gLCAvLyDpgInkuK3orqLljZXorrDlvZXnmoRpZOaVsOe7hFxyXG59KVxyXG5leHBvcnQgY29uc3Qgb3JkZXJMaXN0RGF0YSA9IGNyZWF0ZVJlZHVjZXIoaW5pdE9yZGVyTGlzdCwge1xyXG4gIFtPUkRFUl9MSVNUXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBmcm9tSlMoYWN0aW9uLmRhdGEpXHJcbiAgfVxyXG59KVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvb3JkZXIuanMiLCJpbXBvcnQge1xyXG4gIEdFVF9TSE9QX0lORk8sXHJcbiAgR0VUX1NIT1BfQ0FURUdPUlksXHJcbiAgTElTVF9TVVBQTElFUixcclxuICBMSVNUX0JSQU5ELFxyXG59IGZyb20gJy4uL2NvbnN0YW50cy9zaG9wJ1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtaW1tdXRhYmxlanMnXHJcbmltcG9ydCBpbW11dGFibGUsIHsgZnJvbUpTIH0gZnJvbSAnaW1tdXRhYmxlJ1xyXG5cclxuLy8g5bqX6ZO65L+h5oGvXHJcbmNvbnN0IGluaXRTaG9wSW5mbyA9IGZyb21KUyh7XHJcbiAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgXCJ1c2VySWRcIjogMCxcclxuICBcInJlZHVjdGlvbk1vZGVcIjogLTEsXHJcbiAgXCJzaG9wU3RhdHVzXCI6IDAsXHJcbiAgXCJkaXJlY3RzYWxlU3RhdHVzXCI6IDAsXHJcbiAgXCJvdGhlclNlcnZpY2VTdGF0dXNcIjogMCxcclxuICBcInNlcnZpY2VQaG9uZVwiOiBudWxsLFxyXG4gIFwiaXNDb21wYW55XCI6IDAsXHJcbiAgXCJzaG9wVHlwZVwiOiAxLFxyXG4gIFwibm90aWNlXCI6IG51bGwsXHJcbiAgXCJzaG9wSWNvblwiOiBcIlwiLFxyXG4gIFwiZGVsZXRlRmxhZ1wiOiAwLFxyXG4gIFwiYXV0b0NvbmZpcm1EYXlzXCI6IDE1LFxyXG4gIFwiaXNQcm9taXNlVHJhbnNhY3Rpb25cIjogMCxcclxuICBcImlzUHJvbWlzZVJldmVyc2VcIjogMCxcclxuICBcImlzV2VpYm9BdXRoXCI6IDAsXHJcbiAgXCJpc0hvbmVzdHlBdXRoXCI6IDAsXHJcbiAgXCJpc1BoeXNpY2FsU3RvcmVBdXRoXCI6IDFcclxufSlcclxuZXhwb3J0IGNvbnN0IGdldFNob3BJbmZvID0gY3JlYXRlUmVkdWNlcihpbml0U2hvcEluZm8sIHtcclxuICBbR0VUX1NIT1BfSU5GT106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gZnJvbUpTKGFjdGlvbi5kYXRhKVxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNvbnN0IGdldFNob3BDYXRlZ29yeSA9IGNyZWF0ZVJlZHVjZXIoZnJvbUpTKFtdKSx7XHJcbiAgW0dFVF9TSE9QX0NBVEVHT1JZXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBmcm9tSlMoYWN0aW9uLmRhdGEpXHJcbiAgfVxyXG59KSBcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMaXN0U3VwcGxpZXIgPSBjcmVhdGVSZWR1Y2VyKGZyb21KUyhbXSkse1xyXG4gIFtMSVNUX1NVUFBMSUVSXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBmcm9tSlMoYWN0aW9uLmRhdGEpXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEJyYW5kTGlzdCA9IGNyZWF0ZVJlZHVjZXIoZnJvbUpTKFtdKSx7XHJcbiAgW0xJU1RfQlJBTkRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIGZyb21KUyhhY3Rpb24uZGF0YSlcclxuICB9XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9zaG9wLmpzIiwiLy8g57yW6L6R5ZWG5ZOBXHJcbmltcG9ydCB7XHJcbiAgU0hPUF9MSVNUX1RPVEFMXHJcbn0gZnJvbSAnLi4vY29uc3RhbnRzL3Nob3BMaXN0J1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtaW1tdXRhYmxlanMnXHJcbmltcG9ydCBpbW11dGFibGUsIHsgZnJvbUpTIH0gZnJvbSAnaW1tdXRhYmxlJ1xyXG5cclxuLy8g5ZWG5ZOB5YiX6KGoXHJcbmNvbnN0IGluaXRTaG9wTGlzdCA9IGZyb21KUyh7XHJcbiAgcGFnZVNpemU6MjAsLy8g5b2T5YmN5YiG6aG15p2h5pWwXHJcbiAgY3VycmVudFBhZ2UgOiAxLC8vIOW9k+WJjemhteeggVxyXG4gIHRvdGFsQ291bnQgOiAwLCAvLyDmgLvllYblk4HorrDlvZXmlbBcclxuICBhbGxDaGVjayA6ZmFsc2UsIC8vIOWFqOmAiWNoZWNrYm9477yM6buY6K6k5Li65LiN5YWo6YCJXHJcbiAgZGF0YTpbXSwgLy8g5ZWG5ZOB5YiX6KGoXHJcbiAgY2hlY2tJZHMgOiBbXSAsIC8vIOmAieS4reWVhuWTgeiusOW9leeahGlk5pWw57uEXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBzaG9wTGlzdERhdGEgPSBjcmVhdGVSZWR1Y2VyKGluaXRTaG9wTGlzdCwge1xyXG4gIFtTSE9QX0xJU1RfVE9UQUxdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIGZyb21KUyhhY3Rpb24uZGF0YSlcclxuICB9XHJcbn0pXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9zaG9wTGlzdC5qcyIsIlxyXG4vLyDnvJbovpHllYblk4FcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUX1NIT1dfSU1BR0VTID0gJ0VESVRfU0hPV19JTUFHRVMnIC8vIOWVhuWTgeWbvueJh1xyXG5leHBvcnQgY29uc3QgRURJVF9TSE9XX1NLVSA9ICdFRElUX1NIT1dfU0tVJyAvLyDllYblk4HlsZ7mgKdcclxuZXhwb3J0IGNvbnN0IEVESVRfU0hPV19UQUJMRSA9ICdFRElUX1NIT1dfVEFCTEUnIC8vIOWVhuWTgXNrdeWIl+ihqFxyXG5leHBvcnQgY29uc3QgRURJVF9TSE9XX0lORk8gPSAnRURJVF9TSE9XX0lORk8nIC8vIOWVhuWTgeWfuuacrOS/oeaBr1xyXG5leHBvcnQgY29uc3QgRURJVF9TSE9XX0NMRUFSID0gJ0VESVRfU0hPV19DTEVBUicgLy8g5riF56m65ZWG5ZOB5Z+65pys5L+h5oGvXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnRzL2VkaXRTaG9wLmpzIiwiZXhwb3J0IGNvbnN0IE9SREVSX0xJU1QgPSAnT1JERVJfTElTVCcgLy8g6K6i5Y2V5YiX6KGoXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnRzL29yZGVyLmpzIiwiZXhwb3J0IGNvbnN0IEdFVF9TSE9QX0lORk8gPSAnR0VUX1NIT1BfSU5GTycgLy8g5bqX6ZO65L+h5oGvXHJcbmV4cG9ydCBjb25zdCBHRVRfU0hPUF9DQVRFR09SWSA9ICdHRVRfU0hPUF9DQVRFR09SWScgLy8g5bqX6ZO65ZWG5ZOB5YiG57G75YiX6KGoXHJcbmV4cG9ydCBjb25zdCBMSVNUX1NVUFBMSUVSID0gJ0xJU1RfU1VQUExJRVInIC8vIOS+m+W6lOWVhuWIl+ihqFxyXG5leHBvcnQgY29uc3QgTElTVF9CUkFORCA9ICdMSVNUX0JSQU5EJyAvLyDlk4HniYxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25zdGFudHMvc2hvcC5qcyIsIlxyXG4vLyDllYblk4HnrqHnkIZcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9QX0xJU1RfVE9UQUwgPSAnU0hPUF9MSVNUX1RPVEFMJyAvLyDllYblk4HliJfooahcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25zdGFudHMvc2hvcExpc3QuanMiXSwic291cmNlUm9vdCI6IiJ9