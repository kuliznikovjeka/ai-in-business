'use strict';
// ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР
const header = document.querySelector('.header');
const ai = document.querySelector('.ai');
const hederHeight = header.offsetHeight;
const aiHeight = ai.offsetHeight;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
	console.log(scrollDistance);

	if (scrollDistance >= aiHeight - 50) {
		header.classList.add('header__fixed');
		ai.style.marginTop = `${hederHeight}px`;
	} else {
		header.classList.remove('header__fixed');
		ai.style.marginTop = null;
	}
});
// ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР

// ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

document.querySelectorAll('a[href*="#"]').forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault()

		const href = this.getAttribute('href').substring(1);

		const scrollTagret = document.getElementById(href);

		const topOffset = document.querySelector('.header').offsetHeight + 15;
		if (window.innerWidth < 480) {
			topOffset === 100;
		}
		const elementPosition = scrollTagret.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		if (iconMenu.classList.contains('_active')) {
			document.body.classList.remove('_lock');
			menuBody.classList.remove('_active');
			iconMenu.classList.remove('_active');

		}

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth',
		})
	});
});

// ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ

// ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА
const headerDropdown = document.querySelector('.actions-header__dropdown');
const headerSelect = document.querySelector('.actions-header__select');
console.log(headerSelect);

const headerCaret = document.querySelector('.actions-header__caret');
const headerMenuList = document.querySelector('.actions-header__menu-list');
const headerOptions = document.querySelectorAll('.actions-header__menu-item');
const headerSelected = document.querySelector('.actions-header__selected');

headerSelect.addEventListener('click', () => {
	headerSelect.classList.toggle('select-clicked');
	headerCaret.classList.toggle('caret-rotate');
	headerMenuList.classList.toggle('menu-open');
});

headerOptions.forEach(option => {
	option.addEventListener('click', () => {
		headerSelected.innerText = option.innerText;
		headerSelect.classList.remove('select-clicked');
		headerCaret.classList.remove('caret-rotate');
		headerMenuList.classList.remove('menu-open');
	});
	headerOptions.forEach(option => {
		option.classList.remove('active');
		option.classList.add('active');
	});
})
// ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА

//СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР
function initSliders() {
	if (document.querySelector('.cases__slider.swiper')) {

		new Swiper('.cases__slider.swiper', {
			slidesPerView: 3,
			spaceBetween: 80,
			// loop: true,
			// centeredSlides: true,
			// autoplay: {
			// 	delay: 1500,
			// 	disableOnInteraction: false,
			// },

			// Навигация
			navigation: {
				nextEl: '.cases__arrow.cases__next',
				prevEl: '.cases__arrow.cases__prev',
			},

			pagination: {
				el: '.cases__pagination',
				clickable: true,
			},

			// адаптив
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,

				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1090: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1100: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1315: {
					slidesPerView: 3,
					spaceBetween: 80,
				},
			}
		});
	}
}

window.addEventListener("load", function (e) {
	initSliders();
});
//СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР

// АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН

document.addEventListener('DOMContentLoaded', () => {
	// 1) Получаем в константу все аккордионы, которые у нас есть
	const accrodions = document.querySelectorAll('.faq__item')
	// 2) Проходимся по ним, по всем аккордионам на странице
	accrodions.forEach(el => {
		// 3) Навешиваем событие клик на параметр (el)
		el.addEventListener('click', (e) => {
			// 4) создаем константу, которая содержит в себе конкретный элемент, на который нажали
			// это делается для того, чтобы не писать постоянно e.currentTarget;
			const self = e.currentTarget;
			// 5) Находим текущий элемент (текущий аккордион {КНОПКУ АККОРДИОНА})
			const control = self.querySelector('.faq__control');
			// 6) Находим текущий элемент (текущий контент - что будет выпадать)
			const content = self.querySelector('.faq__content');
			// 7) Либо открывается, либо закрывается
			self.classList.toggle('_open');
			// 8) Чтобы сринридер работал корректно - по нажатию нужно менять атрибуты, создаем условие
			//Если открыт аккордион
			if (self.classList.contains('_open')) {
				//поменяй атрибут на true
				control.setAttribute('aria-expanded', true);
				// а у контента сделай чтобы был виден
				content.setAttribute('aria-hidden', false);
				// Добавляем анимацию, находя высоту, которая складывается из того, что находится внутри
				content.style.maxHeight = content.scrollHeight + 'px';
				// Обратное действие этому else
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				// Убираем стили значением null
				content.style.maxHeight = null;
			}
		});
	});
});

// АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН

// АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			//настройка момента старта анимации
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	//функция для корректного получения значения offset
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	//задержка добавления класса active, для загрузки первого экрана
	setTimeout(() => {
		animOnScroll();
	}, 300);
}
// АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ