
import { observer } from 'mobx-react-lite';
import React from 'react'
import { useState } from 'react';
import CurrentCustomerStore from "../stores/CurrentCustomer.store";

interface CustomerProps {
  store: CurrentCustomerStore;
}


export const CurrentCustomer: React.FC<CustomerProps> = observer(({store}) => {
  const [customerName, setCustomerName] = useState<string>(store.currentCustomer.name);
  const [newName, setNewName] = useState<string>('Idan');
  return (
    <>
      <h1>{store.currentCustomer.name}</h1>
      <button onClick={() => {store.changeName("Idan")}}>Click to change name</button>
      <button onClick={() => {store.changeName("Hila")}}>Click to change name 2</button>
    </>
  )
})