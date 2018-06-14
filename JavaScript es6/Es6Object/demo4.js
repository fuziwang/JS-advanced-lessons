/**
 * ES6对Object的扩展
 */


// part1:ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
var birth = '2000/01/01';
var p1 = {
    name: '张三',
    //等同于birth: birth
    birth,
    // 等同于hello: function ()...
    hello() {
        console.log('我的名字是', this.name);
    }
};

// part2:ES6允许字面量定义对象时，用表达式作为对象的属性名
let propKey = 'foo';
let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123
};

//表达式还可以用于定义方法名。
let obj = {
    ['h' + 'ello']() {
        return 'hi';
    }
};
obj.hello(); // hi
// 注意：
var foo = 'bar';
var bar = 'abc';
// var baz = { [foo] };//报错

//part3:Object新增的静态方法
// Object.is()
console.log(Object.is(1, "1")); //false
console.log(Object.is(1, 1)); //true
//和===的区别之处如下
console.log(+0 === -0); //true
console.log(NaN === NaN); // false
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN)); // true

//Object.assign()
var target = { a: 1 };
var source1 = { b: 2 };
var source2 = { c: 3 };
Object.assign(target, source1, source2);
target; // {a:1, b:2, c:3}
// 注意1：覆盖现象
var target = { a: 1, b: 1 };
var source1 = { b: 2, c: 2 };
var source2 = { c: 3 };
Object.assign(target, source1, source2);
target; // {a:1, b:2, c:3}
// 注意2：浅拷贝
var obj1 = { a: { b: 1 } };
var obj2 = Object.assign({}, obj1);
obj1.a.b = 2;
obj2.a.b; // 2

//Object.getPrototypeOf()、Object.setPrototypeOf()方法
var obj = Object.create({ x: 1, y: 2 });
console.log(Object.getPrototypeOf(obj));
Object.setPrototypeOf(obj, { z: 3 });
console.log(Object.getPrototypeOf(obj));

//回顾ES5 中的Object.keys静态方法 keys 不能知道它继承的属性，只能展示自身的属性
//values 和 entries 方法
var obj = { foo: "bar", baz: 42 };
Object.values(obj); // ["bar", 42]

var obj = { foo: 'bar', baz: 42 };
Object.entries(obj); // [ ["foo", "bar"], ["baz", 42] ]
for (var [k, v] of Object.entries(obj)) { //解构赋值
    console.log(k, v);
}