'use client'
import React from 'react'
import styles from './modalForm.module.scss';
import BurgerClose from '../Icons/BurgerClose';
import Contact from '../ContactBlock/Contact';


type PropsType = {
    modal: any
}
const ModalForm = ({ modal }: PropsType) => {
    return (
        <div className={styles.container}>
            <div className={styles.btnClose} onClick={() => { modal(false) }}>
                <BurgerClose />
            </div>
            <Contact />
        </div>
    )
}

export default ModalForm
