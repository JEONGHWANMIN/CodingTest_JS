/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  // 1. 전체 대문자
  // 2. 전체 소문자
  // 3. 첫 번째 문자만 대문자
  // 대문자로 시작하는 경우
  // 1,3번 케이스 확인
  // 소문자로 시작하는 경우
  // 2번 케이스 확인
  // 대문자가 하나라도 나오면 중단

  const Case = findCase(word);

  if (Case === "1") return Case1(word);
  if (Case === "2") return Case2(word);
  if (Case === "3") return Case3(word);
  return false;
};

function Case1(word) {
  for (let s of word) {
    if (!isUpperWord(s)) return false;
  }
  return true;
}

function Case2(word) {
  for (let s of word) {
    if (isUpperWord(s)) return false;
  }
  return true;
}

function Case3(word) {
  if (!isUpperWord(word[0])) return false;
  const copy = word.slice(1);
  return Case2(copy);
}

function findCase(word) {
  const copy = word.slice(0, 2);
  let count = 0;
  for (let s of copy) {
    if (isUpperWord(s)) count++;
  }
  return count === 0 ? "2" : count === 1 ? "3" : "1";
}

function isUpperWord(s) {
  const uni = s.charCodeAt();
  return uni >= 65 && uni <= 90 ? true : false;
}
