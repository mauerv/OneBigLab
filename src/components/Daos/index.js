import React from 'react'
import {
	Link
} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

export default () => (
	<div className='container'>
		<ul className='list-group'>
			<Link to={ROUTES.MOLOCH} className='list-group-item list-group-item-action'>Moloch</Link>
		</ul>
		<ul className='list-group'>
			<Link to={ROUTES.HUMANITYDAO} className='list-group-item list-group-item-action'>HumanityDao</Link>
		</ul>		
		<ul className='list-group'>
			<Link to={ROUTES.DASH} className='list-group-item list-group-item-action'>DashDao</Link>
		</ul>		
	</div>
)