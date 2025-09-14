class ProjectAnchor extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const link = this.getAttribute("link");
		const type = this.getAttribute("type");
		const title = this.getAttribute("title");

		console.log(link, type, title);

		this.outerHTML = `
		<li>
			<a href="/project/${link}">
				<img src="/icons/${type}.png"/>
			</a>
			<span>${title}</span>
		</li>
		`;
	}
}

customElements.define('project-anchor', ProjectAnchor);

