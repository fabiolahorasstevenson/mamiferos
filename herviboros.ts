import { Mamifero } from "./mamiferos";

export class Herviboro extends Mamifero {
    private tieneColmillo: boolean;

    public constructor(pAnimal: string, pCantidadPatas: number, pTienePelo: boolean, pAnimalAcuatico: boolean, pTieneColmillo: boolean) {
        super(pAnimal, pCantidadPatas, pTienePelo, pAnimalAcuatico);
        this.tieneColmillo = pTieneColmillo;
    }

    public comer() {
        console.log("Los hervíboros comen solo plantas, por ello no tienen colmillos afilados");
    }
}