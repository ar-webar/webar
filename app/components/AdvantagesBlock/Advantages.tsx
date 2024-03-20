import Analytics from "../Icons/IconsAdvantages/Analytics";
import Applications from "../Icons/IconsAdvantages/Applications";
import Compatibility from "../Icons/IconsAdvantages/Compatibility";
import Education from "../Icons/IconsAdvantages/Education";
import Time from "../Icons/IconsAdvantages/Time";
import Universal from "../Icons/IconsAdvantages/Universal";
import styles from "./advantagesBlock.module.scss";

const Advantages = () => {
	const data = [
		{
			border: "",
			img: <Applications />,
			title: "Без установки приложений",
			text: "Технология Web AR дополненной реальности разработана для работы через веб-браузер, что значительно упрощает взаимодействие с пользователем. Клиентам не требуется скачивать и устанавливать дополнительные приложения, что снижает барьеры для использования и расширяет аудиторию.",
		},
		{
			border: "",
			img: <Analytics />,
			title: "Аналитика и оптимизация",
			text: "Сбор и анализ данных о взаимодействии пользователей с вашим контентом дополненной реальности позволяет определить успешные и неэффективные элементы, улучшить результаты и оптимизировать вашу стратегию. Это помогает увеличить вовлечение пользователей и улучшить конверсию.",
		},
		{
			border: "",
			img: <Universal />,
			title: "Универсальность",
			text: "Технология дополненной реальности подходит для широкого спектра отраслей и сфер применения, включая розничную торговлю, образование, культуру, развлечения и многое другое. Она добавляет интерактивность и погружение в любую сферу деятельности, делая её более привлекательной.",
		},
		{
			border: "",
			img: <Time />,
			title: "Экономия времени и ресурсов",
			text: "Внедрение технологии дополненной реальности через веб-браузер позволяет сократить затраты на разработку, тестирование и поддержку отдельных приложений. Это экономит время и ресурсы, делая процесс внедрения быстрым и удобным.",
		},
		{
			border: "",
			img: <Education />,
			title: "Обучение и поддержка",
			text: "Мы предоставляем комплексное обучение и сопровождение для вашей команды, чтобы вы могли эффективно использовать наше решение. Наша команда всегда готова оказать поддержку, ответить на вопросы и помочь с проблемами.",
		},
		{
			border: "",
			img: <Compatibility />,
			title: "Совместимость",
			text: "Технология дополненной реальности работает на множестве платформ, включая iOS, Android и Windows, обеспечивая доступность для широкой аудитории. Это позволяет привлечь больше пользователей и расширить возможности взаимодействия с вашим продуктом или услугой.",
		},
	];

	return (
		<div className={styles.section}>
			{data.map((el) => (
				<div className={styles.block} key={el.title}>
					<div className={styles.picture}>
						<div className={styles.border}>{el.border}</div>
						<div className={styles.icon}>{el.img}</div>
					</div>
					<div className={styles.title}>{el.title}</div>
					<div className={styles.text}>{el.text}</div>
				</div>
			))}
		</div>
	);
};

export default Advantages;
