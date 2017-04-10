import React, { Component } from 'react';
import { Layout,Icon,Menu } from 'antd';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const IndexHeader = (props)=> {
	return (<Header>
		<span className="topMenu">
			<a className="active" href="javascript:">
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
    </Header>);
}

export { IndexHeader }