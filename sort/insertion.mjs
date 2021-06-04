/**
 * Insertion sort module file.
 */

export function insertionSort(a) {
	var j, i, key
	
	for (i = 1; i < a.length; i++) {
		key = a[i]
		
		for (j = i - 1; j >= 0 && a[j] > key; j--)
			a[j + 1] = a[j]
	
		a[j + 1] = key
	}
}

export function runTests() {
	// Test array.
	let data = [5, 2, 4, 6, 1, 3]
	let expected = [1, 2, 3, 4, 5, 6]

	insertionSort(data)
	
	let equal = data.every((v, i) => v == expected[i])
	if (equal)
		console.log("Passed: insertionSort()")
	else
		console.log("Failed: insertionSort()")
	return equal
}

export default insertionSort
