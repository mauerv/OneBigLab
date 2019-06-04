import React from 'react'

export default ({title, children}) => (
	<div className='row border-top border-bottom pt-4 pb-3'>
		<h3 className='col-12'>{title}</h3>
		<p className='col-12'>{children}</p>
	</div>
)