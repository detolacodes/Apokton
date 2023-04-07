import React, {useState, useEffect, useRef} from 'react'
// import styles from '../../../styles/Blog.module.css'


const Blog = () =>{

	return(

		<>

			<div className='container mt-100'>
				<div className='row justify-content-center text-center'>
					<div className='col-lg-12'>
						<div className='blog-text'>
							<span className='sp-4'>Konectin</span> Blog
						</div>
						<div>
							Career talks, tips and advice, articles around the employemnt world and so much more.
						</div>
					</div>
				</div>
			</div>


			<div className='container mt-50'>
				<div className='row justify-content-center'>
					<div className='col-lg-4 col-md-8 col-sm-8 col-8 my-2'>
						<div className='shadow-sm card card-hover rounded-sm my-2'>
							<div className='w-100 flex-h justify-content-center'>
								<img src='/images/knt6.png' width='100%' />
							</div>

							<div className='pl-20 blog-card-deet'>
								5 advantages of creating a well written cover letter
							</div>

							<div className='ml-20 flex-v-new2 mb-3'>
								<div className=''>
									<img src='/images/crb23.jpg' style={{width:25 + 'px', height:25 + 'px', borderRadius:100 + '%'}} />
								</div>
								<div className='ml-2'>
									Peter Obi
								</div>
								<div className='ml-2' style={{width:5 + 'px', height:5 + 'px', borderRadius:100 + '%', backgroundColor:'red'}}></div>
								<div className='ml-2'>
									June 2022
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-8 col-sm-8 col-8 my-2'>
						<div className='shadow-sm card card-hover rounded-sm my-2'>
							<div className='w-100 flex-h justify-content-center'>
								<img src='/images/apk6.png' width='71.6%' />
							</div>

							<div className='pl-20 blog-card-deet'>
								Check out these tips to help you with creative blocks
							</div>

							<div className='ml-20 flex-v-new2 mb-3'>
								<div className=''>
									<img src='/images/knt5.png' style={{width:25 + 'px', height:25 + 'px', borderRadius:100 + '%'}} />
								</div>
								<div className='ml-2'>
									Imran Ali
								</div>
								<div className='ml-2' style={{width:5 + 'px', height:5 + 'px', borderRadius:100 + '%', backgroundColor:'red'}}></div>
								<div className='ml-2'>
									June 2022
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-8 col-sm-8 col-8 my-2'>
						<div className='shadow-sm card card-hover rounded-sm my-2'>
							<div className='w-100 flex-h justify-content-center'>
								<img src='https://img.freepik.com/free-photo/fun-3d-illustration-cartoon-kid-with-vr-helmet_183364-81193.jpg?size=626&ext=jpg&ga=GA1.2.1386560400.1678927318&semt=ais' width='91%' />
							</div>

							<div className='pl-20 my-3 blog-card-deet'>
								10 ways to be prominent on LinkedIn
							</div>

							<div className='ml-20 flex-v-new2 mb-3'>
								<div className=''>
									<img src='/images/apk9.png' style={{width:25 + 'px', height:25 + 'px', borderRadius:100 + '%'}} />
								</div>
								<div className='ml-2'>
									Imran Ali
								</div>
								<div className='ml-2' style={{width:5 + 'px', height:5 + 'px', borderRadius:100 + '%', backgroundColor:'red'}}></div>
								<div className='ml-2'>
									June 2022
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='container mt-2'>
				<div className='row justify-content-center text-center'>
					<div className='col-lg-12'>
						<div className=''>
							<button className='secondarybtn rounded'>
								Learn More
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Blog