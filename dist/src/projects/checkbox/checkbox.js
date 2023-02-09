var checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
var lastChecked;
function handleCheck(e) {
    var _this = this;
    // Check if they had the shift key down
    // AND check that they are checking it
    var inBetween = false;
    if (!e.shiftKey && this.checked) { //e.shiftKey &&
        // go ahead and do what we please
        // loop over every single checkbox
        checkboxes.forEach(function (checkbox) {
            console.dir(checkbox);
            if (checkbox === _this || checkbox === lastChecked) {
                inBetween = true;
                console.log('Starting to check them in between!');
            }
            if (inBetween) {
                checkbox = _this;
            }
        });
    }
    lastChecked = this;
}
checkboxes.forEach(function (checkbox) { return checkbox.addEventListener('click', handleCheck); });
//# sourceMappingURL=checkbox.js.map