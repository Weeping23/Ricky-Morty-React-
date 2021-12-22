import React from "react";
import './assets/css/app.css'
import { Header } from "./components/header"
import { Main } from "./pages/main"
import { Episodes } from "./pages/episodes";
import { BrowserRouter, Routes, Route } from "react-router-dom"

export function App() {

  return (
    <React.Fragment>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="episode" element={<Episodes />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

