import React, { Component } from 'react';
import { Icon,Tree } from 'antd';

const TreeNode = Tree.TreeNode;

export default class MainMenu extends Component {
	constructor (props) {
		super(props);
		this.state={
			expandedKeys:['0-0'],
			selectedKeys:['0-0'],
		}
	}
	render() {
		return(<div>
			<div>
				
				<div className="mainMenu" id="mainMenu">
					<Tree
			        showIcon
			        showLine
			        expandedKeys={ this.state.expandedKeys }
			        selectedKeys={ this.state.selectedKeys }
			        autoExpandParent={ true }
			        onSelect={ this.onSelect.bind(this) }
			      >
			        <TreeNode title="广告栏" key="0-0">
			          <TreeNode title="图片" key="0-0-1">
			            <TreeNode title="leaf.jpg" key="0-0-1-0" />
			            <TreeNode title="banner.jpg" key="0-0-1-1" />
			          </TreeNode>
			        </TreeNode>
			        <TreeNode title="内容推荐" key="1-0">
			          <TreeNode title="视频" key="1-0-0">
			            <TreeNode title="leaf" key="1-0-0-0" />
			            <TreeNode title="leaf" key="1-0-0-1" />
			          </TreeNode>
			          <TreeNode title="商品" key="1-0-1">
			            <TreeNode title="leaf" key="1-0-1-0" />
			            <TreeNode title="leaf" key="1-0-1-1" />
			          </TreeNode>
			          <TreeNode title="课程" key="1-0-2" >
			          	<TreeNode title="leaf" key="1-0-2-0" />
			          	<TreeNode title="leaf" key="1-0-2-1" />
			          </TreeNode>
			        </TreeNode>
			      </Tree>
				</div>
			</div>
		</div>);
	}
	componentDidMount() {

	}
	onSelect(selectedKeys, info) {
		// console.log('selected', selectedKeys, info);
		if(!selectedKeys.length) return;
		this.setState({
			expandedKeys:selectedKeys,
			selectedKeys:selectedKeys
		});
		
		this.props.selectMenu(selectedKeys, info);
	}
	
}