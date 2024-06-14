const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((raw) => raw.replace("\r",""));

const [N, S] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

function solution(n, s, numbers) {
    let result = 0;

    const dfs = (index, sum) => {
        if (index === n) {
            console.log(`Reached end: index=${index}, sum=${sum}`);
            if (sum === s) {
                console.log(`Sum matches S: sum=${sum}`);
                result++;
            }
            return;
        }

        console.log(`At index=${index}: sum=${sum}, adding numbers[${index}]=${numbers[index]}`);
        dfs(index + 1, sum + numbers[index]);

        console.log(`At index=${index}: sum=${sum}, skipping numbers[${index}]=${numbers[index]}`);
        dfs(index + 1, sum);
    }

    dfs(0, 0);

    if (S === 0) result--;

    return result;
}

console.log(solution(N, S, numbers));
