import React from 'react'
import classNames from 'classnames'

export default ({ status }) => {
  let statusClass = ''

  switch (status) {
    case 'active':
      statusClass = 'success'
      break;
    case 'inactive':
      statusClass = 'danger'
      break;
    default:
      statusClass = 'warning'
  }

  return (
    <div>
      <h5 className='mb-0'>Status</h5>
      <p className={`tag btn btn-outline-${statusClass}`}>{status}</p>
    </div>
  )
}
