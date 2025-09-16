class HomeAnchor extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const link = this.getAttribute("link");

		this.outerHTML = `
		<div class="home_anchor">
			<a href="/${link}" alt="bob" data-title="roy">
				<img src="/icons/${link}.png"/>
			</a>
		</div>
		`;
	}
}

customElements.define('home-anchor', HomeAnchor);

