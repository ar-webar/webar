'use client'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ModalForm from '../components/ModalForm/ModalForm'
import styles from './index.module.scss'
import React, { useState } from 'react'

const Poligrafiya = () => {
    const [consultOpen, setConsultOpen] = useState(false)
    const data = [
        {
            title: 'Печатная продукция с дополненной реальностью (AR)',
            btn_consult: {
                name: 'Заказать консультацию'
            },
            span: 'Дополненная реальность ',
            description: 'дает авторам книг, издательствам и типографиям возможность создания уникального и запоминающегося продукта, который может выделиться среди других на рынке, а также позволяет экспериментировать с визуальными и интерактивными элементами. Такой продукт обладает высокой привлекательностью для покупателей, читателей, особенно детей и подростков, которые росли в мире гаджетов и интерактивных технологий. AR-технологии предлагают новый уровень взаимодействия и позволяют людям буквально погрузиться в историю.',
            section_1: {
                span: 'Книги и фото-книги с видео-роликами ',
                text: 'с дополненной реальностью или AR-книги (Augmented Reality) — это обычные бумажные книги, которые можно «оживить» с помощью приложений, специально созданных под каждое издание или серию книг. После их установки нужно навести камеру смартфона или планшета на страницу и смотреть, что появится на экране.Энциклопедии, учебники, рабочие тетради, кулинарные книги, путеводители, карты и другие темы, где важен не только текст, но и визуальные пособия, практические примеры, эксперименты, задания, возможность просмотра видео и прослушивания аудио – все они отличные темы для использования дополненной реальности.',
                text_2: 'Дополненная реальность обогатила контент, сделав обучение и чтение более приятными и эффективными.',
                img: '/books/книга4.jpg',
            },
            section_2: {
                span: '«Оживающие» фото в газетах и 3d-модели в журналах ',
                text: 'способны сохранить и передать не только зрительный эффект, но и эмоции.',
                text_2: 'Простыми словами — это как «оживающая» газета из знаменитого «Гарри Поттер» — когда герои, изображенные на газете или в журнале, вдруг начинают двигаться, разговаривать, ходить, смеяться. Текст газеты остается неподвижным, а фотография будто «оживает».',
                img: '',
            },
            section_3: {
                span: 'Анимированные открытки и конверты ',
                text: 'с дополненной реальностью (AR-card) — современный продукт с использованием цифровых технологий для создания нового потребительского опыта. Благодаря дополненной реальности классическая открытка превращается в живую и интерактивную, стоит лишь навести на нее камеру смартфона или планшета.',
                text_2: 'Дополненная реальность может быть использована на открытках разного формата и содержания. Это могут быть как AR-открытки для личных и официальных поздравлений, так и сувенирные — с видами городов и достопримечательностей.',
                text_3: 'Пользуются широким спросом корпоративные открытки или флайеры, при наведении на которые клиент может получить скидку или особое поздравление от руководства в виде премии. Интересно решение тем, что традиционное поздравление в виде фирменной полиграфии сочетается с персональным подарком.',
                text_4: 'Открытки с дополненной реальностью могут быть полезны в туристическом маркетинге. Они позволят потенциальным  туристам заранее знакомиться с новыми направлениями отдыха и достопримечательностями.  Дополненная реальность на открытке поможет пользователям сформировать представление о внешнем виде, деталях и характеристиках туристического объекта, откроет интересные факты. Это прекрасный сувенирный подарок, который турист может взят с собой из поездки и подарить близким людям.',
                img: '/books/книга.jpg',
            },
            section_4: {
                span: 'Меню с видео-обзорами блюд ',
                text: 'отлично подходят для создания впечатления у гостей, они действительно попробуют что-то новое. С помощью концепции дополненной реальности гости смогут смотреть через камеру своего телефона и видеть 3D-изображение пунктов меню, способ приготовления, подробную информацию об используемых ингредиентах, размерах порций и  калорийности. Еда выглядит в натуральную величину, и изображение меняется в режиме реального времени, когда человек поворачивает свой телефон, чтобы увидеть ее под разными углами. Это очень реалистичный способ взглянуть на еду так, как если бы она была прямо перед вами.',
                text_2: 'Таким образом, AR-меню может помочь кафе и ресторанам увеличить продажи, предлагая через дополненную реальность идеальные дополнения к выбранным блюдам, а также повысить узнаваемость бренда и обойти конкурентов, запомниться клиенту и стать лидером в своей нише.',
                img: '/books/меню.jpg',
            },
            section_5: {
                span: '"Оживающие пазлы" - ',
                text: 'инновационный продукт, позволяющий производителям добавить потребительские свойства без существенных затрат, а покупателям получить дополнительный полезный контент и новые впечатления.',
                text_2: 'Дети хотят знать, как всё устроено. Дополненная реальность сможет дать больше полезной информации. К тому же, дети обожают всё новое и необычное. Теперь персонажа можно не только собрать, но и «оживить» в дополненной реальности, отсканировав QR код. На экране смартфона или планшета появляется объёмное изображение животного, которое рассказывает о себе интересные факты и всё это сопровождается анимацией.',
                text_3: 'Согласно исследованиям, дополненная реальность активизирует все зоны мозговой деятельности и уровни восприятия, удваивает вовлеченность по сравнению со статичным контентом, видео и картинками. Поэтому, добавив AR к классическим пазлам, возможно углубить образовательный процесс и дать новый эмоциональный опыт.',
                img: '/books/пазлы.jpg',
            },
        }
    ]

    return (
        <div className={styles.container}>
            <Header />
            {data.map(el =>
                <div className={styles.content} key={el.description}>
                    <h1>{el.title}</h1>
                    <div className={styles.section_1}>
                        <p>
                            <span>{el.span}</span>
                            {el.description}
                        </p>
                    </div>
                    <div className={styles.section_1}>
                        <img src={el.section_1.img} alt='picture' />
                        <p><span>{el.section_1.span}</span>
                            {el.section_1.text}
                        </p>
                        <p>{el.section_1.text_2}</p>
                        <p><span>{el.section_2.span}</span>
                            {el.section_2.text}
                        </p>
                        <p>{el.section_2.text_2}</p>
                    </div>
                    <div className={styles.section_1}>
                        <img src={el.section_4.img} alt='picture' className={styles.photo} />
                        <p><span>{el.section_4.span}</span>
                            {el.section_4.text}
                        </p>
                        <p>{el.section_4.text_2}</p>
                    </div>
                    <div className={styles.section_1}>

                        <p><span>{el.section_5.span}</span>
                            {el.section_5.text}
                        </p>
                        <img src={el.section_5.img} alt='picture' className={styles.photo_paz} />
                        <p>{el.section_5.text_2}</p>
                        <p>{el.section_5.text_3}</p>
                        <p><span>{el.section_3.span}</span>
                            {el.section_3.text}
                        </p>
                        <p>{el.section_3.text_2}</p>
                        <p>{el.section_3.text_3}</p>
                        <p>{el.section_3.text_4}</p>

                    </div>
                    {/* <button className={styles.btnConsult} onClick={() => setConsultOpen(!consultOpen)}>
                        <span>{el.btn_consult.name}</span>
                    </button>
                    <div className={styles.modalForm} >
                        {consultOpen && (<ModalForm modal={setConsultOpen} />)}
                    </div> */}
                    <div className={styles.consalt}>
                        <button className={styles.btnConsult} onClick={() => setConsultOpen(!consultOpen)}>
                            <span>{el.btn_consult.name}</span>
                        </button>
                        <div className={styles.modalForm} >
                            {consultOpen && (<ModalForm modal={setConsultOpen} />)}
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default Poligrafiya
