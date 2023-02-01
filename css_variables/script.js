const div = document.createElement("div");

div.innerHTML = `
  <h2>Update CSS Variables with <span class='hl'>JS</span></h2>
  <div class="controls">
    <label for="spacing">Spacing:</label>
    <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">
    <label for="blur">Blur:</label>
    <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
    <label for="base">Base Color</label>
    <input id="base" type="color" name="base" value="#ffc600">
  </div>
  <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500">
`;

document.body.append(div);

const inputs = document.querySelectorAll(".controls input");
function handleChange() {
	const suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix
	);
}
inputs.forEach((input) => input.addEventListener("change", handleChange));
inputs.forEach((input) => input.addEventListener("mousemove", handleChange));
