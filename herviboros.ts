import { mamiferos } from "./mamiferos";

export class herviboros extends mamiferos{

    private tieneColmillo : boolean;

    public constructor(pAnimal:string,pCantidadPatas:number,pTienePelo: boolean,pAnimalAcuatico: boolean,pTieneColmillo: boolean){
        super(pAnimal,pCantidadPatas,pTienePelo,pAnimalAcuatico);
        this.tieneColmillo = pTieneColmillo;
    }

    public comer(){
        console.log("Los hervíboros comen solo plantas, por ello no tienen colmillos afilados");
    }
}