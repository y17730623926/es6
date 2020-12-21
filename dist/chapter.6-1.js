"use strict";

{
	var ajax = function ajax(cb) {
		setTimeout(function () {
			cb && cb(function () {
				console.log("任务2");
			});
		}, 1000);
	};

	ajax(function (cb2) {
		console.log("任务1");
		setTimeout(function () {
			cb2 && cb2();
		}, 1000);
	});
}