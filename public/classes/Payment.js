export class Payment {
    //   readonly recipient: string; // Can be read outside the class, but not edit
    //   private details: string; // Can only be read and edited inside the class
    //   public amount: number; // Can be read and edited outside the class
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
