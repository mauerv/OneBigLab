import React from 'react'

export default ({ chain }) => {
  let chainClass = ''

  switch (chain) {
    case 'Ethereum':
      chainClass = 'info'
      break;
  }

  return (
    <div>
      <h5 className='mb-0'>Blockchain</h5>
      <p className={`tag btn btn-outline-${chainClass}`}>{chain}</p>
    </div>
  )
}
