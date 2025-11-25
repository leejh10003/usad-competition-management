export function disableNonNumeric(e: KeyboardEvent) {
	if (e.code.startsWith('Key')) {
		e.preventDefault();
	}
}
