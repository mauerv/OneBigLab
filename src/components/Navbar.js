import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../constants/routes'

export default () => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
  	<div className='container'>
  		<Link to={ROUTES.HOME} className='navbar-brand'>OneBigLab</Link>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
		    <ul class="navbar-nav">
		      <li class="nav-item">
		      	<Link to={ROUTES.NEWS} className='nav-link text-light'>News</Link>
		      </li>
		      <li class="nav-item">
		      	<Link to={ROUTES.DAOS} className='nav-link text-light'>Explore</Link>
		      </li>
		      <li class="nav-item">
		      	<Link to={ROUTES.CREATE_INFO} className='nav-link text-light'>Start DAO</Link>
		      </li>
		    </ul>
	  	</div>
  	</div>
	</nav>
)