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
import Home from './home/index.js';
import Topics from './topics/index.js';
import About from './about/index.js';
import './css/index.less';

class Main extends Component {
	render() {
		return (<div>
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
