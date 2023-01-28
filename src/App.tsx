import React from "react";
import "./App.css";
import { CurrentCustomer } from "./components/CurrentCustomer";
import { store } from "./stores/CurrentCustomer.store";


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          See <code>Readme.md</code> in the root directory for coding challenge
          instructions.
        </p>
        <p>- Albarius Dev Team</p>
      <CurrentCustomer store={store}/>
      </header>
    </div>
  );
};

export default App;
