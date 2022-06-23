function unpackGiftbox(giftBox, wish) {
  // TODO: 여기에 코드를 작성합니다.
  console.log(giftBox);
  if (giftBox.length === 0) return false;
  if (giftBox.includes(wish)) {
    return true;
  }
  let head = giftBox[0];
  let tail = giftBox.slice(1);
  if (Array.isArray(head)) {
    return unpackGiftbox([...head, ...tail], wish);
  }
  return unpackGiftbox(tail, wish);
}

const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];

let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false

output = unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true
