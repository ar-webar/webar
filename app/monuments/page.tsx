"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Model from "../components/Icons/ModelIcon";
import ModalForm from "../components/ModalForm/ModalForm";
import styles from "./monuments.module.scss";

const Monuments = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const data = {
    imgMonument: "monuments/artsu.jpg",
    description:
      "В мире, где технологии продолжают проникать в различные сферы жизни, дополненная реальность становится мощным инструментом для сохранения и передачи исторических событий будущим поколениям.  ",
    spanDescription: "Мемориальные комплексы и памятники ",
    descriptionSecond:
      "– это места, где люди отдают дань уважения прошлому, и AR позволяет оживить эти места, делая их более интерактивными для посетителей.",
    btn_consult: "Скачать прайс",
    imgMemorialFirst: 'monuments/QR-Memorial.jpg',
    imgMemorialSecond: 'monuments/pamyatnik.jpeg',
    memorialWrapTextFirst: 'QR-коды на могилах предлагают современный, но значимый способ почтить память усопших. Эти QR-коды выходят за рамки традиционных надгробий. Они открывают новые возможности для того, чтобы вспомнить воспоминания и отдать дань уважения ушедшим близким. Посетителям достаточно отсканировать их с помощью своих смартфонов, чтобы получить к ним доступ.',
    memorialWrapTextSpan: 'Что такое QR-коды для надгробий?',
    memorialWrapTextSecond: ' Выгравированный QR-код для надгробий представляет собой небольшой квадратный штрих-код, прикрепленный к надгробию или мемориальному знаку. Они могут хранить не только ссылки на веб-сайт, QR-коды могут вести к различному цифровому контенту, включая файлы, изображения и многое другое. QR-коды изменили то, как мы отдаем дань уважения нашим ушедшим близким, представив новый жанр надгробий — живые надгробия.',
    cards: [
        {
            heading: 'Биографии',
            text: 'Когда мы теряем кого-то, кого любим, мы часто хотим вернуться к истории его жизни. И QR-коды могут сделать это возможным. Связав URL-адрес QR-кода на надгробии с биографией вашего близкого человека, вы не просто предоставляете посетителям доступ к мемуарам, а еще и дарите им возможность погрузиться в замечательный жизненный путь любимого человека.'
        },
        {
            heading: 'Виртуальные мемориалы',
            text: 'Посетители могут использовать конвертер файлов QR-кода, чтобы сохранять и беречь воспоминания об ушедших. Это приятный способ поделиться тем, что для них очень много значит — любимыми книгами, фразами из фильмов или даже своими шутками, которые были вашими маленькими секретами. Когда посетители увидят их после сканирования, память об ушедших снова оживет в их сознании.'
        },
        {
            heading: 'Фотогалереи',
            text: 'Картина обладает силой тысячи слов, и с галерей изображений надгробие становится воротами для фотографий, которые запечатлевают ценные воспоминания. Используя усовершенствованный генератор QR-кодов, вы можете добавлять фотографии семейных посиделок, живописные пейзажи из памятных поездок или любые другие памятные фотографии и скомпоновать их на индивидуальной странице. '
        },
        {
            heading: 'Благотворительные пожертвования',
            text: 'Сделайте значимый шаг в сохранении ценностей и увлечений вашего близкого человека, подключив QR-код к странице благотворительных пожертвований. Посетители могут сканировать QR-коды и сделать пожертвование в память об усопшем, что помогает поддерживать благотворительные и социальные инициативы.'
        }
    ]
  }

  return (
    <div className={styles.containerWrapper}>
      <Header />
      <div className={styles.container}>
        <h1>Памятники и мемориальные комплексы</h1>
        <img
          className={styles.imgMonument}
          src={data.imgMonument}
          alt="memorial"
        />
        <p className={styles.description}>
          {data.description} <span>{data.spanDescription}</span>
          {data.descriptionSecond}
        </p>
        <div className={styles.memorial}>
            <div>
                <img src={data.imgMemorialFirst} alt="memorial_one" />
                <img src={data.imgMemorialSecond} alt="memorial_second" />
            </div>
          
          <div className={styles.memorialWrapper}>
            <h2>Оживающие памятники</h2>
            <p>{data.memorialWrapTextFirst}</p>
            
            <p><span>{data.memorialWrapTextSpan}</span>{data.memorialWrapTextSecond}</p>
            <button
              className={styles.btnConsult}
              onClick={() => setModalOpen(!modalOpen)}
            >
              <span>{data.btn_consult}</span>
            </button>
          </div>
          <div className={styles.modalForm}>
            {modalOpen && <ModalForm modal={setModalOpen} />}
          </div>
        </div>
        <div className={styles.cards}>
        {data.cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <Model />
              <h5>{card.heading}</h5>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Monuments;
