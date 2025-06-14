'use client'
import React, { useState } from 'react'
import styles from './index.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModalForm from '../components/ModalForm/ModalForm';

const ToysPage = () => {
    const [consultOpen, setConsultOpen] = useState(false)
    const data = [
        {
            btn_consult: {
                name: 'Заказать консультацию'
            },
            title_1: 'Дополненная реальность (AR) ',
            title_2: 'в развлекательной сфере',
            description: 'Игрушки с дополненной реальностью, видео-инструкции и обзоры, оживающие загадки и головоломки для квест-игр, виртуальные персонажи и игровые 3д-объекты',
            span: 'Игрушки,',
            section_1: ' с использованием инновационной технологии дополненной реальности, создают у детей ощущение участия в чем-то новом и выдающемся, переносящем их в мир будущего. Дополненная реальность (англ. augmented reality, AR — «расширенная реальность») — результат введения в поле восприятия любых сенсорных данных с целью дополнения сведений об окружении и улучшения восприятия информации. Другими словами, технология дополненной реальности умеет распознавать образы, а потом дополнять эти образы и окружающее пространство различными виртуальными объектами.',
            image_1_1: '/toys/динозавры.jpg',
            // image_1_2: '/toys/книга.png',
            span_2: 'Видео-инструкции и обзоры,',
            section_2: ' созданные с помощью дополненной реальности, демонстрируют практические примеры использования продукта или выполнения задачи. Это помогает пользователям лучше представить, как использовать информацию в реальной жизни. Пользователи могут непосредственно взаимодействовать с объектами и данными, перемещать их, изменять масштаб и даже взаимодействовать с элементами в реальном времени. Это делает процесс обучения более запоминающимся, поскольку информация представлена в контексте реального мира.',
            section_2_1: 'Использование AR в видео-инструкциях и обзорах демонстрирует инновационный подход к обучению и информационному предоставлению, что может быть привлекательным для аудитории и создавать положительный опыт использования продукта или услуги.',
            section_2_2: 'Таким образом, видео-инструкции и обзоры с использованием дополненной реальности могут быть эффективным средством обучения и информирования, обеспечивая пользователей реалистичным и понятным опытом.',
            image_2_1: '/toys/инструкция4.png',
            image_2_2: '/toys/инструкция3.png',
            span_3: 'В квест-играх',
            span_3_1: 'оживающих загадках и головоломках',
            section_3: ' дополненная реальность открывает новые возможности для создания захватывающих и увлекательных игровых опытов, особенно в контексте оживающих загадок и головоломок.',
            section_3_1: 'Одним из основных преимуществ использования дополненной реальности в ',
            section_3_1_1: ' является возможность добавления интерактивности и реализма в игровой мир. Игроки могут непосредственно взаимодействовать с виртуальными объектами и элементами, обнаруживая скрытые подсказки и решая задачи прямо в реальном пространстве.',
            section_3_2: 'Например, оживающая головоломка может использовать AR для демонстрации трехмерных моделей или анимаций, объясняющих правила игры или предоставляющих подсказки по ее решению. Использование дополненной реальности позволяет игрокам полностью погрузиться в атмосферу приключения и окунуться в игровой мир. Оживающие загадки и головоломки могут быть встроены в окружающую среду, создавая иллюзию взаимодействия с реальными объектами и сценами, что делает игровой процесс более захватывающим и реалистичным.',
            image_3: '/toys/квест2.jpg',
            section_4: 'AR может быть использована для создания ',
            span_4: 'интерактивных историй или игр,',
            section_4_1: ' которые взаимодействуют с изображением. Например, пользователи могут сканировать маркеры на изображении, чтобы разблокировать части истории или участвовать в виртуальных играх, которые взаимодействуют с окружающим пространством.',
            section_4_2: 'Дополненная реальность открывает новые горизонты для оживающих загадок и головоломок в квест-играх. Она не только расширяет возможности геймплея, но и создает неповторимый опыт погружения в виртуальные миры, где реальность и виртуальность сливаются воедино, чтобы создать захватывающий игровой опыт.',
            image_4: '/toys/книга.png',
        }
    ]
    return (
        <div className={styles.container}>
            <Header />
            {data.map(el =>
                <div className={styles.content} key={el.description}>
                    <h1>{el.title_1}</h1>
                    <h1>{el.title_2}</h1>
                    <div className={styles.marquee}>
                        <div className={styles.track}>
                            <div className={styles.content}>{el.description}</div>
                        </div>
                    </div>
                    <p>
                        <span>{el.span}</span>
                        <img src={el.image_1_1} alt='игрушки' />
                        {el.section_1}
                    </p>
                    <br />
                    <p>
                        <span>{el.span_2}</span>
                        {el.section_2}
                    </p>
                    <p>{el.section_2_1}</p>
                    <p>{el.section_2_2}</p>
                    <br />
                    <p>
                        <img src={el.image_4} alt='игрушки' className={styles.photo} />
                        {el.section_4}
                        <span className={styles.span}>{el.span_4}</span>
                        {el.section_4_1}
                    </p>
                    <p>{el.section_4_2}</p>
                    <br />
                    <p>
                        <span>{el.span_3}</span>
                        {el.section_3}
                    </p>
                    <p>
                        {el.section_3_1}
                        <span className={styles.span}>{el.span_3_1}</span>
                        {el.section_3_1_1}
                    </p>
                    <p>{el.section_3_2}</p>
                    <button className={styles.btnConsult} onClick={() => setConsultOpen(!consultOpen)}>
                        <span>{el.btn_consult.name}</span>
                    </button>
                    <div className={styles.modalForm} >
                        {consultOpen && (<ModalForm modal={setConsultOpen} />)}
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default ToysPage
