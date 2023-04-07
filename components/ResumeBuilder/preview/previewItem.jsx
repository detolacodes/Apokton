import React, {useState, useEffect, useRef} from 'react'
// import './preview.css'
import PreviewData from './previewData'


const Previewitem = (props) =>{

	const {title, img, img2, id, category, button, desc} = props.item

	return(


		<>

			<div className='container-fluid mt-100 w-100'>
				<div className='row'>
					<div className='col-lg-6'>
						<div className='flex-h-new9'>
							<div className='preview-img'>
								<img src={img} />
							</div>

							<div className='preview-img2'>
								<img src={img2} />
							</div>
						</div>
					</div>

					<div className='col-lg-6'>
						<div className='preview-title'>
							{title}
						</div>
						<div className='preview-mintext mt-20'>
							{desc}
						</div>
						<button className='preview-btn'>
							{button}
						</button>
					</div>
				</div>
			</div>

		</>
	)
}


export default Previewitem