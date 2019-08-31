function updateSite() {
	var showUpdate = document.getElementById("js-overlay");

	showUpdate.classList.add("overlay_show");
}

function closeUpdateSite() {
	var close = document.getElementById("js-overlay");
	close.classList.remove("overlay_show");
}

function showLang() {
	var showOtherLang = document.getElementById("js-choose_lang");
	showOtherLang.classList.toggle("choose_lang-list");
}

function showLocation() {
	var showOtherLocation = document.getElementById("js-user_contacts-country-list");
	showOtherLocation.classList.toggle("user_contacts__show");
}

function showcalCulation() {
	var showService = document.getElementById("js-find_service");
	showService.classList.toggle("find_service__show");
}
function showVideoAbout() {
	var showVideo = document.getElementById("js-video_about");

	showVideo.classList.add("video_show");
}


