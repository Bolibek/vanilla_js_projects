const video2: HTMLVideoElement = document.querySelector(".player");
const canvas2: HTMLCanvasElement = document.querySelector(".photo");
const ctx2 = canvas2.getContext("2d");
const strip = document.querySelector(".strip");
const snap: HTMLAudioElement = document.querySelector(".snap");

async function getVideo() {
  let localMediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  video2.srcObject = localMediaStream;
  video2.play();
}

function paintToCanvas() {
  const width = video2.videoWidth;
  const height = video2.videoHeight;
  canvas2.width = width;
  canvas2.height = height;

  return setInterval(() => {
    ctx2.drawImage(video2, 0, 0, width, height);
    let pixels = ctx2.getImageData(0, 0, width, height);
    pixels = redEffect(pixels);
    pixels = rgbSplit(pixels);
    ctx2.globalAlpha = 0.9;
    // pixels = greenScreen(pixels);
    ctx2.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  const data = canvas2.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels: any) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels: any) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 100] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 150] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels: any) {
  let levels: any = {};

  document.querySelectorAll(".rgb input").forEach((input: HTMLInputElement) => {
    levels[input.name] = input.value;
  });

  for (let i = 0; i < pixels.data.length; i = i + 4) {
    let red = pixels.data[i + 0];
    let green = pixels.data[i + 1];
    let blue = pixels.data[i + 2];
    let alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video2.addEventListener("canplay", paintToCanvas);
