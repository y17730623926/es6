"use strict";

{
    //Map实例转化为对象
    var map = new Map([["name", "yk"], ["age", 19], ["sex", "男"]]);
    var obj = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = map.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var en = _step.value;

            console.log(en);
            obj[en[0]] = en[1];
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    console.log(map);
    console.log(obj);

    //Set实例转化为数组
    var set = new Set([1, 2, 3, 5, 5, 4, 6, 1, 2, 8, 9, 4, 4]);
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