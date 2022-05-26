
import * as rls from "readline-sync";

let nombre : string = rls.question("Ingrese su nombre: ");
let clave : string = rls.question("Ingrese su clave: ");
if(nombre === "Juan" && clave === "claveJuan"){

    console.log("Usuario correcto, puede ingresar");

}else{

    console.log("Usuario incorrecto, no puede ingresar. Intente nuevamente");

}