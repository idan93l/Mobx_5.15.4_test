import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import CurrentCustomerStore from "../stores/CurrentCustomer.store";
import axios from "axios";
import "./EditCustomer.css";

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
      if (customerName && customerAge) {
        localStorage.setItem("currentCustomer", JSON.stringify(store.customer));
        alert("Saved to local storage!");
      } else {
        alert("Can't save empty data!");
      }
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
        <div className="inputsContainer">
          <input
            value={customerName}
            className={isDarkModeOn ? "darkInput" : ""}
            onChange={(e) => {
              setCustomerName(e.target.value);
            }}
          />
          <input
            value={customerAge === 0 ? "" : customerAge}
            className={`ageInput ${isDarkModeOn ? "darkInput" : ""}`}
            onChange={(e) => {
              setCustomerAge(+e.target.value);
            }}
          />
          <button
            className={isDarkModeOn ? "darkButton" : ""}
            onClick={() => {
              storeCustomerData();
              saveToLocalStorage();
            }}
          >
            Save
          </button>
        </div>
        <div className="buttonsContainer">
          <button
            className={isDarkModeOn ? "darkButton" : ""}
            onClick={() => {
              getRandomCustomerData();
              storeCustomerData();
            }}
          >
            Call API
          </button>
          <button
            className={isDarkModeOn ? "darkButton" : ""}
            onClick={() => {
              localStorage.removeItem("currentCustomer");
              setCustomerAge(0);
              setCustomerName("");
            }}
          >
            Clear
          </button>
        </div>
      </>
    );
  }
);
