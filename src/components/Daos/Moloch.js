import React from 'react'
import data from '../../data'

const moloch = data.moloch

export default () => (
	<div className='container'>
		<div className='border-bottom border-dark'>
			<h1>{moloch.title}</h1>
			<p>{moloch.description}</p>
		</div>
		<div className='mt-2 mb-2 border-bottom border-dark'>
			<h3>Website</h3>
			<p>{moloch.website}</p>
		</div>
		<div className='mt-2 mb-2 border-bottom border-dark'>	
			<h3>Contracts</h3>
			<div>
				<h5>Contract Proof</h5>
				<p className='wrap-url'>{moloch.contractProof.twitter}</p>
			</div>
			{moloch.contracts.map(contract => (
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
			<p>{moloch.code.github}</p>
		</div>
	</div>
)