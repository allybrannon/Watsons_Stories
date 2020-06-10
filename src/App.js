import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <MainPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
