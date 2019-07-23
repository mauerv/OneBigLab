import React from 'react'

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom'

import FeaturedGridItem from './FeaturedGridItem'

export default ({ items }) => (
  <MDBRow className='border-top border-bottom pt-4 pb-3'>
    <MDBCol className='col-12'><h2>Featured DAOs</h2></MDBCol>
    {items.map(dao => (
      <FeaturedGridItem item={dao} />
    ))}
  </MDBRow>
)
