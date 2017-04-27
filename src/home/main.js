import React, { Component } from 'react';
import { Icon,Row,Col,Button,Popconfirm, message } from 'antd';
import { EditForm } from './form.js';
import './index.less';

export default class IndexMain extends Component {
	constructor(props) {
		super(props);
		this._edit=this._edit.bind(this);
		this._delete=this._delete.bind(this);
		this._cancel=this._cancel.bind(this);
		this._validator=this._validator.bind(this);
		this._saveFormRef=this._saveFormRef.bind(this);
		this.state={
			saveing: false,
		    visible: false,
		    imageUrl:'http://img.fancyedu.com/mmc/picture/20170113/1484295121682_Fnow2-QQPh_VpIGxT9fCrEgjiLge.jpg'
		}
	}
	render() {
		return (<div>
			<div>

				<div className="mainContent pd10">

					<div className="clearfix listTop">
						<Button className="fr" type="primary" icon="plus-circle-o">新增</Button>
					</div>

					<div className="imgList">
						<div className="btns">
							<Button
								onClick={ this._edit }
								type="primary"
								className="edit">编 辑
							</Button>
							<Popconfirm 
								title="确定要删除?" 
								onConfirm={ this._delete } 
								okText="确定"
								cancelText="取消">
								    <Button
								    	className="delete">删 除
								    </Button>
							</Popconfirm>
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

				<EditForm
					ref={this._saveFormRef}
					saveing={this.state.saveing}
					visible={this.state.visible}
					onCancel={this._cancel}
					onSave={this._validator}
					imageUrl={this.state.imageUrl}
				/>

			</div>
		</div>);
	}
	componentDidMount() {

	}
	_edit() {
		this.setState({
	      visible: true,
	    });
	}
	_delete() {
		message.success('已删除');
	}
	_saveFormRef(form){
	  this.form = form;
	}
	_validator() {
		const form = this.form;
		
		form.validateFields((err, values) => {

			this.setState({ saveing: true });

			if (err) {
				console.log(err);
				this.setState({ saveing: false });
				return;
			}

			console.log('Received values of form: ', values);
			
		    setTimeout(() => {
				form.resetFields();
				this.setState({ saveing: false, visible: false });
				message.success('编辑成功');
		    }, 5000);
		});
		
	}
	_cancel() {
	    this.setState({ visible: false });
	}
}