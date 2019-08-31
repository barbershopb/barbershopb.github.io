function UpdateSite() {
var showPopUp = document.getElementById("js-overlay_update");
showPopUp.classList.add("open_popup");
}

function UpdateSiteClose() {
var closePopUp = document.getElementById("js-overlay_update");
closePopUp.classList.remove("open_popup");
}

function openUserMenu() {
	var userMenu = document.getElementById("js-user_menu");
	userMenu.classList.toggle("user_menu-show");
}

function chooseDate() {
	var chooseDate = document.getElementById("js-choice_date");
	chooseDate.classList.toggle("choice-form_date__show");
}

function chooseDate2day() {
	var chooseDate = document.getElementById("js-choice_date__2day");
	chooseDate.classList.toggle("choice-form_date__show2day");
}

function boxList() {
	var choosePlace = document.getElementById("js-box_list");
	choosePlace.classList.toggle("box_list__block");
}

function unavailableDate() {
	var wrongDate = document.getElementById("js-overlay_wronagdate");
	wrongDate.classList.add("choice-form-item__show");
}

function WrongDateClose() {
	var wrongDateClose = document.getElementById("js-overlay_wronagdate");
	wrongDateClose.classList.remove("choice-form-item__show");
}

