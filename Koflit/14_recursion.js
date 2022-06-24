function unpackGiftbox(giftBox, wish) {
  // TODO: 여기에 코드를 작성합니다.

  // recursion-case
  for (let i = 0; i < giftBox.length; i++) {
    if (Array.isArray(giftBox[i])) {
      let result = unpackGiftbox(giftBox[i], wish);
      if (result) return true;
    } else {
      if (giftBox[i] === wish) return true;
    }
  }
  // base-base
  return false;
}

const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];

let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false

output = unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true
