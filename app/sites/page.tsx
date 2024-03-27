'use client'
import styles from './index.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import Compatibility from '../components/Icons/IconsAdvantages/Compatibility';
import Universal from '../components/Icons/IconsAdvantages/Universal';
import Analytics from '../components/Icons/IconsAdvantages/Analytics';
import Applications from '../components/Icons/IconsAdvantages/Applications';
import Education from '../components/Icons/IconsAdvantages/Education';
import ModalForm from '../components/ModalForm/ModalForm';
import Ar from '../components/Icons/IconsAdvantages/Ar';
import CorporativSites from './CorporativSites';
import DesignSites from './DesignSites';
import SeoSites from './SeoSites';
import ModelSites from './ModelSites';


const PageCreateSites = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const data = [
        {
            title: 'Создание продающих сайтов',
            picture: '/sites/ноут.jpg',
            btn_consult: {
                name: 'Заказать консультацию'
            },
            section_1: {
                title: 'Индивидуальные лендинги',
                subTitle: 'Лендинги - ',
                text: 'это одностраничные сайты, разработанные с целью привлечения внимания и убеждения посетителей выполнить определенное действие, будь то покупка продукта, подписка на рассылку или запрос на обратную связь. Лендинг - это визитная карточка любой компании, которая привлекает внимание и убеждает, становится вашими воротами в онлайн-мир.',
            },
            section_2: {
                title: 'Наши преимущества:',
                adv: [
                    {
                        img: <Ar />,
                        subTitle: "Дополненная реальность (AR)",
                        text: "При разработке сайта, мы бесплатно предоставим вам  уникальный маркетинговый инструмент, который поможет выделиться в условиях рыночной конкуренции и стать лидеров в своей нише, вне зависимости от направления вашего бизнеса!"
                    },
                    {
                        img: <Compatibility />,
                        subTitle: "Индивидуальный подход",
                        text: "Мы подходим к каждому проекту индивидуально, учитывая потребности и цели вашего бизнеса. Наша команда профессионалов создаст лендинг, который отражает уникальность вашего бренда.",
                    },
                    {
                        img: <Universal />,
                        subTitle: "Привлекательный дизайн",
                        text: "Мы убеждены, что визуальное привлечение - ключ к успешному лендингу. Мы создаем привлекательные, современные и удобные в использовании дизайны, которые запоминаются и убеждают посетителей оставаться на странице.",
                    },
                    {
                        img: <Education />,
                        subTitle: "Оптимизация под ключ",
                        text: "Наша команда не только разрабатывает стильные лендинги, но и заботится о их эффективности. Мы проводим тщательный анализ и оптимизацию контента и структуры, чтобы обеспечить максимальную конверсию.",
                    },
                    {
                        img: <Applications />,
                        subTitle: "Мобильная дружественность",
                        text: "Мы понимаем, что мобильные устройства играют ключевую роль в современном интернете. Поэтому все наши лендинги адаптированы для мобильных платформ, чтобы ваш бизнес мог достичь широкой аудитории.",
                    },
                    {
                        img: <Analytics />,
                        subTitle: "Результаты, а не просто страница",
                        text: "Мы стремимся не только создать красивые лендинги, но и достичь конкретных результатов для вашего бизнеса. Мы убеждены, что успешный лендинг - это тот, который приводит к действиям, и мы работаем для достижения этой цели.",
                    },
                ],
            },
            subTitle: 'Мы гордимся тем, что помогаем бизнесам выделиться в онлайн-пространстве с помощью наших индивидуальных лендингов. Доверьте нам создание вашего ключа к успеху в интернете!',
        }
    ]

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                {data.map(el =>
                    <div id='lending' className={styles.lending} key={el.title}>
                        <div className={styles.title}>{el.title}</div>
                        <div className={styles.block}>
                            <div className={styles.section_1}>
                                <img src={el.picture} alt='лендинг' className={styles.photo} />
                                <h1>{el.section_1.title}</h1>
                                <p>
                                    <span>{el.section_1.subTitle}</span>
                                    {el.section_1.text}
                                </p>
                                <div className={styles.description}>{el.subTitle}</div>
                                <button className={styles.btnConsult} onClick={() => setModalOpen(!modalOpen)}>
                                    <span>{el.btn_consult.name}</span></button>
                            </div>
                            <div className={styles.modalForm} >
                                {modalOpen && (<ModalForm modal={setModalOpen} />)}
                            </div>
                            <div className={styles.section_2}>
                                <h1>{el.section_2.title}</h1>
                                <div className={styles.adv}>
                                    {el.section_2.adv.map(adv =>
                                        <div className={styles.block} key={adv.subTitle}>
                                            <div className={styles.picture}>
                                                <div className={styles.icon}>{adv.img}</div>
                                            </div>
                                            <h3>{adv.subTitle}</h3>
                                            <p>{adv.text}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* <hr /> */}
                <CorporativSites />
                <DesignSites />
                <SeoSites />
                <ModelSites />
            </div>
            <Footer />
        </div>
    )
}

export default PageCreateSites
