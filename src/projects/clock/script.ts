const div: HTMLDivElement = document.createElement("div");
div.classList.add("clock");
div.innerHTML = "\n  <div class=\"clock-face\">\n    <div class=\"hand hour-hand\"></div>\n    <div class=\"hand min-hand\"></div>\n    <div class=\"hand second-hand\"></div>\n    <div class=\"hand center-hand\"></div>\n  </div>\n";
document.body.append(div);
const hourShaft: HTMLDivElement = document.querySelector(".hour-hand");
const minShaft: HTMLDivElement = document.querySelector(".min-hand");
const secondShaft: HTMLDivElement = document.querySelector(".second-hand");
const setCurrentTime = function () {
  const now: Date = new Date();
  const second: number = now.getSeconds() * 6 + 90, min: number = now.getMinutes() * 6 + 90 + second / 60, hour: number = now.getHours() * 30 + 90 + min / 60;
  hourShaft.style.transform = "rotate(".concat(String(hour), "deg)");
  minShaft.style.transform = "rotate(".concat(String(min), "deg)");
  secondShaft.style.transform = "rotate(".concat(String(second), "deg)");
};
setCurrentTime();
setInterval(setCurrentTime, 1000);
