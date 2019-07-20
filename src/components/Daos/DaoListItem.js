import React from 'react'
import {
	Link
} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

export default ({ dao }) => (
  <div className='list-group-item list-group-item-action'>
    <Link to={`${ROUTES.DAOS}/${dao.id}`}>
      <img src={dao.image} className='img-thumbnail small-thumbnail' />
    </Link>
    <Link to={`${ROUTES.DAOS}/${dao.id}`}>
      <h4>{dao.title}</h4>
    </Link>
    <p>{dao.subtitle}</p>
  </div>
)
