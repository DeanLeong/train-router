import React from "react";
import Navbar from "./Navbar";
import Station from "./Station";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/union-square">
        <Station stationId="82bd" />
      </Route>
      <Route path="/times-square">
        <Station stationId="84ac" />
      </Route>
      <Route path="/atlantic-avenue">
        <Station stationId="d2c6" />
      </Route>
      <Route path="/fulton-street">
        <Station stationId="3cf6" />
      </Route>
    </div>
  );
}

export default App;
