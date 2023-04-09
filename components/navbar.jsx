import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Navbar.module.css'




const Navbar = () =>{

	const [sidebar, setSidebar] = useState(false);
	const openMenu = () => setSidebar(!sidebar);
	const closeMenu = () => setSidebar(!sidebar);



	const headerRef = useRef(null)
	const menuRef = useRef(null)
	const [icon, setIcon] = useState(false)

	

	const headerFunc = () =>{
		if(document.documentElement.scrollTop > 80){
			headerRef.current.classList.add(`${styles.header_shrink}`)
		}
		else{
			headerRef.current.classList.remove(`${styles.header_shrink}`)	
		}
	}

	useEffect(() =>{

		window.addEventListener('scroll', headerFunc)

		return () => window.removeEventListener('scroll', headerFunc)

	}, [])

	return(

		<>

			{/*the desktop navbar starts here*/}

			<div className='navbar' ref={headerRef}>

				<div className='logo'>
					<img src='/images/apk-crd-logo.PNG' width='150px' />
				</div>

				<div className='flex-4 flex-h-new9 links sm-none'>

					<div className='curp pr-35 pl-35'>
						<a href='/'>
							Home
						</a>
					</div>

					<div className='curp pr-35 pl-35'>
						<a href='/internships'>
							Internships
						</a>
					</div>

					<div className='curp pr-35 pl-35'>
						<a href='/resumebuilder'>
							Resume Builder
						</a>
					</div>

					<div className='curp pr-35 pl-35'>
						<a href='/about'>
							About Us
						</a>
					</div>
				</div>

				<div className='flex-h-new1 buttons sm-none'>
					<button className='secondarybtn ml-4 rounded'>
						<a href='/signup'>
							Sign Up
						</a>
					</button>
				</div>

				<div className=''>
					<i className={sidebar ? '' : 'bi-filter-right text-dark fa-2x d-md-none'} onClick={openMenu}></i>
				</div>
			</div>

		{/*the desktop navbar ends here*/}


		{/*the mobile navbar starts here*/}

			<div className={sidebar ? 'mobbg slideInRight zindex' : 'd-none'}>

				<div className='flex-h-new6 px-3 py-4'>
					<div>
						<img src='/images/apk-crdbg-logo.PNG' width='120px' onClick={closeMenu} />
					</div>

					<div>
						<i className='bi-x text-white fa-2x d-md-none' onClick={closeMenu}></i>
					</div>
				</div>

				<div className='py-4 px-3'>
					<div className='curp my-5'>
						<a href='/'>
							Home
						</a>
					</div>

					<div className='curp my-5'>
						<a href='/internships'>
							Internships
						</a>
					</div>

					<div className='curp my-5'>
						<a href='/resumebuilder'>
							Resume Builder
						</a>
					</div>


					<div className='curp my-5'>
						<a href='/about'>
							About Us
						</a>
					</div>
				</div>

				<div className='flex-h-new1'>
					<button className='mobbtn ml-3 rounded text-white'>
						<a href='/signup'>
							Sign Up
						</a>
					</button>
				</div>
			</div>

		{/*the mobile navbar ends here*/}

		</>
	)

}


export default Navbar
