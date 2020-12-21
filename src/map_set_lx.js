{
    //Map实例转化为对象
    let obj = {"name":"yk","age":19,"sex":"男"};
    let map = new Map(Object.entries(obj));
    let obj1 = Object.fromEntries(map);
    console.log(map);
    console.log(obj);
    console.log(obj1);

    //Set实例转化为数组
    let set = new Set([1,2,3,5,5,4,6,1,2,8,9,4,4,]);
    set = Array.from(set);
    console.log(set);
       
    //数组CRUD
        // 增：push unshift 删：pop shift splice
    // 对象CRUD
        // 增：对象.属性名 = 属性值 删：delete 对象.属性名 改：对象.属性名 = 属性值 查：对象.属性名
    // Set CRUD
        // 增：add() 删：delete() clear() 查：has() 
    // Map CRUD
        // 增：set() 删：delete() clear() 改：set() 查：has()
}