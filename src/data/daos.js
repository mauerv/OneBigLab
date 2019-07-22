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
		github: `https://github.com/MolochVentures`,
		twitter: `MolochDAO`,
		medium: 'molochdao',
		documents: {
			whitepaper: 'https://github.com/MolochVentures/Whitepaper/blob/master/Whitepaper.pdf'
		}
	},
	{
		id: 1,
		title: 'HumanityDAO',
		subtitle: 'Humanity is a global identity network.',
		status: 'active',
		image: 'humanity.png',
		blockchain: 'Ethereum',
		framework: 'Custom',
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
		subtitle: 'Transparent and sustainable finance',
		status: 'active',
		image: 'maker.jpg',
		description: 'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
		website: `https://makerdao.com/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
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
			whitepaper: 'https://makerdao.com/whitepaper/'
		}
	},
	{
		id: 3,
		title: 'NexusMutual',
		subtitle: 'A people-powered alternative to insurance',
		status: 'active',
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
		github: `https://github.com/somish/NexusMutual`,
		twitter: `nexusmutual`,
		medium: 'nexus-mutual',
		documents: {
			whitepaper: 'https://www.nexusmutual.io/assets/docs/nmx_white_paperv2_3.pdf'
		}
	},
	{
		id: 4,
		title: 'Kleros',
		subtitle: 'The Blockchain Dispute Resolution Layer',
		status: 'active',
		image: 'kleros.jpg',
		blockchain: 'Ethereum',
		framework: 'Custom',
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
		subtitle: 'Ethereum’s grassroot dapp alliance',
		status: 'active',
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
		github: `https://github.com/metacartel`,
		twitter: `meta_cartel`,
		medium: 'metacartel',
		forum: 'https://forum.metacartel.org/',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 6,
		title: 'YangDAO',
		subtitle: `DAO to help Andrew Yang's 2020 election campaign`,
		status: 'active',
		image: 'yangdao.jpg',
		blockchain: 'Ethereum',
		framework: 'Moloch Fork',
		description: `A place where members secure the collective bag 💰 to fund initiatives to foster Andrew Yang's presidential campaign.`,
		website: `https://www.yangdao.org/`,
		contractProof: `https://twitter.com/YangDAOofficial/status/1148721427836575744`,
		contracts: [
			{
				name: 'DAO contract',
				address: `0x240D1B4ab4463fEb22EcB3bdC43F4BD316513728`,
				description: 'The main contract for the DAO'
			}
		],
		github: ``,
		twitter: `yangdaoofficial`,
		medium: 'yangdao',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 7,
		title: 'dxDAO',
		subtitle: 'Managing DutchX exchange protocol',
		status: 'active',
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
				description: 'Holographic Consensus voting machine for voting on proposals	'
			}
		],
		github: ``,
		twitter: ``,
		medium: '',
		telegramGroup: 'https://t.me/dxDAO',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 8,
		title: 'GenesisDAO',
		subtitle: `DAOstack's native DAO`,
		status: 'active',
		image: 'genesis.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: `Genesis is an independent, global community of people working together to build and promote Decentralized Autonomous Organizations (DAOs). It is the first of a growing number of DAOs built on the DAO stack.`,
		website: `https://daostack.io/genesis`,
		contractProof: ``,
		contracts: [
			{
				name: 'Token',
				address: `0x543ff227f64aa17ea132bf9886cab5db55dcaddf`,
				description: `Genesis DAO's own token`
			}
		],
		github: ``,
		twitter: ``,
		medium: '',
		documents: {
			whitepaper: 'https://daostack.io/wp/DAOstack-White-Paper-en.pdf'
		}
	},
	{
		id: 9,
		title: 'PolkaDAO',
		subtitle: 'Funding community projects in Polkadot',
		status: 'active',
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
		articles: [
			{
				title: `Announcing PolkaDAO: Fund Your Project!`,
				url: `https://polkadot.network/announcing-polkadao-fund-your-project/`
			}
		],
		github: ``,
		twitter: ``,
		medium: '',
		discord: 'https://discordapp.com/invite/EuqreF4?source=post_page---------------------------',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 10,
		title: 'CuraDAO',
		subtitle: 'Community DAO in Curaçao.',
		status: 'active',
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
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		github: ``,
		twitter: `Cura_DAO`,
		medium: 'caribbean-blockchain-network',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 11,
		title: 'efxDAO',
		subtitle: 'Meritocratic funding for Ethfinex community',
		status: 'active',
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
		articles: [
			{
				title: `Ethfinex Launches Funding DAO`,
				url: `https://blog.ethfinex.com/ethfinex-launches-funding-dao/`
			}
		],
		github: ``,
		twitter: ``,
		medium: '',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 12,
		title: 'Liberland DAO',
		subtitle: 'Decentralized Autonomous Government',
		status: 'active',
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
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		github: ``,
		twitter: ``,
		discord: 'https://discordapp.com/invite/2tKVhss',
		medium: '',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 13,
		title: 'Prague DAO',
		subtitle: 'The first incubator governed by the community',
		status: 'active',
		image: 'praguedao.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'The PragueDAO is the first example of a DAO powered by DAOstack used to govern a physical space, and aspires to be the incubator of choice for decentralized tech startups in Prague.',
		website: `https://praguedao.com/`,
		contractProof: ``,
		contracts: [],
		articles: [
			{
				title: `Indroducing The PragueDAO`,
				url: `https://medium.com/daostack/introducing-the-praguedao-9930e6b3801`
			}
		],
		github: ``,
		twitter: `praguedao`,
		discord: 'https://discordapp.com/invite/qXCxwSH',
		medium: '',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 14,
		title: 'Quest Society',
		subtitle: 'Creating the mutual benefit societies of the future',
		status: 'active',
		image: 'socialevolution.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'Social Evolution’s Quest Society is a self-governing benefit society for leaders in the decentralist movement.',
		website: `http://socialevolution.io/`,
		contractProof: ``,
		contracts: [],
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		github: ``,
		twitter: `socialevol`,
		medium: 'social-evolution',
		documents: {
			whitepaper: 'https://drive.google.com/file/d/1u9gogbXcnAtivST_y7qhJFTL3cd1ZfOf/view?source=post_page---------------------------'
		}
	},
	{
		id: 15,
		title: 'KyberDAO Exp #2',
		subtitle: 'Kyber Protocol DAO',
		status: 'active',
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
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		github: ``,
		twitter: ``,
		medium: '',
		telegram: 'https://t.me/joinchat/GS0ljBLOtCv_FlzFHYuPHg',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 16,
		title: 'dHack',
		subtitle: 'Decentralized Hackathon',
		status: 'active',
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
		github: ``,
		twitter: `dHack0`,
		medium: '',
		telegram: 'https://t.me/dHack0',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 17,
		title: 'Psychedelic Society DAO',
		subtitle: 'Creating a more joyful world through psychedelics',
		status: 'active',
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
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		github: ``,
		twitter: `PsychedelicsUK`,
		medium: '',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 18,
		title: 'CementDAO',
		subtitle: 'Unifying Stablecoins',
		status: 'active',
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
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		github: ``,
		twitter: `CementDAO`,
		medium: 'cementdao',
		telegram: 'https://t.me/cementdao',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 19,
		title: 'dOrg',
		subtitle: 'Enabling Decentralized Organizations',
		status: 'active',
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
		articles: [
			{
				title: `dOrg Founders Have Created the First Limited Liability DAO`,
				url: `https://www.coindesk.com/dorg-founders-have-created-the-first-limited-liability-dao`
			}
		],
		github: `https://github.com/dOrgTech`,
		twitter: `dOrg_tech`,
		medium: '',
		discord: 'https://discordapp.com/invite/Z5R4CcS',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 20,
		title: 'DigixDAO',
		subtitle: '',
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
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		github: `https://github.com/digixglobal`,
		twitter: `DigixDAO`,
		medium: 'digix',
		telegram: 'https://t.me/digixofficial',
		reddit: 'digix',
		youtube: 'https://www.youtube.com/digixglobal',
		discord: 'https://discordapp.com/invite/CCDBJJC',
		forum: '',
		documents: {
			whitepaper: 'http://cryptochainuni.com/wp-content/uploads/Overview-of-DigixGlobal-DigixDAO.pdf'
		}
	},
	{
		id: 21,
		title: 'RECDAO',
		subtitle: 'Reddit Ethereum Community DAO',
		status: 'active',
		status: 'inactive',
		image: 'placeholder.jpg',
		description: `RECDAO is an effort to develop Ethereum based tools for improving how we use Reddit. One of those tools, the RECDAO Curator, has been in experimental operation on r/ethtrader for the past few weeks. It's purpose is to explore the use of prediction markets to curate content.`,
		website: `http://curator.recdao.org/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [],
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
		github: `https://github.com/recdao`,
		twitter: ``,
		medium: '',
		telegram: '',
		youtube: '',
		discord: '',
		reddit: 'recdao',
		forum: '',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 22,
		title: 'KittyDAO',
		subtitle: '',
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
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		github: ``,
		twitter: ``,
		medium: '',
		telegram: '',
		discord: '',
		youtube: '',
		reddit: '',
		forum: '',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 23,
		title: 'KyodoDAO',
		subtitle: '',
		status: 'prelaunch',
		image: 'decent_fund.jpg',
		description: `Kyodo is Ethereum blockchain based web app, the cross-platform incentive tool for building the crypto economy for DAO based on Impression revenue model. We build Kyodo to run Decent.Fund. As an organizational structure, it's defined as Adhocracy. As governance, it has two models Democracy and Meritocracy.`,
		website: `http://decent.fund/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Colony',
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
		articles: [
			{
				title: `Kyodo — “You decide your own level of involvement”`,
				url: `https://medium.com/decentfund/kyodo-you-decide-your-own-level-of-involvement-385515ef03a7`
			}
		],
		github: ``,
		twitter: ``,
		medium: 'decentfund',
		telegram: '',
		youtube: '',
		discord: '',
		reddit: '',
		forum: '',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 24,
		title: 'Aragon',
		subtitle: 'Freedom to organize',
		status: 'active',
		image: 'aragon.jpg',
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
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		github: ``,
		twitter: ``,
		medium: '',
		telegram: '',
		youtube: '',
		discord: '',
		reddit: '',
		forum: '',
		documents: {
			whitepaper: ''
		}
	},
	{
		id: 25,
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
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		github: ``,
		twitter: ``,
		medium: '',
		telegram: '',
		youtube: '',
		discord: '',
		reddit: '',
		forum: '',
		documents: {
			whitepaper: ''
		}
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
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		github: ``,
		twitter: ``,
		medium: '',
		telegram: '',
		youtube: '',
		discord: '',
		reddit: '',
		forum: '',
		documents: {
			whitepaper: ''
		}
	},
*/
