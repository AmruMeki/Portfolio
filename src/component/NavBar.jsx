import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link, animateScroll as scroll } from 'react-scroll';


const NavBar = () => {

	const[nav,setnav]=useState(false);

	const links=[
		{	
		id: 1,
			link: 'home'

		},
		{
			id: 2,
			link:'about'

		},
		{
			id: 3,
			link:'portfolio'

		},
		{
			id:4,
			link: 'experience'

		},
		{
			id:5,
			link: 'contact'

		}]
	
	return (
		<div className=' flex justify-between items-center w-full h-19 px-4 text-white bg-black fixed '>
			<div>
			<h1 className='text-5xl font-signature ml-2 '>amru .</h1>
			</div>
			<ul className='hidden md:flex'>
				{links.map(({id,link}) =>(
					<li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:underline decoration-orange-600 duration-100 '>
					 <Link to={link} smooth={true} duration={500} >{link}</Link>
					</li>
				))}
				
			</ul>
			<div onClick={()=>setnav(!nav)}
			className=' cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
       {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			 
			</div>
			{nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>
				{links.map(({id,link}) =>(
						<li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
						 {link}
						</li>
					))}
				
				</ul>
			 )}
			
		</div>
	);
}

export default NavBar
