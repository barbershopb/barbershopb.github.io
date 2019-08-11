function popUpShow() {
    var popup = document.getElementById("overlay_start");
    popup.classList.add("pup_up-overlay-show");
}
function popUpClose() {
    var close = document.getElementById("overlay_start");
    close.classList.remove("pup_up-overlay-show");
}
function updateSiteShow() {
    var updatingSite = document.getElementById("js-updating_site");
    updatingSite.classList.add("js-message_updating-overlay");
}
function updateSiteClose() {
    var close = document.getElementById("js-updating_site");
    close.classList.remove("js-message_updating-overlay");
}
function socialMessageShow() {
    var socialUpdate = document.getElementById("js-socialUpdate");
    socialUpdate.classList.add("js-social_overlay-show");
}
function socialMessageClose() {
    var close = document.getElementById("js-socialUpdate");
    close.classList.remove("js-social_overlay-show");
}
function feedBackShow() {
    var feedback = document.getElementById("js-feedback");
    feedback.classList.add("js-feedback_overlay_show");
}
function feedBackClose() {
    var close = document.getElementById("js-feedback");
    close.classList.remove("js-feedback_overlay_show");
}
function gotFeedback() {
    var feedback = document.getElementById("js-got_feedback");
    feedback.classList.add("js-got_feedback_show");
}
function gotFeedbackClose() {
    var close = document.getElementById("js-got_feedback");
    close.classList.remove("js-got_feedback_show");
}
function carouselForward() {
    var photo = document.getElementById("borod_hall-main");
    photo.classList.add("photo_forward");
}
function carouselBack() {
    var photoBack = document.getElementById("borod_hall-main");
    photoBack.classList.remove("photo_forward");
}
function makeOverLay() {
    var overlay = document.getElementById("overlay_start");
    overlay.classList.add("pup_up-overlay-show");
}
