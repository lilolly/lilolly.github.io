function get_editing_style() {
	for (const sheet of document.styleSheets) {
		for(const rule of sheet.rules) {
			if (rule.selectorText === ".editing") {
				return rule;
			}
		}
	}
}

export function enable_editing() {
	const editing_rule = get_editing_style();
	editing_rule.style.visibility = 'visible';
}

export function disable_editing() {
	const editing_rule = get_editing_style();
	editing_rule.style.visibility = 'hidden';
}
