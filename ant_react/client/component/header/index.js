import React,{Component,PropTypes} from 'react'
import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/shop'
import utils from '../../utils'

class HeaderTop extends Component{
    render() {
        return(
            <div className="header-t">
                <div className="banner">
                <div className="banner-list">
                    <div className="for_gaq">土豆泥直播</div>
                    <div className="for_gaq">土豆泥直播</div>
                    <div className="for_gaq">土豆泥直播</div>
                    <div className="for_gaq">土豆泥直播</div>
                    <div className="for_gaq">土豆泥直播</div>
                    <div className="for_gaq">土豆泥直播</div>
                </div>
                </div>
            </div>
        )
    }
}

class HeaderInfo extends Component{
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor (props) {
        super(props);
        this.state = {
            show: false
        }
    }
    render() {
        let { show } = this.state
        let { shopInfo, needLogin, actions} = this.props

        return(
            <div className="header-b-r">
                <div className="wealth-tips">
                    <span id="hd_u_name" onClick={() => {}} style={{"display":"inline-block"}}>
                        {shopInfo.name}
                    </span>
                    {
                        show ? <div className="tips-list"> 
                        <div className="tips-t"> 
                            <a href="#">
                            订单消息：<i className="order-infor">0</i>
                            </a> 
                            <a className="hd_enter_im" href="###">
                            聊天消息：<i className="customer-infor">1</i>
                            </a> 
                        </div> 
                        <div className="tips-b"> 
                            <Link to="/account/main" href="#">
                            个人资料
                            </Link> 
                        </div> 
                        </div>:null
                    }
                </div>
                <a className="quit" onClick={() => {
                        utils.post(utils.url.logout).then(res => {
                            utils.storage.removeUserInfo()
                            actions.getShopInfo(actions,{ clear: true })
                            this.context.router.replace('/Login')
                        })
                    }}>退出</a>
            </div>
        )
    }
}

class Header extends Component{
    static defaultProps = {
        needLogin: true
    }
    static PropTypes = {
        needLogin: PropTypes.bool
    }
    componentDidMount() {
        let { actions, needLogin } = this.props
        if (needLogin) {
            actions.getShopInfo(actions, {readCache: true})
        }
    }
    render() {
        let { shopInfo, needLogin, actions } = this.props
        return (
            <div className="wd-header">
                <div className="header-b">
                <div className="header-b-c">
                    <div className="header-b-l"> 
                    <a><img style={{"marginTop":"4px"}} src="./assets/image/logo.png" /> </a> 
                    </div>
                    {needLogin ? <HeaderInfo actions={actions} shopInfo={shopInfo} needLogin={needLogin} />:null}
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        shopInfo:state.getShopInfo.toJS(),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)