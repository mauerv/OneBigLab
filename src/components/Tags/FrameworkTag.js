import React from 'react'

export default ({ framework }) => {
  let frameworkClass = ''

  switch (framework) {
    case 'Moloch Fork':
      frameworkClass = 'danger'
      break;
    case 'DAOStack':
      frameworkClass = 'info'
      break;
    case 'Colony':
      frameworkClass = 'success'
      break;
    case 'Custom':
      frameworkClass = 'secondary'
  }

  return (
    <div>
      <h5 className='mb-0'>Framework</h5>
      <p className={`tag btn btn-${frameworkClass}`}>{framework}</p>
    </div>
  )
}
