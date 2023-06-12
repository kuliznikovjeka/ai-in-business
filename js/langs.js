// const langButtons = document.querySelectorAll("[data-btn]");
// const allLangs = ["ru", "en", "de"];
// const currentPathName = window.location.pathname;
// let currentLang =
// 	localStorage.getItem("language") || checkBrowserLang() || "ru";
// let currentTexts = {};

// const homeTexts = {
// 	"home_page-title": {
// 		ru: "Домашняя страница",
// 		en: "Homepage",
// 		de: "Startseite",
// 	},
// 	"home_page-1": {
// 		ru: "Первый параграф",
// 		en: "First paragraph",
// 		de: "Erster Paragraph",
// 	},
// 	"home_page-2": {
// 		ru: "Второй параграф",
// 		en: "Second paragraph",
// 		de: "Zweiter Absatz",
// 	},
// 	"home_page-3": {
// 		ru: "Третий параграф",
// 		en: "Third paragraph",
// 		de: "Dritter Absatz",
// 	},
// 	"home_page-4": {
// 		ru: "Другая страница",
// 		en: "Another page",
// 		de: "Eine andere Seite",
// 	},
// };
// const anotherTexts = {
// 	"another_page-title": {
// 		ru: "Другая страница",
// 		en: "Another page",
// 		de: "Eine andere Seite",
// 	},
// 	"another_page-1": {
// 		ru: "Первый параграф",
// 		en: "First paragraph on another page",
// 		de: "Erster Paragraph auf einer anderen Seite",
// 	},
// 	"another_page-2": {
// 		ru: "Второй параграф",
// 		en: "Second paragraph on another page",
// 		de: "Zweiter Absatz auf einer anderen Seite",
// 	},
// 	"another_page-3": {
// 		ru: "Третий параграф",
// 		en: "Third paragraph on another page",
// 		de: "Dritter Absatz auf einer anderen Seite",
// 	},
// 	"another_page-4": {
// 		ru: "Домашняя страница",
// 		en: "Homepage",
// 		de: "Startseite",
// 	},
// };

// // Проверка пути страницы сайта
// function checkPagePathName() {
// 	switch (currentPathName) {
// 		case "/index.html":
// 			currentTexts = homeTexts;
// 			break;
// 		case "/another_page.html":
// 			currentTexts = anotherTexts;
// 			break;

// 		default:
// 			currentTexts = homeTexts;
// 			break;
// 	}
// }
// checkPagePathName();

// // Изменение языка у текстов
// function changeLang() {
// 	for (const key in currentTexts) {
// 		let elem = document.querySelector(`[data-lang=${key}]`);
// 		if (elem) {
// 			elem.textContent = currentTexts[key][currentLang];
// 		}
// 	}
// }
// changeLang();

// // Вешаем обработчики на каждую кнопку
// langButtons.forEach((btn) => {
// 	btn.addEventListener("click", (event) => {
// 		if (!event.target.classList.contains("header__btn_active")) {
// 			currentLang = event.target.dataset.btn;
// 			localStorage.setItem("language", event.target.dataset.btn);
// 			resetActiveClass(langButtons, "header__btn_active");
// 			btn.classList.add("header__btn_active");
// 			changeLang();
// 		}
// 	});
// });

// // Сброс активного класса у переданного массива элементов
// function resetActiveClass(arr, activeClass) {
// 	arr.forEach((elem) => {
// 		elem.classList.remove(activeClass);
// 	});
// }

// // Проверка активной кнопки
// function checkActiveLangButton() {
// 	switch (currentLang) {
// 		case "ru":
// 			document
// 				.querySelector('[data-btn="ru"]')
// 				.classList.add("header__btn_active");
// 			break;
// 		case "en":
// 			document
// 				.querySelector('[data-btn="en"]')
// 				.classList.add("header__btn_active");
// 			break;
// 		case "de":
// 			document
// 				.querySelector('[data-btn="de"]')
// 				.classList.add("header__btn_active");
// 			break;

// 		default:
// 			document
// 				.querySelector('[data-btn="ru"]')
// 				.classList.add("header__btn_active");
// 			break;
// 	}
// }
// checkActiveLangButton();

// // Проверка языка браузера
// function checkBrowserLang() {
// 	const navLang = navigator.language.slice(0, 2).toLowerCase();
// 	const result = allLangs.some((elem) => {
// 		return elem === navLang;
// 	});
// 	if (result) {
// 		return navLang;
// 	}
// }

// console.log("navigator.language", checkBrowserLang());


const allLangs = ['ru', 'en'];
let currentLang = 'ru'; //Язык по умолчанию
const langButtons = document.querySelectorAll('[data-btn]'); // кнопки переключения языков
const currentPathName = window.location.pathname; // Определение страницы
let currentText = {};

// let spO = '<span>';
// let spL = '</span>';


const homeTexts = {
	'home_page-title': {
		ru: 'AIBS',
		en: 'AIBS',
	},
	'about': {
		ru: 'О компании',
		en: 'About Us',
	},
	'prevences': {
		ru: 'Преимущества',
		en: 'Advantages',
	},
	'services': {
		ru: 'Услуги',
		en: 'Services',
	},
	'cases': {
		ru: 'Кейсы',
		en: 'Cases',
	},
	'faq': {
		ru: 'FAQ',
		en: 'FAQ',
	},
	'main-menu': {
		ru: 'Главная',
		en: 'Main',
	},
	'connect': {
		ru: 'Связаться',
		en: 'Get in touch',
	},
	'main-title': {
		ru: `Внедрение <span>искусственного интеллекта</span> в бизнес`,
		en: `Implementing <span>Artificial Intelligence</span> in Business`,
	},
	'itm-ab-t-1': {
		ru: '3 года',
		en: '3 years',
	},
	'itm-ab-l-1': {
		ru: 'УСПЕШНОГО',
		en: 'successful',
	},
	'itm-ab-d-1': {
		ru: `внедрения и разработки решений на базе <span>ИИ</span> в
		бизнес-процессы`,
		en: `Implementing and developing <span>AI-based</span> solutions in business processes`,
	},
	'itm-ab-t-2': {
		ru: 'ПРЕДОСТАВЛЯЕТ',
		en: '3 years',
	},
	'itm-ab-l-2': {
		ru: 'УСЛУГИ',
		en: 'successful',
	},
	'itm-ab-d-2': {
		ru: `в различных секторах <span>экономики</span>`,
		en: `in various sectors of the <span>economy</span>`,
	},
	'itm-ab-t-3': {
		ru: 'AIBS',
		en: 'AIBS',
	},
	'itm-ab-l-3': {
		ru: 'ПРОВОДИТ',
		en: 'PROVIDES',
	},
	'itm-ab-d-3': {
		ru: `экспертизу в области <span>машинного обучения,</span> анализ данных и автоматизирует бизнес
		процессы`,
		en: `expertise in <span>machine learning</span>, data analysis, and business process automation`,
	},
	'itm-ab-t-4': {
		ru: 'ПОМОГАЕТ',
		en: 'HELPING',
	},
	'itm-ab-l-4': {
		ru: 'Клиентам',
		en: 'CUSTOMERS',
	},
	'itm-ab-d-4': {
		ru: `увеличить <span>эффективность</span> своих процессов, повысить <span>качество</span>
		продукции и услуг, а также
		оптимизировать <span>расходы</span>`,
		en: `Increase the <span>efficiency</span> of their processes, improve the <span>quality</span> of products and services, and optimize costs`,
	},
	'itm-adv-l-1': {
		ru: '3 ГОДА',
		en: '3 years',
	},
	'itm-adv-t-1': {
		ru: 'Успешной работы',
		en: 'Successful work',
	},
	'itm-adv-txt-1': {
		ru: `Наш опыт говорит за нас. За 3 года мы поработали с маленькими стартапами и с именитыми брендами.`,
		en: `Our experience speaks for us. In 3 years we have worked with small startups and big name brands.`,
	},
	'itm-adv-l-2': {
		ru: 'К КАЖДОМУ',
		en: 'TO EVERYONE',
	},
	'itm-adv-t-2': {
		ru: 'Индивидуальный подход',
		en: 'Individual approach',
	},
	'itm-adv-txt-2': {
		ru: `Каждая компания имеет свою концепция и нишу, но мы находим подход даже к самым трудным
		проектам.`,
		en: `Each company has its own concept and niche, but we find an approach to even the most difficult projects.`,
	},
	'itm-adv-l-3': {
		ru: 'ДОЛГОСРОЧНЫЙ',
		en: 'DURABLE',
	},
	'itm-adv-t-3': {
		ru: 'Непрерывный рост',
		en: 'Continuous growth',
	},
	'itm-adv-txt-3': {
		ru: `Наши опытные профессионалы помогут расти вашему бизнесу, внедряя новые технологии работы с
		ИИ.`,
		en: `Our experienced professionals can help your business grow by introducing new technologies for working with AI.`,
	},
	'itm-adv-l-4': {
		ru: 'ГЛАВНАЯ ИНФОРМАЦИЯ',
		en: 'GENERAL INFORMATION',
	},
	'itm-adv-t-4': {
		ru: 'Налоговые льготы при внедрении отечественных IT - решений',
		en: 'Tax incentives for the implementation of domestic IT-solutions',
	},
	'itm-adv-txt-4': {
		ru: `С 1 января 2023 года при покупке и внедрении отечественных решений, можно воспользоваться
		налоговыми льготами и направить дополнительные средства на технологическое обновление.
		Об этом заявил <span>Президент РФ Владимир Путин</span> на конференции «Путешествие в мир
		искусственного
		интеллекта».
		<br><br>
		При расчете налога на прибыль не будет учитываться сумма, в 1,5 раза превышающая фактические
		расходы компании на приобретение передовых российских разработок.
		<br><br>
		Если решение на базе ИИ будет стоить 10 млн рублей, то 15 млн прибыли вашей компании не будут
		облагаться налогом на прибыль. <span>Экономия</span> составит <span>3 млн рублей.</span>`,
		en: `From January 1, 2023, when purchasing and implementing domestic solutions, you can take advantage of
		tax incentives and channel additional funds for technological renewal.
		This was announced by <span>Russian President Vladimir Putin</span> at the conference "Journey into the World
		artificial
		world of artificial intelligence".
		<br><br>
		When calculating profits tax, an amount that is 1.5 times higher than the actual
		company's expenditures on acquiring advanced Russian developments will not be taken into account when calculating profits tax.
		<br><br>
		If an AI-based solution costs 10 million roubles, then 15 million of your company's profits will not be
		will not be subject to profits tax. <span>Savings</span> will amount to <span>3 million rubles</span>.`,
	},
	'main-s-txt-1': {
		ru: '<span>Разработка и внедрение систем машинного обучения</span> представляет собой комплексную работу по созданию и внедрению искусственного интеллекта (ИИ) в бизнес-процессы заказчика. Наша команда профессионалов занимается разработкой ИИ, который будет оптимизировать работу вашей компании и повышать ее эффективность.Наши <span>услуги включают в себя</span> следующие этапы:',
		en: `<span>Development and implementation of machine learning systems</span> is a comprehensive work on creation and implementation of artificial intelligence (AI) into customer's business processes. Our team of professionals develops AI that will optimize your company's performance and increase its efficiency. Our <span>services include</span> the following steps:`,
	},
	'main-s-txt-2': {
		ru: `<span>Наша команда</span> готова предложить вам самые передовые решения в области машинного
		обучения и создать
		для вас наиболее эффективную систему ИИ, которая поможет оптимизировать работу вашего бизнеса. С
		нами вы получите высококачественный продукт, который будет соответствовать всем вашим требованиям и
		пожеланиям.`,
		en: `<span>Our team</span> is ready to offer you the most advanced machine learning solutions
		learning solutions and to create
		The most effective AI system for you, which will help optimize the performance of your business. С
		With us you will get a high quality product that will meet all your requirements and
		desires.`,
	},

	'main-s-l-1': {
		ru: 'Анализ бизнес - процессов заказчика.',
		en: `Analysis of the customer's business processes.`,
	},
	'main-s-d-1': {
		ru: 'Наш опыт говорит за нас. За 3 года мы поработали с маленькими стартапами и с именитыми брендами.',
		en: `Our experience speaks for us. In 3 years we have worked with small startups and big name brands.`,
	},
	'main-s-l-2': {
		ru: 'Разработка концепции',
		en: `Concept development`,
	},
	'main-s-d-2': {
		ru: 'Наш опыт говорит за нас. За 3 года мы поработали с маленькими стартапами и с именитыми брендами.',
		en: `Our experience speaks for us. In 3 years we have worked with small startups and big name brands.`,
	},
	'main-s-l-3': {
		ru: 'Создание модели машинного обучения',
		en: `Creating a machine learning model`,
	},
	'main-s-d-3': {
		ru: 'Наш опыт говорит за нас. За 3 года мы поработали с маленькими стартапами и с именитыми брендами.',
		en: `Our experience speaks for us. In 3 years we have worked with small startups and big name brands.`,
	},
	'main-s-title': {
		ru: `<span>Разработка и внедрение</span> систем машинного
		обучения в бизнес`,
		en: `<span>Development and implementation</span> of machine learning systems	learning systems in business`,
	},
	'main-s-sub-title': {
		ru: 'Наш опыт говорит за нас. За 3 года мы поработали с маленькими стартапами и с именитыми брендами.',
		en: `Our experience speaks for us. In 3 years we have worked with small startups and big name brands.`,
	},
	'main-s-l-4': {
		ru: 'Тестирование и оптимизация',
		en: `Testing and optimization`,
	},
	'main-s-d-4': {
		ru: 'Наш опыт говорит за нас. За 3 года мы поработали с маленькими стартапами и с именитыми брендами.',
		en: `Our experience speaks for us. In 3 years we have worked with small startups and big name brands.`,
	},
	'main-s-l-5': {
		ru: 'Внедрение и обучение персонала',
		en: `Implementation and staff training`,
	},
	'main-s-d-5': {
		ru: 'Наш опыт говорит за нас. За 3 года мы поработали с маленькими стартапами и с именитыми брендами.',
		en: `Our experience speaks for us. In 3 years we have worked with small startups and big name brands.`,
	},
	'main-s-l-6': {
		ru: 'Внедрение и обучение персонала',
		en: `Implementation and staff training`,
	},
	'main-s-d-6': {
		ru: 'Наш опыт говорит за нас. За 3 года мы поработали с маленькими стартапами и с именитыми брендами.',
		en: `Our experience speaks for us. In 3 years we have worked with small startups and big name brands.`,
	},
};

function checkPagePathName() {
	switch (currentPathName) {
		case '/index.html':
			currentText = homeTexts;
			break;
		case '/another_page.html':
			currentText = homeTexts;
			break;

		default:
			currentText = homeTexts;
			break;
	}
}
checkPagePathName();

function changeLang() {
	for (const key in currentText) {
		const elem = document.querySelectorAll(`[data-lang=${key}]`);
		if (elem) {
			elem.forEach(el => {
				el.innerHTML = currentText[key][currentLang];
			}
			)
		}
	}
}
changeLang();

langButtons.forEach((btn => {
	btn.addEventListener('click', (event) => {
		currentLang = event.target.dataset.btn;
		btn.classList.add('actions-header__option_active');
		changeLang();
	});
}));