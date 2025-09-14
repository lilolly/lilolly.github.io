export function export_project() {
	const class_name = "editing_scripts";
	const about_element = document.querySelector(`#about .${class_name}`);
	const journal_element = document.querySelector(`#project_journal .${class_name}`);

	const about_text = about_element.value;
	const journal_text = journal_element.value;

	const about_p = document.createElement("p");
	about_p.innerText = about_text;
	const journal_p = document.createElement("p");
	journal_p.innerText = journal_text;

	about_element.replaceWith(about_p);
	journal_element.replaceWith(journal_p);

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

