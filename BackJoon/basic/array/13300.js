// Input Data
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../..//Input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace('\r',''));

const [n, maxHuman] = input.shift().split(" ").map(Number);
const students = input.map((row) => row.split(" ").map(Number));

function solution(n, maxHuman, students) {
    let requireRoom = 0;
    const studentMap = {
        1: makeGrade(),
        2: makeGrade(),
        3: makeGrade(),
        4: makeGrade(),
        5: makeGrade(),
        6: makeGrade()
    }

    for (let student of students) {
        const [gender, grade] = student;
        studentMap[grade][gender]++
    }

    Object.entries(studentMap).forEach(([grade,gender], index) => {
        const room1 = Math.ceil(gender[0] / maxHuman)
        const room2 = Math.ceil(gender[1] / maxHuman)

        requireRoom = requireRoom +  room1 + room2;
    })


    return requireRoom;
}

function makeGrade() {
    return {
        0: 0,
        1: 0
    }
}


console.log(solution(n, maxHuman, students));

// 각 학년별 성별로 그룹핑
// 1개의 그룹핑을 기준으로 maxHuman값을 사용해서 반올림 b
// 여자: 0, 남자: 1