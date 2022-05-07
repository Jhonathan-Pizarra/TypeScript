//Funciones
//Declarar una funcion implicitamente
let testFunction: Function = () => {
    console.log("Hola Mundo");
}

//testFunction = 10; //Intentardarle un dato diferente, nos dará el error que captura TS. 
//Solo podemos reasiganar sus valores su esos valores son funcionestambién

//Delcarar una funcion explicitamente
let anotherFunction = () => {
    console.log("Mira esamagia");
} //En este caso cuando no usamos return, el tipo de dato del valor que devuelve la funcion es void
//Por tanto esta funcion es void

let anotherFunction2 = () => {
    console.log("Mira esamagia 2");
} 
let a = anotherFunction2(); // la variable "a" tiene un valor asignado "void", por tanto esa variable no se le puede asginar otro tipo de dato que no sea void


let anotherFunction3 = () => {
    return 2 + 2;
} 
let twoPlusTwo = anotherFunction3(); //La variable, es de tipo numberdebido a que el valor de la funcion (que tiene retorno) es detipo number


//Pasar valores como parámetos
let double = (num) => {
    return num * 2;
}
let c = double(2);
let d = double(6);
let e = double('cero');
console.log(c, d); //4 y 12
console.log(e); //NaN, no es un numero! Y esto puede dar errores inersperados

//Solucion: indicar el tipo de dato que espera el parámetro
let double2 = (num: number) => {
    return num * 2;
}
let f = double2(2);

//Vamos a practicar
let concat = (a: string, b: string, reverse: boolean) => {
    if(reverse){
        return b + a;
    }
    return a + b;
}
let result = concat('Me gusta', 'La carne', false);


//Parámetros opcionales
//Digamos que queremos que reverse sea opcional, agregamos un signo de pregunra
let concat2 = (a: string, b: string, reverse?: boolean) => {
    if(reverse){
        return b + a;
    }
    return a + b;
}
let result2 = concat2('Me gusta', 'La carne'); //Si no se pasa por defectosu valor es false