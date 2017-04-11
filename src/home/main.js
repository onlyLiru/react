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

					<div className="imgList">
						<div className="btns">
							<Button type="primary" className="edit">编 辑</Button>
						    <Button className="delete">删 除</Button>
						</div>
						<Row>
							<Col span={12}>
								<div className="imgMes">
									<p>名称: banner.jpg</p>
									<p>日期: 2017-12-20</p>
								</div>
							</Col>
							<Col span={12}>
								<img 
									className="autoImg"
									src="http://img.fancyedu.com/sys/ic/operation/1489978058602_level1.jpg" 
								/>
							</Col>
						</Row>
					</div>
					<div className="imgList">
						<div className="btns">
							<Button type="primary" className="edit">编 辑</Button>
						    <Button className="delete">删 除</Button>
						</div>
						<Row>
							<Col span={12}>
								<div className="imgMes">
									<p>名称: banner.jpg</p>
									<p>日期: 2017-12-20</p>
								</div>
							</Col>
							<Col span={12}>
								<img 
									className="autoImg"
									src="http://img.fancyedu.com/sys/ic/operation/1489978058602_level1.jpg" 
								/>
							</Col>
						</Row>
					</div>
					<div className="imgList">
						<div className="btns">
							<Button type="primary" className="edit">编 辑</Button>
						    <Button className="delete">删 除</Button>
						</div>
						<Row>
							<Col span={12}>
								<div className="imgMes">
									<p>名称: banner.jpg</p>
									<p>日期: 2017-12-20</p>
								</div>
							</Col>
							<Col span={12}>
								<img 
									className="autoImg"
									src="http://img.fancyedu.com/sys/ic/operation/1489978058602_level1.jpg" 
								/>
							</Col>
						</Row>
					</div>

				</div>

			</div>
		</div>);
	}
}