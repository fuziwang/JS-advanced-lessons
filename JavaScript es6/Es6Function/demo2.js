/**
 * ES6 对函数参数默认值的扩展
 */

// ES5 中实现函数参数默认值的方法
var sum = function(a, b, c) {
    b = b || 4;
    c = c || 5;
    return a + b + c;
};
console.log(sum(1, 2, 3)); //1+2+3
console.log(sum(1, 2)); //1+2+5
console.log(sum(1)); //1+4+5
console.log(sum(1, 0, 0)); //本应为1+0+0，但此处为1+4+5，代码有问题需优化，优化如下

// ES6 中实现函数参数默认值的方法 ,使用babble查看ES5的写法
var sum = function(a, b = 4, c = 5) {
    return a + b + c;
};
console.log(sum(1, 2, 3)); //1+2+3
console.log(sum(1, 2)); //1+2+5
console.log(sum(1)); //1+4+5
console.log(sum(1, 0, 0)); //1+0+0


// let和const不能重名
function foo(x = 5) {
    let x = 1; //报错
    const x = 2; //报错
    var x = 3; //正常
}
foo();

// 默认参数值的顺序
function f(x = 1, y) {
    return [x, y];
}
f(); //[1,undefined]
f(2); //[2,undefined]
//f(,3);//报错，无法使x用1，y用3
//所以有默认值的参数在最后
function f(x, y = 1) {
    return [x, y];
}
f(); //[undefined, 1]
f(2); //[2, 1] 这样就可以x为传递的参数，y为默认的值