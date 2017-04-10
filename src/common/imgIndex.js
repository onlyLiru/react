import React, { Component } from 'react';

export default class ImgIndex extends Component {
	constructor(props) {
		super(props);
		this.state={

		}
	}
	render() {
		return (<div>
			<div className="cHead bgYellow">
				App 前台预览
			</div>
			<div className="imgIndex">
				<img src="http://img.fancyedu.com/sys/ic/operation/1491792965248_a.png" />
			</div>
		</div>);
	}
}