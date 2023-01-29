import { useState } from "react";
import { store } from "./stores/CurrentCustomer.store";
import { EditCustomer } from "./components/EditCustomer";
import { DisplayCustomerName } from "./components/DisplayCustomerName";
import "./App.css";

const App = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(false);
  return (
    <div className={`App ${isDarkModeOn ? "Dark" : ""}`}>
      <button className={`darkModeToggleButton ${!isDarkModeOn ? "" : "darkModeToggleButtonOn"}`} onClick={() => setIsDarkModeOn(!isDarkModeOn)}>Dark Mode: {!isDarkModeOn ? "Off" : "On"}</button>
      <div className="container">
        <DisplayCustomerName store={store}/>
        <EditCustomer store={store} isDarkModeOn={isDarkModeOn}/>
        </div>
    </div>
  );
};

export default App;
