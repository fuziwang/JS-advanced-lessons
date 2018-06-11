/**
 * 解构赋值的常见的应用
 */

// 应用一：交换变量
var [x, y, z] = ["a", "c", "b"];
[x, y, z] = [x, z, y];
console.log(x, y, z); // a b c

// 应用二：从函数中返回多少个值
function example() {
    return [1, 2, 3];
}
var [a, b, c] = example();

// 返回一个对象,解构所有属性
function example() {
    return {
        foo: 1,
        bar: 2
    };
}
var {
    foo,
    bar
} = example();

// 应用三：提取JSON数据
var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let {
    id,
    status,
    data: number
} = jsonData;
console.log(id, status, number);