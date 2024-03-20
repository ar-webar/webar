import React from 'react'
import styles from './partners.module.scss'
import ClmnOne from '../Icons/ClmnOne'
import ClmnTwo from '../Icons/ClmnTwo'
const data = {
    paragraph: 'Сотрудничество которым гордимся',
    title: 'Наши партнёры',
    subtitleFirst: 'Белорусский государственный архив кинофотофонодокументов',
    subtitleSecond: 'Центральная библиотека имени Янки Купалы',
}

const Partners = () => {
  return (
    <div className={styles.partners}>
        <p className={styles.paragraph}>{data.paragraph}</p>
        <h2 className={styles.h2}>{data.title}</h2>
        <div className={styles.columns}>
            <div className={styles.clmn}>
                <ClmnOne/>
                <p>{data.subtitleFirst}</p>
            </div>
            <div className={styles.clmn}>
                <ClmnTwo/>
                <p>{data.subtitleSecond}</p>
            </div>
        </div>
    </div>
  )
}

export default Partners
