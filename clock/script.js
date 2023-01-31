const hourShaft = document.querySelector(".hour-hand");
const minShaft = document.querySelector(".min-hand");
const secondShaft = document.querySelector(".second-hand");

const setCurrentTime = () => {
	const now = new Date();
	const second = now.getSeconds() * 6 + 90,
		min = now.getMinutes() * 6 + 90 + second / 60,
		hour = now.getHours() * 30 + 90 + min / 60;
	hourShaft.style.transform = `rotate(${hour}deg)`;
	minShaft.style.transform = `rotate(${min}deg)`;
  secondShaft.style.transationTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)'
	secondShaft.style.transform = `rotate(${second}deg)`;
};

setCurrentTime()

setInterval(setCurrentTime, 1000);

// other developer's version
// function setDate() {
//     const now = new Date();

//     const seconds = now.getSeconds();
//     const secondsDegrees = ((seconds / 60) * 360) + 90;
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//     const mins = now.getMinutes();
//     const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
//     minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//     const hour = now.getHours();
//     const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
//     hourHand.style.transform = `rotate(${hourDegrees}deg)`;
//   }

//   setInterval(setDate, 1000);

//   setDate();