import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import CurrentCustomerStore from "../stores/CurrentCustomer.store";
import axios from "axios";

interface CustomerProps {
  store: CurrentCustomerStore;
}

export const EditCustomer: React.FC<CustomerProps> = observer(({ store }) => {
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

  const applyRandomCustomerData = () => {
    // if (!store.customer.name) {
      store.changeName(customerName);
      store.changeAge(customerAge);
      // }
  };

  useEffect(() => {
    getRandomCustomerData();
  }, []);

  useEffect(() => {
    applyRandomCustomerData();
  }, [customerName, customerAge]);

  return (
    <>
      <h1>{store.customer.name}</h1>
      <h1>{store.customer.age}</h1>
      <button
        onClick={() => {
          getRandomCustomerData();
          applyRandomCustomerData();
        }}
      >
        Call API
      </button>
    </>
  );
});
