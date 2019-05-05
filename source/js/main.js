var nav = document.querySelector('.main-nav__top-menu');
var toggle = document.querySelector('.main-nav__toggle');
var sitelist = document.querySelector('.site-list');

toggle.addEventListener('click', function() {
	nav.classList.add('main-nav__top-menu--opened');
	sitelist.classList.add('site-list--opened');
});
