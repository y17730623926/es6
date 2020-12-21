{
    //Generator 迭代器
    const say = function* () {
        yield 'a';
        yield 'b';
        yield 'c';
    }
    const fn = say();//生成一个Generator实例
    // Generator实例返回一个迭代器
    console.log(fn.next());
    console.log(fn.next());
    console.log(fn.next());
    console.log(fn.next());
}
{
    //Generator 与 Iterator（遍历器）的组合
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    obj[Symbol.iterator] = function* () {
        for (const key of Object.keys(obj)) {
            yield obj[key]
        }
    }
    let fn = obj[Symbol.iterator]();    //返回的迭代器
    console.log(fn.next()); //移动指针
	/* for (let va of obj) {
		console.log(va)
	} */
}
{
    const state = function* () {
        while (1) {   //无限长度循环的迭代器
            yield 'success';
            yield 'fail';
            yield 'pending';
        }
    }
    const stateData = state();
    console.log(stateData.next())
    console.log(stateData.next())
}
{
    // { code:0 }
    function fn1() {
        return new Promise(resolve => { //得到一个Promise 对象
            setTimeout(() => {
                console.log("查询中...");
                resolve({ code: 0 })
            }, 1000)
        })
    }
    const getState = function* () {
        yield fn1()
    }
    function autoGetState() {
        const gen = getState();     //得到一个迭代器 这个迭代器第一个的 value 是一个Promise的对象的resolve函数
        const status = gen.next();  //移动指针指向 Promise 对象的resolve函数
        status.value.then(res => {
            console.log(res);   //{code:0}
            if (res.code === 0) {
                console.log("用户付款成功~");
            } else {
                console.log("暂未付款~");
                setTimeout(() => autoGetState(), 1000);     //重复生成迭代器重复开始上面的代码
            }
        })
    }
    autoGetState();
}