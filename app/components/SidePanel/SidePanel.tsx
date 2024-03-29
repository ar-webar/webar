import React from 'react'
import styles from './panel.module.scss'
import TelegramIcon from '../Icons/TelegramIcon'
import ViberIcon from '../Icons/ViberIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import YoutubeIcon from '../Icons/YoutubeIcon'
import Link from 'next/link'
import Telephone from '../Icons/Telephone'
import Tel from '../Icons/svg/Tel'


const SidePanel = () => {
    const data = {
        messengers: [
            {
                url: "tel:+375296164004",
                icon: <Tel />,
                name: "Instagram",
            },
            {
                url: "https://t.me/dima_venditio",
                icon: <TelegramIcon />,
                name: "Telegram",
            },
            {
                url: "https://api.whatsapp.com/send?phone=375296164004",
                icon: <ViberIcon />,
                name: "Viber",
            },

            // {
            //     url: "https://www.youtube.com/channel/UC4ZEIM-EYLsR_BnodAbW2Lg",
            //     icon: <YoutubeIcon />,
            //     name: "Youtube",
            // },
        ],
    }
    return (
        <div className={styles.panel}>
            <div className={styles.messengers}>
                {data.messengers.map((icons) => (
                    <Link
                        key={icons.name}
                        href={icons.url}
                        target="_blank"
                        className={styles.icon}
                    >
                        {icons.icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SidePanel
