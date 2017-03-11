import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

// reducers (redux)
import SeatingChartApp from './reducers';

// Custom modules
import Footer from './modules/Footer/Footer';
import Navbar from './modules/Navbar/Navbar';

import Home from './modules/Home/Home';

import NoMatch from './modules/NoMatch';


//  redux modules come from /modules/containers/...
import SeatingChart from './modules/containers/SeatingChart';


// Style
import './global';

let store = createStore(
	SeatingChartApp,
	applyMiddleware(thunkMiddleware)
	);

let App = React.createClass({
  render() {
    return (
      <div>
	    <div className='app'>
	    	<Navbar />
	        {this.props.children}
	    </div>
        <Footer />
      </div>
    );
  }
});

ReactDOM.render(
	<Provider store={store}>
	  <Router onUpdate={() => {window.scrollTo(0,1); window.scrollTo(0, 0);}} history={browserHistory}>
	    <Route path='/' component={App}>
	      <IndexRoute component={SeatingChart}/>
	      <Route path="*" component={NoMatch}/>
	    </Route>
	  </Router>
	</Provider>,
  document.getElementById('app-wrapper')
);
