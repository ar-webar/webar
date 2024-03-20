
import IconWorkProc_four from '../Icons/IconWorkProc_four';
import IconWorkProc_one from '../Icons/IconWorkProc_one';
import IconWorkProc_three from '../Icons/IconWorkProc_three';
import IconWorkProc_two from '../Icons/IconWorkProc_two';
import styles from './working.module.scss';

const WorkingBlock = () => {
	const data = {
		comment: 'Кратко как мы работаем',
		title: "Наш рабочий процесс",
		block: [
			{
				img: <IconWorkProc_one />,
				title: "#1 Консультация",
				text: "Сначала мы обсуждаем ваш проект, определяем ключевые задачи и потребности вашего бизнеса или проекта"
			},
			{
				img: <IconWorkProc_two />,
				title: "#2 Разработка",
				text: "Создаем 3D-модели, анимацию и интерактивные элементы, соответствующие вашим требованиям"
			},
			{
				img: <IconWorkProc_three />,
				title: "#3 Интеграция",
				text: "Интегрируем разработку в вашу сферу и тестируем дополненную реальность в реальных условиях"
			},
			{
				img: <IconWorkProc_four />,
				title: "#4 Поддержка",
				text: "Оказываем техническую поддержку и помощь в дальнейшей оптимизации и развитии вашего проекта"
			}
		]
	}
	return (
		<div className={styles.content}>
			<div className={styles.comment}>{data.comment}</div>
			<div className={styles.title}>{data.title}</div>
			<div className={styles.blocks}>
				{data.block.map(el =>
					<div key={el.title} className={styles.block}>
						<div className={styles.icon}>{el.img}</div>
						<div className={styles.subtitle}>{el.title}</div>
						<div className={styles.text}>{el.text}</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default WorkingBlock