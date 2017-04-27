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
import Show from './show/index.js';
import Shop from './shop/index.js';
import School from './school/index.js';
import My from './my/index.js';

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
        <Route path="show" component={Show}/>
        <Route path="shop" component={Shop}/>
        <Route path="school" component={School}/>
        <Route path="my" component={My}/>
      </Route>
      <Route path="*" component={NoMatch}/>
  </Router>,
	document.getElementById('root')
);
