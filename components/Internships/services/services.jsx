import React, {useState, useEffect, useRef} from 'react'
// import './services.css'


const Services = () =>{

	return(

		<>

			<div className='container mt-100'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='service-text'>
							Some of the companies we've <span className='sp-2'>partnered</span> with
						</div>
						<div>
							We have a collection of fortune 500 companies who use our platform to engage interns
						</div>
					</div>
				</div>
			</div>



			<div className='container mt-50'>
				<div className='row justify-content-center'>

					<div className='col-lg-3 flex-h-new2 px-5 cards'>
						<div>
							<div className=' w-12 p-2'>
								<img src='https://img.etimg.com/thumb/msid-59738992,width-150,resizemode-4,imgsize-25499/amazon.jpg' />
							</div>	
						</div>

						<div>
							<div className='w-12 p-2'>
								<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chevron_Logo.svg/100px-Chevron_Logo.svg.png' />
							</div>	
						</div>

						<div>
							<div className='w-12 p-2'>
								<img src='https://download.logo.wine/logo/ExxonMobil/ExxonMobil-Logo.wine.png' width='200px' />
							</div>	
						</div>

						<div>
							<div className='w-12 p-2'>
								<img src='https://brandcom.ng/wp-content/uploads/2020/11/Glo-Logo.jpg' width='100px' />
							</div>	
						</div>

						{/*<div>
							<button className='secondarybtn mr-5 rounded'>
								Get Started
							</button>
							<button className='primarybtn text-white rounded'>
								Sign Up
							</button>
						</div>*/}
					</div>

					<div className='col-lg-3 flex-h-new2 px-5 cards'>
						<div>
							<div className=' w-12 p-2'>
								<img src='https://cdn.vox-cdn.com/thumbor/5wOzvBvHf59hg_QZwLe-9u0yrXk=/0x0:1422x796/1400x788/filters:focal(711x398:712x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/15485158/Screen_Shot_2015-09-02_at_2.20.55_pm.0.0.1441228862.png' width='200px' />
							</div>	
						</div>

						<div>
							<div className='w-12 p-2'>
								<img src='https://pharmchoices.com/wp-content/uploads/2022/03/jpg_20220314_181311_0000.jpg' width='220px' />
							</div>	
						</div>

						<div>
							<div className='w-12 p-2'>
								<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/PZ_Cussons_logo.svg/100px-PZ_Cussons_logo.svg.png' />
							</div>	
						</div>

						<div>
							<div className='w-12 p-2'>
								<img src='https://cdn.corporate.walmart.com/dims4/WMT/71169a3/2147483647/strip/true/crop/2389x930+0+0/resize/980x381!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fd6%2Fe7%2F48e91bac4a8ca8f22985b3682370%2Fwalmart-logos-lockupwtag-horiz-blu-rgb.png' width='200px' />
							</div>	
						</div>

					</div>

				<div className='col-lg-3 flex-h-new2 px-5 cards'>
						<div>
							<div className=' w-12 p-2'>
								<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png' width='200px' />
							</div>	
						</div>

						<div>
							<div className='w-12 p-2'>
								<img src='https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png' width='150px' />
							</div>	
						</div>

						<div>
							<div className='w-12 p-2'>
								<img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/2016px-Huawei_Standard_logo.svg.png' width='100px' />
							</div>	
						</div>

						<div>
							<div className='w-12 p-2'>
								<img src='https://upload.wikimedia.org/wikipedia/commons/8/83/HashiCorp_Logo.png' width='200px' />
							</div>	
						</div>

					</div>

					<div className='col-lg-3 flex-v-new servicesimg cards'>
						<img src='/images/apk1.png' />
					</div>
				</div>
			</div>

		</>
	)
}

export default Services