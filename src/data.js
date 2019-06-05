export default {
	moloch: {
		title: 'MolochDAO',
		description: 'A community DAO focused on funding Ethereum development, in the name of Moloch the God of Coordination Failure.',
		website: `https://molochdao.com/`,
		contractProof: {
			twitter: `https://twitter.com/MolochDAO/status/1121203264316268544`
		},
		contracts: [
			{
				name: 'Moloch',
				address: `https://etherscan.io/address/0x1fd169a4f5c59acf79d0fd5d91d1201ef1bce9f1`,
				description: 'The main contract for the DAO'
			},
			{
				name: 'GuildBank',
				address: `https://etherscan.io/address/0x211a94468ba1e379236b45ca42dc63ee93139c7e`,
				description: 'Contains all the funds for the DAO'
			}			
		],
		code: {
			github: `https://github.com/MolochVentures`
		}
	}
}