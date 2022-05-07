/* Conceptos básicos */

/*TS al ejecutarse se transforma en JS, que es compatible con los navegadores */
console.log("Hola Mundooo!");

/*Todo lo que escribamos en TS se refleja en JS*/
const htmlBody = document.querySelector('body');
console.log(htmlBody);

/*La ventaja es que TS te muestra los errores que se comenten cuando codificamos en JS
esto ayuda a prevenir errores inesperados en nuestra aplicación */
const channel = 'YouTube';
console.log(channel);

/*En este punto veremos un error en la variable year si tenemos otra variable del mismo nombre, cierrelo*/
let year = 2021;
//year = '2021'; error
year = 2022; //Correcto, TS nos corregije que si podemos cambiar el valor al mismo tipo de dato!