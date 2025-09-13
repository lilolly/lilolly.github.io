export class FrameController extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.outerHTML = `
		<div class="frame_header">
			<div class="frame_controllers">
				<div class="button_min">
					<div class="minimize"></div>
				</div>
				<div class="button_max">
					<div class="maximize"></div>
				</div>
				<div class="button_x">
					<svg>
						<line x1="0" y1="100%" x2="100%" y2="0"></line>
						<line x1="0" y1="0" x2="100%" y2="100%"></line>
					</svg>
				</div>
			</div>
		</div>
		`;
	}
}


customElements.define('frame-controller', FrameController);
