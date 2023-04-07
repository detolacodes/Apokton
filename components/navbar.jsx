import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Navbar.module.css'

const NAV_LINK = [
	
	{
		path:'/',
		display: 'Home'
	},
	{
		path:'/internships',
		display:'Internships'
	},
	{
		path:'/resumebuilder',
		display:'Resume Builder'
	},
	// {
	// 	path:'/blog',
	// 	display:'Blog'
	// },
	{
		path:'/about',
		display:'About Us'
	},	

]


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
					<img src='/images/apk-crd-logo.png' width='150px' />
				</div>

				<div className='flex-4 flex-h-new9 links sm-none'>
					{
						NAV_LINK.map((item,index)=>(

							<div className=''>
								<a href={item.path} key={index} className='pr-25 pl-25'>{item.display}</a>
							</div>
						))
					}
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
						<img src='/images/apk-crdbg-logo.png' width='120px' onClick={closeMenu} />
					</div>

					<div>
						<i className='bi-x text-white fa-2x d-md-none' onClick={closeMenu}></i>
					</div>
				</div>

				<div className='py-4 px-3'>
					{
						NAV_LINK.map((item,index)=>(

							<div className='my-5'>
								<a href={item.path} key={index} className=''>{item.display}</a>
							</div>
						))
					}
				</div>

				<div className='flex-h-new1'>
					<button className='mobbtn ml-3 rounded text-white'>
						<a href=''>
							Log in
						</a>
					</button>
				</div>
			</div>

		{/*the mobile navbar ends here*/}

		</>
	)

}


export default Navbar