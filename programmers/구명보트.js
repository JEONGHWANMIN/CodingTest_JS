function solution(people, limit) {
  var answer = 0;

  people.sort((a, b) => a - b);

  let leftIdx = 0;
  let rightIdx = people.length - 1;

  while (leftIdx <= rightIdx) {
    if (leftIdx === rightIdx) {
      answer++;
      break;
    }

    if (people[leftIdx] + people[rightIdx] > limit) {
      rightIdx--;
      answer++;
    }

    if (people[leftIdx] + people[rightIdx] <= limit) {
      leftIdx++;
      rightIdx--;
      answer++;
    }
  }

  return answer;
}
