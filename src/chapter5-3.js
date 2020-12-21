{
    //构造函数的普通写法
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log(`大家好，我的名字是${this.name}，我今年${this.age}岁了`);
    }
    const pe = new Person("wan", 20);
    pe.sayHello();
}
{
    // 类创建对象
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log(`大家好，我的名字是${this.name}，我今年${this.age}岁了`);
        }
    }
    const pe = new Person("jiji", 18);
    console.log(pe);
    pe.sayHello();
}
{
    // 继承
    class Parent {
        constructor(name = "yk") {
            this.name = name;
        }
    }
    class Son extends Parent { }
    console.log("继承", new Son());
    class Child extends Parent {
        constructor(name = "jack") {
            super(name);        //继承必须要有super ()里面的参数是要修改的属性名
            this.name = name;
        }
    }
    console.log("继承", new Child());
}
{
    // 类的属性  get  set  这是一个属性用属性名调用
    class Person {
        constructor(name = "kangkang") {
            this.name = name;
        }
        get fullName() {
            return this.name + " " + "fang";
        }
        set fullName(value) {
            this.name = value;
        }
    }
    let pe = new Person();
    console.log("get", pe.fullName);
    pe.fullName = "shengzhi";
    console.log(pe.name);
}
{
    // 类的静态方法/静态属性
    class Person {
        // static prop = 20;        //es7认识，es5能输出，但是控制台会报错。
        constructor(name = "yukuan") {
            this.name = name;
        }
        static sayHello(obj) {
            console.log("my name is" + " " + obj.name);
        }
    }
    Person.age = 18;   //最好用这种方法写静态属性 类.属性名 = 属性值;
    console.log(Person.age);
    let pe = new Person();
    console.log(pe);    //{name: "yukuan"}
    Person.sayHello(pe);
}