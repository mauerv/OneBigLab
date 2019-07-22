import React from 'react'

export default ({ contract }) => (
  <div key={contract.address} className='col-12 col-md-5 col-lg-3 mb-2 mr-2 mr-lg-4 pt-2 pb-2 border border-light rounded-lg'>
    <a href={`https://etherscan.io/address/${contract.address}`} target="_blank">
      <h5 className='text-primary'>{contract.name}</h5>
    </a>
    <a href={`https://etherscan.io/address/${contract.address}`} target="_blank">
      <p className='wrap-url font-weight-lighter'>{contract.address}</p>
    </a>
    <p>{contract.description}</p>
  </div>
)
