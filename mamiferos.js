"use strict";
exports.__esModule = true;
exports.mamiferos = void 0;
var mamiferos = /** @class */ (function () {
    function mamiferos(pTipoAnimal, pCantidadPatas, pTienePelo, pAnimalAcuatico) {
        this.tipoAnimal = pTipoAnimal;
        this.cantidadPatas = pCantidadPatas;
        this.tienePelo = pTienePelo;
        this.animalAcuatico = pAnimalAcuatico;
    }
    mamiferos.prototype.getTipoAnimal = function () {
        return this.tipoAnimal;
    };
    mamiferos.prototype.setTipoAnima = function (pTipoAnimal) {
        this.tipoAnimal = pTipoAnimal;
    };
    mamiferos.prototype.getCantidadPatas = function () {
        return this.cantidadPatas;
    };
    mamiferos.prototype.setCantidadPatas = function (pCantidadPatas) {
        this.cantidadPatas = pCantidadPatas;
    };
    mamiferos.prototype.getTienePelo = function () {
        return this.tienePelo;
    };
    mamiferos.prototype.setTienePelo = function (pTienePelo) {
        this.tienePelo = pTienePelo;
    };
    mamiferos.prototype.getAnimalAcuatico = function () {
        return this.animalAcuatico;
    };
    mamiferos.prototype.setAnimalActuatico = function (pAnimalAcuatico) {
        this.animalAcuatico = pAnimalAcuatico;
    };
    mamiferos.prototype.comer = function () {
        console.log("El mamífero puede comer distintas cosas, existen diversas clases de mamíferos en este aspecto");
    };
    return mamiferos;
}());
exports.mamiferos = mamiferos;
