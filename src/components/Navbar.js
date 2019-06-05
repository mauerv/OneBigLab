import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../constants/routes'

export default () => (
  <nav className='navbar navbar-dark bg-primary'>
  	<Link to={ROUTES.HOME} className='navbar-brand'>OneBigLab</Link>
	</nav>
)