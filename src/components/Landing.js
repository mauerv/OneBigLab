import React from 'react'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Hero from './Hero'
import Feature from './Feature'

import { Link } from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import daos from '../data/daos'

export default () => (
	<div>
		<Hero 
			title='Global DAO Directory'
			subtitle='Home for all things DAO. Your governance dashboard.'
			buttonText='Explore DAOs'
			buttonLink={ROUTES.DAOS}
		/>

		<MDBContainer>
			<MDBRow className='border-top border-bottom pt-4 pb-4'>
				<MDBCol className='col-12'>
					<h3>What is a DAO</h3>
				</MDBCol>
				<MDBCol className='col-12'>
					<p>
						A decentralized autonomous organization (DAO), sometimes labeled a decentralized autonomous 
						corporation (DAC), is an organization represented by rules encoded as a computer program that is transparent, 
						controlled by shareholders and not influenced by a central government. 
						A DAO's financial transaction record and program rules are maintained on a blockchain.
					</p>
				</MDBCol>
			</MDBRow>
			<MDBRow className='border-top border-bottom pt-4 pb-4'>
				<MDBCol className='col-12'><h3>How to start one?</h3></MDBCol>
				<MDBCol className='col-12'><p>These days there are multiple frameworks, platforms or code you can fork in order to start your own DAO. It can have its own blockchain, or live as a smart contract on top of a platform like <a href='https://ethereum.org/' target='_blank'>Ethereum</a> or <a href='https://www.rsk.co/' target='_blank'>Rootstock</a>.</p></MDBCol>
				<MDBCol className='col-12'><Link to={ROUTES.CREATE_INFO} className='btn btn-primary ml-0'>Start a DAO</Link></MDBCol>
			</MDBRow>
			<MDBRow className='border-top border-bottom pt-4 pb-3'>
				<MDBCol className='col-12'><h3>Featured DAOs</h3></MDBCol>
				<MDBCol className='col-12'>
					<MDBRow className='flex-wrap'>
						{daos.map(dao => (
							<MDBCol sm='6' md='3' className='text-center'>
		            <MDBView hover zoom>
									<Link to={`${ROUTES.DAOS}/${dao.id}`}>
										<img src={dao.image} className='img-thumbnail' />
									</Link>
		              <MDBMask className="flex-center" overlay="stylish-strong">
		                <h4 className="white-text font-weight-bolder">{dao.title}</h4>
		              </MDBMask>
		            </MDBView>
							</MDBCol>
						))}
					</MDBRow>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	</div>
)
