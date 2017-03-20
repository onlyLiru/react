import React , { Component }from 'react';
import { render } from 'react-dom';
import {
  hashHistory,
  browserHistory,
  Router,
  Route,
  Link,
  IndexRoute,
} from 'react-router';
import './css/index.less';
import Home from './home/index.js';
import Topics from './topics/index.js';
import About from './about/index.js';

class Main extends Component {
	render() {
		return (<div>
      <ul>
        <li><Link to="/index">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
			{ this.props.children }
		</div>);
	}
}

class NoMatch extends Component {
  render() {
    return(<div>
      sorry,没有找到您想要的页面!!!
    </div>);
  }
}

render(
	<Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={ Home } />
        <Route path="/index" component={ Home }/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </Route>
      <Route path="*" component={NoMatch}/>
  </Router>,
	document.getElementById('root')
);
