import React from 'react'
import {
	Link
} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'
import daos from '../../data/daos'

export default () => (
	<div className='container'>
		<ul className='list-group'>
			{daos.map(dao => (
				<Link to={`${ROUTES.DAOS}/${dao.id}`} className='list-group-item list-group-item-action'>{dao.title}</Link>
			))}
		</ul>	
	</div>
)