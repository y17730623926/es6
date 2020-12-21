{
    //箭头函数
    // 函数的错误用法
    // function fn(x){
    //     let x;
    //     console.log(x);
    // }
    // fn(11);
    //箭头函数只能是匿名函数
    // const arrow = function (x) {
    //     console.log("箭头函数");
    // }
    // const arrow = (x) =>{
    //     console.log("箭头函数");
    // }
    // 当参数为一个时（）可以省略 当函数语句只有一个时，{} 也可以省略
    const arrow = x => console.log("箭头函数");
}
{
    //箭头函数不绑定this
    const fruit = {
        name: 'apple',
        price: 18,
        num: 10,
        sum(){
            // console.log(this.price)
			/* setTimeout(function(){
				console.log(this.price);
			},1000) */
			setTimeout(()=>{
				console.log(this.price*this.num);
			},1000);
        }
    }
    fruit.sum()
}