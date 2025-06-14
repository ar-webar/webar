'use client'
import styles from './index.module.scss';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Interactive from '../components/Icons/ArtIcon/Interactive';
import Uniq from '../components/Icons/ArtIcon/Uniq';
import Education from '../components/Icons/ArtIcon/Education';
import Attention from '../components/Icons/ArtIcon/Attention';
import Innovacion from '../components/Icons/ArtIcon/Innovacion';
import ModalForm from '../components/ModalForm/ModalForm';

const Mural = () => {
    const [consultOpen, setConsultOpen] = useState(false)
    const data = {
        title: 'Муралы и фотообои с дополненной реальностью, "оживающая" роспись стен',
        description: '"Живые" фотообои и "оживающие" муралы представляют собой инновационный способ использования дополненной реальности для создания уникальных и захватывающих визуальных опытов, которые могут привлечь внимание и удивить пользователей. А также применение AR в муралах с социальной тематикой может не только привлечь внимание к важным проблемам, но и вдохновить людей на действие и участие в решении этих проблем.',
        btn_consult: {
            name: 'Заказать консультацию'
        },
        mural: {
            title: 'Оживающие муралы с дополненной реальностью - ',
            description: 'это удивительное сочетание искусства и технологии.',
            paragraf: 'Применение дополненной реальности (AR) в муралах с упором на социальную тематику может иметь значительное воздействие на общество и стимулировать обсуждение важных социальных вопросов. Муралы могут содержать скрытые AR элементы, которые раскрывают истории людей, столкнувшихся с социальными проблемами, такими как бездомность, насилие, неравенство и т.д. Пользователи могут сканировать мурал с помощью мобильного устройства и узнавать дополнительную информацию об истории, контексте и способах помощи.',
            photo: '/art/роспись4.jpg',
            alt: 'муралы с дополненной реальностью',
            advantages: {
                title: 'Преимущества муралов с приминением AR:',
                adv: [
                    {
                        icon: <Interactive />,
                        subTitle: 'Интерактивный опыт',
                        descrip: 'Оживающие муралы позволяют зрителям взаимодействовать с произведением и участвовать в его создании. Вы можете добавить свой след в искусстве, а это делает опыт более увлекательным и запоминающимся.',
                    },
                    {
                        icon: <Uniq />,
                        subTitle: 'Уникальность и динамичность',
                        descrip: 'Муралы с AR-эффектами меняются в зависимости от времени суток, погоды или даже движения зрителя. Это придает им уникальность и динамичность, которые обычные статичные муралы не могут предложить.',
                    },
                    {
                        icon: <Education />,
                        subTitle: 'Образовательный потенциал',
                        descrip: 'Оживающие муралы могут использоваться для образовательных целей. Например, они могут рассказывать истории, демонстрировать научные явления или даже помогать изучать иностранные языки.',
                    },
                    {
                        icon: <Attention />,
                        subTitle: 'Привлечение внимания',
                        descrip: 'Муралы с AR-эффектами привлекают внимание прохожих. Они становятся точкой притяжения и обсуждения, что способствует популяризации искусства и города.',
                    },
                    {
                        icon: <Innovacion />,
                        subTitle: 'Современность и инновации',
                        descrip: 'Оживающие муралы демонстрируют, что искусство может быть современным и инновационным. Они объединяют традиционные формы искусства с передовыми технологиями.',
                    },
                ]
            },
        },
        fotooboi: {
            title: 'Фотообои с дополненной реальностью - ',
            description: 'это удивительный способ преобразить ваш интерьер.',
            paragraf: 'Фотообои могут содержать скрытые элементы анимации, которые активируются при использовании мобильного приложения с поддержкой AR. Например, приложение может распознать определенные маркеры или области на фотообоях и запускать анимацию, такую как движение объектов, изменение цветов или появление визуальных эффектов.',
            photo: '/art/mural6.jpg',
            alt: 'фотообои с дополненной реальностью',
            advantages: {
                title: 'Преимущества фотообоев с дополненной реальностью:',

                adv: [
                    {
                        icon: <Interactive />,
                        subTitle: 'Интерактивность',
                        descrip: 'Фотообои с AR-эффектами позволяют вам взаимодействовать с изображением. Вы можете добавить анимацию, звуковые эффекты или даже видео к статичному фото. Это создает уникальный опыт для наблюдателей.',
                    },
                    {
                        icon: <Uniq />,
                        subTitle: 'Поддержка тематики',
                        descrip: 'Выбирая фотообои с AR, вы можете подчеркнуть определенную тему в комнате. Например, фотообои с дополненной реальностью могут превратить вашу стену в окно в другой мир, морское дно или даже в космос.',
                    },
                    {
                        icon: <Education />,
                        subTitle: 'Образовательный контент',
                        descrip: 'Фотообои с AR могут быть использованы в образовательных целях. Они могут рассказывать истории, демонстрировать научные явления или даже помогать изучать иностранные языки.',
                    },
                    {
                        icon: <Attention />,
                        subTitle: 'Привлекательность',
                        descrip: 'Фотообои с AR-эффектами привлекают внимание. Они становятся точкой фокуса в комнате и могут стать отличным разговорным предметом.',
                    },
                    {
                        icon: <Innovacion />,
                        subTitle: 'Инновации',
                        descrip: 'Использование дополненной реальности в дизайне интерьера — это современный и инновационный подход. Он позволяет вам выделиться и создать уникальное пространство.',
                    },
                ]
            },


        }
    }
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <h1>{data.title}</h1>
                <div className={styles.section}>
                    <img src={data.mural.photo} alt={data.mural.alt} />
                    <p>
                        <span>{data.mural.title}</span>
                        {data.mural.description}
                    </p>
                    <p>{data.mural.paragraf}</p>
                    <h2>{data.mural.advantages.title}</h2>
                    <div className={styles.adv}>
                        {data.mural.advantages.adv.map(el =>
                            <div className={styles.advBlock} key={el.subTitle}>
                                <div>{el.icon}</div>
                                <h3>{el.subTitle}</h3>
                                <p>{el.descrip}</p>
                            </div>)}
                    </div>
                </div>
                <div className={styles.section}>
                    <img src={data.fotooboi.photo} alt={data.fotooboi.alt} className={styles.photo} />
                    <p>
                        <span>{data.fotooboi.title}</span>
                        {data.fotooboi.description}
                    </p>
                    <p>{data.fotooboi.paragraf}</p>
                    <h2>{data.fotooboi.advantages.title}</h2>
                    <div className={styles.adv_2}>
                        {data.fotooboi.advantages.adv.map(el =>
                            <div className={styles.advBlock} key={el.subTitle}>
                                <div>{el.icon}</div>
                                <h3>{el.subTitle}</h3>
                                <p>{el.descrip}</p>
                            </div>)}
                    </div>
                </div>
                <p>{data.description}</p>
                <button className={styles.btnConsult} onClick={() => setConsultOpen(!consultOpen)}>
                    <span>{data.btn_consult.name}</span>
                </button>
            </div>
            <div className={styles.modalForm} >
                {consultOpen && (<ModalForm modal={setConsultOpen} />)}
            </div>
            <Footer />
        </div>
    )
}

export default Mural
