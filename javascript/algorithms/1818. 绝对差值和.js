/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
    const len = nums1.length
    let sum = 0
    for (let i = 0; i < len; i++) {
        const abs = Math.abs(nums1[i] - nums2[i])
        sum += abs
    }
    let res = sum
    for (let i = 0; i < len; i++) {
        const abs = Math.abs(nums1[i] - nums2[i])
        for (let j = 0; j < len; j++) {
            const cAbs = Math.abs(nums1[j] - nums2[i])
            const r = sum - abs + cAbs
            if (res > r) {
                res = r
            }
        }
    }
    return res % (10 ** 9 + 7)
};


function binarySearch(nums, target) {
    let left = 0
    let right = nums.length - 1
    let res = -1
    let index = -1
    while (left <= right) {
        let i = left + Math.floor((right - left) / 2)
        const num = nums[i]
        if (num <= target && num > res) {
            res = num
            index = i
            right = i - 1
        }
        if (target > num) {
            left = i + 1
        }
    }
    return index
}

const arr1 = [1, 28, 21]
// const arr1 = [57, 42, 21, 28, 30, 25, 22, 12, 55, 3, 47, 18, 43, 29, 20, 44, 59, 9, 43, 7, 8, 5, 42, 53, 99, 34, 37, 88, 87, 62, 38, 68, 31, 3, 11, 61, 93, 34, 63, 27, 20, 48, 38, 5, 71, 100, 88, 54, 52, 15, 98, 59, 74, 26, 81, 38, 11, 44, 25, 69, 79, 81, 51, 85, 59, 84, 83, 99, 31, 47, 31, 23, 83, 70, 82, 79, 86, 31, 50, 17, 11, 100, 55, 15, 98, 11, 90, 16, 46, 89, 34, 33, 57, 53, 82, 34, 25, 70, 5, 1]
const arr2 = [9, 21, 20]
// const arr2 = [76, 3, 5, 29, 18, 53, 55, 79, 30, 33, 87, 3, 56, 93, 40, 80, 9, 91, 71, 38, 35, 78, 32, 58, 77, 41, 63, 5, 21, 67, 21, 84, 52, 80, 65, 38, 62, 99, 80, 13, 59, 94, 21, 61, 43, 82, 29, 97, 31, 24, 95, 52, 90, 92, 37, 26, 65, 89, 90, 32, 27, 3, 42, 47, 93, 25, 14, 5, 39, 85, 89, 7, 74, 38, 12, 46, 40, 25, 51, 2, 19, 8, 21, 62, 58, 29, 32, 77, 62, 9, 74, 98, 10, 55, 25, 62, 48, 48, 24, 21]




console.log('=====', minAbsoluteSumDiff(arr1, arr2))
