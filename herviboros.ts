import { mamiferos } from "./mamiferos";

class herviboros extends mamiferos{

    private tieneColmillo : boolean;

    public constructor(pAnimal:string,pCantidadPatas:number,pTienePelo: boolean,pAnimalAcuatico: boolean,pTieneColmillo: boolean){
        super(pAnimal,pCantidadPatas,pTienePelo,pAnimalAcuatico);
        this.tieneColmillo = pTieneColmillo;
    }

    public comer(){

    }
}