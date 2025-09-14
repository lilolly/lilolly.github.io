class Category extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		//const type = this.getAttribute("type");

		this.outerHTML = `
		<h1>Baby</h1>

		<div id="ongoing">
			<h2>Ongoing</h2>
			<ul>
				<project-anchor
					link="01_something"
					type="baby"
					title="Naza Toys"
				></project-anchor>

			</ul>
		</div>

		<div id="archive">
			<h2>Archived</h2>
			<ul>
				<li>
					<img src="/icons/baby.png"></img>
					<span>Naza Clothes</span>
				</li>
			</ul>
		</div>
		`;
	}
}

customElements.define('category', Category);
