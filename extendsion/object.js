const foo = 'bar';
const baz = {foo};
baz // {foo: 'bar}
等同于
const baz = {foo: foo}


const fun = {
    method() {
        return 'hello';
    }
}
等同于
const fun = {
    method: function () {
        return 'hello';
    }
}
注意上面，简写的对象方法不能当作构造函数使用。
比如简写时候，fun.method()  就会报错

CommonJS模块输出一组变量，也是用的简介写法
module.exports = { getItem, setItem, clearItem };

// 等同于
module.exports = {
    getItem: getItem,
    setItem: setItem,
    clearItem: clearItem,
}

简介写法在打印的时候也很好用
const a = 123;
console.log({a});
// a: 123