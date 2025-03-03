function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.nav-btn');
	const nav = document.querySelector('.nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;