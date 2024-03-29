"use client";
import Link from "next/link";
import React, { useState } from "react";
import { text } from "stream/consumers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardOne from "../components/Icons/MarketingCards/Card_one";
import CardThree from "../components/Icons/MarketingCards/Card_three";
import CardTwo from "../components/Icons/MarketingCards/Card_two";
import Approve from "../components/Icons/StandsPros/Approve";
import AnalyticsSvg from "../components/Icons/svgForMarketing/AnalyticsSvg";
import ContentSvg from "../components/Icons/svgForMarketing/ContentSvg";
import SeoSvg from "../components/Icons/svgForMarketing/SeoSvg";
import ModalForm from "../components/ModalForm/ModalForm";
import styles from "./advertising.module.scss";


const Advertising = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTwoOpen, setModalTwoOpen] = useState (false);

  const openModalOne = () => {
    setModalTwoOpen(false); 
    setModalOpen(!modalOpen); 
  };

  const openModalTwo = () => {
    setModalOpen(false); 
    setModalTwoOpen(!modalTwoOpen); 
  };

  const data = {
    paragraph:
      " играют решающую роль в успехе любого бизнеса. Они позволяют компаниям эффективно общаться с целевой аудиторией, привлекать внимание к своим продуктам или услугам и создавать уникальное впечатление о бренде. Преимущества маркетинга и рекламы включают улучшение узнаваемости бренда, установление доверия у потребителей, увеличение продаж и расширение аудитории. Кроме того, правильно спланированные маркетинговые и рекламные кампании могут помочь компаниям выделиться среди конкурентов и удерживать лидирующие позиции на рынке.",
    spanMarketing: "Маркетинг и реклама",
    imageBlock: "/advertImages/analisys.jpg",
    aboutCompany:
      "Мы используем следующие инструменты продвижения сайтов для привлечения трафика и улучшения его позиции в поисковых системах:",
    link: "/sites#seo",
    toolsPromotion: [
      {
        svg: <SeoSvg />,
        heading: "Поисковая оптимизация (SEO)",
        text: [
          {
            liTextOne: "Создание высококачественного контента",
            liTextTwo: "Оптимизация контента",
            liTextThree:
              "Улучшение технических аспектов сайта (скорость загрузки, мобильная дружественность и другое).",
          },
        ],
      },
      {
        svg: <ContentSvg />,
        heading: "Контентный маркетинг",
        text: [
          {
            liTextOne: "Привлечение трафика",
            liTextTwo: "Увеличение целевой аудитории",
            liTextThree: "Повышение узнаваемости компании"
          },
        ],
      },
      {
        svg: <AnalyticsSvg />,
        heading: "Аналитика и оптимизация",
        text: [
          {
            liTextOne:
              "Использование инструментов аналитики (Google Analytics, Яндекс Метрика) для отслеживания производительности сайта",
            liTextTwo:
              "Оптимизация стратегии продвижения на основе данных и метрик",
            liTextThree: "Анализ конкурентов: изучение их действий и стратегий, оценка их сайтов, ключевых слов и маркетинговых подходов"
          },
        ],
      },
    ],
    cardsBlock: [
      {
        svg: <CardOne />,
        heading: "Оперативность решений",
        text: "В нашей компании мы стремимся к максимальной эффективности и скорости в реагировании на запросы клиентов и изменения на рынке. Наша команда профессионалов готова оперативно реагировать на любые вызовы и срочные задачи, чтобы обеспечить нашим клиентам быстрые и точные решения. ",
      },
      {
        svg: <CardTwo />,
        heading: "Клиентоориентированность",
        text: "Мы рассматриваем исключительно персональный подход. Наша команда специалистов готова выслушать каждого клиента и понять его цели. Мы предоставляем индивидуальные консультации и разрабатываем решения, которые соответствуют потребностям каждого клиента. В нашей компании клиент всегда на первом месте",
      },
      {
        svg: <CardThree />,
        heading: "Доступная цена",
        text: "Мы гарантируем нашим клиентам доступные цены и стремимся удерживать стоимость услуг на самом демократичном уровне в регионе. Мы осознанно подходим к ценообразованию, чтобы клиенты чувствовали ясность и прозрачность в том, за что они платят.",
      },
    ],
    imageOne: "advertImages/statist_pic_3.jpg",
    imageTwo: "advertImages/statist_pic_2.jpg",
    imageThree: "advertImages/statist_pic_1.jpg",
    companyDescriptionOne:
      "ВЕНДИТИО - компания, специализирующаяся на инновационных решениях в области дополненной реальности (AR). Мы предлагаем высокотехнологичные инструменты и сервисы, которые помогают компаниям эффективно использовать потенциал AR в рекламе и продвижении. Наши решения включают в себя разработку интерактивных AR приложений, создание уникальных AR контентов и технологическую поддержку для интеграции AR в различные маркетинговые кампании. Мы работаем с клиентами разных отраслей, помогая им привлечь внимание целевой аудитории, увеличить вовлеченность и улучшить впечатление о бренде.",
    companyDescriptionTwo:
      "Вот несколько примеров того, как можно использовать AR в качестве средства продвижения и маркетинга:",
    imgBilbord: "advertImages/scale_1200.png",
    bilbordsSpan: "Оживающие билборды",
    bilbordsDescr:
      " представляют собой рекламные панели, оснащенные дополненной реальностью. Данная технология позволяет добавлять виртуальные элементы, такие как изображения, видео анимации или 3d-модели к реальному миру через смартфон, планшет или другое устройство с поддержкой AR. В случае оживающих билбордов, когда человек смотрит на рекламную панель через мобильное устройство, он может увидеть анимацию продукта, дополнительную информацию о продукте или услуге или возможность взаимодействия с рекламой через элементы дополненной реальности. AR-бигборды – это эффективный способ привлечения внимания аудитории, так как они совмещают преимущества внешней рекламы с инновационными возможностями дополненной реальности.",
    btn_consult: "Заказать консультацию",
    descriptionPackage:
      " представляет собой инновационный подход к продвижению продуктов питания. Вместо обычной статичной упаковки здесь используется технология дополненной реальности (AR), чтобы предложить потребителям интерактивный опыт взаимодействия с продуктом. ",
    descriptionPackageSpan: "Живая упаковка с видео-рецептами",
    imgPackage: "advertImages/recept.png",
    receipeBlock: [
      {
        heading: "Интерактивные QR-коды",
        text: "Упаковка содержит QR-коды, которые при сканировании открывают доступ к видео-рецептам. Эти рецепты могут представлять собой шаг за шагом инструкции по приготовлению блюд с использованием продукта.",
      },
      {
        heading: "Подробные видео-инструкции ",
        text: "Видео-рецепты могут содержать подробные инструкции о том, как готовить блюдо с использованием продукта, а также демонстрации ключевых шагов приготовления. Это помогает потребителям лучше понять процесс и повышает вероятность того, что они купят продукт.",
      },
      {
        heading: "Контент, адаптированный под упаковку ",
        text: "Видео-рецепты могут быть созданы специально для конкретного продукта и упаковки, учитывая его особенности и возможные способы использования. Например, если продукт имеет несколько вариантов использования, рецепты могут демонстрировать различные способы приготовления.",
      },
    ],
    printingDescrp:
      "Дополненная реальность может быть эффективным инструментом для улучшения визуального и взаимодейственного опыта с полиграфическими материалами, такими как листовки, визитки, буклеты и прочие рекламные материалы. Каким образом AR может быть применена к полиграфической продукции?",
    examples: [
      {
        svg: <Approve />,
        heading: "Визитки",
        text: "Пользователи могут сканировать QR-код на визитке, чтобы получить доступ к дополнительной информации о владельце визитки, компании или продуктах. AR может быть использована для демонстрации портфолио работ или примеров продуктов, представленных в форме трехмерных моделей, видеообзоров или анимаций. Визитки могут также содержать интерактивные элементы, такие как формы обратной связи или ссылки на социальные сети, что позволит легче и быстрее установить контакт с владельцем визитки.",
      },
      {
        svg: <Approve />,
        heading: "Листовки",
        text: "Листовки с AR могут включать в себя интерактивные элементы, такие как видеообзоры продуктов или услуг, которые можно просмотреть, сканируя специальные коды на листовке. Дополненная реальность может использоваться для создания впечатляющих визуальных эффектов, которые привлекут внимание и запомнятся целевой аудитории. Листовки с AR могут также содержать дополнительные ссылки или информацию, которая также будет доступна после сканирования QR-кода.",
      },
      {
        svg: <Approve />,
        heading: "Буклеты",
        text: "Пользователь может отсканировать страницу буклета, чтобы увидеть дополнительную информацию о конкретном продукте или услуге. AR может быть использована для создания интерактивных элементов в буклетах, таких как опросы, тесты или игры, которые помогут привлечь внимание аудитории и сделать взаимодействие с материалом более увлекательным. ",
      },
      {
        svg: <Approve />,
        heading: "Плакаты и афиши",
        text: 'При помощи AR на плакатах и афишах можно разместить интерактивные элементы, такие как кнопки или ссылки, которые при сканировании QR-кода открывают дополнительную информацию или видео. Например, пользователь может получить возможность нажать на кнопку "Узнать больше" и получить дополнительные сведения о продукте или услуге, представленной на плакате. Также AR может использоваться для добавления интерактивных элементов, например, сканирование QR-кода может открыть карту с указанием расположения магазина или события, рекламируемого на плакате.',
      },
    ],
    imgTopBlock: "advertImages/marketing.jpg",
    bilbordMainText:
      "представляют собой рекламные панели или билборды, оснащенные дополненной реальностью. Данная технология позволяет добавлять виртуальные элементы, такие как изображения, видео или анимации к реальному миру через смартфон, планшет или другое устройство с поддержкой AR. В случае оживающих билбордов, когда человек смотрит на рекламную панель через мобильное устройство, он может увидеть анимацию продукта, дополнительную информацию о продукте или услуге или возможность взаимодействия с рекламой через элементы дополненной реальности. AR-билборды – это эффективный способ привлечения внимания аудитории, так как они совмещают преимущества наружной рекламы с инновационными возможностями дополненной реальности.",
  };
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.wrapper}>
        <h1>Маркетинг и реклама</h1>
        <div className={styles.descriptionWrapper}>
          <img src={data.imgTopBlock} alt="marketing" />
          <p className={styles.description}>
            <span>{data.spanMarketing}</span>
            {data.paragraph}
          </p>
        </div>
        <h2>Продвижение сайтов</h2>
        <div className={styles.aboutCompany}>
          <div className={styles.textWrapper}>
            <p>{data.aboutCompany}</p>
            {data.toolsPromotion.map((item, index) => (
              <div className={styles.itemWrapper} key={index}>
                <div>
                  <div>{item.svg}</div>
                  <h5>{item.heading}</h5>
                </div>

                {item.text.map((el, index) => (
                  <ul key={index}>
                    <li>{el.liTextOne}</li>
                    <li>{el.liTextTwo}</li>
                   <li>{el.liTextThree}</li>
                  </ul>
                ))}
              </div>
            ))}
            <div className={styles.linkWrapper}>
              <Link href={data.link}>Узнать больше</Link>
            </div>
          </div>
          <div className={styles.imagesWrapper}>
            <img src={data.imageOne} alt="imageOne" />
            <div>
              <img src={data.imageTwo} alt="imageTwo" />
              <img src={data.imageThree} alt="imageThree" />
            </div>
          </div>
        </div>
        <div className={styles.arBlockWrapper}>
          <h2>Дополненная реальность как инструмент рекламы и продвижения</h2>
          <p>{data.companyDescriptionOne}</p>
          <p>{data.companyDescriptionTwo}</p>
          <div className={styles.bilbords}>
            <div className={styles.bilbordsWrapper}>
              <h3>Оживающие билборды</h3>
              <img src={data.imgBilbord} alt="bilbord" />
            </div>
            <div className={styles.textBilbordsWrapper}>
              <p>
                <span>{data.bilbordsSpan} </span>
                {data.bilbordMainText}
              </p>
              <button
                className={styles.btnConsult}
                onClick={openModalOne}
              >
                <span>{data.btn_consult}</span>
              </button>
            </div>
            <div className={styles.modalForm}>
              {modalOpen && <ModalForm modal={setModalOpen} />}
            </div>
          </div>
        </div>

        <div className={styles.packageBlockWrapper}>
          <div className={styles.textPackageWrapper}>
            <h3>Живая упаковка с видео-рецептами</h3>
            <p>
              <span>{data.descriptionPackageSpan}</span>
              {data.descriptionPackage}
            </p>
            <button
              className={styles.btnConsult}
              onClick={openModalTwo}
            >
              <span>{data.btn_consult}</span>
            </button>
            <div className={styles.modalForm}>
              {modalTwoOpen && <ModalForm modal={setModalTwoOpen} />}
            </div>
          </div>
          <img src={data.imgPackage} alt="recept" />
          
        </div>

        <div className={styles.examplesPackage}>
          {data.receipeBlock.map((item, index) => (
            <div className={styles.itemPackage} key={index}>
              <h5>{item.heading}</h5>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.printingWrapper}>
          <h3>Листовки, визитки, буклеты, полиграфические материалы</h3>
          <p className={styles.printingText}>{data.printingDescrp}</p>
          <div className={styles.usage}>
            {data.examples.map((usage, index) => (
              <div className={styles.usageItem} key={index}>
                <div>{usage.svg}</div>
                <div>
                  <p>{usage.heading}</p>
                  <p>{usage.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2>Почему компании доверяют ВЕНДИТИО?</h2>
        <div className={styles.marketingBlock}>
          <img src={data.imageBlock} alt="marketing" />
          <div className={styles.cardsWrapper}>
            {data.cardsBlock.map((card, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.svg}>{card.svg}</div>
                <h5>{card.heading}</h5>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Advertising;
