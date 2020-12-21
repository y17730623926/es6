{
	// Iterator（遍历器） 产生一个遍历器刚开始指针在最前面元素的前面
	const arr = [1,2,3,4];
	const fn = arr[Symbol.iterator]();
	/* console.log(fn.next())//{value: 1, done: false}
	console.log(fn.next())
	console.log(fn.next())
	console.log(fn.next())
	console.log(fn.next()) */
}
{
    //next()方法的实现原理
	function useIte(array){
		let index = 0;
		return {
			next(){
				return index < array.length ? { value :array[index++],done:false } : { value:undefined,done:true }
			}
		}
	}
	let it = useIte(['a','b']);
	// console.log(it.next())
	// console.log(it.next())
	// console.log(it.next())
}
// Symbol.iterator      //底层代码实现
{
	const obj = {
		color:"red",
		fontSize:18,
		price:18,
		name:'apple',
		[Symbol.iterator](){	//对象下的方法
			let index=0;
			const values = Object.values(this)
			return {
				//next方法实现的原理
				next(){
					if(index < values.length){
						return {
							value:values[index++],
							done:false
						}
					}else{
						return {
							value:undefined,
							done:true
						}
					}
				}
			}
		}
	}
	let objIt = obj[Symbol.iterator]();
	console.log(objIt.next())
	console.log(objIt.next())
	console.log(objIt.next())
	console.log(objIt.next())
	console.log(objIt.next())
	for (let s of obj) {
		console.log(s);
	}
}