
import React, { Component, PropTypes } from 'react'
import Hello from './hello'
import Header from '../../component/header'

class NoticeMain extends Component {
	static defaultProps = {
		leftHide: false
	}
	static propsType = {
		leftHide:PropTypes.bool, // 是否隐藏左侧菜单, 默认不隐藏
	}
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return(
			<div>
				<Header {...this.props} /> 
			</div>
		);
	}
}
export default NoticeMain