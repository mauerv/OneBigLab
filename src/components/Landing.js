import React from 'react'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Hero from './Hero'
import Feature from './Feature'
import FeaturedGrid from './FeaturedGrid'

import { Link } from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import daos from '../data/daos'

export default () => (
	<div>
		<Hero
			title='DAO Browser'
			subtitle='Your governance dashboard. Home for all things DAO. '
			buttonText='Explore DAOs'
			buttonLink={ROUTES.DAOS}
		/>
		<MDBContainer>
			<MDBRow className='border-top border-bottom pt-4 pb-4'>
				<MDBCol className='col-12'>
					<h2>What is a DAO</h2>
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
			<FeaturedGrid items={daos.slice(0, 4)}/>
			<MDBRow className='border-top border-bottom pt-4 pb-4'>
				<MDBCol className='col-12'><h2>How to start one?</h2></MDBCol>
				<MDBCol className='col-12'><p>These days there are multiple frameworks, platforms or code you can fork in order to start your own DAO. It can have its own blockchain, or live as a smart contract on top of a platform like <a href='https://ethereum.org/' target='_blank'>Ethereum</a> or <a href='https://www.rsk.co/' target='_blank'>Rootstock</a>.</p></MDBCol>
				<MDBCol className='col-12'><Link to={ROUTES.CREATE_INFO} className='btn btn-primary ml-0'>Start a DAO</Link></MDBCol>
			</MDBRow>
		</MDBContainer>
	</div>
)
