function solution(people, limit) {
  var answer = 1;

  people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;

  while (left < right) {
    if (people[left] + people[right] > limit) {
      right--;
    }
  }

  return answer;
}
