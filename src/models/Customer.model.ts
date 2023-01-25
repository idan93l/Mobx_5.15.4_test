import { observable } from "mobx"

export default class CustomerModel {
  id = Math.random();
  @observable name = "";
  @observable age = "";
}
