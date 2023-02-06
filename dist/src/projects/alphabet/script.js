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
//# sourceMappingURL=script.js.map