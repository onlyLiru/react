import React, { Component } from 'react';
import { Layout,Icon,Menu,Button } from 'antd';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const IndexHeader = (props)=> {
	return (<Header>
		<span className="topMenu">
			<a className="active" href="/">
				<img src="http://img.fancyedu.com/sys/ic/operation/1491792944269_i.png" />
			</a>
			<a href="javascript:">
				<img src="http://img.fancyedu.com/sys/ic/operation/1491053854032_me1.png" />
			</a>
			<a href="javascript:">
				<img src="http://img.fancyedu.com/sys/ic/operation/1491053866692_school1.png" />
			</a>
			<a href="javascript:">
				<img src="http://img.fancyedu.com/sys/ic/operation/1491053880294_shop1.png" />
			</a>
			<a href="javascript:">
				<img src="http://img.fancyedu.com/sys/ic/operation/1491053891740_show1.png" />
			</a>
		</span>
		<Button className="fr submitAllBtn" size="small" type="danger" ghost icon="rocket">一键发布</Button>
    </Header>);
}

export { IndexHeader }