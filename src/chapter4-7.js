//Map <=> object    Array <=> Set 
{
    //增删改查
    let arr = [];
    let obj = {};
    let map = new Map();
    let set = new Set();
    // 增：
    let arrpush = {"name":"lxd"}
    arr.push(arrpush);
    obj["name"] = "yk";
    map.set("name","lxd");
    set.add(arrpush);
    console.log(arr,obj,map,set);
    // 查：
    arr.includes(arrpush);
    obj["name"];
    map.has("name");
    set.has(arrpush);
    // 改：
    arr.forEach(function (item) {
        item.name = item.name ? "wg" : "";
    })
    obj["name"] = "wg";
    map.set("name","wg");
    set.forEach(function(item) {
        item.name = item.name ? "wg" : "";
    })
    // 删：
    let index = arr.findIndex(function (item) {
        return item.name;
    });
    arr.splice(index,1);
    delete obj.name;
    map.delete("name");
    set.delete(arrpush);
}