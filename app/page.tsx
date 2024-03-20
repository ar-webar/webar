import React from 'react';
import Heroblock from './components/Heroblock'
import Examples from './components/Examples';
import AdvantagesBlock from './components/AdvantagesBlock';
import WorkingBlock from './components/WorkingProcessBlock/WorkingBlock';
import Partners from './components/Partners/index';
import Footer from "./components/Footer"
import ContactBlock from './components/ContactBlock/ContactBlock';
import AccordionBlock from './components/AccordionBlock/AccordionBlock';
import Header from './components/Header';
import styles from './home.module.scss';
import Spheres from './components/Spheres';


const Home = () => {
  return (
    <section className={styles.container}>
      <Header />
      <Heroblock />
      <Examples />
      <AdvantagesBlock />
      <WorkingBlock />
      <Spheres/>
      <Partners />
      <AccordionBlock />
      <ContactBlock />
      <Footer />
    </section>
  );
};

export default Home;
