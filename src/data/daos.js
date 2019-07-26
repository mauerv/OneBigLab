export default [
	{
		id: 0,
		title: 'MolochDAO',
		subtitle: 'A community DAO focused on funding Ethereum dev',
		status: 'active',
		image: 'moloch.png',
		description: 'A community DAO focused on funding Ethereum development, in the name of Moloch the God of Coordination Failure.',
		website: `https://molochdao.com/`,
		blockchain: 'Ethereum',
		framework: 'Custom',
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
		audits: [
			{
				auditor: 'Nomic Labs',
				auditorWebsite: 'https://nomiclabs.io/',
				auditUrl: 'https://medium.com/nomic-labs-blog/moloch-dao-audit-report-f31505e85c70',
				auditDate: "14/02/2019"
			}
		],
		social: {
			github: 'https://github.com/MolochVentures',
			twitter: 'MolochDAO',
			medium: 'https://medium.com/molochdao',
			telegram: '',
			reddit: '',
			youtube: '',
			discord: '',
		},
		documents: [
			{
				title: "Whitepaper",
				url: 'https://github.com/MolochVentures/Whitepaper/blob/master/Whitepaper.pdf'
			}
		]
	},
	{
		id: 1,
		title: 'HumanityDAO',
		subtitle: 'Humanity is a global identity network.',
		tags: ['TCR'],
		status: 'active',
		image: 'humanity.png',
		blockchain: 'Ethereum',
		framework: 'Custom',
		audits: [],
		articles: [
			{
				title: 'Introducing Humanity DAO',
				url: 'https://medium.com/marbleorg/introducing-humanity-90ddf9ead235'
			}
		],
		description: 'HumanityDAO is a standard for unique identity on Ethereum. The Humanity registry can serve as the foundation for Sybil-resistant protocols including Universal Basic Income, credit, democratic voting, and more.',
		website: `https://humanitydao.org/`,
		contractProof: `https://github.com/marbleprotocol/humanity`,
		documents: [],
		contracts: [
			{
				name: 'Humanity (ERC20)',
				address: `0xbbd1706d16418bb136e1497a73d3af4164586da0`,
				description: 'Token contract'
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
				description: 'Gives away free money'
			},
			{
				name: 'TwitterHumanityApplicant',
				address: `0x9d661f7773be14439b4223f5b516bc7ef67b0369`,
				description: 'Apply to the registry using Twitter as proof of identity'
			},
			{
				name: 'UniversalBasicIncome',
				address: `0x762d141b8d9600bde64138762e6fb38efc56dcba`,
				description: 'Manage claimable DAI by members of the registry'
			}
		],
		social: {
			github: 'https://github.com/marbleprotocol/humanity',
			twitter: 'HumanityDAO',
			medium: 'https://medium.com/marbleorg',
			telegram: '',
			reddit: 'HumanityDAO',
			discord: 'yvUqPUn',
		}
	},
	{
		id: 2,
		title: 'MakerDAO',
		subtitle: 'Transparent and sustainable finance',
		status: 'active',
		image: 'maker.jpg',
		audits: [
			{
				auditor: "Trail of Bits",
				auditorWebsite: "https://www.trailofbits.com/",
				auditUrl: "https://github.com/makerdao/audits/blob/master/mcd/trail-of-bits.pdf",
				auditDate: "23/03/2018"
			},
			{
				auditor: "WhiteHat Group",
				auditorWebsite: "https://addreth.space/address/whitehats.eth",
				auditUrl: "https://github.com/makerdao/audits/blob/master/scd/white-hat-group.pdf",
				auditDate: "15/12/2017"
			},
			{
				auditor: "Trail of Bits",
				auditorWebsite: "https://www.trailofbits.com/",
				auditUrl: "https://github.com/makerdao/audits/blob/master/scd/trail-of-bits.pdf",
				auditDate: "24/10/2017"
			},
			{
				auditor: "Bok Consulting",
				auditorWebsite: "https://www.bokconsulting.com.au/",
				auditUrl: "https://github.com/bokkypoobah/MakerDAOSaiContractAudit/tree/8dbefb06826c01082ff2fb9c368d30c0336733a1",
				auditDate: "21/06/2018"
			},
			{
				auditor: "Trail of Bits",
				auditorWebsite: "https://www.trailofbits.com/",
				auditUrl: "https://github.com/makerdao/audits/blob/master/dappsys/trail-of-bits.pdf",
				auditDate: "08/12/2017"
			}
		],
		description: 'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
		website: `https://makerdao.com/`,
		contractProof: `https://github.com/makerdao/awesome-makerdao`,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [
			{
				name: 'Maker',
				address: `0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2`,
				description: 'MKR token contract'
			},
			{
				name: '',
				address: ``,
				description: ''
			},
			{
				name: '',
				address: ``,
				description: ''
			},
			{
				name: '',
				address: ``,
				description: ''
			},
			{
				name: '',
				address: ``,
				description: ''
			},
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
		social: {
			github: 'https://github.com/makerdao',
			twitter: 'MakerDAO',
			medium: 'https://medium.com/makerdao',
			telegram: 'https://t.me/makerdaoofficial',
			reddit: 'MakerDAO',
			rocketchat: 'https://chat.makerdao.com/home',
			discord: '',
		},
		documents: [
			{
				title: "Whitepaper",
				url: 'https://makerdao.com/whitepaper/'
			}
		]
	},
	{
		id: 3,
		title: 'NexusMutual',
		subtitle: 'A people-powered alternative to insurance',
		status: 'active',
		audits: [
			{
				auditor: 'Solidified',
				auditorWebsite: 'https://solidified.io/',
				auditUrl: 'https://www.scribd.com/document/411077416/Solidified-Audit-Report-Nexus-Mutual-20-05-2019',
				auditDate: "20/05/2019"
			}
		],
		image: 'nexus_mutual.jpg',
		blockchain: 'Ethereum',
		framework: 'Custom',
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
		social: {
			github: 'https://github.com/somish/NexusMutual',
			twitter: 'nexusmutual',
			medium: 'https://medium.com/nexus-mutual',
			telegram: '',
			reddit: '',
			discord: 'DwtQuSD',
			email: 'info@nexusmutual.io'
		},
		documents: [
			{
				title: "Whitepaper",
				url: 'https://www.nexusmutual.io/assets/docs/nmx_white_paperv2_3.pdf'
			}
		]
	},
	{
		id: 4,
		title: 'Kleros',
		subtitle: 'The Blockchain Dispute Resolution Layer',
		status: 'active',
		audits: [],
		image: 'kleros.jpg',
		blockchain: 'Ethereum',
		framework: 'Custom',
		description: 'A decentralized autonomous organization that delivers fast, affordable and transparent justice for all.',
		website: `https://kleros.io/`,
		contractProof: ``,
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
		social: {
			github: 'https://github.com/kleros',
			twitter: 'Kleros_io',
			medium: 'https://medium.com/kleros',
			telegram: 'https://t.me/kleros',
			reddit: 'Kleros',
			discord: '',
			blog: `https://blog.kleros.io/`,
			discourse: "https://forum.kleros.io/"
		},
		documents: [
			{
				title: "Whitepaper",
				url: `https://kleros.io/assets/whitepaper.pdf`
			}
		]
	},
	{
		id: 5,
		title: 'Metacartel',
		subtitle: 'Ethereum’s grassroot dapp alliance',
		status: 'active',
		audits: [],
		image: 'metacartel.png',
		blockchain: 'Ethereum',
		framework: 'Moloch Fork',
		description: 'MetaCartel DAO is a not for profit grants DAO that aims to fund and support projects that are looking to advance usability, UX or further experiment with new Web 3.0 use cases.',
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
		social: {
			github: 'https://github.com/metacartel',
			twitter: 'meta_cartel',
			medium: 'https://medium.com/metacartel',
			telegram: 'https://t.me/metacartel',
			reddit: 'MetaCartel',
			discord: '',
			discourse: 'https://forum.metacartel.org/'
		},
		documents: []
	},
	{
		id: 6,
		title: 'YangDAO',
		subtitle: `DAO to help Andrew Yang's 2020 election campaign`,
		status: 'active',
		audits: [],
		image: 'yangdao.jpg',
		blockchain: 'Ethereum',
		framework: 'Moloch Fork',
		description: `A place where members secure the collective bag 💰 to fund initiatives to foster Andrew Yang's presidential campaign.`,
		website: `https://www.yangdao.org/`,
		contractProof: `https://twitter.com/YangDAOofficial/status/1154047687588581378`,
		contracts: [
			{
				name: 'DAO contract',
				address: `0xB3C02F093E6140Ed2ad91Be66B302F938cd8434f`,
				description: 'The main contract for the DAO'
			},
			{
				name: 'DAO Bank',
				address: `0x75227641D30Dd5134088746ED785A998Cf43B36b`,
				description: 'Holds the DAO funds'
			}
		],
		social: {
			github: '',
			twitter: 'yangdaoofficial',
			medium: 'https://medium.com/yangdao',
			telegram: '',
			reddit: '',
			discord: '',
		},
		documents: []
	},
	{
		id: 7,
		title: 'dxDAO',
		subtitle: 'Managing DutchX exchange protocol',
		status: 'active',
		audits: [
			{
				auditor: 'Solidified',
				auditorWebsite: 'https://solidified.io/',
				auditUrl: 'https://dutchx.readthedocs.io/en/latest/_static/docs/DutchX_1.0_Audit%20Report.pdf',
				auditDate: '29/03/2018'
			},
			{
				auditor: 'Solidified',
				auditorWebsite: 'https://solidified.io/',
				auditUrl: 'https://dutchx.readthedocs.io/en/latest/_static/docs/DutchX_2.0_Audit%20Report.pdf',
				auditDate: '04/02/2019'
			},
			{
				auditor: 'Solidified',
				auditorWebsite: 'https://solidified.io/',
				auditUrl: 'https://github.com/gnosis/dx-price-oracle/blob/develop/docs/audit_report/Solidified_Audit_Report.pdf',
				auditDate: '04/02/2019'
			}
		],
		image: 'dxdao.png',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'The dxDAO is a next-generation decentralized autonomous organization (DAO) for community governance of software protocols. Its specific usecase is managing the DutchX decentralized exchange protocol.',
		website: `https://dxdao.daostack.io/`,
		contractProof: `https://github.com/gnosis/dx-daostack`,
		contracts: [
			{
				name: 'Avatar',
				address: `0x519b70055af55A007110B4Ff99b0eA33071c720a`,
				description: 'Main address for the DAO. Ethereum identity'
			},
			{
				name: 'Token',
				address: `0x643b14F6EA235668278DA5974930105852F2B7C4`,
				description: `dxDAO's own token`
			},
			{
				name: 'Reputation',
				address: `0x7a927A93F221976AAE26d5D077477307170f0b7c`,
				description: 'Voting power for dxDAO proposals	'
			},
			{
				name: 'Controller',
				address: `0x9f828AC3baA9003e8a4e0b24bcaE7b027B6740b0`,
				description: 'dxDAO controller	'
			},
			{
				name: 'Genesis Protocol',
				address: `0x332B8C9734b4097dE50f302F7D9F273FFdB45B84`,
				description: 'Holographic Consensus voting machine for voting on proposals'
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: 'https://t.me/dxDAO',
			reddit: '',
			discord: '',
			daotalk: "https://daotalk.org/c/daos/dx-dao"
		},
		documents: [
			{
				title: "Whitepaper",
				url: "https://github.com/gnosis/dx-daostack/blob/master/dxdao_whitepaper_v1.pdf"
			},
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			},
			{
				title: "DxDAO Resources",
				url: "https://docs.google.com/document/d/1PIgWibaN1n1UF3oMx-Ca-ebFK8tHmT2JVQbOC_xSQSg/edit"
			}
		]
	},
	{
		id: 8,
		title: 'GenesisDAO',
		subtitle: `DAOstack's native DAO`,
		status: 'active',
		audits: [],
		image: 'genesis.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: `Genesis is an independent, global community of people working together to build and promote Decentralized Autonomous Organizations (DAOs). It is the first of a growing number of DAOs built on the DAO stack.`,
		website: `https://daostack.io/genesis`,
		contractProof: ``,
		contracts: [
			{
				name: 'Genesis DAO Avatar',
				address: `0x294f999356ed03347c7a23bcbcf8d33fa41dc830`,
				description: `Genesis DAO's main contract`
			},
			{
				name: 'Token',
				address: `0x543ff227f64aa17ea132bf9886cab5db55dcaddf`,
				description: `Genesis DAO's own token`
			},
			{
				name: 'Reputation',
				address: ``,
				description: ``
			},
			{
				name: 'GenesisProtocol',
				address: `0x374026A48D777CB0FFdCCdB9a919c0Aa7cE8a0fc`,
				description: `Genesis DAO's own token`
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			daotalk: 'https://daotalk.org/c/daos/genesis',
			discord: '',
		},
		documents: [
			{
				title: "Whitepaper",
				url: 'https://daostack.io/wp/DAOstack-White-Paper-en.pdf'
			},
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		]
	},
	{
		id: 9,
		title: 'PolkaDAO',
		subtitle: 'Funding community projects in Polkadot',
		status: 'active',
		audits: [],
		image: 'polkadot.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: ' PolkaDAO is a user-led platform for the Polkadot community, offering funding for projects and ideas that would otherwise not get built.',
		website: `https://alchemy.daostack.io/dao/0x440583455bcd85ab2bd429c015d3aabcae135f0a`,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0x440583455bcd85ab2bd429c015d3aabcae135f0a`,
				description: `The main PolkaDAO contract.`
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			daotalk: "https://daotalk.org/c/daos/polkadao",
			discord: 'EuqreF4',
		},
		articles: [
			{
				title: `Announcing PolkaDAO: Fund Your Project!`,
				url: `https://polkadot.network/announcing-polkadao-fund-your-project/`
			}
		],
		documents: [,
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		]
	},
	{
		id: 10,
		title: 'CuraDAO',
		subtitle: 'Community DAO in Curaçao.',
		status: 'active',
		audits: [],
		image: 'curadao.png',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'Introducing, CuraDAO, the first ever DAO in the Caribbean. Cura referring to the beautiful island of Curaçao and DAO stands for, Decentralized Autonomous Organization. The project will be run as a pilot for the duration of 6 months, mainly to test out what this new form of organization could mean for Curaçao.',
		website: `https://alchemy.daostack.io/dao/0x0b93ba560283350d4216f29dc57e15df38d0eace`,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0x0b93ba560283350d4216f29dc57e15df38d0eace`,
				description: `The main CuraDAO contract`
			}
		],
		social: {
			github: '',
			twitter: 'Cura_DAO',
			medium: 'https://medium.com/caribbean-blockchain-network',
			telegram: '',
			reddit: '',
			daotalk: 'https://daotalk.org/c/daos/curacao',
			discord: '',
			youtube: 'https://www.youtube.com/channel/UCAx2VzjvbTffPrH2RvlDqNg'
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		]
	},
	{
		id: 11,
		title: 'efxDAO',
		subtitle: 'Meritocratic funding for Ethfinex community',
		status: 'active',
		audits: [],
		image: 'ethfinex.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'A collaboration between Ethfinex and DAOstack to create an experimental funding DAO. Using the Alchemy interface and governance protocol, the efxDAO has been allocated a trial budget of $5,000 and initially tasked with making meritocratic funding decisions for Ethfinex Trustless and Nectar initiatives.',
		website: `https://alchemy.daostack.io/dao/0x3324b516df92e78463d8b0616dd146cf6c58b0b9`,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0x3324b516df92e78463d8b0616dd146cf6c58b0b9`,
				description: `The main efxDAO contract`
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `Ethfinex Launches Funding DAO`,
				url: `https://blog.ethfinex.com/ethfinex-launches-funding-dao/`
			}
		],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		]
	},
	{
		id: 12,
		title: 'Liberland DAO',
		subtitle: 'Decentralized Autonomous Government',
		status: 'active',
		audits: [],
		image: 'liberland.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: '',
		website: `https://liberland.org/en/`,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0x5c309e9b2134d931b7337abcfbe2a50ff31292f7`,
				description: `Main Liberland DAO contract`
			}
		],
		social: {
			github: 'https://github.com/liberland/liberland',
			twitter: 'Liberland_org',
			medium: '',
			telegram: 'https://t.me/liberlanders',
			reddit: 'Liberland',
			discord: '2tKVhss',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		]
	},
	{
		id: 13,
		title: 'Prague DAO',
		subtitle: 'The first incubator governed by the community',
		status: 'active',
		audits: [],
		image: 'praguedao.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'The PragueDAO is the first example of a DAO powered by DAOstack used to govern a physical space, and aspires to be the incubator of choice for decentralized tech startups in Prague.',
		website: `https://praguedao.com/`,
		contractProof: ``,
		contracts: [],
		social: {
			github: '',
			twitter: 'praguedao',
			medium: '',
			telegram: 'https://t.me/DisruptDigital',
			reddit: '',
			daotalk: 'https://daotalk.org/c/daos/prague',
			discord: 'qXCxwSH',
		},
		articles: [
			{
				title: `Indroducing The PragueDAO`,
				url: `https://medium.com/daostack/introducing-the-praguedao-9930e6b3801`
			}
		],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		]
	},
	{
		id: 14,
		title: 'Quest Society',
		subtitle: 'Creating the mutual benefit societies of the future',
		status: 'active',
		audits: [],
		image: 'socialevolution.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'Social Evolution’s Quest Society is a self-governing benefit society for leaders in the decentralist movement.',
		website: `http://socialevolution.io/`,
		contractProof: ``,
		contracts: [],
		social: {
			github: '',
			twitter: 'socialevol',
			medium: 'https://medium.com/social-evolution',
			telegram: '',
			reddit: '',
			discord: '',
			email: 'hello@social-evolution.com'
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: "Whitepaper",
				url: 'https://drive.google.com/file/d/1u9gogbXcnAtivST_y7qhJFTL3cd1ZfOf/view?source=post_page---------------------------'
			},
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		]
	},
	{
		id: 15,
		title: 'KyberDAO Exp #2',
		subtitle: 'Kyber Protocol DAO',
		status: 'active',
		audits: [],
		image: 'kybernetwork.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'The second experiment from Kyber Network to run a DAO to help manage the protocol. It runs using Blockstack.',
		website: `https://alchemy.daostack.io/dao/0x6bee9b81e434f7afce72a43a4016719315069539`,
		contractProof: `https://twitter.com/KyberNetwork/status/1142068655758270465`,
		contracts: [
			{
				name: 'Avatar',
				address: `0x6bee9b81e434f7afce72a43a4016719315069539`,
				description: `Main KyberDAO contract`
			}
		],
		social: {
			github: 'https://github.com/kybernetwork',
			twitter: 'KyberNetwork',
			medium: 'https://blog.kyber.network/',
			telegram: 'https://t.me/joinchat/GS0ljBLOtCv_FlzFHYuPHg',
			reddit: 'kybernetwork',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		]
	},
	{
		id: 16,
		title: 'dHack',
		subtitle: 'Decentralized Hackathon',
		status: 'active',
		audits: [],
		image: 'dhack.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'dHack is a new type of hackathon: one that honors the values of decentralization, boosts the collective engagement of all stakeholders, and leverages the wisdom of the crowd. This decentralized hackathon (dHack) —is focused on funding continuity, allowing participating teams to continue work on their hackathon projects. The decision-making process will be stakeholder driven, incorporating sponsors, participants, worldwide spectators and community members to reach consensus as to which projects should receive such funding in continuity.',
		website: `https://www.dhack.io/`,
		contractProof: ``,
		contracts: [],
		articles: [
			{
				title: `Introducing dHack — A Decentralized Hackathon.`,
				url: `https://medium.com/daostack/introducing-dhack-a-decentralized-hackathon-e013f76821ca`
			}
		],
		social: {
			github: '',
			twitter: 'dHack0',
			medium: '',
			telegram: 'https://t.me/dHack0',
			reddit: '',
			discord: '',
		},
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		]
	},
	{
		id: 17,
		title: 'Psychedelic Society DAO',
		subtitle: 'Creating a more joyful world through psychedelics',
		status: 'active',
		audits: [],
		image: 'psychedelic_society.png',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'A DAO to manage part of the membership donations of the Psychedelic Society.',
		website: `https://psychedelicsociety.org.uk/`,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0x70c36947837b43665ed5ea85c112aa0f72cf9fb3`,
				description: `The main Psychedelic Society DAO contract`
			}
		],
		social: {
			github: '',
			twitter: 'PsychedelicsUK',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		]
	},
	{
		id: 18,
		title: 'CementDAO',
		subtitle: 'Stablecoin Registry',
		status: 'active',
		audits: [],
		image: 'cement.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'CementDAO brings together the stablecoin community to create one unified stablecoin ecosystem. Stable cryptocurrencies are needed for mass adoption. There are over 150+ different stablecoins, each with their own user base, leading to a fragmented ecosystem. CementDAO unifies the ecosystem by bringing these users together.',
		website: `https://www.cementdao.com/`,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0x33658686cbefe289b55814d0b3f3d45de6c50fd9`,
				description: `The main CementDAO contract`
			}
		],
		social: {
			github: '',
			twitter: 'CementDAO',
			medium: 'https://medium.com/cementdao',
			telegram: 'https://t.me/cementdao',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		]
	},
	{
		id: 19,
		title: 'dOrg',
		subtitle: 'Enabling Decentralized Organizations',
		status: 'active',
		audits: [],
		image: 'dorg.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'dOrg is a cooperative of freelancers building tools for distributed organizations',
		website: ``,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0xbe1a98d3452f6da6e0984589e545d4fc25af7526`,
				description: `The main contract for dOrg DAO.`
			}
		],
		social: {
			github: 'https://github.com/dOrgTech',
			twitter: 'dOrg_tech',
			medium: '',
			telegram: '',
			reddit: '',
			discord: 'Z5R4CcS',
		},
		articles: [
			{
				title: `dOrg Founders Have Created the First Limited Liability DAO`,
				url: `https://www.coindesk.com/dorg-founders-have-created-the-first-limited-liability-dao`
			}
		],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		]
	},
	{
		id: 20,
		title: 'DigixDAO',
		subtitle: '',
		audits: [
			{
				auditor: 'Chainsecurity',
				auditorWebsite: 'https://chainsecurity.com/',
				auditUrl: 'https://medium.com/chainsecurity/digix-audit-completed-f03c116daac1',
				auditDate: "18/12/2018"
			}
		],
		status: 'active',
		image: 'digixdao.png',
		description: 'DigixDAO aims to be a self-organising community on the Ethereum blockchain that actively involves its token holders in decision making and shaping the direction of the asset tokenisation business.',
		website: `https://digix.global/dgd/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [
			{
				name: 'Token',
				address: `0xe0b7927c4af23765cb51314a0e0521a9645f0e2a`,
				description: `The DGD token`
			}
		],
		social: {
			github: 'https://github.com/digixglobal',
			twitter: 'DigixDAO',
			medium: 'https://medium.com/digix',
			telegram: 'https://t.me/digixofficial',
			reddit: 'digix',
			youtube: 'https://www.youtube.com/digixglobal',
			discord: 'CCDBJJC',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: "Whitepaper",
				url: 'http://cryptochainuni.com/wp-content/uploads/Overview-of-DigixGlobal-DigixDAO.pdf'
			},
			{
				title: "Messari Report",
				url: "https://messari.github.io/research/profiles/DigixDAO(DGD).pdf"
			}
		]
	},
	{
		id: 21,
		title: 'RECDAO',
		subtitle: 'Reddit Ethereum Community DAO',
		status: 'inactive',
		audits: [],
		image: 'placeholder.jpg',
		description: `RECDAO is an effort to develop Ethereum based tools for improving how we use Reddit. One of those tools, the RECDAO Curator, has been in experimental operation on r/ethtrader for the past few weeks. It's purpose is to explore the use of prediction markets to curate content.`,
		website: `http://curator.recdao.org/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [],
		social: {
			github: 'https://github.com/recdao',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: 'recdao',
			discord: '',
		},
		articles: [
			{
				title: `RECDAO Curator explained`,
				url: `https://www.reddit.com/r/ethtrader/comments/89o4ju/recdao_curator_explained/`
			},
			{
				title: `RecDAO: When decentralisation isn't the answer`,
				url: `https://flatoutcrypto.com/home/recdao`
			},
			{
				title: `Prediction markets for content curation DAOs`,
				url: `https://ethresear.ch/t/prediction-markets-for-content-curation-daos/1312`
			}
		],
		documents: []
	},
	{
		id: 22,
		title: 'KittyDAO',
		subtitle: '',
		audits: [],
		status: 'active',
		image: 'cryptokitties.jpg',
		description: '',
		website: ``,
		contractProof: `https://twitter.com/pet3rpan_/status/1149073342852243456`,
		blockchain: 'Ethereum',
		framework: 'Moloch Fork',
		contracts: [
			{
				name: 'KittyDAO',
				address: `0x669286d447e3c18c9d1ec2cc24bdebda381b95ff`,
				description: `Main KittyDAO contract`
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 23,
		title: 'KyodoDAO',
		subtitle: '',
		audits: [],
		status: 'prelaunch',
		image: 'decent_fund.jpg',
		description: `Kyodo is Ethereum blockchain based web app, the cross-platform incentive tool for building the crypto economy for DAO based on Impression revenue model. We build Kyodo to run Decent.Fund. As an organizational structure, it's defined as Adhocracy. As governance, it has two models Democracy and Meritocracy.`,
		website: `http://decent.fund/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Colony',
		contracts: [],
		social: {
			github: '',
			twitter: '',
			medium: 'https://medium.com/decentfund',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `Kyodo — “You decide your own level of involvement”`,
				url: `https://medium.com/decentfund/kyodo-you-decide-your-own-level-of-involvement-385515ef03a7`
			}
		],
		documents: []
	},
	{
		id: 24,
		title: 'Aragon Network',
		subtitle: 'Freedom to organize',
		mailingList: 'https://one.us15.list-manage.com/subscribe?u=a590aa3843a54b079d48e6e18&id=e81a44c4bd',
		status: 'active',
		audits: [
			{
				auditor: 'WhiteHat Group',
				auditorWebsite: 'https://addreth.space/address/whitehats.eth',
				auditUrl: 'https://wiki.aragon.org/documentation/audits/audit_whg01_report/',
				auditDate: "22/06/2018"
			},
			{
				auditor: 'Adam Dossa',
				auditorWebsite: 'https://github.com/adamdossa',
				auditUrl: 'https://wiki.aragon.org/documentation/audits/audit01_report_dossa/',
				auditDate: "2017"
			}
		],
		image: 'aragon.jpg',
		description: 'Aragon empowers you to freely organize and collaborate without borders or intermediaries. Create global, bureaucracy-free organizations, companies, and communities.',
		website: `https://aragon.org/network`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [],
		social: {
			github: 'https://github.com/aragon/',
			twitter: 'AragonProject',
			medium: 'https://medium.com/aragondec',
			telegram: '',
			reddit: 'aragonproject',
			rocketchat: 'https://aragon.chat/home',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: 'Whitepaper',
				url: 'https://github.com/aragon/whitepaper'
			},
			{
				title: 'Aragon Manifesto',
				url: 'https://blog.aragon.org/the-aragon-manifesto-4a21212eac03/'
			}
		]
	},
	{
		id: 25,
		title: 'Nest DAO',
		subtitle: 'DAO to manage the Aragon Nest grants',
		status: 'prelaunch',
		audits: [],
		image: 'aragon.jpg',
		description: 'The Nest DAO is an initiative by the Aragon Association to give the community more power to manage the Nest grant program. Nest grants are distributed to people and projects working on improving the Aragon ecosystem.',
		website: `https://aragon.org/project/grants`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
			youtube: 'https://www.youtube.com/channel/UCODiU_-FWhr4SVOoBlm-qaQ',
			discourse: 'https://forum.aragon.org/'
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: "Whitepaper",
				url: 'https://github.com/aragon/nest/blob/master/Nest%20DAO%20Governance/Nest%20DAO%20specification%20at%202019-11-07.md#membership-for-the-nest-dao'
			}
		]
	},
	{
		id: 26,
		title: 'RewardDAC',
		subtitle: '',
		status: '',
		image: 'giveth.png',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: 'Offchain',
		framework: 'Custom',
		contracts: [],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `How RewardDAO Works`,
				url: `https://medium.com/giveth/how-rewarddao-works-aka-what-are-points-7388f70269a`
			}
		],
		documents: []
	},
	{
		id: 27,
		title: 'Unicorn DAO',
		subtitle: '',
		status: '',
		image: 'giveth.png',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: 'Offchain',
		framework: 'Custom',
		contracts: [],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `The Unicorn DAC, a non-hierarchical decentralized governance experiment`,
				url: `https://medium.com/giveth/the-unicorndac-a-non-hierarchical-decentralized-governance-experiment-8dfbe6e98d19`
			}
		],
		documents: []
	},
	{
		id: 28,
		title: 'Giveth DAC',
		subtitle: '',
		status: '',
		image: 'giveth.png',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: 'Offchain',
		framework: 'Custom',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 29,
		title: 'DAO Incubator',
		subtitle: 'Engineer. Design. Incubate. The future of human governance',
		status: 'active',
		image: 'daoincubator.jpg',
		description: 'The DAOincubator is a group of builders, researchers, designers and specialists dedicated to making today’s DAOs more functional and deploying these entities in the service of previously unexplored use cases. ',
		website: `http://daoincubator.org/`,
		contractProof: ``,
		blockchain: 'Offchain',
		framework: 'Custom',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: 'DAOincubator',
			medium: 'https://medium.com/dao-incubator',
			telegram: 'https://t.me/DAOincubator',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 30,
		title: 'Trojan DAO',
		subtitle: '',
		status: 'research',
		image: 'trojandao.png',
		description: `A network of artists & developers, co-creating a new cultural economy through blockchain from the ground-up. Starting from Athens, Greece. The TrojanDAO will manage a Community Fund. Trojan Foundation members can vote on how to spend this money: issuing of bounties and, mostly, grants to support art projects. Smart contracts will enable participating projects to manage funding, income distribution, and project governance rights. The goal is to use art value chains to feed a self-sustaining, democratically governed ecosystem for the remuneration of creative labor as a commons.‌`,
		website: `http://c-a-s-athens.squarespace.com/`,
		contractProof: `https://twitter.com/TrojanDAO/status/1153420222348562433`,
		blockchain: 'Ethereum',
		framework: 'Moloch Fork',
		contracts: [
			{
				name: 'TrojanDAO',
				address: `0x5bf9553c1d797b41f05a4b6b423c7fb1ec9f820f`,
				description: `Main DAO contract`
			},
			{
				name: 'TrojanBank',
				address: `0xc416810990007a8cbaa9570661a860a909ea1dd7`,
				description: 'Holds funds'
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: 'TrojanDAO',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 31,
		title: 'TheTradingHall',
		subtitle: 'Portfolio Management',
		status: 'research',
		image: 'placeholder.jpg',
		description: '‌Asset allocation by community voting‌',
		website: ``,
		contractProof: ``,
		team: ['https://www.linkedin.com/in/agaboury'],
		blockchain: 'Ethereum',
		framework: 'Aragon OS',
		contracts: [
			{
				name: 'Org Address',
				address: `0x0ee165029b09d91a54687041Adbc705F6376C67F`,
				description: `Identifies the organization`
			}
		],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 32,
		title: 'Video DAO',
		subtitle: 'Manage Transcoder Livepeer Node',
		status: '',
		image: 'placeholder.jpg',
		description: 'To manage the Staking and running of a Transcoder on the Livepeer network‌',
		website: `https://mainnet.aragon.org/#/video/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Aragon OS',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 33,
		title: 'NowHerePlastik',
		subtitle: '',
		status: 'PoC',
		image: 'nowhereplastik.jpg',
		description: 'Converting plastic into resource through a circular economy model and increase crypto adoption‌',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 34,
		title: 'Bundlesblock DAO',
		subtitle: 'Representing the German blockchain industry',
		status: 'research',
		image: 'placeholder.jpg',
		description: `Representing the German blockchain industry, Bundesblock educates decision-makers in politics, industry and the general public. Its 24 working groups cover topics such as 'legal', 'sandboxing', 'governance' as well as a variety of use cases, such as 'finance', 'insurance' and 'energy'. Bundesblock seeks a tool allow its 20+ working groups to elect a speaker, vote in/out members and vote on positions.‌`,
		website: ``,
		contractProof: ``,
		blockchain: 'Offchain',
		framework: 'None',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 35,
		title: 'SmartMachine',
		subtitle: 'An open smart contracts market owned by the community.‌',
		status: 'active',
		image: 'placeholder.jpg',
		description: 'All system will be governed by the DAO, including the code and the git repo. Acceptance of smart modules to be sold on the market by external devs and companies is dependent on DAO voting. All % and everything else is dependent on DAO voting. The election/firing of the board of admins too.Fund distribution by community voting etc. etc.‌',
		website: ``,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 36,
		title: 'Betoken',
		subtitle: 'Crowd-powered crypto assets management protocol',
		status: '',
		image: 'betoken.png',
		description: 'Making optimal investment decisions for a decentralized hedge fund. Investment decisions are made by a community of managers, each of whom owns Kairo tokens (non-transferrable) denominating the percentage of total funds they can manage. Making profits increases one’s Kairo balance, and making losses decreases it, resulting in a meritocratic Kairo distribution over time. Managers receive a monthly commission based on their Kairo balance, so they’re incentivized to make better investments. Managers may initiate a protocol upgrade via voting with Kairo, and at the same time electing the dev team responsible for protocol maintenance & development. The dev team receives monthly funding from the hedge fund’s AUM.',
		website: `https://betoken.fund/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: 'https://github.com/Betoken/',
			twitter: 'betokenfund',
			medium: 'https://medium.com/betoken',
			telegram: 'https://t.me/betokenfund',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: "Whitepaper",
				url: "https://github.com/Betoken/Whitepaper/blob/master/BetokenWhitepaper.pdf"
			},
			{
				title: "Pitch Deck",
				url: "https://docs.google.com/presentation/d/1CvVZRCSsal1SJyb4IT3slR4D52A94G35xcDZSSrtFa8/edit#slide=id.p"
			}
		]
	},
	{
		id: 37,
		title: 'Personal Tokens',
		subtitle: 'Tokenize all people',
		status: 'active',
		image: 'personaltokens.jpg',
		description: 'A network of artists & developers, co-creating a new cultural economy through blockchain from the ground-up. Starting from Athens, Greece',
		website: `https://www.personaltokens.io/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: '-',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: 'PersonalTokens',
			medium: '',
			steemit: 'https://steemit.com/@personaltokens',
			telegram: 'https://web.telegram.org/#/im?p=@personaltokens',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 38,
		title: 'Audacity',
		subtitle: 'Democratise founding',
		status: 'PoC',
		image: 'audacity.png',
		description: 'Audacity makes it easy to operate a decentralized company, manage resources, allocate equity and raise capital.',
		website: `https://audacity.id/`,
		contractProof: ``,
		blockchain: 'Offchain',
		framework: 'Custom',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 39,
		title: 'bkDAO',
		subtitle: '',
		status: '',
		image: 'bkdao.png',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `bkDAO: Self-Funding Brooklyn’s Civic Orgs`,
				url: `https://medium.com/@orishim/bkdao-self-funding-brooklyns-civic-orgs-7d57a164254f`
			}
		],
		documents: []
	},
	{
		id: 40,
		title: 'Blockdam',
		subtitle: '',
		status: '',
		image: 'blockdam.jpg',
		description: '',
		website: `https://alchemy.daostack.io/dao/0x0004a4c02f97a2cdab3628ac4b834ce4c14f5cf7`,
		contractProof: `https://twitter.com/MatanField/status/1132536859349921792`,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: 'How to MemeDAO',
				url: 'https://docs.google.com/document/d/1iJZfjmOK1eZHq-flmVF_44dZWNsN-Z2KAeLqW3pLQo8/edit'
			}
		]
	},
	{
		id: 41,
		title: 'memeDAO',
		subtitle: '',
		status: '',
		image: 'placeholder.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 42,
		title: 'bitfwd Blockathon',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 43,
		title: 'The DMO',
		subtitle: 'Decentralized Marketing Organization',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 44,
		title: 'General Store DAO',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 45,
		title: 'Research DAO',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 46,
		title: 'GrammarDAO',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 47,
		title: 'WorkersDAO',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 48,
		title: 'Greta DAO',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 49,
		title: 'Because of the Internet DAO',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 50,
		title: 'District0x',
		subtitle: '',
		status: '',
		image: 'district0x',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		mailingList: 'https://sourcerers.us14.list-manage.com/subscribe?u=6531cd004e712d76e07f04ca9&id=104ce689d2',
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: 'Whitepaper',
				url: 'https://district0x.io/docs/district0x-whitepaper.pdf'
			}
		]
	},
	{
		id: 51,
		title: 'Meme Factory',
		tags: ['TCR', 'ERC721'],
		subtitle: 'Create and trade provably rare digital assets',
		status: 'active',
		image: 'memefactory.jpg',
		description: 'Meme Factory users submit original memes to a community run list generally known as a token curated registry, and specifically known as the Dank Registry. Token holders of a newly minted token, the DANK token, then decide which memes are added to the registry through an economically incentivized voting game. Although DANK is an ERC20 token standard and therefore interchangeable, the actual memes themselves are ERC721 standard, more commonly referred to as Non-Fungible tokens (NFTs). This allows for unique identification, ownership, and provable rarity for every meme created on the Meme Factory platform.',
		website: `https://memefactory.io/`,
		assetsGoverned: 'Registry content and the registry itself',
		centralizationPoints: 'None',
		decentralizationLevel: 'Fully Decentralized',
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'district0x',
		contracts: [
			{
				name: 'DANK Token',
				address: `0x0cb8d0b37c7487b11d57f1f33defa2b1d3cfccfe`,
				description: `The contract for the DANK token.`
			},
			{
				name: 'MEME Token',
				address: `0xd23043ce917ac39309f49dba82f264994d3ade76`,
				description: `ERC721 token storing memes`
			},
			{
				name: 'MemeFactory',
				address: `-`,
				description: '-'
			},
			{
				name: 'ParamChange Factory',
				address: `-`,
				description: '-'
			}
		],
		audits: [],
		social: {
			github: 'https://github.com/district0x/memefactory',
			twitter: 'MemeFactory0x',
			medium: '',
			telegram: 'district0x',
			reddit: 'meme_factory',
			discord: 'rJvBEyV',
		},
		articles: [
			{
				title: `Introducing Meme Factory`,
				url: `https://blog.district0x.io/introducing-meme-factory-4aba7925dcdd`
			}
		],
		faucets: [
			'https://memefactory.io/get-dank'
		],
		documents: [
				{
					title: 'district0x Whitepaper',
					url: 'https://district0x.io/docs/district0x-whitepaper.pdf'
				}
		]
	},
	{
		id: 52,
		title: 'Name Bazaar',
		subtitle: 'P2P marketplace to exchange names registered via ENS',
		status: '',
		image: 'namebazaar.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: 'NameBazaar0x',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: 'district0x Whitepaper',
				url: 'https://district0x.io/docs/district0x-whitepaper.pdf'
			}
		]
	},
	{
		id: 53,
		title: 'Kipos',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 54,
		title: '1Hive',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 55,
		title: 'blankdao',
		subtitle: '',
		status: '',
		image: '',
		description: 'Aragon One is a Swiss company formed by the founders of the Aragon Project',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 56,
		title: 'Aragon One',
		subtitle: '',
		status: '',
		image: 'aragonone.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: 'AragonOneTeam',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 57,
		title: 'Aragon DAC',
		subtitle: '',
		status: '',
		image: 'aragon_dac.jpg',
		description: 'Aragon DAC is the 2nd team working on the Aragon Project. Empowering Freedom. Building Human Collaboration, focusing on devX. ',
		website: `http://aragondac.org/`,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 58,
		title: 'Ocean Protocol',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 59,
		title: 'LegalBlock',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 60,
		title: 'Ethlance',
		subtitle: '',
		status: '',
		image: 'ethlance.jpg',
		description: 'Ethlance is the first job market platform built entirely on the Ethereum blockchain. Free to use forever! The original district on the district0x Network.',
		website: `https://ethlance.com/`,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: 'ethlance',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
				{
					title: 'district0x Whitepaper',
					url: 'https://district0x.io/docs/district0x-whitepaper.pdf'
				}
		]
	},
	{
		id: 61,
		title: 'Status',
		subtitle: '',
		status: '',
		image: 'status.jpg',
		description: 'Building an open source, secure & private messenger, crypto wallet, and web3 browser.',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: 'ethstatus',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 62,
		title: 'Space Decentral',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 63,
		title: 'Melon',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 64,
		title: 'Althea.org DAOs',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 65,
		title: 'Open ESQ',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 66,
		title: 'Pool Together',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 67,
		title: 'Request Network',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 68,
		title: 'Decentraland',
		subtitle: '',
		status: '',
		image: 'decentraland.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 69,
		title: 'Red Light District',
		subtitle: '',
		status: '',
		image: 'red_light_district.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 70,
		title: 'Autark',
		subtitle: '',
		status: '',
		image: 'autark.jpg',
		description: 'We are interested in advancing civilization, with a special focus on DAOs, Aragon, worker-autonomy, and tools to enable open source development of mega-projects',
		website: `https://www.autark.xyz/`,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: 'autarklabs',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
	{
		id: 71,
		title: 'Aragon Black',
		subtitle: '',
		status: '',
		image: 'aragonblack.png',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: 'AragonBlackTeam',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},

	{
		id: 72,
		title: 'Adchain',
		subtitle: '',
		tags: ['TCR'],
		status: '',
		image: 'adchain.png',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: 'ad_chain',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
]

/*
	{
		id: 0,
		title: '',
		subtitle: '',
		status: '',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '',
		framework: '',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			},
			{
				name: '',
				address: ``,
				description: ''
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: []
	},
*/
