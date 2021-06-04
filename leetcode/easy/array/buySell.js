/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if (prices.length == 1) {
		return 0
	}
	let sum = 0, change = 0
	// Runs at O(n)
	priceChanges[0] = 0
	for (let i = 1; i < prices.length; i++) {
		change = prices[i] - prices[i-1]
		if (change > 0)
			sum += change
	}
	return sum
};

function runTests() {
	let data = [7,1,5,3,6,4]
	let expected = 7
	
	let ret = maxProfit(data)
	
	if (ret === expected) {
		console.log("Pass: buySell: price")
	}
	else {
		console.log("Fail: buySell: price")
	}
}

runTests()
