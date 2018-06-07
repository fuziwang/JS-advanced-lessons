/**
 * 字符串和数字的解构赋值
 */
//字符串解构赋值
const [a, b, c, d, e] = 'hello'; //相当于将'hello'转成了["h","e","l","l","o"]后解构
console.log(a); // "h"
console.log(b); // "e"
console.log(c); // "l"
console.log(d); // "l"
console.log(e); // "o"

// 数字和bool类型的解构赋值
//解构赋值的规则是， 只要等号右边的值不是对象， 就先将其转为对象

let {
    toString: s1
} = 123;
console.log(s1);
s1 === Number.prototype.toString // true

let {
    toString: s2
} = true;
console.log(s2);
s2 === Boolean.prototype.toString // true