"use strict";

// 代理拦截
{
    //Proxy代理，构造函数，操作对象，两个参数都是对象
    var accout = {
        "id": 123,
        "name": "admin",
        "phone": "12345678912",
        "creat_time": "2020",
        "_private": "test"
        //创建代理实例
    };var accoutProxy = new Proxy(accout, {
        //拦截读取操作
        get: function get(target, key) {
            switch (key) {
                case "phone":
                    return target[key].substring(0, 3) + "****" + target[key].substring(7);
                case "creat_time":
                    return target[key].replace("2020", "2021");
                default:
                    return target[key];
            }
        },

        //拦截设置的操作
        set: function set(target, key, val) {
            if (key === "id") {
                return target[key];
            } else {
                return target[key] = val;
            }
        },

        //拦截查看操作
        has: function has(target, key) {
            if (key in target) {
                console.log("\u5C5E\u6027\u540D\uFF1A" + key + "\u5C5E\u6027\u503C\uFF1A" + target[key]);
            } else {
                console.log("该属性不存在");
            }
        },
        deleteProperty: function deleteProperty(target, key) {
            if (key.indexOf("_") === 0) {}
        }
    });
}