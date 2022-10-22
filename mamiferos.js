"use strict";
exports.__esModule = true;
exports.Mamifero = void 0;
var Mamifero = /** @class */ (function () {
    function Mamifero(pTipoAnimal, pCantidadPatas, pTienePelo, pAnimalAcuatico) {
        this.tipoAnimal = pTipoAnimal;
        this.cantidadPatas = pCantidadPatas;
        this.tienePelo = pTienePelo;
        this.animalAcuatico = pAnimalAcuatico;
    }
    Mamifero.prototype.getTipoAnimal = function () {
        return this.tipoAnimal;
    };
    Mamifero.prototype.setTipoAnima = function (pTipoAnimal) {
        this.tipoAnimal = pTipoAnimal;
    };
    Mamifero.prototype.getCantidadPatas = function () {
        return this.cantidadPatas;
    };
    Mamifero.prototype.setCantidadPatas = function (pCantidadPatas) {
        this.cantidadPatas = pCantidadPatas;
    };
    Mamifero.prototype.getTienePelo = function () {
        return this.tienePelo;
    };
    Mamifero.prototype.setTienePelo = function (pTienePelo) {
        this.tienePelo = pTienePelo;
    };
    Mamifero.prototype.getAnimalAcuatico = function () {
        return this.animalAcuatico;
    };
    Mamifero.prototype.setAnimalActuatico = function (pAnimalAcuatico) {
        this.animalAcuatico = pAnimalAcuatico;
    };
    Mamifero.prototype.comer = function () {
        console.log("El mamífero puede comer distintas cosas, existen diversas clases de mamíferos en este aspecto");
    };
    return Mamifero;
}());
exports.Mamifero = Mamifero;
