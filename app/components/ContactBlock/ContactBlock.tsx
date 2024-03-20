'use client'
import Contact from './Contact';
import Email from '../Icons/Email';
import TelegramIcon from '../Icons/TelegramIcon';
import Telephone from '../Icons/Telephone';
import Link from 'next/link';

import styles from './contactBlock.module.scss';

const ContactBlock = () => {
    const data = {
        contacts: [
            {
                icon: <Telephone />,
                contact: "+375296164004",
                href: "",
                subTitle: "Доступны c 9:00 — 18:00"
            },
            {
                icon: <Email />,
                contact: "info@webar.by",
                href: "",
                subTitle: "Пишите нам на почту 24/7"
            },
            {
                icon: <TelegramIcon />,
                contact: "@Webarby",
                href: "",
                subTitle: "Пишите нам в telegram 24/7"
            },
        ]
    };

    return (
        <div id='Contacts' className={styles.contactBlock}>
            <div className={styles.contactFormText}>
                <h4 className={styles.comment}>Свяжитесь с нами</h4>
                <h1 className={styles.title}>У Вас есть идея и Вы готовы её обсудить?</h1>
                <h3 className={styles.text}>
                    Свяжитесь с нами заполнив форму или используя контакты ниже. Мы на связи и готовы с Вами обсудить все идеи.
                    <br />
                    Единственное звоните нам только в рабочее время с 9 утра до 18 часов, на мессенджеры пишите как удобно, ответим при первой возможности 🙂
                </h3>
                {data.contacts.map(contact =>
                    <Link href={contact.href} key={contact.contact} className={styles.contact}>
                        <div className={styles.icon}>{contact.icon}</div>
                        <div className={styles.contactView}>
                            <p className={styles.commentContact}>{contact.subTitle}</p>
                            <p className={styles.titleContact}>{contact.contact}</p>
                        </div>
                    </Link>
                )}
            </div>
            <div className={styles.contactForm}>
                <Contact />
            </div>
        </div>
    );
};

export default ContactBlock;
