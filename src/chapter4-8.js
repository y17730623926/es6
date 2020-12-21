// 代理拦截
{
    //Proxy代理，构造函数，操作对象，两个参数都是对象
    let accout = {
        "id": 123,
        "name": "admin",
        "phone": "12345678912",
        "creat_time": "2020",
        "_private": "test"
    }
    //创建代理实例
    let accoutProxy = new Proxy(accout, {
        //拦截读取操作
        get(target, key) {
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
        set(target, key, val) {
            if (key === "id") {
                return target[key];
            } else {
                return target[key] = val;
            }
        },
        //拦截查看操作
        has(target, key) {
            if (key in target) {
                console.log(`属性名：${key}属性值：${target[key]}`);
            } else {
                console.log("该属性不存在");
            }
        },
        //删除操作
        deleteProperty(target, key) {
            if (key.indexOf("_") === 0) {
                console.log("私有属性不能删除");
            } else {
                delete target[key];
            }
        },
        //过滤读取
        ownKeys(target) {
            return Object.keys(target).filter(function (item) {
                return item !== "id" && item.indexOf("_") !== 0;
            })
        }
    })
}
{
    //Reflect 映射
    let obj = {
        "id": 123,
        "name": "admin",
        "phone": "12345678912",
        "creat_time": "2020",
        "_private": "test"
    }
    console.log(Reflect.get(obj, 'name'));
    Reflect.set(obj, 'name', 'yangli')
    console.log(obj.name);
    'name' in obj;
    console.log(Reflect.has(obj, 'name'))
}