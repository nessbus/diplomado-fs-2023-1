// suma la cantidad de impares hasta el numero asignado ej: 20 suma los impares que hay hasta 20
const sumOddFirst = (oddLimitNumber) => {
    let sum = 0;
    for (let i = 1; i < oddLimitNumber; i += 2){
        sum += i;
        // sum = sum + i;
    }
    return sum;
}

// suma de la cantidad de impares, segun el numero asignado ej 20, suma los primero 20 impares

const sumOddFirstV2 = (firtsOddNumbers) => {
    let sum = 0;
    for (let i = 0; i , firtsOddNumbers; i ++){
        let nextOddNumber = i * 2 + 1;
        sum += nextOddNumber;
    }
    return sum;
}
