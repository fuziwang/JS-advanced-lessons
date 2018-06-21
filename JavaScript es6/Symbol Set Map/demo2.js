/**
 * 新增的数据结构Set
 */
// 1、创建Set对象
var s1 = new Set([1, 2, 3, 4, 5, 5, 6, 2, 2]);
console.log(s1);

var s2 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s2.add(x));
for (var i of s2) {
    console.log(i);
} // 2 3 5 4

// 实现数组去重
var set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);

var set = new Set();
set.add({});
console.log(set.size); // 1
set.add({});
console.log(set.size); // 2

// 2、原型方法
var s = new Set();
s.add(1).add(2).add(2);
// 注意2被加入了两次
console.log(s.size) // 2
console.log(s.has(1)); // true
console.log(s.has(2)); // true
console.log(s.has(3)); // false
s.delete(2);
console.log(s.has(2)); //false
s.clear();
console.log(s);

var set = new Set(['red', 'green', 'blue']);
console.log(typeof set.keys());
console.log(typeof set.values());
console.log(typeof set.entries());
for (var item of set.keys()) {
    console.log(item);
}
for (var item of set.values()) {
    console.log(item);
}
for (var item of set.entries()) {
    console.log(item);
}

// set应用案例 并集、交集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}