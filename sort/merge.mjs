/**
 * Merge sort module file.
 */

/**
 * Merge sort.
 *
 * @param Array a
 * @param int i
 * 		Start position of subarray
 * @param int j
 * 		End position of subarray
 */
export function mergeSort(a, i = 0, j = a.length) {
	if (a.length <= 1) {
		return
	}
	
	// Midpoint offset 
	let m = i + Math.floor((j - i) / 2)
	
	if (i >= m) {
		console.log(`i: ${i}, j: ${j}, m: ${m}`)
		return
	}
	
	mergeSort(a, i, m )
	mergeSort(a, m, j)
	
	console.log("Sort arrays: ", i,m,j, a.slice(i, m), a.slice(m, j))
}

export function runTests() {
	// Test array
	let size = 10
	let data = Array.from({length: size}, (v, i) => (size - 1) - i)
	let expected = Array.from({length: size}, (v, i) => i)
	
	mergeSort(data)
	console.log(data)
	
	let equal = data.every((v, i) => v == expected[i])
	if (equal)
		console.log("Passed: mergeSort()")
	else
		console.log("Failed: mergeSort()")
	return equal
}

export default mergeSort

runTests()
