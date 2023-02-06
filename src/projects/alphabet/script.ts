const playLetterSounds = (e: any) => {
	const audio: HTMLAudioElement = document.querySelector(
		`audio[data-key="${e.code}"]`
	);
	const key: HTMLElement = document.querySelector(`div[data-key="${e.code}"]`);
	if (!audio) return;
	key.classList.add("playing");
	audio.currentTime = 0;
	audio.play();
};

function removeTransition(e: any) {
	if ((e.propertyName as string) !== "transform") return;
	e.target.classList.remove("playing");
}

document.addEventListener("keydown", playLetterSounds);

const keys: HTMLElement[] = Array.from(document.querySelectorAll(".key"));
keys.forEach((key: any) =>
	key.addEventListener("transitionend", removeTransition)
);
