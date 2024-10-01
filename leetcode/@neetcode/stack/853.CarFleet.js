// const calculateRestDistance = (target, position, speed) => {
//     return (target - position) / speed
// }
//
// /**
//  * @param {number} target
//  * @param {number[]} position
//  * @param {number[]} speed
//  * @return {number}
//  */
// var carFleet = function(target, position, speed) {
//     let groupCount = 0;
//     const positionSpeedMap = new Map();
//
//     for (let i = 0; i < position.length; i++) {
//         positionSpeedMap.set(i, [position[i], speed[i]])
//     }
//
//     const sortedCars = [...positionSpeedMap.values()].toSorted((a , b) =>  b[0] - a[0])
//
//     const carStack = []
//     for (let i = 0 ; i < sortedCars.length; i++) {
//         const [position, speed] = sortedCars[i]
//         const distance = calculateRestDistance(target, position, speed)
//         carStack.push(distance)
//     }
//
//     while (carStack.length > 0) {
//         const curCarDistance = carStack.shift()
//
//         for (let i = 0 ; i < carStack.length; i++){
//             const distance = carStack[i]
//             if (curCarDistance >= distance) {
//                 carStack.splice(i,1)
//                 i--
//             } else {
//                 break
//             }
//
//         }
//
//         groupCount++
//     }
//
//
//     return groupCount
// };

var carFleet = function (target, position, speed) {
    // Combine position and speed into a single array of objects
    let cars = position.map((pos, index) => ({
        position: pos,
        speed: speed[index],
    }));

    // Sort cars by their starting positions in descending order
    cars.sort((a, b) => b.position - a.position);

    let stack = [];

    for (let i = 0; i < cars.length; i++) {
        let time = (target - cars[i].position) / cars[i].speed;

        if(i == 0|| stack[stack.length - 1] < time){
            stack.push(time);
        }
    }

    return stack.length;
};

console.log(carFleet(12,[10,8,0,5,3],[2,4,1,1,3]))
// console.log(carFleet(10,[8,3,7,4,6,5],[4,4,4,4,4,4]))

// 0.5