import React, {useState, useEffect, useRef} from 'react'
import {notify} from '../../../notify'
// import './newsletter.css'


const Newsletter = () =>{


	const [form, setForm] = useState({

		mail: ''
	})

	function onSubmit(e){

		e.preventDefault()	

		const formdata = new FormData()

		formdata.append('email', form.email)

		fetch('http://localhost/apokton/newsletter.php', {method: 'POST', body: formdata})
			.then(e => e.json())
			.then((type, data) => notify({
				type: 'error',
				message: 'Thanks for signing up. Check your mail daily for latest informations and updates'
			}))
			// console.log(form)
			document.querySelector('#form').reset()

	}

	


	


	return(

		<>

			<form className='' method='POST' onSubmit={onSubmit} id='form'>
				<div className='container pb-5 mt-100'>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className='newsletter-bg rounded'>
								<div className='newsletter-text'>
									Subscribe to our newsletter
								</div>

								<div className='newsletter-mintext'>
									Stay updated on our latest news. We promote only valuable mails and we will not spam you with irrelevant contents.
								</div>

								<div className='input-bg w-85'>
									<div className='w-100'>
										<input type='email' placeholder='Enter email here...' className='p-3 mt-1 rounded d-block w-90' onChange={(e) => {setForm({...form, email: e.target.value})}} value={form.email} required name='email' />
									</div>
									<div>
										<button className='subbtn rounded-lg' type='submit'>
											Subscribe
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>

		</>
	)
}


export default Newsletter