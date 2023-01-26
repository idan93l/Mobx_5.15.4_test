import CustomerModel from "../models/Customer.model";
import { observable, action } from "mobx";

interface Customer {
  id: number;
  name: string;
  age: number;
  email: string;
}

export default class CurrentCustomerStore {
  
  customers: Customer[] = [];

  constructor() {
    @observable 
  }
}

// const store = new CurrentCustomerStore(); 
// export default CurrentCustomerStore;