import React from 'react'

export default () => (
	<div className='container'>
		<div className='border-bottom border-dark'>
			<h1>MolochDAO</h1>
			<p>
				A community DAO focused on funding Ethereum development, in the name of Moloch the God of Coordination Failure. 
			</p>
		</div>
		<div className='mt-2 mb-2 border-bottom border-dark'>
			<h3>Website</h3>
			<p>https://molochdao.com/</p>
		</div>
		<div className='mt-2 mb-2 border-bottom border-dark'>	
			<h3>Contracts</h3>
			<div>
				<h5>Contract Proof</h5>
				<p className='wrap-url'>https://twitter.com/MolochDAO/status/1121203264316268544</p>
			</div>
			<div>	
				<h5>Moloch</h5>
				<p className='wrap-url'>https://etherscan.io/address/0x1fd169a4f5c59acf79d0fd5d91d1201ef1bce9f1</p>
			</div>
			<div>
				<h5>GuildBank</h5>
				<p className='wrap-url'>https://etherscan.io/address/0x211a94468ba1e379236b45ca42dc63ee93139c7e</p>
			</div>
		</div>
		<div className='mt-2 mb-2 border-bottom border-dark'>
			<h3>Code</h3>
			<h5>Github</h5>
			<p>https://github.com/MolochVentures</p>
		</div>
	</div>
)