/**
 * 对Array的扩展
 */
// Array.from()
//下面是一个类似数组的对象，Array.from将它转为真正的数组。
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5的写法
var arr1 = Array.prototype.slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
// 特殊用法
let arr3 = Array.from({ length: 3 }); // [undefined,undefined,undefined]
let arr4 = Array.from([1, 2, 3], function(x) { return x * x; }); // 相当于执行了map函数

//关于Array.of静态方法
Array.of(3, 11, 8); // [3,11,8]
Array.of(3); // [3]
Array.of(3).length; // 1
Array.of(); // []
Array.of(undefined); // [undefined]
Array.of(1); // [1]
Array.of(1, 2); // [1, 2]

Array(); // []
Array(3); // [, , ,]
Array(3, 11, 8); // [3, 11, 8]

// 数组新增的原型方法
// copyWithin()方法
[1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]
// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4); // [4, 2, 3, 4, 5]
// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1); // [4, 2, 3, 4, 5]

// find() findIndex()
[1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
}); // 10

[1, 5, 10, 15].findIndex(function(value, index, arr) {
        return value > 9;
    }) // 2

//fill方法使用给定值，填充一个数组。
['a', 'b', 'c'].fill(7); // [7, 7, 7]
//fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
['x', 'y', 'z'].fill(7, 1, 2);


for (let index of['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1
for (let elem of['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'
for (let [index, elem] of['a', 'b'].entries()) { //[index,elem] 解构赋值
    console.log(index, elem);
}
// 0 "a"
// 1 "b"