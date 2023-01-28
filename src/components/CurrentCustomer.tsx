
import { observer } from 'mobx-react-lite';
import React from 'react'
import { useState } from 'react';
import CurrentCustomerStore from "../stores/CurrentCustomer.store";

interface CustomerProps {
  store: CurrentCustomerStore;
}


export const CurrentCustomer: React.FC<CustomerProps> = observer(({store}) => {
  const [customerName, setCustomerName] = useState<string>(store.currentCustomer.name);
  return (
    <>
      <h1>{customerName}</h1>
    </>
  )
})