import def, {cubo as cb} from './lib.js';
import { Pessoa, x } from './classes.js';

let p = new Pessoa("Wilson", 27);
console.log(p.ficha());
console.log(x);

console.log(cb(3));
console.log(def());