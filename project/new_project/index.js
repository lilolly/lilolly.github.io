function add_element() {
	const step_input = document.getElementById("step_input");

	const steps = document.getElementById("steps");
	const node = document.createElement("li");
	const text = document.createTextNode(step_input.value);

	node.appendChild(text);
	steps.appendChild(node);
	step_input.value = "";
}

function attempt_prepopulate() {
	const url = window.localStorage.getItem("url_path");
	if (url === null) {
		return;
	}

	document.getElementById("title_input")
		.value = window.localStorage.getItem("title");
	document.getElementById("about")
		.getElementsByTagName("textarea")[0]
		.value = window.localStorage.getItem("about");
	document.getElementById("project_journal")
		.getElementsByTagName("textarea")[0]
		.value = window.localStorage.getItem("journal");

	window.localStorage.getItem("steps")
		.split("\n")
		.forEach(step => {
			document.getElementById("step_input")
				.value = step;
			add_element();
		});
}
