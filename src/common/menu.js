import React, { Component } from 'react';
import { Icon,Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const handleClick = (e) => {
	    console.log('click ', e);
	    this.setState({
	      current: e.key,
	    });
	}

export default class MainMenu extends Component {
	constructor (props) {
		super(props);
		this.state={
			current: 'mail',
		}
	}
	render() {
		return(<div>
			<div>
				<div className="cHead bgBlue">
					<Icon type="bars" /> 内容列表
				</div>
				<div className="mainMenu">
				<Menu
					onClick={this.handleClick}
					style={{ width: 240 }}
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
				>
					<SubMenu key="sub1" title={<span><Icon type="mail" /><span>广告栏</span></span>}>
						<MenuItemGroup key="g1" title="图片">
							<Menu.Item key="1">banner.png</Menu.Item>
							<Menu.Item key="2">banner2.jpg</Menu.Item>
						</MenuItemGroup>
					</SubMenu>
					<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>内容推荐</span></span>}>
						<MenuItemGroup key="g1" title="图片">
							<Menu.Item key="7">video7.mp4</Menu.Item>
							<Menu.Item key="8">video8.mp4</Menu.Item>
						</MenuItemGroup>
						<MenuItemGroup key="g2" title="视频">
							<Menu.Item key="1">video7.mp4</Menu.Item>
							<Menu.Item key="2">video8.mp4</Menu.Item>
						</MenuItemGroup>
						<MenuItemGroup key="g3" title="课程">
							<Menu.Item key="4">video7.mp4</Menu.Item>
							<Menu.Item key="5">video8.mp4</Menu.Item>
						</MenuItemGroup>
					</SubMenu>
				</Menu>
				</div>
			</div>
		</div>);
	}
	
}