import { mamiferos } from "./mamiferos";
import { herviboros } from "./herviboros";
import { carnivoros } from "./carnivoros";
import { omnivoros } from "./omnivoros";

let mamiferos1: mamiferos = new mamiferos("Gato",4,true,false);
let herviboros1: herviboros = new herviboros("Jirafa",4,true,false,false);
let carnivoros1: carnivoros = new carnivoros("Leon",4,true,false,["Cebra","Antílopes"],true,true);
let omnivoros1: omnivoros = new omnivoros("Cerdo",4,true,false,true,true);

mamiferos1.comer();
carnivoros1.comer();
omnivoros1.comer();
herviboros1.comer();
