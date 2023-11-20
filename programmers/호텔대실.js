function parseTime(time) {
  const [hour, minute] = time.split(":");

  return Number(hour) * 60 + Number(minute);
}

function solution(book_time) {
  let rooms = [];

  book_time.sort();

  for (let time of book_time) {
    const startTime = parseTime(time[0]);
    const endTime = parseTime(time[1]);

    if (rooms.length === 0) rooms.push(endTime + 10);
    else {
      rooms.sort((a, b) => a - b);

      if (startTime >= rooms[0]) {
        rooms[0] = endTime + 10;
      } else {
        rooms.push(endTime + 10);
      }
    }
  }

  return rooms.length;
}
