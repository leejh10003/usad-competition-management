export function getValidIdStringFromQrCode(e: string, path: string, paramName: string) {
	try {
		const url = new URL(e);
		if (
			url.pathname.replaceAll(/^\//g, '').replaceAll(/\/$/g, '') !==
			path.replaceAll(/^\//g, '').replaceAll(/\/$/g, '')
		) {
			return null;
		}
		const search = url.searchParams;
		if (!search.get(paramName)) {
			return null;
		}
		return search.get(paramName);
	} catch {
		return e;
	}
}
