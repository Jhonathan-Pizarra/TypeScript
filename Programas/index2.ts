//Tipos de datos

//Todos los lenguajes tienen tipos de datos, esos tipos de datos deese lenguaje se conocen como primitivos
//Tipos de datos primitivos: String, boolean, number...

//Declarar variables
let lastName; /*Estamos declarando una variable de tipo "any"
cuando tengamos una variable de tipo any podemos reasignarle el valor que sea y la variable 
NO pasará a ser del tipo de dato que tenga ese valor. 
Sino que será de tipo "any", el cual es, un nuevo tipo de dato propio de TS */

lastName = 'Pizarra';
lastName = 2021;

//Hasta aqui,vemos que actua igual que JS, pero es de notar que el tipo de dato no es String o number en particular, sino "any", un nuevo tipo de dato

//Declarar variable e indicar el tipo de variable de forma explícita:
let myName: string  = 'Jhonathan';
let year: number = 1996;
let isCool: boolean = true;
let age: any = true;

//Vemos como actual TS, mostrando error al tratar decambiar el tipo de variable
myName = 2021;
year= false;
isCool = 'Si';
age =  24;

//No es necesario declarar explicitamente el tipo de dato de la variable, TS lo puede inferir del valor de la misma
let myName2  = 'Xavier';
let year2 = 1996;
let isCool2  = true;


//Declarar variable e indicar los tipo de variable de forma explícita, esto se conoce ocmo union
let phone: string | number;  //Ahora phone puede ser de tipo numerico o string, 
                            //Podemos indicar hasta 3 tipos diferentes para una misma variable!
phone = 23456;
phone = '12345';
phone = false; 