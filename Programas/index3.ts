//POO

/* Muchas veces nos topamoscon arreglos y objetos, en TS actuan de forma similar a otros lenguajes */
const arr = [];

arr.push('Hola');
arr.push('Como');
arr.push('Estas');

//En este caso el arreglo tiene 3 elementos, pero no son de tipo String, sino de tipo Any

//Un arreglo puede tener datos de diferentes tipos, pero no es natural, puede ocacionar bugs. 
const arr2 = [];
arr2.push('Hola'); //Un string
arr2.push(2022); // Un numero
arr2.push({}); //Un objeto

/*Cuando usamos any, no podemos aprovechar las utilidades que tiene TS, entonces
Si queremos un arreglo con un tipo de dato en particular: */
const numbers: number[] = [1,2,4]; //Con estole indicamos a TS que tenemos un arreglo "numbers" de tipo de datos numeros
numbers.push('Hola');
numbers.push(5);
//O También
const numbers2  = [1,2,4];  //De manera implicita, debido a sus valores, decimos que este array es numérico


/*Arreglos de varios tipos*/
const numbers3: (number | string)[] = [1,2,4]; //Con estole indicamos a TS que tenemos un arreglo "numbers" de tipo de datos numeros o strings
numbers3.push('cinco');
numbers3.push(4);
//O tambien
const numbers4 = [1,2,'tres']; //En este casoindicamos que el arreglo puede tener numeros y/o cadenas 


//============================================================
//Objetos
const channel = {
    name: 'YouTube'
};

//channel.subscribers = 1700; //Este error indica que la propiedad susbcribers no existe dentro del objeto channel.
//channel = {age:3} //Ts, indica que canal solo puede hacer referencia a un objeto con propiedad de nombre con valor string
//channel = {name: true} //El error ahora es que el valor debe ser string
channel = {name:'Jhonathan'}; //Em este caso sucede que declaro una variable con "const" y entonces no se permite modificar

let fruit = {name: 'Pinia'};
fruit = {name: 'apple'};
fruit.name = 'Uva';

//Declarar un objeto (De forma explicita)
let obj: object;

obj = {hola: 'holaMundo'}; //Entonces, el objeto tiene 1 propieda, hola:Mundo
obj = {test: false};//Entonces, el objeto tiene 1 propieda, test:false
//Pero siquisieramos tener un objeto con 2 o más propiedades tendríamos que reedeclarar toda la vairable:
obj = {hola: 'holaMundo', test: false, edad: 25};


//Declarar el tipo de objeto (De forma implícita)
let superHero: {
    name: string,
    age: number,
    powers: string[]
};

//superHero = {name: 'Batman'}; //Tendremos errro proque aun nos falta indicar las propiedades age, y powers
superHero = {
    name: 'Batman',
    age: 27,
    powers: ['Batimobil', 'Volar']
};

superHero.name = 'Superman';
superHero.age = 29,
superHero.powers.push('Ultra velocidad');