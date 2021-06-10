/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
 */

/**
 * Rotate to the right
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	if (k > nums.length) {
		k = k % nums.length
	}
	
	if (nums.length == 1 || nums.length == k || k == 0)
		return
	
	// Buffer
	let b = []
	// Current position
	let c = 0
	
	// DEBUG variable
	let p = 0
	
	let overflow = false
	
	// Start position in case of circular dependency
	let s = 0
	let circular = false
	if ((nums.length % 2 == 0 && k % 2 == 0) || (nums.length % 3 == 0 && k % 3 == 0)) {
		circular = true
	}
	
	b.push(nums[0])
	for (let i = 0; i < nums.length; i++) {
		p = c
		
		// Offset current position by rotation
		c += k
		
		// Overflow check
		if (c >= nums.length) {
			c -= nums.length
		}
		
		// Swap
		b.push(nums[c])
		nums[c] = b.shift()
		
		if (circular && c === s) {
			c++
			s = c
			b = [nums[c]]
			
			overflow = true
		}
		else {
			overflow = false
		}
		
		console.log(`step (${i}): p: ${p} to c: ${c}, overflow: ${overflow}, b: ${b}, nums: ${nums}`)
	}
}

function slowStableRotate(nums, k) {
	if (nums.length == k || k == 0)
		return
	
	let prev = 0, swap = 0
	for (; k > 0; k--) {
		prev = nums[0]
		for (let i = 1; i < nums.length; i++) {
			swap = nums[i]
			nums[i] = prev
			prev = swap
		}
		nums[0] = prev
	}
}

function generate_data(n) {
	let data = []
	for (let i = 0; i < n; i++)
			data[i] = i + 1
	return data
}

function runTestSuite() {
	let failed = false
	
	let n_max = 128
	let k = 0
	
	main_loop:
	for (let n = 0; n <= n_max; n++) {
		for (let k = 0; k < n_max; k++) {
			
			let data = generate_data(n)
			let expected = data.slice()
			
			slowStableRotate(expected, k)
			
			rotate(data, k)
			
			if (false === data.every((v, i) => v == expected[i])) {
				console.log(`fail: rotate: array(${n}, ${k})`)
				console.log(`expected: ${expected}, ret: ${data}`)
				
				failed = true
				break main_loop
			}
		}
	}
	
	console.log("test suite failed")
}

// runTestSuite()

(function(n, k) {
	let data = generate_data(n)
	let expected = data.slice()
	
	slowStableRotate(expected, k)
	
	rotate(data, k)
	
	if (false === data.every((v, i) => v == expected[i])) {
		console.log(`fail: rotate: array(${n}, ${k})`)
		console.log(`expected: ${expected}, ret: ${data}`)
		
		return
	}
	console.log(`pass: rotate(${n}, ${k})`)
})(6, 4)

/*import { rotateTestData as bigTestData } from './rotateTestData.js'

console.log(bigTestData.length)
rotate(bigTestData, 65535)
console.log("done")*/
