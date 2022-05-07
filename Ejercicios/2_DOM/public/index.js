"use strict";
/*
const toFormElement = document.querySelector("#toFromInput");
console.log(toFormElement);

//Ahora obtengamos el valor del imput
console.log(toFormElement.value); //Marca error: porque TS no tiene forma de ver si un elemento dentro de un documento HTML existe con el id que especificamos,
//Sabemos que en el HTML si existe ese elemento, pero TS no tiene forma de comprobarlo,
//Usamos el operador de asercion no nula, para idicarle a TS que la exprtesion no va a aser nula
const toFormElement_1 = document.querySelector("#toFromInput")!;
console.log(toFormElement_1.value); //Marca error: la propiedad value no existe en Element Type, TS infiere el tipo de dato de una variable basado en la funcion que retorna ese valor
//toFormElement retorna un tipo de dato generico y no contiene la propiedad value dentro de la definicion de su tipo


const anotherInput = document.querySelector("input")!;
console.log(anotherInput);
console.log(anotherInput.value);


const anHref = document.querySelector("a")!;
console.log(anHref.href);
console.log(anHref.innerHTML);
*/
//Esto srive para estecampo en especifico. pero si tenemos más inputs, tendremos que uesar TypeCasting
//TYPECASTING
var creditDebit = document.querySelector("#creditDebitSelect");
var toForm = document.querySelector("#toFromInput");
var amount = document.querySelector("#amountInput");
var details = document.querySelector("#details");
var sendEmail = document.querySelector("#sendEmail");
var form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); //para que nuestra app no recarge lapagina durante el submit
    var transaction = {
        creditDebit: creditDebit.value,
        toForm: toForm.value,
        amount: amount.valueAsNumber,
        details: details.value,
        sendEmail: sendEmail.checked,
    };
    renderTransaction(transaction);
});
var renderTransaction = function (t) {
    var tableRow = document.createElement('tr');
    var creditDebitData = document.createElement('td');
    creditDebitData.innerHTML = t.creditDebit;
    var toFromData = document.createElement('td');
    toFromData.innerHTML = t.toForm;
    var amountData = document.createElement('td');
    amountData.innerHTML = t.amount.toString();
    var detailsData = document.createElement('td');
    detailsData.innerHTML = t.details.toString();
    tableRow.append(creditDebitData);
    tableRow.append(toFromData);
    tableRow.append(amountData);
    tableRow.append(detailsData);
    var tBody = document.querySelector('tbody');
    //tBody?.prepend(tableRow); //TS agrego el "?" porque piensa que puede haber elementos nulos, yo agrego el "!" para idicarle que no habrá nulos
    tBody.prepend(tableRow);
};
