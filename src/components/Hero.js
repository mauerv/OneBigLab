import React from 'react'
import { Link } from 'react-router-dom'

export default ({ title, subtitle, buttonText, buttonLink }) => (
	<div className="jumbotron jumbotron-fluid bg-white mb-0 text-center">
		<div className="container">
		  <h1 className="display-4">{title}</h1>
		  <p className="lead">{subtitle}</p>
		  <Link to={buttonLink} className="btn btn-primary btn-lg">{buttonText}</Link>
		</div>
	</div>
)




