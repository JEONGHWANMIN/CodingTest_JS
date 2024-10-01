const getBoxesIndex = (row, col) => Math.floor(row / 3) * 3 + Math.floor(col / 3)

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const rows = Array.from({length: board.length}, () => new Set());
    const cols = Array.from({length: board.length}, () => new Set());
    const boxes = Array.from({length: board.length}, () => new Set());

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === '.') continue
            const num = board[row][col];
            rows[row].add(num)
            cols[col].add(num)
            boxes[getBoxesIndex(row,col)].add(num)
        }
    }


    const dfs = (row, col) => {
        if (row === 9) return true
        if (col === 9) return dfs(row+1, 0)
        if (board[row][col] !== '.') return dfs(row, col + 1)

        for (let num = 1; num <= 9; num++) {
            const SNum = String(num)
            if (!rows[row].has(SNum) && !cols[col].has(SNum) && !boxes[getBoxesIndex(row,col)].has(SNum)) {
                board[row][col] = SNum
                rows[row].add(SNum)
                cols[col].add(SNum)
                boxes[getBoxesIndex(row,col)].add(SNum)

                if (dfs(row, col + 1)) return true

                board[row][col] = '.'
                rows[row].delete(SNum)
                cols[col].delete(SNum)
                boxes[getBoxesIndex(row,col)].delete(SNum)
            }

        }
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