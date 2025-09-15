function add_element() {
	const step_input = document.getElementById("step_input");

	const steps = document.getElementById("steps");
	const node = document.createElement("li");
	const text = document.createTextNode(step_input.value);

	node.appendChild(text);
	steps.appendChild(node);
	step_input.value = "";
}
