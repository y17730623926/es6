"use strict";

{
    //map()数组的映射，不会改变原数组
    var json = [{
        title: "es6",
        status: 1
    }, {
        title: "wechar",
        status: 1
    }, {
        title: "vue",
        status: 1
    }];
    var video = json.map(function (item) {
        // return {
        //     status:item.title,
        //     statusTxt:item.title === "es6" ? "已上线" : "未上线"
        // }

        // item.status = item.title === "es6" ? "已上线" : "未上线";
        // return item;

        //Object.assign("目标对象","源对象");
        var obj = {};
        Object.assign(obj, item);
        obj.status = obj.title === "es6" ? "已上线" : "未上线";
        return obj;
    });
    console.log(video);
}
{
    //reduce()  统计数组
    var list = "yukuanyukuanyukuanyukuan";
    var result = list.split("").reduce(function (acc, cur) {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        console.log(acc);
        return acc;
    }, {});
    console.log(result);
}
{
    //reduce() 展开数组
    var _list = [1, [2, 3, 4, [2, 3, 4, [5, 6]]]];
    var deeplist = function deeplist(list) {
        return list.reduce(function (acc, cur) {
            // acc : 返回值，cur 当前的val
            return acc.concat(Array.isArray(cur) ? deeplist(cur) : cur);
        }, []);
    };
    var fal = deeplist(_list);
    console.log(fal);
}