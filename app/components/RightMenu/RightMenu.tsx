'use client'

import Link from "next/link";
import BurgerClose from "../Icons/BurgerClose";
import Email from "../Icons/Email";
import Logo from "../Icons/Logo";
import Map from "../Icons/Map";
import Telephone from "../Icons/Telephone";
import styles from "./rightMenu.module.scss";
import TelegramIcon from "../Icons/TelegramIcon";
import ViberIcon from "../Icons/ViberIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

type PropsType = {
	show: any
}

const RightMenu = ({ show }: PropsType) => {
	const data = {
		description:
			"Откройте для своего бизнеса безграничные возможности взаимодействия с клиентами.",
		subTitle: "Наши контакты",
		contacts: [
			{
				icon: <Telephone />,
				contact: "+375296164004",
				href: "",
			},
			{
				icon: <Email />,
				contact: "info@webar.by",
				href: "",
			},
			{
				icon: <Map />,
				contact: "г. Минск, ул. К. Либкнехта, 66, каб 305",
				href: "",
			},
		],
		messengers: [
			{
				url: "https://t.me/Webarby",
				icon: <TelegramIcon />,
				name: "Telegram",
			},
			{
				url: "https://api.whatsapp.com/send?phone=375296164004",
				icon: <ViberIcon />,
				name: "Viber",
			},
			{
				url: "https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Fwww.instagram.com%2Fwebar_by%2F%3F__coig_ufac%3D1",
				icon: <InstagramIcon />,
				name: "Instagram",
			},
			{
				url: "https://www.youtube.com/channel/UC4ZEIM-EYLsR_BnodAbW2Lg",
				icon: <YoutubeIcon />,
				name: "Youtube",
			},
		],
	};

	return (
		<div className={styles.container} >
			<div className={styles.btnClose} onClick={() => {
				show(false)
				// style = { transform: 'translate(-100%,0)' }
			}}>
				<BurgerClose />
			</div>
			<div className={styles.logo}>
				<Logo />
			</div>
			<p className={styles.description}>{data.description}</p>
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
			<h2 className={styles.subTitle}>{data.subTitle}</h2>
			<div className={styles.contacts}>
				{data.contacts.map((contact) => (
					<Link
						href={contact.href}
						key={contact.contact}
						className={styles.contact}
					>
						<p className={styles.icon}>{contact.icon}</p>
						<span>{contact.contact}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default RightMenu;
