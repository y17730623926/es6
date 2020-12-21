"use strict";

{
    //函数扩展
    var fn = function fn(x, y) {
        y = y || "world";
        return x + y;
    };

    // 负性：0 NaN undefinde null ""
    var fun = function fun(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "world";

        console.log("es6", x + y);
    };

    console.log(fn("hello", ""));
    fun("hello", "china");
}
{
    //函数参数的不限制
    // instanceof            //指这个实例是否在这个原型链上
    // Array.defineProperty.method.call();
    // Array.definProperty.method.apply(arguments);
    // Array.definProperty.method.bind();
    var add = function add() {
        // rest这是一个真正的对象9】表示参数部分
        var sum = 0;

        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = rest[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var value = _step.value;

                sum += value;
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

        console.log(sum);
        // Array.defineProperty.method.apply(arguments)
    };

    add(1, 2, 3, 4);
}
{
    //函数尾调用
    var step2 = function step2(x) {
        console.log("尾调用", x);
    };

    var step1 = function step1(x) {
        return step2(x);
    };

    step1(11);
}