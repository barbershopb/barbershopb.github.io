function update() {
	var updateSite = document.getElementById("js-overlay_update");
	updateSite.classList.add("main_overlay-show"); 
}
function closePopup() {
	var closePopup = document.getElementById("js-overlay_update");
	closePopup.classList.remove("main_overlay-show"); 
}


function openHamburger() {
	var menu = document.getElementById("js-menu__hamburger");
	menu.classList.toggle("main_nav-menu-show"); 
}