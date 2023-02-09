const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked: HTMLInputElement;

function handleCheck(e: PointerEvent) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (!e.shiftKey && this.checked) {//e.shiftKey &&
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.dir(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = true;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox = this;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));