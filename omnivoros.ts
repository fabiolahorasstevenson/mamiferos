import { Mamifero } from "./mamiferos";

export class Omnivoro extends Mamifero {
    private digestionAdaptativa: boolean;

    public constructor(pAnimal: string, pCantidadPatas: number, pTienePelo: boolean, pAnimalAcuatico: boolean, pTieneColmillo: boolean,
        pDigestionAdaptativa: boolean) {
        super(pAnimal, pCantidadPatas, pTienePelo, pAnimalAcuatico);
        this.digestionAdaptativa = pDigestionAdaptativa;
    }

    public comer() {
        console.log("Los omnivoros comen cualquier alimento, es por eso que cuentan con un estómago adaptativo");
    }
}