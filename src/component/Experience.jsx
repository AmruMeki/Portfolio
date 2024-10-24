import React from 'react'
import html from '../assets/asset/html.png'
import css from '../assets/asset/css.png'
import graph from '../assets/asset/graph.png'
import js from '../assets/asset/js.png'
import tailwind from '../assets/asset/tailwind (2).png'
import git from '../assets/asset/git hub1.jpg'
import react from '../assets/asset/react.png'

const Experience = () => {
	const techs=[
		{
			id:1,
			src:html,
			title:'HTML',
			style:'shadow-orange-500'
		},
		{
			id:2,
			src:css,
			title:'CSS',
			style:'shadow-blue-500'
			
		},
		{
			id:3,
			src:js,
			title:'JavaScript',
			style:'shadow-yellow-500'
		},
		{
			id:4,
			src:react,
			title:'React',
			style:'shadow-blue-600'
		},
		{
			id:5,
			src:tailwind,
			title:'Tailwind',
			style:'shadow-sky-500'
		},
		
		{
			id:6,
			src:git,
			title:'GitHub',
			style:'shadow-gray-400'
		},
	]
	return (
		<div id='experience' className=' bg-gradient-to-b from-gray-800 to-black '>
			<div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
				<div >
					<p className='text-4xl font-bold block  p-2  '>Experience</p>
					<p className='py-6'>These  are  the  technologies  i've  worked  with </p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px:0'>
					{
						techs.map(({id,src,title,style})=>(
              <div  key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
						<img src={src} alt="" height={300} width={300} className='w-20 mx-auto'/>
						<p>{title}</p>
					</div>
						))
					}
					
				</div>
			</div>
		</div>
	)
}

export default Experience