/**
 * ES6对字符串和正则表达的扩展
 */

// 对string的扩展
for (let key in 'foo') {
    console.log(key);
}

// string提供新的方法
//用于查找、判断和生成字符串
var s = 'Hello world!';
s.startsWith('Hello'); // true
s.endsWith('!'); // true
s.includes('o'); // true
//第二个参数，表示开始搜索的位置
var s = 'Hello world!';
s.startsWith('world', 6); // true
s.endsWith('Hello', 5); // true
s.includes('Hello', 6); // false
//repeat方法返回一个新字符串，表示将原字符串重复n次。
'x'.repeat(3); // "xxx"
'hello'.repeat(2); // "hellohello"
'na'.repeat(0); // ""
//参数如果是小数，会被取整。
'na'.repeat(2.9); // "nana"
//如果repeat的参数是负数或者Infinity，会报错。
'na'.repeat(Infinity); // RangeError
'na'.repeat(-1); // RangeError

// 对正则表达式的扩展
// (1)构造函数的不同
var regex = new RegExp('xyz', 'i'); // 第一种情况
var regex = new RegExp(/xyz/i); // 第二种情况
var regex = new RegExp(/xyz/, 'i');
// Uncaught TypeError: Cannot supply flags when constructing one RegExp from another

new RegExp(/abc/ig, 'i').flags // "i" ES6

// (2)新增的修饰符 y
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;
console.log(r1.exec(s)); // ["aaa"]
console.log(r2.exec(s)); // ["aaa"]
console.log(r1.exec(s)); // ["aa"]
console.log(r2.exec(s)); // null

// (3)新增加的两个属性

var r = /hello\d/y;
console.log(r.sticky);
console.log(/abc/ig.flags);