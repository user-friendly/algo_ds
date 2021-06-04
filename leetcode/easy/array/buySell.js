/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
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
