import { Mamifero } from "./mamiferos";
import { Herviboro } from "./herviboros";
import { Carnivoro } from "./carnivoros";
import { Omnivoro } from "./omnivoros";

let mamifero1: Mamifero = new Mamifero("Gato",4,true,false);
let herviboro1: Herviboro = new Herviboro("Jirafa",4,true,false,false);
let carnivoro1: Carnivoro = new Carnivoro("Leon",4,true,false,["Cebra","Antílopes"],true,true);
let omnivoro1: Omnivoro = new Omnivoro("Cerdo",4,true,false,true,true);

mamifero1.comer();
carnivoro1.comer();
omnivoro1.comer();
herviboro1.comer();
