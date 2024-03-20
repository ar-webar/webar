'use client'

import { useState } from "react"
import BurgerMob from "../Icons/BurgerMob"
import BurgerClose from "../Icons/BurgerClose"
import styles from './header.module.scss';

const BurgerBtn = () => {
	const [state, setState] = useState(true)
	const clickButton = () => {
		setState(!state)
	}
	return (
		<div className={styles.burgerMob} onClick={clickButton} >{state ? <BurgerMob /> : <BurgerClose />}</div>
	)
}

export default BurgerBtn