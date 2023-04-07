import React, {useState, useEffect, useRef} from 'react'
import styles from './heroafter.css'

const Heroafter = (props) =>{

	return(

		<h5 className={styles.section_subtitle}>{props.subtitle}</h5>

	)
}

export default Heroafter