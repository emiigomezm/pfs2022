import * as rls from 'readline-sync';

/*
   Desarrolle un algoritmo que dados tres 
números determine cuál es el mayor de los 
tres 
*/


let nroUno : number = rls.questionFloat("Ingrese el primer valor: ");
let nroDos : number = rls.questionFloat("Ingrese el segundo valor: ");
let nroTres : number = rls.questionFloat("Ingrese el tercer valor: ");
let mayorDeTres: number = ( nroUno||nroDos||nroTres)

if (mayorDeTres){
    console.log('El mayor valor es: '+ Math.max(nroUno,nroDos,nroTres));
}