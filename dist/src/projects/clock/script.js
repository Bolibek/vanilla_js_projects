var div = document.createElement("div");
div.classList.add("clock");
div.innerHTML = "\n  <div class=\"clock-face\">\n    <div class=\"hand hour-hand\"></div>\n    <div class=\"hand min-hand\"></div>\n    <div class=\"hand second-hand\"></div>\n    <div class=\"hand center-hand\"></div>\n  </div>\n";
document.body.append(div);
var hourShaft = document.querySelector(".hour-hand");
var minShaft = document.querySelector(".min-hand");
var secondShaft = document.querySelector(".second-hand");
var setCurrentTime = function () {
    var now = new Date();
    var second = now.getSeconds() * 6 + 90, min = now.getMinutes() * 6 + 90 + second / 60, hour = now.getHours() * 30 + 90 + min / 60;
    hourShaft.style.transform = "rotate(".concat(String(hour), "deg)");
    minShaft.style.transform = "rotate(".concat(String(min), "deg)");
    secondShaft.style.transform = "rotate(".concat(String(second), "deg)");
};
setCurrentTime();
setInterval(setCurrentTime, 1000);
//# sourceMappingURL=script.js.map