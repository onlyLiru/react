import React, { Component } from 'react';


export default class Topics extends React.Component {
	constructor(props) {
		super(props);
		this.click=this.click.bind(this);
	}
  render() {
  	return (<div>
  		<h1 onClick={this.click.bind(this)}>Topics React .js</h1>
  	</div>);
  }

  click() {
  	alert(0);
  }
}


