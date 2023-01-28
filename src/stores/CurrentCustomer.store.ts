import { Customer } from "../models/Customer.model";
import { observable, action, computed } from "mobx";

export default class CurrentCustomerStore {
  @observable customer: Customer = {
    id: +Math.random().toFixed(4),
    name: "Eric",
    age: 27,
    email: "eric@gmail.com"
  };

  @computed get currentCustomer() {
    return this.customer
  }
}

export const store = new CurrentCustomerStore(); 