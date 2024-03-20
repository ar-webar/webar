'use client'
import styles from './design.module.scss';
import React, { useState } from 'react';
import Compatibility from '../components/Icons/IconsAdvantages/Compatibility';
import Universal from '../components/Icons/IconsAdvantages/Universal';
import Analytics from '../components/Icons/IconsAdvantages/Analytics';
import Applications from '../components/Icons/IconsAdvantages/Applications';
import Education from '../components/Icons/IconsAdvantages/Education';
import Ar from '../components/Icons/IconsAdvantages/Ar';
import ModalForm from '../components/ModalForm/ModalForm';



const DesignSites = () => {
    const [consultOpen, setConsultOpen] = useState(false)

    const data = [
        {
            picture: [
                { img: '/sites/izo2.jpg' },
                { img: '/sites/izo4.jpg' },
                { img: '/sites/izo3.jpg' },
                { img: '/sites/izo.jpg' },
            ],
            btn_consult: {
                name: 'Заказать консультацию'
            },
            section_1: {
                title: 'Искусство разработки дизайна для вашего сайта',
                subTitle: 'Дизайн веб-сайта -',
                text: 'это не просто оформление, это ключевой элемент успешного веб-проекта, который отражает бренд, привлекает внимание и обеспечивает удобство пользователей. Мы предлагаем не просто создание дизайна, а настоящее искусство, которое преобразит ваш веб-проект и сделает его неповторимым.',
                text_2: 'Дизайн сайта является первым впечатлением, которое вы делаете на ваших посетителей. Он должен быть привлекательным, информативным и легким для восприятия. Хороший дизайн способствует установлению доверия, повышению конверсии и улучшению пользовательского опыта.'
            },
            section_2: {
                title: 'Преимущества наших дизайнеров:',
                adv: [
                    {
                        img: <Ar />,
                        subTitle: "Дополненная реальность (AR)",
                        text: "При разработке дизайна сайта, мы бесплатно предоставим вам  уникальный маркетинговый инструмент, который поможет выделиться в условиях рыночной конкуренции и стать лидеров в своей нише, вне зависимости от направления вашего бизнеса!"
                    },
                    {
                        img: <Compatibility />,
                        subTitle: "Индивидуальный дизайн",
                        text: "Мы не используем шаблонные решения. Каждый проект начинается с понимания вашего бренда, целей и целевой аудитории. Мы создаем дизайн, который соответствует вашей уникальности и подчеркивает ваш стиль.",
                    },
                    {
                        img: <Analytics />,
                        subTitle: "Исследование и планирование",
                        text: "Прежде чем приступить к дизайну, мы проводим тщательное исследование рынка, конкурентов и предпочтений вашей аудитории. Это позволяет нам создать стратегию дизайна, которая будет эффективной и целенаправленной.",
                    },
                    {
                        img: <Universal />,
                        subTitle: "Визуальная идентичность",
                        text: "Мы разрабатываем не только красивый дизайн, но и целостную визуальную идентичность вашего бренда. Это включает в себя выбор цветовой схемы, шрифтов, графических элементов и логотипа, которые будут соответствовать вашему бренду и создавать единый стиль на всех платформах.",
                    },
                    {
                        img: <Education />,
                        subTitle: "Тестирование и оптимизация",
                        text: "Мы не останавливаемся на создании дизайна. Мы проводим тестирование пользовательского опыта и постоянно оптимизируем дизайн, чтобы гарантировать его эффективность и соответствие вашим целям.",
                    },
                    {
                        img: <Applications />,
                        subTitle: "Мобильная адаптация",
                        text: "Мы понимаем важность мобильного трафика, поэтому все наши дизайны адаптированы для мобильных устройств. Мы уделяем особое внимание удобству использования на разных экранах, чтобы ваш сайт оставался доступным и функциональным для всех пользователей.",
                    },
                ],
            },
            subTitle: 'Дизайн вашего сайта - это ключевой элемент его успеха. Специалисты нашей компании готовы помочь вам создать дизайн, который будет отражать вашу уникальность, привлекать внимание и повышать конверсию. Доверьте нам ваш дизайн и дайте вашему сайту новую жизнь в онлайн-пространстве!',
        }
    ]

    return (
        <div className={styles.content}>
            {data.map(el =>
                <div className={styles.lending} key={el.btn_consult.name}>
                    <div className={styles.block}>
                        <div className={styles.section_1}>
                            <h1>{el.section_1.title}</h1>
                            <div className={styles.photo}>
                                {el.picture.map(photo =>
                                    <img src={photo.img} alt='дизайн' key={photo.img} />)}
                            </div>
                            <p>
                                <span>{el.section_1.subTitle}</span>
                                {el.section_1.text}
                            </p>
                            <div className={styles.description}>{el.section_1.text_2}</div>
                            <div className={styles.description}>{el.subTitle}</div>
                            <button className={styles.btnConsult} onClick={() => setConsultOpen(!consultOpen)}>
                                <span>{el.btn_consult.name}</span></button>
                        </div>
                        <div className={styles.modalForm} >
                            {consultOpen && (<ModalForm modal={setConsultOpen} />)}
                        </div>
                        <div className={styles.section_2}>
                            <h1>{el.section_2.title}</h1>
                            <div className={styles.adv}>
                                {el.section_2.adv.map(adv =>
                                    <div className={styles.block} key={adv.subTitle}>
                                        <div className={styles.icon}>{adv.img}</div>
                                        <h3>{adv.subTitle}</h3>
                                        <p>{adv.text}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default DesignSites