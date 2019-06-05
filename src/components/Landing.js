import React from 'react'

import Hero from './Hero'
import Feature from './Feature'

import { Link } from 'react-router-dom'

import * as ROUTES from '../constants/routes'

export default () => (
	<div>
		<Hero 
			title='The Home For DAOs'
			subtitle='Blocktech allows for the creation of DAOs, we are building a place where you can learn all about them. Data, stats, mission, etc.'
			buttonText='Explore DAOs'
			buttonLink={ROUTES.DAOS}
		/>
		<div className='container'>

			<div className='border-top border-bottom pt-4 pb-3'>
				<h3>What is a DAO</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, 
					vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
					Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
					Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in 
					tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. 
				</p>
			</div>
			<div className='border-top border-bottom pt-4 pb-3'>
				<h3>Can I start one?</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, 
					vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
					Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
					Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in 
					tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. 					
				</p>
				<Link to={ROUTES.CREATE_INFO} className='btn btn-primary'>Start One</Link>
			</div>
			<div className='row border-top border-bottom pt-4 pb-3'>
				<h3 className='col-12'>Featured DAOs</h3>
				<div className='col-12'>
					<Link to={ROUTES.MOLOCH} className='btn btn-primary'>Moloch</Link>
					<Link to={ROUTES.HUMANITYDAO} className='btn btn-primary ml-3'>Humanity DAO</Link>
				</div>
			</div>
		</div>
	</div>
)
