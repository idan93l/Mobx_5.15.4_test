import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import CurrentCustomerStore from "../stores/CurrentCustomer.store";
import axios from "axios";

interface CustomerProps {
  store: CurrentCustomerStore;
  isDarkModeOn: boolean;
}

export const EditCustomer: React.FC<CustomerProps> = observer(
  ({ store, isDarkModeOn }) => {
    const [customerName, setCustomerName] = useState<string>("");
    const [customerAge, setCustomerAge] = useState<number>(0);

    const getRandomCustomerData = async () => {
      try {
        const { data } = await axios.get("https://randomuser.me/api");
        setCustomerName(data.results[0].name.first);
        setCustomerAge(data.results[0].dob.age);
      } catch (err) {
        console.log(err);
      }
    };

    const saveToLocalStorage = () => {
      localStorage.setItem("currentCustomer", JSON.stringify(store.customer));
    };

    const storeCustomerData = () => {
      store.changeName(customerName);
      store.changeAge(customerAge);
    };

    const localStorageData = () => {
      const storage = JSON.parse(
        localStorage.getItem("currentCustomer") || "{}"
      );
      !storage.name && !storage.age
        ? getRandomCustomerData()
        : setCustomerName(storage.name);
      setCustomerAge(storage.age);
    };

    useEffect(() => {
      localStorageData();
    }, []);

    useEffect(() => {
      storeCustomerData();
    }, [customerName, customerAge]);

    return (
      <>
        <button
          onClick={() => {
            getRandomCustomerData();
            storeCustomerData();
          }}
        >
          Call API
        </button>
        <div>
          <input
            value={customerName}
            onChange={(e) => {
              setCustomerName(e.target.value);
            }}
          />
          <input
            value={customerAge === 0 ? "" : customerAge}
            onChange={(e) => {
              setCustomerAge(+e.target.value);
            }}
          />
          <button
            onClick={() => {
              storeCustomerData();
              saveToLocalStorage();
            }}
          >
            Save Data
          </button>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("currentCustomer");
            setCustomerAge(0);
            setCustomerName("");
          }}
        >
          Clear
        </button>
      </>
    );
  }
);
