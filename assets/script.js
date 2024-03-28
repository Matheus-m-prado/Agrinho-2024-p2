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
let migracao = document.getElementById('ptext');
let start = document.getElementById('text');
let start2 = document.getElementById('textp');


// dando animação as imagens ao scrollar a tela
window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    migracao.style.marginLeft = scroll * -.3 + 'px';
		start.style.marginTop = scroll * .4 + 'px';
		start2.style.marginTop = scroll * .4 + 'px';
});
