let headerNav = document.querySelector('.header-nav');
let headerToggle = document.querySelector('.header-nav__toogle');

headerNav.classList.remove('header-nav--nojs');

headerNav.addEventListener('click', function() {
	if (headerNav.classList.contains('header-nav--closed')) {
		headerNav.classList.remove('header-nav--closed');
		headerNav.classList.add('header-nav--opened');
	} else {
		headerNav.classList.add('header-nav--closed');
		headerNav.classList.remove('header-nav--opened');
	}
})
