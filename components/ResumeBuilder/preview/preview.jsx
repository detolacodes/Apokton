import React, {useState, useEffect, useRef} from 'react'
import styles from  '../../../styles/Preview.module.css'
import PreviewData from './previewData'
import Previewitem from './previewItem'


const Preview = () =>{


	const [filter, setFilter] = useState('Resume Builder');
	const [data, setData] = useState()

	const showPreview = () =>{

		if(filter == 'Resume Builder'){
			const filteredData = PreviewData.filter(item => item.category == filter)
			setData(filteredData)
		}

		if(filter == 'Resume Templates'){
			const filteredData = PreviewData.filter(item => item.category == filter)
			setData(filteredData)
		}

		if(filter == 'Resume Examples'){
			const filteredData = PreviewData.filter(item => item.category == filter)
			setData(filteredData)
		}
	}

	const active = 'previews-active'

	useEffect(() =>{

		showPreview()

	}, [filter])

	return(

		<>

			<div className='container-fluid mt-100 mb-30'>
				<div className='row previews-row justify-content-center'>
					<div className={`${styles.preview_titlehead}`}>
						<div className={`${styles.preview_head} curp `}>
							<div className={`${filter == 'Resume Builder' ? active : 'previews' } `} onClick={() => setFilter('Resume Builder')}>
								<div className='big-text text-center'>
									Resume Builder
								</div>
								<div className='small-text text-center'>
									Create an eye-catching resume
								</div>
							</div>
						</div>

						<div className={`${styles.preview_head} curp `}>
							<div className={`${filter == 'Resume Templates' ? active : 'previews' } `} onClick={() => setFilter('Resume Templates')}>
								<div className='big-text text-center'>
									Resume Templates
								</div>
								<div className='small-text text-center'>
									Designed specifically for you
								</div>
							</div>
						</div>

						<div className={`${styles.preview_head} curp `}>
							<div className={`${filter == 'Resume Examples' ? active : 'previews' } `} onClick={() => setFilter('Resume Examples')}>
								<div className='big-text text-center'>
									Resume Examples
								</div>
								<div className='small-text text-center'>
									Follow useful fro experts
								</div>
							</div>
						</div>
					</div>

					{

						data ?.map(item=>(

							<div className='col-lg-12 col-md-6 col-sm-8 col-10' key={item.id}>
								<Previewitem item={item} />
							</div>

						))

					}
				</div>
			</div>


		</>

	)
}

export default Preview