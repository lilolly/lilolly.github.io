import { export_project } from '/project/new_project/export_project.js';

class EditButtons extends HTMLElement {
	constructor() {
		super();
	}

	edit_page(category) {
		window.localStorage.setItem("url_path", location.pathname);

		const title = document.getElementsByTagName("h1")[0].innerText;
		window.localStorage.setItem("title", title);

		let about = "";
		const about_p = document.getElementById("about").getElementsByTagName("p");
		for (let i = 0; i < about_p.length; i++) {
			about += about_p[i].innerText;
			about += "\n";
		}
		window.localStorage.setItem("about", about.trim());

		let journal = "";
		document.getElementById("project_journal")
			.childNodes
			.forEach(child => {
				if (child.nodeName !== 'undefined' && child.nodeName === "P") {
					journal += child.innerText;
					journal += "\n";
				} else if (child.nodeName !== 'undefined' && child.nodeName === "IMG") {
					journal += child.src;
					journal += "\n";
				}
			});
		window.localStorage.setItem("journal", journal.trim());

		let steps = "";
		const steps_li = document.getElementById("project_steps").getElementsByTagName("li");
		for (let i = 0; i < steps_li.length; i++) {
			steps += steps_li[i].innerText;
			steps += "\n";
		}
		window.localStorage.setItem("steps", steps.trim());
		location.href = `/project/new_project?type=${category}`
	}

	should_render () {
		const is_admin = Cookies.get('admin') === 'true'
		const is_project = location.pathname.search('_projects') > 0;
		return is_admin && is_project;
	}

	connectedCallback() {
		if (!this.should_render()) {
			return;
		}
		const category = this.getAttribute("category");

		const button = document.createElement("button");
		button.className = "edit_button";

		button.innerHTML =  "EDIT";
		button.onclick = () => this.edit_page(category);

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
