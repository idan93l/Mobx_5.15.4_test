import { store } from "./stores/CurrentCustomer.store";
import { EditCustomer } from "./components/EditCustomer";
import { DisplayCustomerName } from "./components/DisplayCustomerName";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <p>
          See <code>Readme.md</code> in the root directory for coding challenge
          instructions.
        </p>
        <p>- Albarius Dev Team</p> */}
        <EditCustomer store={store}/>
        <DisplayCustomerName store={store}/>
      {/* </header> */}
    </div>
  );
};

export default App;
