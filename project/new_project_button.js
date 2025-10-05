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

		const image = document.createElement("img");
		image.src = this.getAttribute("src");

		const anchor = document.createElement("a");
		anchor.href = this.getAttribute("href");
		anchor.onclick = this.clear_session;
		anchor.appendChild(image);

		const span = document.createElement("span");
		span.innerText = "New Project";

		const list_item = document.createElement("li");
		list_item.appendChild(anchor);
		list_item.appendChild(span);

		this.replaceWith(list_item);
	}
}

customElements.define('new-project-button', NewProjectButton);
