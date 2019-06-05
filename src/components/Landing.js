import React from 'react'

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
		<div className='container'>
			<div className='border-top border-bottom pt-4 pb-3'>
				<h3>What is a DAO</h3>
				<p>
					A decentralized autonomous organization (DAO), sometimes labeled a decentralized autonomous 
					corporation (DAC), is an organization represented by rules encoded as a computer program that is transparent, 
					controlled by shareholders and not influenced by a central government. 
					A DAO's financial transaction record and program rules are maintained on a blockchain.
				</p>
			</div>
			<div className='border-top border-bottom pt-4 pb-3'>
				<h3>How to start one?</h3>
				<p>These days there are multiple frameworks, platforms or code you can fork in order to start your own DAO. It can have its own blockchain, or live as a smart contract on top of a platform like <a href='https://ethereum.org/' target='_blank'>Ethereum</a> or <a href='https://www.rsk.co/' target='_blank'>Rootstock</a>.</p>
				<Link to={ROUTES.CREATE_INFO} className='btn btn-primary'>Start a DAO</Link>
			</div>
			<div className='border-top border-bottom pt-4 pb-3'>
				<h3>Featured DAOs</h3>
				<div className='row d-flex flex-wrap'>
					{daos.map(dao => (
						<div className='col-6 col-md-3 text-center'>
							<div className='grow mb-3'>
								<Link to={`${ROUTES.DAOS}/${dao.id}`} className=' mr-1'>
									<img src={dao.image} className='img-thumbnail' />
								</Link>
							</div>
							<p className='font-weight-bold'>{dao.title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
)
