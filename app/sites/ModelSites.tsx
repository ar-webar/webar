'use client'
import styles from './model.module.scss';
import React, { useState } from 'react';
import ModalForm from '../components/ModalForm/ModalForm';


const ModelSites = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const data = [
        {
            picture: '/sites/mod.webp',
            btn_consult: {
                name: 'Заказать консультацию'
            },
            section_1: {
                title: 'Создание двухмерных и трехмерных изображений',
                subTitle: 'Двухмерные и трехмерные изображения ',
                text: 'являются мощным инструментом в мире маркетинга, дизайна, архитектуры и многих других областей. Они позволяют представить продукты, проекты и концепции в наиболее выразительном и привлекательном виде, захватывая внимание и вызывая эмоции у зрителей.',
                text_2: 'В мире, где визуальный контент играет ключевую роль в привлечении внимания и убеждении аудитории, создание качественных двухмерных и трехмерных изображений становится необходимостью. Мы специализируемся на творческом процессе превращения идей в реальность через впечатляющие визуальные образы.',
            },
            section_2: {
                title: 'Наши услуги:',
                model: [
                    {
                        subTitle: "Двухмерные изображения:",
                        text: "• Мы создаем высококачественные рисунки, иллюстрации и концепты, которые помогают визуализировать ваши идеи и концепции.",
                        text_2: "• Наша команда талантливых художников и дизайнеров обеспечивает индивидуальный подход к каждому проекту, чтобы создать уникальные и привлекательные изображения.",
                    },
                    {
                        subTitle: "Трехмерные изображения:",
                        text: "• Мы специализируемся на создании реалистичных трехмерных моделей и визуализаций, которые помогают представить архитектурные проекты, продукты и концепции.",
                        text_2: "• Наши опытные 3D-художники используют передовые технологии и программное обеспечение для создания впечатляющих и качественных изображений.",
                    },
                ],
                title_2: 'Процесс работы:',
                work: [
                    {
                        subTitle: 'Идея и концепция:',
                        description: 'Мы начинаем с обсуждения ваших идей, целей и требований к изображениям. Наши специалисты внимательно выслушивают ваши пожелания и помогают определить оптимальный подход к реализации проекта.',
                    },
                    {
                        subTitle: 'Разработка и создание:',
                        description: 'Наша креативная команда приступает к созданию изображений, учитывая ваши предпочтения и брендовый стиль. Мы используем передовые инструменты и технологии, чтобы достичь высокого качества и реализовать ваше видение.',
                    },
                    {
                        subTitle: 'Поддержка и изменения:',
                        description: 'Мы предоставляем возможность вносить коррективы и изменения в созданные изображения, чтобы они полностью соответствовали вашим ожиданиям и требованиям.',
                    },
                ]
            },
            subTitle: 'Мы гордимся тем, что помогаем нашим клиентам превратить их идеи в визуальные шедевры. Независимо от того, нужны ли вам двухмерные иллюстрации или трехмерные визуализации, наша команда готова принять вызов и воплотить ваши мечты в реальность. Доверьте нам создание ваших визуальных образов, и вы будете удивлены результатами!',
        }
    ]

    return (
        <div className={styles.content}>
            {data.map(el =>
                <div>
                    <div className={styles.block}>
                        <div className={styles.section_1}>
                            <img src={el.picture} alt='модель' className={styles.photo} />
                            <h1>{el.section_1.title}</h1>
                            <p>
                                <span>{el.section_1.subTitle}</span>
                                {el.section_1.text}
                            </p>
                            <p>{el.section_1.text_2}</p>
                            <button className={styles.btnConsult} onClick={() => setModalOpen(!modalOpen)}>
                                <span>{el.btn_consult.name}</span></button>
                        </div>
                        <div className={styles.modalForm} >
                            {modalOpen && (<ModalForm modal={setModalOpen} />)}
                        </div>
                    </div>
                    <div className={styles.section_2}>
                        <h1>{el.section_2.title}</h1>
                        <div className={styles.model}>
                            {el.section_2.model.map(model =>
                                <div className={styles.blockModel}>
                                    <h3>{model.subTitle}</h3>
                                    <p>{model.text}</p>
                                    <p>{model.text_2}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.section_2}>
                        <h1>{el.section_2.title_2}</h1>
                        <div className={styles.model_2}>
                            {el.section_2.work.map(work =>
                                <div className={styles.blockModel_2}>
                                    <h3>{work.subTitle}</h3>
                                    <p>{work.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.description}>{el.subTitle}</div>
                </div>
            )}
        </div>
    )
}

export default ModelSites