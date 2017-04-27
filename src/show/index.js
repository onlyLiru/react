import React, { Component } from 'react';
import { Layout,Row, Col,Icon,Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { IndexHeader } from '../common/header.js';
import ImgIndex from './imgIndex.js';
import MainMenu from './menu.js';
/*广告栏*/
import IndexMain from './main.js';
/*内容推荐*/
import RecommendMain from './recommend/main.js';
import './index.less';

export default class Home extends React.Component {
  constructor (props) {
      super(props);
      this._curMenu=this._curMenu.bind(this);
      this.state={
        curKey:'0-0-1'
      }
  }
  render() {
  	const id= this.props.location.query.id;
    let curKey = this.state.curKey;
  	return (<div>
      <Layout>
         <IndexHeader cur='show' />
         <Content>
            <Row>
              <Col span={6} >
                <div className="cHead bgYellow">
                  <Icon type="mobile" /> App 前台预览
                </div>
                <ImgIndex />
              </Col>
              <Col span={4} >
                <div className="cHead bgBlue">
                  <Icon type="bars" /> 内容列表
                </div>
                <MainMenu selectMenu={this._curMenu.bind(this)} />
              </Col>
              <Col span={14}>
                  <div className="cHead clearfix bgBlack">
                    <Icon type="edit" /> 内容编辑
                  </div>
                  {
                    curKey.search('0-0')==0 ?
                      <IndexMain  curKey={ curKey } />
                    :
                      null
                  }
                  {
                    curKey.search('1-0')==0 ?
                      <RecommendMain curKey={ curKey } />
                    :
                      null
                  }
              </Col>
            </Row>
         </Content>
       </Layout>
  	</div>);
  }
  _curMenu(selectedKeys, info) {
    console.log('selected', selectedKeys, info);
    this.setState({
      curKey:selectedKeys[0]
    });
  }
}