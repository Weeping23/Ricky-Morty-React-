
import React from "react";
import './assets/css/app.css'
import { Header } from "./components/header"
import { Main } from "./components/main"

export function App() {

  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <Main />
      </div>
      </React.Fragment>
      );
}

