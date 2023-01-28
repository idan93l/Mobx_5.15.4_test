import { Customer } from "../models/Customer.model";
import { observable, action, computed } from "mobx";

export default class CurrentCustomerStore {
  @observable customer: Customer = {
    // id: +Math.random().toFixed(4),
    name: "",
    age: 0,
    // email: ""
  };

  @computed get customerName() {
    if (this.customer.age === 0) return this.customer.name
    return this.customer.name + this.customer.age;
  }

  @action changeName(name: string) {
    this.customer.name = name;
  }

  @action changeAge(age: number) {
    this.customer.age = age;
  }
}

export const store = new CurrentCustomerStore(); 