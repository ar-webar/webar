'use client'
import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import Phone from '../Icons/Phone';
import Burger from '../Icons/Burger';
import Logo from '../Icons/Logo';
import BurgerBtn from './BurgerBtn';
import RightMenu from '../RightMenu/RightMenu';
import { useState } from 'react';
import MenuMobile from '../MenuMobile/MenuMobile';
import ModalForm from '../ModalForm/ModalForm';
import Pages from '@/pages/list';
import SidePanel from '../SidePanel/SidePanel';

const data = {
    navLinks: [
        {
            url: '/#Advantages',
            name: 'Преимущества'
        },
        {
            url: '/#Examples',
            name: 'Примеры работ'
        },
        {
            url: '/#Questions',
            name: 'Частые вопросы'
        },
        {
            url: '/#Contacts',
            name: 'Контакты'
        },
    ],
    btnContactForm: {
        name: "Обсудим задачи?",
    },
};

const Header = () => {
    const [menu, setMenu] = useState(false);

    const menuOpen = () => {
        setMenu(!menu);
    }

    const [menuMob, setMenuMob] = useState(false);
    const [modal, setModal] = useState(false);
    const [list, setList] = useState(false);

    const onMouseEnterHandler = () => {
        setList(true);
    };

    const onMouseLeaveHandler = () => {
        setList(false);
    };
    return (
        <div className={styles.container}>
            <header className={styles.header} >
                <Link href="/" className={styles.logo}>
                    <Logo />
                </Link>
                <nav className={styles.nav}>
                    {data.navLinks.map(link => {
                        return (
                            // <Link key={link.name} href={link.url} className={styles.link} onMouseEnter={link.list ? onMouseEnterHandler : () => { }} onMouseLeave={onMouseLeaveHandler}>
                            //     {link.name}
                            //     {list && <div className={styles.list}>{link.list}</div>}
                            // </Link>
                            <Link key={link.name} href={link.url} className={styles.link}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
                <div className={styles.buttons}>
                    <Link href="" className={styles.btnForm} onClick={() => setModal(true)} >
                        <span>{data.btnContactForm.name}</span>
                        <Phone />
                    </Link>
                    <Link href="" className={styles.burger} > <Burger show={setMenuMob} /></Link>
                    <div onClick={menuOpen}><BurgerBtn /></div>
                </div>
            </header>

            <div className={styles.rightMenu} style={menuMob ? { transform: 'translate(0,0)' } : { transform: 'translate(100%,0)' }}>{menuMob && (<RightMenu show={setMenuMob} />)}</div>
            <div className={styles.menuMob} style={menu ? { transform: 'translateY(0)' } : { transform: 'translateY(-130%)' }}><MenuMobile /></div>
            <div className={styles.modalForm} >
                {modal && (<ModalForm modal={setModal} />)}
            </div>
            <div className={styles.panel}><SidePanel /></div>
        </div>
    );
};

export default Header;
