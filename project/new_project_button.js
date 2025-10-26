class NewProjectButton extends HTMLElement {
	constructor() {
		super();
	}

	should_render() {
		return Cookies.get('admin') === 'true';
	}

	clear_session() {
		window.localStorage.clear();
	}

	connectedCallback() {
		if (!this.should_render()) {
			this.outerHTML = "";
		}

		const span = document.createElement("span");
		span.innerText = "New Project";

		const anchor = document.createElement("a");
		anchor.href = this.getAttribute("href");
		anchor.onclick = this.clear_session;
		anchor.appendChild(span);

		const list_item = document.createElement("li");
		list_item.appendChild(anchor);

		this.replaceWith(list_item);
	}
}

customElements.define('new-project-button', NewProjectButton);
