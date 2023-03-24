//Version 1 funcion tradicional
function sumar (num1, num2){
    return resultado = num1+num2;
}
const resultado = sumar(3,7);

//funcion (arrow function)
    //opcion 1 hay un return explicito, debo usar llaves y tengo mas de una linea
const sumarFlecha1 = (num1, num2) => {
    //
    //
    //
    let nombre = "juan";
    return num1 + num2;
}
    // opcion 2 el return es implicito 
const sumarFlecha2 = (num1, num2) => (
    num1 + num2
);
    //opcion 3 
const sumarFlecha3 = (num1, num2) => num1 + num2;
