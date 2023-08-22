function solution(s) {
  // 스트링 값을 배열로 치환한다.
  // 현재 전 값이 공백이면 현재 값이 문자인지 확인 후 대문자로 치환한다.
  // 이때 문장의 첫 시작은 전 값이 없기 때문에 인덱스가 0인 경우에는 바로 문자인지 확인 후 대문자로 치환한다.

  const result = [];
  const strings = s.split("");

  for (let i = 0; i < strings.length; i++) {
    const startIndex = i === 0;
    const str = strings[i];

    if (startIndex && typeof str === "string") {
      result.push(str.toUpperCase());
      continue;
    }

    const prevStr = strings[i - 1];

    if (prevStr === " " && str !== " ") {
      result.push(str.toUpperCase());
      continue;
    }

    if (typeof str === "string") {
      result.push(str.toLowerCase());
      continue;
    }

    result.push(str.toLowerCase());
  }

  return result.join("");
}
