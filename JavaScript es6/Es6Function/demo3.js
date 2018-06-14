/**
 * ES6 中的Rest与Spread操作符
 */

// ...rest运算符
function f(...y) {
    console.log(y);
}
f("a", "b", "c"); //输出 ["a","b","c"]

function add(...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    return sum;
}
add(2, 5, 3) // 10

function f(x, ...y) {
    console.log(x, y);
}
f("a", "b", "c", "d"); //输出 "a",["b","c","d"]
//思考：f("a",["b","c","d"]);//输出 "a",[["b","c","d"]]
f("a"); //输出 "a",[]
f(); //输出 undefined,[]
//思考function f(x,...y，z){console.log(y);}//此时y输出是什么

// ...spread运算符
function f(x, ...y) {
    console.log(x, y);
}
f("a", ...["b", "c"]); //等价于f("a","b","c");
f("a"); //输出 "a",[]
f(); //输出 undefined,[]

// call和apply的应用
function abc(...v) {
    console.log(v)
}
o1 = {};
abc.call(o1, ...[1, 2, 3]); //等效于 abc.apply(o1,[1,2,3]);