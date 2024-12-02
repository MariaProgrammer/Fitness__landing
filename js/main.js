document.addEventListener('DOMContentLoaded', () => {

const next = document.querySelector('.swiper-button-next')
const prev = document.querySelector('.swiper-button-prev')
const right = document.querySelector('.success__button-right')
const left = document.querySelector('.success__button-left')
console.log(right, left);

next.addEventListener('click', ()=> {
if (!(next.classList.contains('active')) ) {
	next.classList.add('active');	
	prev.classList.remove('active');
	if (!(left.classList.contains('active')) ) {
		left.classList.add('active');	
		right.classList.remove('active');
	
}
}
})
prev.addEventListener('click', ()=> {
if (!(prev.classList.contains('active'))) {
	prev.classList.add('active');	
	next.classList.remove('active');

		if (!right.classList.contains('active')) {
		right.classList.add('active');	
		left.classList.remove('active');	
}
}

})

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu__list');

burger.addEventListener('click', ()=> {
	burgerMenu.classList.toggle('active');
	burger.classList.toggle('active');
})
	

const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
	const swiper1 = new Swiper('.swiper1', {
		direction: 'horizontal',
		loop: true,
		centeredSlides: true,
		slidesPerView: 3,
		spaceBetween: 30, 
   
    speed: 1000,
    keyboard: true,	
		navigation: {
			nextEl: '.swiper-button-prev',
			prevEl: '.swiper-button-next',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 15
			},
		 
			// when window width is >= 480px
			960: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			// when window width is >= 640px
			// 958: {
			// 	slidesPerView: 2,
			// 	spaceBetween: 15
			// },
			1279: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		},
		// pagination:	{
		// 	el: '.swiper-pagination',
		// 	clickable: true,
		// },
		mousewhell: true,
		keyboard: true,
		});
});




