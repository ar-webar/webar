import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from './kulman.module.scss'


const Kulman = () => {

const data = {
  topBlock: {
    description: 'Леэн Кульман родилась 31 января 1920 года в городе Тарту шестым ребёнком в многодетной семье сапожника Андреса Кульмана. После присоединения Эстонии к СССР вступила в комсомол, училась в Таллинском педагогическом институте. В 1941 году Леэн получила специальность учительницы неполной средней школы. С началом Великой Отечественной войны пошла в военкомат, просила направить её на фронт, но ей отказали. С августа 1941 года в эвакуации работала в колхозе «Ленинский путь» Нязепетровского района Челябинской области.',
    src: '/kulman/photo1.jpg'
  },
  gallery: {
    src_pic_1: '/kulman/photo2.jpg',
    text: 'В январе 1942 года ушла в Красную Армию бойцом медсанбата 7-й эстонской стрелковой дивизии. Позднее была направлена в Ленинград и под именем Линды Туллиман прошла обучение в разведшколе. В ночь с 13 на 14 сентября 1942 года была десантирована в тыл противника в районе города Тарту. В Тарту она поселилась у своей сестры. Её задачей было наблюдать за передвижением войск вермахта в районе Чудского озера, за морскими силами противника в порту Пярну.',
    src_pic_2: '/kulman/photo4.jpg',
  },

  infloBlock: {
      src_pic_1: 'kulman/Война1.jpg',
      src_pic_2: 'kulman/Война2.jpg',
      biography: '2 января 1943 года Леэн Кульман была арестована на хуторе Ояэрэ, где проживали её сестра с мужем. Вместе с ней были арестованы все её родственники. При обыске в матрасе был найден передатчик. Леэн была отправлена в распоряжение политической полиции города Выру, а 4 января 1943 года передана внешней сыскной полиции в Пскове как советская разведчица. 6 марта 1943 года была расстреляна фашистом из организации «Омакайтсе». Награждена «Орденом Ленина», медалью «За боевые заслуги». Указом Президиума Верховного Совета СССР от 8 мая 1965 года разведчице Краснознамённого Балтийского флота Кульман Хелене Андреевне «за особые заслуги, мужество и героизм, проявленные в борьбе против немецко-фашистских захватчиков в период Великой Отечественной войны 1941—1945 гг.» было присвоено звание Героя Советского Союза посмертно. Именем Л. А. Кульман в 1974 г. Названа улица в Советском районе. В 1977 г. на доме №2 установлена мемориальная доска.',
  }
}

  return (
    <div className={styles.container}>
        <Header/>
        <h1 className={styles.title}>Леэн Кульман</h1>
        <div className={styles.blocksWrapper}>
       
          <div className={styles.description}>
              <p>{data.topBlock.description}</p>
          </div>
         <div className={styles.photoBlock}>
              <img src={data.topBlock.src}/>
          </div>
       
        </div>
        <div className={styles.gallery}>
          <div className={styles.pic}>
            <img src={data.gallery.src_pic_1}  />
          </div>
          <div className={styles.text}>
            <p>{data.gallery.text}</p>
          </div>
          <div className={styles.pic}>
            <img src={data.gallery.src_pic_2}/>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.imgWrapper}>
            <img src={data.infloBlock.src_pic_1}/>
            <img src={data.infloBlock.src_pic_2}/>
          </div>
          <div className={styles.biography}>
            <p>{data.infloBlock.biography}</p>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Kulman