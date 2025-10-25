class ProjectAnchor extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const work_status = this.getAttribute("work_status");
		const link = this.getAttribute("link");
		const type = this.getAttribute("type");
		const title = this.getAttribute("title");

		this.outerHTML = `
		<li>
			<a href="/project/${type}/${work_status}_projects/${link}.html">
				<img src="/icons/${type}.png"/>
				<span>${title}</span>
			</a>
		</li>
		`;
	}
}

customElements.define('project-anchor', ProjectAnchor);

