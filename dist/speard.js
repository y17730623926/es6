'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

{
	//arguments  在函数中表示函数参数的集合（类数组）  rest也表示参数，但是它是真数组
	var fn = function fn() {
		// console.log(arguments[0])
		var sum = 0;
		for (var i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		console.log(sum);
	};

	fn(11, 22);
	fn(11, 22, 33, 44);
}
{
	// instanceof  用来检查一个实例是否在父级上
	var arr = [1, 2, 3, 4, 5];
	console.log(typeof arr === 'undefined' ? 'undefined' : _typeof(arr)); //object 
	console.log(arr instanceof Array); //true
	console.log(Array.isArray(arr)); //true
}
{
	var _arr = [11, 22, 33];
	console.log(_arr);
	console.log(_arr.constructor); //constructor表示的是原型的父级构造函数
	console.log(Array);
	console.log(_arr.constructor === Array); //true
	var _obj = { name: 'lxh' };
	console.log(_obj);
	console.log(_obj.toString()); //[object Object]
	console.log(_arr.toString()); //元素0，元素1..
	// 想用数组调用object的tostring方法
	console.log(Object.prototype.toString.call(_arr)); //[object Array] call改变了this的指向
	// 验证
	console.log(Object.prototype.toString.call(_arr) === '[object Array]');
	// console.log(obj.toString.call(arr));
}
{
	var _fn = function _fn() {
		"use strict"; //严格模式

		console.log(this); //undefinde
	};

	_fn();
}
{
	var data = new Date();
	console.log(data); //Thu Dec 17 2020 15:48:51 GMT+0800 (中国标准时间)
	console.log(data.toJSON()); //可读性的日期
}
{
	var fun = function fun() {
		console.log(this);
	};

	var obj = { name: "xiaomei" };

	fun.call(obj);
	fun.apply(obj);
	var bind1 = fun.bind(obj);
	bind1();
}
{
	"use strict";
	a = 10;
	console.log(a);
	// function fun(name,name,name){	//终端会提示报错
	// 	console.log(name);
	// }
	// fun("我是谁？","我在那")
}