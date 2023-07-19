let nota1 =5;
let nota2 =5;
let nota3 =5;
let comp=70;
let suma = 0;
let Salida;

function showMessage(nota1,nota2,nota3) {
   let prom = (nota1+nota2+nota3)/3;
   if (prom>=comp) {
    return "Aprobado";
   } else {
    return "Reprobado"
   }
}
salida = showMessage(nota1,nota2,nota3);
console.log=(Salida);
