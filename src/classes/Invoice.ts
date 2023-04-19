import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  //   readonly client: string; // Can be read outside the class, but not edit
  //   private details: string; // Can only be read and edited inside the class
  //   public amount: number; // Can be read and edited outside the class

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
