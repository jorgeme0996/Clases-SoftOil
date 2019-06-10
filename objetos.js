const carro = {
    //llave: valor
    modelo: 2013,
    color: 'verde',
    marca: 'Tesla',
    tipo: 'sedan',
    version: 'Turbo',
    submarca: 'Model3'
}

const carro2 = {
    modelo: 2013,
    color: 'rojo',
    marca: 'Tesla',
    tipo: 'sedan',
    version: 'Austera',
    submarca: 'ModelX'
}

//console.log(carro.color);

const values = Object.values(carro);

console.log(values);