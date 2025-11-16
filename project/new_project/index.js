function add_element() {
	console.log("making");
	const step_input = document.getElementById("step_input");

	const steps = document.getElementById("steps");
	const node = document.createElement("li");

	node.className = "selectable_li";

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.onclick = () => {
		if (checkbox.checked) {
			checkbox.setAttribute("checked", "true");
		} else {
			checkbox.setAttribute("checked", "false");
		}
	};

	const text = document.createElement("span");
	text.innerText = step_input.value;

	node.appendChild(checkbox);
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
