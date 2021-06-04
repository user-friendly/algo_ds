/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 */

/**
 * Removes duplicates from a sorted array.
 */
function removeDupes(a) {
	// Current subarray key.
	var k = a[0];
	// Current subarray start.
	var l = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] != k) {
			k = a[i]
			l++
			a[l] = k
		}
	}
	return l + 1
}

function runTests() {
	let data = [0,0,1,1,1,2,2,3,3,4]
	let expected = [0,1,2,3,4,2,2,3,3,4]
	let expectedLength = 5
	
	let ret = removeDupes(data)
	
	if (ret === expectedLength) {
		console.log("Pass: removeDupes: length")
	}
	else {
		console.log("Fail: removeDupes: length")
	}
	
	if (true === data.every((v, i) => v == expected[i])) {
		console.log("Pass: removeDupes: array")
	}
	else {
		console.log("Fail: removeDupes: array")
	}
}

runTests()
