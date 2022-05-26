import * as readlineSync from 'readline-sync' 

let altura:number = readlineSync.questionInt("ingrece Altura: cm ")
   console.log("Su altura es de: cm "+altura)

   if(altura>=130){
      console.log("puede ingresar")

   }else{
      console.log("no pasa") 
   }