import React from 'react'
import data from '../../data'

const humanityDao = data.humanityDao

export default () => (
	<div className='container'>
		<div className='border-bottom border-dark'>
			<h1>{humanityDao.title}</h1>
			<p>{humanityDao.description}</p>
		</div>
		<div className='mt-2 mb-2 border-bottom border-dark'>
			<h3>Website</h3>
			<p>{humanityDao.website}</p>
		</div>
		<div className='mt-2 mb-2 border-bottom border-dark'>	
			<h3>Contracts</h3>
			<div>
				<h5>Contract Proof</h5>
				<p className='wrap-url'>{humanityDao.contractProof.twitter}</p>
			</div>
			{humanityDao.contracts.map(contract => (
				<div>	
					<h5>{contract.name}</h5>
					<p className='wrap-url'>{contract.address}</p>
					<p>{contract.description}</p>
				</div>
			))}
		</div>
		<div className='mt-2 mb-2 border-bottom border-dark'>
			<h3>Code</h3>
			<h5>Github</h5>
			<p>{humanityDao.code.github}</p>
		</div>
	</div>
)