import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'
import Landing from './Landing'
import CreateInfo from './CreateInfo'
import News from './News'
import Daos from './Daos/'
import Dao from './Daos/Dao'
import * as ROUTES from '../constants/routes'

function App() {
  return (
  	<Router>
	    <div className='App'>
    		<Navbar />
	    	<div className='content'>
					<Route exact path={ROUTES.HOME} component={Landing} />
					<Route path={ROUTES.CREATE_INFO} component={CreateInfo} />
					<Route path={ROUTES.NEWS} component={News} />					
					<Route exact path={ROUTES.DAOS} component={Daos} />
					<Route path={ROUTES.DAO} component={Dao} />
				</div>
				<Footer />
	    </div>
    </Router>
  );
}

export default App;
