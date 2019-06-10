const array1 = [];
const number1 = 1;
const number2 = 2;
const array2 = Array(number1, number2);
const string = "Hola";

array1.push('Hola mundo'); // Esta funcion ingresa item al final del arreglo
array1.push('Adios mundo');
array1.unshift(1000); // Esta funcion ingresa el item al principio del arreglo

for(let item of array2) {
    console.log(item);
}

const array3 = [...string]; // Arreglo de un string destructurado

console.log(array1);
console.log(array2);
console.log(array3);