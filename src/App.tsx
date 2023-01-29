import { store } from "./stores/CurrentCustomer.store";
import { EditCustomer } from "./components/EditCustomer";
import { DisplayCustomerName } from "./components/DisplayCustomerName";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(false);
  return (
    <div className="App">
      <div className="container">
        <DisplayCustomerName store={store} isDarkModeOn={isDarkModeOn}/>
        <EditCustomer store={store} isDarkModeOn={isDarkModeOn}/>
        </div>
    </div>
  );
};

export default App;
