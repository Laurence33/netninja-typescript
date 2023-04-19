import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 200);
docTwo = new Payment("luigi", "web work", 300);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

docs.forEach((e) => console.log(e.format()));

const invOne = new Invoice("mario", "work on mario website", 500);
const invTwo = new Invoice("luigi", "work on luigi website", 760);
console.log(invOne.format(), invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

const ul = document.querySelector("ul")!;
const listTemplate = new ListTemplate(ul);

const form = document.querySelector("form.new-item-form") as HTMLFormElement;
console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);
  listTemplate.render(doc, type.value, "start");
});

// Generics

// Js
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc1 = addUID({ name: "yoshi", age: 40 });

console.log(doc1.uid);

// Ts
// <T> means that the function can support any type using T,
// the T type can now be used on the function
const addUidTs = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc2 = addUidTs({ name: "yoshi", age: 40 });

console.log(doc2);

// Interface with Generics
// * I think this is very useful when dealing with http requests

interface Response<T extends object> {
  statusText: string;
  requestId: string;
  body: T;
}

interface PersonList {
  name: string;
  isAdmin?: boolean;
}

const successResponse: Response<PersonList[]> = {
  requestId: "123xxx",
  statusText: "OK",
  body: [{ name: "John" }, { name: "Lee", isAdmin: true }],
};

const errorResponse: Response<any> = {
  requestId: "124xxx",
  statusText: "Not Authorized",
  body: [],
};

console.log(successResponse, errorResponse);

// Enums

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const resourceOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: "name of the wild" },
};

const resourceTwo: Resource<object> = {
  uid: 2,
  resourceType: ResourceType.PERSON,
  data: { name: "yoshi" },
};

console.log(resourceOne, resourceTwo);
