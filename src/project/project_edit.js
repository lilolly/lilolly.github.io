class ProjectEdit extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.outerHTML = `
		<div class="editing_scripts" id="edit_buttons">
			<div class="edit_button" >
				<button onClick="export_project()">
					EXPORT
				</button>
			</div>
		</div>
		`;
	}
}

customElements.define('project-edit', ProjectEdit);


