/**
 * 新增的数据类型Symbol
 */
// 1、 为什么使用Symbol?
var obj = {
    x: 1,
    y: 2,
    moveTo: function(x, y) {
        this.x = x;
        this.y = y;
    }
}
obj.moveTo = function(x, y) {
    console.log("方法被覆盖了");
};
obj.moveTo(0, 0);

let s = Symbol(); //不能用new
typeof s; // "symbol"
var s1 = Symbol('foo');
var s2 = Symbol('bar');
console.log(s1); // Symbol(foo)
console.log(s2); // Symbol(bar)
console.log(s1.toString()); // "Symbol(foo)"
console.log(s2.toString()); // "Symbol(bar)"

// 2、Symbol的特点
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2);
console.log(s1 == s2);
// 有参数的情况
var s1 = Symbol("foo");
var s2 = Symbol("foo");
console.log(s1 === s2)
    // 参数是对象的情况
const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
sym // Symbol(abc)

//Symbol值不能与其他类型的值进行运算，会报错。
var sym = Symbol('My symbol');
//"your symbol is " + sym;//报错
var sym = Symbol('My symbol');
String(sym); // 'Symbol(My symbol)'
sym.toString(); // 'Symbol(My symbol)'

// 3、Symbol属性名
var mySymbol = Symbol();
var a = {};
a[mySymbol] = 'Hello!'; // 第一种写法
var a = {
    [mySymbol]: 'Hello!' // 第二种写法
};
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' }); // 第三种写法
a[mySymbol] // "Hello!"
    //思考题
var aSymbol = Symbol("abc");
var obj = {
    [aSymbol]: 'Hello!'
};
Object.defineProperty(obj, Symbol("abc"), {
    value: 'World!'
});
console.log(obj); //思考obj对象有几个属性？

// 对象必须放在[]内部
var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]: 123,
    [myS2]: 456
};
console.log(obj[myS1], obj[Symbol("xx")]); //输出什么？如何解释Symbol
console.log(obj[myS2], obj["xx"]);
console.log(obj["myS1"]);
console.log(obj["myS2"]);

// Symbol的属性名的遍历
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols); // [Symbol(a), Symbol(b)]
Object.getOwnPropertySymbols(obj).forEach((v) => { console.log(v) });

// 4、与Symbol变量复用相关的静态方法
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2); // true
console.log(Symbol.for("bar") === Symbol.for("bar")); // true
console.log(Symbol("bar") === Symbol("bar")); // false
console.log(Symbol.for("bar") === Symbol("bar")); // false

var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined
var s3 = Symbol(Symbol.keyFor(s1));
console.log(s1 === s3);
console.log(s2 === s3);
var s4 = Symbol.for(Symbol.keyFor(s1));
console.log(s1 === s4);
console.log(s2 === s4);