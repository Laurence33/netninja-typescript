export class Invoice {
    //   readonly client: string; // Can be read outside the class, but not edit
    //   private details: string; // Can only be read and edited inside the class
    //   public amount: number; // Can be read and edited outside the class
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
