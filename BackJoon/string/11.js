const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const grades = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

const result = input.reduce(
  (pre, cur, i, arr) => {
    const [, gradeNum, subNum] = cur.trim().split(/\s+/);

    if (subNum === "P") {
      if (i === arr.length - 1) return pre.totalSubject / pre.totalGrade;
      return pre;
    }

    if (i === arr.length - 1) return pre.totalSubject / pre.totalGrade;

    const totalGrade = pre.totalGrade + Number(gradeNum);
    const totalSubject =
      pre.totalSubject + Number(gradeNum) * Number(grades[subNum]);

    return {
      totalGrade,
      totalSubject,
    };
  },
  {
    totalGrade: 0,
    totalSubject: 0,
  }
);

console.log(result.toFixed(6));
