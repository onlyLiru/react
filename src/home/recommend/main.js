import React, { Component } from 'react';
import { Icon,Row,Col,Button } from 'antd';

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

					<Row type="flex" gutter={16} className="mediaList" >
						<Col span={6} className="leftImg">
							<img className="autoImg" src="http://img.fancyedu.com/sys/ic/operation/1476423541555_english_17.jpg" />
						</Col>
						<Col span={18}>
							<div className="rightMes">
								<p>名称: video_01</p>
								<p>日期: 2014-12-23</p>
								<p>浏览量: 32223</p>
								<p>点赞数: 3223</p>
							</div>
							<div className="btns">
								<Button type="primary" className="mr10 edit">编 辑</Button>
						    	<Button className="delete">删 除</Button>
						    </div>
						</Col>
					</Row>
					<Row type="flex" gutter={16} className="mediaList" >
						<Col span={6} className="leftImg">
							<img className="autoImg" src="http://img.fancyedu.com/sys/ic/operation/1476423541555_english_17.jpg" />
						</Col>
						<Col span={18}>
							<div className="rightMes">
								<p>名称: video_01</p>
								<p>日期: 2014-12-23</p>
								<p>浏览量: 32223</p>
								<p>点赞数: 3223</p>
							</div>
							<div className="btns">
								<Button type="primary" className="mr10 edit">编 辑</Button>
						    	<Button className="delete">删 除</Button>
						    </div>
						</Col>
					</Row>

				</div>

			</div>
		</div>);
	}
}