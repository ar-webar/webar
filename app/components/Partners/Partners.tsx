import React from 'react'
import styles from './partners.module.scss'
import clmnOne from '../Icons/ClmnOne'
const data = {
    paragraph: 'Сотрудничество которым гордимся',
    title: 'Наши партнёры'
}


const Partners = () => {
  return (
    <div className={styles.partners}>
        <p className={styles.paragraph}>{data.paragraph}</p>
        <h2 className={styles.h2}>{data.title}</h2>
        <div className={styles.columns}>
            <div className={styles.clmn}></div>
        </div>
    </div>
  )
}

export default Partners