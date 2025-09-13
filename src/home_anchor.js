class HomeAnchor extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const link = this.getAttribute("link");

		this.outerHTML = `
		<div id="home_anchor">
			<a href="/${link}">
				<img src="/icons/${link}.png"/>
			</a>
		</div>
		`;
	}
}

customElements.define('home-anchor', HomeAnchor);

