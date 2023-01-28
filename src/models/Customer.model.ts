import { observable, action, computed } from "mobx";

export interface Customer {
  id: number;
  name: string;
  age: number;
  email: string;
}

// export default class CustomerData {
//   @observable customer: Customer = {
//     id: +Math.random().toFixed(4),
//     name: "Eric",
//     age: 27,
//     email: "eric@gmail.com"
//   };
// }