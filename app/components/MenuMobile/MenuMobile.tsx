'use client'
import Link from "next/link";
import styles from './headerMobile.module.scss';
import Messengers from "./Messengers";
import Pages from "@/pages/list";
import { useState } from "react";


const MenuMobile = () => {
	const data = [
		{
			url: '/#Advantages',
			name: 'Преимущества'
		},
		{
			url: '',
			name: 'Каталог',
			list: <Pages />
		},
		{
			url: '/#Examples',
			name: 'Примеры работ'
		},
		{
			url: '/#Questions',
			name: 'Частые вопросы'
		},
		// {
		// 	url: '/',
		// 	name: 'Блог'
		// },
		{
			url: '/#Contacts',
			name: 'Контакты'
		},
	]


	const [list, setList] = useState(false)

	const onMouseEnterHandler = () => {
		setList(true);
	};

	const onMouseLeaveHandler = () => {
		setList(false);
	};
	return (
		<div className={styles.containerMobile}>
			<div className={styles.links}>
				{data.map(link =>
					<Link key={link.name} href={link.url} className={styles.linkMobile} onMouseEnter={link.list ? onMouseEnterHandler : () => { }} onMouseLeave={onMouseLeaveHandler} >
						{link.name.toLocaleUpperCase()}
						{list && <div className={styles.catalog}>{link.list}</div>}
					</Link>)}
			</div>
			<Messengers />
		</div>
	)
}

export default MenuMobile