import { export_project } from '/project/new_project/export_project.js';
import { disable_editing } from '/common/touch_detector.js';

class EditButtons extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const type = this.getAttribute("type");

		let button_text;
		let button_action;
		const button = document.createElement("button");

		if (type === "category") {
			button.innerHTML =  "EXIT EDIT";
			button.onclick = disable_editing;
		} else if (type === "project") {
			button.innerHTML = "EXPORT";
			button.onclick = export_project;
		} else {
			this.outerHTML="";
			return;
		}

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

customElements.define('edit-buttons', EditButtons);
