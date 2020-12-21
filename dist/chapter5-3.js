"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
    //构造函数的普通写法
    var Person = function Person(name, age) {
        this.name = name;
        this.age = age;
    };

    Person.prototype.sayHello = function () {
        console.log("\u5927\u5BB6\u597D\uFF0C\u6211\u7684\u540D\u5B57\u662F" + this.name + "\uFF0C\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86");
    };
    var pe = new Person("wan", 20);
    pe.sayHello();
}
{
    // 类创建对象
    var _Person = function () {
        function _Person(name, age) {
            _classCallCheck(this, _Person);

            this.name = name;
            this.age = age;
        }

        _createClass(_Person, [{
            key: "sayHello",
            value: function sayHello() {
                console.log("\u5927\u5BB6\u597D\uFF0C\u6211\u7684\u540D\u5B57\u662F" + this.name + "\uFF0C\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86");
            }
        }]);

        return _Person;
    }();

    var _pe = new _Person("jiji", 18);
    console.log(_pe);
    _pe.sayHello();
}
{
    // 继承
    var Parent = function Parent() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "yk";

        _classCallCheck(this, Parent);

        this.name = name;
    };

    var Son = function (_Parent) {
        _inherits(Son, _Parent);

        function Son() {
            _classCallCheck(this, Son);

            return _possibleConstructorReturn(this, (Son.__proto__ || Object.getPrototypeOf(Son)).apply(this, arguments));
        }

        return Son;
    }(Parent);

    console.log("继承", new Son());

    var Child = function (_Parent2) {
        _inherits(Child, _Parent2);

        function Child() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "jack";

            _classCallCheck(this, Child);

            //继承必须要有super ()里面的参数是要修改的属性名
            var _this2 = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));

            _this2.name = name;
            return _this2;
        }

        return Child;
    }(Parent);

    console.log("继承", new Child());
}
{
    // 类的属性  get  set  这是一个属性用属性名调用
    var _Person2 = function () {
        function _Person2() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "kangkang";

            _classCallCheck(this, _Person2);

            this.name = name;
        }

        _createClass(_Person2, [{
            key: "fullName",
            get: function get() {
                return this.name + " " + "fang";
            },
            set: function set(value) {
                this.name = value;
            }
        }]);

        return _Person2;
    }();

    var _pe2 = new _Person2();
    console.log("get", _pe2.fullName);
    _pe2.fullName = "shengzhi";
    console.log(_pe2.name);
}
{
    // 类的静态方法/静态属性
    var _Person3 = function () {
        // static prop = 20;        //es7认识，es5能输出，但是控制台会报错。
        function _Person3() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "yukuan";

            _classCallCheck(this, _Person3);

            this.name = name;
        }

        _createClass(_Person3, null, [{
            key: "sayHello",
            value: function sayHello(obj) {
                console.log("my name is" + " " + obj.name);
            }
        }]);

        return _Person3;
    }();

    _Person3.age = 18; //最好用这种方法写静态属性 类.属性名 = 属性值;
    console.log(_Person3.age);
    var _pe3 = new _Person3();
    console.log(_pe3); //{name: "yukuan"}
    _Person3.sayHello(_pe3);
}