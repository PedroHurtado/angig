https://www.typescriptlang.org/docs/handbook/mixins.html

// @strict: false
// Each mixin is a traditional ES class
class Add {
    add() { }
}

class Update {
    update() { }
}

// Including the base
export class Sprite {
    x = 0;
    y = 0;
}

// Then you create an interface which merges
// the expected mixins with the same name as your base
export interface Sprite extends Add, Update { }
// Apply the mixins into the base class via
// the JS at runtime
applyMixins(Sprite, [Add, Update]);


// This can live anywhere in your codebase:
// util
function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}

let player = new Sprite();
player.add();
player.update();
console.log(player.x, player.y);