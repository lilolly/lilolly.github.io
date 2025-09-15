export function export_project() {
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

	const navigation = document.getElementsByTagName("navigation-anchor")[0];
	const actual_nav = navigation.innerHTML;
	navigation.innerText = "";

	const full_dom = `<!DOCTYPE html>
${document.head.outerHTML}
${document.body.outerHTML}`;
	navigator.clipboard.writeText(full_dom);

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
