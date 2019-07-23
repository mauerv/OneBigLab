import React from 'react'

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import StatusTag from './StatusTag'
import ChainTag from './ChainTag'
import FrameworkTag from './FrameworkTag'

export default ({ framework, blockchain, status}) => (
  <div className='row justify-content-center'>
    <div className='col-2 text-center'>
      <FrameworkTag framework={framework} />
    </div>
    <div className='col-2 text-center'>
      <ChainTag chain={blockchain} />
    </div>
    <div className='col-2 text-center'>
      <StatusTag status={status}/>
    </div>
  </div>
)
