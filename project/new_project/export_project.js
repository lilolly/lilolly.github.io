export function export_project() {
	const url_parameters = new URLSearchParams(window.location.search);
	const type = url_parameters.get('type');

	const class_name = "editing_scripts";
	const about_element = document.querySelector(`#about .${class_name}`);
	const journal_element = document.querySelector(`#project_journal .${class_name}`);
	const title_element = document.getElementById("title_input");
	title_element.outerHTML = title_element.value;

	const about_text = about_element.value;
	about_element.remove();
	const journal_text = journal_element.value;
	journal_element.remove();

	for (const text of about_text.split("\n")) {
		document.getElementById("about")
			.appendChild(text.startsWith("https://") 
				? make_image(text)
				: make_paragraph(text)
			);
	}

	for (const text of journal_text.split("\n")) {
		document.getElementById("project_journal")
			.appendChild(text.startsWith("https://")
				? make_image(text)
				: make_paragraph(text)
			);
	}

	const editing_scripts = document.getElementsByClassName(class_name);
	for (let i = editing_scripts.length - 1; i>=0; i--) {
		editing_scripts[i].remove();
	}

	const edit_buttons = document.getElementsByTagName("edit-buttons")[0];
	edit_buttons.setAttribute('type', type);

	const navigation = document.getElementsByTagName("navigation-anchor")[0];
	navigation.setAttribute('type', type);

	const full_dom = `<!DOCTYPE html>
${document.head.outerHTML}
${document.body.outerHTML}`;
	navigator.clipboard.writeText(full_dom);
	
	if (window.localStorage.getItem("url_path") !== null) {
		redirect_edit_page('liloly', 'main',);
	} else {
		redirect_new_page('liloly', 'main', type);
	}
}

function make_image(text) {
	const image = document.createElement("img");
	image.src = text;
	return image;
}

function make_paragraph(text) {
	const paragraph = document.createElement("p");
	paragraph.innerText = text;
	return paragraph;
}

function redirect_edit_page(username, branch) {
	const home = `https://github.com/${username}/${username}.github.io/edit/${branch}`
	const path = window.localStorage.getItem('url_path');
	window.localStorage.removeItem("url_path");
	window.location.replace(`${home}/${path}`);
}

function redirect_new_page(username, branch, category) {
	const home = `https://github.com/${username}/${username}.github.io/new/${branch}`
	window.location.replace(`${home}/project/${category}/ongoing_projects`);
}
