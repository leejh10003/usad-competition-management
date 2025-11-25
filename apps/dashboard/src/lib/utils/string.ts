export function splitStringForQueryHighlight(
	original: string | null | undefined,
	query: string | null | undefined
) {
	if (original) {
		if (query && query.trim().length > 0) {
			const loweredOriginal = original.toLowerCase();
			const loweredQuery = query.toLowerCase();
			let currentIndex = 0;
			const result: { originalQuery: string; originalString: string }[] = [];
			while (loweredOriginal.indexOf(loweredQuery, currentIndex) >= 0) {
				const queryStartIndex = loweredOriginal.indexOf(loweredQuery, currentIndex);
				const originalString = original.substring(currentIndex, queryStartIndex);
				const originalQuery = original.substring(queryStartIndex, queryStartIndex + query.length);
				result.push({
					originalQuery,
					originalString
				});
				currentIndex = queryStartIndex + query.length;
			}
			if (currentIndex < original.length) {
				result.push({
					originalString: original.substring(currentIndex),
					originalQuery: ''
				});
			}
			return result;
		} else {
			return [{ originalString: original, originalQuery: '' }];
		}
	} else {
		return [];
	}
}
