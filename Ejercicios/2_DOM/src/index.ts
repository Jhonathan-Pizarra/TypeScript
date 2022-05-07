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
const creditDebit = document.querySelector("#creditDebitSelect") as HTMLSelectElement;
const toForm = document.querySelector("#toFromInput") as HTMLInputElement;
const amount = document.querySelector("#amountInput") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLTextAreaElement;
const sendEmail = document.querySelector("#sendEmail") as HTMLInputElement;

const form = document.querySelector("#form") as HTMLFormElement;

interface TransactionInterface {
    creditDebit: string,
    toForm: string,
    amount: number,
    details: string,
    sendEmail: boolean,  
}

form.addEventListener("submit", event => {
    event.preventDefault(); //para que nuestra app no recarge lapagina durante el submit

    const transaction: TransactionInterface = {
        creditDebit: creditDebit.value,
        toForm: toForm.value,
        amount: amount.valueAsNumber, //Porque recibe un string y definimos un tipo de dato numero
        details: details.value,
        sendEmail: sendEmail.checked, 
    }

    renderTransaction(transaction);
    
})

const renderTransaction = (t: TransactionInterface) => {
    const tableRow = document.createElement('tr');

    const creditDebitData = document.createElement('td');
    creditDebitData.innerHTML = t.creditDebit;

    const toFromData = document.createElement('td');
    toFromData.innerHTML = t.toForm;

    const amountData = document.createElement('td'); 
    amountData.innerHTML = t.amount.toString();

    const detailsData = document.createElement('td'); 
    detailsData.innerHTML = t.details.toString();

    tableRow.append(creditDebitData)
    tableRow.append(toFromData)
    tableRow.append(amountData)
    tableRow.append(detailsData)

    const tBody = document.querySelector('tbody')!;
    //tBody?.prepend(tableRow); //TS agrego el "?" porque piensa que puede haber elementos nulos, yo agrego el "!" para idicarle que no habrá nulos
    tBody.prepend(tableRow);

}