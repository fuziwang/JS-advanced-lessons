/**
 * let声明变量和const声明变量
 */
// 使用let可以避免var带来的问题
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

//let 定义的变量 并不像 var 那样直接作为全局对象的属性
var x = 23;
let y = 34;
console.log(window.x, window.y); //23 undefined

// const的作用域同let，同时const定义的变量不能改变
const a = 5;
a = 6; // error
if (true) {
    console.log(a);
    const b = 6;
    console.log(b);
}
console.log(b);

// const不仅可以声明变量，还可以声明不变的函数 const一旦声明必须进行初始化
const arr; //error
const fee = function() {
    console.log("JS");
}
fee();

//const指向的对象引用不可变，但其属性是可变的
const a = [1, 2, 3];
a.push(4);
console.log(a);
a = [4, 5, 6];