function changeLanguage() {
	var checkLanguage = document.getElementById("js-change_lang");
	checkLanguage.classList.toggle("lang-open");
}
function hamburgerOpen() {
	var hamburgerOpen = document.getElementById("js-hamburger");
	hamburgerOpen.classList.toggle("hamburger-open");
}

function videoUnavailableDesign() {
	var videoMessageShow = document.getElementById("js-unavailable__design");
	videoMessageShow.classList.add("video-show__design");
}

function videoUnavailableSkills() {
	var videoMessageShow = document.getElementById("js-unavailable__skills");
	videoMessageShow.classList.add("video-show__skills");
}

function videoUnavailableQuality() {
	var videoMessageShow = document.getElementById("js-unavailable__quality");
	videoMessageShow.classList.add("video-show__quality");
}

function videoSkills() {
	var videoShow = document.getElementById("js-skills__video");
	videoShow.classList.add("skills__video-open");
}

function videoSkillsClose() {
	var videoClose = document.getElementById("js-skills__video");
	videoClose.classList.remove("skills__video-open");
}





