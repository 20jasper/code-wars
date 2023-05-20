//URL--
// https://leetcode.com/problems/daily-temperatures/

//INSTRUCTIONS--
/* 
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]

 

Constraints:

		1 <= temperatures.length <= 105
		30 <= temperatures[i] <= 100


*/

//SOLUTION--
/* 
This solution has a time complexity of O(n^2) and a space complexity of O(1) where n is the number of days
*/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
	const res = []

	temperatures.forEach((temp, i) => {
		res.push(getDaysUntilWarmer(temp, i))
	})

	return res

	function getDaysUntilWarmer(originalTemp, startIndex) {
		for (let i = startIndex; i < temperatures.length; i++) {
			if (originalTemp < temperatures[i]) {
				return i - startIndex
			}
		}

		return 0
	}
};

module.exports = { dailyTemperatures }