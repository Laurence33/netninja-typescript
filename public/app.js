import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "web work", 200);
docTwo = new Payment("luigi", "web work", 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
docs.forEach((e) => console.log(e.format()));
const invOne = new Invoice("mario", "work on mario website", 500);
const invTwo = new Invoice("luigi", "work on luigi website", 760);
console.log(invOne.format(), invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
const ul = document.querySelector("ul");
const listTemplate = new ListTemplate(ul);
const form = document.querySelector("form.new-item-form");
console.log(form.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    listTemplate.render(doc, type.value, "start");
});
// Generics
// Js
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: "yoshi", age: 40 });
console.log(doc1.uid);
// Ts
// <T> means that the function can support any type using T,
// the T type can now be used on the function
const addUidTs = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc2 = addUidTs({ name: "yoshi", age: 40 });
console.log(doc2);
const successResponse = {
    requestId: "123xxx",
    statusText: "OK",
    body: [{ name: "John" }, { name: "Lee", isAdmin: true }],
};
const errorResponse = {
    requestId: "124xxx",
    statusText: "Not Authorized",
    body: [],
};
console.log(successResponse, errorResponse);
