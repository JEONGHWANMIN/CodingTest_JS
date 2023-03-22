const solution = (flowerbed, n) => {
  let count = 0;

  if (flowerbed.length >= 3) {
    for (let i = 0; i < flowerbed.length; i++) {
      if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
        flowerbed[i] = 1;
        count++;
      } else if (
        i === flowerbed.length - 1 &&
        flowerbed[i] === 0 &&
        flowerbed[i - 1] === 0
      ) {
        flowerbed[i] = 1;
        count++;
      } else if (
        flowerbed[i] === 0 &&
        flowerbed[i - 1] === 0 &&
        flowerbed[i + 1] === 0
      ) {
        flowerbed[i] = 1;
        count++;
      }
    }
  } else {
    if (flowerbed.length === 1 || flowerbed.length === 2) {
      if (!flowerbed.includes(1)) {
        count++;
      }
    }
  }
  return n <= count;
};

describe("CanPlaceFlowers", () => {
  test("꽃을 심을 수 있는 경우", () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 1;
    expect(solution(flowerbed, n)).toBe(true);
  });
  test("꽃을 못 심는 경우", () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 2;
    expect(solution(flowerbed, n)).toBe(false);
  });
  test("꽃을 심은 경우", () => {
    const flowerbed = [1, 0, 0, 0, 0, 1];
    const n = 2;
    expect(solution(flowerbed, n)).toBe(false);
  });
  test("맨 왼쪽이 심을 수 있는 경우", () => {
    const flowerbed = [0, 0, 1, 0, 1];
    const n = 1;
    expect(solution(flowerbed, n)).toBe(true);
  });
  test("맨 오른쪽 심을 수 있는 경우", () => {
    const flowerbed = [1, 0, 1, 0, 0];
    const n = 1;
    expect(solution(flowerbed, n)).toBe(true);
  });
  test("한개", () => {
    const flowerbed = [0];
    const n = 1;
    expect(solution(flowerbed, n)).toBe(true);
  });
  test("두개 불가능1", () => {
    const flowerbed = [0, 1];
    const n = 1;
    expect(solution(flowerbed, n)).toBe(false);
  });
  test("두개 불가능2", () => {
    const flowerbed = [1, 0];
    const n = 1;
    expect(solution(flowerbed, n)).toBe(false);
  });
  test("세개 가능", () => {
    const flowerbed = [1, 0, 0];
    const n = 1;
    expect(solution(flowerbed, n)).toBe(true);
  });
});
