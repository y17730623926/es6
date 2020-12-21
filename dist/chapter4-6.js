"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Set里面的方法
{
	var set = new Set();
	set.add(1);
	console.log(set);
	// Object.is()去重
	var setOne = new Set([1, 1, 2, 3, 4, 2, 3, 4, 5]);
	console.log(setOne);
	console.log(setOne.length); //undefined
	console.log(setOne.size);
}
{
	var _set = new Set();
	// set.add([1,2,3,4]);
	var item = { "name": "apple" };
	_set.add(item);
	console.log(_set);
	console.log(_set.has(item));
	var _setOne = new Set([1, 1, 2, 3, 4, 2, 3, 4, 5]);
	_setOne.delete(1);
	console.log(_setOne);
}
{
	// keys和values
	var _set2 = new Set([1, 2, 3, 4, 5]);
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _set2.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			console.log(key);
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
}
{
	var arr = [1, 2, 3, 4, 2, 3, 5, 1, 6, 7, 5];
	console.log(arr);
	var _set3 = new Set(arr);
	console.log(_set3);
	var changeArr = Array.from(_set3);
	console.log(changeArr);
}
{
	var obj = { name: 'zhangsan' };
	var wset = new WeakSet();
	wset.add(obj);
	console.log(wset);
}
{
	//Set 的应用
	var s1 = new Set([1, 2, 3]);
	var s2 = new Set([2, 3, 4]);

	new Set([].concat(_toConsumableArray(s1), _toConsumableArray(s2))); // 并集：[1,2,3,4]
	var a = new Set([].concat(_toConsumableArray(s1)).filter(function (item) {
		return s2.has(item);
	})); // 交集：[2,3]
	console.log(a);
	var b = new Set([].concat(_toConsumableArray(s1)).filter(function (item) {
		return !s2.has(item);
	})); // 差集：[1,4]
	console.log(b);
}