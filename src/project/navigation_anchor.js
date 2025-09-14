class NavigationAnchor extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const type = this.getAttribute("type");

		let anchor = "";
		if (type === "none") {
		anchor = ``;
		} else if(type === "category") {
		anchor = `
		<a href="/project">
			${type.toUpperCase()}
		</a>
		`;
		} else {
		anchor = `
		<a href="/project/${type}.html">
			${type.toUpperCase()}
		</a>
		`;
		}

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
					${anchor}
				</span>
			</div>
		</div>
		`;
	}
}

customElements.define('navigation-anchor', NavigationAnchor);


