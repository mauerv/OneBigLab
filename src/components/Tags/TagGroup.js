import React from 'react'

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import StatusTag from './StatusTag'

export default ({ framework, blockchain, status}) => (
  <div className='row justify-content-center'>
    <div className='col-2 text-center'>
      <h5 className='mb-0'>Framework</h5>
      <p className='tag btn btn-secondary'>{framework}</p>
    </div>
    <div className='col-2 text-center'>
      <h5 className='mb-0'>Blockchain</h5>
      <p className='tag btn btn-outline-info'>{blockchain}</p>
    </div>
    <div className='col-2 text-center'>
      <StatusTag status={status}/>
    </div>
  </div>
)
