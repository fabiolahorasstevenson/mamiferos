"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.carnivoros = void 0;
var mamiferos_1 = require("./mamiferos");
var carnivoros = /** @class */ (function (_super) {
    __extends(carnivoros, _super);
    function carnivoros(pAnimal, pCantidadPatas, pTienePelo, pAnimalAcuatico, pAnimalQueCome, pEsDepredador, pPatasConGarras) {
        var _this = _super.call(this, pAnimal, pCantidadPatas, pTienePelo, pAnimalAcuatico) || this;
        _this.animalQueCome = pAnimalQueCome;
        _this.esDepredador = pEsDepredador;
        _this.patasConGarras = pPatasConGarras;
        return _this;
    }
    carnivoros.prototype.comer = function () {
        console.log("Los carnívoros comen solo carne es por eso que tiene garras en sus patas y colmillos afilados");
    };
    return carnivoros;
}(mamiferos_1.mamiferos));
exports.carnivoros = carnivoros;
