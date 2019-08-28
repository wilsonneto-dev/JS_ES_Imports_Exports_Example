/* exportando a função direto */
export function add(x,y){ return x+y; };

/* exportanto um default */
export default function (){ return "i'm the default man!"; };

/* exportando funções seperados*/
function cubo(x){ return x**3; };
function quadrado(x){ return x**2; };

export {cubo, quadrado};
