import React, { Component } from 'react';
import { Layout,Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { IndexHeader } from '../common/header.js';
import ImgIndex from '../common/imgIndex.js';
import MainMenu from '../common/menu.js';
import MainContent from './main.js';

export default class Home extends React.Component {
  render() {
  	
	const id= this.props.location.query.id;
  	return (<div>
      <Layout>
         <IndexHeader />
         <Content>
            <Row>
              <Col span={6} > 
                 <ImgIndex />
              </Col>
              <Col span={4} > 
                 <MainMenu />
              </Col>
              <Col span={14}>
                 <MainContent />
              </Col>
            </Row>
         </Content>
       </Layout>
  	</div>);
  }
}