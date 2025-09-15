class TypeIcon extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const url_parameters = new URLSearchParams(window.location.search);
		const type = url_parameters.get('type');
		this.outerHTML = `<img class="title_bumpers" src="/icons/${type}.png"></img>`;
	}
}

customElements.define('type-icon', TypeIcon);
