import React from "react";
import Navigation from "./Navigation";
import Login1 from "./login.js";
import Home from "./Home";
import Register from "./register.js";
import Service from "./Services.js";
import "./App.css";
import NewLanding from "./NewLanding.js";
import DataDisplay from "./displaydata.js";


function App() {
  return (
    <div className="App" style={appStyle}>
      <NewLanding></NewLanding>
    </div>
  );
}

const appStyle = {
  minHeight: '100vh',
  background: `url('https://imgur.com/a/7RcibJx')`, // Replace with the actual path to your image
  backgroundSize: 'cover',
};

export default App;