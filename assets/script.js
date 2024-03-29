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

window.addEventListener('scroll', function(){
	const navbar = document.getElementById('navbar');
	let scroll = window.scrollY;
	if(scroll >= 10){
		navbar.style.backdropFilter = 'blur(100px)';
		navbar.style.marginTop = '10px';
		navbar.style.padding = '0 20px';
	}else{
		navbar.style.backdropFilter = 'blur(0px)';
		navbar.style.marginTop = '0px';
		navbar.style.padding = '0';
	}
});


// PARALLAX
let migracao = document.getElementById('ptext');
let start = document.getElementById('text');
let start2 = document.getElementById('textp');

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
		
    migracao.style.marginLeft = scroll * -.4 + 'px';
		start.style.marginTop = scroll * .4 + 'px';
		start2.style.marginTop = scroll * .4 + 'px';
});
