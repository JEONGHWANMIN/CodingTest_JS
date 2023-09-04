const solution = (people, limit) => {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let boat = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--, boat++;
  }
  return boat;
};

describe("881. Boats to Save People", () => {
  test("[1,2]", () => {
    const input = [1, 2];
    const limit = 5;
    expect(solution(input, limit)).toBe(1);
  });
  test("[3,2,2,1]", () => {
    const input = [3, 2, 2, 1];
    const limit = 3;
    expect(solution(input, limit)).toBe(3);
  });
  test("[3,5,3,4]", () => {
    const input = [3, 5, 3, 4];
    const limit = 5;
    expect(solution(input, limit)).toBe(4);
  });
  test("[44,10,29,12,49,41,23,5,17,26]", () => {
    const input = [44, 10, 29, 12, 49, 41, 23, 5, 17, 26];
    const limit = 50;
    expect(solution(input, limit)).toBe(6);
  });
});

console.log([44, 10, 29, 12, 49, 41, 23, 5, 17, 26].sort());

/* asd */
