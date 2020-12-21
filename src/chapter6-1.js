{
	// 用回调函数来实现异步
	// function ajax(cb) {		// ajax 被调用时,先执行 ajax 的函数体部分
	// 	setTimeout(() => {
	// 		cb && cb(() => {		//从这里转到 ajax 的参数，是个函数
	// 			console.log("任务2")
	// 		})
	// 	}, 1000)
	// }
	// ajax((cb2) => {	//这里的 cb2 是上面的cb被调用时传递的箭头函数整体  当ajax函数被调用时先执行 ajax 再执行 cb 最后是 cb2
	// 	console.log("任务1");
	// 	setTimeout(() => {
	// 		cb2 && cb2()	//调用 cb2 也就是cb的参数，是个函数体
	// 	}, 1000)
	// })
}
{
	//Promise的使用方法			实现异步中的同步
	// function ajax(){	//这个函数返回了一个 Promise 的实例对象
	// 	return new Promise((resolve, reject)=>{	//这个实例对象是一个函数
	// 		setTimeout(()=>resolve(),1000)
	// 	})
	// }
	// ajax().then(()=>{
	// 	console.log("任务11");
	// })
}
{
	function ajax() {	//这个函数返回了一个 Promise 的实例对象
		return new Promise((resolve, reject) => {	//这个实例对象是一个函数
			setTimeout(() => resolve(), 1000)	//一秒钟后返回成功函数
		})
	}
	ajax().then(() => {		//调用成功函数
		console.log("任务11");
		return new Promise((resolve, reject) => {	//在创建一个实例对象
			setTimeout(() => resolve(), 1000);		//一秒钟后返回成功函数
		})
	}).then(() => {			//再调用成功函数
		console.log("任务22");
	})
}
{
	/* console.error("错误")
	throw new Error("错误") */
	function judegNumber(num) {
		return new Promise((resolve,reject)=>{
			if(typeof num === "number"){
				resolve(num);	//会触发then里面的函数 ()里面的参数就等于是 then里面的函数的实参
			} else {
				let err =  new Error("请输入数字");
				reject(err);	//会触发catch里面的函数 ()里面的参数就等于是 catch里面的函数的实参
			}
		})
	}
	// judegNumber("1").then(num=>console.log(num)).catch(err=>console.log(err))
	judegNumber(1).then(num => console.log(num)).catch(err=>console.log(err));
}
{
	const img1 = "./img/5.jpg";
	const img2 = "./img/6.jpg";
	const img3 = "./img/7.jpg";
	const img4 = "./img/8.jpg";
	const img5 = "./img/9.jpg";
	function getImage (url) {
		return new Promise((resolve,reject)=>{
			const img = document.createElement("img");	//创建的img标签;
			img.src = url;		//图片路径
			img.onload = ()=>{		//图片加载完成时触发
				resolve(img)
			};
			img.onerror = (err) =>reject(err);	//图片未加载成功触发
		})
	}
	function addimgs(imgs){		//添加所有照片
		imgs.forEach(item => {
			document.body.appendChild(item);
		});
	}
	function addimg(img){		//添加 race 第一个加载成功的img
		document.body.appendChild(img);
	}
	Promise.all([getImage(img1),getImage(img2),getImage(img3),getImage(img4),getImage(img5)]).then(addimgs);
	// Promise.race([getImage(img1),getImage(img2),getImage(img3),getImage(img4),getImage(img5)]).then(addimg);
}
