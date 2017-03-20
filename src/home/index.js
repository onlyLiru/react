import React, { Component } from 'react';
import { DatePicker,Button,Steps } from 'antd';
const Step = Steps.Step;


export default class Home extends React.Component {
  render() {
	const id= this.props.location.query.id;
  	return (<div>
  		<h1>Home React .js</h1>
  		<DatePicker />
  		<Button type="primary">Primary</Button>
	    <Button>Default</Button>
	    <Button type="dashed">Dashed</Button>
	    <Button type="danger">Danger</Button>
	    <Steps current={1}>
	        <Step title="Finished" description="This is a description." />
	        <Step title="In Progress" description="This is a description." />
	        <Step title="Waiting" description="This is a description." />
	      </Steps>
  	</div>);
  }
}