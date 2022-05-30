function esMultiplo (valor: number, multiplo : number){
    let resultado : number = valor % multiplo;
    if(resultado == 0){
        return true;
    }else{
        return false;
    }
}

console.log (esMultiplo(9,3)); //true
console.log (esMultiplo(4,3)); //false