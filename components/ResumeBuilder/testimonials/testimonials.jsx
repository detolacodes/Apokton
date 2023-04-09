import React, {useState, useEffect, useRef} from 'react'
// import './testimonials.css'




const Testimonials = () =>{

	return(

		<>

			<div className='container mt-100'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='testimonial-intro'>
							Loved & used by individuals across the globe.
						</div>
					</div>
				</div>
			</div>

			<div className='container mt-50 mb-50'>
				<div className='row testimonial justify-content-center p-0 m-0'>
					<div className='col-lg-3 col-md-6 col-sm-8 col-10 mx-0 my-5'>
						<div className='my-card rounded-sm pl-3 py-5'>
							<div>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
							</div>
							<div className='mt-5 pr-4'>
								Apokton makes being a jobseeker or recruiter 10x more easier, numerous tools that helps put you in pole position to hire and be hired by the best are readily at your disposal.
							</div>
							<div className='mt-5 text-center desci'>
								<img src='/images/knt5.png' />
								<div className='name ml-2'>
									Anton Illidevic

									<div className='loc text-l'>
										Turba, Estonia
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-3 col-md-6 col-sm-8 col-10 mx-0 my-5'>
						<div className='shadow-sm card card-hover rounded-sm pl-3 py-5'>
							<div>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
							</div>
							<div className='mt-5 pr-4'>
								Apokton makes being a jobseeker or recruiter 10x more easier, numerous tools that helps put you in pole position to hire and be hired by the best are readily at your disposal.
							</div>
							<div className='mt-5 text-center desci'>
								<img src='/images/knt6.png' />
								<div className='name ml-2'>
									Spencer Logan

									<div className='loc text-l'>
										California, USA
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-3 col-md-6 col-sm-8 col-10 mx-0 my-5'>
						<div className='shadow-sm card card-hover rounded-sm pl-3 py-5'>
							<div>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
							</div>
							<div className='mt-5 pr-4'>
								Apokton makes being a jobseeker or recruiter 10x more easier, numerous tools that helps put you in pole position to hire and be hired by the best are readily at your disposal.
							</div>
							<div className='mt-5 text-center desci'>
								<img src='/images/knt5.png' />
								<div className='name ml-2'>
									Anita Bokkai

									<div className='loc text-l'>
										Kigali, Rwanda
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-3 col-md-6 col-sm-8 col-10 mx-0 my-5'>
						<div className='shadow-sm card card-hover rounded-sm pl-3 py-5'>
							<div>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
								<i className='bi-star-fill icons'></i>
							</div>
							<div className='mt-5 pr-4'>
								Apokton makes being a jobseeker or recruiter 10x more easier, numerous tools that helps put you in pole position to hire and be hired by the best are readily at your disposal.
							</div>
							<div className='mt-5 text-center desci'>
								<img src='/images/knt4.png' />
								<div className='name ml-2'>
									Kim Dae Woon

									<div className='loc text-l'>
										Seoul, South Korea
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='extra mt-4'>
					Give us a Call 0-8764-984-345 and we can set you up, or <a href=''>check our pricing plans</a>	
				</div>
			</div>

		</>

	)

}


export default Testimonials
