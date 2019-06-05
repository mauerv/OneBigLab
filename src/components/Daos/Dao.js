import React from 'react'
import Dao from './Dao'

import daos from '../../data/daos'

export default ({ match }) => {
	const dao = daos[match.params.id]
	return (
		<div className='container'>
			<div className='border-bottom border-dark'>
				<h1>{dao.title}</h1>
				<p>{dao.description}</p>
			</div>
			<div className='mt-2 mb-2 border-bottom border-dark'>
				<h3>Website</h3>
				<p>{dao.website}</p>
			</div>
			<div className='mt-2 mb-2 border-bottom border-dark'>	
				<h3>Contracts</h3>
				<div>
					<h5>Contract Proof</h5>
					<p className='wrap-url'>{dao.contractProof}</p>
				</div>
				{dao.contracts.map(contract => (
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
				<p>{dao.github}</p>
			</div>
		</div>
	)
}


