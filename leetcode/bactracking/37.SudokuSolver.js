const createColBoard = (board, col) => {
    const colBoard = []
    for (let i_row = 0 ; i_row < board.length ; i_row++) {
        colBoard.push(board[i_row][col])
    }

    return colBoard
}

const boardArrange = [
    [0, 2],
    [3, 5],
    [6, 8]
]
const createSquareBoard = (board, row, col) => {
    const squareBoard = []

    const rowIdx = Math.floor(row / 3)
    const colIdx = Math.floor(col / 3)
    const [rowStart, rowEnd] = boardArrange[rowIdx]
    const [colStart, colEnd] = boardArrange[colIdx]

    for (let i = rowStart; i <= rowEnd ; i++) {
        for (let j = colStart; j <= colEnd; j++) {
            squareBoard.push(board[i][j])
        }

    }

    return squareBoard
}

const isValid = (arr) => {
    const filtered = arr.filter((ar) => ar !== '.')
    return filtered.length === new Set(filtered).size
}

const isValidCheckSudoku = (board, row, col) => {
    let rowBoard = board[row]
    if (!isValid(rowBoard)) return false
    let colBoard = createColBoard(board, col)
    if (!isValid(colBoard)) return false
    let squareBoard = createSquareBoard(board, row, col)
    if (!isValid(squareBoard)) return false

    return true
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    const dfs = (row, col) => {
        if (row === 9) return true;
        if (col === 9) return dfs(row + 1, 0);
        if (board[row][col] !== '.') return dfs(row, col + 1);

        for (let i = 1; i <= 9; i++) {
            board[row][col] = String(i);

            if (isValidCheckSudoku(board, row, col)) {
                if (dfs(row, col + 1)) return true;
            }

            board[row][col] = '.';
        }

        return false;
    }


     dfs(0,0)

    return board
};


console.log(solveSudoku(
    [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
))


// console.log(isValidCheckSudoku(
//     [["5", "3", "1", "2", "7", "4", "8", "9", "1"],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]],
//     0,
//     8
// ))