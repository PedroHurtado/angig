//https://www.typescriptlang.org/docs/handbook/decorators.html

function logger() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       const oldFunction = descriptor.value;
       descriptor.value = function(...args:[]){
          console.log("Before")
          oldFunction.apply(this,args)
          console.log("After")
       }
    };
  }
  
  class Foo{
      @logger()  //activar en el compilador la opción de experimental decorator
      write(){
          console.log("write method")
      }
  }
  
  const foo = new Foo
  foo.write();