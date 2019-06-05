import React from 'react'

export default ({ title, subtitle, buttonText, buttonLink }) => (
	<div className="jumbotron jumbotron-fluid bg-white mb-0">
		<div className="container">
		  <h1 className="display-4">{title}</h1>
		  <p className="lead">{subtitle}</p>
			<a className="btn btn-primary btn-lg" href={buttonLink} role="button">{buttonText}</a>
		</div>
	</div>
)




