function applyGravityToRotateBox(box) {

    for (let row = 0; row < box.length; row++) {
        let count = 0;
        let lastIndex = 0;
        for (let col = 0; col < box[0].length; col++) {
            if (box[row][col] === '#') count++;
            if (box[row][col] === '*') {
                for (let i = col - 1; i >= lastIndex; i--) {
                    if (count > 0) {
                        box[row][i] = '#'
                        count--
                    } else {
                        box[row][i] = '.'
                    }
                }
                lastIndex = col + 1
            }
            else if ((col === box[0].length  - 1 && count > 0)) {
                for (let i = col; i >= lastIndex; i--) {
                    if (count > 0) {
                        box[row][i] = '#'
                        count--
                    } else {
                        box[row][i] = '.'
                    }
                }
            }
        }

    }
}

function rotate90Box(box, rotateBox) {
    for (let row = 0; row < box.length; row++) {
        for (let col = 0; col < box[0].length; col++) {
            rotateBox[col][rotateBox[0].length - 1 - row] = box[row][col]
        }
    }
}


/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    const rotateRowLen = box[0].length;
    const rotateColLen = box.length

    const rotateBox = Array.from({length: rotateRowLen}, () =>
        Array.from({length: rotateColLen}, () => '.'))

    applyGravityToRotateBox(box)

    rotate90Box(box, rotateBox)

    return rotateBox
};


console.log(rotateTheBox([["#",".","#"]]))
// console.log(rotateTheBox([["#",".","*","."],["#","#","*","."]]))
// console.table(rotateTheBox(
//     [
//             ["#","#",".","*","#",".","*","#","#","."],
//             // ["#","#","#","*",".","."],
//             // ["#","#","#",".","#","."]
//         ]))