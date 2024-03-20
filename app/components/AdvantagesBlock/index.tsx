import Advantages from "./Advantages"
import styles from './advantagesBlock.module.scss';


const AdvantagesBlock = () => {
	const data = {
		comment: 'Проще и быть не может',
		title: "Почему выбирают Web AR",
		block: <Advantages />
	}
	return (
		<div id='Advantages' className={styles.advantages}>
			<h4 className={styles.comment}>{data.comment}</h4>
			<h1 className={styles.title}>{data.title}</h1>
			<div>{data.block}</div>
		</div>
	)
}

export default AdvantagesBlock