import React from 'react'
import data from '../../data/daos'

const dashDao = data.dashDao

export default () => (
	<div className='container'>
		<div className='border-bottom border-dark'>
			<h1>{dashDao.title}</h1>
			<p>{dashDao.description}</p>
		</div>
		<div className='mt-2 mb-2 border-bottom border-dark'>
			<h3>Website</h3>
			<p>{dashDao.website}</p>
		</div>
		<div className='mt-2 mb-2 border-bottom border-dark'>	
			<h3>Contracts</h3>
			<div>
				<h5>Contract Proof</h5>
				<p className='wrap-url'>{dashDao.contractProof.twitter}</p>
			</div>
			{dashDao.contracts.map(contract => (
				<div key={contract.address}>	
					<h5>{contract.name}</h5>
					<p className='wrap-url'>{contract.address}</p>
					<p>{contract.description}</p>
				</div>
			))}
		</div>
		<div className='mt-2 mb-2 border-bottom border-dark'>
			<h3>Code</h3>
			<h5>Github</h5>
			<p>{dashDao.code.github}</p>
		</div>
	</div>
)