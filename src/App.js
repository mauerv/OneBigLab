import React from 'react'

import Feature from './Feature'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'

function App() {
  return (
    <div className='App'>
    	<div className='content'>
    		<Navbar />
				<Hero 
					title='The Home For DAOs'
					subtitle='Blocktech allows for the creation of DAOs, we are building a place where you can learn all about them. Data, stats, mission, etc.'
					buttonText='Explore DAOs'
					buttonLink='#'
				/>
				<div className='container'>
					<Feature
						title='What is a DAO?'
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, 
						vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
						Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
						Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in 
						tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. 
					</Feature>
					<Feature
						title='Can I start one?'
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, 
						vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
						Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
						Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in 
						tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. 
					</Feature>
					<div className='row border-top border-bottom pt-4 pb-3'>
						<h3 className='col-12 pl-0'>Featured DAOs</h3>
						<a className="btn btn-primary" href="#" role="button">Moloch DAO</a>
					</div>
				</div>
			</div>
			<Footer />
    </div>
  );
}

export default App;
