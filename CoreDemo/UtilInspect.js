var util=require('util');
class Foo {
    get [Symbol.toStringTag]() {
      return 'bar';
    }
  }
  
  class Bar {}
  
  const baz = Object.create(null, { [Symbol.toStringTag]: { value: 'foo' } });
  
 var d= util.inspect(new Foo()); // 'Foo [bar] {}'
 var e=util.inspect(new Bar()); // 'Bar {}'
 var f=util.inspect(baz);       // '[foo] {}'
  console.log(d);
  console.log(e);
  console.log(f);
  //============
  const { inspect } = require('util');
  const obj = {};
obj.a = [obj];
obj.b = {};
obj.b.inner = obj.b;
obj.b.obj = obj;

console.log(inspect(obj));
// <ref *1> {
//   a: [ [Circular *1] ],
//   b: <ref *2> { inner: [Circular *2], obj: [Circular *1] }
// }
console.log(util.inspect(util, { showHidden: true, depth: null }));