function mergeStringsAlternately(string1, string2) {
	indexOne = string1.split("");
	indexTwo = string2.split("");

	let mergedIndex = [];
	let maxLength = Math.max(indexOne.length, indexTwo.length);

	for (let i = 0; i < maxLength; i++) {
		if (i < indexOne.length) mergedIndex.push(indexOne[i]);
		if (i < indexTwo.length) mergedIndex.push(indexTwo[i]);
	};

	const resultString = mergedIndex.join("");
	console.log(resultString);
};

mergeStringsAlternately("cat", "dog");

mergeStringsAlternately("Daniel", "Kim");

mergeStringsAlternately("Kim", "Daniel");