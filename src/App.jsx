import React from "react";
//** IMPORTO COMPONENTES */
import './assets/css/app.css';
import { Header } from "./components/Header";
import { Characters } from "./pages/Characters";
import { Episodes } from "./pages/Episodes";
import { Location } from "./pages/Location";
//** IMPORTO ROUTER DE REACT */
import { BrowserRouter, Routes, Route } from "react-router-dom";
//** TODA LA APP */
export function App() {
  return (
    <React.Fragment>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Characters />}></Route>
            <Route path="episode" element={<Episodes />}></Route>
            <Route path="location" element={<Location />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

