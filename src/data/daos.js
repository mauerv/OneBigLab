export default [
	{
		id: 0,
		title: 'MolochDAO',
		image: 'moloch.png',
		description: 'A community DAO focused on funding Ethereum development, in the name of Moloch the God of Coordination Failure.',
		website: `https://molochdao.com/`,
		contractProof: `https://twitter.com/MolochDAO/status/1121203264316268544`,
		contracts: [
			{
				name: 'Moloch',
				address: `0x1fd169a4f5c59acf79d0fd5d91d1201ef1bce9f1`,
				description: 'The main contract for the DAO'
			},
			{
				name: 'GuildBank',
				address: `0x211a94468ba1e379236b45ca42dc63ee93139c7e`,
				description: 'Contains all the funds for the DAO'
			}
		],
		github: `https://github.com/MolochVentures`,
		twitter: `MolochDAO`,
		medium: 'molochdao',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 1,
		title: 'HumanityDAO',
		image: 'humanity.png',
		description: 'Unique identity on Ethereum. Building the foundation for voting, Universal Basic Income, and more.',
		website: `https://humanitydao.org/`,
		contractProof: `https://github.com/marbleprotocol/humanity`,
		contracts: [
			{
				name: 'Humanity (ERC20)',
				address: `0xbbd1706d16418bb136e1497a73d3af4164586da0`,
				description: 'Contract for the token.'
			},
			{
				name: 'HumanityGovernance',
				address: `0xdd806c4fdad2949a97fda79036cfbb8750181b37`,
				description: 'Deals with governance'
			},
			{
				name: 'HumanityRegistry',
				address: `0x4ee46dc4962c2c2f6bcd4c098a0e2b28f66a5e90`,
				description: 'Keeps track of all members.'
			},
			{
				name: 'Faucet',
				address: `0x2fe5e394a312acf9d18e8836f04ba92af29ad6d4`,
				description: 'Gives away the free money.'
			},
			{
				name: 'TwitterHumanityApplicant',
				address: `0x9d661f7773be14439b4223f5b516bc7ef67b0369`,
				description: 'Does more Stuff'
			},
			{
				name: 'UniversalBasicIncome',
				address: `0x762d141b8d9600bde64138762e6fb38efc56dcba`,
				description: 'Does Stuff'
			}
		],
		github: `https://github.com/marbleprotocol/humanity`,
		twitter: `HumanityDAO`,
		medium: 'marbleorg',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 2,
		title: 'MakerDAO',
		image: 'maker.jpg',
		description: 'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
		website: `https://makerdao.com/`,
		contractProof: ``,
		contracts: [
			{
				name: 'Maker',
				address: `https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2?a=0x69076e44a9c70a67d5b79d95795aba299083c275`,
				description: 'MKR token contract'
			},
		],
		github: `https://github.com/makerdao`,
		twitter: `MakerDAO`,
		medium: 'makerdao',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 3,
		title: 'NexusMutual',
		image: 'nexus_mutual.jpg',
		description: 'Nexus Mutual is building a decentralised alternative to insurance. We’re using blockchain technology to build a mutual (a risk sharing pool) to return the power of insurance to the people. The platform will be built on the Ethereum public chain. It will allow anyone to become a member and buy cover. It replaces the idea of a traditional insurance company, because it is wholly owned by the members. The model encourages engagement as members will get economic incentives for participating in Risk Assessment, Claims Assessment and Governance.',
		website: `https://nexusmutual.gitbook.io/docs/`,
		contractProof: `https://nexusmutual.gitbook.io/docs/docs#deployed-contract-information-deployed-23-may-2019`,
		contracts: [
			{
				name: 'claimData',
				address: `0xdc2d359f59f6a26162972c3bd0cfbfd8c9ef43af`,
				description: ''
			},
			{
				name: 'claim1',
				address: `0x58676340f458b36997608672be6548c92ce50714`,
				description: ''
			},
			{
				name: 'claimsReward',
				address: `0xebdd9752be578c03491ff1083c0f738aa8687d48`,
				description: ''
			},
			{
				name: 'dai',
				address: `0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359`,
				description: ''
			},
			{
				name: 'Governance',
				address: `0x4A5C681dDC32acC6ccA51ac17e9d461e6be87900`,
				description: ''
			},
			{
				name: 'mcr',
				address: `0xccb40a11aa8c5dfafaa9de9311fe7bd47d0bade7`,
				description: ''
			},
			{
				name: 'memberRoles',
				address: `0x055CC48f7968FD8640EF140610dd4038e1b03926`,
				description: ''
			},
			{
				name: 'NXMaster',
				address: `0x08c3a887865684f30351a0ba6d683aa9b539829a`,
				description: ''
			},
			{
				name: 'NXMtoken',
				address: `0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b`,
				description: ''
			},
			{
				name: 'pool1',
				address: `0xfd61352232157815cf7b71045557192bf0ce1884`,
				description: ''
			},
			{
				name: 'pool2',
				address: `0x7cbe5682be6b648cc1100c76d4f6c96997f753d6`,
				description: ''
			},
			{
				name: 'ProposalCategory',
				address: `0x888eA6Ab349c854936b98586CE6a17E98BF254b2`,
				description: ''
			},
			{
				name: 'poolData',
				address: `0x25916c331797ba10601e1f05a1da0b425302f5a2`,
				description: ''
			},
			{
				name: 'quotationData',
				address: `0x1776651f58a17a50098d31ba3c3cd259c1903f7a`,
				description: ''
			},
			{
				name: 'quotation',
				address: `0x9dae0663f252d05314b7352403fa9c16f16f25ee`,
				description: ''
			},
			{
				name: 'tokenController',
				address: `0x5407381b6c251cFd498ccD4A1d877739CB7960B8`,
				description: ''
			},
			{
				name: 'tokenData',
				address: `0xe20b3ae826cdb43676e418f7c3b84b75b5697a40`,
				description: ''
			},
			{
				name: 'tokenFunction',
				address: `0xdf50a17bf58dea5039b73683a51c4026f3c7224e`,
				description: ''
			},
		],
		github: `https://github.com/somish/NexusMutual`,
		twitter: `nexusmutual`,
		medium: 'nexus-mutual',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 4,
		title: 'Kleros',
		image: 'kleros.jpg',
		description: 'A decentralized autonomous organization that delivers fast, affordable and transparent justice for all.',
		website: `https://kleros.io/`,
		contractProof: ``,
		token: `https://etherscan.io/token/0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d`,
		contracts: [
			{
				name: 'Kleros',
				address: `0x211f01e59b425253c0a0e9a7bf612605b42ce82c`,
				description: ''
			},
			{
				name: 'Kleros Liquid',
				address: `0x988b3a538b618c7a603e1c11ab82cd16dbe28069`,
				description: ''
			},
			{
				name: 'Kleros Liquid Extra Views',
				address: `0xda47f3252bb03c5c7950d7bb2fd32637fc5ad943`,
				description: ''
			},
			{
				name: 'Pinakion Address',
				address: `0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d`,
				description: ''
			},
			{
				name: 'Policy Exchange',
				address: `0x03a9458d77dd705829fa758c64dbe770385295cc`,
				description: ''
			},
			{
				name: 'Uniswap Exchange',
				address: `0xF506828B166de88cA2EDb2A98D960aBba0D2402A`,
				description: ''
			}
		],
		github: `https://github.com/kleros`,
		twitter: `Kleros_io`,
		medium: 'kleros',
		blog: `https://blog.kleros.io/`,
		documents: {
			whitepaper: `https://kleros.io/assets/whitepaper.pdf`
		}
	},
	{
		id: 5,
		title: 'Metacartel',
		image: 'metacartel.png',
		description: 'Accelerating the success of Ethereum’s dapp ecosystem by funding experiments on the application layer. We are the infamous el cartel de la meta ~',
		website: `https://www.metacartel.org/`,
		contractProof: `https://twitter.com/meta_cartel/status/1151137914950017024`,
		contracts: [
			{
				name: 'DAO contract',
				address: `0x0372f3696fa7dc99801f435fd6737e57818239f2`,
				description: 'The main contract for the DAO'
			},
			{
				name: 'DAO Bank contract',
				address: `0x93d2a6369d57fdf8d1c3db22a5eb4623e26a24ae`,
				description: `Contains the DAO's funds.`
			}
		],
		github: `https://github.com/metacartel`,
		twitter: `meta_cartel`,
		medium: 'metacartel',
		documents: {
			whitepaper: ''
		}
	},
]

/*
	{
		id: 0,
		title: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		contracts: [
			{
				name: '',
				address: ``,
				description: ''
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		github: ``,
		twitter: ``,
		medium: '',
		documents: {
			whitepaper: ''
		}
	},
	https://nature2.ooo/
*/
