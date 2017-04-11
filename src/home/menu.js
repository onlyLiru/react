import React, { Component } from 'react';
import { Icon,Tree } from 'antd';

const TreeNode = Tree.TreeNode;

export default class MainMenu extends Component {
	constructor (props) {
		super(props);
		this.state={
			
		}
	}
	render() {
		return(<div>
			<div>
				<div className="cHead bgBlue">
					<Icon type="bars" /> 内容列表
				</div>
				<div className="mainMenu" id="mainMenu">
					<Tree
			        showIcon
			        showLine
			        defaultExpandedKeys={['0-0-0']}
			        defaultSelectedKeys={['0-0']}
			        onSelect={this.onSelect.bind(this)}
			      >
			        <TreeNode title="广告栏" key="0-0">
			          <TreeNode title="图片" key="0-0-0">
			            <TreeNode title="leaf.jpg" key="0-0-0-0" />
			            <TreeNode title="banner.jpg" key="0-0-0-1" />
			          </TreeNode>
			        </TreeNode>
			        <TreeNode title="内容推荐" key="0-1">
			          <TreeNode title="视频" key="0-0-1">
			            <TreeNode title="leaf" key="0-0-0-1-" />
			            <TreeNode title="leaf" key="0-0-0-2" />
			          </TreeNode>
			          <TreeNode title="商品" key="0-0-2">
			            <TreeNode title="leaf" key="0-0-1-1-0" />
			            <TreeNode title="leaf" key="0-0-1-1" />
			          </TreeNode>
			          <TreeNode title="课程" key="0-0-3" >
			          	<TreeNode title="leaf" key="0-0-0-1-1" />
			          	<TreeNode title="leaf" key="0-0-0-2-2" />
			          </TreeNode>
			        </TreeNode>
			      </Tree>
				</div>
			</div>
		</div>);
	}

	onSelect(selectedKeys, info) {
	   console.log('selected', selectedKeys, info);
	}
	
}