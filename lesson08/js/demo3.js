// 高阶函数
// part1 函数作为参数被传递
function add(x, y, f) {
    return f(x) + f(y);
}
add(2, 3, function(z) { return z * z; }); // 13
add(2, -3, Math.abs); // 5
add(2, 3, Math.sqrt); //2的开平方加3的开平方

var word_2 = "do another thing.";
var function_1 = function(callback) {
    this.word_1 = "do something.";
    console.log(this); // 全局下的函数 window
    console.log(this.word_1);
    (callback && typeof(callback) === "function") && callback();
};
var function_2 = function() { console.log(this.word_2) }; //function2是一个函数对象
function_1(function_2); // 把函数对象作为参数传入function1函数

function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81] map相当于映射

//filter 数组过滤 ，返回为false的将被过滤掉
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function(x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]