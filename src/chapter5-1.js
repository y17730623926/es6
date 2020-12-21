{
    //函数扩展
    function fn(x, y) {
        y = y || "world";
        return x + y;
    }
    console.log(fn("hello", ""))
    // 负性：0 NaN undefinde null ""
    function fun(x, y = "world") {
        console.log("es6", x + y);
    }
    fun("hello", "china");
}
{   
    //函数参数的不限制
    // instanceof            //指这个实例是否在这个原型链上
    // Array.defineProperty.method.call();
    // Array.definProperty.method.apply(arguments);
    // Array.definProperty.method.bind();
    function add(...rest){                  // rest这是一个真正的对象9】表示参数部分
        let sum = 0;
        for(let value of rest){
            sum += value;
        }
        console.log(sum);
        // Array.defineProperty.method.apply(arguments)
    } 
    add(1,2,3,4);
}
{
    //函数尾调用
	function step2(x){
		console.log("尾调用",x);
	}
	function step1(x){
		return step2(x);
	}
	step1(11);
}