import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Dao from './Dao'
import ContractGrid from './ContractGrid'
import SocialIcons from '../SocialIcons'
import TagGroup from '../Tags/TagGroup'
import AuditList from './AuditList'
import daos from '../../data/daos'

export default ({ match }) => {
	const dao = daos[match.params.id]
	return (
		<MDBContainer>
			<MDBRow className='text-center mb-3 pb-3 border-bottom'>
				<MDBCol className='col-6 col-md-2 offset-3 offset-md-5'>
					<img src={`../${dao.image}`} className='img-thumbnail' />
				</MDBCol>
				<MDBCol className='col-12'>
					<h1 className='mb-0'>{dao.title}</h1>
					<a href={dao.website} target='__blank'>{dao.website}</a>
				</MDBCol>
				<MDBCol className='col-12 mt-1'>
					<p className='pt-3'>{dao.description}</p>
				</MDBCol>
				<MDBCol>
					<SocialIcons social={dao.social}/>
				</MDBCol>
			</MDBRow>
			<TagGroup
				blockchain={dao.blockchain}
				framework={dao.framework}
				status={dao.status}
			/>
			<ContractGrid contracts={dao.contracts} contractProof={dao.contractProof}/>
			<AuditList audits={dao.audits}/>
		</MDBContainer>
	)
}
