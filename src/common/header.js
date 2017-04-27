import React, { Component } from 'react';
import { Layout,Icon,Menu,Button } from 'antd';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const IndexHeader = (props)=> {
	return (<Header>
		<span className="topMenu">
			<a href="/">
				{
					props.cur == 'home' ?
						<img src="http://img.fancyedu.com/sys/ic/operation/1491792944269_i.png" />
					:
						<img src="http://img.fancyedu.com/sys/ic/operation/1491792951352_i2.png" />
				}
			</a>
			<a href="javascript:"  href="/show">
				{
					props.cur == 'show' ?
						<img src="http://img.fancyedu.com/sys/ic/operation/1491053885980_show.png" />
					:
						<img src="http://img.fancyedu.com/sys/ic/operation/1491053891740_show1.png" />
				}
				
			</a>
			<a href="javascript:"  href="/shop">
				{
					props.cur == 'shop' ?
						<img src="http://img.fancyedu.com/sys/ic/operation/1491053872891_shop.png" />
					:
						<img src="http://img.fancyedu.com/sys/ic/operation/1491053880294_shop1.png" />
				}
				
			</a>
			<a href="javascript:"  href="/school">
				{
					props.cur == 'school' ?
						<img src="http://img.fancyedu.com/sys/ic/operation/1491053859239_school.png" />
					:
						<img src="http://img.fancyedu.com/sys/ic/operation/1491053866692_school1.png" />
				}
				
			</a>
			<a href="javascript:"  href="/my">
				{
					props.cur == 'my' ?
						<img src="http://img.fancyedu.com/sys/ic/operation/1491053848654_me.png" />
					:
						<img src="http://img.fancyedu.com/sys/ic/operation/1491053854032_me1.png" />
				}
				
			</a>
		</span>
		<Button className="fr submitAllBtn" size="small" type="danger" ghost icon="rocket">一键发布</Button>
    </Header>);
}

export { IndexHeader }