import React, { Component } from 'react';
import { Icon } from 'antd';

export default class MainContent extends Component {
	constructor(props) {
		super(props);
		this.state={

		}
	}
	render() {
		return (<div>
			<div>
				<div className="cHead bgBlack">
					<Icon type="edit" /> 内容编辑
				</div>
				<div className="mainContent pd10">
					adsf
				</div>
			</div>
		</div>);
	}
}