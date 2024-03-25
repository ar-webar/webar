import Link from 'next/link';
import InstagramIcon from '../Icons/InstagramIcon';
import TelegramIcon from '../Icons/TelegramIcon';
import ViberIcon from '../Icons/ViberIcon';
import YoutubeIcon from '../Icons/YoutubeIcon';
import styles from './headerMobile.module.scss';
import Tel from '../Icons/svg/Tel';

const Messengers = () => {
	const data = [
		{
			url: "tel:+375293385901",
			icon: <Tel />,
			name: "Instagram",
		},
		{
			url: 'https://t.me/Webarby',
			icon: <TelegramIcon />,
			name: "Telegram"
		},
		{
			url: 'https://api.whatsapp.com/send?phone=375296164004',
			icon: <ViberIcon />,
			name: "Viber"
		},
		// {
		// 	url: 'https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Fwww.instagram.com%2Fwebar_by%2F%3F__coig_ufac%3D1',
		// 	icon: <InstagramIcon />,
		// 	name: "Instagram"
		// },
		// {
		// 	url: 'https://www.youtube.com/channel/UC4ZEIM-EYLsR_BnodAbW2Lg',
		// 	icon: <YoutubeIcon />,
		// 	name: "Youtube"
		// },
	]
	return (
		<div className={styles.messengers}>
			{data.map(icons =>
				<Link key={icons.name} href={icons.url} target="_blank" className={styles.icon}>
					{icons.icon}
				</Link>
			)}
		</div>
	)
}

export default Messengers