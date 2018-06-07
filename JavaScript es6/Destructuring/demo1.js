/**
 * 数组、 对象的解构赋值
 */

// part1 数组的解构赋值
//如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错
var [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

let [foo, [
    [bar], baz
]] = [1, [
    [2], 3
]];
console.log(foo, bar, baz); // 一一进行对应1 2 3

let [, , xx] = ["foo", "bar", "baz"];
console.log(xx); // "baz"

let [x, , y] = [1, 2, 3];
console.log(x, y); //1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail); //1 [2, 3, 4]
//...f对应是数组，没有的是[]
let [d, e, ...f] = ['a'];
console.log(d, e, f); //"a" undefined []

// ES6内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
var [x5 = 1] = [undefined]; //x5 为 1
var [x6 = 1] = [null]; //x6 为 null

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // ReferenceError
console.log(m1, n1, m2, n2, m3, n3);

// part2:对象的解构赋值
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" }; // 类似于var {foo1:foo1,bar1:bar1} = { foo1: "aaa", bar1: "bbb" };
console.log(foo1, bar1); // 输出的是属性值

var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" }; // 类似于var {bar2:foo2,foo2:bar2} = { foo1: "aaa", bar1: "bbb" };
console.log(foo2, bar2); // 输出的都是属性值

var { baz3 } = { foo3: "ccc", bar3: "ddd" };
console.log(baz3); // 未找到属性，返回undefined

var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4); // "aaa"

let obj1 = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj1;
console.log(f, l); //注意和下边写法的区别
console.log(first, last);

let { first, last } = obj1;
console.log(first, last);