const triggers = document.querySelectorAll('a');
const highlight: HTMLSpanElement = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

interface Coords {
  width: number;
  height: number;
  top: number;
  left: number;
}

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords: Coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
