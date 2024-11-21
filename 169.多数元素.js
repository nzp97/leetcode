/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = {};
    for (let num of nums) {
      map[num] = map[num] ? ++map[num] : 1;
    }
    const count = nums.length / 2;
    for (let k in map) {
      if (map[k] > count) return +k;
    }
};
// @lc code=end
