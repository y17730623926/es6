"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
    var name = "于宽";
    var age = 19;
}
//拓展运算符  ...
{
    //数组的结构赋值
    var a = 1,
        b = [2, 3, 4, 5];

    console.log(b);
}
{
    var _ref = [],
        _ref$ = _ref[0],
        _a = _ref$ === undefined ? 0 : _ref$,
        _b = _ref[1];

    console.log(_a, _b);
}
//对象的解构赋值
{
    var _a$b = { a: "于宽", b: "1" },
        _a2 = _a$b.a,
        _b2 = _a$b.b;

    console.log(_a2, _b2);
}
//字符串es6的新加方法
{
    var str = "asdasdasdyukuanfassfgfb";
    // includes(string,position) //判断子符中是否包含指定字符串
    // console.log(str.includes("yukuan"));

    // startsWith(string,position) //判断子符开头是否包含指定字符串，返回布尔值
    // console.log(str.startsWith("yukuan"));

    // endsWith(string,psoition) //判断子符结尾是否包含指定字符串，返回布尔值
    // console.log(str.endsWith("yukuan"));

    //repeat(n)     //把调用的字符串重复n次返回，n为次数
    // console.log(str.repeat(2));

    //padstart(length,str)  //头部补全  length表示补全后的长度，str只用指定字符串补全
    // console.log(str.padStart(100,"yukuan"))

    //padEnd(length,str)    //尾部补全  length表示补全后的长度，str只用指定字符串补全
    // console.log(str.padEnd(100,"yukuan"));
}
//es6和es7数组的拓展方法和拓展运算符[...(spread)]
{
    //将数组转化为参数传递给函数
    var fn = function fn(x, y) {
        console.log(x, y);
    };

    var _a3 = [1, 2, 3, 4, 5];
    //复制数组
    // let b = [...a];
    //数组分割

    var _b3 = _a3.slice(1);

    fn.apply(undefined, _toConsumableArray(_b3));
    console.log(_b3);
}

{
    // 替换数组（全部替换）
    //fill(替换内容，起始index,替换到哪块的长度)
    var _a4 = [1, 2, 3, 4, 5];
    var _b4 = [].concat(_a4).fill(5, 1, 5);
    console.log(_b4);
}
{
    //find()返回数组中第一个找到的值    ()里面是回调函数
    //findIndex()返回数组中第一个找到的值的index    ()里面是回调函数
    var _a5 = [{ "title": "es6", "id": 1 }, { "title": "nodejs", "id": 2 }, { "title": "wechat", "id": 3 }, { "title": "es6", "id": 4 }];
    var _b5 = _a5.find(function (item) {
        return item.title === "es6";
    });
    var c = _a5.findIndex(function (item) {
        return item.title === "wechat";
    });
    console.log(_b5);
    console.log(c);
}
{
    //includes(n) 查看数组中是否包含n
    var _a6 = [1, 2, 3, 4, 5];
    var _b6 = _a6.includes(5);
    console.log(_b6);
}
{
    //展开数组  flat(n)   n表示展开的数组的层数，默认值为1
    var _a7 = [1, 2, [3, [4, 5]]];
    var _b7 = _a7.flat(2);
    console.log(_b7);
}
{
    //数组去重  filter
    // filter(function ("数组每一项的值","每一项的index","当前数组本身")) {})
    var arr = [1, 2, 3, 4, 2, 3, 5, 4, 2, 5, 6, 9, 2];
    var _b8 = arr.filter(function (i, index, item) {
        return item.indexOf(i) === index; //查找数组中每一个值的第一次出现返回出去
    });
    console.log(_b8);
}
{}