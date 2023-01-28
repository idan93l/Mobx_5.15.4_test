import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import CurrentCustomerStore from "../stores/CurrentCustomer.store";

interface CustomerProps {
  store: CurrentCustomerStore;
}

export const DisplayCustomerName: React.FC<CustomerProps> = observer(({ store }) => {
  const getCustomerName = () => { 
    return store.customerName.charAt(0).toUpperCase() + store.customerName.slice(1).substring(0, 9)
  }

    return (
      <>
        <h1>{getCustomerName()}</h1>
      </>
    );
  }
);
