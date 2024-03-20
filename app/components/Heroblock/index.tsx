'use client'
import React, { useState } from 'react'
import styles from './heroblock.module.scss'
import Phone1 from '../Icons/PhoneImage'
import Phone2 from '../Icons/PhoneVideo'
import Qr from './Qr'
import Video from '../Icons/Video'
import ModalForm from '../ModalForm/ModalForm'


const data = {
    title: 'Разработка дополненной реальности для вашего бизнеса и не только',
    subtitleFirst: 'Без необходимости установки сторонних приложений.',
    subtitleSecond: 'Проектирование стендов, выставок, дизайнерские разработки всех видов сложности, осуществляем рекламную деятельность, маркетинг и разработку ПО',
    btn_consult: {
        name: 'Заказать консультацию'
    },
    phone1: <Phone1 />,
    phone2: <Phone2 />,
    qr: <Qr />,
    btn_qr: {
        name: 'Наведите на QR код'
    },
    video: <Video />
}

const Heroblock = () => {
    const [modalOpen, setModalOpen] = useState(false)
    
    return (
        <div>
            <div className={styles.heroblock}>
                <div className={styles.leftBlock}>
                    <h1 className={styles.h1}>{data.title}</h1>
                    <p className={styles.p1}>{data.subtitleFirst}</p>
                    <p className={styles.p2}>{data.subtitleSecond}</p>
                    <button className={styles.btnConsult} onClick={() => setModalOpen(!modalOpen)}>
                        <span>{data.btn_consult.name}</span></button>
                </div>
                <div className={styles.modalForm} >
                    {modalOpen && (<ModalForm modal={setModalOpen} />)}
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.phones}>
                        <div className={styles.phone1}>{data.phone1}
                            <div className={styles.background}>
                                <div className={styles.blockQr}>
                                    <div className={styles.image}>
                                        <div className={styles.qr}>{data.qr}</div>
                                    </div>
                                    <button className={styles.btnQr}>{data.btn_qr.name}</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.phone2}>{data.phone2}
                            <div className={styles.video}>{data.video}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heroblock