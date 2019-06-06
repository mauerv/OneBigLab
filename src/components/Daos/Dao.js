import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Dao from './Dao'

import daos from '../../data/daos'

export default ({ match }) => {
	const dao = daos[match.params.id]
	return (
		<MDBContainer>
			<MDBRow className='text-center mb-3 pb-3 border-bottom'>
				<MDBCol className='col-6 col-md-2 offset-3 offset-md-5'>
					<img src={`../${dao.image}`} className='img-thumbnail' />
				</MDBCol>	
				<MDBCol className='col-12'>
					<h1 className='mb-0'>{dao.title}</h1>
					<a href={dao.website} target='__blank'>{dao.website}</a>
				</MDBCol>
				<MDBCol className='col-12 mt-1'>
					<p className='pt-3'>{dao.description}</p>
				</MDBCol>
				<MDBCol className='col-12 d-flex justify-content-center'>
					<a href={dao.github} target='__blank' className='mr-3 ml-3'>
						<i className="fab fa-github fa-2x" aria-hidden="true"></i>
					</a>
					<a href={dao.twitter} target='__blank' className='mr-3 ml-3'>
						<i className="fab fa-medium fa-2x" aria-hidden="true"></i>
					</a>
					<a href={dao.twitter} target='__blank' className='mr-3 ml-3'>
						<i className="fab fa-twitter fa-2x" aria-hidden="true"></i>
					</a>
				</MDBCol>
			</MDBRow>
			<MDBRow className='mt-2 mb-2 border-bottom border-dark pb-3 pt-3 justify-content-center'>
				<div className='col-12 mb-2 text-md-center'>
					<h3>Contracts</h3>
				</div>
				{dao.contracts.map(contract => (
					<div key={contract.address} className='col-12 col-md-5 col-lg-3 mb-2 mr-2 mr-lg-4 pt-2 pb-2 border border-light rounded-lg'> 	
						<h5 className='text-primary'>{contract.name}</h5>
						<p className='wrap-url'>{contract.address}</p>
						<p>{contract.description}</p>
					</div>
				))}
				{dao.contractProof && (
					<div className='col-12 mt-4'>
						<h3>Contract Proof</h3>
						<a href={dao.contractProof} className='wrap-url'>{dao.contractProof}</a>
					</div>
				)}				
			</MDBRow>
		</MDBContainer>
	)
}


