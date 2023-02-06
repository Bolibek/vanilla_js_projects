var panels = document.querySelectorAll('.panel');
function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}
function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}
panels.forEach(function (panel) { return panel.addEventListener('click', toggleOpen); });
panels.forEach(function (panel) { return panel.addEventListener('transitionend', toggleActive); });
//# sourceMappingURL=script.js.map