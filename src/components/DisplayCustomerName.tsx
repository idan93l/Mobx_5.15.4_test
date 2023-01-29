import { observer } from "mobx-react-lite";
import CurrentCustomerStore from "../stores/CurrentCustomer.store";
import "./DisplayCustomerName.css";

interface CustomerProps {
  store: CurrentCustomerStore;
}

export const DisplayCustomerName: React.FC<CustomerProps> = observer(
  ({ store }) => {
    const getCustomerName = () => {
      return (
        store.customerName.charAt(0).toUpperCase() +
        store.customerName.slice(1).substring(0, 9)
      );
    };

    return (
      <div className="customerName">
        {!store.customer.name ? (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <h1>{getCustomerName()}</h1>
        )}
      </div>
    );
  }
);
