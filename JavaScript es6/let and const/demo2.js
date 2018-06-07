/**
 * let与const特性
 */
// 特性一：不进行变量的提升
var temp = new Date();

function f() {
    console.log(temp); // undefined 会进行变量的提升
    if (false) {
        var temp = "Hi!";
    }
}
f();

console.log(a); //报错
let a = 2;
console.log(a);

// 特性二：形成暂时性死区特性
typeof b; //报错 ReferenceError 需要使用前定义
let b; //若没有此行，上一行是否会报错

var tmp = 123;
if (true) {
    tmp = "abc";
    let tmp; //思考如果改为var是否会报错，如果let tmp在上一行之前如何？
}

// 注意：let的变量不可以重复定义
let abc;
let abc; //报错

function foo1() {
    let x; // var x;var x;这个是可以重复定义的
    var x;
}
foo1(); //报错 重复定义