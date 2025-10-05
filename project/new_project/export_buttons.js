import { export_project } from '/project/new_project/export_project.js';

class ExportButtons extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const type = this.getAttribute("type");

		const button = document.createElement("button");
		button.innerHTML = "EXPORT";
		button.onclick = export_project;

		const edit_buttons = document.createElement("div");
		edit_buttons.className = "editing_scripts";
		edit_buttons.id = "edit_buttons";
		
		const edit_button = document.createElement("div");
		edit_button.className = "edit_button";
		
		edit_buttons.appendChild(edit_button);
		edit_button.appendChild(button);

		this.appendChild(edit_buttons);
	}
}

customElements.define('export-buttons', ExportButtons);
