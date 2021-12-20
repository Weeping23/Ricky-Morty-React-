import React from "react";
import './assets/css/app.css'
import { Header } from "./components/header"
import { Main } from "./pages/main"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export function App() {

  return (
    <React.Fragment>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

