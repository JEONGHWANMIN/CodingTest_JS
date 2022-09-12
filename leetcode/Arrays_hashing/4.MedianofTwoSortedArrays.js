/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 1. 두개의 배열을 합친다.
  // 2. 배열 총 길이가 짝수인지 , 홀수인지 구한다.
  // - 짝수 : 가운데 두 숫자를 더해서 2로 나누어서 중앙값을 구한다.
  // - 홀수 : 가운데 숫자를 내보낸다.

  let result = 0;

  const totalNum = nums1.concat(nums2);
  totalNum.sort((a, b) => a - b);

  // 짝수 경우
  if (totalNum.length % 2 === 0) {
    let midIdx = Math.floor(totalNum.length / 2);
    let midIdx2 = midIdx - 1;
    result = (totalNum[midIdx] + totalNum[midIdx2]) / 2;
  } else {
    let midIdx = Math.floor(totalNum.length / 2);
    result = totalNum[midIdx];
  }

  return result;
};
