let timer;
let touch_duration = 5000;

function get_editing_style() {
	for (const sheet of document.styleSheets) {
		for(const rule of sheet.rules) {
			if (rule.selectorText === ".editing") {
				return rule;
			}
		}
	}
}

function enable_editing() {
	const editing_rule = get_editing_style();
	editing_rule.style.visibility = 'visible';
}

export function disable_editing() {
	const editing_rule = get_editing_style();
	editing_rule.style.visibility = 'hidden';
}

function touch_start(e) {
	e.preventDefault();
	if (!timer) {
		timer = setTimeout(enable_editing, touch_duration);
	}
}

function touch_end() {
	if (timer) {
		clearTimeout(timer);
		timer = null;
	}
}

document.addEventListener("DOMContentLoaded", function(event) { 
	window.addEventListener("touchstart", touch_start, false);
	window.addEventListener("touchend", touch_end, false);
});
