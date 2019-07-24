import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import ContractGrid from '../ContractGrid'
import SocialIcons from '../SocialIcons'
import TagGroup from '../Tags/TagGroup'
import AuditList from '../AuditList'
import DocumentGrid from '../DocumentGrid'

import daos from '../../data/daos'

export default ({ match }) => {
	const dao = daos[match.params.id]
	return (
		<MDBContainer>
			<MDBRow className='text-center pt-4 pb-4 border-bottom'>
				<MDBCol className='col-6 col-md-2 offset-3 offset-md-5'>
					<img src={`../${dao.image}`} alt='' className='img-thumbnail' />
				</MDBCol>
				<MDBCol className='col-12'>
					<h1 className='mb-0'>{dao.title}</h1>
					<a
						href={dao.website}
						target='_blank'
						rel="noopener noreferrer"
						className='break-words'
					>
						{dao.website}
					</a>
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
			<MDBRow>
				{dao.contractProof && (
		      <div className='col-12 pt-4 pb-4 border-bottom'>
		        <h3>Contract Proof</h3>
		        <a href={dao.contractProof} target='_blank' rel="noopener noreferrer" className='wrap-url'>{dao.contractProof}</a>
		      </div>
		    )}
			</MDBRow>
			<AuditList audits={dao.audits}/>
			<DocumentGrid documents={dao.documents}/>
		</MDBContainer>
	)
}
