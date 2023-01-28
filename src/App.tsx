import { CurrentCustomer } from "./components/CurrentCustomer";
import { store } from "./stores/CurrentCustomer.store";
import "./App.css";
import { EditCustomer } from "./components/EditCustomer";
import DisplayCustomerName from "./components/DisplayCustomerName";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <p>
          See <code>Readme.md</code> in the root directory for coding challenge
          instructions.
        </p>
        <p>- Albarius Dev Team</p> */}
        <CurrentCustomer store={store} />
        <EditCustomer store={store}/>
        <DisplayCustomerName />
      {/* </header> */}
    </div>
  );
};

export default App;
