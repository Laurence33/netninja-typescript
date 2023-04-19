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
