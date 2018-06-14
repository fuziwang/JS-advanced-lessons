/**
 * ES6新增的箭头函数
 */

// 箭头函数
var f = v => v + 1; //单参数可以不用（），单语句可以不用return关键字
//var f = (v) => {return v + 1;};
f(2); //返回3

//圆括号和大括号的使用情况
var f = () => 5;
// 等同于
var f = function() {
    return 5
};

var foo = (num1, num2) => {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};

//箭头函数可以与变量解构结合使用
const full = ({ first, last }) => last + ' ' + first;
full({ first: "Ming", last: "Li" });

//需要特别注意： 返回对象必须加上小括号
var getTempItem = itemId => ({ id: itemId, name: "Temp" });

//箭头函数导致this总是指向函数定义生效时所在的对象
var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y) {
        //内部嵌套函数
        var moveToX = () => this.x = x;
        //内部嵌套函数
        var moveToY = () => this.y = y;
        moveToX();
        moveToY();
    }
};
point.moveTo(2, 2);
console.log(point);
//console.log(window.x,window.y);

//思考函数中的this ES5中如何解决
function foo() {
    setTimeout(function() {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 }); // id: 21

//查看下例中箭头函数的写法和结果
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 }); // id: 42