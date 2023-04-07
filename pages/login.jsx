import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Login.module.css'


const Login = () =>{

	return(

		<>

			<form id='form' method='POST'>				
				<div className={`${styles.main}`}>

					<div className={`${styles.back}`}>
						<a href='/'>Back</a>
					</div>

					<img src='/images/crb55.png' />

					<div className={`${styles.maintext} text-center`}>
						Enter your registered email and password
					</div>

					<div className={`${styles.buttons} mt-3`}>

						<input type='email' placeholder='Enter email' className='p-3  rounded d-block'  name='email'/>

						<input type='password' placeholder='Enter password' className='p-3  rounded d-block mt-3' name='password'/>

						<button className='loginbtn p-3 mt-3' type='submit'>
							<a href='/home'>
								Log in
							</a>
						</button>
					</div>

					<div className={`${styles.forgot}`}>
						<a href='/authentication'>Forgot Password?</a>

						<a href='/signup'>Sign Up</a>
					</div>
				</div>
			</form>

		</>

	)


}

export default Login

