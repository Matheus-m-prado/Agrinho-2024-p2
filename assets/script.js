// MENU ANIMATION
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropdownmenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function(){
	dropdownmenu.classList.toggle('open');
	const isOpen = dropdownmenu.classList.contains('open');

	toggle.classList = isOpen
	? 'fa-solid fa-xmark'
	: 'fa-solid fa-bars'
}



// PARALLAX
let text = document.getElementById('ptext');

// dando animação as imagens ao scrollar a tela
window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    text.style.marginLeft = scroll * -.3 + 'px';
});
