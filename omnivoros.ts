import { mamiferos } from "./mamiferos";

class omnivoros extends mamiferos{

    private digestionAdaptativa: boolean;

    public constructor(pAnimal:string,pCantidadPatas:number,pTienePelo: boolean,pAnimalAcuatico: boolean,pTieneColmillo: boolean,
        pDigestionAdaptativa: boolean){
        super(pAnimal,pCantidadPatas,pTienePelo,pAnimalAcuatico);
        this.digestionAdaptativa = pDigestionAdaptativa;
    }

    public comer(){

    }
}