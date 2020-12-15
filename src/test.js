{
    let name = "于宽";
    let age = 19;
}
//拓展运算符  ...
{ //数组的结构赋值
    let [a, ...b] = [1, 2, 3, 4, 5];
    console.log(b);
}
{
    let [a = 0, b] = [];
    console.log(a, b);
}
//对象的解构赋值
{
    let { a, b } = { a: "于宽", b: "1" };
    console.log(a, b);
}
//字符串es6的新加方法
{
    let str = "asdasdasdyukuanfassfgfb";
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
    const a = [1, 2, 3, 4, 5];
    //复制数组
    // let b = [...a];
    //数组分割
    let [, ...b] = a;
    //将数组转化为参数传递给函数
    function fn(x, y) {
        console.log(x, y);
    }
    fn(...b);
    console.log(b);
}

{
    // 替换数组（全部替换）
    //fill(替换内容，起始index,替换到哪块的长度)
    let a = [1,2,3,4,5];
    let b = [...a].fill(5,1,5);
    console.log(b);
}
{
    //find()返回数组中第一个找到的值    ()里面是回调函数
    //findIndex()返回数组中第一个找到的值的index    ()里面是回调函数
    let a = [{"title":"es6","id":1},{"title":"nodejs","id":2},{"title":"wechat","id":3},{"title":"es6","id":4}];
    let b = a.find(function (item) {
        return item.title === "es6";
    })
    let c = a.findIndex(function (item) {
        return item.title === "wechat";
    })
    console.log(b);
    console.log(c);
}
{
    //includes(n) 查看数组中是否包含n
    let a = [1,2,3,4,5];
    let b = a.includes(5);
    console.log(b);
}
{
    //展开数组  flat(n)   n表示展开的数组的层数，默认值为1
    let a = [1,2,[3,[4,5]]];
    let b = a.flat(2);
    console.log(b);
}
{
    //数组去重  filter
    // filter(function ("数组每一项的值","每一项的index","当前数组本身")) {})
    let arr = [1,2,3,4,2,3,5,4,2,5,6,9,2];
    let b = arr.filter(function (i,index,item) {
        return item.indexOf(i) === index;   //查找数组中每一个值的第一次出现返回出去
    })
    console.log(b);
}
{
    
}