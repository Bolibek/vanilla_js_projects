var triggers = document.querySelectorAll('a');
var highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);
function highlightLink() {
    var linkCoords = this.getBoundingClientRect();
    var coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };
    highlight.style.width = "".concat(coords.width, "px");
    highlight.style.height = "".concat(coords.height, "px");
    highlight.style.transform = "translate(".concat(coords.left, "px, ").concat(coords.top, "px)");
}
triggers.forEach(function (a) { return a.addEventListener('mouseenter', highlightLink); });
//# sourceMappingURL=follow_mouth.js.map