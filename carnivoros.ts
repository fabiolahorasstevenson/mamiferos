import { Mamifero } from "./mamiferos";

export class Carnivoro extends Mamifero {
    private animalQueCome: string[];
    private esDepredador: boolean;
    private patasConGarras: boolean;

    public constructor(pAnimal: string, pCantidadPatas: number, pTienePelo: boolean, pAnimalAcuatico: boolean, pAnimalQueCome: string[], pEsDepredador: boolean,
        pPatasConGarras: boolean) {
        super(pAnimal, pCantidadPatas, pTienePelo, pAnimalAcuatico);
        this.animalQueCome = pAnimalQueCome;
        this.esDepredador = pEsDepredador;
        this.patasConGarras = pPatasConGarras;
    }

    public comer() {
        console.log("Los carnívoros comen solo carne es por eso que tiene garras en sus patas y colmillos afilados");
    }
}