const isDuplicateArray = (array) => {
    const filtered = array.filter((item) =>  item !== '.')
    const set = new Set(filtered)
    return set.size !== filtered.length
}

/**
 * @param {string[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
    const rowBoard = [...board]
    const colBoard =  []
    const squreBoard = Array.from({ length: board.length }, () => [])

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (row <= 2 && col <= 2) squreBoard[0].push(board[row][col])
            if (row <= 2 && col >= 3 &&  col <= 5) squreBoard[1].push(board[row][col])
            if (row <= 2 && col >= 6 &&  col <= 8) squreBoard[2].push(board[row][col])

            if (row >=3 && row <= 5 && col <= 2 ) squreBoard[3].push(board[row][col])
            if (row >=3 && row <= 5 && col >= 3 &&  col <= 5 ) squreBoard[4].push(board[row][col])
            if (row >=3 && row <= 5 && col >= 6 &&  col <= 8 ) squreBoard[5].push(board[row][col])

            if (row >=6 && row <= 8 && col <= 2 ) squreBoard[6].push(board[row][col])
            if (row >=6 && row <= 8 && col >= 3 &&  col <= 5 ) squreBoard[7].push(board[row][col])
            if (row >=6 && row <= 8 && col >= 6 &&  col <= 8 ) squreBoard[8].push(board[row][col])

        }
    }


    for (let i = 0; i < board[0].length; i++) {
        const temp = []
        for (let j = 0; j < board.length; j++) {
            temp.push(board[j][i]);
        }
        colBoard.push(temp);
    }

    for (let i = 0; i < board.length; i++) {
        if (isDuplicateArray(rowBoard[i])) return false
        if (isDuplicateArray(colBoard[i])) return false
        if (isDuplicateArray(squreBoard[i])) return false
    }


   return true
};

const  board1 =
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]

const board2 =
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]



console.log(isValidSudoku(board1))
console.log(isValidSudoku(board2))


