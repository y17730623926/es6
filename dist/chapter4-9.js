"use strict";

{
    var inputObj = document.getElementById("oInput");
    var txtObj = document.getElementById("txt");
    var obj = {}; //空对象用来作为目标对象
    var handler = {
        //操作对象
        get: function get(target, key) {
            //获取对象的属性值时的操作
            return Reflect.get(target, key); //由Reflect来做get通常代理
        },
        set: function set(target, key, value) {
            if (key === "text") {
                //当input输入框和目标对象的属性不同时，以txt的内容为主
                inputObj.value = inputObj.value === value ? inputObj.value : value; //双向代理
                txtObj.innerHTML = value; //赋值
            }
            return Reflect.set(target, key, value); //由Reflect来做set通常代理
        }
    };
    var objProxy = new Proxy(obj, handler); //生成代理对象
    inputObj.addEventListener("keyup", function (e) {
        objProxy.text = e.target.value; //输入的值赋给 objProxy 对象的属性经过 代理 从而修改txt的内容
    });
    // objProxy.text = "123";
}