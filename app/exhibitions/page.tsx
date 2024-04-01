"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Model from "../components/Icons/model";
import ModalForm from "../components/ModalForm/ModalForm";
import styles from "./exhibitions.module.scss";

const Exhibitions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTwoOpen, setModalTwoOpen] = useState(false);

  const openModalOne = () => {
    setModalTwoOpen(false);
    setModalOpen(!modalOpen);
  };

  const openModalTwo = () => {
    setModalOpen(false);
    setModalTwoOpen(!modalTwoOpen);
  };

  const data = {
    introduction:
      " – это захватывающая технология, которая проникает во многие сферы нашей жизни. В музеях и художественных галереях она открывает уникальные возможности для обогащения посетительского опыта, помогает повысить лояльность, привлечь больше посетителей, создать эффект сарафанного радио. Давайте вместе погрузимся в мир дополненной реальности и рассмотрим, как он может преобразить наше восприятие и взаимодействие с искусством и культурой.",
    intro_span: "Дополненная реальность (AR)",
    introPictures: [
      {
        src: "exhibition/exhb2.jpg",
        alt: "exhbt2",
      },
      {
        src: "exhibition/exhb3.jpg",
        alt: "exhbt3",
      },

      {
        src: "exhibition/exhbt1.jpg",
        alt: "exhbt1",
      },
    ],

    eventsText:
      "может преобразить интерактивные расписания и детали мероприятий. Она способствует улучшению взаимодействия с информационными экранами и плакатами, позволяя получать дополнительные материалы, связанные с предстоящими событиями, просто наведя смартфон или планшет на определенные области. Это значительно обогащает опыт участия в мероприятиях, делая его более погружающим и информативным.",
    btn_consult: "Скачать прайс",
    eventsImage: "exhibition/phoneExh.png",
    eventCards: [
      {
        heading: "Интерактивные расписания",
        text: "AR-приложения могут визуализировать расписание мероприятий в реальном времени. Посетители могут сканировать афиши или QR-коды, чтобы получить дополнительные сведения о времени, месте и деталях мероприятия. Например, при наведении смартфона на афишу выставки, посетитель может увидеть дополнительные фотографии, видео или интересные факты о художнике.",
      },
      {
        heading: "Информация о произведениях и художниках",
        text: "AR-технологии позволяют визуализировать информацию о произведениях и художниках. Посетители могут сканировать произведения и получать контекстные сведения, биографии художников или интересные факты о произведении. Это помогает углубить понимание искусства и сделать посещение более образовательным.",
      },
      {
        heading: "Интерактивные элементы на афишах",
        text: "AR может добавить интерактивные элементы на афиши мероприятий. Например, сканирование QR-кода на афише концерта может открыть возможность прослушать фрагмент музыки или узнать больше о исполнителе.",
      },
      {
        heading: "Виртуальные экскурсии",
        text: "AR-приложения могут создавать виртуальные туры по выставкам и мероприятиям. Посетители могут исследовать пространство, узнавать о произведениях и взаимодействовать с ними, не покидая своего места.",
      },
    ],
    concertImg: "exhibition/concerts.jpg",
    listOne: [
      {
        heading: "Голографические выступления",
        text: "AR позволяет создавать голографические изображения, которые могут взаимодействовать с артистами или быть сценическими элементами во время выступлений. Это может включать в себя голограммы артистов, анимированные эффекты и многое другое",
      },
      {
        heading: "Арт-инсталляции на сцене",
        text: "Дополненная реальность позволяет артистам создавать впечатляющие арт-инсталляции прямо на сцене, используя виртуальные объекты и эффекты. Это могут быть абстрактные композиции, визуализирующие тему песни или альбома",
      },
      {
        heading: "Визуализация текстов и историй",
        text: "AR может быть использована для визуализации текстов песен или рассказов артистов, создавая визуальные эффекты, которые дополняют и расширяют их смысл. Например, слова песни могут превращаться в анимированные объекты или сюжеты, отображаемые на сцене или вокруг артиста",
      },
    ],
    listTwo: [
      {
        heading: "Преображения артистов",
        text: "Дополненная реальность может использоваться для трансформации внешнего вида артиста во время выступления. Это может включать в себя добавление виртуальных элементов к их костюмам или макияжу, создание костюмов и образов, которые меняются в реальном времени",
      },
      {
        heading: "Интерактив для зрителей",
        text: "AR может быть использована для создания интерактивных приложений для зрителей, позволяя им взаимодействовать с выступлением через свои мобильные устройства. ",
      },
      {
        heading: "Анимированные дополнения к выступлению",
        text: "AR может использоваться для добавления анимированных дополнений к выступлениям. Например, артист может быть окружен виртуальными персонажами, которые взаимодействуют с ним во время выступления, или на фоне могут появляться абстрактные анимации, дополняющие атмосферу песни или произведения",
      },
    ],
    guideImg: "exhibition/guide.jpg",
    guideTextOne:
      "Уникальные возможности дополненной реальности  предоставляют опции создания ",
    guideTextSpan: "виртуальных гидов и экскурсий",
    guideTextSecond:
      ", которые обогащают опыт туристов и путешественников. Они позволяют погрузиться в мир истории, культуры и архитектуры места с помощью интерактивных карт, мультимедийных материалов и виртуальных сюжетов.",
    guideCards: [
      {
        heading: "Интерактивные карты и навигация",
        text: "Cоздание интерактивных карт и навигационных систем, которые помогают туристам ориентироваться в незнакомом городе или месте. С помощью камеры смартфона пользователи могут увидеть навигационные стрелки, указатели и маршруты прямо на окружающей территории.",
      },
      {
        heading: "Исторические экскурсии",
        text: "Создание виртуальных экскурсий по историческим местам и памятникам. Туристы могут просматривать реконструкции исторических зданий и событий, слушать аудиогиды и просматривать дополнительные материалы, которые раскрывают историю места",
      },
      {
        heading: "Архитектурные туры",
        text: "AR может использоваться для создания виртуальных архитектурных туров и визуализаций, позволяя туристам искать информацию о зданиях и памятниках архитектуры, а также видеть их в 3D моделях и с различными видами отделки",
      },
      {
        heading: "Путешествия во времени",
        text: "Создание визуальных эффектов, которые позволяют туристам путешествовать во времени и видеть, как выглядело место в прошлом. Это может быть особенно эффективно для исторических районов и достопримечательностей, где AR позволяет воссоздать облик места в разные исторические эпохи",
      },
    ],
  };
  return (
    <div className={styles.containerWrapper}>
      <Header />
      <div className={styles.container}>
        <h1>Выставки, музеи, галереи</h1>
        <div className={styles.introBlock}>
          <div className={styles.imagesIntro}>
            {data.introPictures.map((item, index) => (
              <img src={item.src} alt={item.alt} key={index} />
            ))}
          </div>
          <p>
            <span>{data.intro_span}</span>
            {data.introduction}
          </p>
        </div>
        <div className={styles.events}>
          <div className={styles.eventsWrapper}>
            <div className={styles.eventsClmnOne}>
              <h2>Интерактивные расписания и детали мероприятий</h2>
              <p>
                <span>{data.intro_span}</span> {data.eventsText}
              </p>
              <button className={styles.btnConsult} onClick={openModalOne}>
                <span>{data.btn_consult}</span>
              </button>
            </div>
            <div className={styles.eventsClmnTwo}>
              <img src={data.eventsImage} alt="eventsPhone" />
            </div>
            <div className={styles.modalForm}>
              {modalOpen && <ModalForm modal={setModalOpen} />}
            </div>
          </div>
          <div className={styles.eventsCards}>
            {data.eventCards.map((card, index) => (
              <div key={index}>
                <Model />
                <h5>{card.heading}</h5>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.concerts}>
          <h2>Визуализация концертов и выступлений</h2>
          <img src={data.concertImg} alt="concert" />
          <div className={styles.ulClmns}>
            <div className={styles.ulClmnOne}>
              {data.listOne.map((item, index) => (
                <ul key={index}>
                  <li>
                    <h5>{item.heading}</h5>
                    <p>{item.text}</p>
                  </li>
                </ul>
              ))}
            </div>

            <div className={styles.ulClmnTwo}>
              {data.listTwo.map((item, index) => (
                <ul key={index}>
                  <li>
                    <h5>{item.heading}</h5>
                    <p>{item.text}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.virtualGuides}>
          <div className={styles.guideClmns}>
            <img src={data.guideImg} alt="guide" />
            <div>
              <h2>Виртуальные гиды и экскурсии</h2>
              <p>
                {data.guideTextOne}
                <span>{data.guideTextSpan}</span>
                {data.guideTextSecond}
              </p>
              <button className={styles.btnConsult} onClick={openModalTwo}>
                <span>{data.btn_consult}</span>
              </button>
            </div>
            <div className={styles.modalForm}>
              {modalTwoOpen && <ModalForm modal={setModalTwoOpen} />}
            </div>
          </div>
        </div>
        <div className={styles.guideCardsWrapper}>
          {data.guideCards.map((card, index) => (
            <div className={styles.guideCard} key={index}>
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

export default Exhibitions;
