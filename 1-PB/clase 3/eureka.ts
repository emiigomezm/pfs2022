import * as rls from "readline-sync";

let Clave: string= "eureka"
let Intentos: number= 1;
let IngreseClave: string= rls.question("ingrese clave")

while (Clave!= IngreseClave&& Intentos < 3){
    console.log("Clave incorrecta, vuelva a intentar");
    Intentos=Intentos +1;
    IngreseClave = rls.question("Ingrese clave:");}
if (IngreseClave == Clave){
    console.log("entrando al programa");
}else{
    console.log("Vuelva a intentarlo mas tarde.")
}