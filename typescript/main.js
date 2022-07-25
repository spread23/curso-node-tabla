"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(() => {
    function printToConsole(constructor) {
        console.log(constructor);
    }
    function printToConsoleConditional(print = false) {
        if (print) {
            return printToConsole;
        }
        else {
            return () => { };
        }
    }
    const bloquearPrototipo = function (constructor) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    };
    let Pokemon = class Pokemon {
        constructor(name) {
            this.name = name;
            this.apiUrl = 'https://apiPokemon.com';
        }
    };
    Pokemon = __decorate([
        bloquearPrototipo,
        printToConsoleConditional(true)
    ], Pokemon);
    const charmander = new Pokemon('Charmander');
    console.log(charmander);
    Pokemon.prototype.cutomName = 'Pikachu';
})();
//# sourceMappingURL=main.js.map