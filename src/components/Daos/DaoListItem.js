import React from 'react'
import {
	Link
} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

export default ({ dao }) => (
  <div className='list-group-item d-flex flex-column flex-md-row justify-content-between'>
		<div className='d-flex flex-row mt-1'>
	    <Link to={`${ROUTES.DAOS}/${dao.id}`}>
	      <img src={dao.image} className='img-thumbnail small-thumbnail' />
	    </Link>
			<div className='ml-3 mt-1'>
		    <Link to={`${ROUTES.DAOS}/${dao.id}`}>
		      <h5>{dao.title}</h5>
		    </Link>
		    <p>{dao.subtitle}</p>
			</div>
		</div>
		<div className='d-flex justify-content-between flex-md-column'>
			<p className='tag btn btn-outline-info'>{dao.blockchain}</p>
			<p className='tag btn btn-secondary'>{dao.framework}</p>
		</div>
  </div>
)
