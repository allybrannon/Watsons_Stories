import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/Watsons_Stories">
          <MainPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
