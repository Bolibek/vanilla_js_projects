var navList2 = ["alphabet", "clock"];
var homeNav2 = document.querySelector(".navbar-brand");
homeNav2.style.textDecoration = "none";
homeNav2.style.marginLeft = "50px";
homeNav2.style.color = "white";
var navs2 = document.querySelector(".navbar-route");
navList2.map(function (navLink) {
    var nav = document.createElement("a");
    nav.href = "/dist/".concat(navLink, ".html");
    nav.textContent = navLink;
    nav.style.textDecoration = "none";
    nav.style.margin = "0 10px";
    nav.style.color = "white";
    navs2.append(nav);
});
navs2.style.padding = "0 50px";
var playLetterSounds = function (e) {
    var audio = document.querySelector("audio[data-key=\"".concat(e.code, "\"]"));
    var key = document.querySelector("div[data-key=\"".concat(e.code, "\"]"));
    if (!audio)
        return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
};
function removeTransition(e) {
    if (e.propertyName !== "transform")
        return;
    e.target.classList.remove("playing");
}
document.addEventListener("keydown", playLetterSounds);
var keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(function (key) {
    return key.addEventListener("transitionend", removeTransition);
});
