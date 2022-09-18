	const slidebar = document.querySelector(".slidebar");
	const slide_menu = document.querySelector(".slide_menu");
	const close_nav = document.querySelector(".close_nav");


	slidebar.onclick = () => {
		slide_menu.classList.add('active');
	}
	close_nav.onclick = () => {
		slide_menu.classList.remove('active');
	}