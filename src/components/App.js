import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'
import Landing from './Landing'
import Moloch from './Moloch'

import * as ROUTES from '../constants/routes'

function App() {
  return (
  	<Router>
	    <div className='App'>
    		<Navbar />
	    	<div className='content'>
					<Route exact path={ROUTES.HOME} component={Landing} />
					<Route path={ROUTES.MOLOCH} component={Moloch} />
				</div>
				<Footer />
	    </div>
    </Router>
  );
}

export default App;
