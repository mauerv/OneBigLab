import React from 'react'

import { MDBRow } from "mdbreact";

import ContractGridItem from './ContractGridItem'

export default ({ contracts, contractProof }) => (
  <MDBRow className='mt-2 mb-2 pb-3 pt-3 justify-content-center'>
    <div className='col-12 mb-2 text-md-center'>
      <h3>Contracts</h3>
    </div>
    {contracts.map(contract => <ContractGridItem contract={contract}/>)}
    {!contracts.length && (
      <p>No contract data available</p>
    )}
    {contractProof && (
      <div className='col-12 mt-4'>
        <hr />
        <h3 className='mt-4'>Contract Proof</h3>
        <a href={contractProof} className='wrap-url'>{contractProof}</a>
      </div>
    )}
  </MDBRow>
)
