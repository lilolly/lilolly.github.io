import { FrameController } from "./frame_controller.js";

class Navigation extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const src = this.getAttribute("src");
		const title = this.getAttribute("title");

		this.outerHTML = `
		<div id="left">
			<div id="links">
				<a id="link_kofi" href="https://Ko-fi.com/lilolly">
				</a>
				<a id="link_home" href="/">
				</a>
			</div>

			<div id="page_icon_frame">
				<frame-controller></frame-controller>
				<div id="page_icon_content">
					<img src="${src}"/>
					<h1>${title}</h1>
				</div>
			</div>
		</div>

		<div id="right">
			<div id="page_content_frame">
				<frame-controller></frame-controller>
				<ul>
					<li>Think 1</li>
					<li>Think 2</li>
					<li>Think 3</li>
					<li>Think 4</li>
				</ul>
			</div>
		</div>
		`;
	}
}

customElements.define('navigation-component', Navigation);
