import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'
import Landing from './Landing'
import Moloch from './Daos/Moloch'
import HumanityDAO from './Daos/HumanityDAO'
import Daos from './Daos/'

import * as ROUTES from '../constants/routes'

function App() {
  return (
  	<Router>
	    <div className='App'>
    		<Navbar />
	    	<div className='content'>
					<Route exact path={ROUTES.HOME} component={Landing} />
					<Route exact path={ROUTES.DAOS} component={Daos} />
					<Route path={ROUTES.MOLOCH} component={Moloch} />
					<Route path={ROUTES.HUMANITYDAO} component={HumanityDAO} />
				</div>
				<Footer />
	    </div>
    </Router>
  );
}

export default App;
