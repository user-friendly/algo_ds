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
	let b = 0
	// Swap buffer
	let sb = 0
	
	// Current position
	let c = 0
	
	// Start position in case of circular dependency
	let s = 0
	
	b = nums[0]
	for (let i = 0; i < nums.length; i++) {
		// Offset current position by rotation
		c += k
		
		// Overflow check
		if (c >= nums.length) {
			c -= nums.length
		}
		
		// Swap elements
		sb = nums[c]
		nums[c] = b
		b = sb
			
		// Circular dependency check
		if (c === s) {
			c++
			s = c
			b = [nums[c]]
		}
	}
}

/**
 * Rotate to the right
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var fastStableRotate = function(nums, k) {
	if (k > nums.length) {
		k = k % nums.length
	}
	
	if (nums.length == 1 || nums.length == k || k == 0)
		return
	
	let reverse = function(s = 0, e = nums.length - 1) {
		// Subarray midpoint
		let m = s + Math.ceil((e - s) / 2)
		// Buffer
		let b = 0
		while (e >= m) {
			b = nums[s]
			nums[s++] = nums[e]
			nums[e--] = b
		}
	}
	
	reverse()
	reverse(0, k - 1)
	reverse(k)
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
			
			fastStableRotate(expected, k)
			
			rotate(data, k)
			
			if (false === data.every((v, i) => v == expected[i])) {
				console.log(`fail: rotate: array(${n}, ${k})`)
				console.log(`expected: ${expected}, ret: ${data}`)
				
				failed = true
				break main_loop
			}
		}
	}
	if (failed)
		console.log("test suite failed")
	else
		console.log("test suite passed")
}

runTestSuite()

/*(function(n, k) {
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
})(6, 4)*/

/*import { rotateTestData as bigTestData } from './rotateTestData.js'

console.log(bigTestData.length)
rotate(bigTestData, 65535)
console.log("done")*/
