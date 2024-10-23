//BAD
class Foo{
    id=1;
    name='pedro';
}

class Bar{
    id=1;
    name='pedro hurtado';
}

class ServiceFoo{
    add(foo:Foo):void{
        //TODO
    }
}

class ServicebAR{
    add(bar:Bar):void{
        //TODO
    }
}


//OK

interface Foo{
    id:string;
    name:string;
}

interface Bar{
    id:string;   
}

class ServiceAdd<T>{
    add(entity:T):void{
        //TODO
    }
}

const serviceFoo = new ServiceAdd<Foo>();
serviceFoo.add({id:"1",name:"pedro"})

const serviceBar = new ServiceAdd<Bar>();
serviceBar.add({"id":"1"})

//https://www.typescriptlang.org/docs/handbook/2/generics.html