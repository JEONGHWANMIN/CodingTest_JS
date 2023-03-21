function solution(nums) {
  let totalCount = 0;
  let subArrayCount = 0;

  for (num of nums) {
    if (num !== 0) {
      subArrayCount = 0;
      continue;
    }
    subArrayCount++;

    totalCount += subArrayCount;
  }
  return totalCount;
}

describe("NumberOfZero-Fill", () => {
  test("0이 포함되어 있는 경우 1", () => {
    const input = [1, 3, 0, 0, 2, 0, 0, 4];
    expect(solution(input)).toBe(6);
  });

  test("0이 포함되어 있는 경우 2", () => {
    const input = [0, 0, 0, 2, 0, 0];
    expect(solution(input)).toBe(9);
  });

  test("0이 포함 안 되어 있는 경우", () => {
    const input = [2, 10, 2019];
    expect(solution(input)).toBe(0);
  });
});
