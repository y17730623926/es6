"use strict";

//generator函数的迭代器 与 [Symbol.iterator]生成的遍历器 与 async函数的使用方法
{
    /* let arr = [1,2,3,4];
    let fn = arr[Symbol.iterator]()
    // generator函数
    function * fun(){
    	yield "a";
    }
    // async
    async function fun1(){
    	await console.log(1)
    } */
}

{
    //await 的写法  await 后面可以是Promist对象，也可以是number str 。。。 但是都会转为Promist中的成功
    // await 不会使后面的代码停止会继续运行，但是会使后面的代码等待我这一句运行完，再开始下一句
    var fn1 = async function fn1() {
        await console.log(1); //加上定时器就可以有延时效果，对比 迭代器 和 遍历器 好处是不用手动next()
        await console.log(2);
        await console.log(3);
    };

    fn1();
}
// {
//这样不会一条一条出现
// function fn1() {
//     setTimeout(() => {
//         console.log("任务1")
//     }, 1000)
// }

// function fn2() {
//     setTimeout(() => {
//         console.log("任务2")
//     }, 1000)
// }

// function fn3() {
//     setTimeout(() => {
//         console.log("任务3")
//     }, 1000)
// }

// function init() {
//     fn1();
//     fn2();
//     fn3();
// }
// init()
// } 
// {
//async 的用法  await用上之后会有一条一条出现的方式
// function fn1() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("任务1");
//             resolve()
//         }, 1000)
//     })
// }

// function fn2() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("任务2");
//             resolve()
//         }, 1000)
//     })
// }

// function fn3() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("任务3");
//             resolve()
//         }, 1000)
//     })
// }
// async function init(fn1, fn2, fn3) {
//     await fn1();
//     await fn2();
//     await fn3();
// }
// init(fn1, fn2, fn3); 
// }