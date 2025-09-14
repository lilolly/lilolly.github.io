class NavigationAnchor extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const type = this.getAttribute("type");

		this.outerHTML = `
		<div id="navigation">
			<div class="navigation_button" >
				<span>
					<a href="/">
						HOME
					</a>
				</span>
			</div>
			<div class="navigation_button" >
				<span>
					<a href="/project/${type}">
						${type.toUpperCase()}
					</a>
				</span>
			</div>
		</div>
		`;
	}
}

customElements.define('navigation-anchor', NavigationAnchor);


