/**
 * 函数参数的解构赋值
 */
function move1({ x = 0, y = 0 } = {}) {
    return [x, y];
}
console.log(move1({ x: 3, y: 4 })); // [3, 4]
console.log(move1({ x: 3 })); // [3, 0]
console.log(move1({})); // [0, 0]
console.log(move1()); // [0, 0]

function move2({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(move2({ x: 3, y: 8 })); // [3, 8]
console.log(move2({ x: 3 })); // [3, undefined]
console.log(move2({})); // [undefined, undefined]
console.log(move2()); // [0, 0]