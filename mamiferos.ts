
export class mamiferos{

    private tipoAnimal: string;
    private cantidadPatas:number;
    private tienePelo: boolean;
    private animalAcuatico: boolean;
    

    public constructor (pTipoAnimal: string, pCantidadPatas: number, pTienePelo: boolean, pAnimalAcuatico: boolean){
        this.tipoAnimal = pTipoAnimal;
        this.cantidadPatas = pCantidadPatas;
        this.tienePelo = pTienePelo;
        this.animalAcuatico = pAnimalAcuatico;
    }

    public getTipoAnimal():string{
        return this.tipoAnimal;
    }

    public setTipoAnima(pTipoAnimal: string): void{
        this.tipoAnimal = pTipoAnimal;
    }

    public getCantidadPatas():number{
        return this.cantidadPatas;
    }

    public setCantidadPatas(pCantidadPatas: number):void{
        this.cantidadPatas= pCantidadPatas;
    }

    public getTienePelo():boolean{
        return this.tienePelo;
    }

    public setTienePelo(pTienePelo: boolean): void{
        this.tienePelo = pTienePelo;
    }

    public getAnimalAcuatico():boolean{
        return this.animalAcuatico;
    }

    public setAnimalActuatico(pAnimalAcuatico:boolean):void{
        this.animalAcuatico = pAnimalAcuatico;
    }
    
    public comer(){
        console.log("El mamífero puede comer distintas cosas, existen diversas clases de mamíferos en este aspecto");
    }
}


